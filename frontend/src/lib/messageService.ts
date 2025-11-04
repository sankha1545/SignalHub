// src/lib/messageService.ts
import prisma from "./prisma";
import { sendSms, sendWhatsApp } from "./providers/twilio";
import { sendEmail } from "./providers/email";

export async function createOutboundMessage(params: {
  to: string;
  from?: string;
  channel: "SMS" | "WHATSAPP" | "EMAIL";
  body: string;
  contactId?: string | null;
  threadId?: string | null;
  metadata?: any;
  sendAt?: Date | null;
}) {
  const { to, from = "system", channel, body, contactId, threadId, metadata, sendAt } = params;

  const msg = await prisma.message.create({
    data: {
      to,
      from,
      channel,
      body,
      contactId: contactId ?? null,
      threadId: threadId ?? null,
      direction: "OUTBOUND",
      status: sendAt ? "SCHEDULED" : "QUEUED",
      sendAt: sendAt ?? null,
      metadata: metadata ?? {},
    },
  });

  // if scheduled, return and let scheduler pick up later
  if (sendAt) return msg;

  // try immediate delivery (no queue for now)
  try {
    let providerResult: { sid?: string | null; status?: string } = {};
    if (channel === "SMS") {
      providerResult = await sendSms({ to, body });
    } else if (channel === "WHATSAPP") {
      providerResult = await sendWhatsApp({ to, body });
    } else if (channel === "EMAIL") {
      const r = await sendEmail({ to, subject: "Message from SignalHub", html: `<div>${body}</div>`, text: body });
      providerResult = { sid: r.id ?? null, status: (r as any).status ?? "sent" };
    }

    const updated = await prisma.message.update({
      where: { id: msg.id },
      data: {
        providerMessageId: providerResult.sid ?? providerResult.sid ?? null,
        status: providerResult.status === "failed" ? "FAILED" : "SENT",
        sentAt: new Date(),
      },
    });

    return updated;
  } catch (err) {
    // mark failed
    await prisma.message.update({
      where: { id: msg.id },
      data: { status: "FAILED" },
    });
    throw err;
  }
}

/** For inbound webhooks — create a message and thread/contact if necessary */
export async function createInboundMessage(params: { from: string; to: string; channel: "SMS" | "WHATSAPP" | "EMAIL"; body: string; providerMessageId?: string }) {
  const { from, to, channel, body, providerMessageId } = params;

  // find contact by phone/email
  const contact = await prisma.contact.findFirst({
    where: channel === "EMAIL" ? { email: from } : { phone: from },
  });

  // find or create thread (simple: a thread linked to contact)
  let threadId: string | null = null;
  if (contact) {
    const thread = await prisma.thread.findFirst({ where: { contactId: contact.id } });
    if (thread) threadId = thread.id;
    else {
      const t = await prisma.thread.create({ data: { contactId: contact.id } });
      threadId = t.id;
    }
  } else {
    // optional: create a lightweight contact for unknown inbound
    const newContact = await prisma.contact.create({
      data: { name: from, phone: channel !== "EMAIL" ? from : null, email: channel === "EMAIL" ? from : null },
    });
    const t = await prisma.thread.create({ data: { contactId: newContact.id } });
    threadId = t.id;
  }

  const msg = await prisma.message.create({
    data: {
      threadId,
      contactId: contact?.id ?? undefined,
      from,
      to,
      channel,
      body,
      direction: "INBOUND",
      status: "DELIVERED",
      providerMessageId: providerMessageId ?? null,
      sentAt: new Date(),
      deliveredAt: new Date(),
    },
  });

  return msg;
}
