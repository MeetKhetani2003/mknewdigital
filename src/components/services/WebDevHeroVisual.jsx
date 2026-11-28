"use client";

import React from "react";
import { 
  Globe, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from "lucide-react";

export function WebDevHeroVisual() {
  return (
    <div className="relative mx-auto max-w-4xl rounded-2xl border border-[#E7EAF0] bg-white shadow-[0_16px_40px_-16px_rgba(13,27,42,0.08)] overflow-hidden">
      
      {/* =========================================================================
          1. BROWSER TOP BAR
          ========================================================================= */}
      <div className="h-9 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#475467] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
          <Globe className="h-3 w-3 text-[#2563EB]" />
          <span>yourbusiness.com</span>
        </div>
        <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>RESPONSIVE ENGINE</span>
        </span>
      </div>

      {/* =========================================================================
          2. CSS-BASED DESKTOP + MOBILE WEBSITE MOCKUP
          ========================================================================= */}
      <div className="p-5 sm:p-7 bg-[#F8FAFC]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
          
          {/* Main Desktop Viewport Canvas */}
          <div className="md:col-span-8 rounded-xl border border-[#E7EAF0] bg-white shadow-xs overflow-hidden">
            {/* Desktop Website Mini Navigation */}
            <div className="px-4 py-2.5 border-b border-[#E7EAF0] flex items-center justify-between bg-white text-[11px]">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-[#2563EB]" />
                <span className="font-bold text-[#0D1B2A] tracking-tight">Studio Enterprise</span>
              </div>
              <div className="flex items-center gap-3 text-[#667085] text-[10px]">
                <span className="text-[#0D1B2A] font-semibold">Home</span>
                <span>Services</span>
                <span>Work</span>
                <span className="px-2 py-0.5 rounded bg-[#2563EB] text-white font-medium">Contact</span>
              </div>
            </div>

            {/* Desktop Website Hero Canvas */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#2563EB]/10 text-[#2563EB] text-[10px] font-mono font-semibold">
                  CUSTOM PERFORMANCE
                </span>
                <div className="text-[16px] sm:text-[18px] font-bold text-[#0D1B2A] leading-snug">
                  Modern Engineering Built for Business Acceleration.
                </div>
                <p className="text-[11.5px] text-[#667085] leading-relaxed max-w-sm">
                  Sub-second load times, clean semantic architecture, and mobile-first responsiveness designed to convert visitors into customers.
                </p>
              </div>

              {/* Mini CTA row */}
              <div className="flex items-center gap-2 pt-1">
                <div className="h-7 px-3 rounded bg-[#2563EB] text-white text-[11px] font-semibold inline-flex items-center gap-1 shadow-2xs">
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-2.5 w-2.5" />
                </div>
                <div className="h-7 px-3 rounded border border-[#E7EAF0] text-[#0D1B2A] text-[11px] font-medium inline-flex items-center bg-[#F8FAFC]">
                  <span>Get in Touch</span>
                </div>
              </div>

              {/* Mini Feature Strip */}
              <div className="pt-3 border-t border-[#E7EAF0] grid grid-cols-3 gap-2 text-[10.5px]">
                <div className="p-2 rounded bg-[#F8FAFC] border border-[#E7EAF0]">
                  <div className="font-bold text-[#0D1B2A]">99+ Speed</div>
                  <div className="text-[9.5px] text-[#667085]">Core Web Vitals</div>
                </div>
                <div className="p-2 rounded bg-[#F8FAFC] border border-[#E7EAF0]">
                  <div className="font-bold text-[#0D1B2A]">100% SEO</div>
                  <div className="text-[9.5px] text-[#667085]">Semantic Schema</div>
                </div>
                <div className="p-2 rounded bg-[#F8FAFC] border border-[#E7EAF0]">
                  <div className="font-bold text-[#0D1B2A]">0% Bloat</div>
                  <div className="text-[9.5px] text-[#667085]">Clean Code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Fluid Mobile Viewport Mockup */}
          <div className="md:col-span-4 rounded-2xl border-2 border-[#CBD5E1] bg-white shadow-md overflow-hidden max-w-[220px] mx-auto md:max-w-none w-full">
            {/* Mobile Top Speaker/Sensor Bar */}
            <div className="h-5 bg-[#0D1B2A] flex items-center justify-center">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* Mobile Screen Content */}
            <div className="p-3.5 space-y-3 bg-white text-[10px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#E7EAF0]">
                <span className="font-bold text-[#0D1B2A] text-[11px]">Mobile View</span>
                <span className="text-[9px] text-[#10B981] font-mono font-bold bg-[#10B981]/10 px-1.5 py-0.5 rounded">375px Fluid</span>
              </div>

              <div className="space-y-1.5">
                <div className="text-[12px] font-bold text-[#0D1B2A] leading-tight">
                  Touch-Optimized Interaction
                </div>
                <p className="text-[10px] text-[#667085] leading-relaxed">
                  Smooth navigation, thumb-zone CTAs, and instant response.
                </p>
              </div>

              <div className="p-2 rounded bg-[#2563EB] text-white text-center font-semibold text-[10.5px]">
                One-Tap Inquiry
              </div>

              <div className="pt-2 border-t border-[#E7EAF0] flex items-center justify-between text-[9px] text-[#667085]">
                <span>✓ Mobile Navigation</span>
                <span>✓ Fast Touch</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. WORKBENCH BOTTOM SPECS
          ========================================================================= */}
      <div className="px-5 py-3 bg-white border-t border-[#E7EAF0] flex flex-wrap items-center justify-between text-[11.5px] text-[#667085]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#0D1B2A] font-semibold">
            <Monitor className="h-3.5 w-3.5 text-[#2563EB]" />
            <span>Desktop & Mobile Parity</span>
          </span>
          <span className="hidden sm:inline text-[#CBD5E1]">•</span>
          <span className="hidden sm:inline flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
            <span>Sub-Second TTFB</span>
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#2563EB] font-semibold">
          100% Custom Engineering
        </span>
      </div>

    </div>
  );
}

export default WebDevHeroVisual;
