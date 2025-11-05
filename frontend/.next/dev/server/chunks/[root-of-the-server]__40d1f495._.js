module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
// Use the global object available in this runtime (node, edge, etc.)
const _global = globalThis;
// Decide whether we want query logging enabled.
// This is intentionally opt-in via DEV_LOG_QUERIES to avoid noisy logs in normal dev.
const enableQueryLogging = process.env.DEV_LOG_QUERIES === "true" && ("TURBOPACK compile-time value", "development") !== "production";
const prismaOptions = enableQueryLogging ? {
    log: [
        "query"
    ]
} : {};
// Create or reuse the PrismaClient instance
const client = _global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"](prismaOptions);
// In non-production environments, attach to global to avoid new clients on HMR
if ("TURBOPACK compile-time truthy", 1) {
    _global.prisma = client;
}
const prisma = client;
const __TURBOPACK__default__export__ = prisma;
}),
"[externals]/bcrypt [external] (bcrypt, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("bcrypt", () => require("bcrypt"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/frontend/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/auth.ts
__turbopack_context__.s([
    "getUserFromRequest",
    ()=>getUserFromRequest,
    "hashPassword",
    ()=>hashPassword,
    "requireRole",
    ()=>requireRole,
    "signToken",
    ()=>signToken,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
const JWT_SECRET = process.env.SESSION_SECRET || process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET || "dev-secret";
// Keep legacy cookie names to support older sessions during migration.
// Order matters: prefer 'session' then fallbacks.
const COOKIE_CANDIDATES = [
    "session",
    "token",
    "auth_token",
    "authToken",
    "auth"
];
function signToken(payload, expiresIn = "7d") {
    const finalPayload = {};
    // Accept common id fallback keys for compatibility
    const providedId = payload?.id ?? payload?.userId ?? payload?.sub ?? payload?.uid ?? null;
    if (providedId) finalPayload.id = String(providedId);
    if (payload?.email) finalPayload.email = payload.email;
    if (payload?.role) finalPayload.role = payload.role;
    // If you need extra claims (exp, aud, etc), add intentionally here.
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(finalPayload, JWT_SECRET, {
        expiresIn
    });
}
function verifyToken(token) {
    try {
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
        return decoded;
    } catch (err) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug("[auth] verifyToken failed:", err?.message ?? err);
        }
        return null;
    }
}
async function hashPassword(password) {
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(password, saltRounds);
}
async function verifyPassword(password, hash) {
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].compare(password, hash);
    } catch (err) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("[auth] verifyPassword error:", err);
        }
        return false;
    }
}
async function getUserFromRequest(req) {
    try {
        // 1) Authorization header (Bearer)
        const authHeader = req.headers.get("authorization");
        if (authHeader?.startsWith("Bearer ")) {
            const token = authHeader.slice(7).trim();
            const payload = verifyToken(token);
            if (payload) {
                const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
                if (userId) {
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                        where: {
                            id: String(userId)
                        },
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            role: true
                        }
                    });
                    if (user) return user;
                }
            } else if ("TURBOPACK compile-time truthy", 1) {
                console.debug("[auth] bearer token present but failed verification");
            }
        }
        // 2) Cookies
        // NextRequest cookie API: req.cookies.get(name) returns { name, value } | undefined
        for (const name of COOKIE_CANDIDATES){
            try {
                const cookie = req.cookies.get(name);
                if (!cookie) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.debug(`[auth] cookie probe: ${name} => missing`);
                    }
                    continue;
                }
                const token = cookie.value;
                if (!token) continue;
                const payload = verifyToken(token);
                if (!payload) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.debug(`[auth] cookie ${name} token failed verify/expired`);
                    }
                    continue;
                }
                const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
                if (!userId) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.debug(`[auth] cookie ${name} token missing id/sub/userId/uid`);
                    }
                    continue;
                }
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        id: String(userId)
                    },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        role: true
                    }
                });
                if (user) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.debug(`[auth] cookie ${name} matched user id ${user.id}`);
                    }
                    return user;
                } else {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.debug(`[auth] cookie ${name} decoded id ${userId} not found`);
                    }
                }
            } catch (err) {
                // Some runtimes may throw on cookie access — continue to next candidate
                if ("TURBOPACK compile-time truthy", 1) {
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
async function requireRole(req, allowedRoles = []) {
    const user = await getUserFromRequest(req);
    if (!user) throw new Response("Unauthorized", {
        status: 401
    });
    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        throw new Response("Forbidden", {
            status: 403
        });
    }
    return user;
}
}),
"[project]/frontend/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/auth/login/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
/**
 * POST /api/auth/login
 *
 * Accepts: { email, password }
 * - Blocks credential login for OAuth-only accounts.
 * - Parses legacy provider strings (comma separated).
 * - Sets an httpOnly session cookie named "session".
 */ const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days
