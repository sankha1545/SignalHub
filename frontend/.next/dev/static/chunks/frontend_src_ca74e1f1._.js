(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/modals/ConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConfirmModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "d36fa08b3769f454c5066b4c34179623ed8ed61192ae4ba19f97257f71e0aec4") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d36fa08b3769f454c5066b4c34179623ed8ed61192ae4ba19f97257f71e0aec4";
    }
    const { open, title: t1, message: t2, confirmLabel: t3, cancelLabel: t4, onConfirm, onCancel } = t0;
    const title = t1 === undefined ? "Confirm" : t1;
    const message = t2 === undefined ? "Are you sure?" : t2;
    const confirmLabel = t3 === undefined ? "Yes" : t3;
    const cancelLabel = t4 === undefined ? "Cancel" : t4;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primaryBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    let t6;
    if ($[1] !== open) {
        t5 = ({
            "ConfirmModal[useEffect()]": ()=>{
                if (!open) {
                    return;
                }
                const prev = document.body.style.overflow;
                document.body.style.overflow = "hidden";
                primaryBtnRef.current?.focus();
                return ()=>{
                    document.body.style.overflow = prev;
                };
            }
        })["ConfirmModal[useEffect()]"];
        t6 = [
            open
        ];
        $[1] = open;
        $[2] = t5;
        $[3] = t6;
    } else {
        t5 = $[2];
        t6 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[4] !== onCancel || $[5] !== open) {
        t7 = ({
            "ConfirmModal[useEffect()]": ()=>{
                const onKey = function onKey(e) {
                    if (e.key === "Escape") {
                        onCancel();
                    }
                };
                if (open) {
                    window.addEventListener("keydown", onKey);
                }
                return ()=>window.removeEventListener("keydown", onKey);
            }
        })["ConfirmModal[useEffect()]"];
        t8 = [
            open,
            onCancel
        ];
        $[4] = onCancel;
        $[5] = open;
        $[6] = t7;
        $[7] = t8;
    } else {
        t7 = $[6];
        t8 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    if (!open) {
        return null;
    }
    let t9;
    if ($[8] !== cancelLabel || $[9] !== confirmLabel || $[10] !== message || $[11] !== onCancel || $[12] !== onConfirm || $[13] !== title) {
        let t10;
        if ($[15] !== onCancel) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                onClick: onCancel,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this);
            $[15] = onCancel;
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        let t11;
        if ($[17] !== title) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                id: "confirm-title",
                className: "text-lg font-semibold text-slate-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this);
            $[17] = title;
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        let t12;
        if ($[19] !== message) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-600",
                children: message
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this);
            $[19] = message;
            $[20] = t12;
        } else {
            t12 = $[20];
        }
        let t13;
        if ($[21] !== cancelLabel || $[22] !== onCancel) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onCancel,
                className: "px-4 py-2 rounded-lg border text-sm text-slate-700 hover:bg-slate-50",
                children: cancelLabel
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this);
            $[21] = cancelLabel;
            $[22] = onCancel;
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        let t14;
        if ($[24] !== onConfirm) {
            t14 = ({
                "ConfirmModal[<button>.onClick]": ()=>void onConfirm()
            })["ConfirmModal[<button>.onClick]"];
            $[24] = onConfirm;
            $[25] = t14;
        } else {
            t14 = $[25];
        }
        let t15;
        if ($[26] !== confirmLabel || $[27] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: primaryBtnRef,
                onClick: t14,
                className: "px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:opacity-95",
                children: confirmLabel
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this);
            $[26] = confirmLabel;
            $[27] = t14;
            $[28] = t15;
        } else {
            t15 = $[28];
        }
        let t16;
        if ($[29] !== t13 || $[30] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-end gap-3",
                children: [
                    t13,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this);
            $[29] = t13;
            $[30] = t15;
            $[31] = t16;
        } else {
            t16 = $[31];
        }
        let t17;
        if ($[32] !== t11 || $[33] !== t12 || $[34] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "relative z-10 max-w-lg w-full bg-white rounded-2xl shadow-xl border p-6",
                children: [
                    t11,
                    t12,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this);
            $[32] = t11;
            $[33] = t12;
            $[34] = t16;
            $[35] = t17;
        } else {
            t17 = $[35];
        }
        let t18;
        if ($[36] !== t10 || $[37] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "confirm-title",
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                    t10,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/modals/ConfirmModal.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this);
            $[36] = t10;
            $[37] = t17;
            $[38] = t18;
        } else {
            t18 = $[38];
        }
        t9 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(t18, document.body);
        $[8] = cancelLabel;
        $[9] = confirmLabel;
        $[10] = message;
        $[11] = onCancel;
        $[12] = onConfirm;
        $[13] = title;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    return t9;
}
_s(ConfirmModal, "yVqcVLA5hIXDUo5rr5KcK1j/EuA=");
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/profile/ProfileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/modals/ConfirmModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProfileMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "d7bbde79db36f6ac88ae6001888d1642b5e8df5b4efd792cbef94648a4cda348") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d7bbde79db36f6ac88ae6001888d1642b5e8df5b4efd792cbef94648a4cda348";
    }
    const { avatarUrl, email } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loggingOut, setLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProfileMenu[useEffect()]": ()=>{
                const onDocClick = function onDocClick(e) {
                    if (!menuRef.current) {
                        return;
                    }
                    if (!(e.target instanceof Node)) {
                        return;
                    }
                    if (!menuRef.current.contains(e.target)) {
                        setOpen(false);
                    }
                };
                document.addEventListener("mousedown", onDocClick);
                return ()=>document.removeEventListener("mousedown", onDocClick);
            }
        })["ProfileMenu[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== open) {
        t3 = ({
            "ProfileMenu[useEffect()]": ()=>{
                const onKey = function onKey(e_0) {
                    if (e_0.key === "Escape") {
                        setOpen(false);
                    }
                };
                if (open) {
                    window.addEventListener("keydown", onKey);
                }
                return ()=>window.removeEventListener("keydown", onKey);
            }
        })["ProfileMenu[useEffect()]"];
        t4 = [
            open
        ];
        $[3] = open;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== router) {
        t5 = async function handleLogout() {
            ;
            try {
                setLoggingOut(true);
                await fetch("/api/auth/logout", {
                    method: "POST"
                });
                setConfirmOpen(false);
                setOpen(false);
                router.replace("/auth/login");
            } catch (t6) {
                const err = t6;
                console.error("Logout failed", err);
                setLoggingOut(false);
                setConfirmOpen(false);
            }
        };
        $[6] = router;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleLogout = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ProfileMenu[<button>.onClick]": ()=>setOpen(_ProfileMenuButtonOnClickSetOpen)
        })["ProfileMenu[<button>.onClick]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== avatarUrl || $[10] !== email) {
        t7 = avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: avatarUrl,
            alt: "avatar",
            className: "w-10 h-10 rounded-full object-cover"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 113,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-slate-700",
            children: (email || "U").charAt(0).toUpperCase()
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 113,
            columnNumber: 109
        }, this);
        $[9] = avatarUrl;
        $[10] = email;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== open || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-haspopup": "menu",
            "aria-expanded": open,
            onClick: t6,
            className: "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shadow-sm hover:opacity-95",
            title: "Account menu",
            children: t7
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[12] = open;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== open || $[16] !== router) {
        t9 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "menu",
            "aria-label": "Profile",
            className: "absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border py-2 z-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    role: "menuitem",
                    onClick: {
                        "ProfileMenu[<button>.onClick]": ()=>{
                            setOpen(false);
                            router.push("/profile");
                        }
                    }["ProfileMenu[<button>.onClick]"],
                    className: "w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700",
                    children: "View profile"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
                    lineNumber: 131,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    role: "menuitem",
                    onClick: {
                        "ProfileMenu[<button>.onClick]": ()=>{
                            setConfirmOpen(true);
                        }
                    }["ProfileMenu[<button>.onClick]"],
                    className: "w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700",
                    children: "Logout"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
                    lineNumber: 136,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 131,
            columnNumber: 18
        }, this);
        $[15] = open;
        $[16] = router;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = loggingOut ? "Logging out..." : "Yes, log out";
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "ProfileMenu[<ConfirmModal>.onCancel]": ()=>setConfirmOpen(false)
        })["ProfileMenu[<ConfirmModal>.onCancel]"];
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== handleLogout) {
        t12 = ({
            "ProfileMenu[<ConfirmModal>.onConfirm]": async ()=>{
                await handleLogout();
            }
        })["ProfileMenu[<ConfirmModal>.onConfirm]"];
        $[19] = handleLogout;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== confirmOpen || $[22] !== t10 || $[23] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            open: confirmOpen,
            title: "Log out?",
            message: "Do you want to logout?",
            confirmLabel: t10,
            cancelLabel: "Cancel",
            onCancel: t11,
            onConfirm: t12
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[21] = confirmOpen;
        $[22] = t10;
        $[23] = t12;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t13 || $[26] !== t8 || $[27] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: menuRef,
            children: [
                t8,
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/profile/ProfileMenu.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t8;
        $[27] = t9;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_s(ProfileMenu, "s5f3BHhc5f/ShYDmDPGqhLOTHO4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileMenu;
function _ProfileMenuButtonOnClickSetOpen(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/welcome/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/profile/ProfileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/yjs/dist/yjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$y$2d$websocket$2f$src$2f$y$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/y-websocket/src/y-websocket.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ----------------------------- helpers ---------------------------- */ function formatShortDate(iso) {
    if (!iso) return "—";
    try {
        const d = new Date(iso);
        return d.toLocaleString();
    } catch  {
        return iso;
    }
}
function WelcomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [numbers, setNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [composerOpen, setComposerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composerContext, setComposerContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contactModal, setContactModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buying, setBuying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [presence, setPresence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // NEW: UI states for integrations + inbox widget
    const [integrationsOpen, setIntegrationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Inbox panel (full) visibility + minimization
    const [inboxOpen, setInboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inboxMinimized, setInboxMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const role = (user?.role ?? "VIEWER").toString().toUpperCase();
    const isAdmin = role === "ADMIN";
    const isEditor = role === "EDITOR" || isAdmin;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            let mounted = true;
            const controller = new AbortController();
            const signal = controller.signal;
            async function loadAll() {
                try {
                    setLoading(true);
                    const [meRes, analyticsRes, threadsRes, numbersRes] = await Promise.all([
                        fetch(`/api/me`, {
                            signal
                        }),
                        fetch(`/api/analytics/summary`, {
                            signal
                        }),
                        fetch(`/api/threads?limit=200`, {
                            signal
                        }),
                        fetch(`/api/twilio/numbers`, {
                            signal
                        })
                    ]);
                    if (!mounted) return;
                    if (meRes.ok) {
                        const j = await meRes.json().catch({
                            "WelcomePage.useEffect.loadAll": ()=>null
                        }["WelcomePage.useEffect.loadAll"]);
                        setUser(j?.user ?? null);
                    } else {
                        setUser(null);
                    }
                    if (analyticsRes.ok) {
                        const j = await analyticsRes.json().catch({
                            "WelcomePage.useEffect.loadAll": ()=>null
                        }["WelcomePage.useEffect.loadAll"]);
                        setAnalytics({
                            messages7d: j?.messages7d ?? 0,
                            avgResponseMins: j?.avgResponseMins ?? 0,
                            openRatePct: j?.openRatePct ?? 0,
                            sparkline: Array.isArray(j?.sparkline) ? j.sparkline : [
                                1,
                                2,
                                3,
                                2,
                                4
                            ]
                        });
                    } else {
                        setAnalytics(null);
                    }
                    if (threadsRes.ok) {
                        const j = await threadsRes.json().catch({
                            "WelcomePage.useEffect.loadAll": ()=>null
                        }["WelcomePage.useEffect.loadAll"]);
                        setThreads(Array.isArray(j?.threads) ? j.threads : []);
                    } else {
                        setThreads([]);
                    }
                    if (numbersRes.ok) {
                        const j = await numbersRes.json().catch({
                            "WelcomePage.useEffect.loadAll": ()=>null
                        }["WelcomePage.useEffect.loadAll"]);
                        setNumbers(Array.isArray(j?.numbers) ? j.numbers : []);
                    } else {
                        setNumbers([]);
                    }
                    // best-effort load contacts
                    await fetchContacts(signal);
                } catch (e) {
                    if (e?.name !== "AbortError") console.error("loadAll error", e);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            loadAll();
            return ({
                "WelcomePage.useEffect": ()=>{
                    mounted = false;
                    controller.abort();
                }
            })["WelcomePage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["WelcomePage.useEffect"], []);
    /* ----------------------------- fetchContacts ---------------------------- */ async function fetchContacts(signal) {
        function normalizeRaw(raw) {
            if (!raw) return null;
            const id = raw.id ?? raw.userId ?? raw.contactId ?? raw._id ?? null;
            const name = raw.name ?? raw.displayName ?? raw.fullName ?? raw.email ?? null;
            let email = null;
            let emailVerified = false;
            if (raw.email) {
                email = raw.email;
                emailVerified = Boolean(raw.emailVerified ?? raw.email_verified ?? false);
            } else if (Array.isArray(raw.emails) && raw.emails.length) {
                const p = raw.emails[0];
                email = p?.value ?? p?.address ?? null;
                emailVerified = Boolean(p?.verified ?? false);
            } else if (raw.profile?.email) {
                email = raw.profile.email;
                emailVerified = Boolean(raw.profile.emailVerified ?? false);
            }
            let phone = null;
            let phoneVerified = false;
            if (raw.phone) {
                phone = raw.phone;
                phoneVerified = Boolean(raw.phoneVerified ?? false);
            } else if (raw.phoneNumber) {
                phone = raw.phoneNumber;
            } else if (Array.isArray(raw.phones) && raw.phones.length) {
                phone = raw.phones[0]?.value ?? raw.phones[0]?.number ?? null;
                phoneVerified = Boolean(raw.phones[0]?.verified ?? false);
            }
            if (!id && !email && !phone) return null;
            return {
                id: id ?? email ?? phone ?? String(Math.random()).slice(2, 8),
                name,
                email,
                emailVerified,
                phone,
                phoneVerified
            };
        }
        async function tryFetch(url) {
            try {
                const opts = signal ? {
                    signal
                } : undefined;
                const r = await fetch(url, opts);
                if (!r.ok) return null;
                const j = await r.json().catch(()=>null);
                return j;
            } catch (e) {
                return null;
            }
        }
        const endpoints = [
            "/api/contacts?limit=1000",
            "/api/users?limit=1000",
            "/api/me",
            "/api/admin/users?limit=1000"
        ];
        const aggregated = [];
        for (const ep of endpoints){
            const d = await tryFetch(ep);
            if (!d) continue;
            if (d.user) {
                const n = normalizeRaw(d.user);
                if (n) aggregated.push(n);
            } else if (Array.isArray(d)) {
                for (const item of d){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else if (Array.isArray(d.contacts)) {
                for (const item of d.contacts){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else if (Array.isArray(d.users)) {
                for (const item of d.users){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else {
                const n = normalizeRaw(d);
                if (n) aggregated.push(n);
            }
            if (aggregated.length > 0) break;
        }
        // ensure me included
        try {
            const me = await tryFetch("/api/me");
            if (me?.user) {
                const n = normalizeRaw(me.user);
                if (n) aggregated.push(n);
            }
        } catch  {}
        const map = new Map();
        for (const a of aggregated){
            const key = a.id ?? a.email ?? a.phone ?? JSON.stringify(a);
            if (!map.has(key)) map.set(key, a);
            else {
                const ex = map.get(key);
                map.set(key, {
                    ...ex,
                    ...a
                });
            }
        }
        const result = Array.from(map.values());
        setContacts((prev)=>{
            // merge unique
            const merged = new Map();
            prev.forEach((c)=>merged.set(c.id, c));
            result.forEach((c)=>merged.set(c.id, {
                    ...merged.get(c.id),
                    ...c
                }));
            return Array.from(merged.values());
        });
    }
    /* ----------------------------- Realtime WS ---------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            if (!user) return;
            let mounted = true;
            try {
                const ws = new WebSocket((("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable") + "/api/ws");
                wsRef.current = ws;
                ws.onopen = ({
                    "WelcomePage.useEffect": ()=>{
                        ws.send(JSON.stringify({
                            type: "hello",
                            userId: user.id,
                            name: user.name
                        }));
                    }
                })["WelcomePage.useEffect"];
                ws.onmessage = ({
                    "WelcomePage.useEffect": (ev)=>{
                        try {
                            const msg = JSON.parse(ev.data);
                            if (msg.type === "presence") {
                                setPresence({
                                    "WelcomePage.useEffect": (p)=>({
                                            ...p,
                                            [msg.userId]: {
                                                name: msg.name,
                                                idle: msg.idle
                                            }
                                        })
                                }["WelcomePage.useEffect"]);
                            } else if (msg.type === "presence:leave") {
                                setPresence({
                                    "WelcomePage.useEffect": (p)=>{
                                        const copy = {
                                            ...p
                                        };
                                        delete copy[msg.userId];
                                        return copy;
                                    }
                                }["WelcomePage.useEffect"]);
                            } else if (msg.type === "thread:new") {
                                setThreads({
                                    "WelcomePage.useEffect": (t)=>[
                                            msg.thread,
                                            ...t
                                        ]
                                }["WelcomePage.useEffect"]);
                            } else if (msg.type === "thread:update") {
                                setThreads({
                                    "WelcomePage.useEffect": (t)=>t.map({
                                            "WelcomePage.useEffect": (x)=>x.id === msg.thread.id ? msg.thread : x
                                        }["WelcomePage.useEffect"])
                                }["WelcomePage.useEffect"]);
                            } else if (msg.type === "message:new") {
                                // new incoming message — ensure it's in threads and open inbox if desired
                                setThreads({
                                    "WelcomePage.useEffect": (t)=>{
                                        const exists = t.find({
                                            "WelcomePage.useEffect.exists": (x)=>x.id === msg.thread?.id || x.id === msg.threadId
                                        }["WelcomePage.useEffect.exists"]);
                                        if (exists) {
                                            return t.map({
                                                "WelcomePage.useEffect": (x)=>x.id === (msg.thread?.id ?? msg.threadId) ? {
                                                        ...msg.thread ?? x,
                                                        unreadCount: msg.incrementUnread ? (x.unreadCount ?? 0) + 1 : msg.thread?.unreadCount ?? x.unreadCount
                                                    } : x
                                            }["WelcomePage.useEffect"]);
                                        } else if (msg.thread) {
                                            return [
                                                msg.thread,
                                                ...t
                                            ];
                                        } else {
                                            // fallback: create a small thread item
                                            const small = {
                                                id: msg.threadId ?? `t-${Math.random().toString(36).slice(2, 8)}`,
                                                contactId: msg.from,
                                                contactName: msg.fromName ?? msg.from,
                                                contactPhone: msg.from,
                                                snippet: msg.text ?? "",
                                                lastAt: new Date().toISOString(),
                                                unreadCount: 1,
                                                status: "inbox"
                                            };
                                            return [
                                                small,
                                                ...t
                                            ];
                                        }
                                    }
                                }["WelcomePage.useEffect"]);
                            }
                        } catch (e) {
                            console.warn("ws parse error", e);
                        }
                    }
                })["WelcomePage.useEffect"];
                ws.onclose = ({
                    "WelcomePage.useEffect": ()=>{
                        wsRef.current = null;
                    }
                })["WelcomePage.useEffect"];
                return ({
                    "WelcomePage.useEffect": ()=>{
                        try {
                            ws.close();
                        } catch  {}
                    }
                })["WelcomePage.useEffect"];
            } catch (e) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                console.warn("Realtime not available", e);
            }
        }
    }["WelcomePage.useEffect"], [
        user
    ]);
    /* ----------------------------- Actions ---------------------------- */ async function handleBuyNumber(id) {
        setBuying(id);
        try {
            const res = await fetch(`/api/twilio/buy`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id
                })
            });
            if (!res.ok) throw new Error("failed to buy");
            // refresh
            const ref = await fetch(`/api/twilio/numbers`);
            if (ref.ok) {
                const j = await ref.json();
                setNumbers(Array.isArray(j?.numbers) ? j.numbers : []);
            }
        } catch (e) {
            console.error(e);
            alert("Failed to buy number (check sandbox or logs).");
        } finally{
            setBuying(null);
        }
    }
    function openComposer(ctx) {
        if (!isEditor) return;
        setComposerContext(ctx ?? null);
        setComposerOpen(true);
    }
    function closeComposer() {
        setComposerOpen(false);
        setComposerContext(null);
    }
    /* ----------------------------- sendMessage (optimistic) ---------------------------- */ async function sendMessage(payload) {
        if (!isEditor) throw new Error("not authorized");
        const isScheduled = !!payload.scheduleAt;
        const optimistic = {
            id: isScheduled ? "sched-" + Math.random().toString(36).slice(2, 9) : "tmp-" + Math.random().toString(36).slice(2, 9),
            contactId: payload.contactId,
            contactName: payload.to,
            contactPhone: payload.to,
            channels: [
                payload.channel
            ],
            snippet: payload.body,
            lastAt: new Date().toISOString(),
            scheduled: isScheduled,
            status: isScheduled ? "scheduled" : "inbox"
        };
        setThreads((t)=>[
                optimistic,
                ...t
            ]);
        try {
            let res;
            if (isScheduled) {
                res = await fetch("/api/messages/schedule", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        to: payload.to,
                        channel: payload.channel,
                        body: payload.body,
                        sendAt: payload.scheduleAt,
                        threadId: payload.threadId,
                        contactId: payload.contactId,
                        metadata: {
                            to: payload.to
                        }
                    })
                });
            } else {
                res = await fetch("/api/messages/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        to: payload.to,
                        channel: payload.channel,
                        body: payload.body,
                        threadId: payload.threadId,
                        contactId: payload.contactId,
                        metadata: {
                            to: payload.to
                        }
                    })
                });
            }
            const text = await res.text().catch(()=>"");
            let parsed = null;
            try {
                parsed = text ? JSON.parse(text) : null;
            } catch  {
                parsed = text;
            }
            if (!res.ok) {
                setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
                const serverMsg = parsed?.error ?? parsed?.message ?? (typeof parsed === "string" ? parsed : `HTTP ${res.status}`);
                alert(`Send failed: ${serverMsg}`);
                throw new Error(`send failed: ${serverMsg}`);
            }
            const j = parsed ?? {};
            if (j.thread && j.thread.id) {
                setThreads((t)=>[
                        j.thread,
                        ...t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-"))
                    ]);
            } else {
                setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-")));
            }
            return j;
        } catch (err) {
            setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
            console.error(err);
            throw err;
        }
    }
    /* ----------------------------- Kanban columns (unchanged) ---------------------------- */ const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WelcomePage.useMemo[columns]": ()=>[
                {
                    key: "unread",
                    title: "Unread",
                    filter: {
                        "WelcomePage.useMemo[columns]": (t)=>!!t.unreadCount && (t.unreadCount ?? 0) > 0
                    }["WelcomePage.useMemo[columns]"]
                },
                {
                    key: "inbox",
                    title: "Inbox",
                    filter: {
                        "WelcomePage.useMemo[columns]": (t)=>!t.scheduled && !(t.unreadCount && t.unreadCount > 0) && (!t.status || t.status === "inbox")
                    }["WelcomePage.useMemo[columns]"]
                },
                {
                    key: "scheduled",
                    title: "Scheduled",
                    filter: {
                        "WelcomePage.useMemo[columns]": (t)=>!!t.scheduled || t.status === "scheduled"
                    }["WelcomePage.useMemo[columns]"]
                },
                {
                    key: "archived",
                    title: "Archived",
                    filter: {
                        "WelcomePage.useMemo[columns]": (t)=>t.status === "archived"
                    }["WelcomePage.useMemo[columns]"]
                }
            ]
    }["WelcomePage.useMemo[columns]"], []);
    function getColumnThreads(colKey) {
        const col = columns.find((c)=>c.key === colKey);
        return threads.filter((t)=>{
            try {
                return col.filter(t);
            } catch  {
                return false;
            }
        });
    }
    async function handleDropThread(threadId, destColumnKey) {
        setThreads((prev)=>prev.map((t)=>{
                if (t.id === threadId) {
                    const newStatus = destColumnKey === "unread" ? "inbox" : destColumnKey;
                    return {
                        ...t,
                        status: newStatus,
                        scheduled: destColumnKey === "scheduled" ? true : t.scheduled
                    };
                }
                return t;
            }));
        try {
            await fetch(`/api/threads/${threadId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: destColumnKey
                })
            });
        } catch (e) {
            console.error("thread patch failed", e);
        }
    }
    /* ----------------------------- UI ---------------------------- */ // compute unread count for bubble
    const totalUnread = threads.reduce((s, t)=>s + (t.unreadCount ?? 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "28",
                                        height: "28",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        "aria-hidden": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 12h18",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 6v12",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-bold",
                                            children: "SignalHub"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-500",
                                            children: "Unified Inbox • Multi-channel Outreach"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center gap-3 rounded-full px-3 py-1 bg-slate-100 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-500",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "uppercase",
                                            children: role
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center gap-3 text-xs text-slate-600",
                                    children: Object.keys(presence).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: "No one online"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 53
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: Object.entries(presence).slice(0, 4).map(([id, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-2 h-2 rounded-full ${p.idle ? "bg-yellow-400" : "bg-green-400"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate max-w-[8rem]",
                                                        children: p.name ?? id
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, id, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 74
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 117
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIntegrationsOpen(true),
                                    className: "px-3 py-2 rounded-lg border bg-white hover:bg-slate-50",
                                    children: "Integrations"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setInboxOpen(true);
                                        setInboxMinimized(false);
                                    },
                                    className: "px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow",
                                    children: [
                                        "Inbox ",
                                        totalUnread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 inline-block bg-amber-400 text-black text-xs px-2 py-0.5 rounded-full",
                                            children: totalUnread
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    email: user?.email,
                                    avatarUrl: undefined
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 605,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 bg-white/60 backdrop-blur rounded-3xl p-6 shadow-lg border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "28",
                                                    height: "28",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    "aria-hidden": true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 12h18",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 6v12",
                                                            stroke: "white",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 614,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl sm:text-4xl font-extrabold",
                                                    children: "Unified Inbox — Kanban for conversations"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-slate-600 max-w-2xl",
                                                    children: "Streamline SMS, WhatsApp and Email into one playbook. Real-time presence, collaborative notes (Yjs), scheduling, and analytics — all under role-based controls."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 flex flex-wrap gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>isAdmin ? router.push("/admin") : (setInboxOpen(true), setInboxMinimized(false)),
                                                            className: "inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow hover:scale-[1.01]",
                                                            children: [
                                                                isAdmin ? "Open Admin" : "Open Inbox",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    "aria-hidden": true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M5 12h14",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12 5l7 7-7 7",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIntegrationsOpen(true),
                                                            className: "px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50",
                                                            children: "Integrations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 19
                                                        }, this),
                                                        isEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openComposer(),
                                                            className: "px-4 py-2 rounded-lg border bg-white text-slate-700 hover:bg-slate-50",
                                                            children: "Quick Compose"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCard, {
                                                            label: "Unified Threads",
                                                            desc: "Conversations aggregated per contact across channels."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCard, {
                                                            label: "Schedule",
                                                            desc: "Schedule outbound messages and preview per-channel."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCard, {
                                                            label: "Team Collab",
                                                            desc: "Real-time notes with cursors and mentions (Yjs)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 646,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCard, {
                                                            label: "Analytics",
                                                            desc: "Response time, channel volume and exportable reports."
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-rose-50 p-4 bg-rose-50/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold",
                                                                    children: "Twilio Sandbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-600",
                                                                    children: "Trial — simulated numbers unless purchased"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 658,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500",
                                                            children: "Sandbox"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-700 mb-2",
                                                            children: "Available numbers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: numbers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-500",
                                                                children: "No sandbox numbers found."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 45
                                                            }, this) : numbers.slice(0, 6).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between bg-white rounded-lg p-2 border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "font-medium",
                                                                                    children: n.phone
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                    lineNumber: 668,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-slate-500",
                                                                                    children: [
                                                                                        n.provider,
                                                                                        " • ",
                                                                                        n.capabilities ? Object.keys(n.capabilities).filter((k)=>n.capabilities?.[k]).join(", ") : "—"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                    lineNumber: 669,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                            lineNumber: 667,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: n.purchased ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-green-600",
                                                                                children: "Purchased"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 672,
                                                                                columnNumber: 44
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                disabled: !!buying,
                                                                                onClick: ()=>handleBuyNumber(n.id),
                                                                                className: "px-3 py-1 rounded bg-indigo-600 text-white text-xs",
                                                                                children: buying === n.id ? "Buying…" : "Buy"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 672,
                                                                                columnNumber: 104
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, n.id, true, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 148
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntegrationsSummary, {
                                            numbers: numbers
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 611,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsPanel, {
                                    analytics: analytics,
                                    loading: loading
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 687,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-semibold text-slate-700 mb-2",
                                            children: "Quick actions"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 689,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: !isEditor,
                                                    onClick: ()=>openComposer(),
                                                    className: `text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-400"}`,
                                                    children: "Compose"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: !isAdmin,
                                                    onClick: ()=>router.push("/admin"),
                                                    className: `text-left px-3 py-2 rounded-lg ${isAdmin ? "bg-indigo-50" : "bg-slate-50 text-slate-400"}`,
                                                    children: "Manage team"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/analytics",
                                                    className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                    children: "View analytics"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIntegrationsOpen(true),
                                                    className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                    children: "Integrations"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 688,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 610,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 bg-white rounded-3xl p-6 shadow border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Unified Inbox"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchBar, {
                                                    onSearch: (q)=>{}
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-500",
                                                    children: "Normalized threads • drag to move"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl overflow-hidden border border-slate-100 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-4 gap-4",
                                        children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-semibold",
                                                                        children: col.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                        lineNumber: 716,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: [
                                                                            getColumnThreads(col.key).length,
                                                                            " threads"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                        lineNumber: 717,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-400",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 min-h-[120px] max-h-[48vh] overflow-auto",
                                                        onDragOver: (e)=>e.preventDefault(),
                                                        onDrop: (e)=>{
                                                            const threadId = e.dataTransfer.getData("text/threadId");
                                                            if (threadId) handleDropThread(threadId, col.key);
                                                        },
                                                        children: getColumnThreads(col.key).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadCard, {
                                                                thread: t,
                                                                onOpenContact: (id)=>setContactModal({
                                                                        contactId: id
                                                                    }),
                                                                onCompose: (thr)=>openComposer({
                                                                        threadId: thr.id,
                                                                        contactId: thr.contactId
                                                                    })
                                                            }, t.id, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 59
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, col.key, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 713,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 712,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-sm text-slate-600",
                                    children: "The Kanban groups threads by status: Unread, Inbox, Scheduled, Archived. Use drag & drop to move threads between columns — server patch is attempted for persistence."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 702,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "bg-white rounded-3xl p-6 shadow border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold mb-3",
                                    children: "Getting started"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "text-sm space-y-3 list-decimal list-inside text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Open ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setInboxOpen(true);
                                                        setInboxMinimized(false);
                                                    },
                                                    className: "text-blue-600 underline",
                                                    children: "Inbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 24
                                                }, this),
                                                " for full thread view."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 745,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEditor ? "Compose a test message" : "Request editor access."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Verify Twilio under ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIntegrationsOpen(true),
                                                    className: "text-blue-600 underline",
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 39
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/admin",
                                                className: "text-blue-600",
                                                children: "Manage team"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 751,
                                                columnNumber: 30
                                            }, this) : "Ask an admin to add you."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setInboxOpen(true);
                                            setInboxMinimized(false);
                                        },
                                        className: "block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg",
                                        children: "Open Inbox"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 754,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 701,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 text-center text-sm text-slate-500",
                    children: "Built for the Attack Capital assignment — multi-channel outreach, scheduling, team collaboration and analytics."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 763,
                    columnNumber: 9
                }, this),
                integrationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntegrationsModal, {
                    onClose: ()=>setIntegrationsOpen(false),
                    numbers: numbers,
                    onBuy: (id)=>handleBuyNumber(id),
                    buying: buying,
                    refresh: ()=>(async ()=>{
                            const r = await fetch("/api/twilio/numbers");
                            if (r.ok) {
                                const j = await r.json();
                                setNumbers(Array.isArray(j?.numbers) ? j.numbers : []);
                            }
                        })()
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 768,
                    columnNumber: 30
                }, this),
                composerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComposerModal, {
                    onClose: closeComposer,
                    onSend: async (p)=>sendMessage(p),
                    context: composerContext,
                    contacts: contacts,
                    onSent: ()=>{
                        closeComposer();
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 777,
                    columnNumber: 26
                }, this),
                contactModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactProfileModal, {
                    contactId: contactModal.contactId,
                    onClose: ()=>setContactModal(null),
                    isEditor: isEditor
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 782,
                    columnNumber: 26
                }, this),
                inboxOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InboxPanel, {
                    threads: threads,
                    onClose: ()=>setInboxOpen(false),
                    onMinimize: ()=>{
                        setInboxMinimized(true);
                        setInboxOpen(false);
                    },
                    onOpenThread: (threadId)=>{
                        // open thread viewer (modal)
                        setContactModal({
                            contactId: threadId
                        }); // reuse contact modal or `ThreadView` could be implemented
                    },
                    onRefresh: async ()=>{
                        const r = await fetch("/api/threads?limit=200");
                        if (r.ok) {
                            const j = await r.json();
                            setThreads(Array.isArray(j?.threads) ? j.threads : []);
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 785,
                    columnNumber: 23
                }, this),
                inboxMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessengerBubble, {
                    unread: totalUnread,
                    onOpen: ()=>{
                        setInboxOpen(true);
                        setInboxMinimized(false);
                    },
                    onClose: ()=>setInboxMinimized(false)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 802,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 564,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 563,
        columnNumber: 10
    }, this);
}
_s(WelcomePage, "BtfDZ85ZqTepANlWYL5nnMHnUhY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WelcomePage;
/* ----------------------------- Integrations modal ---------------------------- */ function IntegrationsModal(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { onClose, numbers, onBuy, buying, refresh } = t0;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== onClose) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/40",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 830,
            columnNumber: 10
        }, this);
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold",
            children: "Integrations — Twilio Numbers"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 838,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== refresh) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: refresh,
            className: "px-3 py-1 rounded border text-sm",
            children: "Refresh"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 845,
            columnNumber: 10
        }, this);
        $[4] = refresh;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "text-sm text-slate-500",
            children: "Close"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 853,
            columnNumber: 10
        }, this);
        $[6] = onClose;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        t3,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 861,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 861,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "IntegrationsModal[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["IntegrationsModal[<input>.onChange]"];
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== query) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: query,
            onChange: t6,
            placeholder: "Filter by country / capability / number",
            className: "rounded border px-3 py-2 flex-1"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 879,
            columnNumber: 10
        }, this);
        $[12] = query;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: "Sandbox mode may simulate buys"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 887,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 894,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== buying || $[18] !== numbers || $[19] !== onBuy || $[20] !== query) {
        t10 = numbers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-slate-500",
            children: "No available numbers (sandbox or provider). Try refreshing."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 902,
            columnNumber: 34
        }, this) : numbers.filter({
            "IntegrationsModal[numbers.filter()]": (n)=>!query || n.phone.includes(query) || (n.provider ?? "").toLowerCase().includes(query.toLowerCase())
        }["IntegrationsModal[numbers.filter()]"]).map({
            "IntegrationsModal[(anonymous)()]": (n_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border rounded p-3 bg-slate-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: n_0.phone
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500",
                                    children: [
                                        n_0.provider ?? "Twilio",
                                        " • ",
                                        n_0.capabilities ? Object.keys(n_0.capabilities).filter({
                                            "IntegrationsModal[(anonymous)() > (anonymous)()]": (k)=>n_0.capabilities?.[k]
                                        }["IntegrationsModal[(anonymous)() > (anonymous)()]"]).join(", ") : "\u2014"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 196
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 905,
                            columnNumber: 145
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: n_0.purchased ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-green-600",
                                children: "Purchased"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 907,
                                columnNumber: 124
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !!buying,
                                onClick: {
                                    "IntegrationsModal[(anonymous)() > <button>.onClick]": ()=>onBuy(n_0.id)
                                }["IntegrationsModal[(anonymous)() > <button>.onClick]"],
                                className: "px-3 py-1 rounded bg-indigo-600 text-white text-xs",
                                children: buying === n_0.id ? "Buying\u2026" : "Buy now"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 907,
                                columnNumber: 184
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 907,
                            columnNumber: 102
                        }, this)
                    ]
                }, n_0.id, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 905,
                    columnNumber: 50
                }, this)
        }["IntegrationsModal[(anonymous)()]"]);
        $[17] = buying;
        $[18] = numbers;
        $[19] = onBuy;
        $[20] = query;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 grid grid-cols-1 gap-3",
            children: t10
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 921,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t11 || $[25] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 929,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t9;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12 || $[28] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10",
            children: [
                t5,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 938,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t5;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t1 || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center",
            children: [
                t1,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 947,
            columnNumber: 11
        }, this);
        $[30] = t1;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    return t14;
}
_s1(IntegrationsModal, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");
_c1 = IntegrationsModal;
/* ----------------------------- Inbox Panel (full) ---------------------------- */ function InboxPanel(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { threads, onClose, onMinimize, onOpenThread, onRefresh } = t0;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterUnread, setFilterUnread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterScheduled, setFilterScheduled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterDrafts, setFilterDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== filterDrafts || $[2] !== filterScheduled || $[3] !== filterUnread || $[4] !== search || $[5] !== threads) {
        const q = search.trim().toLowerCase();
        t1 = threads.filter({
            "InboxPanel[threads.filter()]": (t)=>{
                if (filterUnread && !(t.unreadCount && t.unreadCount > 0)) {
                    return false;
                }
                if (filterScheduled && !t.scheduled && t.status !== "scheduled") {
                    return false;
                }
                if (filterDrafts && !t.isDraft && t.status !== "draft") {
                    return false;
                }
                if (!q) {
                    return true;
                }
                const hay = `${t.contactName ?? ""} ${t.contactPhone ?? ""} ${t.snippet ?? ""}`.toLowerCase();
                return hay.includes(q);
            }
        }["InboxPanel[threads.filter()]"]);
        $[1] = filterDrafts;
        $[2] = filterScheduled;
        $[3] = filterUnread;
        $[4] = search;
        $[5] = threads;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const filtered = t1;
    let t2;
    if ($[7] !== onClose) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/50",
            onClick: onClose
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1011,
            columnNumber: 10
        }, this);
        $[7] = onClose;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-semibold",
                    children: "Inbox"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1019,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: "All customer conversations"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1019,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1019,
            columnNumber: 10
        }, this);
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== onRefresh) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onRefresh,
            className: "px-2 py-1 rounded bg-slate-100 text-sm",
            children: "Refresh"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1026,
            columnNumber: 10
        }, this);
        $[10] = onRefresh;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== onMinimize) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onMinimize,
            className: "px-2 py-1 rounded bg-slate-100 text-sm",
            children: "Minimize"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1034,
            columnNumber: 10
        }, this);
        $[12] = onMinimize;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== onClose) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "px-2 py-1 rounded bg-slate-100 text-sm",
            children: "Close"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1042,
            columnNumber: 10
        }, this);
        $[14] = onClose;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t4 || $[17] !== t5 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t4,
                        t5,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1050,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1050,
            columnNumber: 10
        }, this);
        $[16] = t4;
        $[17] = t5;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "InboxPanel[<input>.onChange]": (e)=>setSearch(e.target.value)
        })["InboxPanel[<input>.onChange]"];
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== search) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Search by name, phone, message...",
                value: search,
                onChange: t8,
                className: "w-full rounded border px-3 py-2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1069,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1069,
            columnNumber: 10
        }, this);
        $[21] = search;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const t10 = `px-2 py-1 rounded text-sm ${filterUnread ? "bg-indigo-600 text-white" : "bg-slate-100"}`;
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "InboxPanel[<input>.onChange]": ()=>setFilterUnread(_InboxPanelInputOnChangeSetFilterUnread)
        })["InboxPanel[<input>.onChange]"];
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== filterUnread) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: filterUnread,
            onChange: t11,
            className: "mr-2"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1087,
            columnNumber: 11
        }, this);
        $[24] = filterUnread;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t10 || $[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t10,
            children: [
                t12,
                " Unread"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1095,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const t14 = `px-2 py-1 rounded text-sm ${filterScheduled ? "bg-amber-500 text-white" : "bg-slate-100"}`;
    let t15;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "InboxPanel[<input>.onChange]": ()=>setFilterScheduled(_InboxPanelInputOnChangeSetFilterScheduled)
        })["InboxPanel[<input>.onChange]"];
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== filterScheduled) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: filterScheduled,
            onChange: t15,
            className: "mr-2"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1114,
            columnNumber: 11
        }, this);
        $[30] = filterScheduled;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] !== t14 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t14,
            children: [
                t16,
                " Scheduled"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1122,
            columnNumber: 11
        }, this);
        $[32] = t14;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    const t18 = `px-2 py-1 rounded text-sm ${filterDrafts ? "bg-slate-700 text-white" : "bg-slate-100"}`;
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "InboxPanel[<input>.onChange]": ()=>setFilterDrafts(_InboxPanelInputOnChangeSetFilterDrafts)
        })["InboxPanel[<input>.onChange]"];
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== filterDrafts) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            checked: filterDrafts,
            onChange: t19,
            className: "mr-2"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1141,
            columnNumber: 11
        }, this);
        $[36] = filterDrafts;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t18 || $[39] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: t18,
            children: [
                t20,
                " Drafts"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1149,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t20;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t13 || $[42] !== t17 || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex flex-wrap gap-2",
            children: [
                t13,
                t17,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1158,
            columnNumber: 11
        }, this);
        $[41] = t13;
        $[42] = t17;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== filtered || $[46] !== onOpenThread) {
        t23 = filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-slate-500",
            children: "No conversations match your filters."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1168,
            columnNumber: 35
        }, this) : filtered.map({
            "InboxPanel[filtered.map()]": (t_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: {
                        "InboxPanel[filtered.map() > <div>.onClick]": ()=>onOpenThread(t_0.id)
                    }["InboxPanel[filtered.map() > <div>.onClick]"],
                    className: "p-2 rounded-lg bg-white border hover:shadow cursor-pointer flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: t_0.contactName ?? t_0.contactPhone ?? "Unknown"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 166
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500",
                                    children: t_0.snippet ?? "\u2014"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 251
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 1171,
                            columnNumber: 161
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-400",
                                    children: formatShortDate(t_0.lastAt)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 356
                                }, this),
                                t_0.unreadCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 inline-block bg-amber-400 text-black px-2 py-0.5 rounded-full text-xs",
                                    children: t_0.unreadCount
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 450
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 1171,
                            columnNumber: 328
                        }, this)
                    ]
                }, t_0.id, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1169,
                    columnNumber: 44
                }, this)
        }["InboxPanel[filtered.map()]"]);
        $[45] = filtered;
        $[46] = onOpenThread;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 overflow-auto flex-1 space-y-2 pr-2",
            children: t23
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1181,
            columnNumber: 11
        }, this);
        $[48] = t23;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t22 || $[51] !== t24 || $[52] !== t7 || $[53] !== t9) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-1 md:col-span-1 border-r p-4 flex flex-col gap-3",
            children: [
                t7,
                t9,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1189,
            columnNumber: 11
        }, this);
        $[50] = t22;
        $[51] = t24;
        $[52] = t7;
        $[53] = t9;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "Conversation Preview"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1200,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg font-semibold",
                    children: "Select a thread to open"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1200,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1200,
            columnNumber: 11
        }, this);
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    let t27;
    if ($[56] !== filtered.length) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-400",
                    children: [
                        "Real-time • ",
                        filtered.length,
                        " threads"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1207,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1207,
            columnNumber: 11
        }, this);
        $[56] = filtered.length;
        $[57] = t27;
    } else {
        t27 = $[57];
    }
    let t28;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border rounded p-4 h-[62vh] overflow-auto flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid place-items-center text-slate-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Click a thread on the left to view messages. This panel will show messages for the selected contact and allow quick reply, schedule, and attachments."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1215,
                    columnNumber: 147
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1215,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1215,
            columnNumber: 11
        }, this);
        $[58] = t28;
    } else {
        t28 = $[58];
    }
    let t29;
    if ($[59] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-2 md:col-span-2 p-4 overflow-auto",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1222,
            columnNumber: 11
        }, this);
        $[59] = t27;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== t25 || $[62] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 bg-white rounded-2xl w-full max-w-5xl h-[80vh] shadow-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden",
            children: [
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1230,
            columnNumber: 11
        }, this);
        $[61] = t25;
        $[62] = t29;
        $[63] = t30;
    } else {
        t30 = $[63];
    }
    let t31;
    if ($[64] !== t2 || $[65] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-end justify-center md:items-center md:justify-center",
            children: [
                t2,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1239,
            columnNumber: 11
        }, this);
        $[64] = t2;
        $[65] = t30;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    return t31;
}
_s2(InboxPanel, "oODs2Ipo9v4mfoywCbXvKK/Ir3g=");
_c2 = InboxPanel;
/* ----------------------------- Messenger bubble (minimized) ---------------------------- */ function _InboxPanelInputOnChangeSetFilterDrafts(s_1) {
    return !s_1;
}
function _InboxPanelInputOnChangeSetFilterScheduled(s_0) {
    return !s_0;
}
function _InboxPanelInputOnChangeSetFilterUnread(s) {
    return !s;
}
function MessengerBubble(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { unread, onOpen, onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white",
                    children: "S"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1274,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium",
                    children: "SignalHub"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1274,
                    columnNumber: 186
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1274,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onOpen) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onOpen,
            className: "px-2 py-1 rounded bg-indigo-600 text-white text-xs",
            children: "Open"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1281,
            columnNumber: 10
        }, this);
        $[2] = onOpen;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClose,
            className: "px-2 py-1 rounded bg-slate-100 text-xs",
            children: "Close"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1289,
            columnNumber: 10
        }, this);
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1297,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1297,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== unread) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-xs text-slate-500",
            children: [
                unread,
                " unread messages"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1306,
            columnNumber: 10
        }, this);
        $[9] = unread;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t4 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-2 shadow-lg w-64",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1314,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 10-3.18 6.18L21 21l-1.82-3.18A9 9 0 0021 12z",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1323,
                columnNumber: 86
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1323,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== unread) {
        t8 = unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -top-2 -right-2 bg-amber-400 text-black text-xs px-2 py-0.5 rounded-full",
            children: unread
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1330,
            columnNumber: 24
        }, this);
        $[15] = unread;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== onOpen || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onOpen,
            className: "relative w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center",
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1338,
            columnNumber: 10
        }, this);
        $[17] = onOpen;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t6 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-end gap-2",
                children: [
                    t6,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1347,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1347,
            columnNumber: 11
        }, this);
        $[20] = t6;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    return t10;
}
_c3 = MessengerBubble;
/* ----------------------------- Small building blocks ---------------------------- */ function MiniCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { label, desc } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 7h16M4 12h10M4 17h7",
                    stroke: "#0f172a",
                    strokeWidth: "1.4",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1373,
                    columnNumber: 204
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1373,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1373,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold text-slate-800",
            children: label
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1380,
            columnNumber: 10
        }, this);
        $[2] = label;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== desc) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500 mt-1",
            children: desc
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1388,
            columnNumber: 10
        }, this);
        $[4] = desc;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t2 || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex items-start gap-3",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1396,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1396,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_c4 = MiniCard;
