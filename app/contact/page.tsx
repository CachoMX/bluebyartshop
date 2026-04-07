"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";

const subjects = [
  "General Question",
  "Subscription Support",
  "Order / Shipping Issue",
  "Wholesale Inquiry",
  "Custom Order",
  "Partnership",
  "Press / Media",
  "Other",
];

const contactInfo = [
  { icon: "📧", title: "Email Us", lines: ["hello@bluebyartshop.com", "wholesale@bluebyartshop.com"], bg: "#EBF5FF", color: "#2563EB" },
  { icon: "📱", title: "Call Us", lines: ["(555) 012-3456", "Mon–Fri, 9am–5pm CST"], bg: "#FFF4ED", color: "#C2410C" },
  { icon: "📍", title: "Location", lines: ["Blue By Art Shop — VIXI Co.", "Chicago, IL, USA"], bg: "#E0F7FA", color: "#0390AC" },
  { icon: "🚚", title: "Shipping", lines: ["Orders ship Mon–Fri", "support@bluebyartshop.com"], bg: "#ECFDF5", color: "#059669" },
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
                Have questions about subscriptions, orders, or wholesale? Our team responds within one business day.
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
              <h4 className="font-semibold mb-3" style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B" }}>Follow Us</h4>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="#" aria-label="Follow us on Facebook" className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform hover:scale-110" style={{ backgroundColor: "#1877F2" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Follow us on Instagram" className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* TikTok */}
                <a href="#" aria-label="Follow us on TikTok" className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform hover:scale-110" style={{ backgroundColor: "#010101" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="Subscribe on YouTube" className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform hover:scale-110" style={{ backgroundColor: "#FF0000" }}>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn direction="left" delay={150} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 16px 40px rgba(0,0,0,0.06)" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive", color: "#1E293B", fontWeight: 600 }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "#64748B", marginBottom: "1.5rem", lineHeight: 1.65 }}>
                    Thank you, <strong style={{ color: "#1E293B" }}>{form.name}</strong>! We&apos;ll get back to you at{" "}
                    <strong style={{ color: "#2563EB" }}>{form.email}</strong> within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Your Name *</label>
                        <input
                          id="contact-name" type="text" name="name" required
                          value={form.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Email Address *</label>
                        <input
                          id="contact-email" type="email" name="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="jane@example.com"
                          style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Subject *</label>
                      <select
                        id="contact-subject" name="subject" required
                        value={form.subject} onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      >
                        <option value="">Select a subject...</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold mb-2" style={{ color: "#334155" }}>Message *</label>
                      <textarea
                        id="contact-message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center" style={{ fontSize: "1rem" }}>
                      Send Message →
                    </button>
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
