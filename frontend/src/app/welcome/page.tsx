// app/welcome/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileMenu from "@/components/profile/ProfileMenu"; // <-- Profile menu component

type User = {
  id: string;
  email: string;
  name?: string;
  role?: "VIEWER" | "EDITOR" | "ADMIN" | string;
};

export default function WelcomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock stats for the analytics card — replace with real /api/analytics later
  const [stats] = useState({
    messages7d: 842,
    avgResponseMins: 23,
    openRatePct: 67,
    sparkline: [3, 6, 4, 8, 5, 9, 7],
  });

  useEffect(() => {
    let mounted = true;
    fetch("/api/me")
      .then(async (res) => {
        if (!res.ok) return null;
        const json = await res.json();
        return json.user ?? null;
      })
      .then((u) => {
        if (!mounted) return;
        if (u) setUser(u);
      })
      .catch(() => setUser(null))
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const role = user?.role?.toString()?.toUpperCase() ?? "VIEWER";
  const isAdmin = role === "ADMIN";
  const isEditor = role === "EDITOR" || isAdmin;
  const isViewer = role === "VIEWER";

  // Quick action handler: send to inbox, or admin, etc.
  function handlePrimary() {
    if (isAdmin) router.push("/admin");
    else router.push("/inbox");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* HEADER (logo + role badge + profile menu) */}
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
            {/* role badge shown before profile */}
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-sm">
              <strong className="uppercase">{role}</strong>
              <span className="text-xs text-slate-600">access</span>
            </div>

            {/* ProfileMenu receives user email (for avatar initial) */}
            <ProfileMenu email={user?.email} avatarUrl={undefined} />
          </div>
        </div>

        {/* Top area: hero + features */}
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
                    real time, schedule campaigns, and measure impact — built with secure webhooks and
                    role-based controls.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <button
                      onClick={handlePrimary}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-[1.01] transition-transform"
                    >
                      {isAdmin ? "Open Admin Dashboard" : "Go to Inbox"}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>

                    <Link
                      href="/settings"
                      className="px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50"
                    >
                      Configure Integrations
                    </Link>
                  </div>
                </div>
              </div>

              {/* quick feature cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <FeatureCard
                  title="Unified Threads"
                  desc="All messages normalized into threads per contact — SMS, WhatsApp, Email."
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
                  desc="Quick insights: volume, response time and delivery KPIs."
                />
              </div>
            </div>
          </div>

          {/* Right column: analytics + quick stats */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700">Last 7 days</h3>
                <span className="text-xs text-slate-500">Updated just now</span>
              </div>

              <div className="mt-3">
                <div className="flex items-end gap-6">
                  <div>
                    <div className="text-2xl font-bold">{stats.messages7d}</div>
                    <div className="text-xs text-slate-500">Messages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.avgResponseMins}m</div>
                    <div className="text-xs text-slate-500">Avg response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stats.openRatePct}%</div>
                    <div className="text-xs text-slate-500">Open rate</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Sparkline data={stats.sparkline} />
                </div>
              </div>
            </div>

            {/* Quick actions card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Quick actions</h4>
              <div className="flex flex-col gap-2">
                <button
                  className={`text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`}
                  onClick={() => (isEditor ? router.push("/inbox#compose") : null)}
                  aria-disabled={!isEditor}
                >
                  Compose message {isEditor ? "" : "(editor required)"}
                </button>
                <button
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

        {/* Middle: sample thread preview + explanation */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Live thread preview</h2>
              <div className="text-sm text-slate-500">Normalized view • unified timeline</div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-100">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-white">
                <ThreadPreview />
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              This preview demonstrates how inbound messages from different channels are shown
              as one thread per contact. The composer below would be role-gated — viewers can only
              read, editors can send/schedule, admins can manage settings & team.
            </div>
          </div>

          {/* Right column: tasks / checklist */}
          <aside className="bg-white rounded-3xl p-6 shadow border border-slate-100">
            <h3 className="text-sm font-semibold mb-3">Get started — suggested next steps</h3>

            <ol className="text-sm space-y-3 list-decimal list-inside text-slate-700">
              <li>Open <Link href="/inbox" className="text-blue-600">Inbox</Link> and review threads.</li>
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

function ThreadPreview() {
  const messages = [
    { id: 1, from: "Jaya (WhatsApp)", text: "Is the shipment confirmed?", time: "09:12" },
    { id: 2, from: "You", text: "Yes — tracking ID 7GHT23. ETA tomorrow.", time: "09:16", outgoing: true },
    { id: 3, from: "Jaya (SMS)", text: "Thanks — can you resend invoice?", time: "09:20" },
    { id: 4, from: "You", text: "Sent. Please check your email.", time: "09:21", outgoing: true },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Jaya • +91 98xxxx1234</div>
          <div className="text-xs text-slate-500">WhatsApp • SMS • Email</div>
        </div>
        <div className="text-xs text-slate-500">Open</div>
      </div>

      <div className="space-y-3">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.outgoing ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg text-sm ${m.outgoing ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"}`}
            >
              <div className="font-medium">{m.from}</div>
              <div className="mt-1">{m.text}</div>
              <div className="mt-2 text-[10px] opacity-70 text-right">{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex items-center gap-2">
          <input
            aria-label="Type a message"
            className="flex-1 rounded-lg border px-3 py-2 text-sm"
            placeholder="Type a message… (Composer will be enabled for Editors)"
            disabled
          />
          <button className="px-3 py-2 rounded-lg bg-slate-200 text-slate-600" disabled>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const width = 160;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
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
