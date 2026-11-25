"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Factory, 
  Stethoscope, 
  Hotel, 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Utensils, 
  Briefcase,
  ArrowRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  {
    number: "01",
    title: "Manufacturing & Industrial",
    desc: "Company websites, product catalogues and business enquiry systems.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Healthcare",
    desc: "Doctor websites, clinic platforms and appointment solutions.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Hospitality & Travel",
    desc: "Hotel websites, booking platforms and property management solutions.",
    icon: Hotel,
  },
  {
    number: "04",
    title: "Retail & E-commerce",
    desc: "Online stores, product catalogues and order management.",
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "Real Estate",
    desc: "Property showcases, lead generation and listing platforms.",
    icon: Building2,
  },
  {
    number: "06",
    title: "Education",
    desc: "Institute websites, course platforms and student management systems.",
    icon: GraduationCap,
  },
  {
    number: "07",
    title: "Food & Restaurants",
    desc: "Restaurant websites, digital menus and ordering solutions.",
    icon: Utensils,
  },
  {
    number: "08",
    title: "Professional Services",
    desc: "Business websites, CRM systems and enquiry management.",
    icon: Briefcase,
  },
];

export function IndustriesWeServe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".industries-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Industry cards staggered reveal
      gsap.fromTo(
        ".industry-card-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      id="industries"
      className="relative bg-[#FFFFFF] pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 border-t border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="industries-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="industries-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            Digital Solutions for Businesses That Move Industries Forward.
          </h2>

          <p className="industries-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            From growing businesses to established enterprises, we build digital experiences and software solutions designed around the way different industries work.
          </p>
        </div>

        {/* =========================================
            EDITORIAL 4-COLUMN GRID
           ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.number}
                className="industry-card-item group relative rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] p-5 sm:p-6 transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_-10px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon and Subtle Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F7FA] border border-[#E7EAF0] text-[#2563EB] transition-colors duration-200 group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] group-hover:border-[#2563EB]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#667085]/60">
                      {industry.number}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors duration-150">
                    {industry.title}
                  </h3>

                  {/* Industry Description */}
                  <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">
                    {industry.desc}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-medium text-[#667085]">
                  <span>Tailored Development</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#CBD5E1] transition-transform duration-150 group-hover:translate-x-1 group-hover:text-[#2563EB]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default IndustriesWeServe;
