// app/api/auth/forgot/reset/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Mock reset:
 * - Accepts { email, password }
 * - Validate inputs
 * - In production:
 *   - Verify server-side that the user has a valid verified OTP or short-lived reset token
 *   - Hash the password (bcrypt / argon2) and update DB
 *   - Record last_password_change timestamp (DB) to enforce 24h lockout (server-side)
 */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!password || password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    // TODO: verify OTP verification from previous step (server-side).
    // TODO: lookup user in DB. If not found, return 404 or generic success based on UX policy.
    // TODO: hash password and update DB, store last_password_change timestamp.

    console.log(`[DEV] Password for ${email} changed (mock).`);

    return NextResponse.json({ ok: true, message: "Password changed (dev-mode)" }, { status: 200 });
  } catch (err) {
    console.error("reset error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
