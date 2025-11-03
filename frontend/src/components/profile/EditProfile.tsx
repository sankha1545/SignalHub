// components/profile/EditProfile.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

/**
 * NOTE: replace GEONAMES_USERNAME with your GeoNames username if you want live country/state lists.
 * If you don't want remote calls, you can remove the GeoNames fetch sections and hardcode countries.
 */
const GEONAMES_USERNAME = "sankha"; // <-- replace this with your username or leave for now

// 38 timezones (UTC offset - label).
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

type CountryEntry = {
  geonameId: number;
  countryName: string;
  countryCode: string;
};

type StateEntry = {
  geonameId: number;
  name: string;
};

type User = {
  id: string;
  email: string;
  name?: string | null;
  profile?: any;
};

type Props = {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (payload: Partial<User & { profile?: any }>) => Promise<boolean> | boolean;
};

const MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2 MB

export default function EditProfile({ open, onClose, user, onSave }: Props) {
  // saving flag
  const [saving, setSaving] = useState(false);

  // form fields
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [countryGeonameId, setCountryGeonameId] = useState<number | "">("");
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateGeonameId, setStateGeonameId] = useState<number | "">("");
  const [stateName, setStateName] = useState("");
  const [language, setLanguage] = useState("");
  const [timezone, setTimezone] = useState("");

  // avatar
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null); // data URL or external URL
  const [avatarFileSize, setAvatarFileSize] = useState<number | null>(null); // bytes
  const [avatarRemoved, setAvatarRemoved] = useState(false); // true when user clicked "Remove avatar"
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // lists + loading flags
  const [countries, setCountries] = useState<CountryEntry[]>([]);
  const [states, setStates] = useState<StateEntry[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);

  const primaryRef = useRef<HTMLButtonElement | null>(null);

  // initialize form values when user or open changes
  useEffect(() => {
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
  }, [user, open]);

  // load countries (sessionStorage cached)
  useEffect(() => {
    let mounted = true;
    async function loadCountries() {
      setLoadingCountries(true);
      try {
        const cached = sessionStorage.getItem("geonames_countries_v1");
        if (cached) {
          const parsed: CountryEntry[] = JSON.parse(cached);
          if (mounted) setCountries(parsed);
          setLoadingCountries(false);
          return;
        }

        if (!GEONAMES_USERNAME) {
          // user hasn't set username; skip remote fetch
          setCountries([]);
          setLoadingCountries(false);
          return;
        }

        const res = await fetch(`http://api.geonames.org/countryInfoJSON?username=${GEONAMES_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch countries from GeoNames");
        const json = await res.json();
        const list: CountryEntry[] = (json.geonames || []).map((c: any) => ({
          geonameId: c.geonameId,
          countryName: c.countryName,
          countryCode: c.countryCode
        }));
        sessionStorage.setItem("geonames_countries_v1", JSON.stringify(list));
        if (mounted) setCountries(list);
      } catch (err) {
        console.error("Error loading countries:", err);
        if (mounted) setCountries([]);
      } finally {
        if (mounted) setLoadingCountries(false);
      }
    }
    loadCountries();
    return () => { mounted = false; };
  }, []);

  // when countryGeonameId changes, load states/children and set country code/name
  useEffect(() => {
    let mounted = true;

    async function loadStates() {
      if (!countryGeonameId) {
        if (mounted) {
          setStates([]);
          setStateGeonameId("");
          setStateName("");
        }
        return;
      }

      setLoadingStates(true);
      setStates([]);
      try {
        if (!GEONAMES_USERNAME) {
          setStates([]);
          setLoadingStates(false);
          return;
        }

        const res = await fetch(`http://api.geonames.org/childrenJSON?geonameId=${countryGeonameId}&username=${GEONAMES_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch states from GeoNames");
        const json = await res.json();
        const st: StateEntry[] = (json.geonames || []).map((g: any) => ({
          geonameId: g.geonameId,
          name: g.name
        }));
        if (mounted) {
          setStates(st);
          setLoadingStates(false);
        }
      } catch (err) {
        console.error("Error loading states:", err);
        if (mounted) setLoadingStates(false);
      }
    }

    // update countryCode and countryName from countries list (if present)
    if (countryGeonameId) {
      const found = countries.find((c) => c.geonameId === countryGeonameId);
      if (found) {
        setCountryCode(found.countryCode);
        setCountryName(found.countryName);
      }
    } else {
      setCountryCode("");
      setCountryName("");
    }

    loadStates();
    return () => { mounted = false; };
  }, [countryGeonameId, countries]);

  // UX: lock scroll & focus save button when modal opens
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => primaryRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  // ESC to close modal
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // early exit: don't render anything if not open
  if (!open) return null;

  // ---------- Avatar helpers ----------
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    pickAvatarFile(file);
  }

  function pickAvatarFile(file: File) {
    // basic type check
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // size check
    if (file.size > MAX_AVATAR_BYTES) {
      alert("Avatar must be 2 MB or smaller.");
      return;
    }

    // read as data URL for preview and sending to server
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setAvatarPreview(dataUrl);
      setAvatarFileSize(file.size);
      setAvatarRemoved(false);
    };
    reader.onerror = (err) => {
      console.error("Failed to read avatar file:", err);
      alert("Failed to read the selected file.");
    };
    reader.readAsDataURL(file);
  }

  function triggerFilePicker() {
    fileInputRef.current?.click();
  }

  function removeAvatar() {
    setAvatarPreview(null);
    setAvatarFileSize(null);
    setAvatarRemoved(true);
    // also clear file input value so user can re-upload same file later
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // ---------- submit handler ----------
  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!user) return;
    if (!fullName || typeof fullName !== "string") {
      alert("Full name is required.");
      return;
    }

    setSaving(true);
    try {
      // build profile patch
      const profilePatch: any = {
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

      // avatar handling:
      // - if user removed avatar explicitly => send avatarBase64: null to signal removal
      // - if avatarPreview is a data URL => send avatarBase64 with that data URL
      if (avatarRemoved) {
        profilePatch.avatarBase64 = null;
        profilePatch.avatarUrl = null;
      } else if (avatarPreview && avatarPreview.startsWith("data:")) {
        // we already validated size when picked
        profilePatch.avatarBase64 = avatarPreview;
        profilePatch.avatarUrl = avatarPreview; // server may choose to use this or derive a URL
      }

      const payload: any = {
        name: fullName,
        profile: profilePatch
      };

      const ok = await onSave(payload);
      // onSave should return a boolean (true on success)
      if (!ok) {
        // leave modal open; onSave may show errors
      }
    } finally {
      setSaving(false);
    }
  }

  // ---------- JSX ----------
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-profile-title"
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl p-6 shadow-lg border"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="edit-profile-title" className="text-lg font-semibold">Edit profile</h3>
            <p className="text-sm text-slate-600 mt-1">Update your name, display name, timezone and country/state. Email is read-only.</p>
          </div>
          <div>
            <button onClick={onClose} className="text-slate-500 hover:text-slate-700" aria-label="Close">✕</button>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={submit}>
          <div className="flex items-start gap-6">
            {/* avatar column */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center border">
                  {avatarPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatarPreview} alt="avatar preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-3xl font-semibold text-slate-700">
                      {(user?.name || user?.email || "U").charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-2 -right-2 flex gap-1">
                  <button
                    type="button"
                    onClick={triggerFilePicker}
                    className="bg-white border rounded-full p-1 shadow hover:bg-slate-50"
                    title="Change avatar"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 5v14" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={removeAvatar}
                    className="bg-white border rounded-full p-1 shadow hover:bg-slate-50"
                    title="Remove avatar"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M6 6l12 12M6 18L18 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500 text-center">
                {avatarFileSize ? `${Math.round(avatarFileSize / 1024)} KB` : "Max 2 MB"}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="sr-only"
                aria-hidden
              />
            </div>

            {/* form fields */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-600 block">Full name</label>
                <input
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Display name</label>
                <input
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Email (read-only)</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2 bg-slate-50" value={user?.email ?? ""} readOnly />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Gender</label>
                <select className="mt-1 w-full rounded-lg border px-3 py-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Country/Region</label>
                <select
                  value={countryGeonameId || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCountryGeonameId(val ? Number(val) : "");
                    // clear state when country changes
                    setStateGeonameId("");
                    setStateName("");
                  }}
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                >
                  <option value="">Select Country</option>
                  {loadingCountries ? (
                    <option value="">Loading countries...</option>
                  ) : (
                    countries.map((c) => (
                      <option key={c.geonameId} value={c.geonameId}>
                        {c.countryName} ({c.countryCode})
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">State</label>
                <select
                  value={stateGeonameId || ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setStateGeonameId(val ? Number(val) : "");
                    const found = states.find((s) => s.geonameId === Number(val));
                    setStateName(found ? found.name : "");
                  }}
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                  disabled={!countryGeonameId || loadingStates || states.length === 0}
                >
                  <option value="">{countryGeonameId ? (loadingStates ? "Loading states..." : "Select State") : "Select Country First"}</option>
                  {states.map((s) => (
                    <option key={s.geonameId} value={s.geonameId}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Language</label>
                <input value={language} onChange={(e) => setLanguage(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>

              <div>
                <label className="text-xs text-slate-600 block">Time zone</label>
                <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option value="">Select timezone</option>
                  {TIMEZONES_38.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button
              ref={primaryRef}
              type="submit"
              disabled={saving}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
