"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Polished Signup + OTP flow for a customer engagement app
 * - visually distinct marketing + auth card
 * - accessible 6-digit OTP input with paste support
 * - 60s timer + resend
 * - OTP verified message shown 3s, then reveal signup form
 * - final Create Account shows success message + "Go to login page" CTA
 */

function OtpInputGrid({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputs = Array.from({ length: 6 }, (_, i) => i);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const idx = value.length;
    if (idx < 6) refs.current[idx]?.focus();
  }, [value]);

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    onChange(pasted.padEnd(6, "").slice(0, 6));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const ch = e.target.value.replace(/\D/g, "").slice(-1);
    const arr = value.split("");
    arr[i] = ch || "";
    const joined = arr.join("").slice(0, 6);
    onChange(joined);
    if (ch && i < 5) refs.current[i + 1]?.focus();
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    if (e.key === "Backspace" && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < 5) {
      refs.current[i + 1]?.focus();
    }
  }

  return (
    <div className="flex gap-3 justify-center" onPaste={handlePaste}>
      {inputs.map((i) => (
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
          className="w-12 h-14 rounded-lg border border-zinc-200 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white"
        />
      ))}
    </div>
  );
}

export default function SignupPage() {
  const router = useRouter();

  // Step states
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpVerifiedMsg, setShowOtpVerifiedMsg] = useState(false);

  // timer/resend
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timerRef = useRef<number | null>(null);

  // signup fields
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState<"viewer" | "editor" | "admin">("viewer");

  // UI state
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [createdSuccess, setCreatedSuccess] = useState(false);

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) {
            window.clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [secondsLeft]);

  // helper to show ephemeral messages
  function flash(type: "error" | "success", text: string, ms = 4000) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), ms);
  }

  // send OTP
  async function handleSendOtp() {
    setMessage(null);
    if (!email || !/\S+@\S+\.\S+/.test(email)) return flash("error", "Please enter a valid email address.");
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

  // verify OTP
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
        // show the verification banner for 3s, then hide and reveal signup form
        setTimeout(() => setShowOtpVerifiedMsg(false), 3000);
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error while verifying OTP.");
    } finally {
      setBusy(false);
    }
  }

  // final signup
  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    if (!otpVerified) return flash("error", "Please verify your email first.");
    if (!name?.trim()) return flash("error", "Please enter your full name.");
    if (password.length < 8) return flash("error", "Password must be at least 8 characters.");
    if (password !== password2) return flash("error", "Passwords do not match.");

    setBusy(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        flash("error", data?.error ?? "Signup failed.");
      } else {
        setCreatedSuccess(true);
        flash("success", "Your account has been created successfully.");
      }
    } catch (err) {
      console.error(err);
      flash("error", "Network error during signup.");
    } finally {
      setBusy(false);
    }
  }

  // resend
  async function handleResend() {
    if (secondsLeft > 0) return;
    await handleSendOtp();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Brand + story */}
        <aside className="hidden lg:flex flex-col justify-center rounded-2xl p-10 bg-gradient-to-br from-emerald-600 to-sky-600 text-white shadow-lg overflow-hidden">
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

        {/* Right: Auth card */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 ring-1 ring-black/5">
            <header className="mb-4">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Create your account</h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">Sign up and centralize your customer conversations</p>
            </header>

            {/* ephemeral messages */}
            <div aria-live="polite" className="min-h-[1.5rem] mb-2">
              {message && (
                <div
                  className={`rounded-md px-3 py-2 text-sm ${
                    message.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>

            {/* Step 1: enter email or Google */}
            {!otpSent && !createdSuccess && (
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

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={busy}
                    className="flex-1 rounded-md px-4 py-2 text-white font-semibold"
                    style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)" }}
                  >
                    {busy ? "Sending…" : "Create account"}
                  </button>

                  <a
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 border border-zinc-200 dark:border-zinc-800 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    href="/api/auth/signin/google"
                  >
                    {/* small Google icon */}
                    <svg className="w-4 h-4" viewBox="0 0 533.5 544.3" aria-hidden>
                      <path fill="#4285f4" d="M533.5 278.4c0-18.4-1.6-36.1-4.7-53.4H272v101.2h146.9c-6.3 34-25 62.8-53.4 82v68.4h86.5c50.6-46.6 81.5-115.4 81.5-198.2z"/>
                      <path fill="#34a853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.6l-86.5-68.4c-24 16.1-54.9 25.6-91.7 25.6-70.6 0-130.3-47.6-151.6-111.6H34.7v69.8C79.2 485.7 168.6 544.3 272 544.3z"/>
                      <path fill="#fbbc04" d="M120.4 331.9c-10.9-32.9-10.9-68.2 0-101.1V161h-85.7C9.9 211.3 0 245.9 0 278.4c0 32.6 9.9 67.1 34.7 97.5l85.7-44z"/>
                      <path fill="#ea4335" d="M272 109.1c39.4 0 74.7 13.6 102.6 40.4l77-77C405.6 25 345.1 0 272 0 168.6 0 79.2 58.6 34.7 146.1l85.7 44.8C141.7 156.7 201.4 109.1 272 109.1z"/>
                    </svg>
                    <span className="text-sm">Google</span>
                  </a>
                </div>

                <p className="text-xs text-zinc-400">By continuing you agree to our <a className="text-emerald-600" href="/terms">Terms</a>.</p>
               <p className="text-1xl text-b">Already have an account?<a
                href="/auth/login"
                className="flex text-blue-600 dark:text-zinc-300 hover:underline"
              >
               Login
              </a></p>
              </form>
            )}

            {/* Step 2: OTP entry */}
            {otpSent && !otpVerified && !createdSuccess && (
              <div className="space-y-4">
                <p className="text-sm text-zinc-600 text-center">
                  We sent a 6-digit code to <strong>{email}</strong>. Enter it below to verify your email.
                </p>

                <OtpInputGrid value={otp} onChange={setOtp} />

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleVerifyOtp}
                    className="rounded-md px-4 py-2 bg-emerald-600 text-white font-semibold"
                    disabled={busy}
                  >
                    {busy ? "Verifying…" : "Verify OTP"}
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="text-sm text-zinc-500">
                      {secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Didn’t receive it?"}
                    </div>
                    <button
                      onClick={handleResend}
                      disabled={secondsLeft > 0 || busy}
                      className={`text-sm font-medium ${secondsLeft > 0 ? "text-zinc-400" : "text-emerald-600"}`}
                    >
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* OTP verified banner */}
            {showOtpVerifiedMsg && (
              <div className="mt-3 mb-2 rounded-md bg-emerald-50 text-emerald-700 px-3 py-2 text-sm text-center">
                ✓ OTP verified — continue creating your account
              </div>
            )}

            {/* Step 3: full signup form */}
            {otpVerified && !createdSuccess && (
              <form onSubmit={handleSignup} className="space-y-4 mt-3">
                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Full name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2"
                    placeholder="Choose a strong password"
                  />
                  <p className="text-xs text-zinc-400 mt-1">Minimum 8 characters.</p>
                </div>

                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300">Confirm password</label>
                  <input
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2"
                    placeholder="Re-enter your password"
                  />
                </div>

                <fieldset className="mt-1">
                  <legend className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">Role</legend>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="role" checked={role === "viewer"} onChange={() => setRole("viewer")} />
                      <span className="text-sm">Viewer</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="role" checked={role === "editor"} onChange={() => setRole("editor")} />
                      <span className="text-sm">Editor</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="role" checked={role === "admin"} onChange={() => setRole("admin")} />
                      <span className="text-sm">Admin</span>
                    </label>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-md px-4 py-2 text-white font-semibold"
                  style={{ background: "linear-gradient(90deg,#06b6d4,#7c3aed)" }}
                >
                  {busy ? "Creating…" : "Create account"}
                </button>
              </form>
            )}

            {/* final success */}
            {createdSuccess && (
              <div className="mt-6 text-center space-y-4">
                <div className="rounded-md bg-green-50 px-4 py-3 text-green-800">Your account has been successfully created.</div>
                <div>
                  <button
                    onClick={() => router.push("/auth/login")}
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/90 text-emerald-700 border border-emerald-200"
                  >
                    Go to login page
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
