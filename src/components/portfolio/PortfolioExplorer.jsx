"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight, ArrowRight, Globe, Layers, Filter } from "lucide-react";
import { projects } from "@/utils/projectsData";

const CATEGORIES = [
  "All Projects",
  "Business Websites",
  "E-commerce",
  "Web Applications",
  "CRM & Business Software",
  "Landing Pages",
  "Other Digital Solutions",
];

export function PortfolioExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [imageErrors, setImageErrors] = useState({});

  // Dynamically calculate project counts for each category
  const categoryCounts = useMemo(() => {
    const counts = { "All Projects": projects.length };
    for (const item of projects) {
      counts[item.cat] = (counts[item.cat] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter categories to only display those with at least 1 verified project
  const activeCategories = useMemo(() => {
    return CATEGORIES.filter((cat) => (categoryCounts[cat] || 0) > 0);
  }, [categoryCounts]);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Projects" || item.cat === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      return (
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.cat.toLowerCase().includes(query) ||
        item.sector.toLowerCase().includes(query) ||
        item.url.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="portfolio-explorer"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16 border-b border-[#E7EAF0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            1. SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>EXPLORE OUR WORK</span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            A Collection of Digital Experiences.
          </h2>

          <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            Explore our work across websites, e-commerce platforms, custom applications and business solutions. Each project represents a different business requirement and development challenge.
          </p>
        </div>

        {/* =========================================
            2. INTERACTIVE CATEGORY FILTER TABS & SEARCH
           ========================================= */}
        <div className="border-t border-[#F1F5F9] pt-6 pb-2">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Portfolio category filter"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
            >
              {activeCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;

                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isSelected
                        ? "bg-[#0D1B2A] text-white shadow-xs"
                        : "bg-[#F5F7FA] text-[#667085] hover:bg-[#E7EAF0] hover:text-[#0D1B2A] border border-[#E7EAF0]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] font-mono px-1.5 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#E7EAF0] text-[#667085]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8] pointer-events-none" />
              <input
                type="text"
                placeholder={`Search ${projects.length} projects...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-9 rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] text-[13px] text-[#0D1B2A] placeholder-[#94A3B8] focus:bg-white focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all"
                aria-label="Search portfolio projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0D1B2A] p-0.5"
                  aria-label="Clear search query"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Active Status bar */}
          <div className="mt-4 flex items-center justify-between text-[12.5px] text-[#667085]">
            <span>
              Showing <strong className="text-[#0D1B2A]">{filteredProjects.length}</strong> of{" "}
              {projects.length} verified websites
              {selectedCategory !== "All Projects" && (
                <span> in <span className="font-semibold text-[#2563EB]">{selectedCategory}</span></span>
              )}
            </span>

            {(selectedCategory !== "All Projects" || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Projects");
                  setSearchQuery("");
                }}
                className="text-[12px] font-semibold text-[#2563EB] hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* =========================================
            3. REFINED EDITORIAL PROJECT GRID
           ========================================= */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#E7EAF0] bg-[#F8FAFC] p-12 text-center my-8">
            <p className="text-[15px] font-semibold text-[#0D1B2A]">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="mt-1.5 text-[13px] text-[#667085]">
              Try searching with another keyword or explore all project categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All Projects");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-all"
            >
              <span>View All {projects.length} Projects</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-6">
            {filteredProjects.map((project) => {
              const cleanDomain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
              const hasImageFailed = imageErrors[project.id];

              return (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_-10px_rgba(13,27,42,0.08)] hover:-translate-y-1"
                >
                  {/* Visual Window Header */}
                  <div className="relative overflow-hidden bg-[#F8FAFC] border-b border-[#E7EAF0]">
                    {/* Browser Mockup Top Bar */}
                    <div className="h-7 bg-[#F8FAFC] border-b border-[#E7EAF0]/80 px-3 flex items-center justify-between text-[11px] text-[#94A3B8]">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                        <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                      </div>
                      <span className="font-mono text-[10.5px] truncate max-w-[170px] text-[#94A3B8]">
                        {cleanDomain}
                      </span>
                    </div>

                    {/* Screenshot / Visual Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                      {!hasImageFailed ? (
                        <img
                          src={project.img}
                          alt={`${project.title} live production website`}
                          loading="lazy"
                          onError={() => handleImageError(project.id)}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        /* Editorial Architectural Fallback Mockup */
                        <div className="h-full w-full flex flex-col justify-between p-5 bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F6]">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] font-bold text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded">
                              LIVE
                            </span>
                            <span className="font-mono text-[11px] text-[#667085]">
                              Next.js
                            </span>
                          </div>
                          <div>
                            <div className="text-[17px] font-bold text-[#0D1B2A]">
                              {project.title}
                            </div>
                            <div className="text-[11.5px] font-mono text-[#667085] mt-0.5">
                              {cleanDomain}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-[#2563EB] font-medium">
                            <Globe className="h-3.5 w-3.5" />
                            <span>Verified Production Deployment</span>
                          </div>
                        </div>
                      )}

                      {/* Category Overlay Tag */}
                      <div className="absolute bottom-2.5 left-2.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-semibold text-[#0D1B2A] border border-[#E7EAF0] shadow-xs">
                          {project.cat}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#667085]/80">
                          {project.sector}
                        </span>
                      </div>

                      <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0D1B2A] tracking-[-0.01em] group-hover:text-[#2563EB] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      
                      <p className="mt-2 text-[13px] leading-relaxed text-[#667085] line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    {/* Actions / Links */}
                    <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors group/link"
                      >
                        <span>Case Details</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5" />
                      </Link>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/btn"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

export default PortfolioExplorer;
