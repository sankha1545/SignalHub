// src/app/api/webhooks/twilio/route.ts
import { NextResponse } from "next/server";
import { createInboundMessage } from "@/lib/messageService";
import {prisma} from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    // Twilio sends form-encoded body
    const text = await req.text();
    const params = Object.fromEntries(new URLSearchParams(text) as any);

    const from = params.From ?? params.from;
    const to = params.To ?? params.to;
    const body = params.Body ?? params.body ?? "";
    const sid = params.MessageSid ?? params.MessageSid ?? params.SmsSid;

    if (!from || !to) {
      return NextResponse.json({ error: "invalid webhook payload" }, { status: 400 });
    }

    // If this is a delivery/status callback, update message status (MessageStatus)
    // Twilio status callbacks include MessageStatus param (delivered, failed, etc.)
    if (params.MessageStatus && params.MessageSid) {
      const status = (params.MessageStatus as string).toLowerCase();
      const mapped = status === "delivered" ? "DELIVERED" : status === "failed" ? "FAILED" : "SENT";
      try {
        await prisma.message.updateMany({
          where: { providerMessageId: params.MessageSid },
          data: { status: mapped as any, deliveredAt: mapped === "DELIVERED" ? new Date() : undefined },
        });
      } catch (e) {
        console.warn("twilio status update failed", e);
      }
      return NextResponse.json({ ok: true });
    }

    // Normal inbound message
    const m = await createInboundMessage({ from, to, channel: to?.startsWith("whatsapp:") ? "WHATSAPP" : "SMS", body, providerMessageId: sid });

    return NextResponse.json({ ok: true, messageId: m.id });
  } catch (err: any) {
    console.error("POST /api/webhooks/twilio error:", err);
    return NextResponse.json({ error: err?.message ?? "internal error" }, { status: 500 });
  }
}
