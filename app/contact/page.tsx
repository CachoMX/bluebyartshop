"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { submitContactFormAction } from "@/app/actions/forms";
import { PendingSubmitButton } from "@/components/PendingSubmitButton";
import { contactSubjects } from "@/lib/contact-subjects";
import { initialFormSubmissionState } from "@/lib/form-submission";
import { BRAND_EMAIL, WHOLESALE_EMAIL } from "@/lib/brand";

const contactInfo = [
  {
    icon: "📧",
    title: "General Support",
    lines: [BRAND_EMAIL, "For questions about orders, account access, and product help"],
    bg: "#EBF5FF",
    color: "#2563EB",
  },
  {
    icon: "📦",
    title: "Wholesale",
    lines: [WHOLESALE_EMAIL, "For school, studio, camp, and bulk-order inquiries"],
    bg: "#FFF4ED",
    color: "#C2410C",
  },
  {
    icon: "🎨",
    title: "Subscriptions",
    lines: ["Manage billing from your account dashboard", "Use the form for any plan or checkout questions"],
    bg: "#E0F7FA",
    color: "#0390AC",
  },
  {
    icon: "⏱️",
    title: "Response Window",
    lines: ["We review every message manually", "Share as much detail as you can so we can help faster"],
    bg: "#ECFDF5",
    color: "#059669",
  },
];

const helpfulLinks = [
  { href: "/account", label: "Open your account" },
  { href: "/subscribe", label: "Compare plans" },
  { href: "/shop", label: "Browse one-time kits" },
  { href: `mailto:${BRAND_EMAIL}`, label: "Email support directly", external: true },
];

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1.5px solid #E2E8F0",
  backgroundColor: "#F8FAFC",
  color: "#1E293B",
  fontSize: "0.9375rem",
  fontFamily: "var(--font-baloo-2), 'Baloo 2', sans-serif",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function ContactPage() {
  const [state, formAction] = useActionState(
    submitContactFormAction,
    initialFormSubmissionState,
  );
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const nameError = state.fieldErrors?.name?.[0];
  const emailError = state.fieldErrors?.email?.[0];
  const subjectError = state.fieldErrors?.subject?.[0];
  const messageError = state.fieldErrors?.message?.[0];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Header */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="blob-a absolute -top-10 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="blob-c absolute -bottom-8 -left-8 w-48 h-48 rounded-full pointer-events-none" style={{ background: "rgba(251,146,60,0.12)" }} />
        <div className="relative">
          <span className="eyebrow" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>Contact</span>
          <h1
            className="hero-title text-white mb-4"
            style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 700 }}
          >
            Say Hello! 👋
          </h1>
          <p className="hero-subtitle max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem" }}>
            We read every message. Whether it&apos;s a question, wholesale inquiry, or just a note — we&apos;re here.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <AnimateIn direction="right" className="lg:col-span-2 space-y-6">
            <div>
              <span className="eyebrow eyebrow-blue">Get in Touch</span>
              <h2
                className="mt-2 mb-3"
                style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "1.75rem", color: "#1E293B", fontWeight: 600 }}
              >
                We&apos;d love to hear from you
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                Have questions about subscriptions, orders, or wholesale? Send a note and we&apos;ll reply as soon as we can.
              </p>
            </div>

            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: item.color, fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", fontSize: "1rem" }}>
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} style={{ color: "#64748B", fontSize: "0.875rem" }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B" }}>
                Helpful Links
              </h4>
              <ul className="space-y-2">
                {helpfulLinks.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        style={{ color: "#2563EB", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        style={{ color: "#2563EB", fontSize: "0.9375rem", fontWeight: 600 }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn direction="left" delay={150} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 16px 40px rgba(0,0,0,0.06)" }}
            >
              {state.status === "success" ? (
                <div role="status" aria-live="polite" className="text-center py-12">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    Message Received
                  </h3>
                  <p style={{ color: "#64748B", marginBottom: "1.5rem", lineHeight: 1.65 }}>
                    {state.message}
                  </p>
                  <button
                    onClick={() => {
                      window.location.assign("/contact");
                    }}
                    className="btn-secondary"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl mb-6"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    Send Us a Message
                  </h3>
                  <form action={formAction} className="space-y-5" noValidate>
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </div>

                    {state.status === "error" && state.message ? (
                      <p
                        className="rounded-2xl px-4 py-3 text-sm"
                        style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}
                        role="alert"
                      >
                        {state.message}
                      </p>
                    ) : null}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Your Name *</label>
                        <input
                          id="contact-name" type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 focus-visible:border-blue-600"
                          autoComplete="name"
                          aria-describedby={nameError ? "contact-name-error" : undefined}
                          aria-invalid={Boolean(nameError)}
                          style={{
                            ...inputStyle,
                            border: `1.5px solid ${nameError ? "#DC2626" : "#E2E8F0"}`,
                          }}
                        />
                        {nameError ? (
                          <p id="contact-name-error" className="mt-2 text-sm" style={{ color: "#B91C1C" }}>
                            {nameError}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Email Address *</label>
                        <input
                          id="contact-email" type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="jane@example.com"
                          className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 focus-visible:border-blue-600"
                          autoComplete="email"
                          aria-describedby={emailError ? "contact-email-error" : undefined}
                          aria-invalid={Boolean(emailError)}
                          style={{
                            ...inputStyle,
                            border: `1.5px solid ${emailError ? "#DC2626" : "#E2E8F0"}`,
                          }}
                        />
                        {emailError ? (
                          <p id="contact-email-error" className="mt-2 text-sm" style={{ color: "#B91C1C" }}>
                            {emailError}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Subject *</label>
                      <select
                        id="contact-subject" name="subject" required
                        value={form.subject} onChange={handleChange}
                        className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 focus-visible:border-blue-600"
                        aria-describedby={subjectError ? "contact-subject-error" : undefined}
                        aria-invalid={Boolean(subjectError)}
                        style={{
                          ...inputStyle,
                          border: `1.5px solid ${subjectError ? "#DC2626" : "#E2E8F0"}`,
                        }}
                      >
                        <option value="">Select a subject...</option>
                        {contactSubjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      {subjectError ? (
                        <p id="contact-subject-error" className="mt-2 text-sm" style={{ color: "#B91C1C" }}>
                          {subjectError}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Message *</label>
                      <textarea
                        id="contact-message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 focus-visible:border-blue-600"
                        aria-describedby={messageError ? "contact-message-error" : undefined}
                        aria-invalid={Boolean(messageError)}
                        style={{
                          ...inputStyle,
                          resize: "none",
                          border: `1.5px solid ${messageError ? "#DC2626" : "#E2E8F0"}`,
                        }}
                      />
                      {messageError ? (
                        <p id="contact-message-error" className="mt-2 text-sm" style={{ color: "#B91C1C" }}>
                          {messageError}
                        </p>
                      ) : null}
                    </div>
                    <PendingSubmitButton
                      label="Send Message"
                      pendingLabel="Sending Message..."
                      className="btn-primary w-full justify-center"
                      style={{ fontSize: "1rem" }}
                    />
                  </form>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
