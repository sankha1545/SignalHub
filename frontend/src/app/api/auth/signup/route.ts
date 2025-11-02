// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";

/**
 * Build a secure cookie string for the JWT token.
 */
function buildCookie(token: string) {
  const maxAge = 7 * 24 * 60 * 60; // 7 days
  const secure = process.env.NODE_ENV === "production";
  return [
    `token=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
    `Max-Age=${maxAge}`,
    secure ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

type ReqBody = {
  email?: string;
  name?: string;
  password?: string;
  // client-sent role will be ignored for security; admin changes role server-side
  role?: string;
  provider?: "credentials" | "google" | string;
};

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

    // Prevent client from assigning roles on signup — default to VIEWER.
    const DEFAULT_ROLE = "VIEWER";

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

      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash,
          role: DEFAULT_ROLE,
          emailVerified: true,
          provider: "credentials",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      // Remove OTP records for cleanup
      await prisma.emailOtp.deleteMany({ where: { email } });

      // Sign token with id, email, role
      const token = signToken(
        { id: user.id, email: user.email, role: user.role },
        "7d"
      );

      const res = NextResponse.json({ ok: true, user });
      res.headers.set("Set-Cookie", buildCookie(token));
      return res;
    }

    // ---------- Google OAuth signup ----------
    if (provider === "google") {
      // For OAuth you typically verify the Google token on the server before creating.
      // Here we assume upstream verification was done and we just create the account.
      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash: null,
          role: DEFAULT_ROLE,
          emailVerified: true,
          provider: "google",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      const token = signToken(
        { id: user.id, email: user.email, role: user.role },
        "7d"
      );

      const res = NextResponse.json({ ok: true, user });
      res.headers.set("Set-Cookie", buildCookie(token));
      return res;
    }

    return NextResponse.json({ error: "Unsupported provider" }, { status: 400 });
  } catch (err) {
    console.error("signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
