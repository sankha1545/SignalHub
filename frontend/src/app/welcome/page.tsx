"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileMenu from "@/components/profile/ProfileMenu";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

/**
 * Enhanced Welcome page
 * - Keeps all existing API calls / behavior unchanged
 * - Adds a functional Integrations modal (fetch & buy Twilio numbers)
 * - Adds a full Inbox panel with search & filters (name, unread, scheduled, drafts)
 * - Inbox can open as a full panel or be minimized to a floating messenger bubble (like Facebook Messenger)
 *
 * Notes:
 * - This is a single file client component intended to replace your existing page.tsx
 * - All server interactions use the same endpoints present in your original file
 */

/* ----------------------------- types ---------------------------- */

type Role = "VIEWER" | "EDITOR" | "ADMIN" | string;

type User = {
  id: string;
  email?: string;
  name?: string;
  role?: Role;
};

type ThreadPreviewItem = {
  id: string;
  contactId?: string;
  contactName?: string;
  contactPhone?: string;
  channels?: string[];
  snippet?: string;
  lastAt?: string; // ISO
  unreadCount?: number;
  status?: "inbox" | "unread" | "scheduled" | "archived" | "draft" | string;
  scheduled?: boolean;
  isDraft?: boolean;
};

type ProviderNumber = {
  id: string;
  phone: string;
  provider?: string;
  capabilities?: Record<string, boolean>;
  purchased?: boolean;
};

type ContactItem = {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phone?: string | null;
  phoneVerified?: boolean;
};

type AnalyticsSummary = {
  messages7d?: number;
  avgResponseMins?: number;
  openRatePct?: number;
  sparkline?: number[];
};

/* ----------------------------- helpers ---------------------------- */

