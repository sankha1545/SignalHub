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
"[project]/frontend/src/app/api/phone/verify-otp/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/phone/verify-otp/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
function safeStringify(v) {
    try {
        return JSON.stringify(v);
    } catch  {
        return String(v);
    }
}
async function fetchCurrentUserWithCookies(req) {
    // Build a base URL for internal fetch. Prefer forwarded proto/host; fall back to localhost:3000.
    const host = req.headers.get("host") || "localhost:3000";
    const proto = req.headers.get("x-forwarded-proto") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http");
    const base = `${proto}://${host}`;
    try {
        const cookieHeader = req.headers.get("cookie") || "";
        const res = await fetch(`${base}/api/me`, {
            headers: {
                cookie: cookieHeader
            },
            cache: "no-store"
        });
        if (!res.ok) return null;
        const j = await res.json().catch(()=>null);
        return j?.user ?? null;
    } catch (e) {
        console.warn("[verify-otp] /api/me fetch failed", e);
        return null;
    }
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const phone = (body?.phone ?? "").toString();
        const otp = (body?.otp ?? "").toString();
        if (!phone || !otp) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Phone and OTP are required"
            }, {
                status: 400
            });
        }
        // Find latest unused OTP
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.findFirst({
            where: {
                phone,
                used: false
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!record) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No OTP found for this phone"
            }, {
                status: 404
            });
        }
        const now = Date.now();
        const createdAt = new Date(record.createdAt).getTime();
        if (now - createdAt > 5 * 60 * 1000) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "OTP expired. Please request a new one."
            }, {
                status: 400
            });
        }
        if ((record.attempts ?? 0) >= 5) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Too many attempts. Request new OTP."
            }, {
                status: 429
            });
        }
        if (record.otp !== otp) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.update({
                where: {
                    id: record.id
                },
                data: {
                    attempts: (record.attempts ?? 0) + 1
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid OTP"
            }, {
                status: 400
            });
        }
        // mark used
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].phoneOtp.update({
            where: {
                id: record.id
            },
            data: {
                used: true
            }
        });
        // 1) Try to identify the currently authenticated user by calling internal /api/me with same cookies
        const sessionUser = await fetchCurrentUserWithCookies(req);
        let userToReturn = null;
        if (sessionUser && sessionUser.id) {
            // update the logged-in user's profile
            const userId = sessionUser.id;
            // Attempt to update profile fields safely.
            // We'll try profile.upsert first (if you have a Profile model), otherwise update top-level fields.
            try {
                // Try to upsert profile (works if you have a Profile model related by userId)
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.upsert({
                    where: {
                        userId
                    },
                    create: {
                        userId,
                        // if your schema enforces required fields adjust accordingly
                        phoneNumber: phone,
                        phoneVerified: true,
                        phoneVerifiedAt: new Date()
                    },
                    update: {
                        phoneNumber: phone,
                        phoneVerified: true,
                        phoneVerifiedAt: new Date()
                    }
                });
            } catch (profileErr) {
                // fallback: top-level user update if your schema stores phone on user table
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
                        where: {
                            id: userId
                        },
                        data: {
                            // update top-level phone if present
                            phone: phone
                        }
                    });
                } catch (uErr) {
                    // fallback: attempt to update profile.metadata JSON if profile/phone columns are missing
                    try {
                        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
                            where: {
                                userId
                            },
                            select: {
                                metadata: true
                            }
                        });
                        const meta = {
                            ...existing?.metadata ?? {},
                            phone,
                            phoneVerified: true,
                            phoneVerifiedAt: new Date().toISOString()
                        };
                        if (existing) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.update({
                                where: {
                                    userId
                                },
                                data: {
                                    metadata: meta
                                }
                            });
                        } else {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.create({
                                data: {
                                    userId,
                                    metadata: meta
                                }
                            });
                        }
                    } catch (metaErr) {
                        console.error("[verify-otp] profile fallback update failed", metaErr);
                    // don't fail the whole request - we will still try to return a response
                    }
                }
            }
            // fetch fresh user with profile
            userToReturn = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    profile: true,
                    updatedAt: true
                }
            });
        } else {
            // If no session user found, attempt to find user by phone or contact and update that user's profile
            // Try top-level user.phone (if exists)
            try {
                const userByPhone = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
                    where: {
                        phone
                    },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        profile: true
                    }
                }).catch(()=>null);
                if (userByPhone) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.upsert({
                            where: {
                                userId: userByPhone.id
                            },
                            create: {
                                userId: userByPhone.id,
                                phoneNumber: phone,
                                phoneVerified: true,
                                phoneVerifiedAt: new Date()
                            },
                            update: {
                                phoneNumber: phone,
                                phoneVerified: true,
                                phoneVerifiedAt: new Date()
                            }
                        });
                    } catch  {
                        // ignore and try metadata fallback
                        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
                            where: {
                                userId: userByPhone.id
                            },
                            select: {
                                metadata: true
                            }
                        }).catch(()=>null);
                        const meta = {
                            ...existing?.metadata ?? {},
                            phone,
                            phoneVerified: true,
                            phoneVerifiedAt: new Date().toISOString()
                        };
                        if (existing) {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.update({
                                where: {
                                    userId: userByPhone.id
                                },
                                data: {
                                    metadata: meta
                                }
                            });
                        } else {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.create({
                                data: {
                                    userId: userByPhone.id,
                                    metadata: meta
                                }
                            });
                        }
                    }
                    userToReturn = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                        where: {
                            id: userByPhone.id
                        },
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            profile: true,
                            updatedAt: true
                        }
                    });
                }
            } catch (e) {
                console.warn("[verify-otp] userByPhone check failed", e);
            }
            // If still no user, try contact table (if present)
            if (!userToReturn) {
                try {
                    const contact = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contact.findUnique({
                        where: {
                            phone
                        }
                    }).catch(()=>null);
                    if (contact && contact.userId) {
                        const uid = contact.userId;
                        try {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.upsert({
                                where: {
                                    userId: uid
                                },
                                create: {
                                    userId: uid,
                                    phoneNumber: phone,
                                    phoneVerified: true,
                                    phoneVerifiedAt: new Date()
                                },
                                update: {
                                    phoneNumber: phone,
                                    phoneVerified: true,
                                    phoneVerifiedAt: new Date()
                                }
                            });
                        } catch  {
                            // metadata fallback
                            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.findUnique({
                                where: {
                                    userId: uid
                                },
                                select: {
                                    metadata: true
                                }
                            }).catch(()=>null);
                            const meta = {
                                ...existing?.metadata ?? {},
                                phone,
                                phoneVerified: true,
                                phoneVerifiedAt: new Date().toISOString()
                            };
                            if (existing) {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.update({
                                    where: {
                                        userId: uid
                                    },
                                    data: {
                                        metadata: meta
                                    }
                                });
                            } else {
                                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].profile.create({
                                    data: {
                                        userId: uid,
                                        metadata: meta
                                    }
                                });
                            }
                        }
                        userToReturn = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                            where: {
                                id: uid
                            },
                            select: {
                                id: true,
                                email: true,
                                name: true,
                                profile: true,
                                updatedAt: true
                            }
                        });
                    }
                } catch (cErr) {
                    console.warn("[verify-otp] contact lookup failed", cErr);
                }
            }
        }
        // If still no userToReturn, create/ensure contact exists and return a minimal "patch" that UI can use
        if (!userToReturn) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].contact.upsert({
                    where: {
                        phone
                    },
                    create: {
                        phone,
                        name: `unknown-${phone}`
                    },
                    update: {
                        phone
                    }
                });
            } catch (e) {
            // ignore
            }
            // Return non-failing success, but include a user-like patch so frontend can optimistically update UI
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                message: "OTP verified but no user account linked to this session. Contact created in directory.",
                userPatch: {
                    profile: {
                        phoneNumber: phone,
                        phoneVerified: true,
                        phoneVerifiedAt: new Date().toISOString()
                    }
                }
            });
        }
        // Successful update -> return canonical user object with profile
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Phone verified successfully",
            user: userToReturn
        });
    } catch (err) {
        console.error("verify-otp error", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de3c1822._.js.map