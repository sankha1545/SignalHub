// app/(authenticated)/inbox/page.tsx
"use client";

import { useUser } from "@/lib/useUser";
import { useState } from "react";

export default function InboxPage() {
  const { user } = useUser();
  const [messages] = useState([
    { id: 1, from: "Alice", body: "Hey, update on the campaign?" },
    { id: 2, from: "Bob", body: "Reminder: meeting at 3PM" },
  ]);

  const canSend = ["EDITOR", "ADMIN"].includes(user.role);

  return (
    <div className="space-y-6">
      {/* Message list */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
        <ul className="divide-y divide-gray-200">
          {messages.map((msg) => (
            <li key={msg.id} className="py-3">
              <b>{msg.from}:</b> {msg.body}
            </li>
          ))}
        </ul>
      </div>

      {/* Composer */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Compose</h2>
        {canSend ? (
          <form className="flex gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border rounded-lg px-3 py-2"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </form>
        ) : (
          <p className="text-gray-500 text-sm">
            You don’t have permission to send messages. (Viewer mode)
          </p>
        )}
      </div>
    </div>
  );
}
