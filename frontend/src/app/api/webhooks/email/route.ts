// src/app/api/webhooks/email/route.ts
import { NextResponse } from "next/server";
import { createInboundMessage } from "@/lib/messageService";

/**
 * Supports Resend-style POST where body has {to, from, subject, html, text}
 * Adapt to whichever email provider you choose.
 */
export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    if (!json) return NextResponse.json({ error: "no payload" }, { status: 400 });

    const from = Array.isArray(json.from) ? json.from[0]?.email ?? json.from[0] : json.from?.email ?? json.from;
    const to = Array.isArray(json.to) ? json.to[0]?.email ?? json.to[0] : json.to?.email ?? json.to;
    const body = json.text ?? json.html ?? json.body ?? "";

    if (!from || !to) return NextResponse.json({ error: "missing from/to" }, { status: 400 });

    const m = await createInboundMessage({ from, to, channel: "EMAIL", body, providerMessageId: json.messageId ?? null });

    return NextResponse.json({ ok: true, id: m.id });
  } catch (err: any) {
    console.error("POST /api/webhooks/email error:", err);
    return NextResponse.json({ error: err?.message ?? "internal error" }, { status: 500 });
  }
}
