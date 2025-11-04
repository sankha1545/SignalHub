// src/app/api/twilio/numbers/route.ts
import { NextResponse } from "next/server";

/**
 * Returns configured Twilio numbers for the welcome page.
 * If you want to fetch live numbers from Twilio, you can call Twilio API here.
 * For now return env-specified numbers or a simulated sandbox list.
 */
export async function GET() {
  const numbers: Array<any> = [];

  if (process.env.TWILIO_PHONE_NUMBER) {
    numbers.push({
      id: "primary",
      phone: process.env.TWILIO_PHONE_NUMBER,
      provider: "twilio",
      capabilities: { sms: true, whatsapp: !!process.env.TWILIO_WHATSAPP_NUMBER },
      purchased: true,
    });
  }

  // Add sandbox sample numbers
  numbers.push({
    id: "sandbox-1",
    phone: "+15005550006",
    provider: "twilio-sandbox",
    capabilities: { sms: true, whatsapp: false },
    purchased: false,
  });

  return NextResponse.json({ numbers });
}