function IntegrationsSummary(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { numbers } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold",
                            children: "Integration status"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 1418,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-600",
                            children: "Connected providers & webhook health"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 1418,
                            columnNumber: 129
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1418,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: "OK"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1418,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1418,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== numbers.length) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border p-4 bg-white",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-slate-700",
                    children: [
                        "Twilio (Sandbox) — Webhook configured",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-slate-500",
                            children: [
                                "Available numbers: ",
                                numbers.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 1425,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1425,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1425,
            columnNumber: 10
        }, this);
        $[2] = numbers.length;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c5 = IntegrationsSummary;
function AnalyticsPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { analytics, loading } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-slate-700",
            children: "Last 7 days"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1447,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = loading ? "Loading\u2026" : "Updated";
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-slate-500",
                    children: t2
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 1455,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1455,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = analytics?.messages7d ?? "\u2014";
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            children: t4
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1464,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: "Messages"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1472,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1479,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = analytics?.avgResponseMins ?? "\u2014";
    let t9;
    if ($[9] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            children: [
                t8,
                "m"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1488,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: "Avg response"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1496,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1503,
            columnNumber: 11
        }, this);
        $[12] = t9;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const t12 = analytics?.openRatePct ?? "\u2014";
    let t13;
    if ($[14] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            children: [
                t12,
                "%"
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1512,
            columnNumber: 11
        }, this);
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: "Open rate"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1520,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1527,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t11 || $[20] !== t15 || $[21] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-end gap-6",
            children: [
                t7,
                t11,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1535,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t15;
        $[21] = t7;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== analytics?.sparkline) {
        t17 = analytics?.sparkline ?? [
            1,
            2,
            3,
            2,
            4
        ];
        $[23] = analytics?.sparkline;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkline, {
                data: t17
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1553,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1553,
            columnNumber: 11
        }, this);
        $[25] = t17;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-xs text-slate-500",
            children: "View full analytics for channel breakdown and exportable reports."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1561,
            columnNumber: 11
        }, this);
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== t16 || $[29] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3",
            children: [
                t16,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1568,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t18;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t20 || $[32] !== t3) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-100",
            children: [
                t3,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1577,
            columnNumber: 11
        }, this);
        $[31] = t20;
        $[32] = t3;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    return t21;
}
_c6 = AnalyticsPanel;
/* ----------------------------- ThreadCard (draggable) ---------------------------- */ function ThreadCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { thread, onOpenContact, onCompose } = t0;
    let t1;
    if ($[1] !== thread.id) {
        t1 = ({
            "ThreadCard[<div>.onDragStart]": (e)=>e.dataTransfer.setData("text/threadId", thread.id)
        })["ThreadCard[<div>.onDragStart]"];
        $[1] = thread.id;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = thread.contactName ?? thread.contactPhone ?? "Unknown";
    let t3;
    if ($[3] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium",
            children: t2
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1615,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = thread.contactPhone ?? "\u2014";
    let t5;
    if ($[5] !== thread.channels) {
        t5 = Array.isArray(thread.channels) ? thread.channels.join(", ") : "\u2014";
        $[5] = thread.channels;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: [
                t4,
                " • ",
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1632,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t3 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1641,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== thread.lastAt) {
        t8 = formatShortDate(thread.lastAt);
        $[13] = thread.lastAt;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-400",
            children: t8
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1658,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1666,
            columnNumber: 11
        }, this);
        $[17] = t7;
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const t11 = thread.snippet ?? "\u2014";
    let t12;
    if ($[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-sm text-slate-700 line-clamp-2",
            children: t11
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1676,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== thread.scheduled) {
        t13 = thread.scheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-xs text-amber-600",
            children: "Scheduled"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1684,
            columnNumber: 31
        }, this);
        $[22] = thread.scheduled;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== thread.isDraft) {
        t14 = thread.isDraft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-xs text-slate-700",
            children: "Draft"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1692,
            columnNumber: 29
        }, this);
        $[24] = thread.isDraft;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t10 || $[27] !== t12 || $[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: [
                t10,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1700,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== onOpenContact || $[32] !== thread.contactId || $[33] !== thread.id) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ThreadCard[<button>.onClick]": ()=>onOpenContact(thread.contactId ?? thread.id)
            }["ThreadCard[<button>.onClick]"],
            className: "text-xs px-2 py-1 rounded bg-slate-50",
            children: "Profile"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1711,
            columnNumber: 11
        }, this);
        $[31] = onOpenContact;
        $[32] = thread.contactId;
        $[33] = thread.id;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== onCompose || $[36] !== thread) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ThreadCard[<button>.onClick]": ()=>onCompose?.(thread)
            }["ThreadCard[<button>.onClick]"],
            className: "text-xs px-2 py-1 rounded bg-indigo-600 text-white",
            children: "Reply"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1723,
            columnNumber: 11
        }, this);
        $[35] = onCompose;
        $[36] = thread;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t16 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-end gap-2",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1734,
            columnNumber: 11
        }, this);
        $[38] = t16;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t15 || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-3",
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1743,
            columnNumber: 11
        }, this);
        $[41] = t15;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t1 || $[45] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            draggable: true,
            onDragStart: t1,
            className: "bg-white rounded-lg p-3 border hover:shadow cursor-grab",
            children: t19
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1752,
            columnNumber: 11
        }, this);
        $[44] = t1;
        $[45] = t19;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
}
_c7 = ThreadCard;
/* ----------------------------- Composer Modal ---------------------------- */ function ComposerModal({ onClose, onSend, context, contacts, onSent }) {
    _s3();
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedContactId, setSelectedContactId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("SMS");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sendMode, setSendMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("now");
    const [sendAt, setSendAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const phoneOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComposerModal.useMemo[phoneOptions]": ()=>contacts.filter({
                "ComposerModal.useMemo[phoneOptions]": (c)=>c.phone && c.phoneVerified
            }["ComposerModal.useMemo[phoneOptions]"]).map({
                "ComposerModal.useMemo[phoneOptions]": (c)=>({
                        contactId: c.id,
                        label: `${c.name ?? c.phone} (${c.phone})`,
                        value: c.phone
                    })
            }["ComposerModal.useMemo[phoneOptions]"])
    }["ComposerModal.useMemo[phoneOptions]"], [
        contacts
    ]);
    const emailOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComposerModal.useMemo[emailOptions]": ()=>contacts.filter({
                "ComposerModal.useMemo[emailOptions]": (c)=>c.email
            }["ComposerModal.useMemo[emailOptions]"]).map({
                "ComposerModal.useMemo[emailOptions]": (c)=>({
                        contactId: c.id,
                        label: `${c.name ?? c.email} (${c.email})`,
                        value: c.email
                    })
            }["ComposerModal.useMemo[emailOptions]"])
    }["ComposerModal.useMemo[emailOptions]"], [
        contacts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposerModal.useEffect": ()=>{
            if (!context?.contactId) return;
            const c = contacts.find({
                "ComposerModal.useEffect.c": (x)=>x.id === context.contactId
            }["ComposerModal.useEffect.c"]);
            if (!c) return;
            if ((channel === "SMS" || channel === "WHATSAPP") && c.phone && c.phoneVerified) {
                setTo(c.phone);
                setSelectedContactId(c.id);
            } else if (channel === "EMAIL" && c.email) {
                setTo(c.email);
                setSelectedContactId(c.id);
            } else {
                if (c.email) {
                    setTo(c.email);
                    setSelectedContactId(c.id);
                } else if (c.phone && c.phoneVerified) {
                    setTo(c.phone);
                    setSelectedContactId(c.id);
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ComposerModal.useEffect"], [
        context?.contactId,
        contacts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposerModal.useEffect": ()=>{
            if (!to) return;
            const isPhone = channel === "SMS" || channel === "WHATSAPP";
            const match = contacts.find({
                "ComposerModal.useEffect.match": (c)=>isPhone ? c.phone === to && c.phoneVerified : c.email === to
            }["ComposerModal.useEffect.match"]);
            if (!match) {
                setSelectedContactId(undefined);
            } else {
                setSelectedContactId(match.id);
            }
        }
    }["ComposerModal.useEffect"], [
        to,
        channel,
        contacts
    ]);
    function buildOptions() {
        if (channel === "EMAIL") {
            return emailOptions.map((o)=>({
                    label: o.label,
                    value: JSON.stringify({
                        contactId: o.contactId,
                        value: o.value
                    })
                }));
        }
        return phoneOptions.map((o)=>({
                label: o.label,
                value: JSON.stringify({
                    contactId: o.contactId,
                    value: o.value
                })
            }));
    }
    function onSelectTo(e) {
        const val = e.target.value;
        if (!val) {
            setTo("");
            setSelectedContactId(undefined);
            return;
        }
        try {
            const parsed = JSON.parse(val);
            setTo(parsed.value);
            setSelectedContactId(parsed.contactId);
        } catch  {
            setTo(val);
            setSelectedContactId(undefined);
        }
    }
    async function handleSend() {
        setSending(true);
        try {
            if (!to) {
                alert("Select recipient");
                setSending(false);
                return;
            }
            if (!body.trim()) {
                alert("Message body is required");
                setSending(false);
                return;
            }
            const payload = {
                to,
                channel,
                body,
                scheduleAt: sendMode === "schedule" && sendAt ? sendAt : undefined,
                contactId: selectedContactId
            };
            await onSend(payload);
            onSent?.(payload);
            onClose();
        } catch (e) {
            console.error("send error", e);
            alert("Failed to send");
        } finally{
            setSending(false);
        }
    }
    const options = buildOptions();
    const charCount = body.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1901,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Compose"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-sm text-slate-500",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1905,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1910,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full rounded border px-3 py-2",
                                        value: to ? JSON.stringify({
                                            contactId: selectedContactId ?? null,
                                            value: to
                                        }) : "",
                                        onChange: onSelectTo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— select recipient —"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1915,
                                                columnNumber: 15
                                            }, this),
                                            options.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "No verified recipients"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1916,
                                                columnNumber: 39
                                            }, this) : options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, i, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 1916,
                                                    columnNumber: 123
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1911,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600",
                                                        children: "Channel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1920,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full rounded border px-3 py-2",
                                                        value: channel,
                                                        onChange: (e)=>setChannel(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "SMS",
                                                                children: "SMS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1922,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "WHATSAPP",
                                                                children: "WhatsApp"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1923,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "EMAIL",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1924,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1921,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1919,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600",
                                                        children: "Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1929,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full rounded border px-3 py-2",
                                                        value: sendMode,
                                                        onChange: (e)=>setSendMode(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "now",
                                                                children: "Now"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1931,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "schedule",
                                                                children: "Schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1932,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1930,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1928,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1918,
                                        columnNumber: 13
                                    }, this),
                                    sendMode === "schedule" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-600",
                                                children: "Send at"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1938,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                className: "w-full rounded border px-3 py-2",
                                                value: sendAt ?? "",
                                                onChange: (e)=>setSendAt(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1939,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-400 mt-1",
                                                children: "Scheduled messages execute via the scheduler worker."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1940,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1937,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-600",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1944,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 6,
                                                value: body,
                                                onChange: (e)=>setBody(e.target.value),
                                                className: "w-full rounded border px-3 py-2 mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1945,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs text-slate-500 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: channel === "SMS" ? `SMS preview — ${Math.ceil(charCount / 160)} segments` : "Preview will adapt per channel."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1947,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            charCount,
                                                            " chars"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1948,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1946,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1943,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1909,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "bg-slate-50 rounded p-3 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1955,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 p-2 rounded bg-white border text-sm h-36 overflow-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: to || "Recipient"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1957,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-400 mt-1",
                                                        children: [
                                                            channel,
                                                            " • ",
                                                            formatShortDate(sendMode === "schedule" && sendAt ? sendAt : new Date().toISOString())
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1958,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 text-slate-700",
                                                        children: body || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: "Message preview will appear here"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 1959,
                                                            columnNumber: 63
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1959,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1956,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1954,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onClose,
                                                    className: "px-3 py-2 rounded border w-full",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 1965,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: sending || !to || !body,
                                                    onClick: handleSend,
                                                    className: "px-3 py-2 rounded bg-indigo-600 text-white w-full",
                                                    children: sending ? "Sending…" : sendMode === "now" ? "Send" : "Schedule"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 1966,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 1964,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1963,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1953,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1908,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1902,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 1900,
        columnNumber: 10
    }, this);
}
_s3(ComposerModal, "yDGLDy//mVPrpnMBUtowWIgM8YQ=");
_c8 = ComposerModal;
/* ----------------------------- ContactProfileModal + YjsNotes ---------------------------- */ function ContactProfileModal({ contactId, onClose, isEditor }) {
    _s4();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteText, setNoteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactProfileModal.useEffect": ()=>{
            let mounted = true;
            const controller = new AbortController();
            const signal = controller.signal;
            async function load() {
                try {
                    const [cRes, nRes] = await Promise.all([
                        fetch(`/api/contacts/${contactId}`, {
                            signal
                        }),
                        fetch(`/api/contacts/${contactId}/notes`, {
                            signal
                        })
                    ]);
                    if (!mounted) return;
                    if (cRes.ok) {
                        const cj = await cRes.json().catch({
                            "ContactProfileModal.useEffect.load": ()=>null
                        }["ContactProfileModal.useEffect.load"]);
                        setContact(cj?.contact ?? cj);
                    }
                    if (nRes.ok) {
                        const nj = await nRes.json().catch({
                            "ContactProfileModal.useEffect.load": ()=>null
                        }["ContactProfileModal.useEffect.load"]);
                        setNotes(Array.isArray(nj) ? nj : nj?.notes ?? []);
                    }
                } catch (e) {
                    if (e?.name !== "AbortError") console.error(e);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "ContactProfileModal.useEffect": ()=>{
                    mounted = false;
                    controller.abort();
                }
            })["ContactProfileModal.useEffect"];
        }
    }["ContactProfileModal.useEffect"], [
        contactId
    ]);
    async function handleAddNote() {
        if (!noteText.trim()) return;
        setAdding(true);
        try {
            const res = await fetch(`/api/contacts/${contactId}/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    body: noteText
                })
            });
            if (!res.ok) throw new Error("failed to add note");
            const j = await res.json().catch(()=>null);
            setNotes((s)=>[
                    j ?? {
                        id: String(Math.random()),
                        body: noteText
                    },
                    ...s
                ]);
            setNoteText("");
        } catch (e_0) {
            console.error(e_0);
            alert("Failed to add note");
        } finally{
            setAdding(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 2053,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl w-full bg-white rounded-2xl p-6 shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 2056,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-sm text-slate-500",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 2057,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 2055,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 2060,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: contact?.name ?? contact?.phone ?? "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 2062,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: contact?.email ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 2063,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: "Shared notes"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2066,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YjsNotes, {
                                                    contactId: contactId,
                                                    currentUser: {
                                                        id: "me",
                                                        name: contact?.name ?? "You"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 2068,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2067,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium",
                                                        children: "Saved notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 2075,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 space-y-2",
                                                        children: notes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500",
                                                            children: "No notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 2077,
                                                            columnNumber: 43
                                                        }, this) : notes.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 bg-slate-50 rounded",
                                                                children: n.encrypted ? "(encrypted)" : n.body
                                                            }, n.id ?? JSON.stringify(n), false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 2077,
                                                                columnNumber: 115
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 2076,
                                                        columnNumber: 19
                                                    }, this),
                                                    isEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: noteText,
                                                                onChange: (e_1)=>setNoteText(e_1.target.value),
                                                                rows: 3,
                                                                className: "w-full rounded border px-3 py-2 mt-1",
                                                                placeholder: "Add private note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 2081,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: adding || !noteText.trim(),
                                                                    onClick: handleAddNote,
                                                                    className: "px-3 py-1 rounded bg-indigo-600 text-white text-sm",
                                                                    children: adding ? "Adding…" : "Add note"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 2083,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 2082,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 2080,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2074,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 2065,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 2061,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium",
                                        children: "Quick actions"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 2091,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/inbox?contact=${contactId}`,
                                                className: "px-3 py-2 rounded bg-indigo-600 text-white text-sm text-center",
                                                children: "Open thread"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2093,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-2 rounded bg-slate-50 text-sm",
                                                children: "Merge"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2094,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-2 rounded bg-slate-50 text-sm",
                                                children: "Export"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 2095,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 2092,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 2090,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 2060,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 2054,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 2052,
        columnNumber: 10
    }, this);
}
_s4(ContactProfileModal, "yqenoOEF9McyfXsOwm6hlWZVirg=");
_c9 = ContactProfileModal;
/* ----------------------------- YjsNotes ---------------------------- */ function YjsNotes({ contactId, currentUser }) {
    _s5();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const ydocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YjsNotes.useEffect": ()=>{
            const wsUrl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_YJS_WS || "ws://localhost:1234";
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"]();
            ydocRef.current = doc;
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$y$2d$websocket$2f$src$2f$y$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebsocketProvider"](wsUrl, `contact-notes-${contactId}`, doc);
            providerRef.current = provider;
            const ytext = doc.getText("notes");
            setText(ytext.toString());
            const obs = {
                "YjsNotes.useEffect.obs": ()=>setText(ytext.toString())
            }["YjsNotes.useEffect.obs"];
            ytext.observe(obs);
            try {
                provider.awareness.setLocalStateField("user", {
                    id: currentUser?.id,
                    name: currentUser?.name ?? "Unknown"
                });
            } catch  {}
            return ({
                "YjsNotes.useEffect": ()=>{
                    try {
                        ytext.unobserve(obs);
                    } catch  {}
                    try {
                        provider.disconnect();
                    } catch  {}
                    doc.destroy();
                }
            })["YjsNotes.useEffect"];
        }
    }["YjsNotes.useEffect"], [
        contactId,
        currentUser?.id,
        currentUser?.name
    ]);
    function onChangeLocal(e) {
        const doc_0 = ydocRef.current;
        if (!doc_0) return;
        const ytext_0 = doc_0.getText("notes");
        ytext_0.delete(0, ytext_0.length);
        ytext_0.insert(0, e.target.value);
        setText(e.target.value);
    }
    async function saveSnapshotToDB() {
        const doc_1 = ydocRef.current;
        if (!doc_1) return;
        const val = doc_1.getText("notes").toString();
        try {
            await fetch(`/api/contacts/${contactId}/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    body: val
                })
            });
            alert("Saved snapshot");
        } catch (e_0) {
            console.error(e_0);
            alert("Save failed");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "w-full rounded border px-3 py-2 mt-1",
                rows: 6,
                value: text,
                onChange: onChangeLocal
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 2173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mt-2 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: saveSnapshotToDB,
                    className: "px-3 py-1 rounded bg-slate-50",
                    children: "Save snapshot"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 2175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 2174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 2172,
        columnNumber: 10
    }, this);
}
_s5(YjsNotes, "ZBPSSEf7wULZbBZp9/GcsCzDZsI=");
_c10 = YjsNotes;
/* ----------------------------- Sparkline ---------------------------- */ function Sparkline(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { data } = t0;
    const max = Math.max(...data);
    const min = Math.min(...data);
    let t1;
    if ($[1] !== data || $[2] !== max || $[3] !== min) {
        let t2;
        if ($[5] !== data.length || $[6] !== max || $[7] !== min) {
            t2 = ({
                "Sparkline[data.map()]": (v, i)=>{
                    const x = i / (data.length - 1 || 1) * 160;
                    const y = 40 - (v - min) / (max - min || 1) * 40;
                    return `${x},${y}`;
                }
            })["Sparkline[data.map()]"];
            $[5] = data.length;
            $[6] = max;
            $[7] = min;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        t1 = data.map(t2).join(" ");
        $[1] = data;
        $[2] = max;
        $[3] = min;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const points = t1;
    let t2;
    if ($[9] !== points) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 160,
            height: 40,
            viewBox: "0 0 160 40",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                fill: "none",
                stroke: "#4F46E5",
                strokeWidth: 2,
                strokeLinejoin: "round",
                strokeLinecap: "round",
                points: points
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 2224,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 2224,
            columnNumber: 10
        }, this);
        $[9] = points;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c11 = Sparkline;
/* ----------------------------- SearchBar ---------------------------- */ function SearchBar(t0) {
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "248f6ef1ba3dfe0c82f8a804f13b9ede1ccdf817b8f4a9c5dcc1f77d74c0d1f1";
    }
    const { onSearch } = t0;
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SearchBar[<input>.onChange]": (e)=>setQ(e.target.value)
        })["SearchBar[<input>.onChange]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onSearch || $[3] !== q) {
        t2 = ({
            "SearchBar[<input>.onKeyDown]": (e_0)=>e_0.key === "Enter" && onSearch(q)
        })["SearchBar[<input>.onKeyDown]"];
        $[2] = onSearch;
        $[3] = q;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== q || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: q,
            onChange: t1,
            onKeyDown: t2,
            placeholder: "Search threads, contacts...",
            className: "bg-transparent outline-none text-sm"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 2269,
            columnNumber: 10
        }, this);
        $[5] = q;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== onSearch || $[9] !== q) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "SearchBar[<button>.onClick]": ()=>onSearch(q)
            }["SearchBar[<button>.onClick]"],
            className: "text-xs px-2 py-1 rounded bg-slate-200",
            children: "Search"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 2278,
            columnNumber: 10
        }, this);
        $[8] = onSearch;
        $[9] = q;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center bg-slate-100 rounded px-3 py-1",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 2289,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_s6(SearchBar, "13TK0MQVHS59o/u0BJ6vdQy27Yo=");
_c12 = SearchBar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "WelcomePage");
__turbopack_context__.k.register(_c1, "IntegrationsModal");
__turbopack_context__.k.register(_c2, "InboxPanel");
__turbopack_context__.k.register(_c3, "MessengerBubble");
__turbopack_context__.k.register(_c4, "MiniCard");
__turbopack_context__.k.register(_c5, "IntegrationsSummary");
__turbopack_context__.k.register(_c6, "AnalyticsPanel");
__turbopack_context__.k.register(_c7, "ThreadCard");
__turbopack_context__.k.register(_c8, "ComposerModal");
__turbopack_context__.k.register(_c9, "ContactProfileModal");
__turbopack_context__.k.register(_c10, "YjsNotes");
__turbopack_context__.k.register(_c11, "Sparkline");
__turbopack_context__.k.register(_c12, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_ca74e1f1._.js.map