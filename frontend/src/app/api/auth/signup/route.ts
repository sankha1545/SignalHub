// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";

type ReqBody = {
  email?: string;
  name?: string;
  password?: string;
  // client-sent role will be normalized server-side
  role?: string;
  provider?: "credentials" | "google" | string;
};

/** Env-aware cookie setter helper (uses res.cookies.set when available, header fallback otherwise) */
function setSessionCookie(res: NextResponse, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd;
  const maxAge = 7 * 24 * 60 * 60; // 7 days

  try {
    res.cookies.set({
      name: "session",
      value: token,
      httpOnly: true,
      secure,
      sameSite: sameSite as "lax" | "none" | "strict",
      path: "/",
      maxAge,
    });
  } catch {
    // header fallback for runtimes that expect a Set-Cookie header string
    const parts = [
      `session=${encodeURIComponent(token)}`,
      "Path=/",
      `Max-Age=${maxAge}`,
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", parts.join("; "));
  }
}

/** Normalize a client-provided role into the Prisma enum value (uppercase) */
function normalizeRoleForDb(raw?: string | null) {
  if (!raw) return "VIEWER";
  const v = String(raw).trim();
  if (["VIEWER", "EDITOR", "ADMIN"].includes(v)) return v;
  const lower = v.toLowerCase();
  if (lower === "viewer") return "VIEWER";
  if (lower === "editor") return "EDITOR";
  if (lower === "admin") return "ADMIN";
  return "VIEWER";
}

/** Helper: check whether any admin exists (uses provided tx if present) */
async function adminExistsTx(tx?: typeof prisma) {
  const p = tx ?? prisma;
  // Use a raw SQL check to avoid enum validation conflicts; returns boolean
  try {
    const result = await p.$queryRaw<Array<{ count: number }>>`SELECT COUNT(*)::int AS count FROM "User" WHERE LOWER(role::text) = 'admin'`;
    return (result?.[0]?.count ?? 0) > 0;
  } catch (err) {
    console.error("[signup] adminExistsTx fallback query error:", err);
    // conservative default: assume admin exists to avoid accidental duplicate admin creation
    return true;
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;
    const rawEmail = body.email;
    const name = (body.name || "").toString().trim();
    const password = body.password;
    const provider = (body.provider || "credentials").toString();

    const email = (rawEmail || "").toString().trim().toLowerCase();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Missing required fields: name and email are required." },
        { status: 400 }
      );
    }

    if (!["credentials", "google"].includes(provider)) {
      return NextResponse.json(
        { error: "Unsupported provider. Use 'credentials' or 'google'." },
        { status: 400 }
      );
    }

    // Normalize requested role (client may send viewer/editor/admin in any case)
    const requestedRoleRaw = (body.role || "").toString().trim();
    const requestedRoleForDb = normalizeRoleForDb(requestedRoleRaw); // e.g. "VIEWER"|"EDITOR"|"ADMIN"

    // If user already exists -> conflict (for OAuth flows you may want to link instead)
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 409 }
      );
    }

    // ---------- Credentials signup (email + password + OTP verified) ----------
    if (provider === "credentials") {
      if (!password) {
        return NextResponse.json(
          { error: "Password required for credentials signup" },
          { status: 400 }
        );
      }

      // Check most recent OTP for this email
      const otp = await prisma.emailOtp.findFirst({
        where: { email },
        orderBy: { createdAt: "desc" },
      });

      if (!otp || !otp.verified) {
        return NextResponse.json(
          { error: "Email not verified with OTP" },
          { status: 400 }
        );
      }

      const passwordHash = await hashPassword(password);

      // If requested role is ADMIN -> perform atomic check+create using a transaction
      if (requestedRoleForDb === "ADMIN") {
        try {
          const result = await prisma.$transaction(async (tx) => {
            const exists = await adminExistsTx(tx);
            if (exists) {
              // signal admin exists by throwing a sentinel
              throw { code: "ADMIN_EXISTS" };
            }
            const user = await tx.user.create({
              data: {
                email,
                name,
                passwordHash,
                role: "ADMIN",
                emailVerified: true,
                provider: "credentials",
              },
              select: { id: true, email: true, name: true, role: true, provider: true },
            });
            // cleanup OTPs inside same tx if desired (optional)
            await tx.emailOtp.deleteMany({ where: { email } });
            return user;
          });

          const token = signToken({ id: result.id, email: result.email, role: result.role }, "7d");
          const res = NextResponse.json({ ok: true, user: result });
          setSessionCookie(res, token);
          return res;
        } catch (err) {
          if (err && err.code === "ADMIN_EXISTS") {
            return NextResponse.json({ error: "An admin account already exists" }, { status: 409 });
          }
          console.error("signup (credentials/admin) transaction error:", err);
          return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
      }

      // Non-admin create path (viewer/editor)
      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash,
          role: requestedRoleForDb, // 'VIEWER' or 'EDITOR'
          emailVerified: true,
          provider: "credentials",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      // Remove OTP records for cleanup
      await prisma.emailOtp.deleteMany({ where: { email } });

      // Sign token with id, email, role
      const token = signToken({ id: user.id, email: user.email, role: user.role }, "7d");

      const res = NextResponse.json({ ok: true, user });

      // set cookie in env-aware way
      setSessionCookie(res, token);

      return res;
    }

    // ---------- Google OAuth signup ----------
    if (provider === "google") {
      // For OAuth you typically verify the Google token on the server before creating.
      // Here we assume upstream verification was done and we just create the account.

      // If requested role is ADMIN -> atomic check+create
      if (requestedRoleForDb === "ADMIN") {
        try {
          const result = await prisma.$transaction(async (tx) => {
            const exists = await adminExistsTx(tx);
            if (exists) {
              throw { code: "ADMIN_EXISTS" };
            }
            const user = await tx.user.create({
              data: {
                email,
                name,
                passwordHash: null,
                role: "ADMIN",
                emailVerified: true,
                provider: "google",
              },
              select: { id: true, email: true, name: true, role: true, provider: true },
            });
            await tx.account.create({
              data: {
                provider: "google",
                providerAccountId: body?.role ? String(body.role) : String(body.email), // placeholder if needed
                userId: user.id,
              },
            }).catch(() => {}); // optional: ignore if account table not used here
            return user;
          });

          const token = signToken({ id: result.id, email: result.email, role: result.role }, "7d");
          const res = NextResponse.json({ ok: true, user: result });
          setSessionCookie(res, token);
          return res;
        } catch (err) {
          if (err && err.code === "ADMIN_EXISTS") {
            return NextResponse.json({ error: "An admin account already exists" }, { status: 409 });
          }
          console.error("google signup error (admin path):", err);
          return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
      }

      // Non-admin google create path
      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash: null,
          role: requestedRoleForDb, // VIEWER or EDITOR
          emailVerified: true,
          provider: "google",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      const token = signToken({ id: user.id, email: user.email, role: user.role }, "7d");

      const res = NextResponse.json({ ok: true, user });
      setSessionCookie(res, token);
      return res;
    }

    return NextResponse.json({ error: "Unsupported provider" }, { status: 400 });
  } catch (err: any) {
    // special-case thrown admin-exists signal from transaction
    if (err && err.code === "ADMIN_EXISTS") {
      return NextResponse.json({ error: "An admin account already exists" }, { status: 409 });
    }
    console.error("signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
