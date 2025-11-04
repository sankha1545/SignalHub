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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function WelcomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [threads, setThreads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [numbers, setNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // NEW: contacts list used for composer "To" selection
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [composerOpen, setComposerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composerContext, setComposerContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contactModal, setContactModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buying, setBuying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [presence, setPresence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Derived role helpers
    const role = (user?.role ?? "VIEWER").toString().toUpperCase();
    const isAdmin = role === "ADMIN";
    const isEditor = role === "EDITOR" || isAdmin;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            let mounted = true;
            const controller = new AbortController();
            const signal = controller.signal;
            async function loadAll() {
                setLoading(true);
                try {
                    const [meRes, analyticsRes, threadsRes, numbersRes] = await Promise.all([
                        fetch(`/api/me`, {
                            signal
                        }),
                        fetch(`/api/analytics/summary`, {
                            signal
                        }),
                        fetch(`/api/threads?limit=10`, {
                            signal
                        }),
                        fetch(`/api/twilio/numbers`, {
                            signal
                        })
                    ]);
                    if (!mounted) return;
                    // /api/me
                    if (meRes.ok) {
                        try {
                            const j = await meRes.json();
                            setUser(j.user ?? null);
                        } catch (err) {
                            console.warn("welcome: /api/me parse error", err);
                            setUser(null);
                        }
                    } else {
                        setUser(null);
                    }
                    // analytics
                    if (analyticsRes.ok) {
                        try {
                            const j = await analyticsRes.json();
                            setAnalytics({
                                messages7d: j.messages7d ?? 0,
                                avgResponseMins: j.avgResponseMins ?? 0,
                                openRatePct: j.openRatePct ?? 0,
                                sparkline: Array.isArray(j.sparkline) && j.sparkline.length ? j.sparkline : [
                                    1,
                                    2,
                                    3,
                                    2,
                                    4
                                ]
                            });
                        } catch (e) {
                            console.warn("welcome: analytics parse error", e);
                            setAnalytics(null);
                        }
                    }
                    // threads
                    if (threadsRes.ok) {
                        try {
                            const j = await threadsRes.json();
                            setThreads(Array.isArray(j.threads) ? j.threads : []);
                        } catch (e) {
                            console.warn("welcome: threads parse error", e);
                            setThreads([]);
                        }
                    }
                    // numbers
                    if (numbersRes.ok) {
                        try {
                            const j = await numbersRes.json();
                            setNumbers(Array.isArray(j.numbers) ? j.numbers : []);
                        } catch (e) {
                            console.warn("welcome: numbers parse error", e);
                            setNumbers([]);
                        }
                    }
                    // load contacts list for composer (best-effort)
                    try {
                        await fetchContacts(signal);
                    } catch (err) {
                        console.warn("welcome: fetchContacts failed", err);
                    }
                } catch (e) {
                    if (e.name === "AbortError") {
                    // expected on unmount
                    } else {
                        console.error("welcome: loadAll error", e);
                    }
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
    // Fetch contacts list (prefers /api/contacts, fallback to /api/users)
    // Replace existing fetchContacts with this more robust version
    async function fetchContacts(signal) {
        const tried = [];
        // helper: normalize a raw user/contact object into ContactItem shape
        function normalizeRaw(raw) {
            if (!raw) return null;
            // try many common locations for id/name/email/phone and verified flags
            const id = raw.id ?? raw.userId ?? raw.contactId ?? raw._id ?? null;
            const name = raw.name ?? raw.displayName ?? raw.fullName ?? (raw.profile && (raw.profile.displayName || raw.profile.name)) ?? raw.email ?? null;
            // find email in several shapes
            let email = null;
            let emailVerified = false;
            if (raw.email) {
                email = raw.email;
                // common boolean flag
                emailVerified = Boolean(raw.emailVerified ?? raw.email_verified ?? (raw.profile && raw.profile.emailVerified) ?? false);
            } else if (Array.isArray(raw.emails) && raw.emails.length) {
                // e.g. [{ value:'x@', verified: true }]
                const primary = raw.emails.find((e)=>e.primary || e.primary === true) ?? raw.emails[0];
                email = primary?.value ?? primary?.address ?? null;
                emailVerified = Boolean(primary?.verified ?? primary?.verifiedAt ?? false);
            } else if (Array.isArray(raw.accounts) && raw.accounts.length) {
                // e.g. OAuth accounts [{ provider: 'google', email: 'x@' }]
                const acct = raw.accounts.find((a)=>a.provider && (a.email || a.profile?.email)) ?? raw.accounts[0];
                email = acct?.email ?? acct?.profile?.email ?? null;
                emailVerified = true; // assume oauth provider emails are verified
            } else if (Array.isArray(raw.identities) && raw.identities.length) {
                const idn = raw.identities.find(Boolean);
                email = idn?.email ?? null;
                emailVerified = Boolean(idn?.email_verified ?? true);
            } else if (raw.profile && raw.profile.email) {
                email = raw.profile.email;
                emailVerified = Boolean(raw.profile.emailVerified ?? raw.profile.email_verified ?? false);
            }
            // find phone in several shapes
            let phone = null;
            let phoneVerified = false;
            if (raw.phone) {
                phone = raw.phone;
                phoneVerified = Boolean(raw.phoneVerified ?? raw.phone_verified ?? (raw.profile && raw.profile.phoneVerified) ?? false);
            } else if (raw.phoneNumber) {
                phone = raw.phoneNumber;
                phoneVerified = Boolean(raw.phoneVerified ?? false);
            } else if (raw.profile && raw.profile.phoneNumber) {
                phone = raw.profile.phoneNumber;
                phoneVerified = Boolean(raw.profile.phoneVerified ?? false);
            } else if (Array.isArray(raw.phones) && raw.phones.length) {
                const p = raw.phones[0];
                phone = p?.value ?? p?.number ?? null;
                phoneVerified = Boolean(p?.verified ?? false);
            }
            if (!id && !email && !phone) {
                // nothing useful here
                return null;
            }
            return {
                id: id ?? email ?? phone ?? String(Math.random()).slice(2, 9),
                name,
                email,
                emailVerified,
                phone,
                phoneVerified
            };
        }
        // generic fetch helper that returns array or object
        async function tryFetch(url) {
            tried.push(url);
            try {
                const opts = signal ? {
                    signal
                } : undefined;
                const r = await fetch(url, opts);
                if (!r.ok) {
                    console.debug(`[fetchContacts] ${url} returned ${r.status}`);
                    return null;
                }
                const j = await r.json().catch(()=>null);
                return j;
            } catch (err) {
                console.debug(`[fetchContacts] ${url} fetch error:`, err);
                return null;
            }
        }
        // order: contacts -> users -> me -> admin/users
        const tries = [
            "/api/contacts?limit=1000",
            "/api/users?limit=1000",
            "/api/me",
            "/api/admin/users?limit=1000"
        ];
        let aggregated = [];
        for (const url of tries){
            const data = await tryFetch(url);
            if (!data) continue;
            // /api/me returns { user }
            if (data.user) {
                const n = normalizeRaw(data.user);
                if (n) aggregated.push(n);
            } else if (Array.isArray(data)) {
                for (const item of data){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else if (Array.isArray(data.contacts)) {
                for (const item of data.contacts){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else if (Array.isArray(data.users)) {
                for (const item of data.users){
                    const n = normalizeRaw(item);
                    if (n) aggregated.push(n);
                }
            } else if (typeof data === "object") {
                // maybe it's a single user or object with items
                if (data.items && Array.isArray(data.items)) {
                    for (const item of data.items){
                        const n = normalizeRaw(item);
                        if (n) aggregated.push(n);
                    }
                } else {
                    // single object
                    const n = normalizeRaw(data);
                    if (n) aggregated.push(n);
                }
            }
            // if we found some items, break early (but still allow later fallback)
            if (aggregated.length > 0) break;
        }
        // always also try to include the signed-in /api/me user to ensure they're visible
        try {
            const me = await tryFetch("/api/me");
            if (me && me.user) {
                const n = normalizeRaw(me.user);
                if (n) aggregated.push(n);
            }
        } catch (e) {}
        // de-duplicate by id/email/phone
        const map = new Map();
        for (const a of aggregated){
            const key = a.id ?? a.email ?? a.phone ?? JSON.stringify(a);
            if (!map.has(key)) map.set(key, a);
            else {
                // merge existing
                const ex = map.get(key);
                map.set(key, {
                    ...ex,
                    ...a
                });
            }
        }
        const result = Array.from(map.values());
        // debug: if empty, log what we tried to help backend debugging
        if (result.length === 0) {
            console.warn("[fetchContacts] no contacts normalized — tried endpoints:", tried);
            console.warn("[fetchContacts] aggregated raw:", aggregated.slice(0, 20));
        } else {
            console.debug("[fetchContacts] normalized contacts count:", result.length);
        }
        setContacts((prev)=>mergeUniqueContacts(prev, result));
    }
    function mergeUniqueContacts(prev, next) {
        const map = new Map();
        // key by id primarily, else by email/phone
        prev.forEach((c)=>{
            const key = c.id ?? c.email ?? c.phone ?? String(Math.random());
            map.set(key, c);
        });
        next.forEach((c)=>{
            const key = c.id ?? c.email ?? c.phone ?? String(Math.random());
            if (!map.has(key)) map.set(key, c);
            else {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    ...c
                });
            }
        });
        return Array.from(map.values());
    }
    // Realtime: open WebSocket to receive presence and new thread events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WelcomePage.useEffect": ()=>{
            if (!user) return;
            let ws = null;
            try {
                ws = new WebSocket((("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable") + "/api/ws");
                wsRef.current = ws;
                ws.onopen = ({
                    "WelcomePage.useEffect": ()=>{
                        ws?.send(JSON.stringify({
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
                            }
                            if (msg.type === "presence:leave") {
                                setPresence({
                                    "WelcomePage.useEffect": (p)=>{
                                        const copy = {
                                            ...p
                                        };
                                        delete copy[msg.userId];
                                        return copy;
                                    }
                                }["WelcomePage.useEffect"]);
                            }
                            if (msg.type === "thread:new") {
                                setThreads({
                                    "WelcomePage.useEffect": (t)=>[
                                            msg.thread,
                                            ...t
                                        ]
                                }["WelcomePage.useEffect"]);
                            }
                            if (msg.type === "thread:update") {
                                setThreads({
                                    "WelcomePage.useEffect": (t)=>t.map({
                                            "WelcomePage.useEffect": (x)=>x.id === msg.thread.id ? msg.thread : x
                                        }["WelcomePage.useEffect"])
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
            } catch (e) {
                console.warn("Realtime not available", e);
            }
            return ({
                "WelcomePage.useEffect": ()=>{
                    try {
                        ws?.close();
                    } catch (e) {
                    /* */ }
                }
            })["WelcomePage.useEffect"];
        }
    }["WelcomePage.useEffect"], [
        user
    ]);
    function handlePrimary() {
        if (isAdmin) router.push("/admin");
        else router.push("/inbox");
    }
    async function handleBuyNumber(id) {
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
            // refresh numbers
            const refreshed = await fetch(`/api/twilio/numbers`);
            if (refreshed.ok) {
                const j = await refreshed.json();
                setNumbers(Array.isArray(j.numbers) ? j.numbers : []);
            }
        } catch (e) {
            console.error(e);
            alert("Failed to buy number. Check logs or sandbox mode.");
        } finally{
            setBuying(null);
        }
    }
    // open composer with optional context (threadId or contactId)
    function openComposer(ctx) {
        if (!isEditor) {
            // viewers cannot compose
            return;
        }
        setComposerContext(ctx ?? null);
        setComposerOpen(true);
    }
    function closeComposer() {
        setComposerOpen(false);
        setComposerContext(null);
    }
    // sendMessage handles immediate sends and scheduled sends
    // improved sendMessage with detailed logging & clearer errors
    async function sendMessage(payload) {
        if (!isEditor) throw new Error("not authorized");
        console.debug("[sendMessage] payload:", payload);
        // optimistic thread preview insertion (unchanged)
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
            scheduled: isScheduled
        };
        setThreads((t)=>[
                optimistic,
                ...t
            ]);
        try {
            let res;
            let endpoint;
            if (isScheduled) {
                endpoint = "/api/messages/schedule";
                res = await fetch(endpoint, {
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
                endpoint = "/api/messages/send";
                res = await fetch(endpoint, {
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
            // read response text for debugging (attempt json, fallback to text)
            const text = await res.text().catch(()=>"");
            let parsed = null;
            try {
                parsed = text ? JSON.parse(text) : null;
            } catch (e) {
                parsed = text;
            }
            console.debug(`[sendMessage] ${endpoint} responded status=${res.status}`, parsed);
            if (!res.ok) {
                // remove optimistic preview
                setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
                const serverMsg = parsed?.error ?? parsed?.message ?? (typeof parsed === "string" ? parsed : `HTTP ${res.status}`);
                // show a helpful alert and throw the server message so UI caller can react
                alert(`Send failed: ${serverMsg}`);
                throw new Error(`send failed: ${serverMsg}`);
            }
            const j = parsed ?? {};
            // if server returns canonical thread, replace optimistic
            if (j.thread && j.thread.id) {
                setThreads((t)=>[
                        j.thread,
                        ...t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-"))
                    ]);
            } else {
                // fallback: remove tmp optimistic
                setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-")));
            }
            return j;
        } catch (err) {
            // already removed optimistic on non-ok responses; ensure optimistic removed on any thrown error
            setThreads((t)=>t.filter((x)=>!x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
            console.error("[sendMessage] error:", err);
            throw err;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "26",
                                        height: "26",
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
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 6v12",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-slate-900",
                                            children: "SignalHub"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-500",
                                            children: "Unified Inbox • Multi-channel outreach"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 608,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 599,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "uppercase",
                                            children: role
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-600",
                                            children: "access"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center gap-2 text-xs text-slate-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: Object.keys(presence).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "no one online"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 55
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: Object.entries(presence).slice(0, 4).map(([id, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `w-2 h-2 rounded-full ${p.idle ? "bg-yellow-400" : "bg-green-400"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            title: p.name,
                                                            children: p.name ?? id
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, id, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 76
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 119
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    email: user?.email,
                                    avatarUrl: undefined
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 598,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md",
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
                                                                lineNumber: 642,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7 6v12",
                                                                stroke: "white",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 641,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900",
                                                        children: "SignalHub — Unified Inbox for Multi-Channel Outreach"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-slate-600 max-w-2xl",
                                                        children: "Manage SMS, WhatsApp and Email threads in one place, collaborate with your team in real time, schedule messages, and measure impact — built with secure webhooks and role-based controls."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 flex flex-wrap gap-3 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: handlePrimary,
                                                                className: "inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-[1.01] transition-transform",
                                                                children: [
                                                                    isAdmin ? "Open Admin Dashboard" : "Go to Inbox",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        "aria-hidden": "true",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 12h14",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 7
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M12 5l7 7-7 7",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 7
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 5
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/settings",
                                                                className: "px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50",
                                                                children: "Configure Integrations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 21
                                                            }, this),
                                                            isEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>openComposer(),
                                                                className: "px-4 py-2 rounded-lg border bg-white text-slate-700 hover:bg-slate-50",
                                                                children: "Quick Compose"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 671,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                                title: "Unified Threads",
                                                desc: "All messages normalized into threads per contact — SMS, WhatsApp, Email. Click a thread to preview."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 680,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                                title: "Schedule & Automate",
                                                desc: "Schedule outbound messages and run background workers for timed delivery."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                                title: "Team Collaboration",
                                                desc: "Real-time presence, shared notes, and role-based permissions."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                                title: "Analytics",
                                                desc: "Quick insights: volume, response time and delivery KPIs. Exportable CSVs."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-rose-50 p-4 bg-rose-50/30",
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
                                                                        lineNumber: 691,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-600",
                                                                        children: "Trial mode — numbers are simulated unless purchased"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                        lineNumber: 692,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-500",
                                                                children: "Sandbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 694,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-700 mb-2",
                                                                children: "Available numbers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: numbers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "No sandbox numbers found."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 700,
                                                                    columnNumber: 47
                                                                }, this) : numbers.slice(0, 4).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between bg-white rounded-lg p-2 border",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-medium",
                                                                                        children: n.phone
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                        lineNumber: 702,
                                                                                        columnNumber: 31
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
                                                                                        lineNumber: 703,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 701,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: n.purchased ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-green-600",
                                                                                    children: "Purchased"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                    lineNumber: 708,
                                                                                    columnNumber: 46
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleBuyNumber(n.id),
                                                                                    className: "px-3 py-1 rounded bg-indigo-600 text-white text-xs",
                                                                                    disabled: !!buying,
                                                                                    children: buying === n.id ? "Buying…" : "Buy Now"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                    lineNumber: 708,
                                                                                    columnNumber: 106
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                                lineNumber: 707,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, n.id, true, {
                                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                        lineNumber: 700,
                                                                        columnNumber: 150
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntegrationsPanel, {
                                                numbers: numbers
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 687,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 637,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 636,
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
                                    lineNumber: 724,
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
                                            lineNumber: 728,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`,
                                                    onClick: ()=>isEditor ? openComposer() : null,
                                                    "aria-disabled": !isEditor,
                                                    children: [
                                                        "Compose message ",
                                                        isEditor ? "" : "(editor required)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `text-left px-3 py-2 rounded-lg ${isAdmin ? "bg-indigo-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`,
                                                    onClick: ()=>isAdmin ? router.push("/admin") : null,
                                                    "aria-disabled": !isAdmin,
                                                    children: [
                                                        "Manage team ",
                                                        isAdmin ? "" : "(admin only)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                    href: "/analytics",
                                                    children: "View analytics"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                    href: "/settings",
                                                    children: "Integrations & webhooks"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 729,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 727,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 723,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 635,
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
                                            children: "Live thread preview"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-500",
                                            children: "Normalized view • unified timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 750,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl overflow-hidden border border-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-gradient-to-r from-slate-50 to-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadsList, {
                                            threads: threads,
                                            onOpenContact: (id)=>setContactModal({
                                                    contactId: id
                                                }),
                                            onCompose: (t)=>openComposer({
                                                    threadId: t?.id,
                                                    contactId: t?.contactId
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 756,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-sm text-slate-600",
                                    children: "This preview demonstrates how inbound messages from different channels are shown as one thread per contact. The composer is role-gated — viewers can only read, editors can send/schedule, admins can manage settings & team."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 766,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 749,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "bg-white rounded-3xl p-6 shadow border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold mb-3",
                                    children: "Get started — suggested next steps"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 774,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "text-sm space-y-3 list-decimal list-inside text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Open ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/inbox",
                                                    className: "text-blue-600",
                                                    children: "Inbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 22
                                                }, this),
                                                " and review threads."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isEditor ? "Compose and schedule a test message." : "Request editor access to send messages."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 780,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Verify Twilio Sandbox under ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/settings",
                                                    className: "text-blue-600",
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 47
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/admin",
                                                        className: "text-blue-600",
                                                        children: "Manage team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 32
                                                    }, this),
                                                    " & set roles."
                                                ]
                                            }, void 0, true) : "Ask an admin to add you to a team."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 782,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Open ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/analytics",
                                                    className: "text-blue-600",
                                                    children: "Analytics"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 24
                                                }, this),
                                                " to review KPIs."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                            lineNumber: 783,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/inbox",
                                        className: "block text-center bg-blue-600 text-white px-4 py-2 rounded-lg",
                                        children: "Start working"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 787,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 773,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 748,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 text-center text-sm text-slate-500",
                    children: "Built for the Attack Capital assignment — multi-channel outreach, scheduling, team collaboration and analytics."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 794,
                    columnNumber: 9
                }, this),
                composerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComposerModal, {
                    onClose: closeComposer,
                    onSent: ()=>{
                        closeComposer();
                    },
                    onSend: async (p)=>{
                        // the ComposerModal now supplies to, channel, body and contactId
                        const payload = {
                            to: p.to,
                            channel: p.channel,
                            body: p.body,
                            scheduleAt: p.scheduleAt,
                            threadId: composerContext?.threadId,
                            contactId: p.contactId ?? composerContext?.contactId
                        };
                        return sendMessage(payload);
                    },
                    context: composerContext,
                    contacts: contacts
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 800,
                    columnNumber: 26
                }, this),
                contactModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactProfileModal, {
                    contactId: contactModal.contactId,
                    onClose: ()=>setContactModal(null),
                    isEditor: isEditor
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 816,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 592,
        columnNumber: 10
    }, this);
}
_s(WelcomePage, "0wjTXUJB9yeBxb8i0s6CjaH1B/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WelcomePage;
/* ----------------------------- Small components ---------------------------- */ function FeatureCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
    }
    const { title, desc } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 7h16M4 12h10M4 17h7",
                    stroke: "#0f172a",
                    strokeWidth: "1.6",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 837,
                    columnNumber: 173
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 837,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 837,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold text-slate-800",
            children: title
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 844,
            columnNumber: 10
        }, this);
        $[2] = title;
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
            lineNumber: 852,
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
            className: "bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-start gap-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t2,
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 860,
                    columnNumber: 112
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 860,
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
_c1 = FeatureCard;
function ThreadsList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
    }
    const { threads, onOpenContact, onCompose } = t0;
    if (!Array.isArray(threads) || threads.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 text-sm text-slate-500",
                children: "No recent threads yet."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 885,
                columnNumber: 12
            }, this);
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    if ($[2] !== onCompose || $[3] !== onOpenContact || $[4] !== threads) {
        let t2;
        if ($[6] !== onCompose || $[7] !== onOpenContact) {
            t2 = ({
                "ThreadsList[threads.map()]": (t)=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (t && !Array.isArray(t.channels)) {
                            console.debug("ThreadsList: thread has missing/invalid channels field:", t);
                        }
                    }
                    const contactPhone = t?.contactPhone ?? "\u2014";
                    const channelsDisplay = (Array.isArray(t?.channels) ? t.channels : []).join(" \u2022 ") || "\u2014";
                    const lastAtDisplay = t?.lastAt ? new Date(t.lastAt).toLocaleString() : "\u2014";
                    const snippet = t?.snippet ?? "";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 hover:bg-slate-50 flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium",
                                                        children: t?.contactName ?? "Unknown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 204
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-500",
                                                        children: [
                                                            contactPhone,
                                                            " • ",
                                                            channelsDisplay
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 268
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 907,
                                                columnNumber: 199
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-400",
                                                children: lastAtDisplay
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 907,
                                                columnNumber: 354
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 149
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-sm text-slate-700",
                                        children: snippet
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 421
                                    }, this),
                                    t?.scheduled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-xs text-amber-600",
                                        children: "Scheduled"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 498
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 907,
                                columnNumber: 125
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ThreadsList[threads.map() > <button>.onClick]": ()=>onOpenContact(t?.contactId ?? t?.id)
                                        }["ThreadsList[threads.map() > <button>.onClick]"],
                                        className: "text-xs px-3 py-1 rounded bg-slate-50",
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 612
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: {
                                            "ThreadsList[threads.map() > <button>.onClick]": ()=>onCompose ? onCompose(t) : null
                                        }["ThreadsList[threads.map() > <button>.onClick]"],
                                        className: "text-xs px-3 py-1 rounded bg-indigo-600 text-white",
                                        children: "Reply"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 909,
                                        columnNumber: 133
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 907,
                                columnNumber: 565
                            }, this)
                        ]
                    }, t?.id ?? Math.random(), true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 907,
                        columnNumber: 18
                    }, this);
                }
            })["ThreadsList[threads.map()]"];
            $[6] = onCompose;
            $[7] = onOpenContact;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        t1 = threads.map(t2);
        $[2] = onCompose;
        $[3] = onOpenContact;
        $[4] = threads;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y",
            children: t1
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 930,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c2 = ThreadsList;
function IntegrationsPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
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
                            lineNumber: 951,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-600",
                            children: "Connected providers & webhook health"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 951,
                            columnNumber: 129
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 951,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: "OK"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 951,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 951,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-xs text-slate-500",
            children: "Resend (Email) — Not connected"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 958,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== numbers.length) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border p-4 bg-white",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-sm text-slate-700",
                    children: [
                        "Twilio (Sandbox) — Webhook configured",
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-slate-500",
                            children: [
                                "Available numbers: ",
                                numbers.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                            lineNumber: 965,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                    lineNumber: 965,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 965,
            columnNumber: 10
        }, this);
        $[3] = numbers.length;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c3 = IntegrationsPanel;
function AnalyticsPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
    }
    const { analytics, loading } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold text-slate-700",
            children: "Last 7 days"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 987,
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
                    lineNumber: 995,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 995,
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
            lineNumber: 1004,
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
            lineNumber: 1012,
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
            lineNumber: 1019,
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
            lineNumber: 1028,
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
            lineNumber: 1036,
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
            lineNumber: 1043,
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
            lineNumber: 1052,
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
            lineNumber: 1060,
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
            lineNumber: 1067,
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
            lineNumber: 1075,
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
                lineNumber: 1093,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1093,
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
            children: "View full analytics for channel breakdown, response time histograms, and exportable reports."
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1101,
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
            lineNumber: 1108,
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
            lineNumber: 1117,
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
_c4 = AnalyticsPanel;
/* ----------------------------- Contact modal + Yjs notes ---------------------------- */ function ContactProfileModal({ contactId, onClose, isEditor }) {
    _s1();
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
                        const cj = await cRes.json();
                        setContact(cj.contact ?? cj);
                    }
                    if (nRes.ok) {
                        const nj = await nRes.json();
                        setNotes(Array.isArray(nj) ? nj : nj.notes || []);
                    }
                } catch (e) {
                    if (e.name !== "AbortError") console.error(e);
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
            const j = await res.json();
            setNotes((s)=>[
                    j,
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
                lineNumber: 1200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Contact profile"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "text-sm text-slate-500",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1202,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1207,
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
                                        lineNumber: 1209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: contact?.email ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium",
                                                children: "Notes (shared)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1213,
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
                                                    lineNumber: 1215,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1214,
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
                                                        lineNumber: 1222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 space-y-2",
                                                        children: notes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-slate-500",
                                                            children: "No notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                            lineNumber: 1224,
                                                            columnNumber: 43
                                                        }, this) : notes.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 bg-slate-50 rounded",
                                                                children: n.encrypted ? "(encrypted)" : n.body
                                                            }, n.id, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1224,
                                                                columnNumber: 115
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1223,
                                                        columnNumber: 19
                                                    }, this),
                                                    isEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                className: "w-full rounded border px-3 py-2 mt-1",
                                                                rows: 3,
                                                                value: noteText,
                                                                onChange: (e_1)=>setNoteText(e_1.target.value),
                                                                placeholder: "Add private note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1228,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 flex justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleAddNote,
                                                                    disabled: adding || !noteText.trim(),
                                                                    className: "px-3 py-1 rounded bg-blue-600 text-white text-sm",
                                                                    children: adding ? "Adding…" : "Add note"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                    lineNumber: 1230,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                                lineNumber: 1229,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1208,
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
                                        lineNumber: 1238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/inbox?contact=${contactId}`,
                                                className: "px-3 py-2 rounded bg-blue-600 text-white text-sm text-center",
                                                children: "Open thread"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "px-3 py-2 rounded bg-slate-50 text-sm",
                                                children: "Merge duplicates"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "px-3 py-2 rounded bg-slate-50 text-sm",
                                                children: "Export contact"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1207,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 1199,
        columnNumber: 10
    }, this);
}
_s1(ContactProfileModal, "yqenoOEF9McyfXsOwm6hlWZVirg=");
_c5 = ContactProfileModal;
/* ----------------------------- Composer (send + schedule) ---------------------------- */ /**
 * ComposerModal props:
 * - contacts: preloaded contacts array (used to populate the "To" selector)
 * - context.contactId: optional contact to pre-select
 */ function ComposerModal({ onClose, onSent, onSend, context, contacts }) {
    _s2();
    // `to` state holds the selected actual address (phone or email) string
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // `selectedContactId` stores which contact is selected (if any)
    const [selectedContactId, setSelectedContactId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // channel selection
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("SMS");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendMode, setSendMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("now");
    const [sendAt, setSendAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Keep a local filtered list derived from contacts
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
                "ComposerModal.useMemo[emailOptions]": (c)=>c.email && (c.emailVerified ?? true)
            }["ComposerModal.useMemo[emailOptions]"]) // if backend doesn't provide emailVerified, include if email exists
            .map({
                "ComposerModal.useMemo[emailOptions]": (c)=>({
                        contactId: c.id,
                        label: `${c.name ?? c.email} (${c.email})`,
                        value: c.email
                    })
            }["ComposerModal.useMemo[emailOptions]"])
    }["ComposerModal.useMemo[emailOptions]"], [
        contacts
    ]);
    // If composer opened with context.contactId, pre-select sensible default based on channel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposerModal.useEffect": ()=>{
            if (!context?.contactId) return;
            const c = contacts.find({
                "ComposerModal.useEffect.c": (x)=>x.id === context.contactId
            }["ComposerModal.useEffect.c"]);
            if (!c) return;
            if ((channel === "SMS" || channel === "WHATSAPP") && c.phone) {
                if (c.phoneVerified) {
                    setTo(c.phone);
                    setSelectedContactId(c.id);
                } else {
                // don't prefill unverified number — leave selection blank
                }
            } else if (channel === "EMAIL" && c.email) {
                setTo(c.email);
                setSelectedContactId(c.id);
            } else {
                // if channel doesn't match contact's preferred, try to pick a best-match
                if (channel === "EMAIL" && c.email) {
                    setTo(c.email);
                    setSelectedContactId(c.id);
                } else if ((channel === "SMS" || channel === "WHATSAPP") && c.phone) {
                    if (c.phoneVerified) {
                        setTo(c.phone);
                        setSelectedContactId(c.id);
                    }
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ComposerModal.useEffect"], [
        context?.contactId,
        contacts,
        channel
    ]);
    // When channel changes, clear selection if it no longer matches
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComposerModal.useEffect": ()=>{
            if (!to) return;
            const isPhoneChannel = channel === "SMS" || channel === "WHATSAPP";
            const contactHasMatch = contacts.find({
                "ComposerModal.useEffect.contactHasMatch": (c)=>{
                    if (isPhoneChannel) return c.phone === to && c.phoneVerified;
                    else return c.email === to;
                }
            }["ComposerModal.useEffect.contactHasMatch"]);
            if (!contactHasMatch) {
                // clear selection — forces user to pick a valid contact for the channel
                setTo("");
                setSelectedContactId(undefined);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ComposerModal.useEffect"], [
        channel
    ]);
    // Handler when user picks an item from the select
    function onSelectTo(e) {
        const val = e.target.value;
        if (!val) {
            setTo("");
            setSelectedContactId(undefined);
            return;
        }
        // The option value is encoded as JSON: {contactId, value}
        try {
            const parsed = JSON.parse(val);
            setTo(parsed.value);
            setSelectedContactId(parsed.contactId);
        } catch (err) {
            // fallback: plain value
            setTo(val);
            setSelectedContactId(undefined);
        }
    }
    // --- paste here, before your component ---
    async function debugSendMessage(payload) {
        try {
            const res = await fetch("/api/messages/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                credentials: "include"
            });
            let body = null;
            try {
                body = await res.json().catch(()=>null);
            } catch  {
                body = null;
            }
            if (!res.ok) {
                console.error("send failed:", res.status, body ?? await res.text().catch(()=>"(no body)"));
                const msg = body && (body.error || body.message) || `Send failed (HTTP ${res.status}). See console for details.`;
                throw new Error(msg);
            }
            return body;
        } catch (err) {
            console.error("send failed (network/internal):", err);
            throw err;
        }
    }
    async function handleSend() {
        setSending(true);
        try {
            // ensure required fields
            if (!to) {
                alert("Select a recipient in the To field.");
                setSending(false);
                return;
            }
            if (!body.trim()) {
                alert("Message body is required.");
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
            console.error(e);
            alert("Failed to send message");
        } finally{
            setSending(false);
        }
    }
    // Build the options list for current channel
    const currentOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ComposerModal.useMemo[currentOptions]": ()=>{
            if (channel === "EMAIL") {
                // include email options
                return emailOptions.map({
                    "ComposerModal.useMemo[currentOptions]": (o)=>({
                            label: o.label,
                            value: JSON.stringify({
                                contactId: o.contactId,
                                value: o.value
                            })
                        })
                }["ComposerModal.useMemo[currentOptions]"]);
            } else {
                // SMS or WHATSAPP -> phones only
                return phoneOptions.map({
                    "ComposerModal.useMemo[currentOptions]": (o)=>({
                            label: o.label,
                            value: JSON.stringify({
                                contactId: o.contactId,
                                value: o.value
                            })
                        })
                }["ComposerModal.useMemo[currentOptions]"]);
            }
        }
    }["ComposerModal.useMemo[currentOptions]"], [
        channel,
        phoneOptions,
        emailOptions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-2xl w-full bg-white rounded-2xl p-6 shadow-lg z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Compose message"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "text-sm text-slate-500",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1463,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full rounded border px-3 py-2 mt-1",
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
                                                lineNumber: 1475,
                                                columnNumber: 15
                                            }, this),
                                            currentOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: [
                                                    "No verified recipients for ",
                                                    channel === "EMAIL" ? "email" : "phone/WhatsApp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1476,
                                                columnNumber: 46
                                            }, this) : currentOptions.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: opt.value,
                                                    children: opt.label
                                                }, i, false, {
                                                    fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 60
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: [
                                            "Choose a verified recipient. For ",
                                            channel === "EMAIL" ? "emails" : "phones/WhatsApp",
                                            ", only verified addresses are shown."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1483,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1467,
                                columnNumber: 11
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
                                                lineNumber: 1490,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full rounded border px-3 py-2 mt-1",
                                                value: channel,
                                                onChange: (e)=>setChannel(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SMS",
                                                        children: "SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1492,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "WHATSAPP",
                                                        children: "WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1493,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "EMAIL",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1494,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1491,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-slate-600",
                                                children: "Send"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1499,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full rounded border px-3 py-2 mt-1",
                                                value: sendMode,
                                                onChange: (e)=>setSendMode(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "now",
                                                        children: "Send now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1501,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "schedule",
                                                        children: "Schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                        lineNumber: 1502,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                                lineNumber: 1500,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1488,
                                columnNumber: 11
                            }, this),
                            sendMode === "schedule" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Send at"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "w-full rounded border px-3 py-2 mt-1",
                                        type: "datetime-local",
                                        value: sendAt ?? "",
                                        onChange: (e)=>setSendAt(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-400 mt-1",
                                        children: "Scheduled messages will be executed by the scheduler worker at the selected time."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1507,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1514,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "w-full rounded border px-3 py-2 mt-1",
                                        rows: 4,
                                        value: body,
                                        onChange: (e)=>setBody(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1515,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1513,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 rounded border",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSend,
                                        disabled: sending || !to || !body,
                                        className: "px-4 py-2 rounded bg-indigo-600 text-white",
                                        children: sending ? "Sending…" : sendMode === "now" ? "Send" : "Schedule"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                                lineNumber: 1518,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/welcome/page.tsx",
                        lineNumber: 1466,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/welcome/page.tsx",
        lineNumber: 1458,
        columnNumber: 10
    }, this);
}
_s2(ComposerModal, "5d8U+3uO8TOi+iSGIWEUJeOKv+0=");
_c6 = ComposerModal;
/* ----------------------------- YjsNotes (lightweight) ---------------------------- */ function YjsNotes(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
    }
    const { contactId, currentUser } = t0;
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const ydocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== contactId || $[2] !== currentUser?.id || $[3] !== currentUser?.name) {
        t1 = ({
            "YjsNotes[useEffect()]": ()=>{
                const wsUrl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_YJS_WS || "ws://localhost:1234";
                const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$yjs$2f$dist$2f$yjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doc"]();
                ydocRef.current = doc;
                const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$y$2d$websocket$2f$src$2f$y$2d$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebsocketProvider"](wsUrl, `contact-notes-${contactId}`, doc);
                providerRef.current = provider;
                const ytext = doc.getText("notes");
                setText(ytext.toString());
                const obs = {
                    "YjsNotes[useEffect() > obs]": ()=>setText(ytext.toString())
                }["YjsNotes[useEffect() > obs]"];
                ytext.observe(obs);
                provider.awareness.setLocalStateField("user", {
                    id: currentUser?.id,
                    name: currentUser?.name ?? "Unknown"
                });
                return ()=>{
                    ;
                    try {
                        ytext.unobserve(obs);
                    } catch (t2) {
                        const e = t2;
                    }
                    ;
                    try {
                        provider.disconnect();
                    } catch (t3) {
                        const e_0 = t3;
                    }
                    doc.destroy();
                };
            }
        })["YjsNotes[useEffect()]"];
        $[1] = contactId;
        $[2] = currentUser?.id;
        $[3] = currentUser?.name;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const t2 = currentUser?.id;
    const t3 = currentUser?.name;
    let t4;
    if ($[5] !== contactId || $[6] !== t2 || $[7] !== t3) {
        t4 = [
            contactId,
            t2,
            t3
        ];
        $[5] = contactId;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t4);
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = function onChangeLocal(e_1) {
            const doc_0 = ydocRef.current;
            if (!doc_0) {
                return;
            }
            const ytext_0 = doc_0.getText("notes");
            ytext_0.delete(0, ytext_0.length);
            ytext_0.insert(0, e_1.target.value);
            setText(e_1.target.value);
        };
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const onChangeLocal = t5;
    let t6;
    if ($[10] !== contactId) {
        t6 = async function saveSnapshotToDB() {
            const doc_1 = ydocRef.current;
            if (!doc_1) {
                return;
            }
            const ytext_1 = doc_1.getText("notes");
            const val = ytext_1.toString();
            ;
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
                alert("Saved note snapshot");
            } catch (t7) {
                const e_2 = t7;
                console.error(e_2);
                alert("Failed to save");
            }
        };
        $[10] = contactId;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const saveSnapshotToDB = t6;
    let t7;
    if ($[12] !== text) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: "w-full rounded border px-3 py-2 mt-1",
            rows: 6,
            value: text,
            onChange: onChangeLocal
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1654,
            columnNumber: 10
        }, this);
        $[12] = text;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== saveSnapshotToDB) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end mt-2 gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: saveSnapshotToDB,
                className: "px-3 py-1 rounded bg-slate-50",
                children: "Save snapshot"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/welcome/page.tsx",
                lineNumber: 1662,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1662,
            columnNumber: 10
        }, this);
        $[14] = saveSnapshotToDB;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t7 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1670,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
}
_s3(YjsNotes, "ZBPSSEf7wULZbBZp9/GcsCzDZsI=");
_c7 = YjsNotes;
/* ----------------------------- Sparkline ---------------------------- */ function Sparkline(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4913cac09710d92a1ba18c0a2e379dbf2d09b80039480ac0639a0d53f482851";
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
                lineNumber: 1724,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/welcome/page.tsx",
            lineNumber: 1724,
            columnNumber: 10
        }, this);
        $[9] = points;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c8 = Sparkline;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "WelcomePage");
__turbopack_context__.k.register(_c1, "FeatureCard");
__turbopack_context__.k.register(_c2, "ThreadsList");
__turbopack_context__.k.register(_c3, "IntegrationsPanel");
__turbopack_context__.k.register(_c4, "AnalyticsPanel");
__turbopack_context__.k.register(_c5, "ContactProfileModal");
__turbopack_context__.k.register(_c6, "ComposerModal");
__turbopack_context__.k.register(_c7, "YjsNotes");
__turbopack_context__.k.register(_c8, "Sparkline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_ca74e1f1._.js.map