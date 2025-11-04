// src/app/api/me/route.ts
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";
import { Prisma } from "@prisma/client";

/** compute since date (UTC) */
function sinceDays(days = 30) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d;
}

/** Helper: compute base64 size (bytes) */
function base64SizeBytes(base64String: string) {
  if (!base64String || typeof base64String !== "string") return 0;
  const comma = base64String.indexOf(",");
  const b64 = comma >= 0 ? base64String.slice(comma + 1) : base64String;
  // remove whitespace/newlines that may be present
  const normalized = b64.replace(/\s+/g, "");
  const padding = normalized.endsWith("==") ? 2 : normalized.endsWith("=") ? 1 : 0;
  return Math.ceil((normalized.length * 3) / 4) - padding;
}

/** Whitelisted writable profile fields */
const ALLOWED_PROFILE_FIELDS = new Set([
  "avatarUrl",
  "displayName",
  "bio",
  "metadata",
  "gender",
  "countryCode",
  "countryName",
  "stateName",
  "timezone",
  "countryGeonameId",
  "stateGeonameId",
]);

/** Sensible max avatar bytes (2 MB) */
const MAX_AVATAR_BYTES = 2 * 1024 * 1024;

/** Sanitize profile payload — returns cleaned object or null */
function sanitizeProfilePayload(raw: any) {
  if (!raw || typeof raw !== "object") return null;
  const cleaned: Record<string, any> = {};
  const rejectedKeys: string[] = [];

  for (const [k, v] of Object.entries(raw)) {
    if (ALLOWED_PROFILE_FIELDS.has(k)) {
      // Coerce empty strings -> null to ease DB upsert semantics
      cleaned[k] = v === "" ? null : v;
    } else {
      rejectedKeys.push(k);
    }
  }

  if (rejectedKeys.length > 0) {
    console.info("sanitizeProfilePayload dropped unknown/read-only profile keys:", rejectedKeys);
  }

  return Object.keys(cleaned).length === 0 ? null : cleaned;
}

/**
 * GET /api/me
 * - returns { user, activity } or 401
 */
export async function GET(req: NextRequest) {
  // getUserFromRequest expects NextRequest
  const sessionUser = await getUserFromRequest(req);
  if (!sessionUser) return NextResponse.json({ user: null }, { status: 401 });

  // Re-fetch canonical user from DB (don't trust token-only role if changed)
  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
  });

  if (!dbUser) {
    // user removed from DB; treat as unauthorized
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const since = sinceDays(30);

  const [logins30d, changes30d] = await Promise.all([
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
  ]);

  return NextResponse.json({ user: dbUser, activity: { logins30d, changes30d } });
}

/**
 * PATCH /api/me
 * - allow updating whitelisted profile fields and name
 */
export async function PATCH(req: NextRequest) {
  const sessionUser = await getUserFromRequest(req);
  if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const rawBody = await req.json().catch(() => ({}));
  if (!rawBody || typeof rawBody !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const userUpdates: Record<string, any> = {};

  if (typeof rawBody.name === "string") {
    const trimmed = rawBody.name.trim();
    if (!trimmed) {
      return NextResponse.json({ error: "Name cannot be empty" }, { status: 400 });
    }
    userUpdates.name = trimmed;
  }

  let profilePayload: Record<string, any> | null = null;

  if (rawBody.profile && typeof rawBody.profile === "object") {
    const incomingProfile = rawBody.profile;

    // If avatarBase64 is supplied, validate size early
    if (incomingProfile.avatarBase64) {
      const size = base64SizeBytes(incomingProfile.avatarBase64);
      if (size <= 0) {
        return NextResponse.json({ error: "Invalid avatar data" }, { status: 400 });
      }
      if (size > MAX_AVATAR_BYTES) {
        return NextResponse.json({ error: "Avatar exceeds 2 MB limit" }, { status: 400 });
      }
    }

    // sanitize profile to allowed fields
    profilePayload = sanitizeProfilePayload(incomingProfile);

    // if avatarBase64 present and sanitized, map to avatarUrl field (stored as base64 in DB)
    if (incomingProfile.avatarBase64) {
      profilePayload = { ...(profilePayload ?? {}), avatarUrl: incomingProfile.avatarBase64 };
    }
  }

  if (Object.keys(userUpdates).length === 0 && !profilePayload) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    const data: Record<string, any> = { ...userUpdates };

    if (profilePayload) {
      data.profile = {
        upsert: {
          update: profilePayload,
          create: profilePayload,
        },
      };
    }

    const updated = await prisma.user.update({
      where: { id: sessionUser.id },
      data,
      select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
    });

    // Log profile change activity if profile changed
    if (profilePayload) {
      (async () => {
        try {
          await prisma.activityLog.create({
            data: {
              userId: sessionUser.id,
              type: "PROFILE_CHANGE",
              meta: { fields: Object.keys(rawBody.profile ?? {}), ts: new Date().toISOString() },
            },
          });
        } catch (err) {
          console.error("Failed to write profile change activity:", err);
        }
      })();
    }

    const since = sinceDays(30);
    const [logins30d, changes30d] = await Promise.all([
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
    ]);

    return NextResponse.json({ user: updated, activity: { logins30d, changes30d } });
  } catch (err: any) {
    console.error("Profile update error:", err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return NextResponse.json({ error: "Conflict: unique constraint", detail: err.message }, { status: 409 });
      }
      if (err.code === "P2025") {
        return NextResponse.json({ error: "Not found", detail: err.message }, { status: 404 });
      }
    }

    return NextResponse.json({ error: "Failed to update", detail: err?.message ?? String(err) }, { status: 500 });
  }
}
