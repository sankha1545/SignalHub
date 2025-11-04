(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/profile/EditProfile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/profile/EditProfile.tsx
__turbopack_context__.s([
    "default",
    ()=>EditProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * NOTE: replace GEONAMES_USERNAME with your GeoNames username if you want live country/state lists.
 */ const GEONAMES_USERNAME = "sankha"; // <-- replace or leave
const TIMEZONES_38 = [
    "UTC-12:00 - Baker Island",
    "UTC-11:00 - Niue / American Samoa",
    "UTC-10:00 - Hawaii-Aleutian Standard Time",
    "UTC-09:00 - Alaska Standard Time",
    "UTC-08:00 - Pacific Standard Time",
    "UTC-07:00 - Mountain Standard Time",
    "UTC-06:00 - Central Standard Time",
    "UTC-05:00 - Eastern Standard Time",
    "UTC-04:00 - Atlantic Standard Time",
    "UTC-03:30 - Newfoundland Standard Time",
    "UTC-03:00 - Argentina / Brasilia",
    "UTC-02:00 - South Georgia Time",
    "UTC-01:00 - Azores",
    "UTC+00:00 - Greenwich Mean Time",
    "UTC+01:00 - Central European Time",
    "UTC+02:00 - Eastern European Time",
    "UTC+03:00 - Moscow / Arabia",
    "UTC+03:30 - Iran Standard Time",
    "UTC+04:00 - Azerbaijan / UAE",
    "UTC+04:30 - Afghanistan",
    "UTC+05:00 - Pakistan Standard Time",
    "UTC+05:30 - India Standard Time",
    "UTC+05:45 - Nepal Time",
    "UTC+06:00 - Bangladesh / Bhutan",
    "UTC+06:30 - Cocos / Myanmar",
    "UTC+07:00 - Indochina Time",
    "UTC+08:00 - China / Singapore",
    "UTC+09:00 - Japan / Korea",
    "UTC+09:30 - Australian Central Standard Time",
    "UTC+10:00 - Australian Eastern Standard Time",
    "UTC+10:30 - Lord Howe",
    "UTC+11:00 - Solomon Is. / New Caledonia",
    "UTC+12:00 - Fiji / New Zealand",
    "UTC+12:45 - Chatham Islands",
    "UTC+13:00 - Tonga / Phoenix Is.",
    "UTC+14:00 - Line Islands"
];
const MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB
const COOKIE_CANDIDATES = [
    "session",
    "token",
    "auth_token",
    "authToken",
    "auth"
];
function EditProfile({ open, onClose, user, onSave }) {
    _s();
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryGeonameId, setCountryGeonameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryName, setCountryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stateGeonameId, setStateGeonameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [stateName, setStateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timezone, setTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [avatarPreview, setAvatarPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarFileSize, setAvatarFileSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarRemoved, setAvatarRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCountries, setLoadingCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingStates, setLoadingStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const primaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // init form from user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfile.useEffect": ()=>{
            if (!user) return;
            setFullName(user.name ?? "");
            const p = user.profile ?? {};
            setDisplayName(p.displayName ?? "");
            setGender(p.gender ?? "");
            setCountryGeonameId(p.countryGeonameId ?? "");
            setCountryCode(p.countryCode ?? "");
            setCountryName(p.countryName ?? "");
            setStateGeonameId(p.stateGeonameId ?? "");
            setStateName(p.stateName ?? "");
            setLanguage(p.language ?? "");
            setTimezone(p.timezone ?? "");
            setAvatarPreview(p.avatarUrl ?? p.avatarBase64 ?? null);
            setAvatarFileSize(null);
            setAvatarRemoved(false);
            console.debug("[EditProfile] initialized form from user:", {
                id: user.id,
                name: user.name,
                profile: user.profile
            });
        }
    }["EditProfile.useEffect"], [
        user,
        open
    ]);
    // load countries (cached)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfile.useEffect": ()=>{
            let mounted = true;
            async function loadCountries() {
                setLoadingCountries(true);
                try {
                    const cached = sessionStorage.getItem("geonames_countries_v1");
                    if (cached) {
                        const parsed = JSON.parse(cached);
                        if (mounted) setCountries(parsed);
                        setLoadingCountries(false);
                        return;
                    }
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const res = await fetch(`http://api.geonames.org/countryInfoJSON?username=${GEONAMES_USERNAME}`);
                    if (!res.ok) throw new Error("Failed to fetch countries from GeoNames");
                    const json = await res.json();
                    const list = (json.geonames || []).map({
                        "EditProfile.useEffect.loadCountries.list": (c)=>({
                                geonameId: c.geonameId,
                                countryName: c.countryName,
                                countryCode: c.countryCode
                            })
                    }["EditProfile.useEffect.loadCountries.list"]);
                    sessionStorage.setItem("geonames_countries_v1", JSON.stringify(list));
                    if (mounted) setCountries(list);
                } catch (err) {
                    console.error("[EditProfile] Error loading countries:", err);
                    if (mounted) setCountries([]);
                } finally{
                    if (mounted) setLoadingCountries(false);
                }
            }
            loadCountries();
            return ({
                "EditProfile.useEffect": ()=>{
                    mounted = false;
                }
            })["EditProfile.useEffect"];
        }
    }["EditProfile.useEffect"], []);
    // load states when country changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfile.useEffect": ()=>{
            let mounted_0 = true;
            async function loadStates() {
                if (!countryGeonameId) {
                    if (mounted_0) {
                        setStates([]);
                        setStateGeonameId("");
                        setStateName("");
                    }
                    return;
                }
                setLoadingStates(true);
                setStates([]);
                try {
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const res_0 = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${countryGeonameId}&username=${GEONAMES_USERNAME}`);
                    if (!res_0.ok) throw new Error("Failed to fetch states from GeoNames");
                    const json_0 = await res_0.json();
                    const st = (json_0.geonames || []).map({
                        "EditProfile.useEffect.loadStates.st": (g)=>({
                                geonameId: g.geonameId,
                                name: g.name
                            })
                    }["EditProfile.useEffect.loadStates.st"]);
                    if (mounted_0) {
                        setStates(st);
                        setLoadingStates(false);
                    }
                } catch (err_0) {
                    console.error("[EditProfile] Error loading states:", err_0);
                    if (mounted_0) setLoadingStates(false);
                }
            }
            if (countryGeonameId) {
                const found = countries.find({
                    "EditProfile.useEffect.found": (c_0)=>c_0.geonameId === countryGeonameId
                }["EditProfile.useEffect.found"]);
                if (found) {
                    setCountryCode(found.countryCode);
                    setCountryName(found.countryName);
                }
            } else {
                setCountryCode("");
                setCountryName("");
            }
            loadStates();
            return ({
                "EditProfile.useEffect": ()=>{
                    mounted_0 = false;
                }
            })["EditProfile.useEffect"];
        }
    }["EditProfile.useEffect"], [
        countryGeonameId,
        countries
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfile.useEffect": ()=>{
            if (!open) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const t = setTimeout({
                "EditProfile.useEffect.t": ()=>primaryRef.current?.focus()
            }["EditProfile.useEffect.t"], 80);
            return ({
                "EditProfile.useEffect": ()=>{
                    document.body.style.overflow = prev;
                    clearTimeout(t);
                }
            })["EditProfile.useEffect"];
        }
    }["EditProfile.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfile.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") onClose();
            }
            if (open) window.addEventListener("keydown", onKey);
            return ({
                "EditProfile.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["EditProfile.useEffect"];
        }
    }["EditProfile.useEffect"], [
        open,
        onClose
    ]);
    if (!open) return null;
    // avatar helpers
    function handleFileChange(e_0) {
        const file = e_0.target.files?.[0];
        if (!file) return;
        pickAvatarFile(file);
    }
    function pickAvatarFile(file_0) {
        if (!file_0.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }
        if (file_0.size > MAX_AVATAR_BYTES) {
            alert("Avatar must be 2 MB or smaller.");
            return;
        }
        const reader = new FileReader();
        reader.onload = ()=>{
            const dataUrl = reader.result;
            setAvatarPreview(dataUrl);
            setAvatarFileSize(file_0.size);
            setAvatarRemoved(false);
            console.debug("[EditProfile] avatar picked, size:", file_0.size);
        };
        reader.onerror = (err_1)=>{
            console.error("[EditProfile] Failed to read avatar file:", err_1);
            alert("Failed to read the selected file.");
        };
        reader.readAsDataURL(file_0);
    }
    function triggerFilePicker() {
        fileInputRef.current?.click();
    }
    function removeAvatar() {
        setAvatarPreview(null);
        setAvatarFileSize(null);
        setAvatarRemoved(true);
        if (fileInputRef.current) fileInputRef.current.value = "";
        console.debug("[EditProfile] avatar removed by user");
    }
    // ---------- submit handler (with debug + robust fallback) ----------
    async function submit(e_1) {
        e_1?.preventDefault();
        if (!user) {
            console.warn("[EditProfile] submit called but user is null");
            return;
        }
        if (!fullName || typeof fullName !== "string") {
            alert("Full name is required.");
            return;
        }
        setSaving(true);
        try {
            const profilePatch = {
                displayName: displayName || undefined,
                gender: gender || undefined,
                countryGeonameId: countryGeonameId || null,
                countryCode: countryCode || null,
                countryName: countryName || null,
                stateGeonameId: stateGeonameId || null,
                stateName: stateName || null,
                language: language || undefined,
                timezone: timezone || undefined
            };
            if (avatarRemoved) {
                profilePatch.avatarBase64 = null;
                profilePatch.avatarUrl = null;
            } else if (avatarPreview && avatarPreview.startsWith("data:")) {
                profilePatch.avatarBase64 = avatarPreview;
                profilePatch.avatarUrl = avatarPreview;
            }
            const payload = {
                name: fullName,
                profile: profilePatch
            };
            console.debug("[EditProfile] submit payload:", payload);
            // Call parent onSave and capture result
            let okResult = false;
            try {
                const maybe = onSave(payload);
                okResult = typeof maybe === "boolean" ? maybe : await maybe;
                console.debug("[EditProfile] onSave returned:", okResult);
            } catch (err_3) {
                console.error("[EditProfile] onSave threw error:", err_3);
                okResult = false;
            }
            // If parent returned a truthy object (updated user), use it; if boolean true, proceed to fetch /api/me.
            let updatedUser = null;
            if (okResult && typeof okResult === "object") {
                updatedUser = okResult;
                console.debug("[EditProfile] using updated user returned by parent onSave");
            } else if (okResult === true) {
                // parent signalled success but didn't return user => fetch authoritative /api/me
                try {
                    const r = await fetch("/api/me", {
                        method: "GET",
                        credentials: "include",
                        cache: "no-store"
                    });
                    console.debug("[EditProfile] GET /api/me after save status:", r.status);
                    if (r.ok) {
                        const b = await r.json().catch(()=>null);
                        updatedUser = b?.user ?? null;
                        console.debug("[EditProfile] GET /api/me returned:", updatedUser);
                    } else {
                        console.warn("[EditProfile] GET /api/me after save returned non-ok:", r.status);
                    }
                } catch (err_4) {
                    console.error("[EditProfile] failed to fetch /api/me after save:", err_4);
                }
            } else {
                // Parent returned falsy value or failure — attempt direct PATCH as a fallback
                try {
                    console.debug("[EditProfile] parent onSave failed or returned falsy — trying direct PATCH to /api/me");
                    const r_0 = await fetch("/api/me", {
                        method: "PATCH",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify(payload)
                    });
                    console.debug("[EditProfile] direct PATCH /api/me status:", r_0.status);
                    if (r_0.ok) {
                        const b_0 = await r_0.json().catch(()=>null);
                        updatedUser = b_0?.user ?? null;
                        console.debug("[EditProfile] direct PATCH response body:", b_0);
                    } else {
                        const txt = await r_0.text().catch(()=>null);
                        console.warn("[EditProfile] direct PATCH returned non-ok:", r_0.status, txt);
                    }
                } catch (err_5) {
                    console.error("[EditProfile] direct PATCH failed:", err_5);
                }
            }
            // If we have updatedUser, dispatch event so app can update global state
            if (updatedUser) {
                try {
                    window.dispatchEvent(new CustomEvent("user:updated", {
                        detail: updatedUser
                    }));
                    console.debug("[EditProfile] dispatched user:updated event", updatedUser);
                } catch (e_2) {
                    console.error("[EditProfile] dispatch user:updated failed:", e_2);
                }
                // close modal
                onClose?.();
                return;
            }
            // Nothing worked — dispatch null detail and reload as last resort
            try {
                window.dispatchEvent(new CustomEvent("user:updated", {
                    detail: null
                }));
                console.debug("[EditProfile] dispatched user:updated null fallback");
            } catch (e_3) {
                console.debug("[EditProfile] dispatch fallback failed", e_3);
            }
            console.warn("[EditProfile] could not obtain updated user after save; reloading page as fallback");
            // Reload to show server-side updated state as a last resort
            window.location.reload();
        } catch (err_2) {
            console.error("[EditProfile] submit unexpected error:", err_2);
        } finally{
            setSaving(false);
        }
    }
    // end submit
    // ---------- JSX below ----------
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "edit-profile-title",
                className: "relative z-10 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-lg border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        id: "edit-profile-title",
                                        className: "text-lg font-semibold",
                                        children: "Edit profile"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-600 mt-1",
                                        children: "Update your name, display name, timezone and country/state. Email is read-only."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-slate-500 hover:text-slate-700",
                                    "aria-label": "Close",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-6 space-y-4",
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border",
                                                        children: avatarPreview ? // eslint-disable-next-line @next/next/no-img-element
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: avatarPreview,
                                                            alt: "avatar preview",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 17
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl font-semibold text-slate-700",
                                                            children: (user?.name || user?.email || "U").charAt(0).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 107
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-2 -right-2 flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: triggerFilePicker,
                                                                className: "bg-white border rounded-full p-1 shadow hover:bg-slate-50",
                                                                title: "Change avatar",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    "aria-hidden": true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12 5v14",
                                                                            stroke: "#0F172A",
                                                                            strokeWidth: "1.5",
                                                                            strokeLinecap: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                            lineNumber: 406,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M5 12h14",
                                                                            stroke: "#0F172A",
                                                                            strokeWidth: "1.5",
                                                                            strokeLinecap: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: removeAvatar,
                                                                className: "bg-white border rounded-full p-1 shadow hover:bg-slate-50",
                                                                title: "Remove avatar",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    "aria-hidden": true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 6l12 12M6 18L18 6",
                                                                        stroke: "#ef4444",
                                                                        strokeWidth: "1.5",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 text-center",
                                                children: avatarFileSize ? `${Math.round(avatarFileSize / 1024)} KB` : "Max 2 MB"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                onChange: handleFileChange,
                                                className: "sr-only",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 422,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        value: fullName,
                                                        onChange: (e_4)=>setFullName(e_4.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 426,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Display name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        value: displayName,
                                                        onChange: (e_5)=>setDisplayName(e_5.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Email (read-only)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2 bg-slate-50",
                                                        value: user?.email ?? "",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Gender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        value: gender,
                                                        onChange: (e_6)=>setGender(e_6.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Prefer not to say"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "female",
                                                                children: "Female"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "male",
                                                                children: "Male"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Country/Region"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: countryGeonameId || "",
                                                        onChange: (e_7)=>{
                                                            const val = e_7.target.value;
                                                            setCountryGeonameId(val ? Number(val) : "");
                                                            setStateGeonameId("");
                                                            setStateName("");
                                                        },
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Country"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 19
                                                            }, this),
                                                            loadingCountries ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Loading countries..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 39
                                                            }, this) : countries.map((c_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c_1.geonameId,
                                                                    children: [
                                                                        c_1.countryName,
                                                                        " (",
                                                                        c_1.countryCode,
                                                                        ")"
                                                                    ]
                                                                }, c_1.geonameId, true, {
                                                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 109
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 451,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "State"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: stateGeonameId || "",
                                                        onChange: (e_8)=>{
                                                            const val_0 = e_8.target.value;
                                                            setStateGeonameId(val_0 ? Number(val_0) : "");
                                                            const found_0 = states.find((s)=>s.geonameId === Number(val_0));
                                                            setStateName(found_0 ? found_0.name : "");
                                                        },
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        disabled: !countryGeonameId || loadingStates || states.length === 0,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: countryGeonameId ? loadingStates ? "Loading states..." : "Select State" : "Select Country First"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 19
                                                            }, this),
                                                            states.map((s_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s_0.geonameId,
                                                                    children: s_0.name
                                                                }, s_0.geonameId, false, {
                                                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 38
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Language"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: language,
                                                        onChange: (e_9)=>setLanguage(e_9.target.value),
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 481,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-slate-600 block",
                                                        children: "Time zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: timezone,
                                                        onChange: (e_10)=>setTimezone(e_10.target.value),
                                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select timezone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 19
                                                            }, this),
                                                            TIMEZONES_38.map((tz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: tz,
                                                                    children: tz
                                                                }, tz, false, {
                                                                    fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 43
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 rounded-lg border",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: primaryRef,
                                        type: "submit",
                                        disabled: saving,
                                        className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
                                        children: saving ? "Saving..." : "Save changes"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/profile/EditProfile.tsx",
        lineNumber: 378,
        columnNumber: 32
    }, this), document.body);
}
_s(EditProfile, "pHrgjxDoMkePSoa+3kKEOksGWDo=");
_c = EditProfile;
var _c;
__turbopack_context__.k.register(_c, "EditProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/frontend/src/components/profile/AddEmailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/profile/AddEmailModal.tsx
__turbopack_context__.s([
    "default",
    ()=>AddEmailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddEmailModal({ open, onClose, onAdd }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const primaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddEmailModal.useEffect": ()=>{
            if (!open) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const t = setTimeout({
                "AddEmailModal.useEffect.t": ()=>primaryRef.current?.focus()
            }["AddEmailModal.useEffect.t"], 80);
            return ({
                "AddEmailModal.useEffect": ()=>{
                    document.body.style.overflow = prev;
                    clearTimeout(t);
                }
            })["AddEmailModal.useEffect"];
        }
    }["AddEmailModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddEmailModal.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") onClose();
            }
            if (open) window.addEventListener("keydown", onKey);
            return ({
                "AddEmailModal.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["AddEmailModal.useEffect"];
        }
    }["AddEmailModal.useEffect"], [
        open,
        onClose
    ]);
    if (!open) return null;
    function validEmail(e_0) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e_0);
    }
    async function submit(e_1) {
        e_1?.preventDefault();
        if (!validEmail(email)) {
            alert("Enter a valid email address.");
            return;
        }
        setSaving(true);
        try {
            const ok = await onAdd(email);
            if (!ok) {
            // onAdd handles error messages
            }
        } finally{
            setSaving(false);
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Add an email address"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-slate-500 hover:text-slate-700",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-4 space-y-4",
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-slate-600 block",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "mt-1 w-full rounded-lg border px-3 py-2",
                                        value: email,
                                        onChange: (e_2)=>setEmail(e_2.target.value),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 rounded-lg border",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        ref: primaryRef,
                                        type: "submit",
                                        disabled: saving,
                                        className: "px-4 py-2 rounded-lg bg-blue-600 text-white",
                                        children: saving ? "Adding..." : "Add email"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/profile/AddEmailModal.tsx",
        lineNumber: 56,
        columnNumber: 32
    }, this), document.body);
}
_s(AddEmailModal, "fxYdiDkgnE1mq9J8ByYN2Lhxs4s=");
_c = AddEmailModal;
var _c;
__turbopack_context__.k.register(_c, "AddEmailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/profile/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$EditProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/profile/EditProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/profile/ProfileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$AddEmailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/profile/AddEmailModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DEFAULT_DIAL = "+1";
const DEFAULT_NATIONAL_LENGTH = 10;
const OTP_LEN = 4;
/** Format time relative with extended granularity:
 *  ... (kept as original)
 */ function formatRelativeExtended(iso) {
    if (!iso) return "—";
    const then = new Date(iso).getTime();
    if (isNaN(then)) return "—";
    const diffMs = Date.now() - then;
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks}w ago`;
    }
    if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months}mo ago`;
    }
    const years = Math.floor(diffDays / 365);
    return `${years}y ago`;
}
/** Small fallback table for national length where restcountries can't tell us */ const FALLBACK_LENGTH = {
    IN: 10,
    US: 10,
    CA: 10,
    GB: 10,
    AU: 9,
    SG: 8,
    BD: 10,
    NP: 10,
    PK: 10
};
/**
 * normalizeUser:
 * - maps server-returned profile.countryName / profile.stateName -> profile.country / profile.state
 * - ensures UI always reads from profile.country / profile.state
 */ function normalizeUser(user) {
    if (!user) return user;
    // allow userPatch shapes (some API responses return a minimal patch)
    const p = user.profile ?? user.userPatch?.profile ?? {} ?? {};
    const normalizedProfile = {
        // preserve whatever profile already had
        ...p,
        // normalize country / state names
        country: p.country ?? p.countryName ?? p.country_name ?? null,
        state: p.state ?? p.stateName ?? p.state_name ?? null,
        // phone fields: try many common locations
        phoneNumber: p.phoneNumber ?? p.phone ?? user.profile?.phoneNumber ?? user.phoneNumber ?? user.phone ?? user.userPatch?.profile?.phoneNumber ?? null ?? null,
        phoneVerified: p.phoneVerified ?? user.profile?.phoneVerified ?? user.phoneVerified ?? user.userPatch?.profile?.phoneVerified ?? false,
        phoneVerifiedAt: p.phoneVerifiedAt ?? user.profile?.phoneVerifiedAt ?? user.phoneVerifiedAt ?? user.userPatch?.profile?.phoneVerifiedAt ?? null,
        countryCode: p.countryCode ?? p.country_code ?? null
    };
    return {
        ...user,
        profile: normalizedProfile
    };
}
function ProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editOpen, setEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addEmailOpen, setAddEmailOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activity, setActivity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // phone verify modal state
    const [verifyOpen, setVerifyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // tick to refresh relative labels (every 30s)
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            const id = setInterval({
                "ProfilePage.useEffect.id": ()=>setTick({
                        "ProfilePage.useEffect.id": (s)=>s + 1
                    }["ProfilePage.useEffect.id"])
            }["ProfilePage.useEffect.id"], 30000);
            return ({
                "ProfilePage.useEffect": ()=>clearInterval(id)
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], []);
    // fetch /api/me on mount — include credentials so cookies are sent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            let mounted = true;
            const ac = new AbortController();
            async function load() {
                try {
                    const res = await fetch("/api/me", {
                        signal: ac.signal,
                        credentials: "include"
                    });
                    if (!res.ok) {
                        if (!mounted) return;
                        setUser(null);
                        setActivity(null);
                        return;
                    }
                    const json = await res.json();
                    if (!mounted) return;
                    // normalize so UI always has profile.country / profile.state
                    setUser(normalizeUser(json.user ?? null));
                    setActivity(json.activity ?? null);
                } catch (err) {
                    if (err?.name === "AbortError") return;
                    console.error("fetch /api/me error", err);
                    if (!mounted) return;
                    setUser(null);
                    setActivity(null);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "ProfilePage.useEffect": ()=>{
                    mounted = false;
                    ac.abort();
                }
            })["ProfilePage.useEffect"];
        }
    }["ProfilePage.useEffect"], []);
    // unified save handler used by EditProfileModal (and other callers)
    async function handleSave(updated) {
        const prev = user;
        // optimistic update: merge shallow
        setUser((prevU)=>prevU ? {
                ...prevU,
                ...updated
            } : prevU);
        try {
            const res_0 = await fetch("/api/me", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(updated)
            });
            if (!res_0.ok) {
                const txt = await res_0.text().catch(()=>"(no body)");
                console.error("Save failed:", txt);
                setUser(prev ?? null);
                alert("Save failed. See console for details.");
                return false;
            }
            const json_0 = await res_0.json().catch(()=>null);
            console.debug("PATCH response :", json_0);
            if (json_0?.user) {
                setUser(normalizeUser(json_0.user));
            } else if (json_0) {
                // merge partial response
                setUser((u)=>u ? {
                        ...u,
                        ...json_0
                    } : u);
            } else {
                setUser(prev ?? null);
            }
            if (json_0?.activity) setActivity(json_0.activity);
            return true;
        } catch (err_0) {
            console.error("handleSave error:", err_0);
            setUser(prev ?? null);
            alert("Save failed due to network/server error.");
            return false;
        }
    }
    // Add extra email (only one allowed)
    async function handleAddEmail(email) {
        if (!user) return false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Invalid email");
            return false;
        }
        const prev_0 = user;
        const updatedProfile = {
            ...user.profile ?? {},
            extraEmail: email
        };
        setUser({
            ...user,
            profile: updatedProfile
        });
        try {
            const res_1 = await fetch("/api/me", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    profile: updatedProfile
                })
            });
            if (!res_1.ok) {
                const txt_0 = await res_1.text().catch(()=>"(no body)");
                console.error("Add email failed:", txt_0);
                setUser(prev_0);
                alert("Failed to add email.");
                return false;
            }
            const json_1 = await res_1.json().catch(()=>null);
            if (json_1?.user) setUser(normalizeUser(json_1.user));
            if (json_1?.activity) setActivity(json_1.activity);
            setAddEmailOpen(false);
            return true;
        } catch (err_1) {
            console.error(err_1);
            setUser(prev_0);
            alert("Failed to add email (network).");
            return false;
        }
    }
    // Remove extra email (send explicit null so backend can remove the field)
    async function handleRemoveExtraEmail() {
        if (!user) return false;
        const prev_1 = user;
        const updatedProfile_0 = {
            ...user.profile ?? {},
            extraEmail: null
        };
        setUser({
            ...user,
            profile: updatedProfile_0
        });
        try {
            const res_2 = await fetch("/api/me", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    profile: updatedProfile_0
                })
            });
            if (!res_2.ok) {
                const txt_1 = await res_2.text().catch(()=>"(no body)");
                console.error("Remove email failed:", txt_1);
                setUser(prev_1);
                alert("Failed to remove email.");
                return false;
            }
            const json_2 = await res_2.json().catch(()=>null);
            if (json_2?.user) setUser(normalizeUser(json_2.user));
            if (json_2?.activity) setActivity(json_2.activity);
            return true;
        } catch (err_2) {
            console.error(err_2);
            setUser(prev_1);
            alert("Failed to remove email (network).");
            return false;
        }
    }
    // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
    // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
    // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
    async function applyUpdatedUserFromChild(updatedUser) {
        // Full user object -> replace
        if (updatedUser && updatedUser.id && updatedUser.email) {
            setUser(normalizeUser(updatedUser));
            if (updatedUser.activity) setActivity(updatedUser.activity);
            return;
        }
        // If minimal patch contains profile or userPatch.profile, merge into existing state
        const patchProfile = updatedUser?.profile ?? updatedUser?.userPatch?.profile ?? null;
        if (patchProfile && user) {
            const mergedProfile = {
                ...user.profile ?? {},
                ...patchProfile
            };
            const newUser = {
                ...user,
                profile: mergedProfile
            };
            setUser(normalizeUser(newUser));
            if (updatedUser?.activity) setActivity(updatedUser.activity);
            return;
        }
        // If updatedUser is null-ish or doesn't contain usable info, do canonical refetch
        try {
            const r = await fetch("/api/me", {
                credentials: "include",
                cache: "no-store"
            });
            if (!r.ok) return;
            const j = await r.json().catch(()=>null);
            if (j?.user) setUser(normalizeUser(j.user));
            if (j?.activity) setActivity(j.activity);
        } catch (err_3) {
            console.error("refetch after child update failed", err_3);
        }
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 360,
        columnNumber: 23
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: "Not logged in"
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 361,
        columnNumber: 21
    }, this);
    const profile = {
        ...user.profile ?? {},
        phoneNumber: user.profile?.phoneNumber ?? user.phoneNumber ?? null,
        phoneVerified: user.profile?.phoneVerified ?? user.phoneVerified ?? false,
        phoneVerifiedAt: user.profile?.phoneVerifiedAt ?? user.phoneVerifiedAt ?? null
    };
    const role = (user.role ?? "viewer").toString().toUpperCase();
    // compute updated label live (updates via tick)
    const lastUpdatedISO = user.updatedAt ?? profile?.updatedAt ?? null;
    const lastUpdatedLabel = formatRelativeExtended(lastUpdatedISO);
    const headerUpdatedLabel = lastUpdatedLabel === "just now" ? "Updated just now" : `Updated ${lastUpdatedLabel}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 6v12",
                                                    stroke: "white",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-slate-900",
                                                children: "Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500",
                                                children: "Manage your personal details and contact info"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 378,
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
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-600",
                                                children: "access"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$ProfileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        email: user.email,
                                        avatarUrl: profile?.avatarUrl
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center",
                                                        children: profile?.avatarUrl ? // eslint-disable-next-line @next/next/no-img-element
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: profile.avatarUrl,
                                                            alt: "avatar",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 17
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-3xl font-semibold text-slate-700",
                                                            children: (user.name || user.email || "U").charAt(0).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 103
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                className: "text-2xl font-bold text-slate-900",
                                                                                children: user.name ?? "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 415,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm text-slate-500",
                                                                                children: user.email
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 416,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-auto flex items-center gap-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setEditOpen(true),
                                                                            className: "px-4 py-2 rounded-lg bg-blue-700 text-white shadow hover:opacity-95",
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 419,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 text-xs text-slate-500",
                                                                children: [
                                                                    "Last profile update: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-slate-700",
                                                                        children: lastUpdatedLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Full Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: user.name ?? "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 434,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 432,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Display Name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 437,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: profile.displayName ?? user.name ?? "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 438,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Gender"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 442,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: profile.gender ?? "I'd prefer not to say"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 443,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Country/Region"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 447,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: profile.country ?? "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 448,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 446,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "State"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 452,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: profile.state ?? "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 453,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Language"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 457,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: profile.language ?? "English"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 458,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 456,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-slate-400",
                                                                                children: "Time zone"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 462,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 text-sm text-slate-600",
                                                                                children: profile.timezone ?? "(GMT +05:30) India Standard Time (Asia/Kolkata)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                                lineNumber: 463,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 461,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-slate-700 mb-2",
                                                        children: "About"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-600",
                                                        children: "Use this profile page to keep your contact details up to date. Your name, display name and timezone are used across the app for messaging and notifications."
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 bg-white rounded-3xl p-6 shadow border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-lg font-semibold mb-1",
                                                                children: "My Email Addresses"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500 mb-4",
                                                                children: "View and manage the email addresses associated with your account."
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-500",
                                                        children: headerUpdatedLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-lg p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600",
                                                                    children: "📧"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: user.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-slate-400",
                                                                            children: "primary • added on account creation"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                            lineNumber: 492,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: !profile?.extraEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-3 py-2 text-sm rounded bg-slate-50 text-blue-600",
                                                                onClick: ()=>setAddEmailOpen(true),
                                                                children: "+ Add Email Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 45
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm",
                                                                        children: profile.extraEmail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "px-3 py-2 text-sm rounded bg-red-50 text-red-600",
                                                                        onClick: ()=>void handleRemoveExtraEmail(),
                                                                        children: "Remove"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "mt-6 bg-white rounded-3xl p-6 shadow border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold mb-2",
                                                children: "My Mobile Numbers"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 mb-4",
                                                children: "View and manage the mobile numbers associated with your account."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-lg p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600",
                                                                    children: "📞"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: profile?.phoneNumber ?? "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                            lineNumber: 521,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `text-xs ${profile?.phoneVerified ? "text-green-600" : "text-slate-400"}`,
                                                                            children: profile?.phoneVerified ? `verified • ${profile.phoneVerifiedAt ? new Date(profile.phoneVerifiedAt).toLocaleString() : ""}` : "not verified"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                            lineNumber: 522,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: !profile?.phoneVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-3 py-2 text-sm rounded bg-blue-600 text-white",
                                                                onClick: ()=>setVerifyOpen(true),
                                                                children: "Verify number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 48
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "px-3 py-2 text-sm rounded bg-slate-50 text-slate-700",
                                                                onClick: ()=>setVerifyOpen(true),
                                                                children: "Manage"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "lg:col-span-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-slate-700",
                                                        children: "Profile Activity (30 days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500",
                                                        children: headerUpdatedLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold",
                                                                    children: activity ? activity.logins30d : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Logins (30d)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 552,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl font-bold",
                                                                    children: activity ? activity.changes30d : "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: "Profile changes (30d)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 548,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-4 shadow-sm border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-slate-700 mb-2",
                                                children: "Quick actions"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                        onClick: ()=>router.push("/inbox"),
                                                        children: "Open Inbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                        href: "/settings",
                                                        children: "Settings & Integrations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "text-left px-3 py-2 rounded-lg bg-slate-50",
                                                        href: "/security",
                                                        children: "Security"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-sm text-slate-500",
                                        children: "Built for the Attack Capital assignment — profile management UI."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$EditProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: editOpen,
                onClose: ()=>setEditOpen(false),
                user: user,
                onSave: async (payload)=>{
                    const ok = await handleSave(payload);
                    if (ok) setEditOpen(false);
                    return ok;
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$profile$2f$AddEmailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: addEmailOpen,
                onClose: ()=>setAddEmailOpen(false),
                onAdd: handleAddEmail
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this),
            verifyOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneVerifyModal, {
                initialProfile: profile,
                onClose: ()=>setVerifyOpen(false),
                onVerified: (updatedUser_0)=>{
                    applyUpdatedUserFromChild(updatedUser_0);
                    setVerifyOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 587,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 374,
        columnNumber: 10
    }, this);
}
_s(ProfilePage, "P6tdr+Mrkjd04ISU7xZ9orWX+uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfilePage;
/* -------------------------------------------------------------------------- */ /* Inline PhoneVerifyModal
   - client-side restcountries for dial codes (fallback to local table)
   - responsive layout (stack on narrow, inline on wide)
   - 6-digit OTP, paste support, focus management
   - expects /api/phone/send-otp and /api/phone/verify-otp endpoints
/* -------------------------------------------------------------------------- */ /* -------------------------------------------------------------------------- */ /* Inline PhoneVerifyModal
   - client-side restcountries for dial codes (fallback to local table)
   - responsive layout (stack on narrow, inline on wide)
   - 4-digit OTP, paste support, focus management
   - expects /api/phone/send-otp and /api/phone/verify-otp endpoints
/* -------------------------------------------------------------------------- */ function PhoneVerifyModal({ initialProfile, onClose, onVerified }) {
    _s1();
    const [countries, setCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCountries, setLoadingCountries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [countriesError, setCountriesError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const initialCca2 = (initialProfile?.countryCode ?? "IN").toUpperCase() ?? "IN";
    const [countryCca2, setCountryCca2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCca2);
    const [dialCode, setDialCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_DIAL);
    const [digitCount, setDigitCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_LENGTH[initialCca2] ?? DEFAULT_NATIONAL_LENGTH);
    // digits local state => ensure it resizes when digitCount changes
    const [digits, setDigits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PhoneVerifyModal.useState": ()=>Array(digitCount).fill("")
    }["PhoneVerifyModal.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneVerifyModal.useEffect": ()=>{
            setDigits({
                "PhoneVerifyModal.useEffect": (prev)=>{
                    const next = Array(digitCount).fill("");
                    for(let i = 0; i < Math.min(prev.length, next.length); i++)next[i] = prev[i];
                    return next;
                }
            }["PhoneVerifyModal.useEffect"]);
        }
    }["PhoneVerifyModal.useEffect"], [
        digitCount
    ]);
    const digitInputsRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef([]);
    // store e164 phone used for verification
    const [phoneE164, setPhoneE164] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProfile?.phoneNumber ?? null);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpExpiry, setOtpExpiry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otpDigits, setOtpDigits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PhoneVerifyModal.useState": ()=>Array(OTP_LEN).fill("")
    }["PhoneVerifyModal.useState"]);
    const otpInputsRef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef([]);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifying, setVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // load countries (restcountries). lightweight fields
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneVerifyModal.useEffect": ()=>{
            let cancelled = false;
            setLoadingCountries(true);
            setCountriesError(null);
            ({
                "PhoneVerifyModal.useEffect": async ()=>{
                    try {
                        const res = await fetch("https://restcountries.com/v3.1/all?fields=cca2,name,idd");
                        if (!res.ok) throw new Error("Failed to load countries");
                        const arr = await res.json();
                        if (cancelled) return;
                        const list = arr.map({
                            "PhoneVerifyModal.useEffect.list": (c)=>{
                                const cca2 = (c.cca2 || "").toString().toUpperCase();
                                const name = c.name && (c.name.common || c.name.official) || cca2;
                                let dial = undefined;
                                try {
                                    const idd = c.idd || {};
                                    const root = idd.root ?? "";
                                    const suffixes = idd.suffixes ?? [];
                                    if (root) {
                                        dial = suffixes && suffixes.length > 0 && suffixes[0] ? `${root}${suffixes[0]}` : root;
                                    }
                                } catch (e) {
                                    dial = undefined;
                                }
                                return {
                                    cca2,
                                    name,
                                    dial
                                };
                            }
                        }["PhoneVerifyModal.useEffect.list"]).filter(Boolean).sort({
                            "PhoneVerifyModal.useEffect.list": (a, b)=>a.name.localeCompare(b.name)
                        }["PhoneVerifyModal.useEffect.list"]);
                        setCountries(list);
                    } catch (err) {
                        console.error("load countries error:", err);
                        setCountriesError("Failed to load countries");
                    } finally{
                        if (!cancelled) setLoadingCountries(false);
                    }
                }
            })["PhoneVerifyModal.useEffect"]();
            return ({
                "PhoneVerifyModal.useEffect": ()=>{
                    cancelled = true;
                }
            })["PhoneVerifyModal.useEffect"];
        }
    }["PhoneVerifyModal.useEffect"], []);
    // when countries list or selected country changes, update dial and digitCount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneVerifyModal.useEffect": ()=>{
            const info = countries.find({
                "PhoneVerifyModal.useEffect.info": (c_0)=>c_0.cca2 === countryCca2
            }["PhoneVerifyModal.useEffect.info"]);
            if (info && info.dial) setDialCode(info.dial);
            else setDialCode(DEFAULT_DIAL);
            const len = FALLBACK_LENGTH[countryCca2] ?? DEFAULT_NATIONAL_LENGTH;
            setDigitCount(len);
        }
    }["PhoneVerifyModal.useEffect"], [
        countryCca2,
        countries
    ]);
    // focus management & ESC to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneVerifyModal.useEffect": ()=>{
            const t = setTimeout({
                "PhoneVerifyModal.useEffect.t": ()=>digitInputsRef.current[0]?.focus()
            }["PhoneVerifyModal.useEffect.t"], 80);
            function onKey(e_0) {
                if (e_0.key === "Escape") onClose();
            }
            window.addEventListener("keydown", onKey);
            return ({
                "PhoneVerifyModal.useEffect": ()=>{
                    clearTimeout(t);
                    window.removeEventListener("keydown", onKey);
                }
            })["PhoneVerifyModal.useEffect"];
        }
    }["PhoneVerifyModal.useEffect"], [
        onClose
    ]);
    const onlyDigits = (s)=>s.replace(/\D/g, "");
    const setLocalDigit = (i_0, val)=>{
        const d = onlyDigits(val).slice(0, 1);
        setDigits((prev_0)=>{
            const next_0 = prev_0.slice();
            next_0[i_0] = d;
            return next_0;
        });
        if (d && i_0 < digitCount - 1) digitInputsRef.current[i_0 + 1]?.focus();
    };
    const onDigitKey = (i_1, e_1)=>{
        if (e_1.key === "Backspace" && digits[i_1] === "" && i_1 > 0) digitInputsRef.current[i_1 - 1]?.focus();
    };
    const localNumber = digits.join("");
    const localComplete = localNumber.length === digitCount;
    // OTP handlers
    const onOtpChange = (i_2, v)=>{
        const d_0 = onlyDigits(v).slice(0, 1);
        setOtpDigits((prev_1)=>{
            const next_1 = prev_1.slice();
            next_1[i_2] = d_0;
            return next_1;
        });
        if (d_0 && i_2 < OTP_LEN - 1) otpInputsRef.current[i_2 + 1]?.focus();
    };
    const onOtpKey = (i_3, e_2)=>{
        if (e_2.key === "Backspace" && otpDigits[i_3] === "" && i_3 > 0) otpInputsRef.current[i_3 - 1]?.focus();
        if (e_2.key === "Enter") tryVerifyOtp();
    };
    const otpValue = otpDigits.join("");
    async function sendOtp() {
        if (!localComplete) {
            setMessage({
                text: `Enter ${digitCount} digits`,
                ok: false
            });
            return;
        }
        const e164 = `${dialCode}${localNumber}`;
        // persist e164 so tryVerifyOtp can reference it
        setPhoneE164(e164);
        setSending(true);
        setMessage(null);
        try {
            const res_0 = await fetch("/api/phone/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    phone: e164,
                    otpLen: OTP_LEN
                })
            });
            const json = await res_0.json().catch(()=>null);
            console.debug("[PhoneVerifyModal] send-otp response:", res_0.status, json);
            if (!res_0.ok || json?.error) {
                setMessage({
                    text: json?.error || "Failed to send OTP",
                    ok: false
                });
                setOtpSent(false);
            } else {
                setMessage({
                    text: "OTP sent — check your phone (or console in dev)",
                    ok: true
                });
                setOtpSent(true);
                setOtpExpiry(Date.now() + 5 * 60 * 1000);
                setTimeout(()=>otpInputsRef.current[0]?.focus(), 120);
            }
        } catch (err_0) {
            console.error(err_0);
            setMessage({
                text: "Network error sending OTP",
                ok: false
            });
            setOtpSent(false);
        } finally{
            setSending(false);
        }
    }
    async function tryVerifyOtp() {
        if (!phoneE164) {
            setMessage({
                text: "Send OTP first",
                ok: false
            });
            return;
        }
        const otpValueLocal = otpDigits.join("");
        if (otpValueLocal.length !== OTP_LEN) {
            setMessage({
                text: `Enter ${OTP_LEN}-digit code`,
                ok: false
            });
            return;
        }
        setVerifying(true);
        setMessage(null);
        const payload = {
            phone: phoneE164,
            otp: otpValueLocal
        };
        console.debug("[PhoneVerifyModal] verify payload:", payload);
        try {
            const res_1 = await fetch("/api/phone/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });
            let body = null;
            try {
                body = await res_1.json().catch(()=>null);
            } catch (e_3) {
                body = null;
            }
            console.debug("[PhoneVerifyModal] verify response status:", res_1.status, "body:", body);
            if (!res_1.ok) {
                const errMsg = body && (body.error || body.message) || await res_1.text().catch(()=>null) || `HTTP ${res_1.status}`;
                setMessage({
                    text: errMsg,
                    ok: false
                });
                setOtpDigits(Array(OTP_LEN).fill(""));
                otpInputsRef.current[0]?.focus();
                return;
            }
            // success
            setMessage({
                text: "Phone number verified",
                ok: true
            });
            setOtpSent(false);
            setOtpDigits(Array(OTP_LEN).fill(""));
            if (body && (body.user || body.userPatch)) {
                try {
                    onVerified(body.user ?? body.userPatch);
                } catch (e_4) {
                    console.warn("[PhoneVerifyModal] onVerified threw:", e_4);
                }
            } else {
                // fallback: try re-fetch /api/me and call onVerified with the new user (or null)
                try {
                    const r = await fetch("/api/me", {
                        credentials: "include",
                        cache: "no-store"
                    });
                    if (r.ok) {
                        const j = await r.json().catch(()=>null);
                        onVerified(j?.user ?? null);
                    } else {
                        onVerified(null);
                    }
                } catch (err_2) {
                    console.error("[PhoneVerifyModal] fallback fetch /api/me failed:", err_2);
                    onVerified(null);
                }
            }
        } catch (err_1) {
            console.error("[PhoneVerifyModal] verify network error:", err_1);
            setMessage({
                text: "Network error verifying OTP",
                ok: false
            });
        } finally{
            setVerifying(false);
        }
    }
    function resetOtp() {
        setOtpSent(false);
        setOtpDigits(Array(OTP_LEN).fill(""));
        setOtpExpiry(null);
        setMessage(null);
        setTimeout(()=>digitInputsRef.current[0]?.focus(), 80);
    }
    function handlePasteNumber(e_5) {
        const text = e_5.clipboardData.getData("Text");
        const only = onlyDigits(text).slice(0, digitCount);
        if (only.length === digitCount) {
            setDigits(only.split(""));
            setTimeout(()=>sendOtp(), 80);
        }
    }
    const digitBoxClass = "w-9 sm:w-10 md:w-12 h-10 rounded border text-center";
    const otpBoxClass = "w-9 sm:w-10 md:w-12 h-10 rounded border text-center";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40",
                onClick: onClose,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 912,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-lg border ring-1 ring-slate-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 p-5 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: "Verify phone number"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 mt-1",
                                        children: [
                                            "Select country (dial code derived automatically), enter your phone and verify with a ",
                                            OTP_LEN,
                                            "-digit code."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 917,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Close",
                                    onClick: onClose,
                                    className: "rounded-md p-2 text-slate-600 hover:bg-slate-100",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                    lineNumber: 920,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 919,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "sr-only",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 928,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: countryCca2,
                                                onChange: (e_6)=>setCountryCca2(e_6.target.value),
                                                className: "w-full rounded border px-3 py-2 text-sm",
                                                children: loadingCountries ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Loading countries..."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 37
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        countries.map((c_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c_1.cca2,
                                                                children: [
                                                                    c_1.name,
                                                                    " ",
                                                                    c_1.dial ? `(${c_1.dial})` : ""
                                                                ]
                                                            }, c_1.cca2, true, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 43
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "OTHER",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 929,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 927,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-3 py-2 rounded border bg-slate-50 text-sm font-medium",
                                                        children: dialCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onPaste: handlePasteNumber,
                                                        className: "flex gap-1 flex-wrap",
                                                        style: {
                                                            maxWidth: "36ch"
                                                        },
                                                        children: Array.from({
                                                            length: digitCount
                                                        }).map((_, i_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: (el)=>digitInputsRef.current[i_4] = el,
                                                                inputMode: "numeric",
                                                                maxLength: 1,
                                                                value: digits[i_4] ?? "",
                                                                onChange: (e_7)=>setLocalDigit(i_4, e_7.target.value),
                                                                onKeyDown: (e_8)=>onDigitKey(i_4, e_8),
                                                                className: `${digitBoxClass}`,
                                                                "aria-label": `phone-digit-${i_4 + 1}`,
                                                                style: {
                                                                    textAlign: "center"
                                                                }
                                                            }, i_4, false, {
                                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                                lineNumber: 948,
                                                                columnNumber: 36
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-auto",
                                                children: !otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>sendOtp(),
                                                    disabled: !localComplete || sending,
                                                    className: `px-3 py-2 rounded ${localComplete ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`,
                                                    children: sending ? "Sending..." : "Send OTP"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 29
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>resetOtp(),
                                                    className: "px-3 py-2 rounded bg-slate-50 text-slate-700",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 31
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 954,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 926,
                                columnNumber: 11
                            }, this),
                            otpSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 flex-wrap",
                                        children: Array.from({
                                            length: OTP_LEN
                                        }).map((__0, i_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: (el_0)=>otpInputsRef.current[i_5] = el_0,
                                                inputMode: "numeric",
                                                maxLength: 1,
                                                value: otpDigits[i_5] ?? "",
                                                onChange: (e_9)=>onOtpChange(i_5, e_9.target.value),
                                                onKeyDown: (e_10)=>onOtpKey(i_5, e_10),
                                                className: `${otpBoxClass}`,
                                                "aria-label": `otp-${i_5 + 1}`
                                            }, i_5, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 967,
                                                columnNumber: 34
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 964,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>tryVerifyOtp(),
                                                disabled: verifying,
                                                className: "px-3 py-2 rounded bg-green-600 text-white",
                                                children: verifying ? "Verifying..." : "Verify OTP"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 971,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-500",
                                                children: otpExpiry ? `Expires in ${Math.max(0, Math.ceil((otpExpiry - Date.now()) / 1000))}s` : ""
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                                lineNumber: 974,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                                        lineNumber: 970,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 963,
                                columnNumber: 23
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm ${message.ok ? "text-green-600" : "text-rose-600"}`,
                                children: message.text
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 978,
                                columnNumber: 23
                            }, this),
                            countriesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-600",
                                children: countriesError
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 979,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3 pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 rounded-lg border",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/profile/page.tsx",
                                    lineNumber: 982,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/profile/page.tsx",
                                lineNumber: 981,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/profile/page.tsx",
                        lineNumber: 924,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/profile/page.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/profile/page.tsx",
        lineNumber: 911,
        columnNumber: 10
    }, this);
}
_s1(PhoneVerifyModal, "/KElMCY4IeHpEySesmoLVH9OcOI=");
_c1 = PhoneVerifyModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfilePage");
__turbopack_context__.k.register(_c1, "PhoneVerifyModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_f3bc12b7._.js.map