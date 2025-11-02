import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: "Email and code required" }, { status: 400 });
    }

    // Option 1: if email is @unique
    // const otp = await prisma.emailOtp.findUnique({ where: { email } });

    // Option 2: if multiple OTPs per email allowed
   const otp = await prisma.emailOtp.findFirst({
  where: { email },
  orderBy: { createdAt: 'desc' }, // get the latest OTP
});

    if (!otp) {
      return NextResponse.json({ error: "No OTP found for this email" }, { status: 404 });
    }

    if (otp.verified) {
      return NextResponse.json({ ok: true, message: "Already verified" });
    }

    const isMatch = await bcrypt.compare(code, otp.codeHash);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
    }

    if (new Date() > otp.expiresAt) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    await prisma.emailOtp.update({
      where: { id: otp.id },
      data: { verified: true },
    });

    return NextResponse.json({ ok: true, message: "OTP verified" });
  } catch (err) {
    console.error("verify-otp error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
