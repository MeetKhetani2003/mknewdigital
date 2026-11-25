"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Lock,
  Sparkles
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    id: "anvil",
    title: "Anvil Techno Forge",
    tabLabel: "Anvil Techno Forge",
    category: "Industrial Manufacturing · B2B",
    url: "https://www.anviltechnoforge.co.in",
    displayUrl: "www.anviltechnoforge.co.in",
    img: "/websites/AnvilTechno.png",
    desc: "A high-performance corporate platform engineered for Anvil Techno Forge to showcase heavy precision forging capabilities, technical machinery specs, and streamline global B2B Request-for-Quote (RFQ) inquiries from international buyers.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "SEO Schema"],
    caseStudyHref: "/portfolio/anvil",
  },
  {
    id: "shynex-detailing",
    title: "Shynex Detailing",
    tabLabel: "Shynex Detailing (Canada)",
    category: "Automotive Protection · Canada",
    url: "https://www.shynexdetailing.ca/",
    displayUrl: "www.shynexdetailing.ca",
    img: "/websites/shynex.png",
    desc: "A premium digital presence for an automotive protection and detailing studio in Canada, featuring interactive package selection, service inquiry workflows, and high-impact visual storytelling.",
    techStack: ["Next.js", "Tailwind CSS", "GSAP", "Dynamic Booking", "Local SEO"],
    caseStudyHref: "/portfolio/shynex-detailing",
  },
  {
    id: "groovy-cafe",
    title: "Groovy Cafe",
    tabLabel: "Groovy Cafe",
    category: "Hospitality & Dining · Web Experience",
    url: "https://groovycafe.in/",
    displayUrl: "www.groovycafe.in",
    img: "/websites/GroovyCafe.png",
    desc: "An engaging cafe and dining experience platform with an interactive digital food menu, table reservation inquiries, and dynamic location guides for culinary visitors.",
    techStack: ["Next.js", "Tailwind CSS", "React", "WhatsApp Menu", "Framer Motion"],
    caseStudyHref: "/portfolio/groovy-cafe",
  },
  {
    id: "ravi-prakash-industries",
    title: "Ravi Prakash Industries",
    tabLabel: "Ravi Prakash Industries",
    category: "Chemical & Process Equipment · Export",
    url: "https://www.raviprakashindustries.in/",
    displayUrl: "www.raviprakashindustries.in",
    img: "/websites/RaviprakashIndustries.png",
    desc: "An enterprise manufacturing catalog showcasing specialized chemical and industrial processing equipment with automated RFQ routing for domestic and overseas clients.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "RFQ System", "Schema.org"],
    caseStudyHref: "/portfolio/ravi-prakash-industries",
  },
];

export function SelectedCaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef(null);
  const touchStartXRef = useRef(null);

  const activeProject = caseStudies[activeIndex];

  // Navigate to previous project
  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 250);
  }, []);

  // Navigate to next project
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 250);
  }, []);

  // Jump to specific slide
  const handleSelect = (index) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  // Optional auto-rotation (pauses on hover or interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // GSAP scroll trigger for initial entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-study-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="case-study"
      className="relative bg-[#FFFFFF] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 border-t border-[#E7EAF0] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER & CAROUSEL CONTROLS
           ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="case-study-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Selected Work</span>
            </div>

            <h2 className="case-study-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
              Ideas Into Digital Experiences.
            </h2>

            <p className="case-study-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Every project starts with a business challenge. We turn those challenges into thoughtful digital experiences through design, technology, and development.
            </p>
          </div>

          {/* Carousel Arrow Controls & Indicator */}
          <div className="case-study-fade flex items-center gap-3 shrink-0">
            <div className="font-mono text-[12px] font-medium text-[#667085] px-2">
              <span className="text-[#0D1B2A] font-bold">0{activeIndex + 1}</span>
              <span className="mx-1 text-[#CBD5E1]">/</span>
              <span>0{caseStudies.length}</span>
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Case Study"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E7EAF0] bg-[#FFFFFF] text-[#0D1B2A] shadow-sm transition-all duration-150 hover:bg-[#F5F7FA] hover:border-[#CBD5E1] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Case Study"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E7EAF0] bg-[#FFFFFF] text-[#0D1B2A] shadow-sm transition-all duration-150 hover:bg-[#F5F7FA] hover:border-[#CBD5E1] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* =========================================
            PROJECT SELECTOR TABS
           ========================================= */}
        <div className="case-study-fade flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {caseStudies.map((study, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={study.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#0D1B2A] text-[#FFFFFF] shadow-sm"
                    : "bg-[#FFFFFF] border border-[#E7EAF0] text-[#667085] hover:text-[#0D1B2A] hover:bg-[#F5F7FA]"
                }`}
              >
                <span>{study.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================
            CAROUSEL CONTENT CONTAINER
           ========================================= */}
        <div 
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-2xl border border-[#E7EAF0] bg-[#F5F7FA] p-6 sm:p-8 lg:p-10 transition-all duration-300"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT COLUMN: PROJECT DETAILS */}
          <div 
            className={`lg:col-span-5 flex flex-col justify-between transition-opacity duration-200 ${
              isTransitioning ? "opacity-40" : "opacity-100"
            }`}
          >
            <div>
              {/* Category label */}
              <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#2563EB]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                <span>{activeProject.category}</span>
              </div>

              {/* Actual project name */}
              <h3 className="mt-2.5 text-[24px] sm:text-[28px] font-bold text-[#0D1B2A] tracking-[-0.02em]">
                {activeProject.title}
              </h3>

              {/* Short project description */}
              <p className="mt-3 text-[14px] sm:text-[14.5px] text-[#667085] leading-relaxed min-h-[72px]">
                {activeProject.desc}
              </p>

              {/* Technologies Used */}
              <div className="mt-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#667085] block mb-2.5">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E7EAF0] text-[12px] font-medium text-[#0D1B2A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 pt-6 border-t border-[#E7EAF0] flex flex-wrap items-center gap-5">
              <Link
                href={activeProject.caseStudyHref}
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors group"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#2563EB]" />
              </Link>

              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#667085] hover:text-[#0D1B2A] transition-colors group"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: REFINED BROWSER-WINDOW MOCKUP */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] shadow-[0_12px_36px_-12px_rgba(13,27,42,0.08)] overflow-hidden group">
              
              {/* Browser Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFFFFF] border-b border-[#E7EAF0]">
                {/* Window control dots */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-mono text-[#667085] max-w-[200px] sm:max-w-xs truncate">
                  <Lock className="h-2.5 w-2.5 text-[#10B981] shrink-0" />
                  <span className="truncate">{activeProject.displayUrl}</span>
                </div>

                {/* Live Badge */}
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-medium text-[#10B981] hover:text-[#059669] transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="hidden sm:inline">Live</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Website Screenshot with Smooth Crossfade */}
              <div 
                className={`relative aspect-[16/10] w-full overflow-hidden bg-slate-100 transition-opacity duration-300 ${
                  isTransitioning ? "opacity-30" : "opacity-100"
                }`}
              >
                <Image
                  key={activeProject.id}
                  src={activeProject.img}
                  alt={`${activeProject.title} live website developed by MK Digital Nexus`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 680px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority={activeIndex === 0}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SelectedCaseStudy;
