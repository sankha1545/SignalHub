// ComposerModal.select-only.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";

type Contact = {
  id: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
};

export default function ComposerModal({
  onClose,
  onSent,
  onSend,
  context,
}: {
  onClose: () => void;
  onSent?: (p?: any) => void;
  onSend: (payload: { to: string; channel: string; body: string; scheduleAt?: string; contactId?: string }) => Promise<any>;
  context?: { threadId?: string; contactId?: string } | null;
}) {
  const [channel, setChannel] = useState<"SMS" | "WHATSAPP" | "EMAIL">("SMS");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendMode, setSendMode] = useState<"now" | "schedule">("now");
  const [sendAt, setSendAt] = useState<string | null>(null);

  const [contacts, setContacts] = useState<Contact[] | null>(null);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [loadingContacts, setLoadingContacts] = useState(true);

  // Load contacts (primary: /api/contacts, fallback: /api/users)
  useEffect(() => {
    let mounted = true;
    setLoadingContacts(true);
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(`/api/contacts?limit=200`, { signal: controller.signal });
        if (res.ok) {
          const j = await res.json();
          const arr = Array.isArray(j) ? j : j.contacts ?? j;
          if (Array.isArray(arr)) {
            if (!mounted) return;
            setContacts(
              arr.map((c: any) => ({
                id: String(c.id ?? c._id ?? c.email ?? c.phone ?? Math.random()),
                name: c.name ?? c.fullName ?? c.email ?? c.phone ?? "Unknown",
                email: c.email ?? null,
                phone: c.phone ?? null,
              }))
            );
            return;
          }
        }

        // fallback to /api/users
        const ures = await fetch(`/api/users`, { signal: controller.signal });
        if (ures.ok) {
          const uj = await ures.json();
          const arr2 = Array.isArray(uj) ? uj : uj.users ?? uj;
          if (Array.isArray(arr2)) {
            if (!mounted) return;
            setContacts(
              arr2.map((u: any) => ({
                id: String(u.id ?? u._id ?? u.email),
                name: u.name ?? u.email ?? "Unknown",
                email: u.email ?? null,
                phone: u.phone ?? null,
              }))
            );
            return;
          }
        }

        // if nothing found
        if (mounted) setContacts([]);
      } catch (e) {
        if ((e as any).name !== "AbortError") console.warn("Composer: contacts load failed", e);
        if (mounted) setContacts([]);
      } finally {
        if (mounted) setLoadingContacts(false);
      }
    }

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [context?.contactId]);

  // Preselect context.contactId if present and exists in contacts
  useEffect(() => {
    if (!contacts) return;
    if (context?.contactId) {
      const found = contacts.find((c) => c.id === context.contactId);
      if (found) setSelectedContactId(found.id);
    }
  }, [contacts, context?.contactId]);

  // recipient options based on channel
  const recipientOptions = useMemo(() => {
    if (!contacts) return [];
    if (channel === "EMAIL") return contacts.filter((c) => c.email);
    return contacts.filter((c) => c.phone);
  }, [contacts, channel]);

  // ensure selected contact is valid for the chosen channel
  useEffect(() => {
    if (!selectedContactId || !contacts) return;
    const sel = contacts.find((c) => c.id === selectedContactId);
    if (!sel) {
      setSelectedContactId(null);
      return;
    }
    if (channel === "EMAIL" && !sel.email) setSelectedContactId(null);
    if ((channel === "SMS" || channel === "WHATSAPP") && !sel.phone) setSelectedContactId(null);
  }, [channel, contacts, selectedContactId]);

  function deriveTo(): { to: string | null; contactId?: string } {
    if (!selectedContactId) return { to: null };
    const c = contacts?.find((x) => x.id === selectedContactId);
    if (!c) return { to: null };
    return { to: channel === "EMAIL" ? c.email ?? null : c.phone ?? null, contactId: c.id };
  }

  async function handleSend() {
    setSending(true);
    try {
      const { to, contactId } = deriveTo();
      if (!to) {
        alert("Please select a recipient from the 'To' dropdown.");
        setSending(false);
        return;
      }
      if (!body.trim()) {
        alert("Please enter a message.");
        setSending(false);
        return;
      }

      const payload: any = {
        to,
        channel,
        body,
        contactId,
        scheduleAt: sendMode === "schedule" && sendAt ? sendAt : undefined,
      };

      await onSend(payload);
      onSent?.(payload);
      onClose();
    } catch (e) {
      console.error("send failed", e);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  }

  const canSend = !sending && selectedContactId && body.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-2xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Compose message</h3>
          <button type="button" onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-slate-600">Channel</label>
            <select className="w-full rounded border px-3 py-2 mt-1" value={channel} onChange={(e) => setChannel(e.target.value as any)}>
              <option value="SMS">SMS</option>
              <option value="WHATSAPP">WhatsApp</option>
              <option value="EMAIL">Email</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-600">To</label>
            <div className="mt-1">
              {loadingContacts ? (
                <div className="text-sm text-slate-500 p-2">Loading contacts…</div>
              ) : recipientOptions.length === 0 ? (
                <div className="text-sm text-rose-600 p-2">No recipients available for the selected channel. Add verified phone/email to user accounts.</div>
              ) : (
                <select
                  className="w-full rounded border px-3 py-2"
                  value={selectedContactId ?? ""}
                  onChange={(e) => setSelectedContactId(e.target.value || null)}
                >
                  <option value="">Select recipient...</option>
                  {recipientOptions.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name ?? (channel === "EMAIL" ? r.email : r.phone)} • {channel === "EMAIL" ? r.email : r.phone}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="text-xs text-slate-400 mt-1">Select a contact verified with an email or phone number. Manual entry is disabled.</div>
          </div>

          <div>
            <label className="text-xs text-slate-600">Send</label>
            <select className="w-full rounded border px-3 py-2 mt-1" value={sendMode} onChange={(e) => setSendMode(e.target.value as any)}>
              <option value="now">Send now</option>
              <option value="schedule">Schedule</option>
            </select>
          </div>

          {sendMode === "schedule" && (
            <div>
              <label className="text-xs text-slate-600">Send at</label>
              <input className="w-full rounded border px-3 py-2 mt-1" type="datetime-local" value={sendAt ?? ""} onChange={(e) => setSendAt(e.target.value)} />
            </div>
          )}

          <div>
            <label className="text-xs text-slate-600">Message</label>
            <textarea className="w-full rounded border px-3 py-2 mt-1" rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="button" onClick={handleSend} disabled={!canSend} className="px-4 py-2 rounded bg-indigo-600 text-white">
              {sending ? "Sending…" : sendMode === "now" ? "Send" : "Schedule"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
