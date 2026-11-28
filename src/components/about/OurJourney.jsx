"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sparkles, Code2, Layers, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const journeyPhases = [
  {
    phase: "Phase 01",
    tag: "Core Foundations",
    title: "Client-First Web Engineering",
    desc: "Started in Junagadh, Gujarat, with a focus on custom code, zero template bloat, and practical website development tailored directly to client business needs.",
    icon: Code2,
    highlight: "Custom Code • Clean Architecture",
  },
  {
    phase: "Phase 02",
    tag: "Capability Expansion",
    title: "E-Commerce & Digital Commerce",
    desc: "Expanded into direct-to-consumer online storefronts, inventory management systems, and seamless payment gateway integrations for retail businesses.",
    icon: Layers,
    highlight: "Storefronts • Payment Gateways",
  },
  {
    phase: "Phase 03",
    tag: "Full-Stack Software",
    title: "Custom Web Applications",
    desc: "Deepened engineering into bespoke software, business dashboards, and specialized digital platforms built around specific operational workflows.",
    icon: Cpu,
    highlight: "Interactive Portals • Workflow Tools",
  },
  {
    phase: "Phase 04",
    tag: "Continuous Evolution",
    title: "Always Evolving. Always Building.",
    desc: "Continuously adopting modern Edge frameworks, sub-second performance standards, and purposeful technologies that help businesses stay ahead.",
    icon: Sparkles,
    highlight: "Next.js Edge • Modern Standards",
  },
];

export function OurJourney() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".journey-header",
        { opacity: 0, y: 18 },
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

      // Phase cards reveal
      gsap.fromTo(
        ".journey-step",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".journey-timeline-track",
            start: "top 82%",
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
      id="our-journey"
      aria-labelledby="journey-heading"
      className="relative bg-[#F8FAFC] py-14 sm:py-18 lg:py-22 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="journey-header max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>OUR JOURNEY</span>
          </div>

          {/* Heading */}
          <h2
            id="journey-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
          >
            Growing Through Ideas, Innovation & <span className="text-[#2563EB]">Digital Experiences.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
            Every project, challenge and collaboration contributes to our journey. We continue to evolve by exploring new technologies, solving business problems and creating meaningful digital experiences.
          </p>

          {/* Editorial Growth Badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#0D1B2A] bg-white px-3 py-1 rounded-md border border-[#E7EAF0]">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <span>Always Evolving. Always Building.</span>
          </div>
        </div>

        {/* =========================================================================
            EDITORIAL PROGRESSION TIMELINE (Zero Fabricated Dates, 100% Genuine)
            ========================================================================= */}
        <div className="journey-timeline-track relative">
          
          {/* Connecting Track Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-[#E7EAF0]" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {journeyPhases.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.phase}
                  className="journey-step relative rounded-2xl border border-[#E7EAF0] bg-white p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_-10px_rgba(13,27,42,0.08)] group"
                >
                  <div>
                    {/* Top Node Indicator */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1F5F9]">
                      <div className="flex items-center gap-2">
                        <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#2563EB]/10 border border-[#2563EB]/25 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-mono text-[11px] font-bold text-[#2563EB]">
                          {item.phase}
                        </span>
                      </div>

                      <span className="text-[10.5px] font-semibold text-[#667085] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E7EAF0]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0D1B2A] tracking-tight group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[#667085]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight Bullet */}
                  <div className="mt-6 pt-3.5 border-t border-[#F1F5F9] flex items-center gap-1.5 text-[11.5px] text-[#475467]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurJourney;
