// src/app/api/auth/google/callback/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

/**
 * Google OAuth callback handler
 *
 * Guarantees:
 *  - Validates state nonce against httpOnly cookie `google_oauth_nonce`
 *  - Clears nonce cookie on all returns (success / error)
 *  - Honors state.mode === "login" | "signup"
 *  - Will not allow Google to take over an existing email/password account
 *  - Auto-creates account only for mode==='signup' OR AUTO_CREATE_OAUTH_USERS=true
 *
 * Notes:
 *  - This handler expects a previously set nonce cookie (google_oauth_nonce)
 *  - For production, ensure GOOGLE_CLIENT_ID/SECRET are set
 */

const REDIRECT_AFTER_LOGIN = process.env.NEXT_PUBLIC_AFTER_LOGIN ?? "/welcome";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const OAUTH_REDIRECT = BASE_URL + "/api/auth/google/callback";
const SESSION_COOKIE = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // seconds
const NONCE_COOKIE = "google_oauth_nonce";
const TEMP_GOOGLE_COOKIE = "google_oauth_temp";
const TEMP_GOOGLE_MAX_AGE = 60 * 5; // seconds
const AUTO_CREATE_OAUTH_USERS = (process.env.AUTO_CREATE_OAUTH_USERS ?? "false").toLowerCase() === "true";
const isProd = process.env.NODE_ENV === "production";

/** Helper — redirect to path under BASE_URL and attach error query params */
function redirectWithError(path: string, code: string, message?: string) {
  const u = new URL(path, BASE_URL);
  u.searchParams.set("error", code);
  if (message) u.searchParams.set("message", message);
  return NextResponse.redirect(u.toString());
}

