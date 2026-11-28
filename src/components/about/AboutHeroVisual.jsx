"use client";

import React from "react";
import Image from "next/image";
import { Code2, Globe, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutHeroVisual() {
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
          <Globe className="h-3 w-3 text-[#2563EB]" />
          <span>mkdigitalnexus.in/about</span>
        </div>
        <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
          HTTPS
        </span>
      </div>

      {/* =========================================================================
          2. WORKBENCH / CRAFTSMANSHIP CONTENT
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E7EAF0]">
        
        {/* Left Column: Clean Engineering & Architecture Code */}
        <div className="md:col-span-6 p-5 sm:p-6 bg-[#0D1B2A] text-slate-300 font-mono text-[12px] leading-relaxed flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Code2 className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>craftsmanship.config.ts</span>
              </span>
              <span className="text-[#10B981] font-semibold">● Production Ready</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-slate-500">// MK Digital Nexus Engineering Standards</p>
              <p>
                <span className="text-[#60A5FA]">const</span> <span className="text-[#FBBF24]">digitalSolution</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">architecture:</span> <span className="text-[#34D399]">&quot;Next.js 15 App Router&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">performance:</span> <span className="text-[#34D399]">&quot;Sub-Second Global Edge&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">cmsBloat:</span> <span className="text-[#F87171]">false</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">codeOwnership:</span> <span className="text-[#60A5FA]">100</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">clientCollaboration:</span> <span className="text-[#34D399]">&quot;Direct with Founder&quot;</span>,
              </p>
              <p>&#125;;</p>
              <p className="pt-2 text-slate-500">// Engineered for measurable business results</p>
              <p>
                <span className="text-[#C084FC]">export default</span> digitalSolution;
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3 w-3 text-[#F59E0B]" />
              <span>99+ PageSpeed Guarantee</span>
            </span>
            <span className="text-[#60A5FA]">Zero Lock-in</span>
          </div>
        </div>

        {/* Right Column: Authentic Live Project Interface Showcase */}
        <div className="md:col-span-6 p-5 sm:p-6 bg-[#F8FAFC] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 text-[11.5px]">
              <span className="font-semibold text-[#0D1B2A] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>Verified Client Deliveries</span>
              </span>
              <span className="text-[11px] text-[#667085] bg-white px-2 py-0.5 rounded border border-[#E7EAF0]">
                90+ Shipped Sites
              </span>
            </div>

            {/* Authentic Project Thumbnail Preview */}
            <div className="relative rounded-xl border border-[#E7EAF0] bg-white overflow-hidden shadow-2xs group">
              <div className="relative aspect-[16/9.5] overflow-hidden bg-slate-100">
                <img
                  src="/images/portfolio/branded-collections.png"
                  alt="Verified MK Digital Nexus client production deployment"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px]">
                  <span className="font-semibold px-2 py-0.5 rounded bg-[#0D1B2A]/80 backdrop-blur-xs">
                    Branded Collections
                  </span>
                  <span className="font-mono text-[10px] bg-[#2563EB] px-2 py-0.5 rounded">
                    Live Next.js Storefront
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3.5 space-y-1.5">
              <div className="flex items-center gap-2 text-[12px] text-[#475467]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                <span>Full-Stack Next.js, React & Node.js development</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[#475467]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                <span>Modern UI/UX architecture & conversion focus</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
            <span className="flex items-center gap-1.5 text-[#0D1B2A] font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Junagadh, India & Worldwide</span>
            </span>
            <span className="text-[#2563EB] font-semibold">4.9★ Verified</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          3. BOTTOM CREDIBILITY STRIP
          ========================================================================= */}
      <div className="bg-white border-t border-[#E7EAF0] px-4 py-3 flex flex-wrap items-center justify-around gap-3 text-[12px] text-[#475467]">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span>Direct Founder Collaboration</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          <span>100% Code & Asset Ownership</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
          <span>Milestone-Based Transparent Delivery</span>
        </div>
      </div>

    </div>
  );
}

export default AboutHeroVisual;
