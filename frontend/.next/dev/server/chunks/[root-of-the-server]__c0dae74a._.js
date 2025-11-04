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
"[project]/frontend/src/app/api/messages/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/messages/send/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
// helper to safely parse JSON body
// add near top of file for debugging
console.log("[/api/messages/send] incoming request");
try {
    // If using Request from Next.js App Router:
    // print raw cookie header
    // (if you have access to the Node request object instead, print req.headers.cookie)
    // but in Next.js route.ts you can read headers via Request.headers
    // example: headers().get('cookie') is server-only import from 'next/headers' if needed
    // For simplicity (works in many setups):
    const cookieHeader = globalThis.__NEXT_INIT__ ? null : null;
    console.log("[/api/messages/send] headers placeholder - adapt to your runtime");
} catch (e) {
    console.warn("[/api/messages/send] debug header read failed", e);
}
async function parseJson(req) {
    try {
        return await req.json();
    } catch  {
        return {};
    }
}
async function POST(req) {
    try {
        const body = await parseJson(req);
        const to = body?.to;
        const channel = body?.channel;
        const textBody = body?.body;
        const threadId = body?.threadId;
        const contactId = body?.contactId;
        const metadata = body?.metadata ?? {};
        if (!to || !channel || !textBody) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields: to, channel, body"
            }, {
                status: 400
            });
        }
        // Obtain authenticated user id here. Replace with your auth logic.
        // Example: const userId = await getUserIdFromReq(req);
        const userId = req.userId ?? process.env.DEBUG_FAKE_USER_ID ?? null;
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Not authenticated"
            }, {
                status: 401
            });
        }
        // Ensure channel upper-case
        const channelUC = String(channel).toUpperCase();
        // Find or create thread safely
        let thread = null;
        try {
            if (threadId) {
                thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.findUnique({
                    where: {
                        id: threadId
                    }
                });
            }
            if (!thread && contactId) {
                thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.findFirst({
                    where: {
                        contactId
                    }
                });
                if (!thread) {
                    thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.create({
                        data: {
                            contactId,
                            // set minimal fields — adapt to your Thread model
                            title: `Thread for contact ${contactId}`,
                            metadata: {
                                createdBy: userId,
                                to
                            }
                        }
                    });
                }
            }
            if (!thread) {
                // try to find thread by metadata 'to' if thread stores metadata JSON
                try {
                    thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.findFirst({
                        where: {
                            metadata: {
                                path: [
                                    "to"
                                ],
                                equals: to
                            }
                        }
                    });
                } catch  {
                    // If JSON query unsupported, ignore and fallback to create
                    thread = null;
                }
            }
            if (!thread) {
                // fallback create minimal thread
                thread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.create({
                    data: {
                        title: `Thread with ${to}`,
                        metadata: {
                            to,
                            createdBy: userId
                        }
                    }
                });
            }
        } catch (errThread) {
            console.error("[send] thread lookup/create failed:", errThread);
            // return explanatory error to client
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to prepare thread",
                detail: String(errThread)
            }, {
                status: 500
            });
        }
        // Create message and connect to thread (use relation connect to satisfy schemas that require relation)
        let message;
        try {
            message = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].message.create({
                data: {
                    thread: {
                        connect: {
                            id: thread.id
                        }
                    },
                    senderId: userId,
                    body: textBody,
                    channel: channelUC,
                    direction: "OUTBOUND",
                    metadata: {
                        ...metadata,
                        to
                    }
                }
            });
            // update thread metadata/lastAt snippet
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.update({
                where: {
                    id: thread.id
                },
                data: {
                    lastAt: new Date()
                }
            });
        } catch (prismaErr) {
            console.error("[send] prisma message.create failed:", prismaErr);
            // return helpful JSON to client
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to create message",
                detail: String(prismaErr)
            }, {
                status: 500
            });
        }
        // fetch fresh canonical thread for client
        const freshThread = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].thread.findUnique({
            where: {
                id: thread.id
            },
            include: {
                messages: {
                    take: 20,
                    orderBy: {
                        createdAt: "desc"
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message,
            thread: freshThread
        });
    } catch (err) {
        console.error("[send] unexpected error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error",
            detail: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0dae74a._.js.map