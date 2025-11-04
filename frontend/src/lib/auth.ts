// src/lib/auth.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma";
import type { NextRequest } from "next/server";

const JWT_SECRET =
  process.env.SESSION_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  process.env.JWT_SECRET ||
  "dev-secret";

// Keep legacy cookie names to support older sessions during migration.
// Order matters: prefer 'session' then fallbacks.
const COOKIE_CANDIDATES = ["session", "token", "auth_token", "authToken", "auth"] as const;

type TokenPayload = {
  id?: string;
  email?: string;
  role?: string;
  // allow other claims but keep them optional/unknown
  [k: string]: any;
};

/**
 * Sign a JWT for a user.
 *
 * - Ensures a canonical `id` claim is present when provided in the payload.
 * - Copies `email` and `role` when present.
 * - Accepts `expiresIn` in jsonwebtoken format ("7d", "1h", etc).
 *
 * NOTE: Do not include sensitive data (password hashes, secrets) in token payload.
 */
export function signToken(payload: Record<string, any>, expiresIn = "7d"): string {
  const finalPayload: TokenPayload = {};

  // Accept common id fallback keys for compatibility
  const providedId = payload?.id ?? payload?.userId ?? payload?.sub ?? payload?.uid ?? null;
  if (providedId) finalPayload.id = String(providedId);

  if (payload?.email) finalPayload.email = payload.email;
  if (payload?.role) finalPayload.role = payload.role;

  // If you need extra claims (exp, aud, etc), add intentionally here.
  return jwt.sign(finalPayload, JWT_SECRET, { expiresIn });
}

/** Verify token and return decoded payload or null if invalid/expired. */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (err: any) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[auth] verifyToken failed:", err?.message ?? err);
    }
    return null;
  }
}

/* -------------------------- Password utilities --------------------------- */

/** Hash a plain password (bcrypt). */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);
  return bcrypt.hash(password, saltRounds);
}

/** Verify a password against a bcrypt hash. Returns boolean. */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return bcrypt.compare(password, hash);
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[auth] verifyPassword error:", err);
    }
    return false;
  }
}

/* --------------------------- Session utilities --------------------------- */

/**
 * Read token from Authorization header (Bearer) OR a list of well-known cookies.
 * Returns the canonical user record { id, email, name, role } fetched from DB, or null.
 *
 * Accepts a NextRequest (Next.js route/middleware).
 *
 * - Prefers Authorization Bearer token.
 * - Falls back through COOKIE_CANDIDATES (in order) and returns the first matching user.
 * - Accepts older tokens with sub/userId/uid claims for migration.
 *
 * Important: we fetch the user from the DB each time to ensure role and existence are canonical.
 */
export async function getUserFromRequest(req: NextRequest) {
  try {
    // 1) Authorization header (Bearer)
    const authHeader = req.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.slice(7).trim();
      const payload = verifyToken(token);
      if (payload) {
        const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
        if (userId) {
          const user = await prisma.user.findUnique({
            where: { id: String(userId) },
            select: { id: true, email: true, name: true, role: true },
          });
          if (user) return user;
        }
      } else if (process.env.NODE_ENV !== "production") {
        console.debug("[auth] bearer token present but failed verification");
      }
    }

    // 2) Cookies
    // NextRequest cookie API: req.cookies.get(name) returns { name, value } | undefined
    for (const name of COOKIE_CANDIDATES) {
      try {
        const cookie = req.cookies.get(name);
        if (!cookie) {
          if (process.env.NODE_ENV !== "production") {
            console.debug(`[auth] cookie probe: ${name} => missing`);
          }
          continue;
        }

        const token = cookie.value;
        if (!token) continue;

        const payload = verifyToken(token);
        if (!payload) {
          if (process.env.NODE_ENV !== "production") {
            console.debug(`[auth] cookie ${name} token failed verify/expired`);
          }
          continue;
        }

        const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
        if (!userId) {
          if (process.env.NODE_ENV !== "production") {
            console.debug(`[auth] cookie ${name} token missing id/sub/userId/uid`);
          }
          continue;
        }

        const user = await prisma.user.findUnique({
          where: { id: String(userId) },
          select: { id: true, email: true, name: true, role: true },
        });

        if (user) {
          if (process.env.NODE_ENV !== "production") {
            console.debug(`[auth] cookie ${name} matched user id ${user.id}`);
          }
          return user;
        } else {
          if (process.env.NODE_ENV !== "production") {
            console.debug(`[auth] cookie ${name} decoded id ${userId} not found`);
          }
        }
      } catch (err) {
        // Some runtimes may throw on cookie access — continue to next candidate
        if (process.env.NODE_ENV !== "production") {
          console.debug(`[auth] cookie probe error for ${name}:`, err);
        }
        continue;
      }
    }

    // nothing matched
    return null;
  } catch (err) {
    console.error("[auth] getUserFromRequest error:", err);
    return null;
  }
}

/**
 * Require authenticated user and optional allowedRoles list.
 * Throws a Next.js Response if unauthorized/forbidden so it can be used inside route handlers.
 *
 * Example:
 *   const user = await requireRole(req, ['admin']);
 */
export async function requireRole(req: NextRequest, allowedRoles: string[] = []) {
  const user = await getUserFromRequest(req);
  if (!user) throw new Response("Unauthorized", { status: 401 });
  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }
  return user;
}
