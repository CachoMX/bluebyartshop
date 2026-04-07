"use client";

import { useState } from "react";

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center hero-gradient"
      >
        <h1
          className="text-5xl text-white mb-4"
          style={{ fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive" }}
        >
          Say Hello!
        </h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Whether it&apos;s a question, a wholesale inquiry, or just a
          note to say hi — we read every message.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2
                className="text-3xl mb-6"
                style={{
                  color: "#2563EB",
                  fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                }}
              >
                Get in Touch
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Have questions about subscriptions, orders, or wholesale? Our team responds
                within one business day.
              </p>
            </div>

            {[
              {
                icon: "📧",
                title: "Email",
                lines: ["hello@bluebyartshop.com", "wholesale@bluebyartshop.com"],
              },
              {
                icon: "📱",
                title: "Phone",
                lines: ["(555) 012-3456", "Mon–Fri, 9am–5pm CST"],
              },
              {
                icon: "📍",
                title: "Location",
                lines: ["Blue By Art Shop — VIXI Co.", "Chicago, IL, USA"],
              },
              {
                icon: "🚚",
                title: "Shipping Support",
                lines: ["Orders ship Mon–Fri", "support@bluebyartshop.com"],
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: "#D4F7F7" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    className="font-semibold text-lg mb-1"
                    style={{ color: "#2563EB" }}
                  >
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <h4
                className="font-semibold text-lg mb-3"
                style={{ color: "#2563EB" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: "📘", label: "Facebook" },
                  { icon: "📸", label: "Instagram" },
                  { icon: "🎵", label: "TikTok" },
                  { icon: "▶️", label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    title={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-110"
                    style={{ backgroundColor: "#D4F7F7" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border"
              style={{ borderColor: "#e2e8f0" }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3
                    className="text-3xl mb-4"
                    style={{
                      color: "#2563EB",
                      fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out, {form.name}! We&apos;ll get back to you at{" "}
                    <strong>{form.email}</strong> within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: "#0390AC" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl mb-6"
                    style={{
                      color: "#2563EB",
                      fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
                    }}
                  >
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition"
                          style={{ borderColor: "#e2e8f0" }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition"
                          style={{ borderColor: "#e2e8f0" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-gray-800 focus:outline-none focus:ring-2 transition"
                        style={{ borderColor: "#e2e8f0" }}
                      >
                        <option value="">Select a subject...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition resize-none"
                        style={{ borderColor: "#e2e8f0" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-[1.02] hover:opacity-90"
                      style={{ backgroundColor: "#FB923C" }}
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
