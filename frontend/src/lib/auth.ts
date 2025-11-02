// lib/auth.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.NEXTAUTH_SECRET || "dev-secret";

/* ----------------------------- JWT utilities ----------------------------- */

export function signToken(payload: any, expiresIn = "7d") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as any;
  } catch (err) {
    return null;
  }
}

/* -------------------------- Password utilities --------------------------- */

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

/* --------------------------- Session utilities --------------------------- */

/**
 * Reads token from Authorization header or cookie
 * and returns the full user (with role).
 */
export async function getUserFromRequest(req: NextRequest) {
  try {
    const header = req.headers.get("authorization");
    const token =
      header?.startsWith("Bearer ")
        ? header.slice(7)
        : req.cookies.get("token")?.value;

    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload?.id) return null;

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, email: true, name: true, role: true },
    });
    return user;
  } catch {
    return null;
  }
}

/**
 * Middleware-style helper to require authentication and role.
 * Use inside API routes.
 */
export async function requireRole(
  req: NextRequest,
  allowedRoles: string[] = []
) {
  const user = await getUserFromRequest(req);
  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }
  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }
  return user;
}
