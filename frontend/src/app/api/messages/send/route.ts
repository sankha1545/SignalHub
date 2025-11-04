// frontend/src/app/api/messages/send/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendSms, sendWhatsApp } from "@/lib/providers/twilio";
import { sendEmail } from "@/lib/providers/email";



const ALLOWED_CHANNELS = ["SMS", "WHATSAPP", "EMAIL", "TWITTER", "MESSENGER"] as const;
type Channel = typeof ALLOWED_CHANNELS[number];

const AUTO_CREATE_USERS = process.env.AUTO_CREATE_USERS === "true";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";

function devLog(...args: any[]) {
  if (process.env.NODE_ENV !== "production") console.debug("[/api/messages/send]", ...args);
}

function tryDecodeToken(token: string | null) {
  if (!token) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const jwt = require("jsonwebtoken");
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (verifyErr) {
      devLog("JWT verify failed:", verifyErr?.message ?? verifyErr);
      try {
        return jwt.decode(token);
      } catch (decodeErr) {
        devLog("jwt.decode failed:", decodeErr?.message ?? decodeErr);
        return null;
      }
    }
  } catch (e) {
    devLog("jsonwebtoken require failed:", e?.message ?? e);
    return null;
  }
}

function extractLikelyCookieToken(cookieHeader: string | null) {
  if (!cookieHeader) return null;
  const names = [
    "token",
    "next-auth.session-token",
    "__Secure-next-auth.session-token",
    "session",
    "sessionToken",
  ];
  for (const name of names) {
    const found = cookieHeader.split(";").map((s) => s.trim()).find((s) => s.startsWith(`${name}=`));
    if (found) {
      const eq = found.indexOf("=");
      if (eq === -1) continue;
      return decodeURIComponent(found.slice(eq + 1));
    }
  }
  return null;
}

function normalizePhone(p?: string | null) {
  if (!p) return null;
  const trimmed = p.trim();
  return trimmed.replace(/[()\s.-]/g, "");
}

async function tryGetNextAuthSessionUserId() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nextAuth = require("next-auth");
    if (nextAuth && typeof nextAuth.getServerSession === "function") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const authModule = require("@/lib/auth");
        const authOptions = authModule?.authOptions ?? authModule?.default ?? null;
        if (authOptions) {
          const session = await nextAuth.getServerSession(authOptions);
          if (session?.user) {
            return { id: session.user.id ?? null, email: session.user.email ?? null };
          }
        } else {
          devLog("authOptions not found for next-auth in local import.");
        }
      } catch (e) {
        devLog("getServerSession attempt failed:", e?.message ?? e);
      }
    }
  } catch (e) {
    devLog("next-auth not present or failed to import:", e?.message ?? e);
  }
  return { id: null, email: null };
}

/** Append failedReason+provider to message.metadata (best-effort) */
async function appendFailedReasonToMessage(messageId: string, provider: string, reason: string) {
  try {
    const existing = await prisma.message.findUnique({ where: { id: messageId } });
    const newMeta = { ...(existing?.metadata ?? {}), failedReason: reason, provider };
    await prisma.message.update({ where: { id: messageId }, data: { metadata: newMeta as any } });
  } catch (e) {
    devLog("appendFailedReasonToMessage failed:", e);
  }
}

