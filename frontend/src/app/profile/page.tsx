// app/profile/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EditProfileModal from "@/components/profile/EditProfile";
import ProfileMenu from "@/components/profile/ProfileMenu";
import AddEmailModal from "@/components/profile/AddEmailModal";

/**
 * Profile page (Next.js client component)
 *
 * Notes:
 * - Inline PhoneVerifyModal defined at bottom of file for convenience.
 * - Server endpoints expected:
 *    GET  /api/me           -> { user, activity? }
 *    PATCH /api/me          -> accepts partial { profile, name, ... } and returns { user, activity? }
 *    POST  /api/phone/send-otp  -> { ok: true } or { error }
 *    POST  /api/phone/verify-otp-> { ok: true, user? } or { error }
 */

type Profile = {
  displayName?: string;
  gender?: string;
  country?: string;
  state?: string;
  language?: string;
  timezone?: string;
  avatarUrl?: string;
  avatarBase64?: string;
  extraEmail?: string | null;
  phoneNumber?: string | null;
  phoneVerified?: boolean;
  phoneVerifiedAt?: string | null;
  countryCode?: string | null; // ISO alpha-2
  // possible server names:
  countryName?: string | null;
  stateName?: string | null;
  countryGeonameId?: number | null;
  stateGeonameId?: number | null;
};

type User = {
  id: string;
  email: string;
  name?: string;
  role?: string;
  profile?: Profile | any;
  updatedAt?: string; // ISO timestamp
};

const DEFAULT_DIAL = "+1";
const DEFAULT_NATIONAL_LENGTH = 10;
const OTP_LEN = 4;

/** Format time relative with extended granularity:
 *  ... (kept as original)
 */
