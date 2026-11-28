"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setErrorMsg(data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="newsletter-section" 
      aria-labelledby="newsletter-heading"
      className="relative bg-[#0D1B2A] text-white py-14 sm:py-18 lg:py-20 border-t border-[#1E293B] overflow-hidden text-center"
    >
      {/* Subtle background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span>STAY UPDATED</span>
        </div>

        {/* Heading */}
        <h2
          id="newsletter-heading"
          className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-white leading-[1.2]"
        >
          Stay Ahead of What&apos;s Next.
        </h2>

        {/* Description */}
        <p className="mt-3.5 text-[14.5px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
          Get useful digital insights, practical business tips and technology updates delivered to your inbox.
        </p>

        {/* Form Container */}
        <div className="mt-8 max-w-md mx-auto">
          {success ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[13.5px] flex items-center justify-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Thank you! You are now subscribed to MK Digital Nexus Insights.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} noValidate className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email address..."
                    required
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-white/15 bg-white/10 text-white placeholder-slate-400 text-[14px] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 focus:outline-none"
                    aria-label="Email address for newsletter"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 px-6 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#1D4ED8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                >
                  {loading ? (
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {errorMsg && (
                <div className="text-red-400 text-[12px] flex items-center justify-center gap-1.5 mt-2">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          )}

          {/* Privacy Note */}
          <p className="mt-3 text-[11.5px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-500" />
            <span>Zero spam. Unsubscribe at any time.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default NewsletterSection;
