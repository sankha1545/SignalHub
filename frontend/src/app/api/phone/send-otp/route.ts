// app/api/phone/send-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const OTP_TTL_MS = 5 * 60 * 1000; // 5 minutes
const OTP_LENGTH = 4;

function genOtp(len = OTP_LENGTH) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10).toString();
  return s;
}

// send via Twilio if configured, otherwise console.log for dev
async function sendSms(phone: string, text: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  if (sid && token && from) {
    // only import twilio when configured (avoid requiring package if you're not using)
    // make sure 'twilio' package is installed if you plan to use it.
    // fallback: simple fetch to Twilio REST API using Basic auth
    const resp = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: from,
        To: phone,
        Body: text,
      }),
    });
    if (!resp.ok) {
      const txt = await resp.text();
      throw new Error("Twilio error: " + txt);
    }
    return true;
  } else {
    // dev fallback
    console.log(`[DEV SMS] To: ${phone} — OTP: ${text}`);
    return true;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { phone } = body as { phone?: string };

    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "phone required" }, { status: 400 });
    }

    // basic validation: E.164 starts with +
    if (!phone.startsWith("+") || phone.length < 6) {
      return NextResponse.json({ error: "phone must be E.164 (e.g. +919876543210)" }, { status: 400 });
    }

    // generate OTP
    const otp = genOtp();

    // Create OTP record
    await prisma.phoneOtp.create({
      data: {
        phone,
        otp,
        used: false,
      },
    });

    // send SMS (async)
    try {
      await sendSms(phone, `Your verification code is ${otp}. It will expire in 5 minutes.`);
    } catch (err) {
      console.error("Failed to send SMS:", err);
      // do not reveal Twilio errors to client
      return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "OTP sent" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
