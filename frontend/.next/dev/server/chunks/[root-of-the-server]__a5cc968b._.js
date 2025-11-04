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
"[project]/src/app/api/auth/signup/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/auth/signup/route.ts
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
/** Env-aware cookie setter helper (uses res.cookies.set when available, header fallback otherwise) */ function setSessionCookie(res, token) {
    const isProd = ("TURBOPACK compile-time value", "development") === "production";
    const sameSite = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "lax";
    const secure = isProd;
    const maxAge = 7 * 24 * 60 * 60; // 7 days
    try {
        res.cookies.set({
            name: "session",
            value: token,
            httpOnly: true,
            secure,
            sameSite: sameSite,
            path: "/",
            maxAge
        });
    } catch  {
        // header fallback for runtimes that expect a Set-Cookie header string
        const parts = [
            `session=${encodeURIComponent(token)}`,
            "Path=/",
            `Max-Age=${maxAge}`,
            "HttpOnly",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "SameSite=Lax",
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""
        ].filter(Boolean);
        res.headers.set("Set-Cookie", parts.join("; "));
    }
}
/** Normalize a client-provided role into the Prisma enum value (uppercase) */ function normalizeRoleForDb(raw) {
    if (!raw) return "VIEWER";
    const v = String(raw).trim();
    if ([
        "VIEWER",
        "EDITOR",
        "ADMIN"
    ].includes(v)) return v;
    const lower = v.toLowerCase();
    if (lower === "viewer") return "VIEWER";
    if (lower === "editor") return "EDITOR";
    if (lower === "admin") return "ADMIN";
    return "VIEWER";
}
/** Helper: check whether any admin exists (uses provided tx if present) */ async function adminExistsTx(tx) {
    const p = tx ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"];
    // Use a raw SQL check to avoid enum validation conflicts; returns boolean
    try {
        const result = await p.$queryRaw`SELECT COUNT(*)::int AS count FROM "User" WHERE LOWER(role::text) = 'admin'`;
        return (result?.[0]?.count ?? 0) > 0;
    } catch (err) {
        console.error("[signup] adminExistsTx fallback query error:", err);
        // conservative default: assume admin exists to avoid accidental duplicate admin creation
        return true;
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const rawEmail = body.email;
        const name = (body.name || "").toString().trim();
        const password = body.password;
        const provider = (body.provider || "credentials").toString();
        const email = (rawEmail || "").toString().trim().toLowerCase();
        if (!email || !name) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields: name and email are required."
            }, {
                status: 400
            });
        }
        if (![
            "credentials",
            "google"
        ].includes(provider)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unsupported provider. Use 'credentials' or 'google'."
            }, {
                status: 400
            });
        }
        // Normalize requested role (client may send viewer/editor/admin in any case)
        const requestedRoleRaw = (body.role || "").toString().trim();
        const requestedRoleForDb = normalizeRoleForDb(requestedRoleRaw); // e.g. "VIEWER"|"EDITOR"|"ADMIN"
        // If user already exists -> conflict (for OAuth flows you may want to link instead)
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                email
            }
        });
        if (existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "User already exists with this email"
            }, {
                status: 409
            });
        }
        // ---------- Credentials signup (email + password + OTP verified) ----------
        if (provider === "credentials") {
            if (!password) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Password required for credentials signup"
                }, {
                    status: 400
                });
            }
            // Check most recent OTP for this email
            const otp = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].emailOtp.findFirst({
                where: {
                    email
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
            if (!otp || !otp.verified) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Email not verified with OTP"
                }, {
                    status: 400
                });
            }
            const passwordHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(password);
            // If requested role is ADMIN -> perform atomic check+create using a transaction
            if (requestedRoleForDb === "ADMIN") {
                try {
                    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                        const exists = await adminExistsTx(tx);
                        if (exists) {
                            // signal admin exists by throwing a sentinel
                            throw {
                                code: "ADMIN_EXISTS"
                            };
                        }
                        const user = await tx.user.create({
                            data: {
                                email,
                                name,
                                passwordHash,
                                role: "ADMIN",
                                emailVerified: true,
                                provider: "credentials"
                            },
                            select: {
                                id: true,
                                email: true,
                                name: true,
                                role: true,
                                provider: true
                            }
                        });
                        // cleanup OTPs inside same tx if desired (optional)
                        await tx.emailOtp.deleteMany({
                            where: {
                                email
                            }
                        });
                        return user;
                    });
                    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
                        id: result.id,
                        email: result.email,
                        role: result.role
                    }, "7d");
                    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: true,
                        user: result
                    });
                    setSessionCookie(res, token);
                    return res;
                } catch (err) {
                    if (err && err.code === "ADMIN_EXISTS") {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: "An admin account already exists"
                        }, {
                            status: 409
                        });
                    }
                    console.error("signup (credentials/admin) transaction error:", err);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: "Server error"
                    }, {
                        status: 500
                    });
                }
            }
            // Non-admin create path (viewer/editor)
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.create({
                data: {
                    email,
                    name,
                    passwordHash,
                    role: requestedRoleForDb,
                    emailVerified: true,
                    provider: "credentials"
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    provider: true
                }
            });
            // Remove OTP records for cleanup
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].emailOtp.deleteMany({
                where: {
                    email
                }
            });
            // Sign token with id, email, role
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
                id: user.id,
                email: user.email,
                role: user.role
            }, "7d");
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                user
            });
            // set cookie in env-aware way
            setSessionCookie(res, token);
            return res;
        }
        // ---------- Google OAuth signup ----------
        if (provider === "google") {
            // For OAuth you typically verify the Google token on the server before creating.
            // Here we assume upstream verification was done and we just create the account.
            // If requested role is ADMIN -> atomic check+create
            if (requestedRoleForDb === "ADMIN") {
                try {
                    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                        const exists = await adminExistsTx(tx);
                        if (exists) {
                            throw {
                                code: "ADMIN_EXISTS"
                            };
                        }
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
                        await tx.account.create({
                            data: {
                                provider: "google",
                                providerAccountId: body?.role ? String(body.role) : String(body.email),
                                userId: user.id
                            }
                        }).catch(()=>{}); // optional: ignore if account table not used here
                        return user;
                    });
                    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
                        id: result.id,
                        email: result.email,
                        role: result.role
                    }, "7d");
                    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: true,
                        user: result
                    });
                    setSessionCookie(res, token);
                    return res;
                } catch (err) {
                    if (err && err.code === "ADMIN_EXISTS") {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: "An admin account already exists"
                        }, {
                            status: 409
                        });
                    }
                    console.error("google signup error (admin path):", err);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: "Server error"
                    }, {
                        status: 500
                    });
                }
            }
            // Non-admin google create path
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.create({
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
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signToken"])({
                id: user.id,
                email: user.email,
                role: user.role
            }, "7d");
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                user
            });
            setSessionCookie(res, token);
            return res;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unsupported provider"
        }, {
            status: 400
        });
    } catch (err) {
        // special-case thrown admin-exists signal from transaction
        if (err && err.code === "ADMIN_EXISTS") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "An admin account already exists"
            }, {
                status: 409
            });
        }
        console.error("signup error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5cc968b._.js.map