function formatRelativeExtended(iso?: string | null) {
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

/** Small fallback table for national length where restcountries can't tell us */
const FALLBACK_LENGTH: Record<string, number> = {
  IN: 10,
  US: 10,
  CA: 10,
  GB: 10,
  AU: 9,
  SG: 8,
  BD: 10,
  NP: 10,
  PK: 10,
};

/**
 * normalizeUser:
 * - maps server-returned profile.countryName / profile.stateName -> profile.country / profile.state
 * - ensures UI always reads from profile.country / profile.state
 */
function normalizeUser(user: any): any {
  if (!user) return user;

  // allow userPatch shapes (some API responses return a minimal patch)
  const p = user.profile ?? (user.userPatch?.profile ?? {}) ?? {};

  const normalizedProfile = {
    // preserve whatever profile already had
    ...p,

    // normalize country / state names
    country: p.country ?? p.countryName ?? p.country_name ?? null,
    state: p.state ?? p.stateName ?? p.state_name ?? null,

    // phone fields: try many common locations
    phoneNumber:
      p.phoneNumber ??
      p.phone ??
      user.profile?.phoneNumber ??
      user.phoneNumber ??
      user.phone ??
      (user.userPatch?.profile?.phoneNumber ?? null) ??
      null,

    phoneVerified:
      p.phoneVerified ??
      user.profile?.phoneVerified ??
      user.phoneVerified ??
      (user.userPatch?.profile?.phoneVerified ?? false),

    phoneVerifiedAt:
      p.phoneVerifiedAt ??
      user.profile?.phoneVerifiedAt ??
      user.phoneVerifiedAt ??
      (user.userPatch?.profile?.phoneVerifiedAt ?? null),

    countryCode: p.countryCode ?? p.country_code ?? null,
  };

  return { ...user, profile: normalizedProfile };
}




export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [addEmailOpen, setAddEmailOpen] = useState(false);
  const [activity, setActivity] = useState<{ logins30d: number; changes30d: number } | null>(null);

  // phone verify modal state
  const [verifyOpen, setVerifyOpen] = useState(false);

  // tick to refresh relative labels (every 30s)
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((s) => s + 1), 30000);
    return () => clearInterval(id);
  }, []);

  // fetch /api/me on mount — include credentials so cookies are sent
  useEffect(() => {
    let mounted = true;
    const ac = new AbortController();

    async function load() {
      try {
        const res = await fetch("/api/me", { signal: ac.signal, credentials: "include" });
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
      } catch (err: any) {
        if (err?.name === "AbortError") return;
        console.error("fetch /api/me error", err);
        if (!mounted) return;
        setUser(null);
        setActivity(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
      ac.abort();
    };
  }, []);

  // unified save handler used by EditProfileModal (and other callers)
  async function handleSave(updated: Partial<User & { profile?: any }>) {
    const prev = user;
    // optimistic update: merge shallow
    setUser((prevU) => (prevU ? { ...prevU, ...updated } : prevU));

    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updated),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "(no body)");
        console.error("Save failed:", txt);
        setUser(prev ?? null);
        alert("Save failed. See console for details.");
        return false;
      }

      const json = await res.json().catch(() => null);
      console.debug("PATCH response :", json);
      if (json?.user) {
        setUser(normalizeUser(json.user));
      } else if (json) {
        // merge partial response
        setUser((u) => (u ? { ...u, ...json } : u));
      } else {
        setUser(prev ?? null);
      }

      if (json?.activity) setActivity(json.activity);
      return true;
    } catch (err) {
      console.error("handleSave error:", err);
      setUser(prev ?? null);
      alert("Save failed due to network/server error.");
      return false;
    }
  }

  // Add extra email (only one allowed)
  async function handleAddEmail(email: string) {
    if (!user) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email");
      return false;
    }
    const prev = user;
    const updatedProfile = { ...(user.profile ?? {}), extraEmail: email };
    setUser({ ...user, profile: updatedProfile });

    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ profile: updatedProfile }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "(no body)");
        console.error("Add email failed:", txt);
        setUser(prev);
        alert("Failed to add email.");
        return false;
      }
      const json = await res.json().catch(() => null);
      if (json?.user) setUser(normalizeUser(json.user));
      if (json?.activity) setActivity(json.activity);
      setAddEmailOpen(false);
      return true;
    } catch (err) {
      console.error(err);
      setUser(prev);
      alert("Failed to add email (network).");
      return false;
    }
  }

  // Remove extra email (send explicit null so backend can remove the field)
  async function handleRemoveExtraEmail() {
    if (!user) return false;
    const prev = user;
    const updatedProfile = { ...(user.profile ?? {}), extraEmail: null };
    setUser({ ...user, profile: updatedProfile });

    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ profile: updatedProfile }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "(no body)");
        console.error("Remove email failed:", txt);
        setUser(prev);
        alert("Failed to remove email.");
        return false;
      }
      const json = await res.json().catch(() => null);
      if (json?.user) setUser(normalizeUser(json.user));
      if (json?.activity) setActivity(json.activity);
      return true;
    } catch (err) {
      console.error(err);
      setUser(prev);
      alert("Failed to remove email (network).");
      return false;
    }
  }

  // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
   // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
 // When child modal returns an updated user object, accept it; otherwise re-fetch /api/me
async function applyUpdatedUserFromChild(updatedUser: any) {
  // Full user object -> replace
  if (updatedUser && updatedUser.id && updatedUser.email) {
    setUser(normalizeUser(updatedUser));
    if (updatedUser.activity) setActivity(updatedUser.activity);
    return;
  }

  // If minimal patch contains profile or userPatch.profile, merge into existing state
  const patchProfile = updatedUser?.profile ?? updatedUser?.userPatch?.profile ?? null;
  if (patchProfile && user) {
    const mergedProfile = { ...(user.profile ?? {}), ...patchProfile };
    const newUser = { ...user, profile: mergedProfile };
    setUser(normalizeUser(newUser));
    if (updatedUser?.activity) setActivity(updatedUser.activity);
    return;
  }

  // If updatedUser is null-ish or doesn't contain usable info, do canonical refetch
  try {
    const r = await fetch("/api/me", { credentials: "include", cache: "no-store" });
    if (!r.ok) return;
    const j = await r.json().catch(() => null);
    if (j?.user) setUser(normalizeUser(j.user));
    if (j?.activity) setActivity(j.activity);
  } catch (err) {
    console.error("refetch after child update failed", err);
  }
}



  if (loading) return <div className="p-6">Loading...</div>;
  if (!user) return <div className="p-6">Not logged in</div>;

