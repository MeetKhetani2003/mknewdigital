"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

export function PageHero({
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ],
  eyebrow = "WHAT WE DO",
  heading = "Digital Solutions Built Around Your Business.",
  highlightText = "Your Business.",
  description = "From custom websites and web applications to business software and digital growth solutions, we help businesses turn their ideas into powerful digital experiences.",
  primaryCta = {
    text: "Discuss Your Project",
    href: null, // null defaults to opening the project consultation modal
  },
  secondaryCta = {
    text: "Explore Our Work",
    href: "/portfolio",
  },
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-hero-fade",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Format heading with optional blue text emphasis
  const renderHeading = () => {
    if (typeof heading !== "string" || !highlightText) {
      return heading;
    }

    if (heading.includes(highlightText)) {
      const parts = heading.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="text-[#2563EB]">{highlightText}</span>
          {parts[1]}
        </>
      );
    }

    return heading;
  };

  const handlePrimaryClick = (e) => {
    if (primaryCta?.onClick) {
      primaryCta.onClick(e);
      return;
    }
    if (!primaryCta?.href) {
      e.preventDefault();
      triggerBookServiceModal();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 border-b border-[#E7EAF0] overflow-hidden text-center"
    >
      {/* Subtle blue ambient radial gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(37,99,235,0.05),transparent)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            BREADCRUMB NAVIGATION
           ========================================= */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="page-hero-fade mb-4">
            <ol className="inline-flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-medium text-[#667085]">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="inline-flex items-center gap-2">
                    {idx > 0 && <span className="text-[#CBD5E1]">/</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-[#0D1B2A]"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-[#0D1B2A] font-semibold" : ""}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* =========================================
            EYEBROW PILL
           ========================================= */}
        {eyebrow && (
          <div className="page-hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>{eyebrow}</span>
          </div>
        )}

        {/* =========================================
            MAIN HEADING
           ========================================= */}
        <h1 className="page-hero-fade text-[34px] sm:text-[44px] lg:text-[52px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15] max-w-3xl mx-auto">
          {renderHeading()}
        </h1>

        {/* =========================================
            SUPPORTING DESCRIPTION
           ========================================= */}
        {description && (
          <p className="page-hero-fade mt-4 max-w-2xl mx-auto text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085]">
            {description}
          </p>
        )}

        {/* =========================================
            CALL TO ACTION BUTTONS
           ========================================= */}
        {(primaryCta || secondaryCta) && (
          <div className="page-hero-fade mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {primaryCta && (
              primaryCta.href ? (
                <Link
                  href={primaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#2563EB] px-6 py-3 text-[13.5px] font-medium text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#1D4ED8] active:bg-[#1E40AF] group cursor-pointer"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={handlePrimaryClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#2563EB] px-6 py-3 text-[13.5px] font-medium text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#1D4ED8] active:bg-[#1E40AF] group cursor-pointer"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
              )
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href || "/portfolio"}
                onClick={secondaryCta.onClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#E7EAF0] bg-[#FFFFFF] px-5 py-3 text-[13.5px] font-medium text-[#0D1B2A] transition-all duration-150 hover:bg-[#F5F7FA] hover:border-[#CBD5E1] cursor-pointer"
              >
                <span>{secondaryCta.text}</span>
              </Link>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

export default PageHero;
