// src/app/api/contacts/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/** GET /api/contacts?limit=1000 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit") ?? 1000);
    const contacts = await prisma.contact.findMany({ take: limit, orderBy: { createdAt: "desc" } });
    return NextResponse.json(contacts);
  } catch (err: any) {
    console.error("GET /api/contacts error:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
