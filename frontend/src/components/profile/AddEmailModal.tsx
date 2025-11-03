// components/profile/AddEmailModal.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (email: string) => Promise<boolean> | boolean;
};

export default function AddEmailModal({ open, onClose, onAdd }: Props) {
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const primaryRef = useRef<HTMLButtonElement | null>(null);

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function validEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
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
    } finally {
      setSaving(false);
    }
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Add an email address</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">✕</button>
        </div>

        <form className="mt-4 space-y-4" onSubmit={submit}>
          <div>
            <label className="text-xs text-slate-600 block">Email</label>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Cancel</button>
            <button ref={primaryRef} type="submit" disabled={saving} className="px-4 py-2 rounded-lg bg-blue-600 text-white">
              {saving ? "Adding..." : "Add email"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
