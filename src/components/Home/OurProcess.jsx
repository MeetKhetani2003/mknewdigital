"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Search, 
  Map, 
  Palette, 
  Code2, 
  Rocket 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processStages = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your business, goals, audience, requirements and project expectations.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan & Strategize",
    desc: "We define the project structure, features, technology and development roadmap.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    desc: "We create the visual direction and user experience around your brand and audience.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    desc: "We transform the approved design into a responsive, functional digital solution.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch & Support",
    desc: "We test the solution, prepare it for launch and provide the agreed post-launch support.",
    icon: Rocket,
  },
];

export function OurProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".process-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Progressive reveal of horizontal process steps
      gsap.fromTo(
        ".process-step-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Connecting line expansion animation
      gsap.fromTo(
        ".process-connecting-line",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      id="process"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 border-t border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="process-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>How We Work</span>
          </div>

          <h2 className="process-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            A Clear Process. A Better Digital Outcome.
          </h2>

          <p className="process-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            From understanding your requirements to launching your solution, every stage is handled with a clear direction and thoughtful execution.
          </p>
        </div>

        {/* =========================================
            DESKTOP HORIZONTAL 5-STEP TIMELINE (LG+)
           ========================================= */}
        <div className="hidden lg:block relative">
          
          {/* Subtle Background Connecting Track Line */}
          <div className="absolute top-5 left-6 right-6 h-[2px] bg-[#E7EAF0] -z-0" />
          
          {/* Animated Connecting Track Line */}
          <div className="process-connecting-line absolute top-5 left-6 right-6 h-[2px] bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB] to-[#2563EB]/40 -z-0" />

          {/* 5 Process Stage Nodes */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processStages.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.number}
                  className="process-step-item group flex flex-col items-start text-left cursor-default"
                >
                  {/* Step Node Circle */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#E7EAF0] bg-[#FFFFFF] text-[12px] font-mono font-bold text-[#0D1B2A] shadow-sm transition-all duration-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] group-hover:scale-105">
                      {stage.number}
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F5F7FA] text-[#667085] border border-[#E7EAF0] transition-colors duration-200 group-hover:text-[#2563EB] group-hover:border-[#2563EB]/30">
                      <IconComponent className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors duration-150">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            MOBILE & TABLET VERTICAL TIMELINE (< LG)
           ========================================= */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#E7EAF0] space-y-8 sm:space-y-10 ml-3 sm:ml-4">
          {processStages.map((stage) => {
            const IconComponent = stage.icon;
            return (
              <div
                key={stage.number}
                className="process-step-item group relative"
              >
                {/* Node on vertical line */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-[#E7EAF0] bg-[#FFFFFF] text-[11px] font-mono font-bold text-[#0D1B2A] shadow-sm transition-all duration-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF]">
                  {stage.number}
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-[#F5F7FA] text-[#667085] border border-[#E7EAF0]">
                    <IconComponent className="h-3.5 w-3.5 text-[#2563EB]" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#0D1B2A] tracking-[-0.015em] group-hover:text-[#2563EB] transition-colors">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#667085] max-w-lg">
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

export default OurProcess;
