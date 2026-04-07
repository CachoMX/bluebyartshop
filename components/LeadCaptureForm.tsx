"use client";

import { useState } from "react";

export function LeadCaptureForm() {
  const [step, setStep] = useState<"idle" | "loading" | "done">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("loading");
    // Small artificial delay — replace with real API call / Klaviyo / MailChimp endpoint
    await new Promise((r) => setTimeout(r, 900));
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="text-center py-4">
        <div className="text-5xl mb-4">🎉</div>
        <p style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "1.5rem", fontWeight: 700, color: "#1E293B", marginBottom: "0.5rem" }}>
          You&apos;re on the list!
        </p>
        <p style={{ color: "#64748B", fontSize: "0.9375rem" }}>
          Check your inbox — your discount code is on its way.
        </p>
      </div>
    );
  }

  return (
    <form
      id="lead-capture-form"
      data-form="lead-optin"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        name="first_name"
        required
        aria-label="First name"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          flex: "0 0 140px",
          padding: "14px 18px",
          borderRadius: "999px",
          border: "2px solid #E2E8F0",
          fontSize: "0.9375rem",
          fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
          outline: "none",
          color: "#1E293B",
          backgroundColor: "#fff",
        }}
      />
      <input
        type="email"
        name="email"
        required
        aria-label="Email address"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          flex: 1,
          padding: "14px 18px",
          borderRadius: "999px",
          border: "2px solid #E2E8F0",
          fontSize: "0.9375rem",
          fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
          outline: "none",
          color: "#1E293B",
          backgroundColor: "#fff",
        }}
      />
      <button
        type="submit"
        disabled={step === "loading"}
        style={{
          padding: "14px 28px",
          borderRadius: "999px",
          backgroundColor: "#C2410C",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.9375rem",
          fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
          border: "none",
          cursor: step === "loading" ? "wait" : "pointer",
          boxShadow: "0 4px 14px rgba(194,65,12,0.45)",
          whiteSpace: "nowrap",
          opacity: step === "loading" ? 0.75 : 1,
        }}
      >
        {step === "loading" ? "Sending…" : "Claim My Discount →"}
      </button>
    </form>
  );
}
