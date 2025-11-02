// app/api/messages/route.ts
import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const user = await requireRole(req as any, ["EDITOR", "ADMIN"]);
  const data = await req.json();

  // Your send message logic...
  const msg = await prisma.message.create({
    data: {
      body: data.body,
      threadId: data.threadId,
      senderId: user.id,
      channel: data.channel,
      direction: "outbound",
    },
  });

  return NextResponse.json({ success: true, message: msg });
}
