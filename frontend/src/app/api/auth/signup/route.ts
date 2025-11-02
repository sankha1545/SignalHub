// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";

type ReqBody = {
  email?: string;
  name?: string;
  password?: string;
  role?: "viewer" | "editor" | "admin" | string;
  provider?: "credentials" | "google";
};

function buildCookie(token: string) {
  const maxAge = 7 * 24 * 60 * 60; // 7 days
  const secure = process.env.NODE_ENV === "production";
  return `token=${token}; Path=/; HttpOnly; SameSite=Strict; ${
    secure ? "Secure; " : ""
  }Max-Age=${maxAge}`;
}

export async function POST(req: Request) {
  try {
    const { email: rawEmail, name, password, role, provider } =
      (await req.json()) as ReqBody;

    const email = (rawEmail || "").toString().trim().toLowerCase();

    if (!email || !name || !provider) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 409 }
      );
    }

    // 🧩 Credential-based signup (requires password + OTP)
    if (provider === "credentials") {
      if (!password) {
        return NextResponse.json(
          { error: "Password required for credentials signup" },
          { status: 400 }
        );
      }

      // Check OTP verification
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
          role: (role as any) || "viewer",
          emailVerified: true,
          provider: "credentials",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      await prisma.emailOtp.deleteMany({ where: { email } });

      const token = signToken({ userId: user.id, email: user.email }, "7d");
      const res = NextResponse.json({ ok: true, user });
      res.headers.set("Set-Cookie", buildCookie(token));
      return res;
    }

    // 🧩 Google OAuth signup
    else if (provider === "google") {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          passwordHash: null,
          role: (role as any) || "viewer",
          emailVerified: true,
          provider: "google",
        },
        select: { id: true, email: true, name: true, role: true, provider: true },
      });

      const token = signToken({ userId: user.id, email: user.email }, "7d");
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
