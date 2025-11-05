// src/app/api/analytics/summary/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // adjust path if different

export async function GET() {
  try {
    // example summary — replace with real queries
    const totalUsers = await prisma.user.count();
    const totalContacts = await prisma.contact.count();
    const totalMessages = await prisma.message.count();

    return NextResponse.json({
      totalUsers,
      totalContacts,
      totalMessages,
      generatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("GET /api/analytics/summary error:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
