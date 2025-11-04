// src/app/api/contacts/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/**
 * GET /api/contacts/[id] -> returns { contact, notes: Note[] }
 * POST /api/contacts/[id] -> create a note for the contact
 *
 * Notes:
 * - In App Router dynamic API routes, `params` may be a Promise; await it.
 * - This version is robust when `prisma.note` is missing: it falls back to a raw SQL query.
 */

function devLog(...args: any[]) {
  if (process.env.NODE_ENV !== "production") console.debug("[/api/contacts/[id]]", ...args);
}

export async function GET(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const awaitedParams = await context.params;
    const id = awaitedParams?.id;

    if (!id) {
      devLog("missing id in params:", awaitedParams);
      return NextResponse.json({ error: "Missing contact id in route params" }, { status: 400 });
    }

    // Fetch contact (safe)
    const contact = await prisma.contact.findUnique({ where: { id } });
    if (!contact) return NextResponse.json({ error: "Contact not found" }, { status: 404 });

    // Fetch notes robustly:
    let notes: any[] = [];
    try {
      // Preferred: use prisma.note if available
      if ((prisma as any).note && typeof (prisma as any).note.findMany === "function") {
        notes = await (prisma as any).note.findMany({
          where: { contactId: id },
          orderBy: { createdAt: "desc" },
        });
      } else {
        // Fallback: try raw SQL query against "Note" table (keep identifiers quoted)
        devLog("prisma.note not found — falling back to $queryRaw for Note table");
        notes = await prisma.$queryRawUnsafe(
          `SELECT * FROM "Note" WHERE "contactId" = $1 ORDER BY "createdAt" DESC`,
          id
        );
      }
    } catch (notesErr: any) {
      devLog("failed to load notes via prisma.note or raw query:", notesErr?.message ?? notesErr);
      // If notes fetching fails, return empty notes with dev debug info
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json({ contact, notes: [], debug: { noteError: notesErr?.message ?? String(notesErr) } });
      }
      return NextResponse.json({ contact, notes: [] });
    }

    return NextResponse.json({ contact, notes });
  } catch (err: any) {
    console.error("GET /api/contacts/[id] error:", err);
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ error: "internal error", detail: err?.message ?? String(err) }, { status: 500 });
    }
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}

export async function POST(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const awaitedParams = await context.params;
    const id = awaitedParams?.id;

    if (!id) return NextResponse.json({ error: "Missing contact id in route params" }, { status: 400 });

    const payload = await req.json().catch(() => null);
    if (!payload || typeof payload.body !== "string" || payload.body.trim() === "") {
      return NextResponse.json({ error: "Invalid request body. Expect { body: string, createdBy?: string }" }, { status: 400 });
    }

    // Ensure contact exists
    const contact = await prisma.contact.findUnique({ where: { id } });
    if (!contact) return NextResponse.json({ error: "Contact not found" }, { status: 404 });

    // Create note using prisma.note if available; otherwise fallback to raw INSERT
    let note: any = null;
    try {
      if ((prisma as any).note && typeof (prisma as any).note.create === "function") {
        note = await (prisma as any).note.create({
          data: {
            contactId: id,
            body: payload.body.trim(),
            createdBy: typeof payload.createdBy === "string" ? payload.createdBy : null,
          },
        });
      } else {
        devLog("prisma.note.create not available — falling back to raw INSERT into Note table");
        const inserted = await prisma.$executeRawUnsafe(
          `INSERT INTO "Note" ("id", "contactId", "body", "createdBy", "createdAt")
           VALUES (gen_random_uuid()::text, $1, $2, $3, NOW())`,
          id,
          payload.body.trim(),
          typeof payload.createdBy === "string" ? payload.createdBy : null
        );
        // $executeRawUnsafe returns number of affected rows; fetch last note row as best-effort
        const fetched = await prisma.$queryRawUnsafe(`SELECT * FROM "Note" WHERE "contactId" = $1 ORDER BY "createdAt" DESC LIMIT 1`, id);
        note = Array.isArray(fetched) && fetched.length ? fetched[0] : null;
      }
    } catch (createErr: any) {
      console.error("failed to create note:", createErr);
      if (process.env.NODE_ENV !== "production") {
        return NextResponse.json({ ok: false, error: "Failed to create note", detail: createErr?.message ?? String(createErr) }, { status: 500 });
      }
      return NextResponse.json({ ok: false, error: "Failed to create note" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, note });
  } catch (err: any) {
    console.error("POST /api/contacts/[id] error:", err);
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ error: "internal error", detail: err?.message ?? String(err) }, { status: 500 });
    }
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
