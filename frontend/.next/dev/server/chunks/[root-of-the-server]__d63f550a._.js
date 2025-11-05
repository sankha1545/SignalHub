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
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[project]/frontend/src/lib/providers/twilio.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/providers/twilio.ts
__turbopack_context__.s([
    "sendSms",
    ()=>sendSms,
    "sendWhatsApp",
    ()=>sendWhatsApp,
    "validateTwilioRequest",
    ()=>validateTwilioRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$twilio$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/twilio/lib/index.js [app-route] (ecmascript)");
;
const SID = process.env.TWILIO_SID ?? "";
const AUTH = process.env.TWILIO_AUTH_TOKEN ?? "";
const FROM = process.env.TWILIO_PHONE_NUMBER ?? "";
const WA_FROM = process.env.TWILIO_WHATSAPP_NUMBER ?? "";
const client = SID && AUTH ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$twilio$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(SID, AUTH) : null;
async function sendSms({ to, body }) {
    if (!client) throw new Error("Twilio not configured");
    const msg = await client.messages.create({
        body,
        from: FROM,
        to
    });
    return {
        sid: msg.sid,
        status: msg.status
    };
}
async function sendWhatsApp({ to, body }) {
    if (!client) throw new Error("Twilio not configured");
    const msg = await client.messages.create({
        body,
        from: `whatsapp:${WA_FROM}`,
        to: `whatsapp:${to.replace(/^whatsapp:/, "")}`
    });
    return {
        sid: msg.sid,
        status: msg.status
    };
}
function validateTwilioRequest() {
    // implement signature check if required
    return true;
}
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/frontend/src/lib/providers/email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/providers/email.ts
__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
const RESEND_KEY = process.env.RESEND_API_KEY ?? "";
async function sendEmail({ to, subject, html, text, from }) {
    // If RESEND_API_KEY present you can use Resend's API (not included to avoid extra dep).
    // Fallback to SMTP using nodemailer.
    const fromAddr = from ?? `SignalHub <${process.env.SMTP_USER ?? "noreply@example.com"}>`;
    if (process.env.SMTP_HOST) {
        const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: Number(process.env.SMTP_PORT ?? 587) === 465,
            auth: process.env.SMTP_USER ? {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            } : undefined
        });
        const info = await transporter.sendMail({
            from: fromAddr,
            to,
            subject: subject ?? "Message from SignalHub",
            text,
            html
        });
        // nodemailer returns messageId
        // messageId may be like <...>
        return {
            id: info.messageId ?? null,
            status: "sent"
        };
    }
    // If no SMTP configured, throw
    throw new Error("No email provider configured (set SMTP_HOST or RESEND_API_KEY)");
}
}),
"[externals]/bcrypt [external] (bcrypt, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("bcrypt", () => require("bcrypt"));

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

