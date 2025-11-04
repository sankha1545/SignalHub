import React from "react";

export default function ThreadsList({ threads }: { threads?: any[] | null }) {
  const safeThreads = Array.isArray(threads) ? threads : [];

  if (safeThreads.length === 0) return <div>No threads</div>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {safeThreads.map((t) => {
        try {
          const title = t?.title ?? t?.contact?.name ?? "Untitled";

          const participantsArr = Array.isArray(t?.participants) ? t.participants : [];
          const participantsNames = participantsArr
            .map((p: any) => (p ? (typeof p === "string" ? p : p.name ?? p.id ?? null) : null))
            .filter(Boolean) as string[];
          const participantsDisplay = participantsNames.length ? participantsNames.join(", ") : "—";

          const tagsArr = Array.isArray(t?.tags) ? t.tags.filter(Boolean) : [];
          const tagsDisplay = tagsArr.length ? tagsArr.join(", ") : null;

          return (
            <li key={t?.id ?? Math.random()} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
              <div style={{ fontWeight: 600 }}>{title}</div>
              <div style={{ color: "#666", fontSize: 13 }}>
                {participantsDisplay}{tagsDisplay ? ` · ${tagsDisplay}` : ""}
              </div>
            </li>
          );
        } catch (e) {
          if (process.env.NODE_ENV !== "production") console.error("Thread render error", t, e);
          return (
            <li key={t?.id ?? Math.random()}>
              <div>Invalid thread</div>
            </li>
          );
        }
      })}
    </ul>
  );
}
