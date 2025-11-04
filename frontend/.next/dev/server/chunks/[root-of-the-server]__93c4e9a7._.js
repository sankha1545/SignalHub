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
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: [
        "query"
    ]
});
if ("TURBOPACK compile-time truthy", 1) global.prisma = prisma;
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
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(finalPayload, JWT_SECRET, {
        expiresIn
    });
}
function verifyToken(token) {
    try {
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
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
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
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
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
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
"[project]/src/app/api/auth/google/signup/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/auth/google/signup/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days
function jsonError(message, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: message
    }, {
        status
    });
}
function buildCookieHeader(name, value, maxAge = ("TURBOPACK compile-time truthy", 1) ? SESSION_MAX_AGE : "TURBOPACK unreachable") {
    const secure = ("TURBOPACK compile-time value", "development") === "production";
    const sameSite = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Lax";
    return [
        `${name}=${encodeURIComponent(value)}`,
        "Path=/",
        `Max-Age=${maxAge}`,
        "HttpOnly",
        `SameSite=${sameSite}`,
        ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
    ].filter(Boolean).join("; ");
}
const DB_ROLE_VALUES = [
    "VIEWER",
    "EDITOR",
    "ADMIN"
];
function normalizeRequestedRoleForDb(raw) {
    if (!raw) return "VIEWER";
    const v = String(raw).trim();
    if (DB_ROLE_VALUES.includes(v)) return v;
    const lower = v.toLowerCase();
    if (lower === "viewer") return "VIEWER";
    if (lower === "editor") return "EDITOR";
    if (lower === "admin") return "ADMIN";
    return "VIEWER";
}
async function adminExistsTx(tx) {
    const p = tx ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"];
    try {
        const result = await p.$queryRaw`SELECT COUNT(*)::int AS count FROM "User" WHERE LOWER(role::text) = 'admin'`;
        return (result?.[0]?.count ?? 0) > 0;
    } catch (err) {
        console.error("[google/signup] adminExistsTx fallback error:", err);
        return true; // conservative
    }
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const rawEmail = (body.email || "").toString();
        const email = rawEmail.trim().toLowerCase();
        const name = (body.name || "").toString().trim();
        const googleSub = (body.sub || "").toString().trim();
        const provider = (body.provider || "google").toString().trim().toLowerCase();
        if (!email || !name || !googleSub) {
            return jsonError("Missing required fields: email, name, sub (Google id).", 400);
        }
        if (provider !== "google") {
            return jsonError("Unsupported provider. This endpoint only supports 'google'.", 400);
        }
        const requestedRoleForDb = normalizeRequestedRoleForDb(body.role);
        // check existing user by email
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                provider: true,
                passwordHash: true,
                role: true
            }
        });
        if (existing) {
            const providerField = (existing.provider ?? "").toString();
            const existingProviders = providerField.split(",").map((p)=>p.trim().toLowerCase()).filter(Boolean);
            const isSameProvider = existingProviders.includes("google");
            const hasCredentials = existingProviders.includes("credentials") || existingProviders.includes("local") || !!existing.passwordHash;
            if (isSameProvider) {
                return jsonError("User already exists with this Google account. Please sign in.", 409);
            }
            if (hasCredentials) {
                return jsonError("An account with this email already exists. Please sign in with email/password, then link your Google account from settings.", 409);
            }
            if (!isSameProvider && !hasCredentials) {
                return jsonError("An account exists with this email under a different provider. Please sign in with that provider.", 409);
            }
        }
        // Prepare optional token fields to store on account (if provided)
        const tokens = body.tokens ?? {};
        const access_token = tokens.access_token ?? undefined;
        const refresh_token = tokens.refresh_token ?? undefined;
        const id_token = tokens.id_token ?? undefined;
        // Normalize expires_at to seconds (Prisma commonly stores seconds)
        let expires_at = undefined;
        if (tokens.expires_at) {
            const n = Number(tokens.expires_at);
            // if it's in ms ( > 1e12 ), convert to seconds
            expires_at = n > 1e12 ? Math.floor(n / 1000) : Math.floor(n);
        }
        // Admin path: atomic check + create
        if (requestedRoleForDb === "ADMIN") {
            try {
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                    const exists = await adminExistsTx(tx);
                    if (exists) throw {
                        code: "ADMIN_EXISTS"
                    };
                    const user = await tx.user.create({
                        data: {
                            email,
                            name,
                            passwordHash: null,
                            role: "ADMIN",
                            emailVerified: true,
                            provider: "google"
                        },
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            role: true,
                            provider: true
                        }
                    });
                    // create account link — include required `type` and optional token fields
                    await tx.account.create({
                        data: {
                            provider: "google",
                            providerAccountId: googleSub,
                            type: "oauth",
                            access_token,
                            refresh_token,
                            expires_at,
                            id_token,
                            userId: user.id
                        }
                    });
                    return user;
                });
                const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
                    id: created.id,
                    email: created.email,
                    role: created.role
                }, "7d");
                const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    user: created
                });
                try {
                    res.cookies.set(SESSION_COOKIE_NAME, token, {
                        httpOnly: true,
                        sameSite: "lax",
                        secure: ("TURBOPACK compile-time value", "development") === "production",
                        path: "/",
                        maxAge: SESSION_MAX_AGE
                    });
                } catch  {
                    res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
                }
                return res;
            } catch (err) {
                if (err && err.code === "ADMIN_EXISTS") {
                    return jsonError("An admin account already exists. Cannot create another admin.", 409);
                }
                console.error("[google/signup] admin transaction error:", err);
                return jsonError("Server error during signup.", 500);
            }
        }
        // Non-admin path: create user + account in transaction
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const user = await tx.user.create({
                data: {
                    email,
                    name,
                    passwordHash: null,
                    role: requestedRoleForDb,
                    emailVerified: true,
                    provider: "google"
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    provider: true
                }
            });
            await tx.account.create({
                data: {
                    provider: "google",
                    providerAccountId: googleSub,
                    type: "oauth",
                    access_token,
                    refresh_token,
                    expires_at,
                    id_token,
                    userId: user.id
                }
            });
            return user;
        });
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
            id: created.id,
            email: created.email,
            role: created.role
        }, "7d");
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            user: created
        });
        try {
            res.cookies.set(SESSION_COOKIE_NAME, token, {
                httpOnly: true,
                sameSite: "lax",
                secure: ("TURBOPACK compile-time value", "development") === "production",
                path: "/",
                maxAge: SESSION_MAX_AGE
            });
        } catch  {
            res.headers.set("Set-Cookie", buildCookieHeader(SESSION_COOKIE_NAME, token, SESSION_MAX_AGE));
        }
        return res;
    } catch (err) {
        if (err && err.code === "ADMIN_EXISTS") {
            return jsonError("An admin account already exists.", 409);
        }
        console.error("[google/signup] signup error:", err);
        return jsonError("Internal server error.", 500);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93c4e9a7._.js.map