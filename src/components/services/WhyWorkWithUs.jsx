"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const differentiators = [
  {
    number: "01",
    title: "Solutions Around Your Needs",
    description:
      "We understand your business requirements before recommending the right design, features and technology.",
    tag: "Requirement Analysis",
  },
  {
    number: "02",
    title: "Design Meets Functionality",
    description:
      "We combine thoughtful user experiences with practical functionality to create solutions that look good and work effectively.",
    tag: "Purposeful UI/UX",
  },
  {
    number: "03",
    title: "Direct Team Collaboration",
    description:
      "Communicate directly with the people working on your project, with clear discussions and progress updates.",
    tag: "Zero Layers",
  },
  {
    number: "04",
    title: "Support Beyond Delivery",
    description:
      "Our relationship doesn't have to end at launch. We can assist with maintenance, updates and further improvements based on your requirements.",
    tag: "Long-term Value",
  },
];

export function WhyWorkWithUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left column fade in
      gsap.fromTo(
        ".why-left-content",
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

      // Staggered differentiator rows
      gsap.fromTo(
        ".why-diff-row",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
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
      id="why-work-with-us"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* =========================================
              LEFT COLUMN: Heading, Description & Visual
             ========================================= */}
          <div className="why-left-content lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>The MK Digital Nexus Difference</span>
              </div>

              {/* Heading */}
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
                Not Just Development. A Partnership That Understands Your Business.
              </h2>

              {/* Description */}
              <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
                Choosing the right development partner matters. We focus on understanding your requirements, building practical solutions and maintaining clear communication throughout the project.
              </p>
            </div>

            {/* Development & Collaboration Visual Card */}
            <div className="mt-8 rounded-2xl border border-[#E7EAF0] bg-[#F8FAFC]/80 p-5 sm:p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E7EAF0]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[12px] font-semibold text-[#0D1B2A]">
                    Client Collaboration Model
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded">
                  Direct Access
                </span>
              </div>

              {/* Workflow Snapshot Pills */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-white border border-[#E7EAF0]/80 shadow-xs">
                  <span className="text-[#0D1B2A] font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" /> Requirement Discovery
                  </span>
                  <span className="text-[11px] text-[#667085] font-mono">Phase 01</span>
                </div>

                <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-white border border-[#E7EAF0]/80 shadow-xs">
                  <span className="text-[#0D1B2A] font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" /> Sprint & Milestone Demos
                  </span>
                  <span className="text-[11px] text-[#667085] font-mono">Phase 02</span>
                </div>

                <div className="flex items-center justify-between text-[12.5px] p-2 rounded-lg bg-white border border-[#E7EAF0]/80 shadow-xs">
                  <span className="text-[#0D1B2A] font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" /> Post-Launch Growth Support
                  </span>
                  <span className="text-[11px] text-[#667085] font-mono">Ongoing</span>
                </div>
              </div>

              {/* Bottom Communication Highlights */}
              <div className="mt-4 pt-3 border-t border-[#E7EAF0]/80 flex items-center justify-between text-[11px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="h-3 w-3 text-[#2563EB]" /> Direct WhatsApp & Calls
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-[#10B981]" /> Clear Timelines
                </span>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Four Differentiator Rows
             ========================================= */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E7EAF0]">
            {differentiators.map((diff) => (
              <div
                key={diff.number}
                className="why-diff-row group py-4 sm:py-5 first:pt-0 last:pb-0 transition-all duration-200"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Number Badge */}
                  <span className="mt-0.5 inline-flex items-center justify-center font-mono text-[12px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 h-8 w-8 rounded-lg shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                    {diff.number}
                  </span>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="text-[18px] sm:text-[19px] font-bold tracking-[-0.015em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors">
                        {diff.title}
                      </h3>
                      <span className="hidden sm:inline-flex text-[11px] font-medium text-[#667085]/70 bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E7EAF0]/60">
                        {diff.tag}
                      </span>
                    </div>

                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#667085]">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyWorkWithUs;
