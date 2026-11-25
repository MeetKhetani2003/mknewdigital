"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FinalServicesCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".final-cta-content",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="final-project-cta"
      className="relative bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 border-t border-[#1E293B] overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#2563EB]/15 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Circuit-Style Grid & Traces (MK Digital Nexus Identity) */}
      <svg
        className="absolute inset-0 w-full h-full stroke-white/[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="cta-circuit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-circuit-grid)" />
      </svg>

      {/* Circuit Trace Accents (Left & Right Wings) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block w-72 h-72 opacity-25 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#2563EB]">
          <path d="M0 40 H70 L110 80 H170" strokeWidth="1.5" />
          <circle cx="170" cy="80" r="3.5" fill="#2563EB" />
          <path d="M0 130 H50 L80 160 H140" strokeWidth="1.5" />
          <circle cx="140" cy="160" r="3" fill="#2563EB" />
          <path d="M30 0 V60 L50 80" strokeWidth="1.5" />
          <circle cx="50" cy="80" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-72 h-72 opacity-25 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#2563EB]">
          <path d="M200 40 H130 L90 80 H30" strokeWidth="1.5" />
          <circle cx="30" cy="80" r="3.5" fill="#2563EB" />
          <path d="M200 130 H150 L120 160 H60" strokeWidth="1.5" />
          <circle cx="60" cy="160" r="3" fill="#2563EB" />
          <path d="M170 0 V60 L150 80" strokeWidth="1.5" />
          <circle cx="150" cy="80" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="final-cta-content">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Let&apos;s Build Something Great</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.025em] text-white leading-[1.18]">
            Have a Project in Mind? Let&apos;s Make It Happen.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Whether you need a new website, custom business software or a complete digital solution, let&apos;s discuss your requirements and find the right way forward.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14.5px] font-semibold transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(37,99,235,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent text-white border border-white/20 text-[14.5px] font-semibold transition-all duration-200 hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span>Contact Us</span>
              <Mail className="h-4 w-4 text-white/70" />
            </Link>
          </div>

          {/* Subtext reassurance */}
          <p className="mt-6 text-[12px] text-slate-400">
            Clear project scopes • Milestone-based delivery • Direct developer communication
          </p>

        </div>
      </div>
    </section>
  );
}

export default FinalServicesCTA;
