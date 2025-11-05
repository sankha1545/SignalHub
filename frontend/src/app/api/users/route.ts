// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit") ?? 1000);
    const users = await prisma.user.findMany({
      take: limit,
      orderBy: { createdAt: "desc" }
    });
    return NextResponse.json(users);
  } catch (err) {
    console.error("GET /api/users error:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