// frontend/src/app/api/messages/send/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$providers$2f$twilio$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/providers/twilio.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$providers$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/providers/email.ts [app-route] (ecmascript)");
;
;
;
;
const ALLOWED_CHANNELS = [
    "SMS",
    "WHATSAPP",
    "EMAIL",
    "TWITTER",
    "MESSENGER"
];
const AUTO_CREATE_USERS = process.env.AUTO_CREATE_USERS === "true";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";
function devLog(...args) {
    if ("TURBOPACK compile-time truthy", 1) console.debug("[/api/messages/send]", ...args);
}
function tryDecodeToken(token) {
    if (!token) return null;
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const jwt = __turbopack_context__.r("[project]/frontend/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (verifyErr) {
            devLog("JWT verify failed:", verifyErr?.message ?? verifyErr);
            try {
                return jwt.decode(token);
            } catch (decodeErr) {
                devLog("jwt.decode failed:", decodeErr?.message ?? decodeErr);
                return null;
            }
        }
    } catch (e) {
        devLog("jsonwebtoken require failed:", e?.message ?? e);
        return null;
    }
}
function extractLikelyCookieToken(cookieHeader) {
    if (!cookieHeader) return null;
    const names = [
        "token",
        "next-auth.session-token",
        "__Secure-next-auth.session-token",
        "session",
        "sessionToken"
    ];
    for (const name of names){
        const found = cookieHeader.split(";").map((s)=>s.trim()).find((s)=>s.startsWith(`${name}=`));
        if (found) {
            const eq = found.indexOf("=");
            if (eq === -1) continue;
            return decodeURIComponent(found.slice(eq + 1));
        }
    }
    return null;
}
function normalizePhone(p) {
    if (!p) return null;
    const trimmed = p.trim();
    // keep leading + if present, remove other separators
    const keepPlus = trimmed.startsWith("+");
    let cleaned = trimmed.replace(/[()\s.-]/g, "");
    if (!keepPlus) cleaned = cleaned.replace(/^\+/, "");
    return cleaned || null;
}
async function tryGetNextAuthSessionUserId() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nextAuth = __turbopack_context__.r("[project]/frontend/node_modules/next-auth/index.js [app-route] (ecmascript)");
        if (nextAuth && typeof nextAuth.getServerSession === "function") {
            try {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const authModule = __turbopack_context__.r("[project]/frontend/src/lib/auth.ts [app-route] (ecmascript)");
                const authOptions = authModule?.authOptions ?? authModule?.default ?? null;
                if (authOptions) {
                    const session = await nextAuth.getServerSession(authOptions);
                    if (session?.user) {
                        return {
                            id: session.user.id ?? null,
                            email: session.user.email ?? null
                        };
                    }
                } else {
                    devLog("authOptions not found for next-auth in local import.");
                }
            } catch (e) {
                devLog("getServerSession attempt failed:", e?.message ?? e);
            }
        }
    } catch (e) {
        devLog("next-auth not present or failed to import:", e?.message ?? e);
    }
    return {
        id: null,
        email: null
    };
}
/** Append failedReason+provider to message.metadata (best-effort) */ async function appendFailedReasonToMessage(messageId, provider, reason) {
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
            where: {
                id: messageId
            }
        });
        const newMeta = {
            ...existing?.metadata ?? {},
            failedReason: reason,
            provider
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.update({
            where: {
                id: messageId
            },
            data: {
                metadata: newMeta
            }
        });
    } catch (e) {
        devLog("appendFailedReasonToMessage failed:", e);
    }
}
/**
 * Robust ensureContact helper:
 * - Accepts contactIdProvided, phoneNormalized, email, name
 * - Tries to find by id -> phone -> email
 * - Creates contact with safe payload (phone/email/name set to null when not available)
 * - Handles unique-race (P2002) by refetching existing record
 * - Avoids failing when id was provided but already exists
 */ async function ensureContactSafe(options) {
    const { contactIdProvided, phoneNormalized, email, name } = options;
    try {
        // 1) If explicit contact id provided, try findUnique
        if (contactIdProvided) {
            try {
                const found = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findUnique({
                    where: {
                        id: contactIdProvided
                    }
                });
                if (found) return found;
            } catch (e) {
                // If prisma complains about unknown column or schema mismatch, log and continue to other lookups
                devLog("prisma.findUnique by id failed:", e?.message ?? e);
            }
        }
        // 2) Try find by phone if available
        if (phoneNormalized) {
            try {
                const byPhone = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                    where: {
                        phone: phoneNormalized
                    }
                });
                if (byPhone) return byPhone;
            } catch (e) {
                devLog("prisma.findFirst by phone failed:", e?.message ?? e);
            }
        }
        // 3) Try find by email if available
        if (email) {
            try {
                const byEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                    where: {
                        email
                    }
                });
                if (byEmail) return byEmail;
            } catch (e) {
                devLog("prisma.findFirst by email failed:", e?.message ?? e);
            }
        }
        // 4) Build create payload. Use null values (not undefined) for optional fields where prisma might have non-nullable constraints.
        const createPayload = {
            name: name ?? null,
            phone: phoneNormalized ?? null,
            email: email ?? null
        };
        // If user explicitly passed a contactIdProvided and you want to set id on create, try it, but handle P2002 race.
        if (contactIdProvided) {
            try {
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.create({
                    data: {
                        id: contactIdProvided,
                        ...createPayload
                    }
                });
                return created;
            } catch (err) {
                // Unique constraint or other error - attempt falling back to create without id or returning existing
                devLog("create with provided id failed, will fallback:", err?.message ?? err);
                // If P2002 unique constraint (id already exists or unique phone/email conflict),
                // find the existing one again by id/phone/email and return it.
                if (err?.code === "P2002") {
                    // try to find by id first, then phone, then email
                    try {
                        const existById = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findUnique({
                            where: {
                                id: contactIdProvided
                            }
                        });
                        if (existById) return existById;
                    } catch (e) {
                        devLog("refetch by id after P2002 failed:", e);
                    }
                    if (phoneNormalized) {
                        const existByPhone = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                            where: {
                                phone: phoneNormalized
                            }
                        });
                        if (existByPhone) return existByPhone;
                    }
                    if (email) {
                        const existByEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                            where: {
                                email
                            }
                        });
                        if (existByEmail) return existByEmail;
                    }
                // Fall through to attempt create without id
                } else {
                    // Non-unique error: rethrow to upper caller for consistent handling
                    throw err;
                }
            }
        }
        // 5) Create without forcing id
        try {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.create({
                data: createPayload
            });
            return created;
        } catch (err) {
            devLog("create without id failed:", err?.message ?? err);
            // If unique constraint (P2002), try to find the existing contact and return it
            if (err?.code === "P2002") {
                if (phoneNormalized) {
                    const existByPhone = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                        where: {
                            phone: phoneNormalized
                        }
                    });
                    if (existByPhone) return existByPhone;
                }
                if (email) {
                    const existByEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findFirst({
                        where: {
                            email
                        }
                    });
                    if (existByEmail) return existByEmail;
                }
                // try id if available (edge)
                if (contactIdProvided) {
                    const existById = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].contact.findUnique({
                        where: {
                            id: contactIdProvided
                        }
                    });
                    if (existById) return existById;
                }
            }
            // If we get here, rethrow original error so caller can handle it
            throw err;
        }
    } catch (finalErr) {
        devLog("ensureContactSafe final error:", finalErr);
        throw finalErr;
    }
}
async function POST(req) {
    devLog("start POST");
    // parse JSON body
    let body = null;
    try {
        body = await req.json();
    } catch (err) {
        devLog("invalid json body", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid JSON"
        }, {
            status: 400
        });
    }
    const toRaw = typeof body.to === "string" ? body.to.trim() : null;
    const channelRaw = typeof body.channel === "string" ? body.channel.trim().toUpperCase() : null;
    const messageBody = typeof body.body === "string" ? body.body.trim() : null;
    const contactIdProvided = typeof body.contactId === "string" ? body.contactId : undefined;
    const sendAtRaw = body.sendAt ? new Date(body.sendAt) : null;
    // Also accept name/email from body (useful for contact creation)
    const contactName = typeof body.name === "string" ? body.name.trim() : body.metadata?.name ? String(body.metadata.name) : null;
    const contactEmail = typeof body.email === "string" ? body.email.trim() : body.metadata?.email ? String(body.metadata.email) : null;
    if (!toRaw || !channelRaw || !messageBody) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing required fields (to, channel, body)"
        }, {
            status: 400
        });
    }
    if (!ALLOWED_CHANNELS.includes(channelRaw)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unsupported channel"
        }, {
            status: 400
        });
    }
    const channel = channelRaw;
    const phoneNormalized = normalizePhone(toRaw);
    // ---------------------------
    // Resolve identity (NextAuth session -> cookie token -> Authorization Bearer)
    // ---------------------------
    let resolvedUserId = null;
    let resolvedEmail = null;
    try {
        const fromNextAuth = await tryGetNextAuthSessionUserId();
        resolvedUserId = fromNextAuth.id ?? resolvedUserId;
        resolvedEmail = fromNextAuth.email ?? resolvedEmail;
    } catch (e) {
        devLog("next-auth helper error:", e);
    }
    if (!resolvedUserId && !resolvedEmail) {
        try {
            const cookieHeader = req.headers.get("cookie") ?? "";
            const cookieToken = extractLikelyCookieToken(cookieHeader);
            if (cookieToken) {
                const decoded = tryDecodeToken(cookieToken);
                if (decoded) {
                    resolvedUserId = resolvedUserId ?? decoded.sub ?? decoded.id ?? decoded.userId ?? null;
                    resolvedEmail = resolvedEmail ?? decoded.email ?? null;
                }
            }
        } catch (e) {
            devLog("cookie decode error:", e);
        }
    }
    if (!resolvedUserId && !resolvedEmail) {
        try {
            const authHeader = req.headers.get("authorization") ?? req.headers.get("Authorization");
            if (authHeader && typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
                const token = authHeader.slice(7).trim();
                if (token) {
                    const decoded = tryDecodeToken(token);
                    if (decoded) {
                        resolvedUserId = resolvedUserId ?? decoded.sub ?? decoded.id ?? decoded.userId ?? null;
                        resolvedEmail = resolvedEmail ?? decoded.email ?? null;
                    }
                }
            }
        } catch (e) {
            devLog("authorization header decode error:", e);
        }
    }
    if (!resolvedUserId && !resolvedEmail) {
        devLog("Auth failed — no user id/email resolved");
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not authenticated"
        }, {
            status: 401
        });
    }
    devLog("resolved identity:", {
        id: resolvedUserId ? "<id>" : null,
        email: resolvedEmail ?? null
    });
    // ---------------------------
    // Ensure sender User exists (or auto-create in dev)
    // ---------------------------
    let senderUser = null;
    try {
        if (resolvedUserId) senderUser = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id: resolvedUserId
            }
        });
        if (!senderUser && resolvedEmail) senderUser = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                email: resolvedEmail
            }
        });
        if (!senderUser) {
            if (!AUTO_CREATE_USERS) {
                devLog("authenticated user not found in DB and AUTO_CREATE_USERS is false");
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Authenticated user not found in database. Please sign in or set AUTO_CREATE_USERS=true for dev."
                }, {
                    status: 401
                });
            }
            const createData = {
                email: resolvedEmail ?? `${resolvedUserId ?? "devuser"}@example.invalid`,
                role: "VIEWER",
                name: "AutoCreated Dev User"
            };
            if (resolvedUserId) createData.id = resolvedUserId;
            try {
                senderUser = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.create({
                    data: createData
                });
                devLog("auto-created sender user (dev):", senderUser.id);
            } catch (createErr) {
                devLog("user.create failed (with id). Retrying without id:", createErr?.message ?? createErr);
                const fallback = {
                    ...createData
                };
                delete fallback.id;
                senderUser = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.create({
                    data: fallback
                });
                devLog("auto-created sender user fallback:", senderUser.id);
            }
        } else {
            devLog("found senderUser:", senderUser.id);
        }
    } catch (err) {
        console.error("[/api/messages/send] user ensure error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to resolve/create sender user"
        }, {
            status: 500
        });
    }
    // ---------------------------
    // Ensure Contact exists (robust)
    // ---------------------------
    let contact = null;
    try {
        // Must have at least one identifier to ensure contact
        if (!contactIdProvided && !phoneNormalized && !contactEmail) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing contact identifier (contactId, to/phone, or email)"
            }, {
                status: 400
            });
        }
        contact = await ensureContactSafe({
            contactIdProvided,
            phoneNormalized,
            email: contactEmail,
            name: contactName
        });
        devLog("ensured contact:", !!contact, contact?.id ?? "(no id)");
    } catch (err) {
        console.error("[/api/messages/send] contact ensure failed:", err);
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Failed to ensure contact",
                detail: err?.message ?? String(err),
                code: err?.code ?? null
            }, {
                status: 500
            });
        }
        //TURBOPACK unreachable
        ;
    }
    // ---------------------------
    // Find or create Thread for this contact
    // ---------------------------
    let thread = null;
    try {
        thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].thread.findFirst({
            where: {
                contactId: contact.id
            },
            orderBy: {
                lastAt: "desc"
            }
        });
        if (!thread) {
            thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].thread.create({
                data: {
                    contactId: contact.id,
                    creatorId: senderUser?.id ?? undefined,
                    lastAt: new Date()
                }
            });
            devLog("created thread:", thread.id);
        } else {
            devLog("found thread:", thread.id);
        }
    } catch (err) {
        console.error("[/api/messages/send] thread ensure failed:", err);
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Failed to ensure thread",
                detail: err?.message ?? String(err),
                code: err?.code ?? null
            }, {
                status: 500
            });
        }
        //TURBOPACK unreachable
        ;
    }
    // ---------------------------
    // Scheduled messages — create ScheduledMessage and return early
    // ---------------------------
    if (sendAtRaw && !Number.isNaN(sendAtRaw.getTime())) {
        try {
            const scheduled = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].scheduledMessage.create({
                data: {
                    threadId: thread.id,
                    senderId: senderUser?.id ?? undefined,
                    body: messageBody,
                    channel,
                    sendAt: sendAtRaw,
                    metadata: {
                        to: phoneNormalized,
                        email: contactEmail,
                        ...body.metadata ?? {}
                    }
                }
            });
            devLog("created scheduledMessage:", scheduled.id);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                scheduled,
                thread,
                notice: "Message scheduled for future delivery."
            });
        } catch (err) {
            console.error("[/api/messages/send] failed creating scheduled message:", err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Failed to schedule message",
                detail: ("TURBOPACK compile-time truthy", 1) ? err?.message ?? String(err) : "TURBOPACK unreachable"
            }, {
                status: 500
            });
        }
    }
    // ---------------------------
    // Create the outbound Message (do NOT set `status` on Message)
    // ---------------------------
    let createdMessage = null;
    try {
        const messageData = {
            threadId: thread.id,
            senderId: senderUser?.id ?? null,
            body: messageBody,
            channel,
            direction: "OUTBOUND",
            metadata: {
                to: phoneNormalized,
                email: contactEmail,
                ...body.metadata ?? {}
            }
        };
        createdMessage = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.create({
            data: messageData
        });
        devLog("created message:", createdMessage.id);
        // best-effort update thread.lastAt
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].thread.update({
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
    } catch (err) {
        console.error("[/api/messages/send] error creating message (full):", err);
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: err?.message ?? String(err),
                code: err?.code ?? null,
                meta: err?.meta ?? null
            }, {
                status: 500
            });
        }
        //TURBOPACK unreachable
        ;
    }
    // ---------------------------
    // Immediate delivery for supported channels (graceful fallback if provider not configured)
    // ---------------------------
    try {
        if (channel === "SMS") {
            devLog("sending SMS via provider...", {
                to: createdMessage.metadata?.to ?? toRaw
            });
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$providers$2f$twilio$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendSms"])({
                    to: createdMessage.metadata?.to ?? toRaw,
                    body: messageBody
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.update({
                    where: {
                        id: createdMessage.id
                    },
                    data: {
                        externalId: res?.sid ?? res?.id ?? null,
                        sentAt: new Date()
                    }
                });
            } catch (providerErr) {
                devLog("provider send failed (SMS):", providerErr?.message ?? providerErr);
                await appendFailedReasonToMessage(createdMessage.id, "twilio", providerErr?.message ?? String(providerErr));
                const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
                    where: {
                        id: createdMessage.id
                    }
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    message,
                    thread,
                    notice: "Message saved but Twilio SMS send failed (provider not configured or error). Delivery pending.",
                    debug: ("TURBOPACK compile-time truthy", 1) ? {
                        providerError: providerErr?.message ?? String(providerErr)
                    } : "TURBOPACK unreachable"
                });
            }
        } else if (channel === "WHATSAPP") {
            devLog("sending WhatsApp via provider...", {
                to: createdMessage.metadata?.to ?? toRaw
            });
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$providers$2f$twilio$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsApp"])({
                    to: createdMessage.metadata?.to ?? toRaw,
                    body: messageBody
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.update({
                    where: {
                        id: createdMessage.id
                    },
                    data: {
                        externalId: res?.sid ?? res?.id ?? null,
                        sentAt: new Date()
                    }
                });
            } catch (providerErr) {
                devLog("provider send failed (WHATSAPP):", providerErr?.message ?? providerErr);
                await appendFailedReasonToMessage(createdMessage.id, "twilio_whatsapp", providerErr?.message ?? String(providerErr));
                const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
                    where: {
                        id: createdMessage.id
                    }
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    message,
                    thread,
                    notice: "Message saved but Twilio WhatsApp send failed (provider not configured or error). Delivery pending.",
                    debug: ("TURBOPACK compile-time truthy", 1) ? {
                        providerError: providerErr?.message ?? String(providerErr)
                    } : "TURBOPACK unreachable"
                });
            }
        } else if (channel === "EMAIL") {
            devLog("sending EMAIL via provider...", {
                to: createdMessage.metadata?.to ?? toRaw
            });
            try {
                const emailRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$providers$2f$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                    to: createdMessage.metadata?.to ?? toRaw,
                    subject: body.subject ?? "Message from SignalHub",
                    html: body.html ?? `<div>${messageBody}</div>`,
                    text: body.text ?? messageBody,
                    from: body.from ?? undefined
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.update({
                    where: {
                        id: createdMessage.id
                    },
                    data: {
                        externalId: emailRes?.id ?? emailRes?.messageId ?? null,
                        sentAt: new Date()
                    }
                });
            } catch (providerErr) {
                devLog("provider send failed (EMAIL):", providerErr?.message ?? providerErr);
                await appendFailedReasonToMessage(createdMessage.id, "email", providerErr?.message ?? String(providerErr));
                const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
                    where: {
                        id: createdMessage.id
                    }
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    message,
                    thread,
                    notice: "Message saved but email send failed (provider not configured or error). Delivery pending.",
                    debug: ("TURBOPACK compile-time truthy", 1) ? {
                        providerError: providerErr?.message ?? String(providerErr)
                    } : "TURBOPACK unreachable"
                });
            }
        } else {
            // TWITTER / MESSENGER: not integrated yet — keep message in DB for later processing
            devLog(`channel ${channel} not integrated for immediate delivery; message left in DB for later processing.`);
            const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
                where: {
                    id: createdMessage.id
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                message,
                thread,
                notice: `Channel ${channel} is not integrated for immediate delivery. Message stored.`
            });
        }
    } catch (fatalErr) {
        // Defensive catch - provider-level errors should have been handled above
        console.error("[/api/messages/send] unexpected fatal error during provider send:", fatalErr);
        await appendFailedReasonToMessage(createdMessage.id, "internal", fatalErr?.message ?? String(fatalErr));
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
            where: {
                id: createdMessage.id
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message,
            thread,
            notice: "Message saved but delivery failed due to an internal error. Check server logs.",
            debug: ("TURBOPACK compile-time truthy", 1) ? {
                error: String(fatalErr)
            } : "TURBOPACK unreachable"
        });
    }
    // ---------------------------
    // Re-fetch and return the updated message
    // ---------------------------
    const message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].message.findUnique({
        where: {
            id: createdMessage.id
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true,
        message,
        thread
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d63f550a._.js.map