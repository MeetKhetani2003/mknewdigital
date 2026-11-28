"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Target, Sparkles, ShieldCheck, HeartHandshake, Globe, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const beliefs = [
  {
    num: "01",
    title: "Purpose Before Technology",
    desc: "We first understand the problem and business objective, then choose the appropriate technology to solve it.",
    icon: Target,
  },
  {
    num: "02",
    title: "Simplicity Creates Better Experiences",
    desc: "We believe digital products should be intuitive, easy to navigate and practical to use.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Quality in Every Detail",
    desc: "From the first design decision to the final development stage, we value consistency, usability and attention to detail.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Relationships Beyond Projects",
    desc: "We value transparent communication, collaboration and long-term relationships with the businesses we work with.",
    icon: HeartHandshake,
  },
];

export function OurPhilosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left statement reveal
      gsap.fromTo(
        ".philosophy-statement",
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

      // Staggered principles rows reveal
      gsap.fromTo(
        ".philosophy-row",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".philosophy-rows-container",
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
      id="our-philosophy"
      aria-labelledby="philosophy-heading"
      className="relative bg-[#F8FAFC] py-14 sm:py-18 lg:py-22 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL PHILOSOPHY LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* =========================================
              LEFT COLUMN: Statement & Supporting Visual
             ========================================= */}
          <div className="philosophy-statement lg:col-span-5 lg:sticky lg:top-28">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>WHAT WE BELIEVE</span>
            </div>

            {/* Heading */}
            <h2
              id="philosophy-heading"
              className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
            >
              Good Technology Starts With the <span className="text-[#2563EB]">Right Thinking.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We believe technology should solve meaningful problems, simplify business operations and create better experiences. Every digital solution should have a purpose beyond simply looking good.
            </p>

            {/* Supporting Craftsmanship Visual Card */}
            <div className="mt-8 rounded-2xl border border-[#E7EAF0] bg-white p-4 sm:p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F1F5F9] text-[11.5px]">
                <div className="flex items-center gap-2 font-medium text-[#0D1B2A]">
                  <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                  <span>Digital Craftsmanship</span>
                </div>
                <span className="font-mono text-[10.5px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
                  Verified Standard
                </span>
              </div>

              {/* Compact Authentic Project Screenshot Mockup */}
              <div className="relative rounded-lg overflow-hidden border border-[#E7EAF0] aspect-[16/8.5] bg-[#F1F5F9] group">
                <img
                  src="/images/portfolio/somnathnx.png"
                  alt="Verified MK Digital Nexus development architecture"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[10.5px]">
                  <span className="font-semibold">Purpose-Built Architecture</span>
                  <span className="font-mono text-[9.5px] bg-[#2563EB] px-2 py-0.5 rounded">Next.js Edge</span>
                </div>
              </div>

              <div className="mt-3.5 flex items-center justify-between text-[11.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                  <span>Substance over surface decoration</span>
                </span>
                <span className="font-semibold text-[#0D1B2A]">100% Purpose-Driven</span>
              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Four Core Beliefs (Compact Numbered Rows)
             ========================================= */}
          <div className="lg:col-span-7">
            <div className="philosophy-rows-container divide-y divide-[#E7EAF0] border-t border-b border-[#E7EAF0] bg-white rounded-2xl px-6 sm:px-8 py-2 shadow-xs border border-[#E7EAF0]">
              {beliefs.map((belief) => {
                const Icon = belief.icon;

                return (
                  <div
                    key={belief.num}
                    className="philosophy-row py-6 first:pt-4 last:pb-4 group transition-all duration-200"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Number Pill */}
                      <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-2.5 py-1 rounded-md shrink-0 mt-0.5 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                        {belief.num}
                      </span>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-[#2563EB] shrink-0" />
                          <h3 className="text-[16px] sm:text-[17.5px] font-bold text-[#0D1B2A] tracking-tight group-hover:text-[#2563EB] transition-colors leading-snug">
                            {belief.title}
                          </h3>
                        </div>

                        <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#667085]">
                          {belief.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurPhilosophy;
