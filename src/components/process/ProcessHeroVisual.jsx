"use client";

import React from "react";
import Image from "next/image";
import { 
  Compass, 
  Layers, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  GitCommit,
  Terminal
} from "lucide-react";

export function ProcessHeroVisual() {
  const workflowSteps = [
    { num: "01", name: "Discover", label: "Scope & Strategy", icon: Compass, active: true },
    { num: "02", name: "Design", label: "UI/UX Architecture", icon: Layers, active: true },
    { num: "03", name: "Engineer", label: "Clean Next.js Code", icon: Code2, active: true },
    { num: "04", name: "Deploy", label: "QA & Global Launch", icon: Rocket, active: true },
  ];

  return (
    <div className="relative mx-auto max-w-4xl rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
      
      {/* =========================================================================
          1. BROWSER WINDOW TOP BAR
          ========================================================================= */}
      <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#475467] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
          <Terminal className="h-3 w-3 text-[#2563EB]" />
          <span>mkdigitalnexus.in/our-process</span>
        </div>
        <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>SPRINT PIPELINE</span>
        </span>
      </div>

      {/* =========================================================================
          2. WORKFLOW STAGE TRACKER (HORIZONTAL PROGRESSION)
          ========================================================================= */}
      <div className="bg-[#FFFFFF] border-b border-[#E7EAF0] px-4 sm:px-6 py-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-[#E7EAF0] transition-colors"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#2563EB]/10 text-[#2563EB]">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#667085] uppercase tracking-wider">
                    <span>{step.num}</span>
                    <span>•</span>
                    <span className="text-[#0D1B2A]">{step.name}</span>
                  </div>
                  <div className="text-[11px] text-[#475467] truncate font-medium">
                    {step.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. WORKSPACE WORKBENCH CONTENT (2-COLUMN EDITORIAL COMPOSITION)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E7EAF0]">
        
        {/* Left Column: Project Sprint Roadmap & Engineering Checklist */}
        <div className="md:col-span-6 p-5 sm:p-6 bg-[#0D1B2A] text-slate-300 font-mono text-[12px] leading-relaxed flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <GitCommit className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>sprint.workflow.json</span>
              </span>
              <span className="text-[#10B981] font-semibold text-[10.5px]">● 100% On-Track</span>
            </div>

            <div className="space-y-2.5 text-[11.5px] font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Discovery & Scope Definition</span>
                  <p className="text-slate-400 text-[11px] font-mono mt-0.5">Clear deliverables • Zero ambiguity</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Thoughtful UI/UX Prototyping</span>
                  <p className="text-slate-400 text-[11px] font-mono mt-0.5">Figma components • User flow mapping</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Custom Full-Stack Engineering</span>
                  <p className="text-slate-400 text-[11px] font-mono mt-0.5">Next.js Edge • Tailored business logic</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Testing, Deployment & Handover</span>
                  <p className="text-slate-400 text-[11px] font-mono mt-0.5">100% repository ownership • Post-launch care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-white/90">
              <ShieldCheck className="h-3 w-3 text-[#2563EB]" />
              <span>Full Asset Ownership</span>
            </span>
            <span className="text-[#60A5FA]">Zero Lock-in</span>
          </div>
        </div>

        {/* Right Column: Genuine Production Deployment Showcase */}
        <div className="md:col-span-6 p-5 sm:p-6 bg-[#F8FAFC] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 text-[11.5px]">
              <span className="font-semibold text-[#0D1B2A] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Real Production Outcome</span>
              </span>
              <span className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                Verified Live Project
              </span>
            </div>

            {/* Authentic Project Thumbnail Preview */}
            <div className="relative rounded-xl border border-[#E7EAF0] bg-white overflow-hidden shadow-2xs group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/images/portfolio/branded-collections.png"
                  alt="Verified client production deployment by MK Digital Nexus"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-white border-t border-[#E7EAF0]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[12.5px] font-bold text-[#0D1B2A]">
                      Branded Collections
                    </h4>
                    <p className="text-[11px] text-[#667085]">
                      E-Commerce & Inventory Platform
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded">
                    <span>Launched</span>
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E7EAF0] flex items-center justify-between text-[11px] text-[#667085]">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
              <span className="font-medium text-[#0D1B2A]">Performance Tested</span>
            </span>
            <span className="text-[11px] font-mono text-[#0D1B2A] font-semibold">
              Edge Speed: &lt;300ms
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProcessHeroVisual;
