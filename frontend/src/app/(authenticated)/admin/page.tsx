"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";

/**
 * Admin Dashboard Page (app/admin/page.tsx)
 * - Live line chart: messages sent per user (multi-line)
 * - Pie chart: channel breakdown (SMS / WHATSAPP / EMAIL)
 * - Auto-refresh (polling) + optional WebSocket updates if NEXT_PUBLIC_ANALYTICS_WS set
 * - Professional, modern UI using Tailwind (fits with existing app)
 *
 * Expected backend endpoint:
 * GET /api/admin/analytics
 * Response shape (example):
 * {
 *   messagesPerUser: [
 *     { userId: 'u1', name: 'Alice', points: [{ ts: 1699992000000, count: 3 }, ...] },
 *     { userId: 'u2', name: 'Bob', points: [{ ts: 1699992000000, count: 1 }, ...] }
 *   ],
 *   channelDistribution: [ { channel: 'SMS', count: 150 }, { channel: 'WHATSAPP', count: 44 }, { channel: 'EMAIL', count: 32 } ]
 * }
 */

type Point = { ts: number; count: number };
type UserSeries = { userId: string; name: string; points: Point[] };

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userSeries, setUserSeries] = useState<UserSeries[]>([]);
  const [channelDistribution, setChannelDistribution] = useState<{ channel: string; count: number }[]>([]);
  const [live, setLive] = useState(true);
  const [intervalSec, setIntervalSec] = useState<number>(5);
  const wsRef = useRef<WebSocket | null>(null);

  // derived chart data (rows by timestamp)
  const chartData = useMemo(() => {
    // gather unique timestamps
    const tsSet = new Set<number>();
    userSeries.forEach((u) => u.points.forEach((p) => tsSet.add(p.ts)));
    const tsArray = Array.from(tsSet).sort((a, b) => a - b);
    // produce rows: { tsLabel, [userId1]: count, [userId2]: count }
    return tsArray.map((ts) => {
      const row: any = { ts, tsLabel: new Date(ts).toLocaleTimeString() };
      for (const u of userSeries) {
        const p = u.points.find((x) => x.ts === ts);
        row[u.userId] = p ? p.count : 0;
      }
      return row;
    });
  }, [userSeries]);

  const users = useMemo(() => userSeries.map((u) => ({ id: u.userId, name: u.name })), [userSeries]);

  const COLORS = ["#4F46E5", "#06B6D4", "#F59E0B", "#EF4444", "#10B981", "#8B5CF6", "#F97316", "#0EA5E9"];

  async function fetchAnalytics() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/analytics");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      // normalize
      const msgs: UserSeries[] = Array.isArray(j.messagesPerUser)
        ? j.messagesPerUser.map((u: any) => ({ userId: String(u.userId), name: u.name ?? (u.userId ?? "Unknown"), points: Array.isArray(u.points) ? u.points.map((p: any) => ({ ts: Number(p.ts), count: Number(p.count) })) : [] }))
        : [];
      const channels = Array.isArray(j.channelDistribution) ? j.channelDistribution.map((c: any) => ({ channel: c.channel, count: Number(c.count) })) : [];
      setUserSeries(msgs);
      setChannelDistribution(channels);
    } catch (e: any) {
      console.error("admin analytics fetch error", e);
      setError(String(e?.message ?? e));
    } finally {
      setLoading(false);
    }
  }

  // initial load + polling
  useEffect(() => {
    fetchAnalytics();
    let timer: number | undefined;
    if (live) {
      timer = window.setInterval(() => fetchAnalytics(), Math.max(1000, intervalSec * 1000));
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [live, intervalSec]);

  // optional WebSocket live updates (if backend provides NEXT_PUBLIC_ANALYTICS_WS)
  useEffect(() => {
    const wsUrl = (process.env.NEXT_PUBLIC_ANALYTICS_WS as string) || "";
    if (!wsUrl) return;
    try {
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;
      ws.onopen = () => console.debug("analytics ws open");
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          // expected message type: { type: 'analytics:update' }
          if (msg?.type === "analytics:update") {
            fetchAnalytics();
          }
        } catch (e) {
          console.warn("ws parse err", e);
        }
      };
      ws.onclose = () => console.debug("analytics ws closed");
    } catch (e) {
      console.warn("analytics ws init failed", e);
    }
    return () => {
      try {
        wsRef.current?.close();
      } catch (e) {}
      wsRef.current = null;
    };
  }, []);

  function downloadCsv() {
    // flatten chartData to CSV with header: tsLabel, user1, user2, ...
    if (!chartData || chartData.length === 0) return;
    const header = ["timestamp", ...users.map((u) => u.name)];
    const rows = chartData.map((r) => [new Date(r.ts).toISOString(), ...users.map((u) => r[u.id] ?? 0)]);
    const csv = [header.join(","), ...rows.map((row) => row.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `messages_per_user_${new Date().toISOString()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Admin Dashboard</h1>
            <p className="text-sm text-slate-600 mt-1">Live analytics · Messages per user · Channel breakdown</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-800">Back to app</Link>
            <button onClick={() => fetchAnalytics()} className="px-3 py-1 rounded bg-white border shadow-sm text-sm">Refresh</button>
            <button onClick={() => setLive((s) => !s)} className={`px-3 py-1 rounded text-sm ${live ? "bg-emerald-600 text-white" : "bg-white border"}`}>
              {live ? "Live" : "Paused"}
            </button>
            <button onClick={downloadCsv} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Export CSV</button>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-100 text-rose-700 rounded">Error loading analytics: {error}</div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-2xl p-6 shadow border border-slate-100">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">Messages per user (live)</h2>
              <div className="text-sm text-slate-500">Last updated: {loading ? "…" : new Date().toLocaleTimeString()}</div>
            </div>

            <div style={{ width: "100%", height: 360 }}>
              <ResponsiveContainer>
                <LineChart data={chartData} margin={{ top: 8, right: 24, left: 0, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tsLabel" minTickGap={20} />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  {users.map((u, i) => (
                    <Line key={u.id} type="monotone" dataKey={u.id} name={u.name} stroke={COLORS[i % COLORS.length]} strokeWidth={2} dot={false} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 text-xs text-slate-500">Tip: Use the legend to toggle users on/off. If many users exist, consider filtering or selecting top N users.</div>
          </section>

          <aside className="bg-white rounded-2xl p-6 shadow border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Channel distribution</h3>

            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={channelDistribution} dataKey="count" nameKey="channel" cx="50%" cy="50%" outerRadius={80} label>
                    {channelDistribution.map((c, i) => (
                      <Cell key={c.channel} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 space-y-2">
              {channelDistribution.map((c, i) => (
                <div key={c.channel} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div style={{ width: 12, height: 12, background: COLORS[i % COLORS.length], borderRadius: 3 }} />
                    <div className="text-sm text-slate-700">{c.channel}</div>
                  </div>
                  <div className="text-sm font-medium text-slate-800">{c.count}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-slate-500">Shows per-channel user activity over the selected timeframe.</div>
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow border"> 
            <div className="text-xs text-slate-500">Active users</div>
            <div className="mt-2 text-xl font-bold">{users.length}</div>
            <div className="text-xs text-slate-400 mt-1">Users that sent messages during timeframe</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow border"> 
            <div className="text-xs text-slate-500">Total messages (all channels)</div>
            <div className="mt-2 text-xl font-bold">{channelDistribution.reduce((s, c) => s + c.count, 0)}</div>
            <div className="text-xs text-slate-400 mt-1">Combined across channels</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow border"> 
            <div className="text-xs text-slate-500">Refresh interval</div>
            <div className="mt-2 flex items-center gap-2">
              <input type="number" min={1} value={intervalSec} onChange={(e) => setIntervalSec(Number(e.target.value) || 5)} className="w-20 rounded border px-2 py-1" />
              <div className="text-xs text-slate-500">seconds</div>
            </div>
            <div className="text-xs text-slate-400 mt-2">Lower interval gives near-real-time data but increases load.</div>
          </div>
        </div>

        <footer className="mt-8 text-xs text-slate-500">Last synced at {new Date().toLocaleString()}</footer>
      </div>
    </main>
  );
}