/** Env-aware cookie clear (tries res.cookies.set then header fallback) */
function clearCookie(res: NextResponse, name: string) {
  try {
    res.cookies.set(name, "", { httpOnly: true, sameSite: isProd ? "none" : "lax", secure: isProd, path: "/", maxAge: 0 });
  } catch {
    const parts = [
      `${name}=`,
      "Path=/",
      "Max-Age=0",
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      isProd ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", parts.join("; "));
  }
}

/** Env-aware cookie set (session/temp) */
function setCookie(res: NextResponse, name: string, value: string, maxAge = SESSION_MAX_AGE) {
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd;
  const enc = encodeURIComponent(value);
  try {
    res.cookies.set(name, enc, { httpOnly: true, secure, sameSite: sameSite as "none" | "lax" | "strict", path: "/", maxAge });
    // don't log sensitive values in production
    if (!isProd) console.debug(`[auth/google/callback] set cookie ${name} (sameSite=${sameSite}, secure=${secure})`);
  } catch {
    const parts = [
      `${name}=${enc}`,
      "Path=/",
      `Max-Age=${maxAge}`,
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", parts.join("; "));
    if (!isProd) console.debug(`[auth/google/callback] set cookie header: ${parts.join("; ")}`);
  }
}

/** Read cookie robustly from raw request headers (portable across runtimes) */
function readCookieValue(request: Request, name: string): string | null {
  try {
    const header = request.headers.get("cookie") ?? "";
    const match = header.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[1]) : null;
  } catch (e) {
    console.error("[auth/google/callback] readCookieValue error:", e);
    return null;
  }
}

/** Parse state param of the form: mode=signup&nonce=abc&returnTo=/x */
function parseState(raw: string | null) {
  const result = { mode: "login" as "login" | "signup", nonce: null as string | null, returnTo: null as string | null };
  if (!raw) return result;
  try {
    const decoded = decodeURIComponent(raw);
    const params = new URLSearchParams(decoded);
    const m = params.get("mode");
    if (m === "signup") result.mode = "signup";
    const n = params.get("nonce");
    if (n) result.nonce = n;
    const r = params.get("returnTo");
    if (r) result.returnTo = r;
    return result;
  } catch (e) {
    if (!isProd) console.debug("[auth/google/callback] parseState failed:", e);
    return result;
  }
}

/** Normalize provider role string to lowercase canonical form used across the app */
function normalizeRole(r: string | null | undefined) {
  if (!r) return "viewer";
  return String(r).trim().toLowerCase();
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const errorParam = url.searchParams.get("error");
    if (errorParam) {
      console.error("[auth/google/callback] OAuth error param:", errorParam);
      const res = redirectWithError("/auth/login", "google_oauth_error", String(errorParam));
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    if (!code) {
      const res = redirectWithError("/auth/login", "missing_code", "Missing authorization code from Google.");
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    // Validate state/nonce
    const rawState = url.searchParams.get("state");
    const { mode, nonce: stateNonce, returnTo } = parseState(rawState);

    const cookieNonce = readCookieValue(request, NONCE_COOKIE);
    if (!stateNonce || !cookieNonce || stateNonce !== cookieNonce) {
      console.warn("[auth/google/callback] state nonce mismatch", { stateNonce, cookieNonce });
      const res = redirectWithError("/auth/login", "invalid_state", "OAuth state mismatch (possible CSRF).");
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    // Exchange code for tokens
    const oauth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, OAUTH_REDIRECT);
    const tokenResp = await oauth2Client.getToken(code);
    const tokens = tokenResp.tokens;
    oauth2Client.setCredentials(tokens);

    // Fetch userinfo
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const profileResp = await oauth2.userinfo.get();
    const data = profileResp.data;

    if (!data || !data.email) {
      console.error("[auth/google/callback] google.userinfo missing email:", data);
      const res = redirectWithError("/auth/login", "no_email", "Google did not return an email.");
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    const email = String(data.email).trim().toLowerCase();
    const name = data.name ?? null;
    const picture = data.picture ?? null;
    const providerAccountId = data.id ?? undefined;
    if (!providerAccountId) {
      console.error("[auth/google/callback] google.userinfo missing id:", data);
      const res = redirectWithError("/auth/login", "no_provider_id", "Google profile missing id.");
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    // Try to find existing account (provider account table is authoritative for provider link)
    const existingAccount = await prisma.account.findFirst({
      where: { provider: "google", providerAccountId: String(providerAccountId) },
    });

    // Find a user by email (may be null)
    let user = await prisma.user.findUnique({ where: { email }, include: { profile: true } });

    // If account exists, prefer its user
    if (existingAccount) {
      const accountUser = await prisma.user.findUnique({ where: { id: existingAccount.userId }, include: { profile: true } });
      if (!accountUser) {
        console.error("[auth/google/callback] account present but user missing", { existingAccount });
        const res = redirectWithError("/auth/login", "server_error", "Inconsistent account state. Contact support.");
        clearCookie(res, NONCE_COOKIE);
        return res;
      }
      user = accountUser;
    }

    // CASE: user exists (by email or from account)
    if (user) {
      // Normalize provider field on user to detect existing providers
      const providerField = (user.provider ?? "").toString();
      const currentProviders = providerField
        .split(",")
        .map((p) => p.trim().toLowerCase())
        .filter(Boolean);

      const hasGoogle = currentProviders.includes("google");
      const hasCredentials =
        currentProviders.includes("credentials") ||
        currentProviders.includes("local") ||
        currentProviders.includes("email") ||
        Boolean((user as any).passwordHash) ||
        Boolean((user as any).password);

      // If the google account was linked to a different user -> conflict
      if (existingAccount && existingAccount.userId !== user.id) {
        console.error("[auth/google/callback] google account linked to a different user", {
          providerAccountId,
          existingAccountUserId: existingAccount.userId,
          currentUserId: user.id,
        });
        const res = redirectWithError("/auth/login", "account_link_conflict", "This Google account is linked to a different user.");
        clearCookie(res, NONCE_COOKIE);
        return res;
      }

      // Do NOT allow Google sign-in to succeed if there's an email/password account that is NOT linked to Google
      if (hasCredentials && !hasGoogle) {
        const res = redirectWithError(
          "/auth/login",
          "provider_mismatch",
          "An account exists for this email using an email/password. Sign in with email/password or link Google from account settings."
        );
        clearCookie(res, NONCE_COOKIE);
        return res;
      }

      // At this point user is allowed to sign in with Google:
      // - ensure an account record exists (create if needed) and update tokens
      if (!existingAccount) {
        await prisma.account.create({
          data: {
            provider: "google",
            providerAccountId: String(providerAccountId),
            access_token: tokens.access_token ?? undefined,
            refresh_token: tokens.refresh_token ?? undefined,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : undefined,
            id_token: (tokens as any).id_token ?? undefined,
            userId: user.id,
          },
        });
      } else {
        await prisma.account.update({
          where: { id: existingAccount.id },
          data: {
            access_token: tokens.access_token ?? existingAccount.access_token,
            refresh_token: tokens.refresh_token ?? existingAccount.refresh_token,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : existingAccount.expires_at,
            id_token: (tokens as any).id_token ?? existingAccount.id_token,
          },
        });
      }

      // Ensure 'google' is included in user's provider list
      if (!hasGoogle) {
        currentProviders.push("google");
        await prisma.user.update({ where: { id: user.id }, data: { provider: currentProviders.join(",") } });
      }

      // Ensure profile exists and fill missing fields
      if (!user.profile) {
        await prisma.profile.create({
          data: { userId: user.id, displayName: user.name ?? name ?? undefined, avatarUrl: picture ?? undefined },
        });
      } else {
        const needUpdate: Record<string, any> = {};
        if (!user.profile.displayName && (user.name ?? name)) needUpdate.displayName = user.name ?? name;
        if (!user.profile.avatarUrl && picture) needUpdate.avatarUrl = picture;
        if (Object.keys(needUpdate).length) {
          await prisma.profile.update({ where: { userId: user.id }, data: needUpdate });
        }
      }

      // Issue session token and redirect
      const token = signToken({ id: user.id, email: user.email, role: normalizeRole(user.role) }, "7d");
      const res = NextResponse.redirect(returnTo ?? REDIRECT_AFTER_LOGIN);
      setCookie(res, SESSION_COOKIE, token, SESSION_MAX_AGE);
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    // CASE: no user found by email and no existing provider linking
    // If mode === 'signup' or AUTO_CREATE_OAUTH_USERS is enabled, create user+account atomically
    if (mode === "signup" || AUTO_CREATE_OAUTH_USERS) {
      const created = await prisma.$transaction(async (tx) => {
        const newUser = await tx.user.create({
          data: {
            email,
            name,
            provider: "google",
            emailVerified: true,
            role: "viewer",
            profile: { create: { displayName: name ?? undefined, avatarUrl: picture ?? undefined } },
          },
        });

        await tx.account.create({
          data: {
            provider: "google",
            providerAccountId: String(providerAccountId),
            access_token: tokens.access_token ?? undefined,
            refresh_token: tokens.refresh_token ?? undefined,
            expires_at: tokens.expiry_date ? Math.floor(tokens.expiry_date / 1000) : undefined,
            id_token: (tokens as any).id_token ?? undefined,
            userId: newUser.id,
          },
        });

        return newUser;
      });

      const token = signToken({ id: created.id, email: created.email, role: normalizeRole(created.role) }, "7d");
      const res = NextResponse.redirect(returnTo ?? REDIRECT_AFTER_LOGIN);
      setCookie(res, SESSION_COOKIE, token, SESSION_MAX_AGE);
      clearCookie(res, NONCE_COOKIE);
      return res;
    }

    // Otherwise: require explicit signup completion. Store minimal temp payload in an httpOnly cookie and redirect to signup completion UI
    const tempPayload = JSON.stringify({
      provider: "google",
      providerAccountId: String(providerAccountId),
      email,
      name,
      picture,
      tokensMeta: {
        access_token: tokens.access_token ?? null,
        refresh_token: tokens.refresh_token ?? null,
      },
    });

    const signupUrl = new URL("/auth/google/signup", BASE_URL).toString();
    const res = NextResponse.redirect(signupUrl);
    setCookie(res, TEMP_GOOGLE_COOKIE, tempPayload, TEMP_GOOGLE_MAX_AGE);
    clearCookie(res, NONCE_COOKIE);
    return res;
  } catch (err) {
    console.error("[auth/google/callback] handler error:", err);
    const res = redirectWithError("/auth/login", "server_error", "An internal error occurred during Google sign-in.");
    clearCookie(res, NONCE_COOKIE);
    return res;
  }
}
