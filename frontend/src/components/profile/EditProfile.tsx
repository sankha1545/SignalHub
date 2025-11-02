// components/EditProfileModal.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type User = {
  id: string;
  email: string;
  name?: string;
  profile?: any;
};

type Props = {
  open: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (payload: Partial<User & { profile?: any }>) => Promise<void> | void;
};

/**
 * Modal form for editing profile. Email is displayed but non-editable.
 * The component is reusable and purely client-side.
 */
export default function EditProfileModal({ open, onClose, user, onSave }: Props) {
  const [saving, setSaving] = useState(false);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [language, setLanguage] = useState("");
  const [timezone, setTimezone] = useState("");
  const primaryRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!user) return;
    setFullName(user.name ?? "");
    const p = user.profile ?? {};
    setDisplayName(p.displayName ?? "");
    setGender(p.gender ?? "");
    setCountry(p.country ?? "");
    setStateVal(p.state ?? "");
    setLanguage(p.language ?? "");
    setTimezone(p.timezone ?? "");
  }, [user, open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus primary button a bit later
    setTimeout(() => primaryRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!user) return;
    setSaving(true);
    try {
      const payload = {
        name: fullName,
        profile: {
          displayName,
          gender,
          country,
          state: stateVal,
          language,
          timezone,
        },
      };
      await onSave(payload);
    } finally {
      setSaving(false);
    }
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Edit profile</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>

        <form className="mt-4 space-y-4" onSubmit={submit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-600">Full name</label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-xs text-slate-600">Display name</label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-slate-600">Email (read-only)</label>
              <input
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-slate-50"
                value={user?.email ?? ""}
                readOnly
              />
            </div>

            <div>
              <label className="text-xs text-slate-600">Gender</label>
              <select className="mt-1 w-full rounded-lg border px-3 py-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-600">Country/Region</label>
              <input value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>

            <div>
              <label className="text-xs text-slate-600">State</label>
              <input value={stateVal} onChange={(e) => setStateVal(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>

            <div>
              <label className="text-xs text-slate-600">Language</label>
              <input value={language} onChange={(e) => setLanguage(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>

            <div>
              <label className="text-xs text-slate-600">Time zone</label>
              <input value={timezone} onChange={(e) => setTimezone(e.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">
              Cancel
            </button>
            <button
              ref={primaryRef}
              type="submit"
              disabled={saving}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
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
