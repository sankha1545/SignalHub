// frontend/src/app/api/messages/send/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Message send route (matches schema.prisma models)
 *
 * Behavior:
 *  - Resolve user from NextAuth session, then cookie token, then Authorization header.
 *  - If resolved user record exists, use it. If missing, behavior controlled by AUTO_CREATE_USERS:
 *      - AUTO_CREATE_USERS=true  -> auto-create a minimal user (dev convenience)
 *      - otherwise -> return 401 (auth mismatch)
 *  - Ensure Contact exists (lookup by id or normalized phone; create minimal if missing).
 *  - Find or create Thread for that contact (creatorId set only if user exists).
 *  - Create Message using scalar `threadId` and `senderId`.
 *
 * Notes:
 *  - Designed to be robust in development. Do NOT enable AUTO_CREATE_USERS in production unless you understand the implications.
 *  - This file intentionally returns extra error details in non-production to help debugging.
 */

// --------------------------- Helpers & config ---------------------------
const ALLOWED_CHANNELS = ["SMS", "WHATSAPP", "EMAIL", "TWITTER", "MESSENGER"] as const;
type Channel = typeof ALLOWED_CHANNELS[number];

const AUTO_CREATE_USERS = process.env.AUTO_CREATE_USERS === "true"; // set true for dev autoprov behavior

function devLog(...args: any[]) {
  if (process.env.NODE_ENV !== "production") console.debug("[/api/messages/send]", ...args);
}

// JWT helpers (verify then decode fallback)
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";
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
    const found = cookieHeader.split(";").map(s => s.trim()).find(s => s.startsWith(`${name}=`));
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
  // simple normalizer — keep leading plus if present
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

// --------------------------- Route handler ---------------------------
export async function POST(req: Request) {
  devLog("start POST");

  // parse body safely
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

  // Authorization header fallback (Bearer)
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

      // Create minimal user for dev convenience. Keep fields minimal to avoid unique violations.
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
        // If setting id failed (rare), retry without id
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
      // drop undefined keys
      Object.keys(createPayload).forEach((k) => createPayload[k] === undefined && delete createPayload[k]);

      contact = await prisma.contact.create({ data: createPayload });
      devLog("created contact:", contact?.id ?? "(no id)");
    }
  } catch (err) {
    console.error("[/api/messages/send] contact ensure failed:", err);
    // If unique constraint fails (rare), give specific info in dev
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
      orderBy: { lastAt: "desc" },
    });

    if (!thread) {
      thread = await prisma.thread.create({
        data: {
          contactId: contact.id,
          // schema allows creatorId to be nullable; set because senderUser exists
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
  // Create the message (use scalar senderId)
  // ---------------------------
  try {
    const messageData: any = {
      threadId: thread.id,
      senderId: senderUser?.id ?? null, // Message.senderId is nullable in schema; use null only if senderUser is missing (shouldn't be)
      body: messageBody,
      channel,
      direction: "OUTBOUND",
      metadata: { to: phoneNormalized },
    };

    const message = await prisma.message.create({ data: messageData });
    devLog("created message:", message.id);

    // update thread.lastAt (best-effort)
    try {
      await prisma.thread.update({
        where: { id: thread.id },
        data: { lastAt: new Date() },
      });
    } catch (updateErr) {
      devLog("failed to update thread.lastAt:", updateErr?.message ?? updateErr);
    }

    return NextResponse.json({ ok: true, message, thread });
  } catch (err: any) {
    console.error("[/api/messages/send] error creating message (full):", err);

    // return helpful error in development
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
}
