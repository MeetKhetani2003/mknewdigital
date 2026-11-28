"use client";

import React from "react";
import Link from "next/link";
import { Search, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export function InsightsHero({ searchQuery, setSearchQuery, onSearchSubmit }) {
  return (
    <section className="relative bg-white pt-10 sm:pt-14 lg:pt-18 pb-8 sm:pb-12 border-b border-[#E7EAF0] overflow-hidden text-center">
      {/* Subtle blue ambient radial gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(37,99,235,0.05),transparent)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-medium text-[#667085]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#0D1B2A]">
                Home
              </Link>
            </li>
            <li className="text-[#CBD5E1]">/</li>
            <li className="text-[#0D1B2A] font-semibold">
              Insights & Knowledge
            </li>
          </ol>
        </nav>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span>INSIGHTS & KNOWLEDGE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#0D1B2A] leading-[1.15] max-w-3xl mx-auto">
          Ideas, Insights & Knowledge for a <span className="text-[#2563EB]">Smarter Digital Future.</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085]">
          Explore practical insights, technology trends, development guides and business strategies that help you make better digital decisions and move your business forward.
        </p>

        {/* Search Articles & Quick CTA Bar */}
        <div className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, architecture & strategies..."
              className="w-full h-12 pl-10 pr-4 rounded-xl border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] shadow-2xs transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
              aria-label="Search articles"
            />
          </div>

          <a
            href="#featured-article"
            className="w-full sm:w-auto shrink-0 h-12 px-6 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#1D4ED8] transition-all duration-150 shadow-sm cursor-pointer"
          >
            <span>Explore Insights</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Reassurance Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[12px] font-medium text-[#667085]">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
            <span>Practical Engineering</span>
          </span>
          <span className="text-[#CBD5E1]">•</span>
          <span>Zero Clickbait</span>
          <span className="text-[#CBD5E1]">•</span>
          <span>Business Architecture</span>
        </div>

      </div>
    </section>
  );
}

export default InsightsHero;
