"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Globe, Compass, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const principles = [
  {
    num: "01",
    title: "Business Understanding",
    desc: "We begin by understanding the business, its goals and the challenges it wants to solve.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Thoughtful Development",
    desc: "We combine design, technology and functionality to create practical digital solutions.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Long-Term Perspective",
    desc: "We believe digital solutions should be built with future improvements, usability and maintainability in mind.",
    icon: Layers,
  },
];

export function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left column reveal
      gsap.fromTo(
        ".who-left-content",
        { opacity: 0, y: 20 },
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

      // Right column visual reveal
      gsap.fromTo(
        ".who-right-visual",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered principles reveal
      gsap.fromTo(
        ".who-principle-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".who-principles-list",
            start: "top 85%",
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
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="relative bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* =========================================
              LEFT COLUMN: Header & Introduction
             ========================================= */}
          <div className="who-left-content lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>WHO WE ARE</span>
              </div>

              {/* Main Heading */}
              <h2
                id="who-we-are-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
              >
                We Turn Business Ideas Into <span className="text-[#2563EB]">Digital Possibilities.</span>
              </h2>

              {/* Description Paragraphs */}
              <div className="mt-4 sm:mt-5 space-y-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#475467]">
                <p>
                  <strong className="text-[#0D1B2A] font-semibold">MK Digital Nexus</strong> is a digital solutions company based in Junagadh, Gujarat, India.
                </p>
                <p>
                  We work with businesses to create meaningful digital experiences through website development, custom software, web applications and digital solutions.
                </p>
                <p>
                  Our approach combines creative thinking, practical technology and an understanding of business requirements. Rather than offering one-size-fits-all solutions, we focus on building digital products that serve a clear purpose.
                </p>
              </div>

              {/* Three Core Principles (Subtle Dividers, No Oversized Cards) */}
              <div className="who-principles-list mt-8 pt-6 border-t border-[#E7EAF0]">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#0D1B2A] mb-4 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>Our Core Principles</span>
                </h3>

                <div className="divide-y divide-[#E7EAF0]">
                  {principles.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.num}
                        className="who-principle-item py-4 first:pt-0 last:pb-0 flex items-start gap-3.5"
                      >
                        <span className="font-mono text-[11.5px] font-semibold text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded mt-0.5 shrink-0">
                          {p.num}
                        </span>
                        <div>
                          <h4 className="text-[14.5px] sm:text-[15px] font-semibold text-[#0D1B2A] leading-snug">
                            {p.title}
                          </h4>
                          <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#667085]">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Authentic Project Visual Composition
             ========================================= */}
          <div className="who-right-visual lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Browser Mockup: Branded Collections */}
              <div className="rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden shadow-[0_16px_40px_-16px_rgba(13,27,42,0.1)]">
                {/* Browser Header */}
                <div className="h-8 bg-[#F8FAFC] border-b border-[#E7EAF0] px-3.5 flex items-center justify-between text-[11px] text-[#667085]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10.5px] text-[#475467] bg-white px-2.5 py-0.5 rounded border border-[#E7EAF0]">
                    <Globe className="h-3 w-3 text-[#2563EB]" />
                    <span>brandedcollections.in</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
                    HTTPS
                  </span>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                  <img
                    src="/images/portfolio/branded-collections.png"
                    alt="Branded Collections - Live production website developed by MK Digital Nexus"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Footer Caption */}
                <div className="p-3 bg-white border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] text-[#667085]">
                  <span className="flex items-center gap-1.5 text-[#0D1B2A] font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                    <span>Verified Production Deployment</span>
                  </span>
                  <span className="font-mono text-[10.5px] text-[#2563EB] font-semibold">
                    Next.js Commerce
                  </span>
                </div>
              </div>

              {/* Secondary Floating Card: Shasuma Spices */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-3/4 rounded-xl border border-[#E7EAF0] bg-white p-2.5 shadow-xl">
                <div className="rounded-lg overflow-hidden border border-[#E7EAF0]">
                  <div className="h-6 bg-[#F8FAFC] border-b border-[#E7EAF0] px-2 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="font-mono text-[9px] text-[#667085] ml-1 truncate">
                      shasumaspices.in
                    </span>
                  </div>
                  <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                    <img
                      src="/images/portfolio/sasuma-spices.png"
                      alt="Shasuma Spices - Live commodity portal by MK Digital Nexus"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-[10.5px] text-[#667085]">
                  <span className="font-semibold text-[#0D1B2A]">Agro-Commodity Portal</span>
                  <span className="text-[#10B981] font-semibold">Live</span>
                </div>
              </div>

              {/* Floating Reassurance Tag */}
              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1B2A] text-white text-[11px] font-semibold shadow-lg border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>Junagadh, Gujarat, India</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;
