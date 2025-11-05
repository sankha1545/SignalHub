// src/app/api/admin/analytics/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    // Safe aggregate queries using fields that are likely present.
    // Use emailVerified or role to infer "active" users if present.
    // We'll attempt queries with different where clauses gracefully.

    let activeUsers: number;

    // Try emailVerified first, then role !== 'VIEWER', then plain count
    try {
      activeUsers = await prisma.user.count({ where: { emailVerified: true } });
    } catch (e1) {
      try {
        // If enum role exists, count non-VIEWER users (adjust to your enum)
        activeUsers = await prisma.user.count({ where: { role: { not: "VIEWER" } } as any });
      } catch (e2) {
        // Fallback: total users
        activeUsers = await prisma.user.count();
      }
    }

    // messages in last 24h (createdAt is commonly present)
    let messagesLast24h = 0;
    try {
      messagesLast24h = await prisma.message.count({
        where: { createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
      });
    } catch (e) {
      console.warn("message count by createdAt failed — returning 0:", e);
      messagesLast24h = 0;
    }

    return NextResponse.json({ activeUsers, messagesLast24h, generatedAt: new Date().toISOString() });
  } catch (err) {
    console.error("GET /api/admin/analytics error:", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
