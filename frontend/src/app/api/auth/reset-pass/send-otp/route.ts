// app/api/auth/reset-pass/send-otp/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

/**
 * Dev/Prod helper:
 * - Generates a 6-digit OTP, stores in ephemeral in-memory OTP_STORE with expiry.
 * - Sends OTP by SMTP if SMTP_* env vars provided; otherwise logs OTP to server console.
 *
 * Environment (optional for emails):
 * - SMTP_HOST
 * - SMTP_PORT (number)
 * - SMTP_SECURE ("true" or "false")
 * - SMTP_USER
 * - SMTP_PASS
 * - FROM_EMAIL
 *
 * NOTE: This is a dev-friendly handler. In production:
 * - Use Redis or DB for OTP store with TTL.
 * - Rate-limit send-otp per email & per IP.
 * - Use an email provider (SendGrid/Resend/SES) with verified domain.
 */

type OtpEntry = { code: string; expiresAt: number };

const OTP_STORE = (global as any).__RESET_PASS_OTP_STORE__ || ((global as any).__RESET_PASS_OTP_STORE__ = new Map<string, OtpEntry>());

function genOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function trySendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const host = process.env.SMTP_HOST;
  if (!host) {
    // no SMTP configured — nothing to do
    return { sent: false, message: "No SMTP configured; OTP logged to console." };
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = (process.env.SMTP_SECURE || "false") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.FROM_EMAIL || user || `no-reply@localhost`;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });

  const info = await transporter.sendMail({ from, to, subject, html });
  return { sent: true, info };
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const normalized = String(email ?? "").trim().toLowerCase();
    if (!normalized || !/^\S+@\S+\.\S+$/.test(normalized)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Generate OTP
    const code = genOtp();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    OTP_STORE.set(normalized, { code, expiresAt });

    // Attempt to send via SMTP
    const subject = "Your password reset code";
    const html = `<p>Your password reset code is <strong>${code}</strong>. It expires in 5 minutes.</p>`;

    try {
      const result = await trySendEmail({ to: normalized, subject, html });
      if (result.sent) {
        console.log(`[reset-pass] Sent OTP email to ${normalized}`);
        return NextResponse.json({ ok: true, message: "OTP sent" }, { status: 200 });
      } else {
        // Fallback: log OTP so dev can use it
        console.log(`[reset-pass] OTP for ${normalized}: ${code} (logged; SMTP not configured)`);
        return NextResponse.json({ ok: true, message: "OTP generated (logged to server)", debug: result.message }, { status: 200 });
      }
    } catch (sendErr) {
      console.error("Error sending OTP email:", sendErr);
      // fallback to console log
      console.log(`[reset-pass] OTP for ${normalized}: ${code} (send failed)`);
      return NextResponse.json({ ok: true, message: "OTP generated (send failed; logged to server)" }, { status: 200 });
    }
  } catch (err) {
    console.error("send-otp error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
