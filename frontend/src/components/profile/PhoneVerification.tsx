// components/profile/PhoneVerification.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Profile = {
  phoneNumber?: string | null; // e.g. +919876543210
  phoneVerified?: boolean;
  phoneVerifiedAt?: string;
  countryCode?: string | null; // e.g. IN, US
  countryName?: string | null;
  // ... other fields
};

type Props = {
  profile: Profile;
  onUserUpdate?: (user: any) => void; // optional callback called with server response user when phone verified
};

/**
 * Minimal mapping of country code => { dial, length }.
 */
const COUNTRY_PHONE_RULES: Record<string, { dial: string; length: number }> = {
  IN: { dial: "+91", length: 10 },
  US: { dial: "+1", length: 10 },
  CA: { dial: "+1", length: 10 },
  GB: { dial: "+44", length: 10 },
  AU: { dial: "+61", length: 9 },
  BD: { dial: "+880", length: 10 },
  NP: { dial: "+977", length: 10 },
  PK: { dial: "+92", length: 10 },
  SG: { dial: "+65", length: 8 },
  // add more as needed...
};

const DEFAULT_RULE = { dial: "+1", length: 10 };

// OTP length single source of truth
const OTP_LEN = 4;

function onlyDigits(s: string) {
  return s.replace(/\D/g, "");
}

export default function PhoneVerification({ profile, onUserUpdate }: Props) {
  const initialCountry = profile?.countryCode ?? "IN";
  const rule = COUNTRY_PHONE_RULES[initialCountry] ?? DEFAULT_RULE;

  const [countryCode, setCountryCode] = useState(initialCountry);
  const [dialCode, setDialCode] = useState(rule.dial);
  const [digitCount, setDigitCount] = useState(rule.length);

  const [digits, setDigits] = useState<string[]>(() => Array(rule.length).fill("")); // local number digits boxes
  const digitInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [phoneE164, setPhoneE164] = useState<string | null>(profile?.phoneNumber ?? null);
  const [sending, setSending] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpExpiry, setOtpExpiry] = useState<number | null>(null);

  // otp boxes use OTP_LEN
  const [otpDigits, setOtpDigits] = useState<string[]>(() => Array(OTP_LEN).fill(""));
  const otpInputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [verifying, setVerifying] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  // if profile.phoneNumber exists, show it verified or not
  useEffect(() => {
    if (profile?.phoneVerified) {
      setPhoneE164(profile.phoneNumber ?? null);
      setMessage({ text: "Your phone number is verified", ok: true });
    } else {
      // clear if not verified
    }
  }, [profile]);

  // When countryCode changes, update dial and digit count
  useEffect(() => {
    const r = COUNTRY_PHONE_RULES[countryCode] ?? DEFAULT_RULE;
    setDialCode(r.dial);
    setDigitCount(r.length);
    setDigits((prev) => {
      const next = Array(r.length).fill("");
      for (let i = 0; i < Math.min(prev.length, next.length); i++) next[i] = prev[i];
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  // helper to build local-number string
  const localNumber = useMemo(() => digits.join(""), [digits]);

  // compute if local number complete
  const localComplete = localNumber.length === digitCount;

  function onDigitChange(i: number, val: string) {
    const d = onlyDigits(val).slice(0, 1); // only one digit per box
    setDigits((prev) => {
      const next = prev.slice();
      next[i] = d;
      return next;
    });
    if (d && i < digitCount - 1) {
      digitInputsRef.current[i + 1]?.focus();
    }
  }

  function onDigitKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && digits[i] === "" && i > 0) {
      digitInputsRef.current[i - 1]?.focus();
    }
  }

  // Send OTP
// Replace the sendOtp() section's fetch handling with this small addition to surface debugOtp (dev only)
async function sendOtp() {
  if (!localComplete) {
    setMessage({ text: `Enter ${digitCount} digits`, ok: false });
    return;
  }
  const e164 = `${dialCode}${localNumber}`;
  setSending(true);
  setMessage(null);
  try {
    const res = await fetch("/api/phone/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ phone: e164 }),
    });
    const json = await res.json().catch(() => null);
    if (!res.ok || json?.error) {
      setMessage({ text: json?.error || "Failed to send OTP", ok: false });
      setOtpSent(false);
    } else {
      setMessage({ text: "OTP sent — check your phone (or console in dev)", ok: true });
      setOtpSent(true);
      setOtpExpiry(Date.now() + 5 * 60 * 1000);
      setPhoneE164(e164);
      setTimeout(() => otpInputsRef.current[0]?.focus(), 120);

      // DEV convenience: if server returned debugOtp, show it in console and put a friendly message
      if (json?.debugOtp) {
        console.debug("[PhoneVerification] DEBUG OTP (dev):", json.debugOtp);
        setMessage({ text: `OTP sent (dev:${json.debugOtp}). Check console.`, ok: true });
      } else {
        console.debug("[PhoneVerification] OTP sent", e164);
      }
    }
  } catch (err) {
    console.error(err);
    setMessage({ text: "Network error sending OTP", ok: false });
    setOtpSent(false);
  } finally {
    setSending(false);
  }
}


  // OTP input handlers
  function onOtpChange(i: number, val: string) {
    const digit = onlyDigits(val).slice(0, 1);
    setOtpDigits((prev) => {
      const next = prev.slice();
      next[i] = digit;
      return next;
    });
    if (digit && i < OTP_LEN - 1) {
      otpInputsRef.current[i + 1]?.focus();
    }
  }
  function onOtpKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && otpDigits[i] === "" && i > 0) {
      otpInputsRef.current[i - 1]?.focus();
    }
    if (e.key === "Enter") {
      tryVerifyOtp();
    }
  }

  const otpValue = useMemo(() => otpDigits.join(""), [otpDigits]);

 // Replace your tryVerifyOtp() with this improved version:
