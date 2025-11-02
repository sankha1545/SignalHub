// app/api/me/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/auth";

export async function GET(req: Request) {
  const user = await getUserFromRequest(req as any);
  if (!user) return NextResponse.json({ user: null }, { status: 401 });

  // fetch from DB for full details
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true, email: true, name: true, role: true, /* profile: true if present */ },
  });

  return NextResponse.json({ user: dbUser });
}

export async function PATCH(req: Request) {
  const sessionUser = await getUserFromRequest(req as any);
  if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const updates: any = {};

  // Only allow updating white-listed fields
  if (typeof body.name === "string") updates.name = body.name;

  // If you have a JSON 'profile' column on User in Prisma, you can update it here:
  // updates.profile = { ...(existingProfile), ...(body.profile || {}) }
  // NOTE: Add `profile Json?` field to User model and run a migration if you want to persist these.

  try {
    const updated = await prisma.user.update({
      where: { id: sessionUser.id },
      data: updates,
      select: { id: true, email: true, name: true, role: true, /* profile: true if present */ },
    });

    return NextResponse.json({ user: updated });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
