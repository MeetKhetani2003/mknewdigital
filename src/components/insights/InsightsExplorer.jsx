"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Search, Filter, RefreshCw, Sparkles } from "lucide-react";
import { categories } from "@/data/articlesData";

export function InsightsExplorer({ articles, searchQuery, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    let result = articles.filter((art) => {
      // Category filter
      if (selectedCategory !== "All" && art.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = art.title.toLowerCase().includes(query);
        const inExcerpt = art.excerpt.toLowerCase().includes(query);
        const inCategory = art.category.toLowerCase().includes(query);
        if (!inTitle && !inExcerpt && !inCategory) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [articles, selectedCategory, searchQuery, sortBy]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortBy("latest");
    setVisibleCount(6);
  };

  return (
    <section 
      id="browse-categories" 
      aria-label="Browse Articles by Category"
      className="relative bg-white py-14 sm:py-18 lg:py-20 border-b border-[#E7EAF0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. CATEGORY PILL FILTER NAVIGATION
            ========================================================================= */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>Browse by Category</span>
            </span>

            <span className="text-[12px] text-[#667085] font-mono">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {/* Horizontally scrollable category pills on mobile, wrapped on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "bg-[#F8FAFC] text-[#475467] border border-[#E7EAF0] hover:bg-[#F1F5F9] hover:text-[#0D1B2A]"
                  }`}
                  aria-pressed={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            2. SORT & SEARCH BAR FILTER STATUS
            ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-[#E7EAF0] text-[13px]">
          <div className="flex items-center gap-2 text-[#667085]">
            <span>Sorted by:</span>
            <div className="flex items-center gap-1 bg-[#F8FAFC] p-1 rounded-lg border border-[#E7EAF0]">
              <button
                type="button"
                onClick={() => setSortBy("latest")}
                className={`px-3 py-1 rounded text-[12px] font-semibold transition-colors cursor-pointer ${
                  sortBy === "latest" ? "bg-white text-[#2563EB] shadow-2xs" : "text-[#667085] hover:text-[#0D1B2A]"
                }`}
              >
                Latest
              </button>
              <button
                type="button"
                onClick={() => setSortBy("oldest")}
                className={`px-3 py-1 rounded text-[12px] font-semibold transition-colors cursor-pointer ${
                  sortBy === "oldest" ? "bg-white text-[#2563EB] shadow-2xs" : "text-[#667085] hover:text-[#0D1B2A]"
                }`}
              >
                Oldest
              </button>
            </div>
          </div>

          {(searchQuery || selectedCategory !== "All") && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2563EB] hover:underline cursor-pointer"
            >
              <RefreshCw className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* =========================================================================
            3. ARTICLE GRID (3-COL DESKTOP, 2-COL TABLET, 1-COL MOBILE)
            ========================================================================= */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden shadow-2xs transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_28px_-12px_rgba(13,27,42,0.08)]"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 text-[11px] font-semibold text-[#0D1B2A] border border-white/40 shadow-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Date & Read Time */}
                    <div className="flex items-center gap-2.5 text-[11.5px] font-mono text-[#667085] mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[#94A3B8]" />
                        <span>{article.formattedDate}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[#94A3B8]" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0D1B2A] tracking-[-0.015em] leading-[1.3] group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#667085] line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Read More Link */}
                <div className="p-6 pt-0 border-t border-[#F8FAFC]">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="pt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="py-16 text-center rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0] p-8 max-w-xl mx-auto">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-[18px] font-bold text-[#0D1B2A]">
              No Matching Articles Found
            </h3>
            <p className="mt-2 text-[14px] text-[#667085]">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* =========================================================================
            4. LOAD MORE / PAGINATION BUTTON
            ========================================================================= */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0D1B2A] text-[13.5px] font-semibold hover:bg-[#F1F5F9] hover:border-[#94A3B8] transition-all cursor-pointer shadow-2xs"
            >
              <span>Load More Insights</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default InsightsExplorer;
