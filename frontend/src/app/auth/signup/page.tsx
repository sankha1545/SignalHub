"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";


/**
 * Rewritten signup page with fixes:
 * - client-side check for an existing admin (GET /api/auth/admin-exists)
 * - prevents selecting/creating a second admin in the UI (UX-only; server-side enforcement required)
 * - fixes jwt-decode import and robust Google SSO completion flow
 * - auto-redirect to login when created countdown finishes
 * - small UX improvements and defensive checks
 */
// Small, dependency-free JWT payload decoder (no verification).
// Accepts a JWT string and returns the decoded payload object or null on error.
// Note: This only decodes base64url payload — it does NOT verify signatures.
function decodeJwt(token: string): any | null {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const b64 = parts[1];
    // convert from base64url to base64
    const b64fixed = b64.replace(/-/g, "+").replace(/_/g, "/");
    // atob works in browsers
    const decoded = atob(b64fixed.padEnd(Math.ceil(b64fixed.length / 4) * 4, "="));
    // decode percent-encoded utf-8
    try {
      // handle utf-8 properly
      return JSON.parse(
        decodeURIComponent(
          decoded
            .split("")
            .map((c) => {
              const code = c.charCodeAt(0).toString(16).padStart(2, "0");
              return "%" + code;
            })
            .join("")
        )
      );
    } catch {
      // fallback if decodeURIComponent fails
      return JSON.parse(decoded);
    }
  } catch (err) {
    if (process.env.NODE_ENV !== "production") console.debug("[auth] decodeJwt failed:", err);
    return null;
  }
}

