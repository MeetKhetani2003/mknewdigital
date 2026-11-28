"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  MessageSquare, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  LifeBuoy, 
  Sparkles,
  Layers
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const commitments = [
  {
    num: "01",
    title: "Clear Communication",
    desc: "We value transparent discussions, clear expectations and regular project updates.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Understanding Your Business",
    desc: "We take time to understand your requirements before deciding how to approach your project.",
    icon: Search,
  },
  {
    num: "03",
    title: "Quality-Focused Execution",
    desc: "We pay attention to design, functionality, usability and technical implementation.",
    icon: CheckCircle2,
  },
  {
    num: "04",
    title: "Responsible Delivery",
    desc: "We focus on agreed project requirements, realistic expectations and proper testing before delivery.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Continued Support",
    desc: "We can assist with maintenance, improvements and technical support according to the agreed service arrangement.",
    icon: LifeBuoy,
  },
];

export function OurCommitment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left statement reveal
      gsap.fromTo(
        ".commitment-statement",
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

      // Staggered commitments reveal
      gsap.fromTo(
        ".commitment-row",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".commitments-list-container",
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
      id="our-commitment"
      aria-labelledby="commitment-heading"
      className="relative bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL COMMITMENT LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* =========================================
              LEFT COLUMN: Statement & Craftsmanship Visual
             ========================================= */}
          <div className="commitment-statement lg:col-span-5 lg:sticky lg:top-28">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>OUR COMMITMENT</span>
            </div>

            {/* Heading */}
            <h2
              id="commitment-heading"
              className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
            >
              Every Project Deserves <span className="text-[#2563EB]">Our Best.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We believe a successful digital project is built on more than technology. It requires clear communication, thoughtful execution and a commitment to understanding what each business actually needs.
            </p>

            {/* Subtle Craftsmanship Card */}
            <div className="mt-8 rounded-2xl border border-[#E7EAF0] bg-[#F8FAFC] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#0D1B2A] mb-2.5">
                <Sparkles className="h-4 w-4 text-[#2563EB]" />
                <span>Working Principles</span>
              </div>
              <p className="text-[13px] text-[#667085] leading-relaxed mb-4">
                We approach digital development with structured milestone reviews, transparent communication, and full code handover upon delivery.
              </p>

              <div className="space-y-2 pt-3 border-t border-[#E7EAF0]">
                <div className="flex items-center gap-2 text-[12px] text-[#475467]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                  <span>Direct developer collaboration with no middlemen</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#475467]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                  <span>100% code repository & asset ownership</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#475467]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                  <span>Transparent milestone-based progress tracking</span>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Five Commitments (Compact Numbered Rows)
             ========================================= */}
          <div className="lg:col-span-7">
            <div className="commitments-list-container divide-y divide-[#E7EAF0] border-t border-b border-[#E7EAF0] bg-white">
              {commitments.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.num}
                    className="commitment-row py-5 sm:py-6 first:pt-2 last:pb-2 group transition-all duration-200"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Number Indicator */}
                      <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-2.5 py-1 rounded-md shrink-0 mt-0.5 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                        {item.num}
                      </span>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-[#2563EB] shrink-0" />
                          <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0D1B2A] tracking-tight group-hover:text-[#2563EB] transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#667085]">
                          {item.desc}
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

export default OurCommitment;
