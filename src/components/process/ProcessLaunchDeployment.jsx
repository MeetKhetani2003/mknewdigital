"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Rocket, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Lock, 
  Server, 
  Activity, 
  Cpu, 
  ArrowRight,
  FileCheck2,
  Check
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const launchActivities = [
  {
    title: "Production Preparation",
    desc: "Prepare the final build, configure environment variables, review production settings and organize required assets.",
    icon: FileCheck2,
    badge: "Zero-Downtime Config",
  },
  {
    title: "Domain & Hosting Configuration",
    desc: "Connect the domain, configure hosting, SSL certificates and essential server settings.",
    icon: Globe,
    badge: "SSL & Custom DNS",
  },
  {
    title: "Deployment & Go-Live",
    desc: "Deploy the approved project to its production environment and ensure all essential services are running correctly.",
    icon: Rocket,
    badge: "Global Edge CDN",
  },
  {
    title: "Final Live Verification",
    desc: "Check the live website, navigation, forms, integrations, security configuration and important user journeys after deployment.",
    icon: Activity,
    badge: "Live Smoke Tests",
  },
];

const launchDeliverables = [
  "Production-ready project build",
  "Domain and hosting configuration",
  "SSL and essential security setup",
  "Live deployment and configuration",
  "Post-deployment functionality verification",
  "Final launch handover",
];

const deploymentSteps = [
  { step: "01", name: "Artifact Build", status: "Compiled", active: true },
  { step: "02", name: "DNS & SSL Setup", status: "Secured", active: true },
  { step: "03", name: "Edge Deployment", status: "Propagated", active: true },
  { step: "04", name: "Live Handover", status: "Active", active: true },
];

export function ProcessLaunchDeployment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.fromTo(
        ".launch-left-reveal",
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
        ".launch-activity-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".launch-activities-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right illustration reveal
      gsap.fromTo(
        ".launch-visual-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".launch-visual-reveal",
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
      id="process-launch-deployment"
      aria-labelledby="process-launch-heading"
      className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL COMPOSITION
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: PHASE INTRO & LAUNCH ACTIVITIES
              ======================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header Block with Giant Phase Number Accent */}
            <div className="launch-left-reveal relative">
              <div className="flex items-center justify-between mb-4">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>PHASE 06 / LAUNCH</span>
                </div>

                {/* Prominent Editorial Phase Number */}
                <span className="font-mono text-[38px] sm:text-[46px] font-black text-[#CBD5E1]/70 leading-none select-none">
                  06
                </span>
              </div>

              {/* Heading */}
              <h2
                id="process-launch-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
              >
                From Final Approval to a <span className="text-[#2563EB]">Successful Digital Launch.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
                Once everything has been tested and approved, we prepare your digital solution for launch. From server configuration and domain connection to production deployment and final verification, we manage the technical process to make your website or application accessible to the world.
              </p>
            </div>

            {/* Sub-heading: What Happens in This Stage? */}
            <div className="mt-10 pt-8 border-t border-[#E7EAF0]">
              <div className="text-[12px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-5 flex items-center gap-2">
                <span className="h-1 w-3 bg-[#2563EB] rounded-full" />
                <span>WHAT HAPPENS IN THIS STAGE?</span>
              </div>

              {/* 4 Compact Launch Activities */}
              <div className="launch-activities-container divide-y divide-[#E7EAF0]">
                {launchActivities.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.title}
                      className="launch-activity-row py-4 sm:py-5 flex items-start gap-3.5 sm:gap-4 group hover:bg-[#F8FAFC] px-2 sm:px-3 rounded-lg transition-colors"
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

            {/* Launch Deliverables (Visual Checklist) */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E7EAF0]">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
                  <span>Launch Deliverables & Production Assets</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                  Live & Handed Over
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {launchDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[12.5px] text-[#475467]">
                    <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: CSS-BASED DEPLOYMENT VISUALIZATION
              ======================================================================= */}
          <div className="lg:col-span-5 launch-visual-reveal lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
              
              {/* Browser & Live Status Top Bar */}
              <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#0D1B2A] font-semibold bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
                  <Lock className="h-3 w-3 text-[#10B981]" />
                  <span>https://yourdomain.com</span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>LIVE PRODUCTION</span>
                </span>
              </div>

              {/* Deployment Progression Sequence Header */}
              <div className="bg-[#FFFFFF] border-b border-[#E7EAF0] px-4 py-3">
                <div className="grid grid-cols-4 gap-2">
                  {deploymentSteps.map((ds) => (
                    <div 
                      key={ds.step} 
                      className="p-1.5 rounded bg-[#F8FAFC] border border-[#E7EAF0] text-center"
                    >
                      <div className="text-[10px] font-mono font-bold text-[#667085]">
                        {ds.step}
                      </div>
                      <div className="text-[11px] font-semibold text-[#0D1B2A] truncate">
                        {ds.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#10B981] font-semibold mt-0.5">
                        ✓ {ds.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Deployment Verification Console */}
              <div className="p-5 sm:p-6 space-y-4 bg-[#0D1B2A] text-slate-300 font-mono text-[12px]">
                
                {/* 1. Global Infrastructure & DNS */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-[#60A5FA]" />
                      <span>DNS & Edge Routing</span>
                    </span>
                    <span className="text-[#34D399] font-bold">100% Propagated</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Custom Domain Apex & www</span>
                      <span className="text-[#34D399]">CNAME Synced</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Security Certificate</span>
                      <span className="text-[#34D399]">TLS 1.3 / SSL Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Global Edge CDN Network</span>
                      <span className="text-[#34D399]">300+ PoPs Active</span>
                    </div>
                  </div>
                </div>

                {/* 2. Server & Environment Configuration */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Server className="h-3.5 w-3.5 text-[#F59E0B]" />
                      <span>Production Environment Status</span>
                    </span>
                    <span className="text-[#34D399]">Healthy (0 Errors)</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">NODE_ENV</span>
                      <span className="text-[#34D399] font-bold">&quot;production&quot;</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">Asset Caching Header</span>
                      <span className="text-[#34D399] font-bold">s-maxage=31536000, immutable</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">Database Pool Status</span>
                      <span className="text-[#34D399] font-bold">Connected • Encrypted</span>
                    </div>
                  </div>
                </div>

                {/* 3. Live Smoke Tests & Verification */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/10">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#34D399]" />
                      <span>Post-Deploy Verification</span>
                    </span>
                    <span className="text-[#34D399] text-[10.5px]">4/4 Checks Passed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                    <div className="p-2 rounded bg-black/20 border border-white/5 text-slate-300">
                      <span className="text-emerald-400">✓</span> Forms & Email Dispatch
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 text-slate-300">
                      <span className="text-emerald-400">✓</span> Payment Gateways Active
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 text-slate-300">
                      <span className="text-emerald-400">✓</span> Analytics & Sitemap
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 text-slate-300">
                      <span className="text-emerald-400">✓</span> Mobile Touch & Gestures
                    </div>
                  </div>
                </div>

              </div>

              {/* Deployment Footer Bar */}
              <div className="p-3.5 bg-[#F8FAFC] border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#10B981]" />
                  <span className="font-medium text-[#0D1B2A]">Zero Downtime Handover</span>
                </div>
                <span className="text-[11px] font-mono text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
                  Live Worldwide
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessLaunchDeployment;
