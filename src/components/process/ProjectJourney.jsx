"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  Rocket 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const journeyStages = [
  {
    number: "01",
    title: "Discover",
    tagline: "Scope & Objectives",
    desc: "Understand your business, objectives, audience and project requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    tagline: "Architecture & Stack",
    desc: "Define the project scope, features, technology and development roadmap.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design",
    tagline: "UX / UI Experience",
    desc: "Plan the user experience and create the visual direction for your solution.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    tagline: "Clean Full-Stack Code",
    desc: "Build the approved solution with functionality, responsiveness and technical quality in mind.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    tagline: "QA & Deployment",
    desc: "Test the final product, prepare deployment and provide the agreed post-launch support.",
    icon: Rocket,
  },
];

export function ProjectJourney() {
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
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Connecting line expansion animation
      gsap.fromTo(
        ".journey-track-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".journey-timeline-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Progressive reveal of horizontal stages
      gsap.fromTo(
        ".journey-stage-node",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".journey-timeline-container",
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
      id="project-journey"
      aria-labelledby="project-journey-heading"
      className="relative bg-[#F8FAFC] py-14 sm:py-18 lg:py-22 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="journey-header max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            <span>THE PROJECT JOURNEY</span>
          </div>

          {/* Heading */}
          <h2
            id="project-journey-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
          >
            A Thoughtful Process Behind <span className="text-[#2563EB]">Every Project.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
            From understanding your vision to delivering the final solution, every stage has a clear purpose. Our process keeps projects structured, collaborative and focused on the right outcomes.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP HORIZONTAL 5-STAGE TIMELINE (MD / LG+)
            ========================================================================= */}
        <div className="journey-timeline-container hidden md:block relative">
          
          {/* Continuous Neutral Track Line */}
          <div 
            className="absolute top-[22px] left-[32px] right-[32px] h-[2px] bg-[#E7EAF0]" 
            aria-hidden="true" 
          />

          {/* Continuous Animated Accent Track Line */}
          <div 
            className="journey-track-line absolute top-[22px] left-[32px] right-[32px] h-[2px] bg-[#2563EB]" 
            aria-hidden="true" 
          />

          {/* 5 Stages Grid */}
          <div className="grid grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {journeyStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.number}
                  className="journey-stage-node group flex flex-col items-start text-left cursor-default transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Top Step Number Node & Icon */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E7EAF0] bg-white text-[12.5px] font-mono font-bold text-[#0D1B2A] shadow-xs transition-all duration-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)]">
                      {stage.number}
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#667085] transition-colors duration-200 group-hover:text-[#2563EB] group-hover:border-[#2563EB]/40 shadow-2xs">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-[16.5px] font-bold text-[#0D1B2A] tracking-[-0.015em] group-hover:text-[#2563EB] transition-colors duration-150">
                    {stage.title}
                  </h3>

                  {/* Compact Stage Subtitle / Tagline */}
                  <div className="mt-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                    {stage.tagline}
                  </div>

                  {/* Stage Description */}
                  <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE VERTICAL TIMELINE (< MD)
            ========================================================================= */}
        <div className="journey-timeline-container md:hidden relative pl-6 border-l-2 border-[#2563EB]/40 space-y-7 ml-3.5">
          {journeyStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="journey-stage-node group relative"
              >
                {/* Node On Vertical Continuous Track */}
                <div className="absolute -left-[35px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#2563EB] bg-white text-[11px] font-mono font-bold text-[#0D1B2A] shadow-xs transition-all duration-200 group-hover:bg-[#2563EB] group-hover:text-white">
                  {stage.number}
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#2563EB] border border-[#E7EAF0]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0D1B2A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {stage.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded ml-auto">
                    {stage.tagline}
                  </span>
                </div>

                <p className="text-[13px] leading-relaxed text-[#667085] mt-1.5">
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProjectJourney;
