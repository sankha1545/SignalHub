"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmModal from "../modals/ConfirmModal";

export default function ProfileMenu({ avatarUrl, email }: { avatarUrl?: string; email?: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleLogout() {
    try {
      setLoggingOut(true);
      const res = await fetch("/api/auth/logout", { method: "POST" });
      // ignore body; route clears cookie
      setConfirmOpen(false);
      setOpen(false);
      // redirect to login page
      router.replace("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
      setLoggingOut(false);
      setConfirmOpen(false);
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shadow-sm hover:opacity-95"
        title="Account menu"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <span className="text-sm font-medium text-slate-700">{(email || "U").charAt(0).toUpperCase()}</span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Profile"
          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border py-2 z-20"
        >
          <button
            role="menuitem"
            onClick={() => {
              setOpen(false);
              router.push("/profile");
            }}
            className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700"
          >
            View profile
          </button>

          <button
            role="menuitem"
            onClick={() => {
              setConfirmOpen(true);
            }}
            className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm text-slate-700"
          >
            Logout
          </button>
        </div>
      )}

      <ConfirmModal
        open={confirmOpen}
        title="Log out?"
        message="Do you want to logout?"
        confirmLabel={loggingOut ? "Logging out..." : "Yes, log out"}
        cancelLabel="Cancel"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={async () => {
          await handleLogout();
        }}
      />
    </div>
  );
}
