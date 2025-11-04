// src/app/api/twilio/buy/route.ts
import { NextResponse } from "next/server";

/**
 * Simulate buying a number — in production call Twilio's API to purchase numbers.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = body ?? {};
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
    // For demo: pretend success
    // In real app: call Twilio's IncomingPhoneNumbers API to purchase
    return NextResponse.json({ ok: true, bought: id });
  } catch (err: any) {
    console.error("POST /api/twilio/buy error:", err);
    return NextResponse.json({ error: err?.message ?? "internal error" }, { status: 500 });
  }
}
