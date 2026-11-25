"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Globe, 
  Code2, 
  ShoppingBag, 
  Database, 
  Layers, 
  Cpu, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    number: "01",
    title: "Website Development",
    desc: "Build modern, responsive, SEO-friendly business websites that establish credibility and generate inquiries.",
    icon: Globe,
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "Custom Software Development",
    desc: "Purpose-built software designed around your business operations, internal systems, and workflows.",
    icon: Code2,
    href: "/services/custom-web-applications",
  },
  {
    number: "03",
    title: "E-commerce Development",
    desc: "Powerful online stores that simplify product catalogs, orders, payment gateways, and customer experiences.",
    icon: ShoppingBag,
    href: "/services/ecommerce-development",
  },
  {
    number: "04",
    title: "CRM & Business Automation",
    desc: "Centralize business operations with intelligent dashboards, customer lead pipelines, and automated workflows.",
    icon: Database,
    href: "/services/crm-business-software",
  },
  {
    number: "05",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android mobile applications built for fluid touch performance and offline caching.",
    icon: Layers,
    href: "/services/mobile-app-development",
  },
  {
    number: "06",
    title: "Digital Marketing & SEO",
    desc: "Connect your core business processes with scalable search authority, Google profile ranking, and high-ROAS ads.",
    icon: Cpu,
    href: "/services/digital-marketing-seo",
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".services-fade-in",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Service cards staggered reveal
      gsap.fromTo(
        ".service-card-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom CTA card reveal
      gsap.fromTo(
        ".services-cta-banner",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-cta-banner",
            start: "top 90%",
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
      id="services"
      className="relative w-full bg-[#FFFFFF] border-b border-[#E7EAF0] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 overflow-hidden"
    >
      {/* Subtle warm off-white ambient radial gradient with delicate gold accent undertone */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_15%,rgba(217,179,90,0.025),transparent_75%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[1340px] px-5 sm:px-8 relative z-10">
        
        {/* =========================================
            HEADER: LABEL, MAIN HEADING & SUPPORTING TEXT
           ========================================= */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          
          {/* Small Section Label */}
          <div className="services-fade-in inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.14em] uppercase text-[#0D1B2A]">
              What We Do
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="services-fade-in text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-semibold tracking-[-0.02em] text-[#0D1B2A] leading-[1.2]">
            Digital Solutions Designed Around Your Business.
          </h2>

          {/* Supporting Text */}
          <p className="services-fade-in mt-3.5 text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.6] text-[#667085] max-w-[680px]">
            We combine creative thinking, modern technology, and business-focused development to build digital solutions that help companies work smarter and grow faster.
          </p>
        </div>

        {/* =========================================
            COMPACT & ELEGANT 3-COLUMN SERVICES GRID
           ========================================= */}
        <div className="services-grid mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.number}
                href={service.href}
                className="service-card-item group relative flex flex-col justify-between h-full rounded-xl bg-[#FFFFFF] border border-[#E7EAF0] p-5 sm:p-6 transition-all duration-200 hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_rgba(13,27,42,0.04)] hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Subtle top gold accent indicator on hover */}
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />

                <div>
                  {/* Top Bar: Icon + Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F7FA] border border-[#E7EAF0] text-[#0D1B2A] transition-colors duration-200 group-hover:bg-[#0D1B2A] group-hover:text-[#FFFFFF] group-hover:border-[#0D1B2A]">
                      <Icon className="h-4 w-4 stroke-[1.75] transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#C59B27] tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 text-[16px] sm:text-[17px] font-semibold tracking-[-0.015em] text-[#0D1B2A] transition-colors duration-200 group-hover:text-[#2563EB]">
                    {service.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="mt-2 text-[13px] sm:text-[13.5px] text-[#667085] leading-[1.55] font-normal line-clamp-2">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Row: Subtle Action Link */}
                <div className="mt-5 pt-3.5 border-t border-[#F1F3F7] flex items-center justify-between text-[12px]">
                  <span className="font-medium text-[#0D1B2A] transition-colors duration-200 group-hover:text-[#2563EB] inline-flex items-center gap-1">
                    <span>Explore Service</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] transition-transform duration-200 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF] tracking-tight">
                    Nexus Core
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA BANNER: HAVE A PROJECT IN MIND?
           ========================================= */}
        <div className="services-cta-banner mt-10 sm:mt-12 rounded-xl bg-[#F5F7FA] border border-[#E7EAF0] p-6 sm:p-8 lg:p-10 transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E7EAF0] text-[10.5px] font-medium tracking-[0.08em] uppercase text-[#C59B27] mb-2.5">
                <Sparkles className="h-3 w-3 text-[#C59B27]" />
                <span>Custom Project Consultation</span>
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#0D1B2A]">
                Have a Project in Mind?
              </h3>
              <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#667085] leading-relaxed">
                Let&apos;s discuss how the right digital solution can move your business forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => triggerBookServiceModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[7px] bg-[#2563EB] px-6 py-3 text-[13.5px] font-medium text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#1D4ED8] active:bg-[#1E40AF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] group cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[7px] bg-[#FFFFFF] border border-[#E7EAF0] px-5 py-3 text-[13.5px] font-medium text-[#0D1B2A] transition-all duration-150 hover:bg-[#F1F5F9] hover:border-[#CBD5E1]"
              >
                <span>View Real Deployments</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
