"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  CheckSquare, 
  SlidersHorizontal,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testingActivities = [
  {
    title: "Functional Testing",
    desc: "Test buttons, forms, navigation, user interactions, workflows and application features to ensure everything behaves correctly.",
    icon: CheckSquare,
    badge: "Workflows & Forms",
  },
  {
    title: "Responsive Testing",
    desc: "Verify layouts and functionality across desktop, tablet and mobile screen sizes.",
    icon: Smartphone,
    badge: "All Screen Sizes",
  },
  {
    title: "Performance Testing",
    desc: "Review loading speed, asset optimization, rendering behaviour and overall website performance.",
    icon: Zap,
    badge: "Core Web Vitals",
  },
  {
    title: "Integration & Compatibility Testing",
    desc: "Check APIs, databases, payment gateways, third-party services and browser compatibility to identify integration issues.",
    icon: Globe,
    badge: "Cross-Browser & API",
  },
];

const testingDeliverables = [
  "Functional testing and issue identification",
  "Responsive layout verification",
  "Browser and device compatibility checks",
  "API and integration validation",
  "Performance and loading optimization",
  "Final quality review and approval",
];

const viewportModes = [
  { id: "desktop", label: "Desktop", width: "1920×1080", icon: Monitor },
  { id: "tablet", label: "Tablet", width: "768×1024", icon: Tablet },
  { id: "mobile", label: "Mobile", width: "375×812", icon: Smartphone },
];

