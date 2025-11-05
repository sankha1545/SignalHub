// src/app/api/contacts/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit") ?? 1000);

    // Explicit selection to avoid referencing columns that may not exist in DB
    const contacts = await prisma.contact.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        createdAt: true,
        // don't select phoneVerified if DB doesn't have it
      },
    });

    return NextResponse.json(contacts);
  } catch (err: any) {
    console.error("GET /api/contacts error:", err);
    return NextResponse.json({ error: err?.message ?? "failed" }, { status: 500 });
  }
}
