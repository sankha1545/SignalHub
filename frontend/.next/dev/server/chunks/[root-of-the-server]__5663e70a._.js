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
"[project]/frontend/src/app/api/messages/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/messages/send/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/auth.ts [app-route] (ecmascript)"); // example — whatever you use
(()=>{
    const e = new Error("Cannot find module '@/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { to, messageBody, channel, contactId } = body;
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookies"])(req);
        const resolvedUserId = user?.id;
        if (!resolvedUserId) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
        // ---------- Robust flow: ensure Contact -> ensure Thread -> create Message ----------
        /**
 * Assumptions:
 * - Your Prisma models expose prisma.contact, prisma.thread, prisma.message
 * - Contact unique id field is `id`. If your Contact uses a different unique field, adjust the queries below.
 * - Contact phone field guessed as `phone`. If yours is `phoneNumber` or `value`, change accordingly.
 */ const senderId = String(resolvedUserId);
        // Helper: normalize phone string for lookup (lightweight)
        function normalizePhone(p) {
            if (!p) return null;
            // simple normalizer: remove spaces, parentheses, dashes
            return p.replace(/[()\s-]/g, "");
        }
        const normalizedPhone = normalizePhone(to);
        // 1) Ensure contact exists
        let contact = null;
        try {
            if (contactId) {
                contact = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contact.findUnique({
                    where: {
                        id: contactId
                    }
                }).catch(()=>null);
                devLog("lookup contact by id:", contactId, "found:", !!contact);
            }
            if (!contact && normalizedPhone) {
                // Try to find contact by phone column (change field if yours differs)
                // If your Contact schema uses `phoneNumber` or `value`, replace `phone` below.
                contact = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contact.findFirst({
                    where: {
                        phone: normalizedPhone
                    }
                }).catch(()=>null);
                devLog("lookup contact by phone:", normalizedPhone, "found:", !!contact);
            }
            if (!contact) {
                // Create minimal contact record so FK constraints succeed.
                // IMPORTANT: change `phone` below to the actual required field name in your Contact model.
                // If your Contact model has other required fields, add them here.
                const createPayload = {
                    // If you want to keep given contactId as id, set it; else let Prisma generate.
                    ...contactId ? {
                        id: contactId
                    } : {},
                    phone: normalizedPhone ?? undefined
                };
                // Remove undefined keys
                Object.keys(createPayload).forEach((k)=>createPayload[k] === undefined && delete createPayload[k]);
                contact = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contact.create({
                    data: createPayload
                });
                devLog("created contact:", contact?.id ?? "(no id)");
            }
        } catch (err) {
            console.error("[/api/messages/send] contact ensure failed:", err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to ensure contact"
            }, {
                status: 500
            });
        }
        // 2) Find existing thread for the contact, else create a new thread
        let thread = null;
        try {
            thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.findFirst({
                where: {
                    contactId: contact.id
                },
                orderBy: {
                    lastAt: "desc"
                }
            });
            if (!thread) {
                // Create thread referencing the contactId scalar (contact now exists)
                thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.create({
                    data: {
                        contactId: contact.id,
                        creatorId: senderId,
                        lastAt: new Date()
                    }
                });
                devLog("created thread:", thread?.id ?? "(no id)");
            } else {
                devLog("found thread:", thread.id);
            }
        } catch (err) {
            console.error("[/api/messages/send] thread ensure failed:", err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to ensure thread"
            }, {
                status: 500
            });
        }
        // 3) Create the message attaching to the thread and sender
        let message = null;
        try {
            // Prefer using scalar threadId if your Message model has it. If not, Prisma will accept
            // nested relation connect: { id: thread.id } — both are fine. Use relation 'sender' connect.
            const messageData = {
                // If your Message model uses `threadId` scalar:
                ...typeof thread.id === "string" ? {
                    threadId: thread.id
                } : {},
                // Also set nested thread connect in case your schema expects relation:
                // comment out the next line if your Message model uses threadId scalar only.
                thread: undefined,
                sender: {
                    connect: {
                        id: senderId
                    }
                },
                body: messageBody,
                channel,
                direction: "OUTBOUND",
                metadata: {
                    to
                }
            };
            // Remove undefined keys (like thread: undefined) so Prisma validation is clean
            Object.keys(messageData).forEach((k)=>messageData[k] === undefined && delete messageData[k]);
            message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.create({
                data: messageData
            });
            devLog("created message:", message?.id ?? "(no id)");
            // 4) update thread.lastAt
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.update({
                    where: {
                        id: thread.id
                    },
                    data: {
                        lastAt: new Date()
                    }
                });
            } catch (updateErr) {
                devLog("failed to update thread.lastAt:", updateErr?.message ?? updateErr);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                message,
                thread
            });
        } catch (err) {
            console.error("[/api/messages/send] error creating message:", err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Internal server error"
            }, {
                status: 500
            });
        }
    } catch (err) {
        console.error("[/api/messages/send] uncaught:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5663e70a._.js.map