async function tryVerifyOtp() {
  if (!phoneE164) {
    setMessage({ text: "Send OTP first", ok: false });
    return;
  }
  if (otpValue.length !== OTP_LEN) {
    setMessage({ text: `Enter ${OTP_LEN}-digit code`, ok: false });
    return;
  }
  setVerifying(true);
  setMessage(null);

  try {
    const res = await fetch("/api/phone/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ phone: phoneE164, otp: otpValue }),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok || json?.error) {
      // show server-provided error if present
      const errMsg = json?.error || json?.message || `HTTP ${res.status}`;
      setMessage({ text: errMsg, ok: false });
      setOtpDigits(Array(OTP_LEN).fill(""));
      otpInputsRef.current[0]?.focus();
      return;
    }

    // Success path: server may return several shapes:
    // 1) json.user -> full canonical user object (ideal)
    // 2) json.userPatch -> minimal patch { profile: { phoneNumber, phoneVerified... } }
    // 3) nothing -> fallback to refetch /api/me
    setMessage({ text: "Phone number verified", ok: true });
    setOtpSent(false);
    setOtpDigits(Array(OTP_LEN).fill(""));
    setPhoneE164(phoneE164); // optimistic UI update

    // If server returned a full user object, deliver it to parent
    if (json?.user && onUserUpdate) {
      try {
        onUserUpdate(json.user);
        console.debug("[PhoneVerification] forwarded full user to parent", json.user);
        return;
      } catch (e) {
        console.warn("[PhoneVerification] onUserUpdate threw for json.user", e);
      }
    }

    // If server returned a userPatch (or userPatch-like), convert to expected shape and deliver
    if (json?.userPatch && onUserUpdate) {
      try {
        // Normalize minimal patch into a user-shaped object the parent can consume.
        // Parent's applyUpdatedUserFromChild expects either a full user (with id/email) OR will refetch /api/me.
        // We provide a small object with profile so normalizeUser will pick it up.
        const patch = json.userPatch;
        const syntheticUser = {
          // keep minimal but include profile
          id: (patch?.id as any) ?? undefined,
          email: (patch?.email as any) ?? undefined,
          name: (patch?.name as any) ?? undefined,
          profile: patch.profile ?? { phoneNumber: phoneE164, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() },
        };
        onUserUpdate(syntheticUser);
        console.debug("[PhoneVerification] forwarded userPatch to parent", syntheticUser);
        return;
      } catch (e) {
        console.warn("[PhoneVerification] onUserUpdate threw for json.userPatch", e);
      }
    }

    // If server didn't return user or userPatch, attempt to fetch canonical /api/me and pass it to parent
    if (onUserUpdate) {
      try {
        const r = await fetch("/api/me", { credentials: "include", cache: "no-store" });
        if (r.ok) {
          const j = await r.json().catch(() => null);
          if (j?.user) {
            onUserUpdate(j.user);
            console.debug("[PhoneVerification] fetched /api/me and delivered user to parent");
            return;
          }
        }
      } catch (err) {
        console.warn("[PhoneVerification] fallback /api/me failed", err);
      }

      // As a last resort, pass a minimal patch so parent can merge and UI updates optimistically
      try {
        onUserUpdate({
          profile: { phoneNumber: phoneE164, phoneVerified: true, phoneVerifiedAt: new Date().toISOString() },
        });
        console.debug("[PhoneVerification] delivered minimal patch to parent");
        return;
      } catch (err) {
        console.warn("[PhoneVerification] onUserUpdate final fallback threw", err);
      }
    }

    // No parent callback — we already set local phoneE164 and message so modal shows verified state
  } catch (err) {
    console.error("[PhoneVerification] verify network error", err);
    setMessage({ text: "Network error verifying OTP", ok: false });
  } finally {
    setVerifying(false);
  }
}



  function resetOtp() {
    setOtpSent(false);
    setOtpDigits(Array(OTP_LEN).fill(""));
    setOtpExpiry(null);
  }

  // handle paste into first box for convenience
  async function handlePasteNumber(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("Text");
    const only = onlyDigits(text).slice(0, digitCount);
    if (only.length === digitCount) {
      const arr = only.split("");
      setDigits(arr);
      // auto send OTP
      setTimeout(() => {
        sendOtp();
      }, 80);
    }
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">📞</div>
          <div>
            <div className="font-medium">{phoneE164 ?? `${dialCode} • not set`}</div>
            <div className={`text-xs ${profile?.phoneVerified ? "text-green-600" : "text-slate-400"}`}>
              {profile?.phoneVerified ? `verified • ${profile.phoneVerifiedAt ? new Date(profile.phoneVerifiedAt).toLocaleString() : ""}` : "not verified"}
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-500">{/* placeholder for update text */}</div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">
        {/* country selector & local number boxes */}
        <div className="flex items-center gap-3">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="rounded border px-2 py-1"
          >
            {/* simple options from mapping */} 
            {Object.keys(COUNTRY_PHONE_RULES).map((cc) => (
              <option key={cc} value={cc}>
                {cc} {COUNTRY_PHONE_RULES[cc].dial}
              </option>
            ))}
            <option value="OTHER">Other</option>
          </select>

          <div className="flex gap-2 items-center">
            <div className="px-3 py-2 rounded border bg-slate-50">{dialCode}</div>

            <div onPaste={handlePasteNumber} className="flex gap-1">
              {Array.from({ length: digitCount }).map((_, i) => (
                <input
                  key={i}
                  ref={(el) => (digitInputsRef.current[i] = el)}
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[i] ?? ""}
                  onChange={(e) => onDigitChange(i, e.target.value)}
                  onKeyDown={(e) => onDigitKeyDown(i, e)}
                  className="w-9 h-9 rounded border text-center"
                  aria-label={`digit-${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="ml-auto">
            {!otpSent ? (
              <button
                className={`px-3 py-1 rounded ${localComplete ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}
                onClick={() => sendOtp()}
                disabled={!localComplete || sending}
              >
                {sending ? "Sending..." : "Send OTP"}
              </button>
            ) : (
              <button className="px-3 py-1 rounded bg-slate-50 text-slate-600" onClick={() => resetOtp()}>
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* OTP input section */}
        {otpSent && (
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {Array.from({ length: OTP_LEN }).map((_, i) => (
                <input
                  key={i}
                  ref={(el) => (otpInputsRef.current[i] = el)}
                  inputMode="numeric"
                  maxLength={1}
                  value={otpDigits[i]}
                  onChange={(e) => onOtpChange(i, e.target.value)}
                  onKeyDown={(e) => onOtpKeyDown(i, e)}
                  className="w-10 h-10 text-center rounded border"
                  aria-label={`otp-${i + 1}`}
                />
              ))}
            </div>

            <div>
              <button
                className="px-3 py-1 rounded bg-green-600 text-white"
                onClick={() => tryVerifyOtp()}
                disabled={verifying}
              >
                {verifying ? "Verifying..." : "Verify OTP"}
              </button>
            </div>

            <div className="text-sm text-slate-500">
              {otpExpiry ? `Expires in ${Math.max(0, Math.ceil((otpExpiry - Date.now()) / 1000))}s` : ""}
            </div>
          </div>
        )}

        {/* messages */}
        {message && (
          <div className={`text-sm ${message.ok ? "text-green-600" : "text-rose-600"}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
