// app/api/auth/reset-pass/verify-otp/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const OTP_STORE = (global as any).__RESET_PASS_OTP_STORE__;

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();
    const normalized = String(email ?? "").trim().toLowerCase();
    const codestr = String(code ?? "").trim();

    if (!normalized || !codestr) {
      return NextResponse.json({ error: "Missing email or code" }, { status: 400 });
    }

    const entry = OTP_STORE?.get(normalized);
    if (!entry) return NextResponse.json({ error: "No OTP found" }, { status: 404 });

    if (Date.now() > entry.expiresAt) {
      OTP_STORE.delete(normalized);
      return NextResponse.json({ error: "OTP expired" }, { status: 410 });
    }

    if (entry.code !== codestr) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });

    // single-use: remove OTP
    OTP_STORE.delete(normalized);

    return NextResponse.json({ ok: true, message: "OTP verified" }, { status: 200 });
  } catch (err) {
    console.error("verify-otp error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
