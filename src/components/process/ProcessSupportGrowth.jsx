"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  LifeBuoy, 
  RefreshCw, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  ArrowUpRight,
  Layers,
  HeartHandshake
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const supportActivities = [
  {
    title: "Technical Support",
    desc: "Assist with technical queries, troubleshooting and issues that may arise after launch.",
    icon: LifeBuoy,
    badge: "Responsive Assistance",
  },
  {
    title: "Maintenance & Updates",
    desc: "Keep websites and applications updated through relevant fixes, maintenance and technical improvements.",
    icon: RefreshCw,
    badge: "Scheduled Maintenance",
  },
  {
    title: "Performance Monitoring",
    desc: "Review website performance, functionality and overall user experience to identify opportunities for improvement.",
    icon: Activity,
    badge: "Health & Vitals",
  },
  {
    title: "Continuous Improvement",
    desc: "Recommend and implement enhancements as business requirements, user expectations and technology evolve.",
    icon: TrendingUp,
    badge: "Iterative Evolution",
  },
];

const supportDeliverables = [
  "Post-launch technical assistance",
  "Maintenance and relevant updates",
  "Issue resolution and troubleshooting",
  "Performance and functionality reviews",
  "Feature enhancement recommendations",
  "Long-term improvement support",
];

const growthProgression = [
  { stage: "Launch", desc: "Production go-live & verified handover", icon: Sparkles, active: true },
  { stage: "Support", desc: "Direct technical guidance & troubleshooting", icon: LifeBuoy, active: true },
  { stage: "Improvement", desc: "Performance reviews & feature refinements", icon: Layers, active: true },
  { stage: "Growth", desc: "Long-term scalability as business expands", icon: TrendingUp, active: true },
];

export function ProcessSupportGrowth() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.fromTo(
        ".growth-left-reveal",
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

      // Activities staggered reveal
      gsap.fromTo(
        ".growth-activity-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".growth-activities-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right illustration reveal
      gsap.fromTo(
        ".growth-visual-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".growth-visual-reveal",
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
      id="process-support-growth"
      aria-labelledby="process-growth-heading"
      className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL COMPOSITION
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: PHASE INTRO & SUPPORT ACTIVITIES
              ======================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header Block with Giant Phase Number Accent */}
            <div className="growth-left-reveal relative">
              <div className="flex items-center justify-between mb-4">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>PHASE 07 / GROWTH</span>
                </div>

                {/* Prominent Editorial Phase Number */}
                <span className="font-mono text-[38px] sm:text-[46px] font-black text-[#CBD5E1]/70 leading-none select-none">
                  07
                </span>
              </div>

              {/* Heading */}
              <h2
                id="process-growth-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
              >
                Launch Is Just the Beginning. We&apos;re Here to <span className="text-[#2563EB]">Keep You Moving Forward.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
                Our relationship doesn&apos;t end when your project goes live. We remain available to help you maintain, improve and evolve your digital solution as your business grows. From technical assistance and updates to ongoing improvements, we help your digital presence stay reliable, relevant and ready for what&apos;s next.
              </p>
            </div>

            {/* Sub-heading: What Happens in This Stage? */}
            <div className="mt-10 pt-8 border-t border-[#E7EAF0]">
              <div className="text-[12px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-5 flex items-center gap-2">
                <span className="h-1 w-3 bg-[#2563EB] rounded-full" />
                <span>WHAT HAPPENS IN THIS STAGE?</span>
              </div>

              {/* 4 Compact Support Activities */}
              <div className="growth-activities-container divide-y divide-[#E7EAF0] bg-white rounded-xl border border-[#E7EAF0] overflow-hidden">
                {supportActivities.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.title}
                      className="growth-activity-row py-4 sm:py-5 px-4 sm:px-5 flex items-start gap-3.5 sm:gap-4 group hover:bg-[#F8FAFC] transition-colors"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F7FA] border border-[#E7EAF0] text-[#0D1B2A] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white transition-all duration-200 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-[15.5px] font-bold text-[#0D1B2A] tracking-[-0.01em] group-hover:text-[#2563EB] transition-colors">
                            {act.title}
                          </h3>
                          <span className="text-[10.5px] font-mono font-medium text-[#667085] bg-[#F1F3F7] px-2 py-0.5 rounded border border-[#E7EAF0] shrink-0">
                            {act.badge}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#667085]">
                          {act.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Deliverables (Visual Checklist) */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-white border border-[#E7EAF0]">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E7EAF0]">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
                  <span>Ongoing Assistance & Evolution Scope</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">
                  Agreed Service Terms
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {supportDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[12.5px] text-[#475467]">
                    <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: CSS-BASED CONTINUOUS-GROWTH VISUALIZATION
              ======================================================================= */}
          <div className="lg:col-span-5 growth-visual-reveal lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
              
              {/* Growth Workbench Top Bar */}
              <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#475467] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
                  <Terminal className="h-3 w-3 text-[#2563EB]" />
                  <span>lifecycle.progression.ts</span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>ACTIVE EVOLUTION</span>
                </span>
              </div>

              {/* Connected Growth Progression Milestones (Launch → Support → Improvement → Growth) */}
              <div className="p-5 sm:p-6 space-y-4 bg-[#0D1B2A] text-slate-300 font-mono text-[12px]">
                
                {/* Header note */}
                <div className="pb-3 border-b border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <HeartHandshake className="h-3.5 w-3.5 text-[#2563EB]" />
                    <span>Long-Term Partnership Track</span>
                  </span>
                  <span className="text-[#34D399] font-sans">Reliable Support</span>
                </div>

                {/* 4 Connected Vertical Progression Milestones */}
                <div className="relative pl-6 space-y-4 border-l-2 border-[#2563EB]/40 ml-2 py-1">
                  {growthProgression.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.stage} className="relative group">
                        {/* Node circle on vertical line */}
                        <div className="absolute -left-[31px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0D1B2A] border-2 border-[#2563EB] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                          <span className="text-[10px] font-bold">{idx + 1}</span>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10 transition-colors group-hover:bg-white/[0.08] group-hover:border-white/20">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-semibold flex items-center gap-1.5 text-[12.5px]">
                              <Icon className="h-3.5 w-3.5 text-[#60A5FA]" />
                              <span>{item.stage}</span>
                            </span>
                            <span className="text-[10px] text-[#34D399] font-sans bg-[#34D399]/10 px-1.5 py-0.5 rounded">
                              Ongoing
                            </span>
                          </div>
                          <p className="mt-1 text-[11px] text-slate-400 font-sans leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Reassurance Architecture Card */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2 mt-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#34D399]" />
                      <span>Studio Continuity Commitments</span>
                    </span>
                    <span className="text-[#34D399]">Guaranteed</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Direct Developer Access</span>
                      <span className="text-[#34D399]">No Account Handlers</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Security & Dependency Audits</span>
                      <span className="text-[#34D399]">Continuous Health</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Full Codebase Freedom</span>
                      <span className="text-[#34D399]">100% Repository Transfer</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Growth Workbench Footer */}
              <div className="p-3.5 bg-[#F8FAFC] border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span className="font-medium text-[#0D1B2A]">Built for Long-Term Value</span>
                </div>
                <span className="text-[11px] font-mono text-[#2563EB] font-semibold">
                  Evolutionary Architecture
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessSupportGrowth;
