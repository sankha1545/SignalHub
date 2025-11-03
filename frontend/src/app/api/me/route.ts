// app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

/** compute since date */
function sinceDays(days = 30) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

/** Helper: validate base64 size (bytes) */
function base64SizeBytes(base64String: string) {
  // Remove data:*/*;base64, prefix if present
  const comma = base64String.indexOf(",");
  const b64 = comma >= 0 ? base64String.slice(comma + 1) : base64String;
  const padding = (b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0);
  // bytes = (base64Length * 3) / 4 - padding
  return Math.ceil((b64.length * 3) / 4) - padding;
}

export async function GET(req: Request) {
  const sessionUser = await getUserFromRequest(req as any);
  if (!sessionUser) return NextResponse.json({ user: null }, { status: 401 });

  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
  });

  const since = sinceDays(30);
  const [logins30d, changes30d] = await Promise.all([
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
    prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
  ]);

  return NextResponse.json({ user: dbUser, activity: { logins30d, changes30d } });
}

export async function PATCH(req: Request) {
  const sessionUser = await getUserFromRequest(req as any);
  if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const updates: any = {};

  // allow name update
  if (typeof body.name === "string") updates.name = body.name;

  // process profile updates if provided
  if (body.profile && typeof body.profile === "object") {
    // if avatarBase64 provided, validate size (2MB)
    const incomingProfile = body.profile;
    if (incomingProfile.avatarBase64) {
      const size = base64SizeBytes(incomingProfile.avatarBase64);
      const max = 2 * 1024 * 1024;
      if (size > max) {
        return NextResponse.json({ error: "Avatar exceeds 2 MB limit" }, { status: 400 });
      }
    }

    // merge existing profile
    const existing = await prisma.user.findUnique({ where: { id: sessionUser.id }, select: { profile: true } });
    updates.profile = { ...(existing?.profile ?? {}), ...(incomingProfile ?? {}) };

    // For convenience, if avatarBase64 present, also set avatarUrl to the same data URL
    if (incomingProfile.avatarBase64) {
      updates.profile.avatarUrl = incomingProfile.avatarBase64;
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { id: sessionUser.id },
      data: updates,
      select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
    });

    // record profile change activity
    try {
      await prisma.activityLog.create({
        data: {
          userId: sessionUser.id,
          type: "PROFILE_CHANGE",
          meta: { fields: Object.keys(body.profile ?? {}), ts: new Date().toISOString() },
        },
      });
    } catch (err) {
      console.error("Failed to write profile change activity:", err);
    }

    // recompute activity counts
    const since = sinceDays(30);
    const [logins30d, changes30d] = await Promise.all([
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "LOGIN", createdAt: { gte: since } } }),
      prisma.activityLog.count({ where: { userId: sessionUser.id, type: "PROFILE_CHANGE", createdAt: { gte: since } } }),
    ]);

    return NextResponse.json({ user: updated, activity: { logins30d, changes30d } });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
