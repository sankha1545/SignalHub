// src/app/auth/layout.tsx
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // Simple pass-through layout for /auth/* routes.
  // IMPORTANT: Do NOT include <html> or <body> here.
  return <>{children}</>;
}
