// src/lib/providers/email.ts
import type Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer";

const RESEND_KEY = process.env.RESEND_API_KEY ?? "";

export async function sendEmail({ to, subject, html, text, from }: { to: string; subject?: string; html?: string; text?: string; from?: string }) {
  // If RESEND_API_KEY present you can use Resend's API (not included to avoid extra dep).
  // Fallback to SMTP using nodemailer.
  const fromAddr = from ?? `SignalHub <${process.env.SMTP_USER ?? "noreply@example.com"}>`;

  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const info = (await transporter.sendMail({
      from: fromAddr,
      to,
      subject: subject ?? "Message from SignalHub",
      text,
      html,
    })) as Mail;
    // nodemailer returns messageId
    // messageId may be like <...>
    return { id: (info as any).messageId ?? null, status: "sent" };
  }

  // If no SMTP configured, throw
  throw new Error("No email provider configured (set SMTP_HOST or RESEND_API_KEY)");
}