function formatShortDate(iso?: string) {
  if (!iso) return "—";
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

/* ----------------------------- Main Page ---------------------------- */

export default function WelcomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [threads, setThreads] = useState<ThreadPreviewItem[]>([]);
  const [numbers, setNumbers] = useState<ProviderNumber[]>([]);
  const [contacts, setContacts] = useState<ContactItem[]>([]);

  const [composerOpen, setComposerOpen] = useState(false);
  const [composerContext, setComposerContext] = useState<{ threadId?: string; contactId?: string } | null>(null);
  const [contactModal, setContactModal] = useState<{ contactId: string } | null>(null);
  const [buying, setBuying] = useState<string | null>(null);

  const [presence, setPresence] = useState<Record<string, { name?: string; idle?: boolean }>>({});

  const wsRef = useRef<WebSocket | null>(null);

  // NEW: UI states for integrations + inbox widget
  const [integrationsOpen, setIntegrationsOpen] = useState(false);

  // Inbox panel (full) visibility + minimization
  const [inboxOpen, setInboxOpen] = useState(false);
  const [inboxMinimized, setInboxMinimized] = useState(false);

  const role = (user?.role ?? "VIEWER").toString().toUpperCase();
  const isAdmin = role === "ADMIN";
  const isEditor = role === "EDITOR" || isAdmin;

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadAll() {
      try {
        setLoading(true);
        const [meRes, analyticsRes, threadsRes, numbersRes] = await Promise.all([
          fetch(`/api/me`, { signal }),
          fetch(`/api/analytics/summary`, { signal }),
          fetch(`/api/threads?limit=200`, { signal }),
          fetch(`/api/twilio/numbers`, { signal }),
        ]);

        if (!mounted) return;

        if (meRes.ok) {
          const j = await meRes.json().catch(() => null);
          setUser(j?.user ?? null);
        } else {
          setUser(null);
        }

        if (analyticsRes.ok) {
          const j = await analyticsRes.json().catch(() => null);
          setAnalytics({
            messages7d: j?.messages7d ?? 0,
            avgResponseMins: j?.avgResponseMins ?? 0,
            openRatePct: j?.openRatePct ?? 0,
            sparkline: Array.isArray(j?.sparkline) ? j.sparkline : [1, 2, 3, 2, 4],
          });
        } else {
          setAnalytics(null);
        }

        if (threadsRes.ok) {
          const j = await threadsRes.json().catch(() => null);
          setThreads(Array.isArray(j?.threads) ? j.threads : []);
        } else {
          setThreads([]);
        }

        if (numbersRes.ok) {
          const j = await numbersRes.json().catch(() => null);
          setNumbers(Array.isArray(j?.numbers) ? j.numbers : []);
        } else {
          setNumbers([]);
        }

        // best-effort load contacts
        await fetchContacts(signal);
      } catch (e) {
        if ((e as any)?.name !== "AbortError") console.error("loadAll error", e);
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

  /* ----------------------------- fetchContacts ---------------------------- */
  async function fetchContacts(signal?: AbortSignal | null) {
    function normalizeRaw(raw: any): ContactItem | null {
      if (!raw) return null;
      const id = raw.id ?? raw.userId ?? raw.contactId ?? raw._id ?? null;
      const name = raw.name ?? raw.displayName ?? raw.fullName ?? raw.email ?? null;

      let email: string | null = null;
      let emailVerified = false;
      if (raw.email) {
        email = raw.email;
        emailVerified = Boolean(raw.emailVerified ?? raw.email_verified ?? false);
      } else if (Array.isArray(raw.emails) && raw.emails.length) {
        const p = raw.emails[0];
        email = p?.value ?? p?.address ?? null;
        emailVerified = Boolean(p?.verified ?? false);
      } else if (raw.profile?.email) {
        email = raw.profile.email;
        emailVerified = Boolean(raw.profile.emailVerified ?? false);
      }

      let phone: string | null = null;
      let phoneVerified = false;
      if (raw.phone) {
        phone = raw.phone;
        phoneVerified = Boolean(raw.phoneVerified ?? false);
      } else if (raw.phoneNumber) {
        phone = raw.phoneNumber;
      } else if (Array.isArray(raw.phones) && raw.phones.length) {
        phone = raw.phones[0]?.value ?? raw.phones[0]?.number ?? null;
        phoneVerified = Boolean(raw.phones[0]?.verified ?? false);
      }

      if (!id && !email && !phone) return null;
      return {
        id: id ?? email ?? phone ?? String(Math.random()).slice(2, 8),
        name,
        email,
        emailVerified,
        phone,
        phoneVerified,
      };
    }

    async function tryFetch(url: string) {
      try {
        const opts = signal ? { signal } : undefined;
        const r = await fetch(url, opts as any);
        if (!r.ok) return null;
        const j = await r.json().catch(() => null);
        return j;
      } catch (e) {
        return null;
      }
    }

    const endpoints = ["/api/contacts?limit=1000", "/api/users?limit=1000", "/api/me", "/api/admin/users?limit=1000"];
    const aggregated: ContactItem[] = [];
    for (const ep of endpoints) {
      const d = await tryFetch(ep);
      if (!d) continue;
      if (d.user) {
        const n = normalizeRaw(d.user);
        if (n) aggregated.push(n);
      } else if (Array.isArray(d)) {
        for (const item of d) {
          const n = normalizeRaw(item);
          if (n) aggregated.push(n);
        }
      } else if (Array.isArray(d.contacts)) {
        for (const item of d.contacts) {
          const n = normalizeRaw(item);
          if (n) aggregated.push(n);
        }
      } else if (Array.isArray(d.users)) {
        for (const item of d.users) {
          const n = normalizeRaw(item);
          if (n) aggregated.push(n);
        }
      } else {
        const n = normalizeRaw(d);
        if (n) aggregated.push(n);
      }
      if (aggregated.length > 0) break;
    }

    // ensure me included
    try {
      const me = await tryFetch("/api/me");
      if (me?.user) {
        const n = normalizeRaw(me.user);
        if (n) aggregated.push(n);
      }
    } catch {}

    const map = new Map<string, ContactItem>();
    for (const a of aggregated) {
      const key = a.id ?? a.email ?? a.phone ?? JSON.stringify(a);
      if (!map.has(key)) map.set(key, a);
      else {
        const ex = map.get(key)!;
        map.set(key, { ...ex, ...a });
      }
    }
    const result = Array.from(map.values());
    setContacts((prev) => {
      // merge unique
      const merged = new Map<string, ContactItem>();
      prev.forEach((c) => merged.set(c.id, c));
      result.forEach((c) => merged.set(c.id, { ...merged.get(c.id), ...c }));
      return Array.from(merged.values());
    });
  }

  /* ----------------------------- Realtime WS ---------------------------- */
  useEffect(() => {
    if (!user) return;
    let mounted = true;
    try {
      const ws = new WebSocket((typeof window !== "undefined" ? window.location.origin : "") + "/api/ws");
      wsRef.current = ws;
      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "hello", userId: user.id, name: user.name }));
      };
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type === "presence") {
            setPresence((p) => ({ ...p, [msg.userId]: { name: msg.name, idle: msg.idle } }));
          } else if (msg.type === "presence:leave") {
            setPresence((p) => {
              const copy = { ...p };
              delete copy[msg.userId];
              return copy;
            });
          } else if (msg.type === "thread:new") {
            setThreads((t) => [msg.thread as ThreadPreviewItem, ...t]);
          } else if (msg.type === "thread:update") {
            setThreads((t) => t.map((x) => (x.id === msg.thread.id ? msg.thread : x)));
          } else if (msg.type === "message:new") {
            // new incoming message — ensure it's in threads and open inbox if desired
            setThreads((t) => {
              const exists = t.find((x) => x.id === msg.thread?.id || x.id === msg.threadId);
              if (exists) {
                return t.map((x) => (x.id === (msg.thread?.id ?? msg.threadId) ? { ...(msg.thread ?? x), unreadCount: (msg.incrementUnread ? ((x.unreadCount ?? 0) + 1) : (msg.thread?.unreadCount ?? x.unreadCount)) } : x));
              } else if (msg.thread) {
                return [msg.thread as ThreadPreviewItem, ...t];
              } else {
                // fallback: create a small thread item
                const small: ThreadPreviewItem = {
                  id: msg.threadId ?? `t-${Math.random().toString(36).slice(2, 8)}`,
                  contactId: msg.from,
                  contactName: msg.fromName ?? msg.from,
                  contactPhone: msg.from,
                  snippet: msg.text ?? "",
                  lastAt: new Date().toISOString(),
                  unreadCount: 1,
                  status: "inbox",
                };
                return [small, ...t];
              }
            });
          }
        } catch (e) {
          console.warn("ws parse error", e);
        }
      };
      ws.onclose = () => {
        wsRef.current = null;
      };
      return () => {
        try {
          ws.close();
        } catch {}
      };
    } catch (e) {
      if (!mounted) return;
      console.warn("Realtime not available", e);
    }
  }, [user]);

  /* ----------------------------- Actions ---------------------------- */

  async function handleBuyNumber(id: string) {
    setBuying(id);
    try {
      const res = await fetch(`/api/twilio/buy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("failed to buy");
      // refresh
      const ref = await fetch(`/api/twilio/numbers`);
      if (ref.ok) {
        const j = await ref.json();
        setNumbers(Array.isArray(j?.numbers) ? j.numbers : []);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to buy number (check sandbox or logs).");
    } finally {
      setBuying(null);
    }
  }

  function openComposer(ctx?: { threadId?: string; contactId?: string }) {
    if (!isEditor) return;
    setComposerContext(ctx ?? null);
    setComposerOpen(true);
  }
  function closeComposer() {
    setComposerOpen(false);
    setComposerContext(null);
  }

  /* ----------------------------- sendMessage (optimistic) ---------------------------- */

  async function sendMessage(payload: {
    to: string;
    channel: string;
    body: string;
    scheduleAt?: string;
    threadId?: string;
    contactId?: string;
  }) {
    if (!isEditor) throw new Error("not authorized");
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
      status: isScheduled ? "scheduled" : "inbox",
    };
    setThreads((t) => [optimistic, ...t]);

    try {
      let res: Response;
      if (isScheduled) {
        res = await fetch("/api/messages/schedule", {
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
        res = await fetch("/api/messages/send", {
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

      const text = await res.text().catch(() => "");
      let parsed: any = null;
      try {
        parsed = text ? JSON.parse(text) : null;
      } catch {
        parsed = text;
      }

      if (!res.ok) {
        setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
        const serverMsg = parsed?.error ?? parsed?.message ?? (typeof parsed === "string" ? parsed : `HTTP ${res.status}`);
        alert(`Send failed: ${serverMsg}`);
        throw new Error(`send failed: ${serverMsg}`);
      }

      const j = parsed ?? {};
      if (j.thread && j.thread.id) {
        setThreads((t) => [j.thread as ThreadPreviewItem, ...t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-"))]);
      } else {
        setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-")));
      }

      return j;
    } catch (err) {
      setThreads((t) => t.filter((x) => !x.id.startsWith("tmp-") && !x.id.startsWith("sched-")));
      console.error(err);
      throw err;
    }
  }

  /* ----------------------------- Kanban columns (unchanged) ---------------------------- */

  const columns = useMemo(
    () => [
      { key: "unread", title: "Unread", filter: (t: ThreadPreviewItem) => !!t.unreadCount && (t.unreadCount ?? 0) > 0 },
      { key: "inbox", title: "Inbox", filter: (t: ThreadPreviewItem) => !t.scheduled && !(t.unreadCount && t.unreadCount > 0) && (!t.status || t.status === "inbox") },
      { key: "scheduled", title: "Scheduled", filter: (t: ThreadPreviewItem) => !!t.scheduled || t.status === "scheduled" },
      { key: "archived", title: "Archived", filter: (t: ThreadPreviewItem) => t.status === "archived" },
    ],
    []
  );

  function getColumnThreads(colKey: string) {
    const col = columns.find((c) => c.key === colKey)!;
    return threads.filter((t) => {
      try {
        return (col.filter as any)(t);
      } catch {
        return false;
      }
    });
  }

  async function handleDropThread(threadId: string, destColumnKey: string) {
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          const newStatus = destColumnKey === "unread" ? "inbox" : destColumnKey;
          return { ...t, status: newStatus, scheduled: destColumnKey === "scheduled" ? true : t.scheduled };
        }
        return t;
      })
    );
    try {
      await fetch(`/api/threads/${threadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: destColumnKey }),
      });
    } catch (e) {
      console.error("thread patch failed", e);
    }
  }

  /* ----------------------------- UI ---------------------------- */

  // compute unread count for bubble
  const totalUnread = threads.reduce((s, t) => s + (t.unreadCount ?? 0), 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-xl">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold">SignalHub</div>
              <div className="text-xs text-slate-500">Unified Inbox • Multi-channel Outreach</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 rounded-full px-3 py-1 bg-slate-100 text-sm">
              <span className="text-xs text-slate-500">Role</span>
              <strong className="uppercase">{role}</strong>
            </div>

            <div className="hidden md:flex items-center gap-3 text-xs text-slate-600">
              {Object.keys(presence).length === 0 ? (
                <span className="text-xs text-slate-400">No one online</span>
              ) : (
                <div className="flex items-center gap-2">
                  {Object.entries(presence).slice(0, 4).map(([id, p]) => (
                    <div key={id} className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${p.idle ? "bg-yellow-400" : "bg-green-400"}`} />
                      <span className="truncate max-w-[8rem]">{p.name ?? id}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Integrations button - opens functional modal */}
            <button onClick={() => setIntegrationsOpen(true)} className="px-3 py-2 rounded-lg border bg-white hover:bg-slate-50">Integrations</button>

            {/* Inbox button opens inbox panel */}
            <button onClick={() => { setInboxOpen(true); setInboxMinimized(false); }} className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow">
              Inbox {totalUnread > 0 && <span className="ml-2 inline-block bg-amber-400 text-black text-xs px-2 py-0.5 rounded-full">{totalUnread}</span>}
            </button>

            <ProfileMenu email={user?.email} avatarUrl={undefined} />
          </div>
        </header>

        {/* Hero + CTA */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <div className="lg:col-span-2 bg-white/60 backdrop-blur rounded-3xl p-6 shadow-lg border border-slate-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold">Unified Inbox — Kanban for conversations</h1>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  Streamline SMS, WhatsApp and Email into one playbook. Real-time presence, collaborative notes (Yjs), scheduling,
                  and analytics — all under role-based controls.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button onClick={() => (isAdmin ? router.push("/admin") : (setInboxOpen(true), setInboxMinimized(false)))} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow hover:scale-[1.01]">
                    {isAdmin ? "Open Admin" : "Open Inbox"}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>

                  <button onClick={() => setIntegrationsOpen(true)} className="px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50">Integrations</button>

                  {isEditor && (
                    <button onClick={() => openComposer()} className="px-4 py-2 rounded-lg border bg-white text-slate-700 hover:bg-slate-50">Quick Compose</button>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <MiniCard label="Unified Threads" desc="Conversations aggregated per contact across channels." />
                  <MiniCard label="Schedule" desc="Schedule outbound messages and preview per-channel." />
                  <MiniCard label="Team Collab" desc="Real-time notes with cursors and mentions (Yjs)." />
                  <MiniCard label="Analytics" desc="Response time, channel volume and exportable reports." />
                </div>
              </div>
            </div>

            {/* Twilio sandbox & numbers */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-rose-50 p-4 bg-rose-50/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Twilio Sandbox</div>
                    <div className="text-xs text-slate-600">Trial — simulated numbers unless purchased</div>
                  </div>
                  <div className="text-xs text-slate-500">Sandbox</div>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-slate-700 mb-2">Available numbers</div>
                  <div className="space-y-2">
                    {numbers.length === 0 ? (
                      <div className="text-xs text-slate-500">No sandbox numbers found.</div>
                    ) : (
                      numbers.slice(0, 6).map((n) => (
                        <div key={n.id} className="flex items-center justify-between bg-white rounded-lg p-2 border">
                          <div>
                            <div className="font-medium">{n.phone}</div>
                            <div className="text-xs text-slate-500">{n.provider} • {n.capabilities ? Object.keys(n.capabilities).filter((k) => n.capabilities?.[k]).join(", ") : "—"}</div>
                          </div>
                          <div>
                            {n.purchased ? (
                              <span className="text-xs text-green-600">Purchased</span>
                            ) : (
                              <button disabled={!!buying} onClick={() => handleBuyNumber(n.id)} className="px-3 py-1 rounded bg-indigo-600 text-white text-xs">
                                {buying === n.id ? "Buying…" : "Buy"}
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <IntegrationsSummary numbers={numbers} />
            </div>
          </div>

          {/* right column: analytics + quick actions */}
          <aside className="space-y-4">
            <AnalyticsPanel analytics={analytics} loading={loading} />
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Quick actions</h4>
              <div className="flex flex-col gap-2">
                <button disabled={!isEditor} onClick={() => openComposer()} className={`text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-400"}`}>Compose</button>
                <button disabled={!isAdmin} onClick={() => router.push("/admin")} className={`text-left px-3 py-2 rounded-lg ${isAdmin ? "bg-indigo-50" : "bg-slate-50 text-slate-400"}`}>Manage team</button>
                <Link href="/analytics" className="text-left px-3 py-2 rounded-lg bg-slate-50">View analytics</Link>
                <button onClick={() => setIntegrationsOpen(true)} className="text-left px-3 py-2 rounded-lg bg-slate-50">Integrations</button>
              </div>
            </div>
          </aside>
        </section>

        {/* Kanban + thread preview */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Unified Inbox</h2>
              <div className="flex items-center gap-3">
                <SearchBar onSearch={(q) => { /* optional hook for remote search */ }} />
                <div className="text-sm text-slate-500">Normalized threads • drag to move</div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-100 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {columns.map((col) => (
                  <div key={col.key} className="bg-slate-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-sm font-semibold">{col.title}</div>
                        <div className="text-xs text-slate-500">{getColumnThreads(col.key).length} threads</div>
                      </div>
                      <div className="text-xs text-slate-400">•</div>
                    </div>

                    <div
                      className="space-y-2 min-h-[120px] max-h-[48vh] overflow-auto"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const threadId = e.dataTransfer.getData("text/threadId");
                        if (threadId) handleDropThread(threadId, col.key);
                      }}
                    >
                      {getColumnThreads(col.key).map((t) => (
                        <ThreadCard
                          key={t.id}
                          thread={t}
                          onOpenContact={(id) => setContactModal({ contactId: id })}
                          onCompose={(thr) => openComposer({ threadId: thr.id, contactId: thr.contactId })}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              The Kanban groups threads by status: Unread, Inbox, Scheduled, Archived. Use drag & drop to move threads between columns — server patch is attempted for persistence.
            </div>
          </div>

          <aside className="bg-white rounded-3xl p-6 shadow border border-slate-100">
            <h3 className="text-sm font-semibold mb-3">Getting started</h3>
            <ol className="text-sm space-y-3 list-decimal list-inside text-slate-700">
              <li>Open <button onClick={() => { setInboxOpen(true); setInboxMinimized(false); }} className="text-blue-600 underline">Inbox</button> for full thread view.</li>
              <li>{isEditor ? "Compose a test message" : "Request editor access."}</li>
              <li>Verify Twilio under <button onClick={() => setIntegrationsOpen(true)} className="text-blue-600 underline">Settings</button>.</li>
              <li>{isAdmin ? <Link href="/admin" className="text-blue-600">Manage team</Link> : "Ask an admin to add you."}</li>
            </ol>

            <div className="mt-6">
              <button onClick={() => { setInboxOpen(true); setInboxMinimized(false); }} className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg">Open Inbox</button>
            </div>
          </aside>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Built for the Attack Capital assignment — multi-channel outreach, scheduling, team collaboration and analytics.
        </footer>

        {/* Integrations modal - functional */}
        {integrationsOpen && (
          <IntegrationsModal
            onClose={() => setIntegrationsOpen(false)}
            numbers={numbers}
            onBuy={(id) => handleBuyNumber(id)}
            buying={buying}
            refresh={() => (async () => { const r = await fetch("/api/twilio/numbers"); if (r.ok) { const j = await r.json(); setNumbers(Array.isArray(j?.numbers) ? j.numbers : []); } })()}
          />
        )}

        {/* Composer modal */}
        {composerOpen && (
          <ComposerModal
            onClose={closeComposer}
            onSend={async (p) => sendMessage(p)}
            context={composerContext}
            contacts={contacts}
            onSent={() => {
              closeComposer();
            }}
          />
        )}

        {/* Contact modal */}
        {contactModal && (
          <ContactProfileModal contactId={contactModal.contactId} onClose={() => setContactModal(null)} isEditor={isEditor} />
        )}

        {/* Inbox Panel (full-screen style) */}
        {inboxOpen && (
          <InboxPanel
            threads={threads}
            onClose={() => setInboxOpen(false)}
            onMinimize={() => { setInboxMinimized(true); setInboxOpen(false); }}
            onOpenThread={(threadId) => {
              // open thread viewer (modal)
              setContactModal({ contactId: threadId }); // reuse contact modal or `ThreadView` could be implemented
            }}
            onRefresh={async () => {
              const r = await fetch("/api/threads?limit=200");
              if (r.ok) {
                const j = await r.json();
                setThreads(Array.isArray(j?.threads) ? j.threads : []);
              }
            }}
          />
        )}

        {/* Minimized messenger bubble */}
        {inboxMinimized && (
          <MessengerBubble
            unread={totalUnread}
            onOpen={() => { setInboxOpen(true); setInboxMinimized(false); }}
            onClose={() => setInboxMinimized(false)}
          />
        )}
      </div>
    </main>
  );
}

/* ----------------------------- Integrations modal ---------------------------- */

function IntegrationsModal({ onClose, numbers, onBuy, buying, refresh }: { onClose: () => void; numbers: ProviderNumber[]; onBuy: (id: string) => void; buying: string | null; refresh: () => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Integrations — Twilio Numbers</h3>
          <div className="flex items-center gap-3">
            <button onClick={refresh} className="px-3 py-1 rounded border text-sm">Refresh</button>
            <button onClick={onClose} className="text-sm text-slate-500">Close</button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter by country / capability / number" className="rounded border px-3 py-2 flex-1" />
            <div className="text-xs text-slate-500">Sandbox mode may simulate buys</div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3">
            {numbers.length === 0 ? (
              <div className="text-sm text-slate-500">No available numbers (sandbox or provider). Try refreshing.</div>
            ) : (
              numbers
                .filter((n) => !query || n.phone.includes(query) || (n.provider ?? "").toLowerCase().includes(query.toLowerCase()))
                .map((n) => (
                  <div key={n.id} className="flex items-center justify-between border rounded p-3 bg-slate-50">
                    <div>
                      <div className="font-medium">{n.phone}</div>
                      <div className="text-xs text-slate-500">{n.provider ?? "Twilio"} • {n.capabilities ? Object.keys(n.capabilities).filter((k) => n.capabilities?.[k]).join(", ") : "—"}</div>
                    </div>
                    <div>
                      {n.purchased ? (
                        <span className="text-xs text-green-600">Purchased</span>
                      ) : (
                        <button disabled={!!buying} onClick={() => onBuy(n.id)} className="px-3 py-1 rounded bg-indigo-600 text-white text-xs">
                          {buying === n.id ? "Buying…" : "Buy now"}
                        </button>
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Inbox Panel (full) ---------------------------- */

function InboxPanel({ threads, onClose, onMinimize, onOpenThread, onRefresh }: { threads: ThreadPreviewItem[]; onClose: () => void; onMinimize: () => void; onOpenThread: (threadId: string) => void; onRefresh: () => void }) {
  const [search, setSearch] = useState("");
  const [filterUnread, setFilterUnread] = useState(false);
  const [filterScheduled, setFilterScheduled] = useState(false);
  const [filterDrafts, setFilterDrafts] = useState(false);

  // filter by contact name / phone / thread snippet
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return threads.filter((t) => {
      if (filterUnread && !(t.unreadCount && t.unreadCount > 0)) return false;
      if (filterScheduled && !t.scheduled && t.status !== "scheduled") return false;
      if (filterDrafts && !t.isDraft && t.status !== "draft") return false;
      if (!q) return true;
      const hay = `${t.contactName ?? ""} ${t.contactPhone ?? ""} ${t.snippet ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [threads, search, filterUnread, filterScheduled, filterDrafts]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-5xl h-[80vh] shadow-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        <div className="col-span-1 md:col-span-1 border-r p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Inbox</h4>
              <div className="text-xs text-slate-500">All customer conversations</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onRefresh} className="px-2 py-1 rounded bg-slate-100 text-sm">Refresh</button>
              <button onClick={onMinimize} className="px-2 py-1 rounded bg-slate-100 text-sm">Minimize</button>
              <button onClick={onClose} className="px-2 py-1 rounded bg-slate-100 text-sm">Close</button>
            </div>
          </div>

          <div className="mt-2">
            <input placeholder="Search by name, phone, message..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded border px-3 py-2" />
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <label className={`px-2 py-1 rounded text-sm ${filterUnread ? "bg-indigo-600 text-white" : "bg-slate-100"}`}>
              <input type="checkbox" checked={filterUnread} onChange={() => setFilterUnread((s) => !s)} className="mr-2" /> Unread
            </label>
            <label className={`px-2 py-1 rounded text-sm ${filterScheduled ? "bg-amber-500 text-white" : "bg-slate-100"}`}>
              <input type="checkbox" checked={filterScheduled} onChange={() => setFilterScheduled((s) => !s)} className="mr-2" /> Scheduled
            </label>
            <label className={`px-2 py-1 rounded text-sm ${filterDrafts ? "bg-slate-700 text-white" : "bg-slate-100"}`}>
              <input type="checkbox" checked={filterDrafts} onChange={() => setFilterDrafts((s) => !s)} className="mr-2" /> Drafts
            </label>
          </div>

          <div className="mt-3 overflow-auto flex-1 space-y-2 pr-2">
            {filtered.length === 0 ? <div className="text-sm text-slate-500">No conversations match your filters.</div> : filtered.map((t) => (
              <div key={t.id} onClick={() => onOpenThread(t.id)} className="p-2 rounded-lg bg-white border hover:shadow cursor-pointer flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.contactName ?? t.contactPhone ?? "Unknown"}</div>
                  <div className="text-xs text-slate-500">{t.snippet ?? "—"}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">{formatShortDate(t.lastAt)}</div>
                  {t.unreadCount ? <div className="mt-1 inline-block bg-amber-400 text-black px-2 py-0.5 rounded-full text-xs">{t.unreadCount}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 md:col-span-2 p-4 overflow-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-sm text-slate-500">Conversation Preview</div>
              <div className="text-lg font-semibold">Select a thread to open</div>
            </div>
            <div className="text-xs text-slate-400">Real-time • {filtered.length} threads</div>
          </div>

          <div className="border rounded p-4 h-[62vh] overflow-auto flex flex-col">
            <div className="flex-1 grid place-items-center text-slate-400">
              <div>Click a thread on the left to view messages. This panel will show messages for the selected contact and allow quick reply, schedule, and attachments.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Messenger bubble (minimized) ---------------------------- */

function MessengerBubble({ unread, onOpen, onClose }: { unread: number; onOpen: () => void; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-2">
        <div className="bg-white rounded-xl p-2 shadow-lg w-64">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white">S</div>
              <div className="text-sm font-medium">SignalHub</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onOpen} className="px-2 py-1 rounded bg-indigo-600 text-white text-xs">Open</button>
              <button onClick={onClose} className="px-2 py-1 rounded bg-slate-100 text-xs">Close</button>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-500">{unread} unread messages</div>
        </div>

        <button onClick={onOpen} className="relative w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 12a9 9 0 10-3.18 6.18L21 21l-1.82-3.18A9 9 0 0021 12z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {unread > 0 && <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs px-2 py-0.5 rounded-full">{unread}</span>}
        </button>
      </div>
    </div>
  );
}

/* ----------------------------- Small building blocks ---------------------------- */

function MiniCard({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h7" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        <div className="text-xs text-slate-500 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function IntegrationsSummary({ numbers }: { numbers: ProviderNumber[] }) {
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

        <div className="mt-4 text-xs text-slate-500">View full analytics for channel breakdown and exportable reports.</div>
      </div>
    </div>
  );
}

/* ----------------------------- ThreadCard (draggable) ---------------------------- */

function ThreadCard({ thread, onOpenContact, onCompose }: { thread: ThreadPreviewItem; onOpenContact: (id: string) => void; onCompose?: (t: ThreadPreviewItem) => void }) {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("text/threadId", thread.id)}
      className="bg-white rounded-lg p-3 border hover:shadow cursor-grab"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-medium">{thread.contactName ?? thread.contactPhone ?? "Unknown"}</div>
              <div className="text-xs text-slate-500">{thread.contactPhone ?? "—"} • {(Array.isArray(thread.channels) ? thread.channels.join(", ") : "—")}</div>
            </div>
            <div className="text-xs text-slate-400">{formatShortDate(thread.lastAt)}</div>
          </div>

          <div className="mt-2 text-sm text-slate-700 line-clamp-2">{thread.snippet ?? "—"}</div>
          {thread.scheduled && <div className="mt-2 text-xs text-amber-600">Scheduled</div>}
          {thread.isDraft && <div className="mt-2 text-xs text-slate-700">Draft</div>}
        </div>

        <div className="flex flex-col items-end gap-2">
          <button onClick={() => onOpenContact(thread.contactId ?? thread.id!)} className="text-xs px-2 py-1 rounded bg-slate-50">Profile</button>
          <button onClick={() => onCompose?.(thread)} className="text-xs px-2 py-1 rounded bg-indigo-600 text-white">Reply</button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Composer Modal ---------------------------- */

function ComposerModal({
  onClose,
  onSend,
  context,
  contacts,
  onSent,
}: {
  onClose: () => void;
  onSend: (payload: { to: string; channel: string; body: string; scheduleAt?: string; contactId?: string }) => Promise<any>;
  context?: { threadId?: string; contactId?: string } | null;
  contacts: ContactItem[];
  onSent?: (p?: any) => void;
}) {
  const [to, setTo] = useState<string>("");
  const [selectedContactId, setSelectedContactId] = useState<string | undefined>(undefined);
  const [channel, setChannel] = useState<"SMS" | "WHATSAPP" | "EMAIL">("SMS");
  const [body, setBody] = useState("");
  const [sendMode, setSendMode] = useState<"now" | "schedule">("now");
  const [sendAt, setSendAt] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const phoneOptions = useMemo(
    () => contacts.filter((c) => c.phone && c.phoneVerified).map((c) => ({ contactId: c.id, label: `${c.name ?? c.phone} (${c.phone})`, value: c.phone })),
    [contacts]
  );
  const emailOptions = useMemo(
    () => contacts.filter((c) => c.email).map((c) => ({ contactId: c.id, label: `${c.name ?? c.email} (${c.email})`, value: c.email })),
    [contacts]
  );

  useEffect(() => {
    if (!context?.contactId) return;
    const c = contacts.find((x) => x.id === context.contactId);
    if (!c) return;
    if ((channel === "SMS" || channel === "WHATSAPP") && c.phone && c.phoneVerified) {
      setTo(c.phone);
      setSelectedContactId(c.id);
    } else if (channel === "EMAIL" && c.email) {
      setTo(c.email);
      setSelectedContactId(c.id);
    } else {
      if (c.email) {
        setTo(c.email);
        setSelectedContactId(c.id);
      } else if (c.phone && c.phoneVerified) {
        setTo(c.phone);
        setSelectedContactId(c.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context?.contactId, contacts]);

  useEffect(() => {
    if (!to) return;
    const isPhone = channel === "SMS" || channel === "WHATSAPP";
    const match = contacts.find((c) => (isPhone ? c.phone === to && c.phoneVerified : c.email === to));
    if (!match) {
      setSelectedContactId(undefined);
    } else {
      setSelectedContactId(match.id);
    }
  }, [to, channel, contacts]);

  function buildOptions() {
    if (channel === "EMAIL") {
      return emailOptions.map((o) => ({ label: o.label, value: JSON.stringify({ contactId: o.contactId, value: o.value }) }));
    }
    return phoneOptions.map((o) => ({ label: o.label, value: JSON.stringify({ contactId: o.contactId, value: o.value }) }));
  }

  function onSelectTo(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    if (!val) {
      setTo("");
      setSelectedContactId(undefined);
      return;
    }
    try {
      const parsed = JSON.parse(val);
      setTo(parsed.value);
      setSelectedContactId(parsed.contactId);
    } catch {
      setTo(val);
      setSelectedContactId(undefined);
    }
  }

  async function handleSend() {
    setSending(true);
    try {
      if (!to) {
        alert("Select recipient");
        setSending(false);
        return;
      }
      if (!body.trim()) {
        alert("Message body is required");
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
      console.error("send error", e);
      alert("Failed to send");
    } finally {
      setSending(false);
    }
  }

  const options = buildOptions();
  const charCount = body.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Compose</h3>
          <button onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 space-y-3">
            <label className="text-xs text-slate-600">To</label>
            <select className="w-full rounded border px-3 py-2" value={to ? JSON.stringify({ contactId: selectedContactId ?? null, value: to }) : ""} onChange={onSelectTo}>
              <option value="">— select recipient —</option>
              {options.length === 0 ? <option value="" disabled>No verified recipients</option> : options.map((opt, i) => <option key={i} value={opt.value}>{opt.label}</option>)}
            </select>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-600">Channel</label>
                <select className="w-full rounded border px-3 py-2" value={channel} onChange={(e) => setChannel(e.target.value as any)}>
                  <option value="SMS">SMS</option>
                  <option value="WHATSAPP">WhatsApp</option>
                  <option value="EMAIL">Email</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600">Send</label>
                <select className="w-full rounded border px-3 py-2" value={sendMode} onChange={(e) => setSendMode(e.target.value as any)}>
                  <option value="now">Now</option>
                  <option value="schedule">Schedule</option>
                </select>
              </div>
            </div>

            {sendMode === "schedule" && (
              <div>
                <label className="text-xs text-slate-600">Send at</label>
                <input type="datetime-local" className="w-full rounded border px-3 py-2" value={sendAt ?? ""} onChange={(e) => setSendAt(e.target.value)} />
                <div className="text-xs text-slate-400 mt-1">Scheduled messages execute via the scheduler worker.</div>
              </div>
            )}

            <div>
              <label className="text-xs text-slate-600">Message</label>
              <textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} className="w-full rounded border px-3 py-2 mt-1" />
              <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                <div>{channel === "SMS" ? `SMS preview — ${Math.ceil(charCount / 160)} segments` : "Preview will adapt per channel."}</div>
                <div>{charCount} chars</div>
              </div>
            </div>
          </div>

          <aside className="bg-slate-50 rounded p-3 flex flex-col gap-3">
            <div>
              <div className="text-xs text-slate-500">Preview</div>
              <div className="mt-2 p-2 rounded bg-white border text-sm h-36 overflow-auto">
                <div className="font-medium">{to || "Recipient"}</div>
                <div className="text-xs text-slate-400 mt-1">{channel} • {formatShortDate(sendMode === "schedule" && sendAt ? sendAt : new Date().toISOString())}</div>
                <div className="mt-3 text-slate-700">{body || <span className="text-slate-400">Message preview will appear here</span>}</div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex gap-2">
                <button onClick={onClose} className="px-3 py-2 rounded border w-full">Cancel</button>
                <button disabled={sending || !to || !body} onClick={handleSend} className="px-3 py-2 rounded bg-indigo-600 text-white w-full">
                  {sending ? "Sending…" : sendMode === "now" ? "Send" : "Schedule"}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- ContactProfileModal + YjsNotes ---------------------------- */

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
        const [cRes, nRes] = await Promise.all([fetch(`/api/contacts/${contactId}`, { signal }), fetch(`/api/contacts/${contactId}/notes`, { signal })]);
        if (!mounted) return;
        if (cRes.ok) {
          const cj = await cRes.json().catch(() => null);
          setContact(cj?.contact ?? cj);
        }
        if (nRes.ok) {
          const nj = await nRes.json().catch(() => null);
          setNotes(Array.isArray(nj) ? nj : nj?.notes ?? []);
        }
      } catch (e) {
        if ((e as any)?.name !== "AbortError") console.error(e);
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
      const j = await res.json().catch(() => null);
      setNotes((s) => [j ?? { id: String(Math.random()), body: noteText }, ...s]);
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
      <div className="relative max-w-4xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Contact</h3>
          <button onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        {loading ? (
          <div className="mt-4">Loading…</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="text-sm font-semibold">{contact?.name ?? contact?.phone ?? "Contact"}</div>
              <div className="text-xs text-slate-500 mt-1">{contact?.email ?? "—"}</div>

              <div className="mt-4">
                <div className="text-sm font-medium">Shared notes</div>
                <div className="mt-2">
                  <YjsNotes contactId={contactId} currentUser={{ id: "me", name: contact?.name ?? "You" }} />
                </div>

                <div className="mt-4">
                  <div className="text-sm font-medium">Saved notes</div>
                  <div className="mt-2 space-y-2">
                    {notes.length === 0 ? <div className="text-xs text-slate-500">No notes</div> : notes.map((n) => <div key={n.id ?? JSON.stringify(n)} className="p-2 bg-slate-50 rounded">{n.encrypted ? "(encrypted)" : n.body}</div>)}
                  </div>

                  {isEditor && (
                    <div className="mt-4">
                      <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} rows={3} className="w-full rounded border px-3 py-2 mt-1" placeholder="Add private note" />
                      <div className="mt-2 flex justify-end">
                        <button disabled={adding || !noteText.trim()} onClick={handleAddNote} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">{adding ? "Adding…" : "Add note"}</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-sm font-medium">Quick actions</div>
              <div className="mt-2 flex flex-col gap-2">
                <Link href={`/inbox?contact=${contactId}`} className="px-3 py-2 rounded bg-indigo-600 text-white text-sm text-center">Open thread</Link>
                <button className="px-3 py-2 rounded bg-slate-50 text-sm">Merge</button>
                <button className="px-3 py-2 rounded bg-slate-50 text-sm">Export</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- YjsNotes ---------------------------- */

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

    try {
      provider.awareness.setLocalStateField("user", { id: currentUser?.id, name: currentUser?.name ?? "Unknown" });
    } catch {}

    return () => {
      try {
        ytext.unobserve(obs);
      } catch {}
      try {
        provider.disconnect();
      } catch {}
      doc.destroy();
    };
  }, [contactId, currentUser?.id, currentUser?.name]);

  function onChangeLocal(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const doc = ydocRef.current;
    if (!doc) return;
    const ytext = doc.getText("notes");
    ytext.delete(0, ytext.length);
    ytext.insert(0, e.target.value);
    setText(e.target.value);
  }

  async function saveSnapshotToDB() {
    const doc = ydocRef.current;
    if (!doc) return;
    const val = doc.getText("notes").toString();
    try {
      await fetch(`/api/contacts/${contactId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: val }),
      });
      alert("Saved snapshot");
    } catch (e) {
      console.error(e);
      alert("Save failed");
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
      <polyline fill="none" stroke="#4F46E5" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" points={points} />
    </svg>
  );
}

/* ----------------------------- SearchBar ---------------------------- */

function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex items-center bg-slate-100 rounded px-3 py-1">
      <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSearch(q)} placeholder="Search threads, contacts..." className="bg-transparent outline-none text-sm" />
      <button onClick={() => onSearch(q)} className="text-xs px-2 py-1 rounded bg-slate-200">Search</button>
    </div>
  );
}
