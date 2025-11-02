// app/profile/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import EditProfileModal from "@/components/profile/EditProfile";
import Link from "next/link";

type User = {
  id: string;
  email: string;
  name?: string;
  role?: string;
  /* If you add a profile JSON column on User, we expect something like:
     profile?: {
       displayName?: string;
       gender?: string;
       country?: string;
       state?: string;
       language?: string;
       timezone?: string;
       avatarUrl?: string;
     }
  */
  profile?: any;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/api/me")
      .then((r) => r.json())
      .then((j) => {
        if (!mounted) return;
        setUser(j?.user ?? null);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  async function handleSave(updated: Partial<User & { profile?: any }>) {
    // optimistic update locally (will be replaced by server response if returned)
    setUser((prev) => (prev ? { ...prev, ...updated } : prev));

    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (!res.ok) {
        const txt = await res.text();
        console.error("Save failed:", txt);
        // revert? for now, refetch
        const r2 = await fetch("/api/me");
        const j2 = await r2.json();
        setUser(j2.user ?? null);
        return false;
      }

      const json = await res.json();
      // server may return the updated user; use it if present
      if (json?.user) setUser(json.user);
      return true;
    } catch (err) {
      console.error(err);
      // refetch on failure
      const r2 = await fetch("/api/me");
      const j2 = await r2.json();
      setUser(j2.user ?? null);
      return false;
    }
  }

  if (loading) return <div className="p-6">Loading...</div>;
  if (!user) return <div className="p-6">Not logged in</div>;

  const profile = user.profile ?? {};

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-slate-900 text-white rounded-2xl p-4">
            <h3 className="text-lg font-semibold mb-4">Profile</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Personal Information</li>
              <li className="text-slate-400">Email Address</li>
              <li className="text-slate-400">Mobile Numbers</li>
            </ul>
          </div>

          <nav className="mt-6 space-y-3">
            <Link className="block bg-white rounded-xl p-4 shadow border" href="/settings">
              Settings
            </Link>
            <Link className="block bg-white rounded-xl p-4 shadow border" href="/security">
              Security
            </Link>
          </nav>
        </aside>

        {/* Main column */}
        <main className="lg:col-span-9 space-y-6">
          {/* Profile header card */}
          <section className="bg-white rounded-2xl shadow border p-6">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  {/* avatar or initial */}
                  {profile?.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={profile.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-xl font-semibold text-slate-700">
                      {(user.name || user.email || "U").charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-semibold">{user.name ?? "—"}</h1>
                    <div className="text-sm text-slate-500"> {user.email} </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <div className="text-xs text-slate-400">Full Name</div>
                      <div className="mt-1">{user.name ?? "—"}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Display Name</div>
                      <div className="mt-1">{profile.displayName ?? user.name ?? "—"}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400">Gender</div>
                      <div className="mt-1">{profile.gender ?? "I'd prefer not to say"}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400">Country/Region</div>
                      <div className="mt-1">{profile.country ?? "—"}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400">State</div>
                      <div className="mt-1">{profile.state ?? "—"}</div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400">Language</div>
                      <div className="mt-1">{profile.language ?? "English"}</div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-xs text-slate-400">Time zone</div>
                      <div className="mt-1 text-sm text-slate-600">{profile.timezone ?? "(GMT +05:30) India Standard Time (Asia/Kolkata)"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <button
                  onClick={() => setEditOpen(true)}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-white shadow hover:opacity-95"
                >
                  Edit
                </button>
              </div>
            </div>
          </section>

          {/* My Email Addresses */}
          <section className="bg-white rounded-2xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-2">My Email Addresses</h2>
            <p className="text-sm text-slate-500 mb-4">View and manage the email addresses associated with your account. They can be used to sign in and to reset password if you ever forget it.</p>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">📧</div>
                  <div>
                    <div className="font-medium">{user.email}</div>
                    <div className="text-xs text-slate-400">primary • added 6 months ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-3 py-2 text-sm rounded bg-slate-50">Make primary</button>
                  <button className="px-3 py-2 text-sm text-blue-600">+ Add Email Address</button>
                </div>
              </div>
            </div>
          </section>

          {/* My Mobile Numbers */}
          <section className="bg-white rounded-2xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-2">My Mobile Numbers</h2>
            <p className="text-sm text-slate-500 mb-4">View and manage all of the mobile numbers associated with your account.</p>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">📞</div>
                  <div>
                    <div className="font-medium">+91 85977 86209</div>
                    <div className="text-xs text-slate-400">verified • added 6 months ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-3 py-2 text-sm rounded bg-slate-50">Verify</button>
                  <button className="px-3 py-2 text-sm text-blue-600">+ Add Mobile Number</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Edit modal */}
      <EditProfileModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        user={user}
        onSave={async (payload) => {
          const ok = await handleSave(payload);
          if (ok) setEditOpen(false);
        }}
      />
    </div>
  );
}
