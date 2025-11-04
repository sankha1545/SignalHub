"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileMenu from "@/components/profile/ProfileMenu";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

/**
 * WelcomePage (rewritten)
 *
 * Changes:
 * - Composer's "To" is now a selection based on verified contacts/emails.
 * - Contacts loaded from /api/contacts (fallback /api/users).
 * - Filtering by channel: SMS/WHATSAPP -> phones only, EMAIL -> emails only.
 *
 * Server endpoints expected (unchanged except contact list):
 * - POST /api/messages/send
 * - POST /api/messages/schedule
 * - GET  /api/contacts/:id
 * - GET  /api/contacts/:id/notes
 * - POST /api/contacts/:id/notes
 * - GET  /api/threads?limit=...
 * - GET  /api/twilio/numbers
 * - POST /api/twilio/buy
 * - WS   /api/ws
 * - Yjs WS at NEXT_PUBLIC_YJS_WS
 */

type Role = "VIEWER" | "EDITOR" | "ADMIN" | string;

type User = {
  id: string;
  email: string;
  name?: string;
  role?: Role;
  tenantId?: string | null;
};

type AnalyticsSummary = {
  messages7d: number;
  avgResponseMins: number;
  openRatePct: number;
  sparkline: number[];
};

type ThreadPreviewItem = {
  id: string;
  contactId?: string;
  contactName: string;
  contactPhone?: string;
  channels: string[];
  snippet: string;
  lastAt: string; // ISO
  unreadCount?: number;
  status?: string;
  scheduled?: boolean;
};

type ProviderNumber = {
  id: string;
  phone: string;
  provider: string;
  capabilities?: Record<string, boolean>;
  purchased: boolean;
};

type ContactItem = {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phone?: string | null; // E.164
  phoneVerified?: boolean;
};

/* ----------------------------- Page ---------------------------- */