export function ProcessTestingQA() {
  const sectionRef = useRef(null);
  const [activeViewport, setActiveViewport] = useState("desktop");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.fromTo(
        ".qa-left-reveal",
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
        ".qa-activity-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".qa-activities-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right illustration reveal
      gsap.fromTo(
        ".qa-visual-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".qa-visual-reveal",
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
      id="process-testing-qa"
      aria-labelledby="process-testing-qa-heading"
      className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL COMPOSITION
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: PHASE INTRO & TESTING ACTIVITIES
              ======================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header Block with Giant Phase Number Accent */}
            <div className="qa-left-reveal relative">
              <div className="flex items-center justify-between mb-4">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>PHASE 05 / QUALITY ASSURANCE</span>
                </div>

                {/* Prominent Editorial Phase Number */}
                <span className="font-mono text-[38px] sm:text-[46px] font-black text-[#CBD5E1]/70 leading-none select-none">
                  05
                </span>
              </div>

              {/* Heading */}
              <h2
                id="process-testing-qa-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
              >
                Every Detail Tested. <span className="text-[#2563EB]">Every Experience Refined.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
                Before a project goes live, we carefully test every important part of the solution. From functionality and responsiveness to integrations and performance, we identify issues, refine interactions and make sure everything works as expected across different devices and environments.
              </p>
            </div>

            {/* Sub-heading: What Happens in This Stage? */}
            <div className="mt-10 pt-8 border-t border-[#E7EAF0]">
              <div className="text-[12px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-5 flex items-center gap-2">
                <span className="h-1 w-3 bg-[#2563EB] rounded-full" />
                <span>WHAT HAPPENS IN THIS STAGE?</span>
              </div>

              {/* 4 Compact Testing Activities */}
              <div className="qa-activities-container divide-y divide-[#E7EAF0] bg-white rounded-xl border border-[#E7EAF0] overflow-hidden">
                {testingActivities.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.title}
                      className="qa-activity-row py-4 sm:py-5 px-4 sm:px-5 flex items-start gap-3.5 sm:gap-4 group hover:bg-[#F8FAFC] transition-colors"
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

            {/* Testing Deliverables (Visual Checklist) */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-white border border-[#E7EAF0]">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E7EAF0]">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
                  <span>Testing Deliverables & Verification Checklist</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                  All Items Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {testingDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[12.5px] text-[#475467]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: CSS-BASED QUALITY ASSURANCE VISUALIZATION
              ======================================================================= */}
          <div className="lg:col-span-5 qa-visual-reveal lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
              
              {/* QA Workbench Top Bar */}
              <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#475467] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
                  <Terminal className="h-3 w-3 text-[#2563EB]" />
                  <span>qa.test-suite.runner.ts</span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>100% PASSED</span>
                </span>
              </div>

              {/* Viewport Simulation Switcher */}
              <div className="bg-[#FFFFFF] border-b border-[#E7EAF0] px-4 py-2.5 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider">
                  Device Matrix
                </span>
                <div className="flex items-center gap-1 bg-[#F1F3F7] p-1 rounded-lg border border-[#E7EAF0]">
                  {viewportModes.map((vp) => {
                    const VpIcon = vp.icon;
                    const isActive = activeViewport === vp.id;
                    return (
                      <button
                        key={vp.id}
                        type="button"
                        onClick={() => setActiveViewport(vp.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                          isActive
                            ? "bg-white text-[#2563EB] shadow-2xs font-semibold"
                            : "text-[#667085] hover:text-[#0D1B2A]"
                        }`}
                        aria-label={`Preview in ${vp.label} mode`}
                      >
                        <VpIcon className="h-3 w-3" />
                        <span>{vp.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live QA Test Matrix Body */}
              <div className="p-5 sm:p-6 space-y-4 bg-[#0D1B2A] text-slate-300 font-mono text-[12px]">
                
                {/* Responsive Viewport Display Indicator */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-[#60A5FA]" />
                    <span className="text-white text-[11.5px] font-medium">Viewport Simulation</span>
                  </div>
                  <span className="text-[#34D399] font-mono text-[11px] font-semibold bg-[#34D399]/10 px-2 py-0.5 rounded">
                    {activeViewport === "desktop" && "1920×1080 (Desktop Wide)"}
                    {activeViewport === "tablet" && "768×1024 (Tablet Portrait)"}
                    {activeViewport === "mobile" && "375×812 (Mobile Viewport)"}
                  </span>
                </div>

                {/* 1. Functional & Interaction Suite */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-[#34D399]" />
                      <span>Functional & Interactive Audit</span>
                    </span>
                    <span className="text-[#34D399]">16/16 Passed</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Navigation & Anchor Routing</span>
                      <span className="text-[#34D399]">✓ 0 Broken Links</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Form Validation & Sanitization</span>
                      <span className="text-[#34D399]">✓ Zero Failures</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Modal & Dialog Trapping</span>
                      <span className="text-[#34D399]">✓ A11y Compliant</span>
                    </div>
                  </div>
                </div>

                {/* 2. Performance & Core Web Vitals */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Zap className="h-3 w-3 text-[#FBBF24]" />
                      <span>Performance & Lighthouse</span>
                    </span>
                    <span className="text-[#FBBF24]">Grade A+</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10.5px]">
                    <div className="p-2 rounded bg-black/30 border border-white/5">
                      <div className="text-[14px] font-bold text-[#34D399]">99</div>
                      <div className="text-slate-400 text-[10px]">Performance</div>
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/5">
                      <div className="text-[14px] font-bold text-[#34D399]">100</div>
                      <div className="text-slate-400 text-[10px]">Accessibility</div>
                    </div>
                    <div className="p-2 rounded bg-black/30 border border-white/5">
                      <div className="text-[14px] font-bold text-[#34D399]">100</div>
                      <div className="text-slate-400 text-[10px]">Best Practices</div>
                    </div>
                  </div>
                </div>

                {/* 3. Cross-Browser & Security Compatibility */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Globe className="h-3 w-3 text-[#60A5FA]" />
                      <span>Cross-Browser & SSL Verification</span>
                    </span>
                    <span className="text-[#60A5FA]">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Chrome • Safari • Firefox • Edge</span>
                    <span className="text-[#34D399] font-semibold">100% Parity</span>
                  </div>
                </div>

              </div>

              {/* QA Workbench Footer Status */}
              <div className="p-3.5 bg-[#F8FAFC] border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
                  <span className="font-medium text-[#0D1B2A]">Zero Known Critical Defects</span>
                </div>
                <span className="text-[11px] font-mono text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
                  Ready for Launch
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessTestingQA;
