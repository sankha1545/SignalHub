// full code block below — copy and paste into your login page file
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

/**
 * Responsive Login page with Reset Password (reset-pass) modal + OTP flow.
 * Improvements made for responsiveness, accessibility, and robustness:
 * - Mobile-first layout using Tailwind responsive utilities
 * - Modal constrained with max-height and scroll for small screens
 * - Inputs/buttons full-width on small screens, compact on larger
 * - OTP grid becomes horizontally scrollable on tiny screens to avoid overlap
 * - Proper cleanup of intervals and safe fetch helper
 * - Ensures router pushes happen from event handlers (no render-time navigation)
 *
 * Endpoints used by this page (App Router):
 * - POST /api/auth/login
 * - POST /api/auth/google/login
 * - POST /api/auth/reset-pass/send-otp
 * - POST /api/auth/reset-pass/verify-otp
 * - POST /api/auth/reset-pass/reset
 */

function OtpInputGrid({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  useEffect(() => {
    const idx = value.length;
    if (idx < 6) refs.current[idx]?.focus();
    else if (idx === 6) refs.current[5]?.focus();
  }, [value]);

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    onChange(pasted);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const ch = e.target.value.replace(/\D/g, "").slice(-1);
    const arr = value.split("");
    while (arr.length < 6) arr.push("");
    arr[i] = ch || "";
    const joined = arr.join("").slice(0, 6);
    onChange(joined);
    if (ch && i < 5) refs.current[i + 1]?.focus();
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    if (e.key === "Backspace") {
      if (!value[i] && i > 0) refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    else if (e.key === "ArrowRight" && i < 5) refs.current[i + 1]?.focus();
  }

  return (
    <div className="flex gap-3 justify-center overflow-x-auto py-2" onPaste={handlePaste}>
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          aria-label={`OTP digit ${i + 1}`}
          ref={(el) => (refs.current[i] = el)}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKey(e, i)}
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          className="w-10 sm:w-12 h-12 sm:h-14 rounded-lg border border-zinc-200 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white flex-shrink-0"
        />
      ))}
    </div>
  );
}

async function safeJsonFetch(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);
  const contentType = res.headers.get("content-type") || "";
  let data: any = null;
  if (contentType.includes("application/json")) {
    try {
      data = await res.json();
    } catch (e) {
      data = null;
    }
  } else {
    const text = await res.text();
    data = { __rawText: text };
  }
  return { ok: res.ok, status: res.status, data, headers: res.headers };
}

