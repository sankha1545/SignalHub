// src/lib/mail.ts
import nodemailer, { Transporter } from "nodemailer";

const host = process.env.SMTP_HOST || "localhost";
const port = Number(process.env.SMTP_PORT || 587);
const user = process.env.SMTP_USER || "";
const pass = process.env.SMTP_PASS || "";
const from = process.env.SMTP_FROM || (user || `no-reply@localhost`);

function createTransporter(): Transporter {
  const secure = port === 465; // implicit TLS on 465
  const auth = user ? { user, pass } : undefined;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth,
    // During development you can allow self-signed certs by setting rejectUnauthorized false.
    // REMOVE or set to true in production.
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
    },
    // Optional: increase connection timeout for slow relays
    connectionTimeout: 30_000,
  });

  return transporter;
}

export const transporter = createTransporter();

/**
 * Verify transporter connection/auth.
 * Call this at startup or before sending test messages to get clear errors.
 */
export async function verifyTransporter() {
  try {
    const ok = await transporter.verify();
    console.log("[mail] transporter verified:", ok);
    return ok;
  } catch (err) {
    console.error("[mail] transporter verification failed:", err);
    throw err;
  }
}

/**
 * Send OTP email.
 * Throws if sending fails (so route can return 500).
 */
export async function sendOTPEmail(to: string, code: string) {
  console.log("[mail] sendOTPEmail ->", { to, host, port, user: !!user });

  if (!to) throw new Error("Missing recipient address");

  // ensure from is a valid value
  const envelopeFrom = from || (user ? user : "no-reply@localhost");

  const html = `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2>Your OTP Code</h2>
      <p>Use the following 6-digit code to complete your signup:</p>
      <p style="font-size: 1.5rem; letter-spacing: 6px;"><strong>${code}</strong></p>
      <p>This code expires in 60 seconds.</p>
    </div>
  `;

  try {
    // Verify transporter before sending (gives clearer auth/connection errors)
    await verifyTransporter();

    const info = await transporter.sendMail({
      from: envelopeFrom,
      to,
      subject: "Your verification code",
      html,
      text: `Your OTP code is ${code} (valid 60 seconds)`,
    });

    console.log("[mail] sendMail success:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    return info;
  } catch (err) {
    console.error("[mail] sendMail error:", err);
    throw err;
  }
}
