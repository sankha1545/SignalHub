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
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

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
"[project]/src/app/api/auth/google/verify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/auth/google/verify/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/google-auth-library/build/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$auth$2d$library$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OAuth2Client"](process.env.GOOGLE_CLIENT_ID);
/**
 * Verify a Google ID token and return its payload.
 */ async function verifyIdToken(idToken) {
    const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    return ticket.getPayload();
}
/** Helper: set session cookie in a NextResponse with env-aware attributes */ function setSessionCookie(res, token) {
    const isProd = ("TURBOPACK compile-time value", "development") === "production";
    const sameSite = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "lax";
    const secure = isProd;
    const value = encodeURIComponent(token);
    try {
        // Preferred API
        res.cookies.set({
            name: "session",
            value,
            httpOnly: true,
            secure,
            sameSite: sameSite,
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });
    } catch  {
        // Fallback for runtimes that don't accept object signature
        const cookieParts = [
            `session=${value}`,
            "Path=/",
            `Max-Age=${60 * 60 * 24 * 7}`,
            "HttpOnly",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "SameSite=Lax",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
        ].filter(Boolean);
        res.headers.set("Set-Cookie", cookieParts.join("; "));
    }
}
async function POST(request) {
    try {
        const body = await request.json().catch(()=>({}));
        const idToken = body?.idToken;
        if (!idToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing idToken"
            }, {
                status: 400
            });
        }
        const payload = await verifyIdToken(idToken);
        if (!payload || !payload.email) {
            console.error("google verify: id token missing email/payload", payload);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to verify id token"
            }, {
                status: 401
            });
        }
        const email = String(payload.email).trim().toLowerCase();
        const name = payload.name ?? undefined;
        const sub = payload.sub; // Google user id
        // Upsert user (preserve existing user if email exists)
        let user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.create({
                data: {
                    email,
                    name,
                    provider: "google",
                    googleSub: sub,
                    emailVerified: true,
                    role: "VIEWER"
                }
            });
        } else {
            // Update non-null fields if they changed (optional)
            const updates = {};
            if (name && name !== user.name) updates.name = name;
            if (Object.keys(updates).length) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
                        where: {
                            id: user.id
                        },
                        data: updates
                    });
                } catch (e) {
                    console.error("google verify: failed to update user:", e);
                }
            }
        }
        // Create a session token using central signToken helper so verification later is consistent
        // Use canonical id claim (signToken will copy id => sub internally if necessary)
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
            id: user.id,
            email: user.email,
            role: user.role ?? "VIEWER"
        }, "7d");
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Logged in",
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
        // Set session cookie
        setSessionCookie(res, token);
        return res;
    } catch (err) {
        console.error("google verify error", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message ?? "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__293a36d3._.js.map