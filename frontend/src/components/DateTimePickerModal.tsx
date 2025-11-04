"use client";

import React from "react";

export default function DateTimePickerModal({
  value,
  onChange,
  onClose,
}: {
  value?: string | null;
  onChange: (v: string | null) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded p-6 z-10">
        <h3 className="text-lg font-semibold mb-3">Pick date & time</h3>
        <input
          type="datetime-local"
          className="w-full rounded border px-3 py-2"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value || null)}
        />

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={() => onChange(null)} className="px-3 py-2 rounded border">Clear</button>
          <button onClick={onClose} className="px-3 py-2 rounded bg-indigo-600 text-white">Done</button>
        </div>
      </div>
    </div>
  );
}