const profile = {
  ...(user.profile ?? {}),
  phoneNumber: (user.profile?.phoneNumber ?? (user as any).phoneNumber ?? null),
  phoneVerified: (user.profile?.phoneVerified ?? (user as any).phoneVerified ?? false),
  phoneVerifiedAt: (user.profile?.phoneVerifiedAt ?? (user as any).phoneVerifiedAt ?? null),
} as Profile;

  const role = (user.role ?? "viewer").toString().toUpperCase();

  // compute updated label live (updates via tick)
  const lastUpdatedISO = user.updatedAt ?? profile?.updatedAt ?? null;
  const lastUpdatedLabel = formatRelativeExtended(lastUpdatedISO);
  const headerUpdatedLabel = lastUpdatedLabel === "just now" ? "Updated just now" : `Updated ${lastUpdatedLabel}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
           <button
  type="button"
  onClick={() => router.push("/welcome")}
  aria-label="Go to welcome page"
  className="inline-flex items-center mt-10 ml-10 gap-2 px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-sm"
>
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  <span>Back</span>
</button>
      <div className="max-w-7xl mx-auto px-6 py-8">
   
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">Profile</div>
              <div className="text-xs text-slate-500">Manage your personal details and contact info</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-sm">
              <strong className="uppercase">{role}</strong>
              <span className="text-xs text-slate-600">access</span>
            </div>

            <ProfileMenu email={user.email} avatarUrl={profile?.avatarUrl} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column: profile card + contacts */}
          <div className="lg:col-span-8">
            <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  {profile?.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={profile.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-3xl font-semibold text-slate-700">{(user.name || user.email || "U").charAt(0).toUpperCase()}</div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900">{user.name ?? "—"}</h1>
                      <div className="text-sm text-slate-500">{user.email}</div>
                    </div>

                    <div className="ml-auto flex items-center gap-3">
                      <button onClick={() => setEditOpen(true)} className="px-4 py-2 rounded-lg bg-blue-700 text-white shadow hover:opacity-95">
                        Edit
                      </button>
                      {/* Settings removed per request */}
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-slate-500">
                    Last profile update: <span className="font-medium text-slate-700">{lastUpdatedLabel}</span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
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

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">About</h3>
                <p className="text-sm text-slate-600">Use this profile page to keep your contact details up to date. Your name, display name and timezone are used across the app for messaging and notifications.</p>
              </div>
            </section>

            {/* Email Addresses */}
            <section className="mt-6 bg-white rounded-3xl p-6 shadow border border-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold mb-1">My Email Addresses</h2>
                  <p className="text-sm text-slate-500 mb-4">View and manage the email addresses associated with your account.</p>
                </div>

                <div className="text-sm text-slate-500">{headerUpdatedLabel}</div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">📧</div>
                    <div>
                      <div className="font-medium">{user.email}</div>
                      <div className="text-xs text-slate-400">primary • added on account creation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Extra email flow: only one extra allowed */}
                    {!profile?.extraEmail ? (
                      <button className="px-3 py-2 text-sm rounded bg-slate-50 text-blue-600" onClick={() => setAddEmailOpen(true)}>
                        + Add Email Address
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="text-sm">{profile.extraEmail}</div>
                        <button className="px-3 py-2 text-sm rounded bg-red-50 text-red-600" onClick={() => void handleRemoveExtraEmail()}>
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile Numbers — display + verify modal */}
            <section className="mt-6 bg-white rounded-3xl p-6 shadow border border-slate-100">
              <h2 className="text-lg font-semibold mb-2">My Mobile Numbers</h2>
              <p className="text-sm text-slate-500 mb-4">View and manage the mobile numbers associated with your account.</p>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">📞</div>
                    <div>
                      <div className="font-medium">{profile?.phoneNumber ?? "—"}</div>
                      <div className={`text-xs ${profile?.phoneVerified ? "text-green-600" : "text-slate-400"}`}>
                        {profile?.phoneVerified ? `verified • ${profile.phoneVerifiedAt ? new Date(profile.phoneVerifiedAt).toLocaleString() : ""}` : "not verified"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {!profile?.phoneVerified ? (
                      <button className="px-3 py-2 text-sm rounded bg-blue-600 text-white" onClick={() => setVerifyOpen(true)}>
                        Verify number
                      </button>
                    ) : (
                      <button className="px-3 py-2 text-sm rounded bg-slate-50 text-slate-700" onClick={() => setVerifyOpen(true)}>
                        Manage
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right column: activity & quick actions */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700">Profile Activity (30 days)</h3>
                <span className="text-xs text-slate-500">{headerUpdatedLabel}</span>
              </div>

              <div className="mt-3">
                <div className="flex items-end gap-6">
                  <div>
                    <div className="text-2xl font-bold">{activity ? activity.logins30d : "—"}</div>
                    <div className="text-xs text-slate-500">Logins (30d)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{activity ? activity.changes30d : "—"}</div>
                    <div className="text-xs text-slate-500">Profile changes (30d)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Quick actions</h4>
              <div className="flex flex-col gap-2">
                <button className="text-left px-3 py-2 rounded-lg bg-slate-50" onClick={() => router.push("/inbox")}>Open Inbox</button>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/settings">Settings & Integrations</Link>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/security">Security</Link>
              </div>
            </div>

            <div className="text-center text-sm text-slate-500">Built for the Attack Capital assignment — profile management UI.</div>
          </aside>
        </div>
      </div>

      {/* Edit modal */}
      <EditProfileModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        user={user}
        onSave={async (payload) => {
          const ok = await handleSave(payload);
          if (ok) setEditOpen(false);
          return ok;
        }}
      />

      {/* Add email modal */}
      <AddEmailModal
        open={addEmailOpen}
        onClose={() => setAddEmailOpen(false)}
        onAdd={handleAddEmail}
      />

      {/* Phone verify modal (inline component) */}
      {verifyOpen && (
        <PhoneVerifyModal
          initialProfile={profile}
          onClose={() => setVerifyOpen(false)}
          onVerified={(updatedUser) => {
            applyUpdatedUserFromChild(updatedUser);
            setVerifyOpen(false);
          }}
        />
      )}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Inline PhoneVerifyModal
   - client-side restcountries for dial codes (fallback to local table)
   - responsive layout (stack on narrow, inline on wide)
   - 6-digit OTP, paste support, focus management
   - expects /api/phone/send-otp and /api/phone/verify-otp endpoints
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Inline PhoneVerifyModal
   - client-side restcountries for dial codes (fallback to local table)
   - responsive layout (stack on narrow, inline on wide)
   - 4-digit OTP, paste support, focus management
   - expects /api/phone/send-otp and /api/phone/verify-otp endpoints
/* -------------------------------------------------------------------------- */

function PhoneVerifyModal({
  initialProfile,
  onClose,
  onVerified,
}: {
  initialProfile: Profile;
  onClose: () => void;
  onVerified: (updatedUser: any) => void;
}) {
  const [countries, setCountries] = useState<Array<{ cca2: string; name: string; dial?: string }>>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countriesError, setCountriesError] = useState<string | null>(null);

  const initialCca2 = ((initialProfile?.countryCode ?? "IN") as string).toUpperCase() ?? "IN";
  const [countryCca2, setCountryCca2] = useState<string>(initialCca2);

  const [dialCode, setDialCode] = useState<string>(DEFAULT_DIAL);
  const [digitCount, setDigitCount] = useState<number>(FALLBACK_LENGTH[initialCca2] ?? DEFAULT_NATIONAL_LENGTH);

  // digits local state => ensure it resizes when digitCount changes
  const [digits, setDigits] = useState<string[]>(() => Array(digitCount).fill(""));
  useEffect(() => {
    setDigits((prev) => {
      const next = Array(digitCount).fill("");
      for (let i = 0; i < Math.min(prev.length, next.length); i++) next[i] = prev[i];
      return next;
    });
  }, [digitCount]);

  const digitInputsRef = React.useRef<Array<HTMLInputElement | null>>([]);

  // store e164 phone used for verification
  const [phoneE164, setPhoneE164] = useState<string | null>(initialProfile?.phoneNumber ?? null);

  const [otpSent, setOtpSent] = useState(false);
  const [otpExpiry, setOtpExpiry] = useState<number | null>(null);
  const [otpDigits, setOtpDigits] = useState<string[]>(() => Array(OTP_LEN).fill(""));
  const otpInputsRef = React.useRef<Array<HTMLInputElement | null>>([]);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  // load countries (restcountries). lightweight fields
  useEffect(() => {
    let cancelled = false;
    setLoadingCountries(true);
    setCountriesError(null);
    (async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=cca2,name,idd");
        if (!res.ok) throw new Error("Failed to load countries");
        const arr = await res.json();
        if (cancelled) return;
        const list = arr
          .map((c: any) => {
            const cca2 = (c.cca2 || "").toString().toUpperCase();
            const name = (c.name && (c.name.common || c.name.official)) || cca2;
            let dial: string | undefined = undefined;
            try {
              const idd = c.idd || {};
              const root = idd.root ?? "";
              const suffixes: string[] = idd.suffixes ?? [];
              if (root) {
                dial = suffixes && suffixes.length > 0 && suffixes[0] ? `${root}${suffixes[0]}` : root;
              }
            } catch (e) {
              dial = undefined;
            }
            return { cca2, name, dial };
          })
          .filter(Boolean)
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(list);
      } catch (err) {
        console.error("load countries error:", err);
        setCountriesError("Failed to load countries");
      } finally {
        if (!cancelled) setLoadingCountries(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // when countries list or selected country changes, update dial and digitCount
  useEffect(() => {
    const info = countries.find((c) => c.cca2 === countryCca2);
    if (info && info.dial) setDialCode(info.dial);
    else setDialCode(DEFAULT_DIAL);

    const len = FALLBACK_LENGTH[countryCca2] ?? DEFAULT_NATIONAL_LENGTH;
    setDigitCount(len);
  }, [countryCca2, countries]);

  // focus management & ESC to close
  useEffect(() => {
    const t = setTimeout(() => digitInputsRef.current[0]?.focus(), 80);
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const onlyDigits = (s: string) => s.replace(/\D/g, "");
  const setLocalDigit = (i: number, val: string) => {
    const d = onlyDigits(val).slice(0, 1);
    setDigits((prev) => {
      const next = prev.slice();
      next[i] = d;
      return next;
    });
    if (d && i < digitCount - 1) digitInputsRef.current[i + 1]?.focus();
  };
  const onDigitKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && digits[i] === "" && i > 0) digitInputsRef.current[i - 1]?.focus();
  };

  const localNumber = digits.join("");
  const localComplete = localNumber.length === digitCount;

  // OTP handlers
  const onOtpChange = (i: number, v: string) => {
    const d = onlyDigits(v).slice(0, 1);
    setOtpDigits((prev) => {
      const next = prev.slice();
      next[i] = d;
      return next;
    });
    if (d && i < OTP_LEN - 1) otpInputsRef.current[i + 1]?.focus();
  };
  const onOtpKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otpDigits[i] === "" && i > 0) otpInputsRef.current[i - 1]?.focus();
    if (e.key === "Enter") tryVerifyOtp();
  };
  const otpValue = otpDigits.join("");

  async function sendOtp() {
    if (!localComplete) {
      setMessage({ text: `Enter ${digitCount} digits`, ok: false });
      return;
    }
    const e164 = `${dialCode}${localNumber}`;
    // persist e164 so tryVerifyOtp can reference it
    setPhoneE164(e164);

    setSending(true);
    setMessage(null);
    try {
      const res = await fetch("/api/phone/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ phone: e164, otpLen: OTP_LEN }),
      });
      const json = await res.json().catch(() => null);
      console.debug("[PhoneVerifyModal] send-otp response:", res.status, json);
      if (!res.ok || json?.error) {
        setMessage({ text: json?.error || "Failed to send OTP", ok: false });
        setOtpSent(false);
      } else {
        setMessage({ text: "OTP sent — check your phone (or console in dev)", ok: true });
        setOtpSent(true);
        setOtpExpiry(Date.now() + 5 * 60 * 1000);
        setTimeout(() => otpInputsRef.current[0]?.focus(), 120);
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: "Network error sending OTP", ok: false });
      setOtpSent(false);
    } finally {
      setSending(false);
    }
  }

  async function tryVerifyOtp() {
    if (!phoneE164) {
      setMessage({ text: "Send OTP first", ok: false });
      return;
    }

    const otpValueLocal = otpDigits.join("");
    if (otpValueLocal.length !== OTP_LEN) {
      setMessage({ text: `Enter ${OTP_LEN}-digit code`, ok: false });
      return;
    }

    setVerifying(true);
    setMessage(null);

    const payload = { phone: phoneE164, otp: otpValueLocal };
    console.debug("[PhoneVerifyModal] verify payload:", payload);

    try {
      const res = await fetch("/api/phone/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      let body: any = null;
      try {
        body = await res.json().catch(() => null);
      } catch (e) {
        body = null;
      }

      console.debug("[PhoneVerifyModal] verify response status:", res.status, "body:", body);

      if (!res.ok) {
        const errMsg =
          (body && (body.error || body.message)) ||
          (await res.text().catch(() => null)) ||
          `HTTP ${res.status}`;
        setMessage({ text: errMsg, ok: false });
        setOtpDigits(Array(OTP_LEN).fill(""));
        otpInputsRef.current[0]?.focus();
        return;
      }

      // success
      setMessage({ text: "Phone number verified", ok: true });
      setOtpSent(false);
      setOtpDigits(Array(OTP_LEN).fill(""));

      if (body && (body.user || body.userPatch)) {
        try {
          onVerified(body.user ?? body.userPatch);
        } catch (e) {
          console.warn("[PhoneVerifyModal] onVerified threw:", e);
        }
      } else {
        // fallback: try re-fetch /api/me and call onVerified with the new user (or null)
        try {
          const r = await fetch("/api/me", { credentials: "include", cache: "no-store" });
          if (r.ok) {
            const j = await r.json().catch(() => null);
            onVerified(j?.user ?? null);
          } else {
            onVerified(null);
          }
        } catch (err) {
          console.error("[PhoneVerifyModal] fallback fetch /api/me failed:", err);
          onVerified(null);
        }
      }
    } catch (err) {
      console.error("[PhoneVerifyModal] verify network error:", err);
      setMessage({ text: "Network error verifying OTP", ok: false });
    } finally {
      setVerifying(false);
    }
  }

  function resetOtp() {
    setOtpSent(false);
    setOtpDigits(Array(OTP_LEN).fill(""));
    setOtpExpiry(null);
    setMessage(null);
    setTimeout(() => digitInputsRef.current[0]?.focus(), 80);
  }

  function handlePasteNumber(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("Text");
    const only = onlyDigits(text).slice(0, digitCount);
    if (only.length === digitCount) {
      setDigits(only.split(""));
      setTimeout(() => sendOtp(), 80);
    }
  }

  const digitBoxClass = "w-9 sm:w-10 md:w-12 h-10 rounded border text-center";
  const otpBoxClass = "w-9 sm:w-10 md:w-12 h-10 rounded border text-center";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-lg border ring-1 ring-slate-200 overflow-hidden">
        <div className="flex items-start justify-between gap-4 p-5 border-b">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Verify phone number</h3>
            <p className="text-sm text-slate-500 mt-1">Select country (dial code derived automatically), enter your phone and verify with a {OTP_LEN}-digit code.</p>
          </div>
          <div>
            <button aria-label="Close" onClick={onClose} className="rounded-md p-2 text-slate-600 hover:bg-slate-100">✕</button>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* country select + dial + digits */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 min-w-0">
              <label className="sr-only">Country</label>
              <select
                value={countryCca2}
                onChange={(e) => setCountryCca2(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm"
              >
                {loadingCountries ? (
                  <option>Loading countries...</option>
                ) : (
                  <>
                    {countries.map((c) => (
                      <option key={c.cca2} value={c.cca2}>
                        {c.name} {c.dial ? `(${c.dial})` : ""}
                      </option>
                    ))}
                    <option value="OTHER">Other</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <div className="px-3 py-2 rounded border bg-slate-50 text-sm font-medium">{dialCode}</div>

                <div onPaste={handlePasteNumber} className="flex gap-1 flex-wrap" style={{ maxWidth: "36ch" }}>
                  {Array.from({ length: digitCount }).map((_, i) => (
                    <input
                      key={i}
                      ref={(el) => (digitInputsRef.current[i] = el)}
                      inputMode="numeric"
                      maxLength={1}
                      value={digits[i] ?? ""}
                      onChange={(e) => setLocalDigit(i, e.target.value)}
                      onKeyDown={(e) => onDigitKey(i, e)}
                      className={`${digitBoxClass}`}
                      aria-label={`phone-digit-${i + 1}`}
                      style={{ textAlign: "center" }}
                    />
                  ))}
                </div>
              </div>

              <div className="ml-auto">
                {!otpSent ? (
                  <button
                    onClick={() => sendOtp()}
                    disabled={!localComplete || sending}
                    className={`px-3 py-2 rounded ${localComplete ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {sending ? "Sending..." : "Send OTP"}
                  </button>
                ) : (
                  <button onClick={() => resetOtp()} className="px-3 py-2 rounded bg-slate-50 text-slate-700">Cancel</button>
                )}
              </div>
            </div>
          </div>

          {/* OTP inputs */}
          {otpSent && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: OTP_LEN }).map((_, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpInputsRef.current[i] = el)}
                    inputMode="numeric"
                    maxLength={1}
                    value={otpDigits[i] ?? ""}
                    onChange={(e) => onOtpChange(i, e.target.value)}
                    onKeyDown={(e) => onOtpKey(i, e)}
                    className={`${otpBoxClass}`}
                    aria-label={`otp-${i + 1}`}
                  />
                ))}
              </div>

              <div className="ml-auto flex items-center gap-3">
                <button onClick={() => tryVerifyOtp()} disabled={verifying} className="px-3 py-2 rounded bg-green-600 text-white">
                  {verifying ? "Verifying..." : "Verify OTP"}
                </button>
                <div className="text-sm text-slate-500">{otpExpiry ? `Expires in ${Math.max(0, Math.ceil((otpExpiry - Date.now()) / 1000))}s` : ""}</div>
              </div>
            </div>
          )}

          {message && <div className={`text-sm ${message.ok ? "text-green-600" : "text-rose-600"}`}>{message.text}</div>}
          {countriesError && <div className="text-xs text-rose-600">{countriesError}</div>}

          <div className="flex justify-end gap-3 pt-3">
            <button onClick={onClose} className="px-4 py-2 rounded-lg border">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}



