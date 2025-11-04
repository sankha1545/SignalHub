// src/app/api/auth/admin-exists/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/auth/admin-exists
 * Response: { exists: boolean, count: number }
 *
 * Implementation note:
 * - Uses a read-only raw SQL query that lowercases the role::text column and
 *   compares to 'admin'. This avoids Prisma enum validation errors when enum
 *   casing differs (e.g., ADMIN vs admin).
 * - This endpoint is a UX-only helper (frontend uses it to disable Admin option).
 */

export async function GET() {
  try {
    // Use raw SQL to avoid Prisma enum validation. This is a safe, read-only query.
    const result = await prisma.$queryRaw<
      Array<{ count: number }>
    >`SELECT COUNT(*)::int AS count FROM "User" WHERE LOWER(role::text) = 'admin'`;

    const count = result?.[0]?.count ?? 0;
    const exists = count > 0;

    return NextResponse.json({ exists, count });
  } catch (err) {
    console.error("[api/auth/admin-exists] error:", err);
    return NextResponse.json({ exists: false, count: 0, error: "Server error" }, { status: 500 });
  }
}
