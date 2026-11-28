"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";

export function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section 
      id="featured-article" 
      aria-label="Featured Article"
      className="relative bg-[#F8FAFC] py-12 sm:py-16 border-b border-[#E7EAF0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB]" />
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A]">
              FEATURED ANALYSIS
            </span>
          </div>

          <span className="text-[12px] text-[#667085] hidden sm:inline-block">
            Curated Architectural Read
          </span>
        </div>

        {/* Featured Card */}
        <div className="rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden shadow-[0_16px_40px_-16px_rgba(13,27,42,0.06)] group transition-all duration-300 hover:border-[#CBD5E1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Cover Image Container */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-slate-100">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#0D1B2A] border border-white/40 shadow-xs">
                  <Sparkles className="h-3 w-3 text-[#2563EB]" />
                  <span>{article.category}</span>
                </span>
              </div>
            </div>

            {/* Article Details & Excerpt */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                {/* Meta Row: Date & Read Time */}
                <div className="flex items-center gap-3 text-[12px] text-[#667085] mb-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-[#94A3B8]" />
                    <span>{article.formattedDate}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#94A3B8]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#0D1B2A] tracking-tight leading-[1.25] group-hover:text-[#2563EB] transition-colors">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="mt-3.5 text-[14.5px] sm:text-[15px] leading-relaxed text-[#667085]">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read More Link */}
              <div className="mt-8 pt-6 border-t border-[#E7EAF0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-[12px]">
                    MK
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#0D1B2A]">
                      {article.author.name}
                    </div>
                    <div className="text-[11px] text-[#667085]">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedArticle;
