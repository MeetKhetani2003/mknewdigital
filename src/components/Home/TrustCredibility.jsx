"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  "Manufacturing",
  "Healthcare",
  "E-commerce",
  "Education",
  "Hospitality",
  "Real Estate",
  "Corporate",
  "Automotive",
];

export function TrustCredibility() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for header content
      gsap.fromTo(
        ".trust-fade-in",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered reveal for statistic blocks
      gsap.fromTo(
        ".stat-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Industry recognition strip items staggered reveal
      gsap.fromTo(
        ".industry-pill",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industry-strip",
            start: "top 90%",
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
      className="relative w-full bg-[#FFFFFF] border-b border-[#E7EAF0] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Subtle warm off-white ambient gradient with delicate gold undertone */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(217,179,90,0.035),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 relative z-10">
        
        {/* =========================================
            HEADER: LABEL, MAIN HEADING & DESCRIPTION
           ========================================= */}
        <div className="flex flex-col items-center text-center max-w-[840px] mx-auto">
          
          {/* 1. Small Section Label with Subtle Gold Accent Indicator */}
          <div className="trust-fade-in inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.12em] uppercase text-[#0D1B2A]">
              Trusted Digital Partner
            </span>
          </div>

          {/* 2. Main Heading */}
          <h2 className="trust-fade-in text-[28px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-semibold tracking-[-0.02em] text-[#0D1B2A] leading-[1.18]">
            Building Digital Experiences That Move Businesses Forward.
          </h2>

          {/* 3. Supporting Description */}
          <p className="trust-fade-in mt-5 text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.65] text-[#667085] max-w-[700px]">
            From business websites to advanced digital platforms, we help brands establish their online presence with purposeful design, reliable development, and scalable technology.
          </p>
        </div>

        {/* =========================================
            4. ACHIEVEMENT STATISTICS (4 ELEGANT BLOCKS)
           ========================================= */}
        <div className="stats-grid mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Block 1: 102+ Websites Delivered */}
          <div className="stat-block relative p-7 sm:p-8 rounded-2xl bg-[#F5F7FA]/70 border border-[#E7EAF0] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col justify-between group">
            {/* Subtle top gold accent bar on hover */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="text-[38px] sm:text-[44px] lg:text-[48px] font-semibold text-[#0D1B2A] tracking-[-0.03em] leading-none">
                <AnimatedCounter to={102} suffix="+" duration={1800} />
              </div>
              <div className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#0D1B2A]">
                Websites Delivered
              </div>
            </div>
            <p className="mt-2 text-[12px] sm:text-[13px] text-[#667085] leading-relaxed">
              Proven track record of high-performance websites shipped across industries.
            </p>
          </div>

          {/* Block 2: Multiple Industries */}
          <div className="stat-block relative p-7 sm:p-8 rounded-2xl bg-[#F5F7FA]/70 border border-[#E7EAF0] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-tight">
                Multiple Industries
              </div>
              <div className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#0D1B2A]">
                Diverse Business Solutions
              </div>
            </div>
            <p className="mt-2 text-[12px] sm:text-[13px] text-[#667085] leading-relaxed">
              Custom-crafted digital platforms adapted to sector-specific requirements.
            </p>
          </div>

          {/* Block 3: India & Beyond */}
          <div className="stat-block relative p-7 sm:p-8 rounded-2xl bg-[#F5F7FA]/70 border border-[#E7EAF0] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-tight">
                India & Beyond
              </div>
              <div className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#0D1B2A]">
                Client Reach
              </div>
            </div>
            <p className="mt-2 text-[12px] sm:text-[13px] text-[#667085] leading-relaxed">
              Collaborating seamlessly with ambitious companies locally and globally.
            </p>
          </div>

          {/* Block 4: End-to-End */}
          <div className="stat-block relative p-7 sm:p-8 rounded-2xl bg-[#F5F7FA]/70 border border-[#E7EAF0] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-tight">
                End-to-End
              </div>
              <div className="mt-3 text-[14px] sm:text-[15px] font-medium text-[#0D1B2A]">
                Digital Development
              </div>
            </div>
            <p className="mt-2 text-[12px] sm:text-[13px] text-[#667085] leading-relaxed">
              From strategy & architecture to design, full-stack build, and cloud launch.
            </p>
          </div>

        </div>

        {/* =========================================
            5. INDUSTRY RECOGNITION STRIP
           ========================================= */}
        <div className="industry-strip mt-16 sm:mt-20 pt-10 border-t border-[#E7EAF0]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="shrink-0 text-center md:text-left">
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#667085] block">
                Cross-Industry Expertise
              </span>
              <span className="text-[13px] font-medium text-[#0D1B2A] mt-0.5 block">
                Tailored for specialized verticals
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-2.5 text-[13px] sm:text-[14px] font-medium text-[#0D1B2A]">
              {industries.map((ind, i) => (
                <React.Fragment key={ind}>
                  <span className="industry-pill px-3 py-1.5 rounded-lg bg-[#F5F7FA] border border-[#E7EAF0]/80 hover:border-[#C59B27]/30 hover:bg-[#FFFFFF] transition-all duration-200">
                    {ind}
                  </span>
                  {i < industries.length - 1 && (
                    <span className="text-[#C59B27]/50 font-normal hidden sm:inline" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
