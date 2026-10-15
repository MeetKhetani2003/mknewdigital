"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ProjectCardCompact } from "./ProjectCardCompact";
import type { Project } from "@/utils/projectsData";

interface ProjectCarouselProps {
  title: string;
  desc?: string;
  categoryTag?: string;
  projects: Project[];
  viewAllLink?: string;
  onViewCategory?: () => void;
  maxItems?: number; // default 10
}

export function ProjectCarousel({
  title,
  desc,
  categoryTag,
  projects,
  viewAllLink = "/portfolio",
  onViewCategory,
  maxItems = 10,
}: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Take between 5 to maxItems (max 10)
  const displayProjects = projects.slice(0, maxItems);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [displayProjects]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-l-4 border-accent pl-4 sm:pl-5">
        <div>
          {categoryTag && (
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              {categoryTag}
            </span>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900">
              {title}
            </h3>
            <span className="rounded-full bg-navy-900/5 border border-navy-900/10 px-3 py-1 text-xs font-bold text-navy-900 select-none">
              {displayProjects.length} Projects
            </span>
          </div>
          {desc && <p className="mt-1.5 text-sm sm:text-base text-muted max-w-2xl">{desc}</p>}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
          {onViewCategory ? (
            <button
              onClick={onViewCategory}
              className="mr-2 hidden md:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-accent transition-colors"
            >
              View Category ({projects.length}) <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : viewAllLink ? (
            <Link
              href={viewAllLink}
              className="mr-2 hidden md:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-accent transition-colors"
            >
              View Category <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}

          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              canScrollLeft
                ? "border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-navy-900 hover:text-white hover:border-navy-900 active:scale-95"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              canScrollRight
                ? "border-slate-300 bg-white text-navy-900 shadow-sm hover:bg-navy-900 hover:text-white hover:border-navy-900 active:scale-95"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1"
      >
        {displayProjects.map((p) => (
          <ProjectCardCompact key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
