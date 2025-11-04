// workers/send-worker.js
/**
 * Worker that finds outbound messages that haven't been sent yet, sends via Twilio,
 * and updates the DB. Works with your Prisma schema where:
 * - Message.externalId is the provider message id (null if not sent)
 * - Message.direction is "INBOUND" | "OUTBOUND"
 * - Message.threadId exists and Thread.lastAt is @updatedAt so update will touch it.
 *
 * WARNING: this file expects process.env.* to be configured (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER)
 *
 * Run: node workers/send-worker.js
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const twilioSid = process.env.TWILIO_ACCOUNT_SID;
const twilioToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
let twilioClient = null;

if (twilioSid && twilioToken) {
  // require here to avoid failing load if env not present (makes local dev easier)
  const Twilio = require("twilio");
  twilioClient = new Twilio(twilioSid, twilioToken);
} else {
  console.warn("TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN not set — worker will run in sandbox mode (no external sends)");
}

async function sendViaTwilio(channel, to, body) {
  if (!twilioClient) {
    // sandbox: simulate an external id
    return { sid: "sandbox-" + Math.random().toString(36).slice(2, 9), status: "simulated" };
  }

  const payload = {
    body: body,
    to: to,
  };

  // If channel is WHATSAPP, Twilio expects whatsapp:+123...
  if (channel === "WHATSAPP") {
    payload.from = twilioFrom.startsWith("whatsapp:") ? twilioFrom : `whatsapp:${twilioFrom}`;
    payload.to = to.startsWith("whatsapp:") ? to : `whatsapp:${to}`;
  } else {
    payload.from = twilioFrom;
  }

  // create message
  const res = await twilioClient.messages.create(payload);
  return { sid: res.sid, status: res.status };
}

async function processQueueOnce() {
  console.log(new Date().toISOString(), "Worker: scan for unsent outbound messages...");

  // find outbound messages that do not have an externalId (not sent yet).
  // This matches your schema: Message.externalId and Message.direction
  let unsent;
  try {
    unsent = await prisma.message.findMany({
      where: {
        direction: "OUTBOUND",
        externalId: null,
      },
      take: 10,
      orderBy: { createdAt: "asc" },
    });
  } catch (err) {
    console.error("Prisma query failed:", err);
    return;
  }

  if (!unsent || unsent.length === 0) {
    console.log("No unsent outbound messages found.");
    return;
  }

  for (const msg of unsent) {
    console.log("Processing message:", msg.id, msg.channel, "to", msg.body ? msg.threadId || msg.to : msg.body);
    try {
      // twilio send
      const { sid, status } = await sendViaTwilio(msg.channel, msg.metadata?.to ?? msg.body /* fallback (UI should supply 'to' somewhere) */ , msg.body);

      // update Message.externalId with provider sid (Twilio Sid)
      await prisma.message.update({
        where: { id: msg.id },
        data: {
          externalId: sid,
          // optionally store provider info inside metadata (non-destructive)
          metadata: {
            ...(msg.metadata || {}),
            provider: "twilio",
            sendStatus: status,
            sentAt: new Date().toISOString(),
          },
        },
      });

      // update parent thread snippet & lastAt (thread.lastAt is @updatedAt, so touching it will update)
      try {
        await prisma.thread.update({
          where: { id: msg.threadId },
          data: {
            snippet: msg.body,
            lastAt: new Date(),
          },
        });
      } catch (e) {
        // if thread update fails (unlikely), just log it
        console.warn("Worker: thread update failed:", e?.message || e);
      }

      console.log(`Message ${msg.id} sent. provider sid=${sid}`);
    } catch (err) {
      console.error(`Failed to send message ${msg.id}:`, err?.message || err);

      // best-effort: append error info to metadata so you can inspect later
      try {
        await prisma.message.update({
          where: { id: msg.id },
          data: {
            metadata: {
              ...(msg.metadata || {}),
              lastError: String(err?.message || err),
              lastErrorAt: new Date().toISOString(),
            },
          },
        });
      } catch (e) {
        console.warn("Failed to record message error in DB:", e?.message || e);
      }
    }
  }
}

async function loop() {
  // run immediately then every 8 seconds
  try {
    await processQueueOnce();
  } catch (e) {
    console.error("Worker top-level error:", e);
  }
  setTimeout(loop, 8000);
}

loop().catch((e) => {
  console.error("Fatal worker error:", e);
  process.exit(1);
});
