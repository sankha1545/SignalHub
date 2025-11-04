// app/api/phone/verify-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function safeStringify(v: any) {
  try { return JSON.stringify(v); } catch { return String(v); }
}

async function fetchCurrentUserWithCookies(req: Request) {
  // Build a base URL for internal fetch. Prefer forwarded proto/host; fall back to localhost:3000.
  const host = req.headers.get("host") || "localhost:3000";
  const proto = (req.headers.get("x-forwarded-proto") || (process.env.NODE_ENV === "production" ? "https" : "http")) as string;
  const base = `${proto}://${host}`;
  try {
    const cookieHeader = req.headers.get("cookie") || "";
    const res = await fetch(`${base}/api/me`, {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const j = await res.json().catch(() => null);
    return j?.user ?? null;
  } catch (e) {
    console.warn("[verify-otp] /api/me fetch failed", e);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const phone = (body?.phone ?? "").toString();
    const otp = (body?.otp ?? "").toString();

    if (!phone || !otp) {
      return NextResponse.json({ error: "Phone and OTP are required" }, { status: 400 });
    }

    // Find latest unused OTP
    const record = await prisma.phoneOtp.findFirst({
      where: { phone, used: false },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return NextResponse.json({ error: "No OTP found for this phone" }, { status: 404 });
    }

    const now = Date.now();
    const createdAt = new Date(record.createdAt).getTime();
    if (now - createdAt > 5 * 60 * 1000) {
      return NextResponse.json({ error: "OTP expired. Please request a new one." }, { status: 400 });
    }

    if ((record.attempts ?? 0) >= 5) {
      return NextResponse.json({ error: "Too many attempts. Request new OTP." }, { status: 429 });
    }

    if (record.otp !== otp) {
      await prisma.phoneOtp.update({
        where: { id: record.id },
        data: { attempts: (record.attempts ?? 0) + 1 },
      });
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // mark used
    await prisma.phoneOtp.update({ where: { id: record.id }, data: { used: true } });

    // 1) Try to identify the currently authenticated user by calling internal /api/me with same cookies
    const sessionUser = await fetchCurrentUserWithCookies(req);

    let userToReturn = null;

    if (sessionUser && sessionUser.id) {
      // update the logged-in user's profile
      const userId = sessionUser.id;

      // Attempt to update profile fields safely.
      // We'll try profile.upsert first (if you have a Profile model), otherwise update top-level fields.
      try {
        // Try to upsert profile (works if you have a Profile model related by userId)
        await prisma.profile.upsert({
          where: { userId },
          create: {
            userId,
            // if your schema enforces required fields adjust accordingly
            phoneNumber: phone as any,
            phoneVerified: true as any,
            phoneVerifiedAt: new Date(),
          } as any,
          update: {
            phoneNumber: phone as any,
            phoneVerified: true as any,
            phoneVerifiedAt: new Date(),
          } as any,
        });
      } catch (profileErr) {
        // fallback: top-level user update if your schema stores phone on user table
        try {
          await prisma.user.update({
            where: { id: userId },
            data: {
              // update top-level phone if present
              phone: phone,
            } as any,
          });
        } catch (uErr) {
          // fallback: attempt to update profile.metadata JSON if profile/phone columns are missing
          try {
            const existing = await prisma.profile.findUnique({ where: { userId }, select: { metadata: true } });
            const meta = { ...(existing?.metadata ?? {}), phone, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() };
            if (existing) {
              await prisma.profile.update({ where: { userId }, data: { metadata: meta as any } as any } as any);
            } else {
              await prisma.profile.create({ data: { userId, metadata: meta as any } as any } as any);
            }
          } catch (metaErr) {
            console.error("[verify-otp] profile fallback update failed", metaErr);
            // don't fail the whole request - we will still try to return a response
          }
        }
      }

      // fetch fresh user with profile
      userToReturn = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
      });
    } else {
      // If no session user found, attempt to find user by phone or contact and update that user's profile
      // Try top-level user.phone (if exists)
      try {
        const userByPhone = await prisma.user.findFirst({ where: { phone } as any, select: { id: true, email: true, name: true, profile: true } as any }).catch(() => null);
        if (userByPhone) {
          try {
            await prisma.profile.upsert({
              where: { userId: userByPhone.id },
              create: { userId: userByPhone.id, phoneNumber: phone as any, phoneVerified: true as any, phoneVerifiedAt: new Date() } as any,
              update: { phoneNumber: phone as any, phoneVerified: true as any, phoneVerifiedAt: new Date() } as any,
            });
          } catch {
            // ignore and try metadata fallback
            const existing = await prisma.profile.findUnique({ where: { userId: userByPhone.id }, select: { metadata: true } }).catch(() => null);
            const meta = { ...(existing?.metadata ?? {}), phone, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() };
            if (existing) {
              await prisma.profile.update({ where: { userId: userByPhone.id }, data: { metadata: meta as any } as any } as any);
            } else {
              await prisma.profile.create({ data: { userId: userByPhone.id, metadata: meta as any } as any } as any);
            }
          }
          userToReturn = await prisma.user.findUnique({ where: { id: userByPhone.id }, select: { id: true, email: true, name: true, profile: true, updatedAt: true } });
        }
      } catch (e) {
        console.warn("[verify-otp] userByPhone check failed", e);
      }

      // If still no user, try contact table (if present)
      if (!userToReturn) {
        try {
          const contact = await prisma.contact.findUnique({ where: { phone } as any }).catch(() => null);
          if (contact && (contact as any).userId) {
            const uid = (contact as any).userId;
            try {
              await prisma.profile.upsert({
                where: { userId: uid },
                create: { userId: uid, phoneNumber: phone as any, phoneVerified: true as any, phoneVerifiedAt: new Date() } as any,
                update: { phoneNumber: phone as any, phoneVerified: true as any, phoneVerifiedAt: new Date() } as any,
              });
            } catch {
              // metadata fallback
              const existing = await prisma.profile.findUnique({ where: { userId: uid }, select: { metadata: true } }).catch(() => null);
              const meta = { ...(existing?.metadata ?? {}), phone, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() };
              if (existing) {
                await prisma.profile.update({ where: { userId: uid }, data: { metadata: meta as any } as any } as any);
              } else {
                await prisma.profile.create({ data: { userId: uid, metadata: meta as any } as any } as any);
              }
            }
            userToReturn = await prisma.user.findUnique({ where: { id: uid }, select: { id: true, email: true, name: true, profile: true, updatedAt: true } });
          }
        } catch (cErr) {
          console.warn("[verify-otp] contact lookup failed", cErr);
        }
      }
    }

    // If still no userToReturn, create/ensure contact exists and return a minimal "patch" that UI can use
    if (!userToReturn) {
      try {
        await prisma.contact.upsert({
          where: { phone },
          create: { phone, name: `unknown-${phone}` },
          update: { phone },
        });
      } catch (e) {
        // ignore
      }

      // Return non-failing success, but include a user-like patch so frontend can optimistically update UI
      return NextResponse.json({
        ok: true,
        message: "OTP verified but no user account linked to this session. Contact created in directory.",
        userPatch: {
          profile: { phoneNumber: phone, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() },
        },
      });
    }

    // Successful update -> return canonical user object with profile
    return NextResponse.json({
      ok: true,
      message: "Phone verified successfully",
      user: userToReturn,
    });
  } catch (err) {
    console.error("verify-otp error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
