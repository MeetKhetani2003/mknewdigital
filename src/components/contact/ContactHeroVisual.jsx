"use client";

import React from "react";
import { 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Globe,
  PhoneCall
} from "lucide-react";

export function ContactHeroVisual() {
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
          <span>mkdigitalnexus.in/contact</span>
        </div>
        <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>OPEN FOR NEW PROJECTS</span>
        </span>
      </div>

      {/* =========================================================================
          2. WORKBENCH / DIRECT COLLABORATION DIALOGUE
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E7EAF0]">
        
        {/* Left Column: Direct Project Consultation Dialogue Simulation */}
        <div className="md:col-span-7 p-5 sm:p-6 bg-[#0D1B2A] text-slate-300 font-sans text-[12.5px] leading-relaxed flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MessageSquare className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>consultation.session</span>
              </span>
              <span className="text-[#34D399] font-semibold">Direct Collaboration</span>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-3.5">
              {/* Client Bubble */}
              <div className="flex flex-col items-start max-w-[90%]">
                <span className="text-[10px] font-mono text-slate-400 mb-1">CLIENT REQUIREMENT</span>
                <div className="p-3 rounded-xl rounded-tl-sm bg-white/10 border border-white/10 text-white leading-relaxed">
                  &ldquo;We need a custom e-commerce portal and business software to manage inventory across multiple branches with sub-second performance.&rdquo;
                </div>
              </div>

              {/* MK Studio Response Bubble */}
              <div className="flex flex-col items-end max-w-[90%] ml-auto">
                <span className="text-[10px] font-mono text-[#60A5FA] mb-1">MK DIGITAL NEXUS</span>
                <div className="p-3 rounded-xl rounded-tr-sm bg-[#2563EB] text-white leading-relaxed shadow-sm">
                  &ldquo;Understood. We&apos;ll architect a clean Next.js solution with edge database pooling, custom admin dashboards, and zero template bloat.&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-white/90">
              <Clock className="h-3 w-3 text-[#F59E0B]" />
              <span>Response: Within 24 Hours</span>
            </span>
            <span className="text-[#34D399]">Direct Developer Access</span>
          </div>
        </div>

        {/* Right Column: Verified Studio Reassurance & Guarantees */}
        <div className="md:col-span-5 p-5 sm:p-6 bg-[#F8FAFC] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 text-[11.5px]">
              <span className="font-semibold text-[#0D1B2A] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>What to Expect</span>
              </span>
              <span className="text-[10.5px] font-mono text-[#667085] bg-white px-2 py-0.5 rounded border border-[#E7EAF0]">
                Verified Process
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-2.5 rounded-lg bg-white border border-[#E7EAF0] shadow-2xs flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] font-bold text-[#0D1B2A]">
                    Transparent Project Scoping
                  </div>
                  <div className="text-[11px] text-[#667085] leading-relaxed">
                    Clear milestones, tech stack roadmap and honest pricing.
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E7EAF0] shadow-2xs flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] font-bold text-[#0D1B2A]">
                    100% Asset & Code Ownership
                  </div>
                  <div className="text-[11px] text-[#667085] leading-relaxed">
                    Full repository and IP handover upon project completion.
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E7EAF0] shadow-2xs flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] font-bold text-[#0D1B2A]">
                    Direct Technical Lead
                  </div>
                  <div className="text-[11px] text-[#667085] leading-relaxed">
                    Collaborate directly with developers, not salespeople.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E7EAF0] flex items-center justify-between text-[11px] text-[#667085]">
            <span className="font-medium text-[#0D1B2A]">Based in Junagadh, India</span>
            <span className="text-[#2563EB] font-semibold">Worldwide Delivery</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ContactHeroVisual;
