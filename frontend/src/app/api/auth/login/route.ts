// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signToken } from "@/lib/auth";

/**
 * Builds a secure cookie string for the JWT token.
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

export async function POST(req: Request) {
  try {
    const { email: rawEmail, password } = await req.json();
    const email = (rawEmail || "").toString().trim().toLowerCase();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    // 1) Find the user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        passwordHash: true,
        role: true,
        provider: true,
      },
    });

    // 2) Validate existence
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 3) Disallow credentials login for OAuth-only users
    if (user.provider !== "credentials") {
      return NextResponse.json(
        {
          error: `This account was created using ${user.provider}. Please log in with ${user.provider} instead.`,
        },
        { status: 403 }
      );
    }

    // 4) Ensure password exists
    if (!user.passwordHash) {
      return NextResponse.json({ error: "Password not set for this account" }, { status: 401 });
    }

    // 5) Verify password
    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 6) Sign JWT that includes role for RBAC checks
    const token = signToken(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      "7d"
    );

    // 7) Record login activity (non-blocking; failures shouldn't break login)
    (async () => {
      try {
        await prisma.activityLog.create({
          data: {
            userId: user.id,
            type: "LOGIN",
            meta: {
              provider: "credentials",
              ts: new Date().toISOString(),
            },
          },
        });
      } catch (err) {
        // log but don't fail login
        console.error("Failed to record login activity:", err);
      }
    })();

    // 8) Respond and set cookie
    const res = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        provider: user.provider,
      },
    });

    res.headers.set("Set-Cookie", buildCookie(token));
    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
