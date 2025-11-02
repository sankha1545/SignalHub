// app/(authenticated)/layout.tsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/useUser";
import ProfileMenu from "@/components/profile/ProfileMenu";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // when finished loading, redirect to login if no user
    if (!loading && !user) {
      // prefer auth/login route used in your app
      router.replace("/auth/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <div className="animate-pulse mb-4 h-8 w-48 rounded bg-slate-200 mx-auto" />
          <p className="text-sm text-slate-500">Checking session…</p>
        </div>
      </div>
    );
  }

  const role = (user.role || "VIEWER").toString().toUpperCase();
  const isAdmin = role === "ADMIN";
  const isEditor = role === "EDITOR" || isAdmin;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r p-4">
        <div className="mb-6">
          <Link href="/inbox" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold">SignalHub</div>
              <div className="text-xs text-slate-500">Unified Inbox</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 flex flex-col gap-2 text-sm">
          <Link href="/inbox" className="px-2 py-2 rounded hover:bg-slate-50">Inbox</Link>
          <Link href="/analytics" className="px-2 py-2 rounded hover:bg-slate-50">Analytics</Link>
          {isEditor && <Link href="/scheduled" className="px-2 py-2 rounded hover:bg-slate-50">Scheduled</Link>}
          {isAdmin && <Link href="/admin" className="px-2 py-2 rounded hover:bg-slate-50">Admin</Link>}
        </nav>

        <div className="mt-auto">
          <Link href="/settings" className="block px-2 py-2 rounded hover:bg-slate-50 text-sm">Settings</Link>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top header */}
        <header className="w-full border-b bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                {/* Mobile sidebar toggle - if you plan to implement mobile drawer, you can hook this */}
                <button
                  aria-hidden
                  className="md:hidden p-2 rounded hover:bg-slate-100"
                  type="button"
                  onClick={() => {
                    /* add mobile sidebar toggle if desired */
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                {/* Breadcrumb / page title - optional */}
                <div className="hidden md:flex items-baseline gap-2">
                  <h2 className="text-lg font-semibold">
                    {isAdmin ? "Admin Dashboard" : isEditor ? "Inbox" : "Viewer Mode"}
                  </h2>
                  <span className="text-xs text-slate-400">/ workspace</span>
                </div>
              </div>

              {/* Right-side controls */}
              <div className="flex items-center gap-4">
                {/* small email/name (hidden on very small screens) */}
                <div className="hidden sm:flex sm:flex-col sm:items-end sm:text-right">
                  <span className="text-sm text-slate-700">{user.name ?? user.email}</span>
                  <span className="text-xs text-slate-500">{user.email}</span>
                </div>

                {/* role badge */}
                <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-xs">
                  <span className="font-semibold">{role}</span>
                </div>

                {/* Profile menu */}
                <ProfileMenu email={user.email} avatarUrl={undefined} />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