export async function POST(req: Request) {
  devLog("start POST");

  // parse JSON body
  let body: any = null;
  try {
    body = await req.json();
  } catch (err) {
    devLog("invalid json body", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const toRaw = typeof body.to === "string" ? body.to.trim() : null;
  const channelRaw = typeof body.channel === "string" ? body.channel.trim().toUpperCase() : null;
  const messageBody = typeof body.body === "string" ? body.body.trim() : null;
  const contactIdProvided = typeof body.contactId === "string" ? body.contactId : undefined;
  const sendAtRaw = body.sendAt ? new Date(body.sendAt) : null;

  if (!toRaw || !channelRaw || !messageBody) {
    return NextResponse.json({ error: "Missing required fields (to, channel, body)" }, { status: 400 });
  }

  if (!ALLOWED_CHANNELS.includes(channelRaw as Channel)) {
    return NextResponse.json({ error: "Unsupported channel" }, { status: 400 });
  }
  const channel = channelRaw as Channel;
  const phoneNormalized = normalizePhone(toRaw);

  // ---------------------------
  // Resolve identity (NextAuth session -> cookie token -> Authorization Bearer)
  // ---------------------------
  let resolvedUserId: string | null = null;
  let resolvedEmail: string | null = null;

  try {
    const fromNextAuth = await tryGetNextAuthSessionUserId();
    resolvedUserId = fromNextAuth.id ?? resolvedUserId;
    resolvedEmail = fromNextAuth.email ?? resolvedEmail;
  } catch (e) {
    devLog("next-auth helper error:", e);
  }

  if (!resolvedUserId && !resolvedEmail) {
    try {
      const cookieHeader = req.headers.get("cookie") ?? "";
      const cookieToken = extractLikelyCookieToken(cookieHeader);
      if (cookieToken) {
        const decoded: any = tryDecodeToken(cookieToken);
        if (decoded) {
          resolvedUserId = resolvedUserId ?? (decoded.sub ?? decoded.id ?? decoded.userId ?? null);
          resolvedEmail = resolvedEmail ?? (decoded.email ?? null);
        }
      }
    } catch (e) {
      devLog("cookie decode error:", e);
    }
  }

  if (!resolvedUserId && !resolvedEmail) {
    try {
      const authHeader = req.headers.get("authorization") ?? req.headers.get("Authorization");
      if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
        const token = authHeader.slice(7).trim();
        if (token) {
          const decoded: any = tryDecodeToken(token);
          if (decoded) {
            resolvedUserId = resolvedUserId ?? (decoded.sub ?? decoded.id ?? decoded.userId ?? null);
            resolvedEmail = resolvedEmail ?? (decoded.email ?? null);
          }
        }
      }
    } catch (e) {
      devLog("authorization header decode error:", e);
    }
  }

  if (!resolvedUserId && !resolvedEmail) {
    devLog("Auth failed — no user id/email resolved");
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  devLog("resolved identity:", { id: resolvedUserId ? "<id>" : null, email: resolvedEmail ?? null });

  // ---------------------------
  // Ensure sender User exists (or auto-create in dev)
  // ---------------------------
  let senderUser: any = null;
  try {
    if (resolvedUserId) senderUser = await prisma.user.findUnique({ where: { id: resolvedUserId } });
    if (!senderUser && resolvedEmail) senderUser = await prisma.user.findUnique({ where: { email: resolvedEmail } });

    if (!senderUser) {
      if (!AUTO_CREATE_USERS) {
        devLog("authenticated user not found in DB and AUTO_CREATE_USERS is false");
        return NextResponse.json({
          error: "Authenticated user not found in database. Please sign in or set AUTO_CREATE_USERS=true for dev.",
        }, { status: 401 });
      }

      const createData: any = {
        email: resolvedEmail ?? `${resolvedUserId ?? "devuser"}@example.invalid`,
        role: "VIEWER",
        name: "AutoCreated Dev User",
      };
      if (resolvedUserId) createData.id = resolvedUserId;

      try {
        senderUser = await prisma.user.create({ data: createData });
        devLog("auto-created sender user (dev):", senderUser.id);
      } catch (createErr) {
        devLog("user.create failed (with id). Retrying without id:", createErr?.message ?? createErr);
        const fallback = { ...createData };
        delete fallback.id;
        senderUser = await prisma.user.create({ data: fallback });
        devLog("auto-created sender user fallback:", senderUser.id);
      }
    } else {
      devLog("found senderUser:", senderUser.id);
    }
  } catch (err) {
    console.error("[/api/messages/send] user ensure error:", err);
    return NextResponse.json({ error: "Failed to resolve/create sender user" }, { status: 500 });
  }

  // ---------------------------
  // Ensure Contact exists (lookup by id or phone) and create if missing
  // ---------------------------
  let contact: any = null;
  try {
    if (contactIdProvided) {
      contact = await prisma.contact.findUnique({ where: { id: contactIdProvided } });
      devLog("lookup contact by id:", contactIdProvided, !!contact);
    }

    if (!contact && phoneNormalized) {
      contact = await prisma.contact.findFirst({ where: { phone: phoneNormalized } });
      devLog("lookup contact by phone:", phoneNormalized, !!contact);
    }

    if (!contact) {
      const createPayload: any = {
        ...(contactIdProvided ? { id: contactIdProvided } : {}),
        phone: phoneNormalized ?? undefined,
      };
      Object.keys(createPayload).forEach((k) => createPayload[k] === undefined && delete createPayload[k]);

      contact = await prisma.contact.create({ data: createPayload });
      devLog("created contact:", contact?.id ?? "(no id)");
    }
  } catch (err) {
    console.error("[/api/messages/send] contact ensure failed:", err);
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({
        ok: false,
        error: "Failed to ensure contact",
        detail: (err as any)?.message ?? String(err),
        code: (err as any)?.code ?? null,
      }, { status: 500 });
    }
    return NextResponse.json({ error: "Failed to ensure contact" }, { status: 500 });
  }

  // ---------------------------
  // Find or create Thread for this contact
  // ---------------------------
  let thread: any = null;
  try {
    thread = await prisma.thread.findFirst({
      where: { contactId: contact.id },
      orderBy: { lastAt: "desc" as const },
    });

    if (!thread) {
      thread = await prisma.thread.create({
        data: {
          contactId: contact.id,
          creatorId: senderUser?.id ?? undefined,
          lastAt: new Date(),
        } as any,
      });
      devLog("created thread:", thread.id);
    } else {
      devLog("found thread:", thread.id);
    }
  } catch (err) {
    console.error("[/api/messages/send] thread ensure failed:", err);
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({
        ok: false,
        error: "Failed to ensure thread",
        detail: (err as any)?.message ?? String(err),
        code: (err as any)?.code ?? null,
      }, { status: 500 });
    }
    return NextResponse.json({ error: "Failed to ensure thread" }, { status: 500 });
  }

  // ---------------------------
  // Scheduled messages — create ScheduledMessage and return early
  // ---------------------------
  if (sendAtRaw && !Number.isNaN(sendAtRaw.getTime())) {
    try {
      const scheduled = await prisma.scheduledMessage.create({
        data: {
          threadId: thread.id,
          senderId: senderUser?.id ?? undefined,
          body: messageBody,
          channel,
          sendAt: sendAtRaw,
          metadata: { to: phoneNormalized, ...(body.metadata ?? {}) },
        },
      });
      devLog("created scheduledMessage:", scheduled.id);
      return NextResponse.json({ ok: true, scheduled, thread, notice: "Message scheduled for future delivery." });
    } catch (err: any) {
      console.error("[/api/messages/send] failed creating scheduled message:", err);
      return NextResponse.json({
        ok: false,
        error: "Failed to schedule message",
        detail: process.env.NODE_ENV !== "production" ? (err?.message ?? String(err)) : undefined,
      }, { status: 500 });
    }
  }

  // ---------------------------
  // Create the outbound Message (do NOT set `status` on Message)
  // ---------------------------
  let createdMessage: any = null;
  try {
    const messageData: any = {
      threadId: thread.id,
      senderId: senderUser?.id ?? null,
      body: messageBody,
      channel,
      direction: "OUTBOUND",
      metadata: { to: phoneNormalized, ...(body.metadata ?? {}) },
      // Note: Message model doesn't have `status` in your schema. Use externalId / sentAt / deliveredAt.
    };

    createdMessage = await prisma.message.create({ data: messageData });
    devLog("created message:", createdMessage.id);

    // best-effort update thread.lastAt
    try {
      await prisma.thread.update({ where: { id: thread.id }, data: { lastAt: new Date() } });
    } catch (updateErr) {
      devLog("failed to update thread.lastAt:", updateErr?.message ?? updateErr);
    }
  } catch (err: any) {
    console.error("[/api/messages/send] error creating message (full):", err);
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({
        ok: false,
        error: err?.message ?? String(err),
        code: err?.code ?? null,
        meta: err?.meta ?? null,
      }, { status: 500 });
    }
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }

  // ---------------------------
  // Immediate delivery for supported channels (graceful fallback if provider not configured)
  // ---------------------------
  try {
    if (channel === "SMS") {
      devLog("sending SMS via provider...", { to: createdMessage.metadata?.to ?? toRaw });
      try {
        const res = await sendSms({ to: createdMessage.metadata?.to ?? toRaw, body: messageBody });
        await prisma.message.update({
          where: { id: createdMessage.id },
          data: {
            externalId: (res as any)?.sid ?? (res as any)?.id ?? null,
            sentAt: new Date(),
          },
        });
      } catch (providerErr: any) {
        devLog("provider send failed (SMS):", providerErr?.message ?? providerErr);
        await appendFailedReasonToMessage(createdMessage.id, "twilio", providerErr?.message ?? String(providerErr));
        const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
        return NextResponse.json({
          ok: true,
          message,
          thread,
          notice: "Message saved but Twilio SMS send failed (provider not configured or error). Delivery pending.",
          debug: process.env.NODE_ENV !== "production" ? { providerError: providerErr?.message ?? String(providerErr) } : undefined,
        });
      }
    } else if (channel === "WHATSAPP") {
      devLog("sending WhatsApp via provider...", { to: createdMessage.metadata?.to ?? toRaw });
      try {
        const res = await sendWhatsApp({ to: createdMessage.metadata?.to ?? toRaw, body: messageBody });
        await prisma.message.update({
          where: { id: createdMessage.id },
          data: {
            externalId: (res as any)?.sid ?? (res as any)?.id ?? null,
            sentAt: new Date(),
          },
        });
      } catch (providerErr: any) {
        devLog("provider send failed (WHATSAPP):", providerErr?.message ?? providerErr);
        await appendFailedReasonToMessage(createdMessage.id, "twilio_whatsapp", providerErr?.message ?? String(providerErr));
        const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
        return NextResponse.json({
          ok: true,
          message,
          thread,
          notice: "Message saved but Twilio WhatsApp send failed (provider not configured or error). Delivery pending.",
          debug: process.env.NODE_ENV !== "production" ? { providerError: providerErr?.message ?? String(providerErr) } : undefined,
        });
      }
    } else if (channel === "EMAIL") {
      devLog("sending EMAIL via provider...", { to: createdMessage.metadata?.to ?? toRaw });
      try {
        const emailRes = await sendEmail({
          to: createdMessage.metadata?.to ?? toRaw,
          subject: body.subject ?? "Message from SignalHub",
          html: body.html ?? `<div>${messageBody}</div>`,
          text: body.text ?? messageBody,
          from: body.from ?? undefined,
        });
        await prisma.message.update({
          where: { id: createdMessage.id },
          data: {
            externalId: (emailRes as any)?.id ?? (emailRes as any)?.messageId ?? null,
            sentAt: new Date(),
          },
        });
      } catch (providerErr: any) {
        devLog("provider send failed (EMAIL):", providerErr?.message ?? providerErr);
        await appendFailedReasonToMessage(createdMessage.id, "email", providerErr?.message ?? String(providerErr));
        const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
        return NextResponse.json({
          ok: true,
          message,
          thread,
          notice: "Message saved but email send failed (provider not configured or error). Delivery pending.",
          debug: process.env.NODE_ENV !== "production" ? { providerError: providerErr?.message ?? String(providerErr) } : undefined,
        });
      }
    } else {
      // TWITTER / MESSENGER: not integrated yet — keep message in DB for later processing
      devLog(`channel ${channel} not integrated for immediate delivery; message left in DB for later processing.`);
      const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
      return NextResponse.json({
        ok: true,
        message,
        thread,
        notice: `Channel ${channel} is not integrated for immediate delivery. Message stored.`,
      });
    }
  } catch (fatalErr: any) {
    // Defensive catch - provider-level errors should have been handled above
    console.error("[/api/messages/send] unexpected fatal error during provider send:", fatalErr);
    await appendFailedReasonToMessage(createdMessage.id, "internal", fatalErr?.message ?? String(fatalErr));
    const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
    return NextResponse.json({
      ok: true,
      message,
      thread,
      notice: "Message saved but delivery failed due to an internal error. Check server logs.",
      debug: process.env.NODE_ENV !== "production" ? { error: String(fatalErr) } : undefined,
    });
  }

  // ---------------------------
  // Re-fetch and return the updated message
  // ---------------------------
  const message = await prisma.message.findUnique({ where: { id: createdMessage.id } });
  return NextResponse.json({ ok: true, message, thread });
}
