// src/app/api/threads/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit") ?? 10);

    // Safe ordering: prefer lastAt, then createdAt
    const orderBy = { lastAt: "desc" as const } || { createdAt: "desc" as const };

    // Because Typescript/Prisma might error if lastAt doesn't exist,
    // call findMany with a try/fallback.
    let threads;
    try {
      threads = await prisma.thread.findMany({
        take: limit,
        orderBy: { lastAt: "desc" },
      });
    } catch (e) {
      // fallback to createdAt if lastAt/updatedAt not available
      threads = await prisma.thread.findMany({
        take: limit,
        orderBy: { createdAt: "desc" },
      });
    }

    return NextResponse.json(threads);
  } catch (err: any) {
    console.error("GET /api/threads error:", err);
    return NextResponse.json({ error: err?.message ?? "failed" }, { status: 500 });
  }
}
