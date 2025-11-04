// src/app/api/auth/google/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function buildCookieHeader(name: string, value: string, maxAge = SESSION_COOKIE_NAME ? SESSION_MAX_AGE : 0) {
  const secure = process.env.NODE_ENV === "production";
  const sameSite = secure ? "None" : "Lax";
  return [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    `Max-Age=${maxAge}`,
    "HttpOnly",
    `SameSite=${sameSite}`,
    secure ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

const DB_ROLE_VALUES = ["VIEWER", "EDITOR", "ADMIN"] as const;

function normalizeRequestedRoleForDb(raw?: string | null) {
  if (!raw) return "VIEWER";
  const v = String(raw).trim();
  if (DB_ROLE_VALUES.includes(v as any)) return v as any;
  const lower = v.toLowerCase();
  if (lower === "viewer") return "VIEWER";
  if (lower === "editor") return "EDITOR";
  if (lower === "admin") return "ADMIN";
  return "VIEWER";
}

async function adminExistsTx(tx?: typeof prisma) {
  const p = tx ?? prisma;
  try {
    const result = await p.$queryRaw<Array<{ count: number }>>`SELECT COUNT(*)::int AS count FROM "User" WHERE LOWER(role::text) = 'admin'`;
    return (result?.[0]?.count ?? 0) > 0;
  } catch (err) {
    console.error("[google/signup] adminExistsTx fallback error:", err);
    return true; // conservative
  }
}

/**
 * POST /api/auth/google/signup
 * Expects JSON body:
 * {
 *   email, name, sub (google id),
 *   role? (viewer|editor|admin),
 *   tokens?: { access_token, refresh_token, id_token, expires_at }
 * }
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({} as any))) as {
      email?: string;
      name?: string;
      sub?: string;
      role?: string;
      provider?: string;
      tokens?: {
        access_token?: string | null;
        refresh_token?: string | null;
        id_token?: string | null;
        expires_at?: number | null; // epoch ms or seconds depending on upstream
      };
    };

    const rawEmail = (body.email || "").toString();
    const email = rawEmail.trim().toLowerCase();
    const name = (body.name || "").toString().trim();
    const googleSub = (body.sub || "").toString().trim();
    const provider = (body.provider || "google").toString().trim().toLowerCase();

    if (!email || !name || !googleSub) {
      return jsonError("Missing required fields: email, name, sub (Google id).", 400);
    }
    if (provider !== "google") {
      return jsonError("Unsupported provider. This endpoint only supports 'google'.", 400);
    }

    const requestedRoleForDb = normalizeRequestedRoleForDb(body.role);

    // check existing user by email
    const existing = await prisma.user.findUnique({
      where: { email },
      select: { id: true, provider: true, passwordHash: true, role: true },
    });

    if (existing) {
      const providerField = (existing.provider ?? "").toString();
      const existingProviders = providerField.split(",").map((p) => p.trim().toLowerCase()).filter(Boolean);
      const isSameProvider = existingProviders.includes("google");
      const hasCredentials =
        existingProviders.includes("credentials") || existingProviders.includes("local") || !!existing.passwordHash;

      if (isSameProvider) {
        return jsonError("User already exists with this Google account. Please sign in.", 409);
      }
      if (hasCredentials) {
        return jsonError(
          "An account with this email already exists. Please sign in with email/password, then link your Google account from settings.",
          409
        );
      }
      if (!isSameProvider && !hasCredentials) {
        return jsonError("An account exists with this email under a different provider. Please sign in with that provider.", 409);
      }
    }

    // Prepare optional token fields to store on account (if provided)
    const tokens = body.tokens ?? {};
    const access_token = tokens.access_token ?? undefined;
    const refresh_token = tokens.refresh_token ?? undefined;
    const id_token = tokens.id_token ?? undefined;
    // Normalize expires_at to seconds (Prisma commonly stores seconds)
    let expires_at: number | undefined = undefined;
    if (tokens.expires_at) {
      const n = Number(tokens.expires_at);
      // if it's in ms ( > 1e12 ), convert to seconds
      expires_at = n > 1e12 ? Math.floor(n / 1000) : Math.floor(n);
    }

    // Admin path: atomic check + create
    if (requestedRoleForDb === "ADMIN") {
      try {
        const created = await prisma.$transaction(async (tx) => {
          const exists = await adminExistsTx(tx);
          if (exists) throw { code: "ADMIN_EXISTS" };

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

          // create account link — include required `type` and optional token fields
          await tx.account.create({
            data: {
              provider: "google",
              providerAccountId: googleSub,
              type: "oauth", // required enum / string — common convention
              access_token,
              refresh_token,
              expires_at,
              id_token,
              userId: user.id,
            } as any, // cast as any if TypeScript schema differs in your project
          });

          return user;
        });

        const token = signToken({ id: created.id, email: created.email, role: created.role }, "7d");
        const res = NextResponse.json({ ok: true, user: created });
        try {
          res.cookies.set(SESSION_COOKIE_NAME, token, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: SESSION_MAX_AGE,
          } as any);
        } catch {
          res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
        }
        return res;
      } catch (err: any) {
        if (err && err.code === "ADMIN_EXISTS") {
          return jsonError("An admin account already exists. Cannot create another admin.", 409);
        }
        console.error("[google/signup] admin transaction error:", err);
        return jsonError("Server error during signup.", 500);
      }
    }

    // Non-admin path: create user + account in transaction
    const created = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          name,
          passwordHash: null,
          role: requestedRoleForDb,
          emailVerified: true,
          provider: "google",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      await tx.account.create({
        data: {
          provider: "google",
          providerAccountId: googleSub,
          type: "oauth",
          access_token,
          refresh_token,
          expires_at,
          id_token,
          userId: user.id,
        } as any,
      });

      return user;
    });

    const token = signToken({ id: created.id, email: created.email, role: created.role }, "7d");
    const res = NextResponse.json({ ok: true, user: created });
    try {
      res.cookies.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: SESSION_MAX_AGE,
      } as any);
    } catch {
      res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
    }
    return res;
  } catch (err: any) {
    if (err && err.code === "ADMIN_EXISTS") {
      return jsonError("An admin account already exists.", 409);
    }
    console.error("[google/signup] signup error:", err);
    return jsonError("Internal server error.", 500);
  }
}
