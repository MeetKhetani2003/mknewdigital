"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Compass } from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PortfolioCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-cta-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
      id="portfolio-cta"
      aria-labelledby="portfolio-cta-heading"
      className="relative bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 border-t border-[#1E293B] overflow-hidden text-center"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Circuit-Style Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full stroke-white/[0.035] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="portfolio-circuit-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#portfolio-circuit-grid)" />
      </svg>

      {/* Circuit Trace Accents (Left & Right Wings) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#2563EB]">
          <path d="M0 50 H60 L90 80 H150" strokeWidth="1.5" />
          <circle cx="150" cy="80" r="3" fill="#2563EB" />
          <path d="M0 130 H40 L70 160 H130" strokeWidth="1.5" />
          <circle cx="130" cy="160" r="2.5" fill="#2563EB" />
          <path d="M30 0 V60 L50 80" strokeWidth="1.5" />
          <circle cx="50" cy="80" r="2" fill="#2563EB" />
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#2563EB]">
          <path d="M200 50 H140 L110 80 H50" strokeWidth="1.5" />
          <circle cx="50" cy="80" r="3" fill="#2563EB" />
          <path d="M200 130 H160 L130 160 H70" strokeWidth="1.5" />
          <circle cx="70" cy="160" r="2.5" fill="#2563EB" />
          <path d="M170 0 V60 L150 80" strokeWidth="1.5" />
          <circle cx="150" cy="80" r="2" fill="#2563EB" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="portfolio-cta-content">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>HAVE AN IDEA?</span>
          </div>

          {/* Heading */}
          <h2
            id="portfolio-cta-heading"
            className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.2]"
          >
            Your Next Project Could Be Our Next Great Work.
          </h2>

          {/* Description */}
          <p className="mt-3.5 text-[14.5px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Inspired by something you&apos;ve seen? Let&apos;s discuss your vision and create a digital experience tailored to your business.
          </p>

          {/* Compact CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => triggerBookServiceModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(37,99,235,0.45)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent text-white border border-white/20 text-[14px] font-semibold transition-all duration-200 hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span>Explore Our Services</span>
              <Compass className="h-4 w-4 text-white/70" />
            </Link>
          </div>

          {/* Reassurance Subtext */}
          <p className="mt-6 text-[12px] text-slate-400">
            Clear milestones • 100% code ownership • Direct developer communication
          </p>

        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA;
