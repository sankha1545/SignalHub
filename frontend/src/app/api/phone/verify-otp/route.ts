// File: src/app/api/phone/verify-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // <-- ensure this is correct path to your Prisma client

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return NextResponse.json({ error: "Phone and OTP are required" }, { status: 400 });
    }

    // Find the most recent unused OTP for this phone
    const record = await prisma.phoneOtp.findFirst({
      where: { phone, used: false },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return NextResponse.json({ error: "No OTP found for this phone" }, { status: 404 });
    }

    // Check expiry (5 minutes)
    const now = new Date();
    const createdAt = new Date(record.createdAt);
    const diffMins = (now.getTime() - createdAt.getTime()) / 60000;
    if (diffMins > 5) {
      return NextResponse.json({ error: "OTP expired. Please request a new one." }, { status: 400 });
    }

    // Increment attempts (max 5)
    if (record.attempts >= 5) {
      return NextResponse.json({ error: "Too many attempts. Request new OTP." }, { status: 429 });
    }

    // Verify OTP match
    if (record.otp !== otp) {
      await prisma.phoneOtp.update({
        where: { id: record.id },
        data: { attempts: record.attempts + 1 },
      });
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // ✅ Mark OTP as used
    await prisma.phoneOtp.update({
      where: { id: record.id },
      data: { used: true },
    });

    // ✅ Mark user as verified (assuming unique phone per user)
    const updatedUser = await prisma.user.updateMany({
      where: { profile: { path: ["phoneNumber"], equals: phone } },
      data: {
        profile: {
          push: {
            phoneVerified: true,
            phoneVerifiedAt: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Phone verified successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