export default function WelcomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [threads, setThreads] = useState<ThreadPreviewItem[]>([]);
  const [numbers, setNumbers] = useState<ProviderNumber[]>([]);

  // NEW: contacts list used for composer "To" selection
  const [contacts, setContacts] = useState<ContactItem[]>([]);

  const [composerOpen, setComposerOpen] = useState(false);
  const [composerContext, setComposerContext] = useState<{ threadId?: string; contactId?: string } | null>(null);
  const [contactModal, setContactModal] = useState<{ contactId: string } | null>(null);
  const [buying, setBuying] = useState<string | null>(null);

  const [presence, setPresence] = useState<Record<string, { name?: string; idle?: boolean }>>({});

  const wsRef = useRef<WebSocket | null>(null);

  // Derived role helpers
  const role = (user?.role ?? "VIEWER").toString().toUpperCase();
  const isAdmin = role === "ADMIN";
  const isEditor = role === "EDITOR" || isAdmin;

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadAll() {
      setLoading(true);
      try {
        const [meRes, analyticsRes, threadsRes, numbersRes] = await Promise.all([
          fetch(`/api/me`, { signal }),
          fetch(`/api/analytics/summary`, { signal }),
          fetch(`/api/threads?limit=10`, { signal }),
          fetch(`/api/twilio/numbers`, { signal }),
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
              sparkline: Array.isArray(j.sparkline) && j.sparkline.length ? j.sparkline : [1, 2, 3, 2, 4],
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
        if ((e as any).name === "AbortError") {
          // expected on unmount
        } else {
          console.error("welcome: loadAll error", e);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadAll();

    return () => {
      mounted = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch contacts list (prefers /api/contacts, fallback to /api/users)
 // Replace existing fetchContacts with this more robust version
async function fetchContacts(signal?: AbortSignal | null) {
  const tried: string[] = [];

  // helper: normalize a raw user/contact object into ContactItem shape
  function normalizeRaw(raw: any): ContactItem | null {
    if (!raw) return null;
    // try many common locations for id/name/email/phone and verified flags
    const id = raw.id ?? raw.userId ?? raw.contactId ?? raw._id ?? null;
    const name =
      raw.name ??
      raw.displayName ??
      raw.fullName ??
      (raw.profile && (raw.profile.displayName || raw.profile.name)) ??
      raw.email ??
      null;

    // find email in several shapes
    let email: string | null = null;
    let emailVerified = false;
    if (raw.email) {
      email = raw.email;
      // common boolean flag
      emailVerified = Boolean(raw.emailVerified ?? raw.email_verified ?? (raw.profile && raw.profile.emailVerified) ?? false);
    } else if (Array.isArray(raw.emails) && raw.emails.length) {
      // e.g. [{ value:'x@', verified: true }]
      const primary = raw.emails.find((e: any) => e.primary || e.primary === true) ?? raw.emails[0];
      email = primary?.value ?? primary?.address ?? null;
      emailVerified = Boolean(primary?.verified ?? primary?.verifiedAt ?? false);
    } else if (Array.isArray(raw.accounts) && raw.accounts.length) {
      // e.g. OAuth accounts [{ provider: 'google', email: 'x@' }]
      const acct = raw.accounts.find((a: any) => a.provider && (a.email || a.profile?.email)) ?? raw.accounts[0];
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
    let phone: string | null = null;
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
      id: id ?? (email ?? phone) ?? String(Math.random()).slice(2, 9),
      name,
      email,
      emailVerified,
      phone,
      phoneVerified,
    };
  }

  // generic fetch helper that returns array or object
  async function tryFetch(url: string) {
    tried.push(url);
    try {
      const opts = signal ? { signal } : undefined;
      const r = await fetch(url, opts as any);
      if (!r.ok) {
        console.debug(`[fetchContacts] ${url} returned ${r.status}`);
        return null;
      }
      const j = await r.json().catch(() => null);
      return j;
    } catch (err) {
      console.debug(`[fetchContacts] ${url} fetch error:`, err);
      return null;
    }
  }

  // order: contacts -> users -> me -> admin/users
  const tries = ["/api/contacts?limit=1000", "/api/users?limit=1000", "/api/me", "/api/admin/users?limit=1000"];
  let aggregated: any[] = [];

  for (const url of tries) {
    const data = await tryFetch(url);
    if (!data) continue;

    // /api/me returns { user }
    if (data.user) {
      const n = normalizeRaw(data.user);
      if (n) aggregated.push(n);
    } else if (Array.isArray(data)) {
      for (const item of data) {
        const n = normalizeRaw(item);
        if (n) aggregated.push(n);
      }
    } else if (Array.isArray(data.contacts)) {
      for (const item of data.contacts) {
        const n = normalizeRaw(item);
        if (n) aggregated.push(n);
      }
    } else if (Array.isArray((data as any).users)) {
      for (const item of (data as any).users) {
        const n = normalizeRaw(item);
        if (n) aggregated.push(n);
      }
    } else if (typeof data === "object") {
      // maybe it's a single user or object with items
      if ((data as any).items && Array.isArray((data as any).items)) {
        for (const item of (data as any).items) {
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
  const map = new Map<string, ContactItem>();
  for (const a of aggregated) {
    const key = a.id ?? a.email ?? a.phone ?? JSON.stringify(a);
    if (!map.has(key)) map.set(key, a);
    else {
      // merge existing
      const ex = map.get(key)!;
      map.set(key, { ...ex, ...a });
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

  setContacts((prev) => mergeUniqueContacts(prev, result));
}


  function mergeUniqueContacts(prev: ContactItem[], next: ContactItem[]) {
    const map = new Map<string, ContactItem>();
    // key by id primarily, else by email/phone
    prev.forEach((c) => {
      const key = c.id ?? c.email ?? c.phone ?? String(Math.random());
      map.set(key, c);
    });
    next.forEach((c) => {
      const key = c.id ?? c.email ?? c.phone ?? String(Math.random());
      if (!map.has(key)) map.set(key, c);
      else {
        const existing = map.get(key)!;
        map.set(key, { ...existing, ...c });
      }
    });
    return Array.from(map.values());
  }

  // Realtime: open WebSocket to receive presence and new thread events
  useEffect(() => {
    if (!user) return;
    let ws: WebSocket | null = null;
    try {
      ws = new WebSocket((typeof window !== "undefined" ? window.location.origin : "") + "/api/ws");
      wsRef.current = ws;

      ws.onopen = () => {
        ws?.send(JSON.stringify({ type: "hello", userId: user.id, name: user.name }));
      };

      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type === "presence") {
            setPresence((p) => ({ ...p, [msg.userId]: { name: msg.name, idle: msg.idle } }));
          }
          if (msg.type === "presence:leave") {
            setPresence((p) => {
              const copy = { ...p };
              delete copy[msg.userId];
              return copy;
            });
          }
          if (msg.type === "thread:new") {
            setThreads((t) => [msg.thread as ThreadPreviewItem, ...t]);
          }
          if (msg.type === "thread:update") {
            setThreads((t) => t.map((x) => (x.id === msg.thread.id ? msg.thread : x)));
          }
        } catch (e) {
          console.warn("ws parse error", e);
        }
      };

      ws.onclose = () => {
        wsRef.current = null;
      };
    } catch (e) {
      console.warn("Realtime not available", e);
    }

    return () => {
      try {
        ws?.close();
      } catch (e) {
        /* */
      }
    };
  }, [user]);

  function handlePrimary() {
    if (isAdmin) router.push("/admin");
    else router.push("/inbox");
  }

  async function handleBuyNumber(id: string) {
    setBuying(id);
    try {
      const res = await fetch(`/api/twilio/buy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
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
    } finally {
      setBuying(null);
    }
  }

  // open composer with optional context (threadId or contactId)
  function openComposer(ctx?: { threadId?: string; contactId?: string }) {
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
async function sendMessage(payload: { to: string; channel: string; body: string; scheduleAt?: string; threadId?: string; contactId?: string }) {
  if (!isEditor) throw new Error("not authorized");

  console.debug("[sendMessage] payload:", payload);

  // optimistic thread preview insertion (unchanged)
  const isScheduled = !!payload.scheduleAt;
  const optimistic: ThreadPreviewItem = {
    id: isScheduled ? "sched-" + Math.random().toString(36).slice(2, 9) : "tmp-" + Math.random().toString(36).slice(2, 9),
    contactId: payload.contactId,
    contactName: payload.to,
    contactPhone: payload.to,
    channels: [payload.channel],
    snippet: payload.body,
    lastAt: new Date().toISOString(),
    scheduled: isScheduled,
  };
  setThreads((t) => [optimistic, ...t]);

  try {
    let res: Response;
    let endpoint: string;
    if (isScheduled) {
      endpoint = "/api/messages/schedule";
      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: payload.to,
          channel: payload.channel,
          body: payload.body,
          sendAt: payload.scheduleAt,
          threadId: payload.threadId,
          contactId: payload.contactId,
          metadata: { to: payload.to },
        }),
      });
    } else {
      endpoint = "/api/messages/send";
      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: payload.to,
          channel: payload.channel,
          body: payload.body,
          threadId: payload.threadId,
          contactId: payload.contactId,
          metadata: { to: payload.to },
        }),
      });
    }

    // read response text for debugging (attempt json, fallback to text)
    const text = await res.text().catch(() => "");
    let parsed: any = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch (e) {
      parsed = text;
    }

    console.debug(`[sendMessage] ${endpoint} responded status=${res.status}`, parsed);

    if (!res.ok) {
      // remove optimistic preview
      setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
      const serverMsg = parsed?.error ?? parsed?.message ?? (typeof parsed === "string" ? parsed : `HTTP ${res.status}`);
      // show a helpful alert and throw the server message so UI caller can react
      alert(`Send failed: ${serverMsg}`);
      throw new Error(`send failed: ${serverMsg}`);
    }

    const j = parsed ?? {};

    // if server returns canonical thread, replace optimistic
    if (j.thread && j.thread.id) {
      setThreads((t) => [j.thread as ThreadPreviewItem, ...t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-"))]);
    } else {
      // fallback: remove tmp optimistic
      setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-")));
    }

    return j;
  } catch (err) {
    // already removed optimistic on non-ok responses; ensure optimistic removed on any thrown error
    setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
    console.error("[sendMessage] error:", err);
    throw err;
  }
}


  return (
    
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back button — navigates to the welcome page */}


        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">SignalHub</div>
              <div className="text-xs text-slate-500">Unified Inbox • Multi-channel outreach</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-sm">
              <strong className="uppercase">{role}</strong>
              <span className="text-xs text-slate-600">access</span>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600">
              {/* presence */}
              <div className="flex items-center gap-2">
                {Object.keys(presence).length === 0 ? (
                  <span className="text-xs text-slate-400">no one online</span>
                ) : (
                  <div className="flex items-center gap-2">
                    {Object.entries(presence).slice(0, 4).map(([id, p]) => (
                      <div key={id} className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${p.idle ? "bg-yellow-400" : "bg-green-400"}`} />
                        <span title={p.name}>{p.name ?? id}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <ProfileMenu email={user?.email} avatarUrl={undefined} />
          </div>
        </div>

        {/* hero + features */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    SignalHub — Unified Inbox for Multi-Channel Outreach
                  </h1>
                  <p className="mt-3 text-slate-600 max-w-2xl">
                    Manage SMS, WhatsApp and Email threads in one place, collaborate with your team in
                    real time, schedule messages, and measure impact — built with secure webhooks and
                    role-based controls.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <button
    type="button"
    onClick={handlePrimary}
    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-[1.01] transition-transform"
  >
    {isAdmin ? "Open Admin Dashboard" : "Go to Inbox"}
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>

                    <Link href="/settings" className="px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50">
                      Configure Integrations
                    </Link>

                    {isEditor && (
                      <button
                        type="button"
                        onClick={() => openComposer()}
                        className="px-4 py-2 rounded-lg border bg-white text-slate-700 hover:bg-slate-50"
                      >
                        Quick Compose
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* quick feature cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <FeatureCard
                  title="Unified Threads"
                  desc="All messages normalized into threads per contact — SMS, WhatsApp, Email. Click a thread to preview."
                />
                <FeatureCard
                  title="Schedule & Automate"
                  desc="Schedule outbound messages and run background workers for timed delivery."
                />
                <FeatureCard
                  title="Team Collaboration"
                  desc="Real-time presence, shared notes, and role-based permissions."
                />
                <FeatureCard
                  title="Analytics"
                  desc="Quick insights: volume, response time and delivery KPIs. Exportable CSVs."
                />
              </div>

              {/* twilio sandbox status + numbers */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-rose-50 p-4 bg-rose-50/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Twilio Sandbox</div>
                      <div className="text-xs text-slate-600">Trial mode — numbers are simulated unless purchased</div>
                    </div>
                    <div className="text-xs text-slate-500">Sandbox</div>
                  </div>

                  <div className="mt-3">
                    <div className="text-xs text-slate-700 mb-2">Available numbers</div>
                    <div className="space-y-2">
                      {numbers.length === 0 ? (
                        <div className="text-xs text-slate-500">No sandbox numbers found.</div>
                      ) : (
                        numbers.slice(0, 4).map((n) => (
                          <div key={n.id} className="flex items-center justify-between bg-white rounded-lg p-2 border">
                            <div>
                              <div className="font-medium">{n.phone}</div>
                              <div className="text-xs text-slate-500">
                                {n.provider} • {n.capabilities ? Object.keys(n.capabilities).filter((k) => n.capabilities?.[k]).join(", ") : "—"}
                              </div>
                            </div>
                            <div>
                              {n.purchased ? (
                                <span className="text-xs text-green-600">Purchased</span>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleBuyNumber(n.id)}
                                  className="px-3 py-1 rounded bg-indigo-600 text-white text-xs"
                                  disabled={!!buying}
                                >
                                  {buying === n.id ? "Buying…" : "Buy Now"}
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <IntegrationsPanel numbers={numbers} />
              </div>
            </div>
          </div>

          {/* right column: analytics + quick stats */}
          <aside className="space-y-4">
            <AnalyticsPanel analytics={analytics} loading={loading} />

            {/* Quick actions card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Quick actions</h4>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className={`text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`}
                  onClick={() => (isEditor ? openComposer() : null)}
                  aria-disabled={!isEditor}
                >
                  Compose message {isEditor ? "" : "(editor required)"}
                </button>
                <button
                  type="button"
                  className={`text-left px-3 py-2 rounded-lg ${isAdmin ? "bg-indigo-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`}
                  onClick={() => (isAdmin ? router.push("/admin") : null)}
                  aria-disabled={!isAdmin}
                >
                  Manage team {isAdmin ? "" : "(admin only)"}
                </button>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/analytics">
                  View analytics
                </Link>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/settings">
                  Integrations & webhooks
                </Link>
              </div>
            </div>
          </aside>
        </header>

        {/* middle: thread preview + tasks */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Live thread preview</h2>
              <div className="text-sm text-slate-500">Normalized view • unified timeline</div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-100">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-white">
                <ThreadsList
                  threads={threads}
                  onOpenContact={(id) => setContactModal({ contactId: id })}
                  onCompose={(t) => openComposer({ threadId: t?.id, contactId: t?.contactId })}
                />
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              This preview demonstrates how inbound messages from different channels are shown
              as one thread per contact. The composer is role-gated — viewers can only
              read, editors can send/schedule, admins can manage settings & team.
            </div>
          </div>

          <aside className="bg-white rounded-3xl p-6 shadow border border-slate-100">
            <h3 className="text-sm font-semibold mb-3">Get started — suggested next steps</h3>

            <ol className="text-sm space-y-3 list-decimal list-inside text-slate-700">
              <li>
                Open <Link href="/inbox" className="text-blue-600">Inbox</Link> and review threads.
              </li>
              <li>{isEditor ? "Compose and schedule a test message." : "Request editor access to send messages."}</li>
              <li>Verify Twilio Sandbox under <Link href="/settings" className="text-blue-600">Settings</Link>.</li>
              <li>{isAdmin ? <><Link href="/admin" className="text-blue-600">Manage team</Link> & set roles.</> : "Ask an admin to add you to a team."}</li>
              <li>Open <Link href="/analytics" className="text-blue-600">Analytics</Link> to review KPIs.</li>
            </ol>

            <div className="mt-6">
              <Link href="/inbox" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                Start working
              </Link>
            </div>
          </aside>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Built for the Attack Capital assignment — multi-channel outreach, scheduling, team
          collaboration and analytics.
        </footer>

        {/* Composer Modal */}
        {composerOpen && (
          <ComposerModal
            onClose={closeComposer}
            onSent={() => {
              closeComposer();
            }}
            onSend={async (p) => {
              // the ComposerModal now supplies to, channel, body and contactId
              const payload = {
                to: p.to,
                channel: p.channel,
                body: p.body,
                scheduleAt: p.scheduleAt,
                threadId: composerContext?.threadId,
                contactId: p.contactId ?? composerContext?.contactId,
              };
              return sendMessage(payload);
            }}
            context={composerContext}
            contacts={contacts}
          />
        )}

        {/* Contact modal */}
        {contactModal && (
          <ContactProfileModal contactId={contactModal.contactId} onClose={() => setContactModal(null)} isEditor={isEditor} />
        )}
      </div>
    </main>
  );
}

/* ----------------------------- Small components ---------------------------- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h7" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-800">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function ThreadsList({ threads, onOpenContact, onCompose }: { threads: any[]; onOpenContact: (id: string) => void; onCompose?: (t?: any) => void }) {
  if (!Array.isArray(threads) || threads.length === 0) {
    return <div className="p-6 text-sm text-slate-500">No recent threads yet.</div>;
  }

  return (
    <div className="divide-y">
      {threads.map((t) => {
        // dev-only logging for malformed objects
        if (process.env.NODE_ENV !== "production") {
          if (t && !Array.isArray(t.channels)) {
            // eslint-disable-next-line no-console
            console.debug("ThreadsList: thread has missing/invalid channels field:", t);
          }
        }

        const contactPhone = t?.contactPhone ?? "—";
        const channelsDisplay = (Array.isArray(t?.channels) ? t.channels : []).join(" • ") || "—";
        const lastAtDisplay = t?.lastAt ? new Date(t.lastAt).toLocaleString() : "—";
        const snippet = t?.snippet ?? "";

        return (
          <div key={t?.id ?? Math.random()} className="p-3 hover:bg-slate-50 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{t?.contactName ?? "Unknown"}</div>
                  <div className="text-xs text-slate-500">
                    {contactPhone} • {channelsDisplay}
                  </div>
                </div>
                <div className="text-xs text-slate-400">{lastAtDisplay}</div>
              </div>
              <div className="mt-2 text-sm text-slate-700">{snippet}</div>
              {t?.scheduled && <div className="mt-2 text-xs text-amber-600">Scheduled</div>}
            </div>

            <div className="flex flex-col items-end gap-2">
              <button type="button" onClick={() => onOpenContact(t?.contactId ?? t?.id)} className="text-xs px-3 py-1 rounded bg-slate-50">Profile</button>
              <button type="button" onClick={() => (onCompose ? onCompose(t) : null)} className="text-xs px-3 py-1 rounded bg-indigo-600 text-white">Reply</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function IntegrationsPanel({ numbers }: { numbers: ProviderNumber[] }) {
  return (
    <div className="rounded-xl border p-4 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Integration status</div>
          <div className="text-xs text-slate-600">Connected providers & webhook health</div>
        </div>
        <div className="text-xs text-slate-500">OK</div>
      </div>

      <div className="mt-3 text-sm text-slate-700">
        Twilio (Sandbox) — Webhook configured
        <div className="mt-2 text-xs text-slate-500">Resend (Email) — Not connected</div>
        <div className="mt-2 text-xs text-slate-500">Available numbers: {numbers.length}</div>
      </div>
    </div>
  );
}

function AnalyticsPanel({ analytics, loading }: { analytics: AnalyticsSummary | null; loading: boolean }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Last 7 days</h3>
        <span className="text-xs text-slate-500">{loading ? "Loading…" : "Updated"}</span>
      </div>

      <div className="mt-3">
        <div className="flex items-end gap-6">
          <div>
            <div className="text-2xl font-bold">{analytics?.messages7d ?? "—"}</div>
            <div className="text-xs text-slate-500">Messages</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{analytics?.avgResponseMins ?? "—"}m</div>
            <div className="text-xs text-slate-500">Avg response</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{analytics?.openRatePct ?? "—"}%</div>
            <div className="text-xs text-slate-500">Open rate</div>
          </div>
        </div>

        <div className="mt-4">
          <Sparkline data={analytics?.sparkline ?? [1, 2, 3, 2, 4]} />
        </div>

        <div className="mt-4 text-xs text-slate-500">View full analytics for channel breakdown, response time histograms, and exportable reports.</div>
      </div>
    </div>
  );
}

/* ----------------------------- Contact modal + Yjs notes ---------------------------- */

function ContactProfileModal({ contactId, onClose, isEditor }: { contactId: string; onClose: () => void; isEditor: boolean }) {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState<any | null>(null);
  const [notes, setNotes] = useState<any[]>([]);
  const [adding, setAdding] = useState(false);
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    async function load() {
      try {
        const [cRes, nRes] = await Promise.all([
          fetch(`/api/contacts/${contactId}`, { signal }),
          fetch(`/api/contacts/${contactId}/notes`, { signal }),
        ]);
        if (!mounted) return;
        if (cRes.ok) {
          const cj = await cRes.json();
          setContact(cj.contact ?? cj);
        }
        if (nRes.ok) {
          const nj = await nRes.json();
          setNotes(Array.isArray(nj) ? nj : (nj.notes || []));
        }
      } catch (e) {
        if ((e as any).name !== "AbortError") console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [contactId]);

  async function handleAddNote() {
    if (!noteText.trim()) return;
    setAdding(true);
    try {
      const res = await fetch(`/api/contacts/${contactId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: noteText }),
      });
      if (!res.ok) throw new Error("failed to add note");
      const j = await res.json();
      setNotes((s) => [j, ...s]);
      setNoteText("");
    } catch (e) {
      console.error(e);
      alert("Failed to add note");
    } finally {
      setAdding(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Contact profile</h3>
          <button type="button" onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        {loading ? (
          <div className="mt-4">Loading…</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="text-sm font-semibold">{contact?.name ?? contact?.phone ?? "Contact"}</div>
              <div className="text-xs text-slate-500 mt-1">{contact?.email ?? "—"}</div>

              <div className="mt-4">
                <div className="text-sm font-medium">Notes (shared)</div>
                <div className="mt-2">
                  <YjsNotes contactId={contactId} currentUser={{ id: "me", name: contact?.name ?? "You" }} />
                </div>

                <div className="mt-4">
                  <div className="text-sm font-medium">Saved notes</div>
                  <div className="mt-2 space-y-2">
                    {notes.length === 0 ? (
                      <div className="text-xs text-slate-500">No notes</div>
                    ) : (
                      notes.map((n) => (
                        <div key={n.id} className="p-2 bg-slate-50 rounded">{n.encrypted ? "(encrypted)" : n.body}</div>
                      ))
                    )}
                  </div>

                  {isEditor && (
                    <div className="mt-4">
                      <textarea className="w-full rounded border px-3 py-2 mt-1" rows={3} value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Add private note" />
                      <div className="mt-2 flex justify-end">
                        <button type="button" onClick={handleAddNote} disabled={adding || !noteText.trim()} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">{adding ? "Adding…" : "Add note"}</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-sm font-medium">Quick actions</div>
              <div className="mt-2 flex flex-col gap-2">
                <Link href={`/inbox?contact=${contactId}`} className="px-3 py-2 rounded bg-blue-600 text-white text-sm text-center">Open thread</Link>
                <button type="button" className="px-3 py-2 rounded bg-slate-50 text-sm">Merge duplicates</button>
                <button type="button" className="px-3 py-2 rounded bg-slate-50 text-sm">Export contact</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- Composer (send + schedule) ---------------------------- */

/**
 * ComposerModal props:
 * - contacts: preloaded contacts array (used to populate the "To" selector)
 * - context.contactId: optional contact to pre-select
 */
function ComposerModal({
  onClose,
  onSent,
  onSend,
  context,
  contacts,
}: {
  onClose: () => void;
  onSent?: (p?: any) => void;
  onSend: (payload: { to: string; channel: string; body: string; scheduleAt?: string; contactId?: string }) => Promise<any>;
  context?: { threadId?: string; contactId?: string } | null;
  contacts: ContactItem[];
}) {
  // `to` state holds the selected actual address (phone or email) string
  const [to, setTo] = useState<string>("");
  // `selectedContactId` stores which contact is selected (if any)
  const [selectedContactId, setSelectedContactId] = useState<string | undefined>(undefined);

  // channel selection
  const [channel, setChannel] = useState<"SMS" | "WHATSAPP" | "EMAIL">("SMS");

  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendMode, setSendMode] = useState<"now" | "schedule">("now");
  const [sendAt, setSendAt] = useState<string | null>(null);

  // Keep a local filtered list derived from contacts
  const phoneOptions = useMemo(
    () =>
      contacts
        .filter((c) => c.phone && c.phoneVerified)
        .map((c) => ({ contactId: c.id, label: `${c.name ?? c.phone} (${c.phone})`, value: c.phone })),
    [contacts]
  );

  const emailOptions = useMemo(
    () =>
      contacts
        .filter((c) => c.email && (c.emailVerified ?? true)) // if backend doesn't provide emailVerified, include if email exists
        .map((c) => ({ contactId: c.id, label: `${c.name ?? c.email} (${c.email})`, value: c.email })),
    [contacts]
  );

  // If composer opened with context.contactId, pre-select sensible default based on channel
  useEffect(() => {
    if (!context?.contactId) return;
    const c = contacts.find((x) => x.id === context.contactId);
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
  }, [context?.contactId, contacts, channel]);

  // When channel changes, clear selection if it no longer matches
  useEffect(() => {
    if (!to) return;
    const isPhoneChannel = channel === "SMS" || channel === "WHATSAPP";
    const contactHasMatch = contacts.find((c) => {
      if (isPhoneChannel) return c.phone === to && c.phoneVerified;
      else return c.email === to;
    });
    if (!contactHasMatch) {
      // clear selection — forces user to pick a valid contact for the channel
      setTo("");
      setSelectedContactId(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  // Handler when user picks an item from the select
  function onSelectTo(e: React.ChangeEvent<HTMLSelectElement>) {
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
async function debugSendMessage(payload: {
  to: string;
  channel: string;
  body: string;
  scheduleAt?: string;
  threadId?: string;
  contactId?: string;
}) {
  try {
    const res = await fetch("/api/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include",
    });

    let body: any = null;
    try {
      body = await res.json().catch(() => null);
    } catch {
      body = null;
    }

    if (!res.ok) {
      console.error(
        "send failed:",
        res.status,
        body ?? (await res.text().catch(() => "(no body)"))
      );
      const msg =
        (body && (body.error || body.message)) ||
        `Send failed (HTTP ${res.status}). See console for details.`;
      throw new Error(msg);
    }

    return body;
  } catch (err: any) {
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
        contactId: selectedContactId,
      };
      await onSend(payload);
      onSent?.(payload);
      onClose();
    } catch (e) {
      console.error(e);
      alert("Failed to send message");
    } finally {
      setSending(false);
    }
  }

  // Build the options list for current channel
  const currentOptions = useMemo(() => {
    if (channel === "EMAIL") {
      // include email options
      return emailOptions.map((o) => ({ label: o.label, value: JSON.stringify({ contactId: o.contactId, value: o.value }) }));
    } else {
      // SMS or WHATSAPP -> phones only
      return phoneOptions.map((o) => ({ label: o.label, value: JSON.stringify({ contactId: o.contactId, value: o.value }) }));
    }
  }, [channel, phoneOptions, emailOptions]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-2xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Compose message</h3>
          <button type="button" onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-slate-600">To</label>

            {/* SELECT field (required) */}
            <select
              className="w-full rounded border px-3 py-2 mt-1"
              value={to ? JSON.stringify({ contactId: selectedContactId ?? null, value: to }) : ""}
              onChange={onSelectTo}
            >
              <option value="">— select recipient —</option>
              {currentOptions.length === 0 ? (
                <option value="" disabled>
                  No verified recipients for {channel === "EMAIL" ? "email" : "phone/WhatsApp"}
                </option>
              ) : (
                currentOptions.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              )}
            </select>

            <div className="text-xs text-slate-400 mt-1">
              Choose a verified recipient. For {channel === "EMAIL" ? "emails" : "phones/WhatsApp"}, only verified addresses are shown.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-600">Channel</label>
              <select className="w-full rounded border px-3 py-2 mt-1" value={channel} onChange={(e) => setChannel(e.target.value as any)}>
                <option value="SMS">SMS</option>
                <option value="WHATSAPP">WhatsApp</option>
                <option value="EMAIL">Email</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-slate-600">Send</label>
              <select className="w-full rounded border px-3 py-2 mt-1" value={sendMode} onChange={(e) => setSendMode(e.target.value as any)}>
                <option value="now">Send now</option>
                <option value="schedule">Schedule</option>
              </select>
            </div>
          </div>

          {sendMode === "schedule" && (
            <div>
              <label className="text-xs text-slate-600">Send at</label>
              <input className="w-full rounded border px-3 py-2 mt-1" type="datetime-local" value={sendAt ?? ""} onChange={(e) => setSendAt(e.target.value)} />
              <div className="text-xs text-slate-400 mt-1">Scheduled messages will be executed by the scheduler worker at the selected time.</div>
            </div>
          )}

          <div>
            <label className="text-xs text-slate-600">Message</label>
            <textarea className="w-full rounded border px-3 py-2 mt-1" rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="button" onClick={handleSend} disabled={sending || !to || !body} className="px-4 py-2 rounded bg-indigo-600 text-white">
              {sending ? "Sending…" : sendMode === "now" ? "Send" : "Schedule"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- YjsNotes (lightweight) ---------------------------- */

function YjsNotes({ contactId, currentUser }: { contactId: string; currentUser: { id?: string; name?: string } }) {
  const [text, setText] = useState("");
  const ydocRef = useRef<Y.Doc | null>(null);
  const providerRef = useRef<WebsocketProvider | null>(null);

  useEffect(() => {
    const wsUrl = process.env.NEXT_PUBLIC_YJS_WS || "ws://localhost:1234";
    const doc = new Y.Doc();
    ydocRef.current = doc;
    const provider = new WebsocketProvider(wsUrl, `contact-notes-${contactId}`, doc);
    providerRef.current = provider;

    const ytext = doc.getText("notes");
    setText(ytext.toString());
    const obs = () => setText(ytext.toString());
    ytext.observe(obs);

    provider.awareness.setLocalStateField("user", { id: currentUser?.id, name: currentUser?.name ?? "Unknown" });

    return () => {
      try {
        ytext.unobserve(obs);
      } catch (e) {}
      try {
        provider.disconnect();
      } catch (e) {}
      doc.destroy();
    };
  }, [contactId, currentUser?.id, currentUser?.name]);

  function onChangeLocal(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const doc = ydocRef.current;
    if (!doc) return;
    const ytext = doc.getText("notes");
    // replace entire text (simple approach)
    ytext.delete(0, ytext.length);
    ytext.insert(0, e.target.value);
    setText(e.target.value);
  }

  async function saveSnapshotToDB() {
    const doc = ydocRef.current;
    if (!doc) return;
    const ytext = doc.getText("notes");
    const val = ytext.toString();
    try {
      await fetch(`/api/contacts/${contactId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: val }),
      });
      alert("Saved note snapshot");
    } catch (e) {
      console.error(e);
      alert("Failed to save");
    }
  }

  return (
    <div>
      <textarea className="w-full rounded border px-3 py-2 mt-1" rows={6} value={text} onChange={onChangeLocal} />
      <div className="flex justify-end mt-2 gap-2">
        <button onClick={saveSnapshotToDB} className="px-3 py-1 rounded bg-slate-50">Save snapshot</button>
      </div>
    </div>
  );
}

/* ----------------------------- Sparkline ---------------------------- */

function Sparkline({ data }: { data: number[] }) {
  const width = 160;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1 || 1)) * width;
      const y = height - ((v - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <polyline
        fill="none"
        stroke="#4F46E5"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}
