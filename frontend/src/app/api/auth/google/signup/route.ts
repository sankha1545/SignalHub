// app/api/auth/google/signup/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal POST handler to finalize Google signup.
 * Replace the mocked logic with your DB and validation.
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, sub, username, role } = body ?? {};

    // basic validation
    if (!email || !sub || !username || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Replace this mock with your DB user lookup / create logic
    // Example pseudocode:
    // const existing = await db.user.findUnique({ where: { email }});
    // if (existing) return NextResponse.json({ error: "User already exists" }, { status: 409 });
    // await db.user.create({ data: { email, name, username, role, provider: "google", providerId: sub } });

    // For development, just return success
    return NextResponse.json({ ok: true, message: "Account created (mock)" }, { status: 201 });
  } catch (err) {
    console.error("api/auth/google/signup error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