function jsonError(msg, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: msg
    }, {
        status
    });
}
/** Parse provider field into normalized array (handles comma-lists, nulls) */ function parseProviders(providerField) {
    if (!providerField) return [];
    return providerField.toString().split(",").map((p)=>p.trim().toLowerCase()).filter(Boolean);
}
/**
 * Build fallback Set-Cookie header value. In production use SameSite=None + Secure
 * so cookies work across sites (if that's your intended deployment). In non-prod use Lax.
 */ function buildCookieHeader(name, value, maxAge = SESSION_MAX_AGE) {
    const isProd = ("TURBOPACK compile-time value", "development") === "production";
    const sameSite = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Lax";
    const secure = !!isProd;
    const parts = [
        `${name}=${encodeURIComponent(value)}`,
        "Path=/",
        `Max-Age=${maxAge}`,
        "HttpOnly",
        `SameSite=${sameSite}`,
        ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
    ].filter(Boolean);
    return parts.join("; ");
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const rawEmail = (body?.email ?? "").toString();
        const password = (body?.password ?? "").toString();
        const email = rawEmail.trim().toLowerCase();
        if (!email || !password) {
            return jsonError("Email and password are required.", 400);
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                name: true,
                passwordHash: true,
                role: true,
                provider: true
            }
        });
        // Do not reveal whether email exists
        if (!user) return jsonError("Invalid email or password.", 401);
        // Robust provider parsing
        const providers = parseProviders(user.provider);
        const hasCredentials = providers.includes("credentials") || providers.includes("email") || providers.includes("local") || !!user.passwordHash;
        const oauthProviders = providers.filter((p)=>p !== "credentials" && p !== "email" && p !== "local");
        // If user does NOT have credentials, but has external provider(s) — block credential login
        if (!hasCredentials) {
            const providerLabel = oauthProviders.length ? oauthProviders.join(", ") : "an external provider";
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: `This account was created using ${providerLabel}. Please sign in with ${providerLabel} or link credentials from account settings.`
            }, {
                status: 403
            });
        }
        if (!user.passwordHash) {
            // Defensive: if provider claims credentials but no password is stored
            return jsonError("Password not set for this account. Please reset your password.", 401);
        }
        const valid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.passwordHash);
        if (!valid) return jsonError("Invalid email or password.", 401);
        // Create session token (7d) — include canonical role from DB
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
            id: user.id,
            email: user.email,
            role: user.role
        }, "7d");
        // Fire-and-forget activity log (non-blocking)
        (async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].activityLog.create({
                    data: {
                        userId: user.id,
                        type: "LOGIN",
                        meta: {
                            provider: "credentials",
                            ts: new Date().toISOString()
                        }
                    }
                });
            } catch (e) {
                console.error("⚠️ Failed to record login activity:", e);
            }
        })();
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                provider: providers.length ? providers.join(",") : "credentials"
            }
        });
        // Prefer NextResponse cookies API; fall back to Set-Cookie header if necessary
        try {
            // Use NextResponse cookies API when runtime supports it
            res.cookies.set(SESSION_COOKIE_NAME, token, {
                httpOnly: true,
                sameSite: "lax",
                secure: ("TURBOPACK compile-time value", "development") === "production",
                path: "/",
                maxAge: SESSION_MAX_AGE
            });
        } catch  {
            // Fallback header — set SameSite=None in prod (to match typical cross-site usage), Lax otherwise
            res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
        }
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug("[auth/login] session cookie set for userId:", user.id);
        }
        return res;
    } catch (err) {
        console.error("❌ Login error:", err);
        return jsonError("Internal server error.", 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40d1f495._.js.map