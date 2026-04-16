"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Message sent!
        </h3>
        <p className="text-text-muted text-sm">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-text-secondary tracking-wide">Name</label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-text-secondary tracking-wide">Business Name</label>
          <input
            type="text"
            placeholder="Your business"
            className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-text-secondary tracking-wide">Email</label>
          <input
            type="email"
            placeholder="you@business.com"
            required
            className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-text-secondary tracking-wide">Phone (optional)</label>
          <input
            type="tel"
            placeholder="(919) 555-1234"
            className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-text-secondary tracking-wide">What do you need?</label>
        <select className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all">
          <option value="">Select a service...</option>
          <option>Website only</option>
          <option>Website + Photography</option>
          <option>Website + Video</option>
          <option>Full package (Web + Video + Photo)</option>
          <option>Not sure yet — let&apos;s talk</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-text-secondary tracking-wide">Tell us about your project</label>
        <textarea
          placeholder="What does your business do? What's your biggest challenge online? Any timeline in mind?"
          className="text-sm px-4 py-3.5 border border-border rounded-xl bg-bg transition-all resize-y min-h-[120px]"
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-white py-4 px-8 rounded-full border-none text-[0.95rem] font-bold cursor-pointer transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(42,140,110,0.25)] mt-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Send Message →
      </button>
    </form>
  );
}
