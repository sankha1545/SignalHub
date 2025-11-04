// src/lib/providers/twilio.ts
import Twilio from "twilio";

const SID = process.env.TWILIO_SID ?? "";
const AUTH = process.env.TWILIO_AUTH_TOKEN ?? "";
const FROM = process.env.TWILIO_PHONE_NUMBER ?? "";
const WA_FROM = process.env.TWILIO_WHATSAPP_NUMBER ?? "";

const client = SID && AUTH ? Twilio(SID, AUTH) : null;

export async function sendSms({ to, body }: { to: string; body: string }) {
  if (!client) throw new Error("Twilio not configured");
  const msg = await client.messages.create({ body, from: FROM, to });
  return { sid: msg.sid, status: msg.status };
}

export async function sendWhatsApp({ to, body }: { to: string; body: string }) {
  if (!client) throw new Error("Twilio not configured");
  const msg = await client.messages.create({
    body,
    from: `whatsapp:${WA_FROM}`,
    to: `whatsapp:${to.replace(/^whatsapp:/, "")}`,
  });
  return { sid: msg.sid, status: msg.status };
}

/**
 * Validate Twilio request signature if you choose to secure webhooks.
 * For simplicity this helper returns true if no auth configured.
 * If you want to validate, use Twilio.validateRequest with raw body + headers.
 */
export function validateTwilioRequest(/* req raw body & headers */) {
  // implement signature check if required
  return true;
}
