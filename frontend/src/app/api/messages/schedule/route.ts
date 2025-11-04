// src/app/api/messages/schedule/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, channel, body: messageBody, sendAt, contactId, threadId, metadata } = body ?? {};

    if (!to || !channel || !messageBody || !sendAt) {
      return NextResponse.json({ error: "to, channel, body and sendAt are required for scheduled messages" }, { status: 400 });
    }

    const sendDate = new Date(sendAt);
    if (Number.isNaN(sendDate.getTime())) return NextResponse.json({ error: "invalid sendAt" }, { status: 400 });

    const msg = await prisma.message.create({
      data: {
        to,
        from: "system",
        channel,
        body: messageBody,
        contactId: contactId ?? null,
        threadId: threadId ?? null,
        status: "SCHEDULED",
        sendAt: sendDate,
        metadata: metadata ?? {},
        direction: "OUTBOUND",
      },
    });

    // scheduler worker (outside scope) must poll messages with status=SCHEDULED & sendAt <= now
    return NextResponse.json({ message: msg });
  } catch (err: any) {
    console.error("POST /api/messages/schedule error:", err);
    return NextResponse.json({ error: err?.message ?? "internal error" }, { status: 500 });
  }
}
