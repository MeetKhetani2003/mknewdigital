"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  ArrowRight, 
  Globe, 
  Code2, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  ExternalLink 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const expertiseAreas = [
  {
    num: "01",
    title: "Digital Experiences",
    desc: "Creating meaningful online experiences through website design, user interfaces and responsive web development.",
    serviceHref: "/services/web-development",
    serviceLabel: "Explore Website Development",
    icon: Globe,
    badgeText: "Responsive UI/UX",
    visualType: "browser",
    imgSrc: "/images/portfolio/sasuma-spices.png",
    metaText: "Sub-Second Load Times • Custom Responsive Layouts",
  },
  {
    num: "02",
    title: "Software & Applications",
    desc: "Developing custom platforms, web applications and business software around real operational requirements.",
    serviceHref: "/services/custom-web-applications",
    serviceLabel: "Explore Web Applications",
    icon: Code2,
    badgeText: "Full-Stack Software",
    visualType: "app",
    imgSrc: "/images/portfolio/book.png",
    metaText: "Modular Next.js Architecture • Workflow Automation",
  },
  {
    num: "03",
    title: "E-commerce & Business Systems",
    desc: "Building digital commerce experiences and tools that help businesses manage products, customers and operations.",
    serviceHref: "/services/ecommerce-development",
    serviceLabel: "Explore E-commerce",
    icon: ShoppingBag,
    badgeText: "Commerce & Checkout",
    visualType: "store",
    imgSrc: "/images/portfolio/branded-collections.png",
    metaText: "Secure Online Payments • Inventory & Order State",
  },
  {
    num: "04",
    title: "Digital Growth & Brand Presence",
    desc: "Helping businesses strengthen their online presence through SEO, digital marketing and brand communication.",
    serviceHref: "/services/digital-marketing-seo",
    serviceLabel: "Explore SEO & Marketing",
    icon: TrendingUp,
    badgeText: "Search & Visibility",
    visualType: "seo",
    imgSrc: "/images/portfolio/radha-solar.png",
    metaText: "Technical SEO Standards • Search Engine Indexing",
  },
];

export function OurExpertise() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".expertise-header",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Grid items reveal
      gsap.fromTo(
        ".expertise-card",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".expertise-grid",
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
      id="our-expertise"
      aria-labelledby="expertise-heading"
      className="relative bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="expertise-header max-w-3xl mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>WHAT WE DO</span>
          </div>

          {/* Heading */}
          <h2
            id="expertise-heading"
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.18]"
          >
            Bringing Design, Technology & <span className="text-[#2563EB]">Business Together.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-[14.5px] sm:text-[16px] leading-relaxed text-[#667085]">
            Our work brings together multiple disciplines to create digital experiences and business solutions. From the first idea to the final implementation, we focus on connecting creativity with practical technology.
          </p>
        </div>

        {/* =========================================================================
            FOUR-PART STRUCTURED EDITORIAL GRID
            ========================================================================= */}
        <div className="expertise-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.num}
                className="expertise-card group rounded-2xl border border-[#E7EAF0] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)]"
              >
                <div>
                  {/* Top Bar: Number & Category Badge */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F1F5F9]">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-2.5 py-0.5 rounded-md">
                        {area.num}
                      </span>
                      <span className="text-[12px] font-semibold text-[#0D1B2A] flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-[#2563EB]" />
                        <span>{area.badgeText}</span>
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#667085] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E7EAF0]">
                      MK Standard
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0D1B2A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[14px] sm:text-[14.5px] leading-relaxed text-[#667085]">
                    {area.desc}
                  </p>

                  {/* Visual Preview Container */}
                  <div className="mt-5 rounded-xl border border-[#E7EAF0] overflow-hidden bg-[#F8FAFC]">
                    {/* Mini Window Bar */}
                    <div className="h-6 bg-[#F1F5F9] border-b border-[#E7EAF0] px-3 flex items-center justify-between text-[10px] text-[#667085]">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      </div>
                      <span className="font-mono text-[9.5px] text-[#667085]">Verified Studio Work</span>
                    </div>

                    {/* Image Mockup */}
                    <div className="relative aspect-[16/7.5] overflow-hidden bg-slate-100">
                      <img
                        src={area.imgSrc}
                        alt={`${area.title} live delivery`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Technical Meta Note */}
                  <div className="mt-3.5 flex items-center gap-1.5 text-[11.5px] text-[#667085]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                    <span>{area.metaText}</span>
                  </div>
                </div>

                {/* Contextual Service Link */}
                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                  <Link
                    href={area.serviceHref}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors group/link"
                  >
                    <span>{area.serviceLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-1 text-[#2563EB]" />
                  </Link>

                  <span className="font-mono text-[10.5px] text-[#667085]">
                    Explore Service →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurExpertise;
