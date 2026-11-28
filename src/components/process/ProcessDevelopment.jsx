"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Workflow, 
  Network, 
  Check,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const activities = [
  {
    title: "Frontend Development",
    desc: "Convert approved UI designs into responsive, interactive interfaces with clean and maintainable code.",
    icon: Code2,
    badge: "Next.js & React",
  },
  {
    title: "Backend Development",
    desc: "Build the server-side logic, business workflows, authentication and application functionality required by the project.",
    icon: Server,
    badge: "Node.js & Edge APIs",
  },
  {
    title: "Database & API Integration",
    desc: "Connect databases, APIs and third-party services to ensure information flows accurately across the system.",
    icon: Database,
    badge: "Secure Architecture",
  },
  {
    title: "Functionality & Integration",
    desc: "Implement forms, dashboards, payment gateways, CRM features, notifications and other project-specific functionalities.",
    icon: Layers,
    badge: "Custom Logic",
  },
];

const deliverables = [
  "Responsive frontend implementation",
  "Backend architecture and application logic",
  "Database configuration and integration",
  "API and third-party service integration",
  "Interactive features and business workflows",
  "Functional development build ready for testing",
];

export function ProcessDevelopment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.fromTo(
        ".dev-left-reveal",
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
        ".dev-activity-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".dev-activities-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right illustration reveal
      gsap.fromTo(
        ".dev-visual-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".dev-visual-reveal",
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
      id="process-development"
      aria-labelledby="process-development-heading"
      className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            TWO-COLUMN EDITORIAL COMPOSITION
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: PHASE INTRO & DEVELOPMENT ACTIVITIES
              ======================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Header Block with Giant Phase Number Accent */}
            <div className="dev-left-reveal relative">
              <div className="flex items-center justify-between mb-4">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  <span>PHASE 04 / DEVELOPMENT</span>
                </div>

                {/* Prominent Editorial Phase Number */}
                <span className="font-mono text-[38px] sm:text-[46px] font-black text-[#CBD5E1]/60 leading-none select-none">
                  04
                </span>
              </div>

              {/* Heading */}
              <h2
                id="process-development-heading"
                className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
              >
                Turning Approved Designs Into <span className="text-[#2563EB]">Powerful Digital Solutions.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
                Once the design is approved, our development team brings the experience to life. We build reliable, responsive and scalable digital solutions by combining modern frontend technologies, robust backend architecture and carefully integrated functionality.
              </p>
            </div>

            {/* Sub-heading: What Happens in This Stage? */}
            <div className="mt-10 pt-8 border-t border-[#E7EAF0]">
              <div className="text-[12px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-5 flex items-center gap-2">
                <span className="h-1 w-3 bg-[#2563EB] rounded-full" />
                <span>WHAT HAPPENS IN THIS STAGE?</span>
              </div>

              {/* 4 Compact Development Activities */}
              <div className="dev-activities-container divide-y divide-[#E7EAF0]">
                {activities.map((act) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={act.title}
                      className="dev-activity-row py-4 sm:py-5 flex items-start gap-3.5 sm:gap-4 group hover:bg-[#F8FAFC] px-2 sm:px-3 rounded-lg transition-colors"
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

            {/* Development Deliverables (Visual Checklist) */}
            <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E7EAF0]">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
                  <span>Phase Deliverables & Handoff Quality</span>
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                  Verified Clean Code
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[12.5px] text-[#475467]">
                    <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: AUTHENTIC DEVELOPMENT WORKSPACE ILLUSTRATION
              ======================================================================= */}
          <div className="lg:col-span-5 dev-visual-reveal lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
              
              {/* Workspace Header Bar */}
              <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#475467] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
                  <Terminal className="h-3 w-3 text-[#2563EB]" />
                  <span>pipeline.architecture.ts</span>
                </div>
                <span className="font-mono text-[10px] text-[#2563EB] font-semibold bg-[#2563EB]/10 px-2 py-0.5 rounded">
                  BUILD PASSING
                </span>
              </div>

              {/* Workspace Body: Three Structured Architecture Layers */}
              <div className="p-5 sm:p-6 space-y-5 bg-[#0D1B2A] text-slate-300 font-mono text-[12px]">
                
                {/* 1. Frontend UI Layer */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Code2 className="h-3.5 w-3.5 text-[#60A5FA]" />
                      <span>Frontend Interface Layer</span>
                    </span>
                    <span className="text-[#34D399] text-[10px]">99+ PageSpeed</span>
                  </div>
                  <div className="space-y-1 text-[11.5px] leading-relaxed">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>&lt;AppLayout /&gt;</span>
                      <span className="text-slate-500 font-sans text-[11px]">Next.js 15 App Router</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 pl-3">
                      <span>├── &lt;ResponsiveNav /&gt;</span>
                      <span className="text-[#60A5FA] text-[11px]">CSS Tailwind</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 pl-3">
                      <span>├── &lt;InteractiveViews /&gt;</span>
                      <span className="text-[#FBBF24] text-[11px]">Dynamic Hydration</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 pl-3">
                      <span>└── &lt;ClientDashboard /&gt;</span>
                      <span className="text-[#34D399] text-[11px]">Sub-Second Edge</span>
                    </div>
                  </div>
                </div>

                {/* 2. Backend & Server Logic Layer */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Server className="h-3.5 w-3.5 text-[#F59E0B]" />
                      <span>Server-Side Business Logic</span>
                    </span>
                    <span className="text-[#60A5FA] text-[10px]">Edge Runtime</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">POST /api/inquiries/submit</span>
                      <span className="text-[#34D399] font-bold">200 OK • 24ms</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">POST /api/auth/token-verify</span>
                      <span className="text-[#34D399] font-bold">JWT Signed • SSL</span>
                    </div>
                    <div className="flex items-center justify-between bg-black/30 px-2.5 py-1.5 rounded border border-white/5">
                      <span className="text-slate-300">POST /api/payment/webhook</span>
                      <span className="text-[#34D399] font-bold">Webhook Synced</span>
                    </div>
                  </div>
                </div>

                {/* 3. Database & System Integrations Layer */}
                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <Database className="h-3.5 w-3.5 text-[#34D399]" />
                      <span>Connected Databases & APIs</span>
                    </span>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Synced</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-black/20 border border-white/5 flex flex-col">
                      <span className="text-white font-medium">Primary DB</span>
                      <span className="text-slate-400 text-[10px]">MongoDB / PostgreSQL</span>
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 flex flex-col">
                      <span className="text-white font-medium">Payment API</span>
                      <span className="text-slate-400 text-[10px]">Stripe / Razorpay</span>
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 flex flex-col">
                      <span className="text-white font-medium">Notifications</span>
                      <span className="text-slate-400 text-[10px]">Email & Webhooks</span>
                    </div>
                    <div className="p-2 rounded bg-black/20 border border-white/5 flex flex-col">
                      <span className="text-white font-medium">Asset Storage</span>
                      <span className="text-slate-400 text-[10px]">Global Edge CDN</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Workspace Footer Bar */}
              <div className="p-3.5 bg-[#F8FAFC] border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#10B981]" />
                  <span className="font-medium text-[#0D1B2A]">100% Code Ownership</span>
                </div>
                <span className="text-[11px] font-mono text-[#2563EB] font-semibold">
                  Zero Lock-in Guaranteed
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessDevelopment;
