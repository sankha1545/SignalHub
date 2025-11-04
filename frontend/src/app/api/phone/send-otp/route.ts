// app/api/phone/send-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const OTP_LENGTH = 4;

function genOtp(len = OTP_LENGTH) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10).toString();
  return s;
}

async function sendSms(phone: string, text: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM || process.env.TWILIO_PHONE_NUMBER;
  if (sid && token && from) {
    // lightweight Twilio fallback (no twilio package required)
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
    console.log(`[DEV SMS] To: ${phone} — ${text}`);
    return true;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const phone = (body?.phone ?? "").toString();

    if (!phone) return NextResponse.json({ error: "phone required" }, { status: 400 });
    if (!phone.startsWith("+") || phone.length < 6) {
      return NextResponse.json({ error: "phone must be E.164 (e.g. +919876543210)" }, { status: 400 });
    }

    const otp = genOtp();

    // persist OTP record
    await prisma.phoneOtp.create({
      data: {
        phone,
        otp,
        used: false,
      },
    });

    // fire SMS (best-effort)
    try {
      await sendSms(phone, `Your verification code is ${otp}. It will expire in 5 minutes.`);
    } catch (err) {
      console.error("Failed to send SMS:", err);
      // keep record but tell client
      return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 });
    }

    // For development/testing we return debugOtp in non-production only.
    const debugOtp = process.env.NODE_ENV === "production" ? undefined : otp;
    return NextResponse.json({ ok: true, message: "OTP sent", debugOtp });
  } catch (err) {
    console.error("send-otp error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
