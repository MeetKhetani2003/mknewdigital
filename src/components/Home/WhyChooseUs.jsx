"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Target, 
  Code2, 
  MessageSquare, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const keyBenefits = [
  {
    number: "01",
    title: "Business-First Thinking",
    desc: "Every solution is planned around your business goals, audience, and actual requirements.",
    icon: Target,
  },
  {
    number: "02",
    title: "Custom-Built Solutions",
    desc: "Websites and software tailored to your workflow instead of generic templates.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Direct Communication",
    desc: "Work directly with the development team, with clear updates throughout the project.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Long-Term Support",
    desc: "Continued technical assistance and support beyond the initial launch.",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for the left editorial content
      gsap.fromTo(
        ".why-fade-left",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered reveal for benefit cards
      gsap.fromTo(
        ".why-card-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
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
      className="relative bg-[#FFFFFF] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =========================================
              LEFT COLUMN: EDITORIAL CONTENT & AUTHENTIC VISUAL
             ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Small Section Eyebrow */}
            <div className="why-fade-left inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Why Choose Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="why-fade-left text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2] sm:leading-[1.18]">
              More Than a Digital Agency.{" "}
              <span className="text-[#2563EB]">Your Technology Partner.</span>
            </h2>

            {/* Supporting Description */}
            <p className="why-fade-left mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We combine thoughtful design, reliable development, and practical digital strategy to build solutions that help businesses move forward.
            </p>

            {/* Studio Workspace / Collaboration Visual */}
            <div className="why-fade-left mt-6 relative rounded-xl border border-[#E7EAF0] bg-[#F5F7FA] p-2 shadow-[0_4px_24px_-10px_rgba(13,27,42,0.06)] group overflow-hidden">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src="/images/team-office.jpg"
                  alt="MK Digital Nexus engineering and digital development workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Authentic Collaboration Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-auto bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E7EAF0] rounded-lg px-3 py-2 shadow-sm flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-[#2563EB] shrink-0" />
                  <div className="text-left">
                    <p className="text-[11.5px] font-semibold text-[#0D1B2A] leading-tight">
                      Collaborative Development
                    </p>
                    <p className="text-[10px] text-[#667085] leading-tight mt-0.5">
                      Direct engineering access & agile sprints
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: 2x2 COMPACT BENEFIT BLOCKS
             ========================================= */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {keyBenefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.number}
                    className="why-card-item group relative rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] p-6 transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_10px_28px_-12px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header with Icon and Subtle Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F7FA] border border-[#E7EAF0] text-[#2563EB] transition-colors duration-200 group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] group-hover:border-[#2563EB]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-[#667085]/60">
                          {benefit.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors duration-150">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#667085]">
                        {benefit.desc}
                      </p>
                    </div>

                    {/* Subtle Bottom Accent Indicator */}
                    <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center gap-1.5 text-[11.5px] font-medium text-[#0D1B2A]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" />
                      <span className="text-[#667085]">Standard on all engagements</span>
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
export default WhyChooseUs;