export default function LoginPage() {
  const router = useRouter();
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);

  // Reset-pass modal state
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [forgotOtp, setForgotOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const otpInterval = useRef<number | null>(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [forgotBusy, setForgotBusy] = useState(false);
  const [forgotMessage, setForgotMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [lastPasswordChange, setLastPasswordChange] = useState<number | null>(null);

  // cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (otpInterval.current) {
        window.clearInterval(otpInterval.current);
        otpInterval.current = null;
      }
    };
  }, []);

  // load last password change timestamp from localStorage (client-side convenience only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastPasswordChange");
      if (raw) setLastPasswordChange(Number(raw));
    } catch (e) {}
  }, []);

  // clear success messages after short delay
  useEffect(() => {
    if (!successMsg) return;
    const t = setTimeout(() => setSuccessMsg(null), 3000);
    return () => clearTimeout(t);
  }, [successMsg]);

  // login submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email) return setError("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Please enter a valid email address.");
    if (!password) return setError("Please enter your password.");

    setBusy(true);
    try {
      const res = await safeJsonFetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), password, remember }),
      });
      if (!res.ok) {
        setError(res.data?.error ?? (res.data?.__rawText ? "Server returned non-JSON response" : "Login failed"));
      } else {
        setSuccessMsg("Signed in — redirecting…");
        // navigate to welcome page after small delay for UX
        setTimeout(() => router.push("/welcome"), 600);
      }
    } catch (err) {
      console.error("login error", err);
      setError("Network error. Check your connection.");
    } finally {
      setBusy(false);
    }
  }

  // Google sign-in success handler
  async function onGoogleSuccess(credentialResponse: CredentialResponse | any) {
    setError(null);
    if (!credentialResponse?.credential) {
      setError("Google returned no credential. Try again.");
      return;
    }

    let decoded: any;
    try {
      decoded = jwtDecode(credentialResponse.credential);
    } catch (err) {
      console.error("jwt decode error", err);
      setError("Failed to decode Google token.");
      return;
    }

    const googleEmail = decoded?.email;
    const googleSub = decoded?.sub;

    if (!googleEmail || !googleSub) {
      setError("Google account did not provide email. Use a Google account with email enabled.");
      return;
    }

    setBusy(true);
    try {
      const res = await safeJsonFetch("/api/auth/google/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: googleEmail, sub: googleSub }),
      });
      if (!res.ok) {
        setError(res.data?.error ?? "Google login failed. If you don't have an account, sign up first.");
      } else {
        setSuccessMsg("Signed in with Google — redirecting…");
        setTimeout(() => router.push("/welcome"), 600);
      }
    } catch (err) {
      console.error("google login error", err);
      setError("Network error during Google login.");
    } finally {
      setBusy(false);
    }
  }

  function onGoogleError() {
    setError("Google authentication failed or was cancelled.");
  }

  // --- Reset-pass flow ---
  function openForgotModal() {
    // check local lastPasswordChange to prevent change within 24h
    if (lastPasswordChange) {
      const elapsed = Date.now() - lastPasswordChange;
      if (elapsed < 24 * 60 * 60 * 1000) {
        setForgotMessage({ type: "error", text: "You can change your password only once every 24 hours." });
        setTimeout(() => setForgotMessage(null), 6000);
        return;
      }
    }
    setForgotOpen(true);
    setForgotEmail("");
    setOtpSent(false);
    setForgotOtp("");
    setOtpVerified(false);
    setNewPassword("");
    setNewPassword2("");
    setForgotMessage(null);
  }

  function closeForgotModal() {
    setForgotOpen(false);
    setForgotMessage(null);
    if (otpInterval.current) {
      window.clearInterval(otpInterval.current);
      otpInterval.current = null;
    }
    setSecondsLeft(0);
  }

  async function handleSendOtp() {
    setForgotMessage(null);
    if (!forgotEmail || !/\S+@\S+\.\S+/.test(forgotEmail)) {
      return setForgotMessage({ type: "error", text: "Please enter a valid email address." });
    }
    setForgotBusy(true);
    try {
      const res = await safeJsonFetch("/api/auth/reset-pass/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail.trim().toLowerCase() }),
      });
      if (!res.ok) {
        setForgotMessage({ type: "error", text: res.data?.error ?? "Failed to send OTP." });
      } else {
        setOtpSent(true);
        setForgotOtp("");
        setSecondsLeft(60);
        setForgotMessage({ type: "success", text: "OTP sent — check your email." });
        // start countdown
        if (otpInterval.current) {
          window.clearInterval(otpInterval.current);
          otpInterval.current = null;
        }
        otpInterval.current = window.setInterval(() => {
          setSecondsLeft((s) => {
            if (s <= 1) {
              if (otpInterval.current) {
                window.clearInterval(otpInterval.current);
                otpInterval.current = null;
              }
              return 0;
            }
            return s - 1;
          });
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      setForgotMessage({ type: "error", text: "Network error while sending OTP." });
    } finally {
      setForgotBusy(false);
    }
  }

  async function handleResendOtp() {
    if (secondsLeft > 0) return;
    await handleSendOtp();
  }

  async function handleVerifyOtp() {
    if (forgotOtp.length !== 6) return setForgotMessage({ type: "error", text: "Enter the 6-digit OTP." });
    setForgotBusy(true);
    try {
      const res = await safeJsonFetch("/api/auth/reset-pass/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail.trim().toLowerCase(), code: forgotOtp }),
      });
      if (!res.ok) {
        setForgotMessage({ type: "error", text: res.data?.error ?? "OTP verification failed." });
      } else {
        setOtpVerified(true);
        setForgotMessage({ type: "success", text: "OTP verified. Enter a new password." });
      }
    } catch (err) {
      console.error(err);
      setForgotMessage({ type: "error", text: "Network error while verifying OTP." });
    } finally {
      setForgotBusy(false);
    }
  }

  async function handleResetPassword(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setForgotMessage(null);

    // double-check 24h lockout (client side convenience)
    if (lastPasswordChange) {
      const elapsed = Date.now() - lastPasswordChange;
      if (elapsed < 24 * 60 * 60 * 1000) {
        setForgotMessage({ type: "error", text: "You can change your password only once every 24 hours." });
        return;
      }
    }

    if (!otpVerified) return setForgotMessage({ type: "error", text: "Verify the OTP first." });
    if (!newPassword || newPassword.length < 8) return setForgotMessage({ type: "error", text: "Password must be at least 8 characters." });
    if (newPassword !== newPassword2) return setForgotMessage({ type: "error", text: "Passwords do not match." });

    setForgotBusy(true);
    try {
      const res = await safeJsonFetch("/api/auth/reset-pass/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail.trim().toLowerCase(), password: newPassword }),
      });
      if (!res.ok) {
        setForgotMessage({ type: "error", text: res.data?.error ?? "Failed to reset password." });
      } else {
        setForgotMessage({ type: "success", text: "Your password has been changed." });
        // store last change timestamp locally (backend should also enforce)
        const ts = Date.now();
        try { localStorage.setItem("lastPasswordChange", String(ts)); } catch (e) {}
        setLastPasswordChange(ts);
        // close modal after a short delay
        setTimeout(() => {
          closeForgotModal();
          setSuccessMsg("Password updated — you can now sign in.");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setForgotMessage({ type: "error", text: "Network error while resetting password." });
    } finally {
      setForgotBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex items-center justify-center py-8 px-4">
      <main className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: marketing -- hidden on small screens */}
        <aside className="hidden lg:flex flex-col justify-center rounded-2xl overflow-hidden bg-gradient-to-tr from-sky-600 to-indigo-600 text-white p-10 shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">UnifyReach</h3>
                <p className="text-xs opacity-90">Customer engagement, simplified</p>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight mb-4">One inbox for every conversation</h2>
            <p className="max-w-md text-sm opacity-95 leading-relaxed mb-6">Centralize SMS, WhatsApp and Email. Collaborate with your team in real time, respond faster, and keep every contact conversation-ready.</p>
          </div>
        </aside>

        {/* Right: auth card */}
        <section className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 sm:p-8 ring-1 ring-black/5 dark:ring-white/6">
            <header className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Welcome back</h1>
                  <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-300">Sign in to manage conversations & teams</p>
                </div>
              </div>
            </header>

            <div aria-live="polite" className="min-h-[1.5rem] mb-4">
              {error && <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 mb-3">{error}</div>}
              {successMsg && <div className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 mb-3">{successMsg}</div>}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>

              <label className="block relative">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</span>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    aria-describedby="password-visibility"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    aria-pressed={showPwd}
                    aria-label={showPwd ? "Hide password" : "Show password"}
                    id="password-visibility"
                    className="inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {showPwd ? (
                      <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.58 10.58a3 3 0 0 0 4.24 4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-200" viewBox="0 0 24 24" fill="none">
                        <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300 text-sky-600 focus:ring-sky-500"
                  />
                  Remember me
                </label>
                <button type="button" onClick={openForgotModal} className="text-sm text-sky-600 hover:underline">Forgot password?</button>
              </div>

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-md px-4 py-2 text-white font-semibold transition-colors disabled:opacity-60"
                style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)", boxShadow: "0 8px 20px rgba(124,58,237,0.12)" }}
              >
                {busy ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <div className="my-4 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
              <div className="text-xs text-zinc-400">or continue with</div>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            </div>

            <div className="space-y-3">
              {googleClientId ? (
                <div className="w-full">
                  <GoogleOAuthProvider clientId={googleClientId}>
                    <GoogleLogin onSuccess={onGoogleSuccess} onError={onGoogleError} useOneTap={false} />
                  </GoogleOAuthProvider>
                </div>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setError("Google client id is not configured. Set NEXT_PUBLIC_GOOGLE_CLIENT_ID");
                  }}
                  className="flex items-center justify-center gap-3 w-full rounded-md border border-zinc-200 dark:border-zinc-800 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" aria-hidden>
                    <path fill="#4285f4" d="M533.5 278.4c0-18.4-1.6-36.1-4.7-53.4H272v101.2h146.9c-6.3 34-25 62.8-53.4 82v68.4h86.5c50.6-46.6 81.5-115.4 81.5-198.2z"/>
                    <path fill="#34a853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.6l-86.5-68.4c-24 16.1-54.9 25.6-91.7 25.6-70.6 0-130.3-47.6-151.6-111.6H34.7v69.8C79.2 485.7 168.6 544.3 272 544.3z"/>
                    <path fill="#fbbc04" d="M120.4 331.9c-10.9-32.9-10.9-68.2 0-101.1V161h-85.7C9.9 211.3 0 245.9 0 278.4c0 32.6 9.9 67.1 34.7 97.5l85.7-44z"/>
                    <path fill="#ea4335" d="M272 109.1c39.4 0 74.7 13.6 102.6 40.4l77-77C405.6 25 345.1 0 272 0 168.6 0 79.2 58.6 34.7 146.1l85.7 44.8C141.7 156.7 201.4 109.1 272 109.1z"/>
                  </svg>
                  <span className="text-sm font-medium">Continue with Google</span>
                </a>
              )}

              <a href="/auth/signup" className="block text-center text-sm text-zinc-600 dark:text-zinc-300 hover:underline">Create a new account</a>
            </div>

            <footer className="mt-6 text-xs text-zinc-400">
              By signing in you agree to our <a className="text-sky-600 hover:underline" href="/terms">Terms</a> and <a className="text-sky-600 hover:underline" href="/privacy">Privacy</a>.
            </footer>
          </div>
        </section>
      </main>

      {/* Reset-pass modal */}
      {forgotOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-5 sm:p-6 ring-1 ring-black/5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between sticky top-0 bg-white dark:bg-zinc-900 pt-2 -mx-5 px-5">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Reset password</h3>
              <button onClick={closeForgotModal} className="text-zinc-500 hover:text-zinc-700 ml-4">Close</button>
            </div>

            <div className="mt-3">
              {forgotMessage && (
                <div className={`rounded-md px-3 py-2 text-sm ${forgotMessage.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                  {forgotMessage.text}
                </div>
              )}

              {!otpSent && (
                <div className="mt-3 space-y-3">
                  <label className="block">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">Enter your email</span>
                    <input value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="you@company.com" />
                  </label>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={handleSendOtp} disabled={forgotBusy} className="flex-1 rounded-md px-4 py-2 text-white font-semibold" style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)" }}>
                      {forgotBusy ? "Sending…" : "Send OTP"}
                    </button>
                    <button onClick={closeForgotModal} className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-zinc-200 text-sm hover:bg-zinc-50">Cancel</button>
                  </div>
                </div>
              )}

              {otpSent && !otpVerified && (
                <div className="mt-3 space-y-3">
                  <p className="text-sm text-zinc-600">We sent a 6-digit code to <strong>{forgotEmail}</strong>. Enter it below.</p>
                  <OtpInputGrid value={forgotOtp} onChange={setForgotOtp} />

                  <div className="flex items-center justify-between">
                    <button onClick={handleVerifyOtp} disabled={forgotBusy} className="rounded-md px-4 py-2 bg-emerald-600 text-white font-semibold">
                      {forgotBusy ? "Verifying…" : "Verify OTP"}
                    </button>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-zinc-500">{secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Didn’t receive it?"}</div>
                      <button onClick={handleResendOtp} disabled={secondsLeft > 0 || forgotBusy} className={`text-sm font-medium ${secondsLeft > 0 ? "text-zinc-400" : "text-emerald-600"}`}>
                        Resend
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {otpVerified && (
                <form onSubmit={handleResetPassword} className="mt-3 space-y-3">
                  <div>
                    <label className="block text-sm text-zinc-700 dark:text-zinc-300">New password</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="Enter new password" />
                    <p className="text-xs text-zinc-400 mt-1">Minimum 8 characters.</p>
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-700 dark:text-zinc-300">Confirm new password</label>
                    <input type="password" value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="Re-enter new password" />
                  </div>

                  <div className="flex gap-3">
                    <button type="submit" disabled={forgotBusy} className="flex-1 rounded-md px-4 py-2 text-white font-semibold" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}>
                      {forgotBusy ? "Saving…" : "Save new password"}
                    </button>
                    <button type="button" onClick={closeForgotModal} className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-zinc-200 text-sm hover:bg-zinc-50">Cancel</button>
                  </div>
                </form>
              )}

              <div className="mt-2 text-xs text-zinc-500">Note: After changing your password you won't be able to change it again for 24 hours.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