function OtpInputGrid({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  useEffect(() => {
    const idx = value.length;
    if (idx < 6) {
      refs.current[idx]?.focus();
    } else if (idx === 6) {
      refs.current[5]?.focus();
    }
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
    if (ch && i < 5) {
      refs.current[i + 1]?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    if (e.key === "Backspace") {
      if (!value[i] && i > 0) {
        refs.current[i - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < 5) {
      refs.current[i + 1]?.focus();
    }
  }

  return (
    <div className="flex gap-3 justify-center" onPaste={handlePaste}>
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          aria-label={`OTP digit ${i + 1}`}
          ref={(el) => (refs.current[i] = el)}
          value={value[i] ?? ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKey(e, i)}
          inputMode="numeric"
          pattern="\\d*"
          maxLength={1}
          className="w-12 h-14 rounded-lg border border-zinc-200 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />
      ))}
    </div>
  );
}

export default function SignupPage() {
  const router = useRouter();

  // step state
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpVerifiedMsg, setShowOtpVerifiedMsg] = useState(false);

  // timer for resend
  const [secondsLeft, setSecondsLeft] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // signup fields
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState<"viewer" | "editor" | "admin">("viewer");

  // UI
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  // Google SSO completion flow state
  const [pendingGoogle, setPendingGoogle] = useState<null | { email: string; name: string; sub: string }>(null);
  const [googleUsername, setGoogleUsername] = useState("");
  const [googleRole, setGoogleRole] = useState<"viewer" | "editor" | "admin">("viewer");
  const [createdByGoogle, setCreatedByGoogle] = useState(false);

  // redirect countdown for created account
  const [createdCountdown, setCreatedCountdown] = useState<number | null>(null);
  const createdIntervalRef = useRef<number | null>(null);

  // Admin existence check (client-side UX control)
  const [adminExists, setAdminExists] = useState<boolean | null>(null);

  // cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (createdIntervalRef.current) {
        window.clearInterval(createdIntervalRef.current);
        createdIntervalRef.current = null;
      }
    };
  }, []);

  // start countdown when secondsLeft set
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (secondsLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            if (intervalRef.current) {
              window.clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  // created redirect countdown: start + auto-redirect when it reaches 0
  useEffect(() => {
    // clear any existing timer when createdCountdown changes
    if (createdIntervalRef.current) {
      window.clearInterval(createdIntervalRef.current);
      createdIntervalRef.current = null;
    }

    if (createdCountdown && createdCountdown > 0) {
      createdIntervalRef.current = window.setInterval(() => {
        setCreatedCountdown((c) => {
          if (!c || c <= 1) {
            if (createdIntervalRef.current) {
              window.clearInterval(createdIntervalRef.current);
              createdIntervalRef.current = null;
            }
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }

    return () => {
      if (createdIntervalRef.current) {
        window.clearInterval(createdIntervalRef.current);
        createdIntervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdCountdown]);

  // when countdown reaches zero, navigate to login automatically
  useEffect(() => {
    if (createdCountdown === 0 && createdSuccess) {
      router.push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdCountdown, createdSuccess]);

  function flash(type: "error" | "success", text: string, ms = 4000) {
    setMessage({ type, text });
    window.setTimeout(() => setMessage(null), ms);
  }

  // fetch admin existence (UX-only) — server MUST enforce single-admin as well
  async function fetchAdminExists() {
    try {
      const res = await fetch("/api/auth/admin-exists");
      if (!res.ok) {
        // treat as unknown; don't block signup
        setAdminExists(null);
        return;
      }
      const data = await res.json();
      setAdminExists(Boolean(data?.exists));
      // if admin exists and current role is admin, reset to viewer
      setRole((r) => (data?.exists && r === "admin" ? "viewer" : r));
      setGoogleRole((r) => (data?.exists && r === "admin" ? "viewer" : r));
    } catch (err) {
      console.error("admin-exists check failed", err);
      setAdminExists(null);
    }
  }

  useEffect(() => {
    // initial check
    fetchAdminExists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // SEND OTP
  async function handleSendOtp() {
    setMessage(null);
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return flash("error", "Please enter a valid email address.");
    }
    setBusy(true);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        flash("error", data?.error ?? "Failed to send OTP. Try again.");
      } else {
        setOtpSent(true);
        setOtp("");
        setSecondsLeft(60);
        flash("success", "OTP sent — check your inbox.");
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error while sending OTP.");
    } finally {
      setBusy(false);
    }
  }

  // VERIFY OTP
  async function handleVerifyOtp() {
    if (otp.length !== 6) return flash("error", "Enter the 6-digit OTP.");
    setBusy(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: otp }),
      });
      const data = await res.json();
      if (!res.ok) {
        flash("error", data?.error ?? "OTP verification failed.");
      } else {
        setOtpVerified(true);
        setShowOtpVerifiedMsg(true);
        flash("success", "OTP verified.");
        setTimeout(() => setShowOtpVerifiedMsg(false), 3000);
        // re-check admin availability now that user is moving forward
        fetchAdminExists();
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error while verifying OTP.");
    } finally {
      setBusy(false);
    }
  }

  // Final signup (credentials)
  async function handleSignup(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setMessage(null);
    if (!otpVerified) return flash("error", "Please verify your email first.");
    if (!name?.trim()) return flash("error", "Please enter your full name.");
    if (!password || password.length < 8) return flash("error", "Password must be at least 8 characters.");
    if (password !== password2) return flash("error", "Passwords do not match.");

    // Protect UI-side: don't attempt to create a second admin
    if (role === "admin" && adminExists) {
      return flash("error", "An admin account already exists. You cannot create another admin.");
    }

    setBusy(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password, role, provider: "credentials" }),
      });
      const data = await res.json();
      if (!res.ok) {
        flash("error", data?.error ?? "Signup failed.");
        // refresh adminExists in case server told us admin exists
        fetchAdminExists();
      } else {
        setCreatedSuccess(true);
        setCreatedByGoogle(false);
        flash("success", "Your account has been created successfully.");
        // start 4s redirect timer
        setCreatedCountdown(4);
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error during signup.");
    } finally {
      setBusy(false);
    }
  }

  // Resend OTP (only if timer expired)
  async function handleResend() {
    if (secondsLeft > 0) return;
    await handleSendOtp();
  }

  // GOOGLE SIGNUP (start SSO completion flow)
  async function onGoogleSuccess(credentialResponse: CredentialResponse) {
    try {
      if (!credentialResponse?.credential) {
        return flash("error", "Google response missing credential.");
      }

      const decoded: any = decodeJwt(credentialResponse.credential);
      const googleEmail = decoded?.email;
      const googleName = decoded?.name || decoded?.given_name || "";
      const sub = decoded?.sub;

      if (!googleEmail || !sub) {
        return flash("error", "Could not extract Google profile information.");
      }

      // store pending Google info and open completion form (we do NOT create account yet)
      const pending = { email: googleEmail, name: googleName, sub };
      setPendingGoogle(pending);
      setGoogleUsername(googleEmail.split("@")[0]);

      // ensure adminRole is only available if admin doesn't already exist
      await fetchAdminExists();
      setGoogleRole(adminExists ? "viewer" : "viewer");

      localStorage.setItem("pendingGoogleSignup", JSON.stringify(pending));

      flash("success", "Google verified — complete your account details below.");
    } catch (err) {
      console.error("google signup error", err);
      flash("error", "Google signup failed.");
    }
  }

  function onGoogleError() {
    flash("error", "Google authentication failed or was cancelled.");
  }

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  // Complete Google SSO signup (final step)
  async function finalizeGoogleSignup(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setMessage(null);
    if (!pendingGoogle) return flash("error", "No Google session found. Please sign in with Google again.");
    if (!googleUsername || !googleUsername.trim()) return flash("error", "Please enter a username.");

    // Prevent UI attempt to create second admin
    if (googleRole === "admin" && adminExists) {
      return flash("error", "An admin account already exists. You cannot create another admin.");
    }

    setBusy(true);
    try {
      const payload = {
        email: pendingGoogle.email,
        name: pendingGoogle.name,
        sub: pendingGoogle.sub,
        username: googleUsername.trim(),
        role: googleRole,
      };
      const res = await fetch("/api/auth/google/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        flash("error", data?.error ?? "Failed to finalize Google signup.");
        // re-check admin availability
        fetchAdminExists();
      } else {
        setCreatedSuccess(true);
        setCreatedByGoogle(true);
        flash("success", "Your account is created successfully.");
        // clear pending
        setPendingGoogle(null);
        localStorage.removeItem("pendingGoogleSignup");
        // start 4s timer to redirect
        setCreatedCountdown(4);
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error while finalizing Google signup.");
    } finally {
      setBusy(false);
    }
  }

  // if user reloads the page and had a pending google signup in localStorage, restore it
  useEffect(() => {
    try {
      const raw = localStorage.getItem("pendingGoogleSignup");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.email && parsed?.sub) {
          setPendingGoogle(parsed);
          setGoogleUsername(parsed.email.split("@")[0]);
        }
      }
    } catch (e) {
      // ignore
    }
    // also ensure we know adminExist status
    fetchAdminExists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelectRole(desired: "viewer" | "editor" | "admin") {
    if (desired === "admin" && adminExists) {
      flash("error", "An admin account already exists. You cannot select Admin.");
      return;
    }
    setRole(desired);
  }

  function handleSelectGoogleRole(desired: "viewer" | "editor" | "admin") {
    if (desired === "admin" && adminExists) {
      flash("error", "An admin account already exists. You cannot select Admin.");
      return;
    }
    setGoogleRole(desired);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <aside className="hidden lg:flex flex-col justify-center rounded-2xl p-10 bg-gradient-to-br from-sky-600 to-indigo-600 text-white shadow-lg overflow-hidden">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center font-bold">UR</div>
              <div>
                <h3 className="text-lg font-semibold">UnifyReach</h3>
                <p className="text-xs opacity-90">Customer engagement made simple</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold mb-3">Conversations that convert</h2>
          <p className="text-sm opacity-95 mb-6">Centralize messages from SMS, WhatsApp and Email — collaborate, respond fast, and never lose context.</p>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-white/10">✓</span>
              <span>Threaded timelines & contact history</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-white/10">✓</span>
              <span>Schedule messages & automations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-white/10">✓</span>
              <span>Real-time team collaboration</span>
            </li>
          </ul>

          <div className="mt-auto text-xs opacity-90">Privacy-first • Enterprise-ready • Secure by design</div>
        </aside>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 ring-1 ring-black/5">
            <header className="mb-4">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Create your account</h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">Sign up and centralize your customer conversations</p>
            </header>

            <div aria-live="polite" className="min-h-[1.5rem] mb-2">
              {message && (
                <div className={`rounded-md px-3 py-2 text-sm ${message.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                  {message.text}
                </div>
              )}
            </div>

            {/* Default: request email and offer Google SSO */}
            {!otpSent && !createdSuccess && !pendingGoogle && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendOtp();
                }}
                className="space-y-4"
              >
                <label className="block">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Work email</span>
                  <input
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>

                <div className="flex gap-3 items-center">
                  <button
                    type="submit"
                    disabled={busy}
                    className="flex-1 rounded-md px-4 py-2 text-white font-semibold"
                    style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}
                  >
                    {busy ? "Sending…" : "Send OTP"}
                  </button>

                  {googleClientId ? (
                    <div style={{ minWidth: 120 }}>
                      <GoogleOAuthProvider clientId={googleClientId}>
                        <GoogleLogin onSuccess={onGoogleSuccess} onError={onGoogleError} useOneTap={false} />
                      </GoogleOAuthProvider>
                    </div>
                  ) : (
                    <a
                      className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-zinc-200 dark:border-zinc-800 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        flash("error", "Google client id not configured");
                      }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 533.5 544.3" aria-hidden>
                        <path fill="#4285f4" d="M533.5 278.4c0-18.4-1.6-36.1-4.7-53.4H272v101.2h146.9c-6.3 34-25 62.8-53.4 82v68.4h86.5c50.6-46.6 81.5-115.4 81.5-198.2z" />
                        <path fill="#34a853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.6l-86.5-68.4c-24 16.1-54.9 25.6-91.7 25.6-70.6 0-130.3-47.6-151.6-111.6H34.7v69.8C79.2 485.7 168.6 544.3 272 544.3z" />
                        <path fill="#fbbc04" d="M120.4 331.9c-10.9-32.9-10.9-68.2 0-101.1V161h-85.7C9.9 211.3 0 245.9 0 278.4c0 32.6 9.9 67.1 34.7 97.5l85.7-44z" />
                        <path fill="#ea4335" d="M272 109.1c39.4 0 74.7 13.6 102.6 40.4l77-77C405.6 25 345.1 0 272 0 168.6 0 79.2 58.6 34.7 146.1l85.7 44.8C141.7 156.7 201.4 109.1 272 109.1z" />
                      </svg>
                      <span className="text-sm">Google</span>
                    </a>
                  )}
                </div>

                <p className="text-xs text-zinc-400">By continuing you agree to our <a className="text-emerald-600" href="/terms">Terms</a>.</p>
                <p className="text-sm mt-2">
                  Already have an account?{" "}
                  <a href="/auth/login" className="text-blue-600 dark:text-zinc-300 hover:underline">
                    Login
                  </a>
                </p>
              </form>
            )}

            {/* OTP step */}
            {otpSent && !otpVerified && !createdSuccess && !pendingGoogle && (
              <div className="space-y-4">
                <p className="text-sm text-zinc-600 text-center">
                  We sent a 6-digit code to <strong>{email}</strong>. Enter it below to verify your email.
                </p>

                <OtpInputGrid value={otp} onChange={setOtp} />

                <div className="flex items-center justify-between">
                  <button onClick={handleVerifyOtp} className="rounded-md px-4 py-2 bg-emerald-600 text-white font-semibold" disabled={busy}>
                    {busy ? "Verifying…" : "Verify OTP"}
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="text-sm text-zinc-500">{secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Didn’t receive it?"}</div>
                    <button onClick={handleResend} disabled={secondsLeft > 0 || busy} className={`text-sm font-medium ${secondsLeft > 0 ? "text-zinc-400" : "text-emerald-600"}`}>
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showOtpVerifiedMsg && (
              <div className="mt-3 mb-2 rounded-md bg-emerald-50 text-emerald-700 px-3 py-2 text-sm text-center">
                ✓ OTP verified — continue creating your account
              </div>
            )}

            {/* Credentials signup after OTP */}
            {otpVerified && !createdSuccess && !pendingGoogle && (
              <form onSubmit={handleSignup} className="space-y-4 mt-3">
                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="Jane Doe" />
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="Choose a strong password" />
                  <p className="text-xs text-zinc-400 mt-1">Minimum 8 characters.</p>
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Confirm password</label>
                  <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="Re-enter your password" />
                </div>

                <fieldset className="mt-1">
                  <legend className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">Role</legend>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="role" checked={role === "viewer"} onChange={() => handleSelectRole("viewer")} />
                      <span className="text-sm">Viewer</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="role" checked={role === "editor"} onChange={() => handleSelectRole("editor")} />
                      <span className="text-sm">Editor</span>
                    </label>
                    <label className="inline-flex items-center gap-2" title={adminExists ? "An admin already exists" : "Create as admin"}>
                      <input type="radio" name="role" checked={role === "admin"} onChange={() => handleSelectRole("admin")} disabled={Boolean(adminExists)} />
                      <span className="text-sm">Admin</span>
                    </label>
                  </div>
                  {adminExists && (
                    <div className="text-xs text-zinc-500 mt-2">An admin account already exists — creating another admin is disabled. Server still enforces single-admin.</div>
                  )}
                </fieldset>

                <button type="submit" disabled={busy || (role === "admin" && Boolean(adminExists))} className="w-full rounded-md px-4 py-2 text-white font-semibold" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}>
                  {busy ? "Creating…" : "Create account"}
                </button>
              </form>
            )}

            {/* Google completion form (shown after a successful Google sign-in) */}
            {pendingGoogle && !createdSuccess && (
              <form onSubmit={finalizeGoogleSignup} className="space-y-4 mt-3">
                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Email</label>
                  <input value={pendingGoogle.email} readOnly className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-zinc-50" />
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Full name</label>
                  <input value={pendingGoogle.name} readOnly className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-zinc-50" />
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Choose username</label>
                  <input value={googleUsername} onChange={(e) => setGoogleUsername(e.target.value)} required className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2" placeholder="username" />
                </div>

                <fieldset className="mt-1">
                  <legend className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">Role</legend>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="googleRole" checked={googleRole === "viewer"} onChange={() => handleSelectGoogleRole("viewer")} />
                      <span className="text-sm">Viewer</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="googleRole" checked={googleRole === "editor"} onChange={() => handleSelectGoogleRole("editor")} />
                      <span className="text-sm">Editor</span>
                    </label>
                    <label className="inline-flex items-center gap-2" title={adminExists ? "An admin already exists" : "Create as admin"}>
                      <input type="radio" name="googleRole" checked={googleRole === "admin"} onChange={() => handleSelectGoogleRole("admin")} disabled={Boolean(adminExists)} />
                      <span className="text-sm">Admin</span>
                    </label>
                  </div>
                  {adminExists && (
                    <div className="text-xs text-zinc-500 mt-2">An admin account already exists — creating another admin is disabled. Server still enforces single-admin.</div>
                  )}
                </fieldset>

                <div className="flex gap-3">
                  <button type="submit" disabled={busy || (googleRole === "admin" && Boolean(adminExists))} className="flex-1 rounded-md px-4 py-2 text-white font-semibold" style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}>
                    {busy ? "Creating…" : "Finish signup"}
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-zinc-200 dark:border-zinc-800 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    onClick={() => {
                      // cancel pending google flow
                      setPendingGoogle(null);
                      localStorage.removeItem("pendingGoogleSignup");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Created success UI */}
            {createdSuccess && (
              <div className="mt-6 text-center space-y-4">
                <div className="rounded-md bg-green-50 px-4 py-3 text-green-800">Your account has been successfully created.</div>
                <div>
                  <div className="text-sm text-zinc-600">Redirecting to login in {createdCountdown ?? 0}s…</div>
                  <div className="mt-3">
                    <button onClick={() => router.push("/auth/login")} className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/90 text-emerald-700 border border-emerald-200">Go to login page</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
