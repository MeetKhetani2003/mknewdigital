"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Globe,
  ShoppingBag,
  Layers,
  Database,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilityGroups = [
  {
    number: "01",
    icon: Globe,
    title: "Websites & Digital Experiences",
    intro: "Fast, responsive, conversion-focused websites engineered with modern frameworks to establish brand authority.",
    tag: "Modern Web Tech",
    highlightIndex: 4, // Responsive UI/UX Development
    capabilities: [
      "Business and corporate websites",
      "High-converting landing pages",
      "Portfolio and brand showcase sites",
      "Multi-page responsive web portals",
      "Responsive UI/UX design & Figma to code",
      "Website redesign & performance upgrade",
    ],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "E-commerce & Online Platforms",
    intro: "Scalable storefronts and transactional systems built to handle smooth checkout, inventory, and order fulfillment.",
    tag: "Secure Transactions",
    highlightIndex: 3, // Multi-gateway payment integration
    capabilities: [
      "Custom online stores & digital shops",
      "Product catalogue & variant management",
      "Shopping carts & one-page checkout",
      "Multi-gateway payment integration",
      "Order tracking & automated notifications",
      "Customer accounts & merchant admin dashboard",
    ],
  },
  {
    number: "03",
    icon: Layers,
    title: "Web Applications & Cloud Portals",
    intro: "Tailored web platforms and cloud-based software engineered around specific business logic and workflows.",
    tag: "Full-Stack Architecture",
    highlightIndex: 2, // Interactive booking & scheduling
    capabilities: [
      "Custom SaaS platforms & client portals",
      "Role-based multi-tenant dashboards",
      "Interactive booking & scheduling engines",
      "Real-time analytics & reporting tools",
      "Cloud database architecture & secure APIs",
      "Custom third-party API integrations",
    ],
  },
  {
    number: "04",
    icon: Database,
    title: "Custom CRM & Business Software",
    intro: "Centralized software systems that replace fragmented spreadsheets, automate lead tracking, and empower operations.",
    tag: "Process Automation",
    highlightIndex: 0, // Custom CRM & pipeline management
    capabilities: [
      "Custom CRM & pipeline management",
      "Lead capture, tracking & automated dispatch",
      "Quotation, billing & GST invoicing systems",
      "Inventory, stock & warehouse management",
      "Staff activity & task management modules",
      "Executive metrics & business intelligence",
    ],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Mobile Application Development",
    intro: "Native-quality iOS and Android applications designed for seamless performance, intuitive touch UX, and offline reliability.",
    tag: "iOS & Android",
    highlightIndex: 0, // Cross-platform iOS & Android mobile apps
    capabilities: [
      "Cross-platform iOS & Android mobile apps",
      "Customer-facing transactional mobile apps",
      "Internal field staff & operational tools",
      "Push notifications & real-time messaging",
      "Secure biometric & social authentication",
      "App Store & Google Play deployment",
    ],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Digital Growth & Brand Solutions",
    intro: "Targeted digital visibility strategies and performance marketing built to attract qualified prospects and fuel sales.",
    tag: "Growth & Visibility",
    highlightIndex: 1, // Google Business Profile optimization
    capabilities: [
      "Search engine optimization (SEO & Technical)",
      "Google Business Profile optimization",
      "Meta (Facebook & Instagram) ad campaigns",
      "Social media strategy & creative content",
      "Brand identity, logos & design systems",
      "Conversion rate optimization (CRO) & analytics",
    ],
  },
];

export function WhatWeBuild() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".build-header-fade",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered reveal for each capability card
      gsap.fromTo(
        ".capability-card-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
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
      id="capabilities"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="build-header-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Our Capabilities</span>
          </div>

          <h2 className="build-header-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            From Simple Websites to Complex Digital Systems.
          </h2>

          <p className="build-header-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            Every business has different requirements. We bring together the right technologies, features and development expertise to create solutions that fit the way your business operates.
          </p>
        </div>

        {/* =========================================
            CAPABILITY CARDS (3 CARDS PER ROW ON DESKTOP)
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {capabilityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.number}
                className="capability-card-item group relative rounded-2xl border border-[#E7EAF0] bg-[#FFFFFF] p-6 sm:p-7 transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.12),0_4px_16px_-4px_rgba(13,27,42,0.04)] flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Ambient Brand Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon + Number Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-[#F5F7FA] border border-[#E7EAF0] text-[#0D1B2A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-105 shadow-sm">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-[#667085] bg-[#F5F7FA] border border-[#E7EAF0] px-2.5 py-0.5 rounded-full tracking-wide group-hover:text-[#2563EB] group-hover:border-[#2563EB]/25 transition-colors">
                      {group.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold tracking-[-0.015em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#667085] line-clamp-2">
                    {group.intro}
                  </p>

                  {/* Subtle Hairline Divider */}
                  <div className="my-4 border-t border-[#F1F5F9]" />

                  {/* Capability List */}
                  <ul className="space-y-2">
                    {group.capabilities.map((cap, idx) => {
                      const isHighlighted = idx === group.highlightIndex;
                      return (
                        <li
                          key={cap}
                          className={`flex items-center gap-2.5 text-[12.5px] sm:text-[13px] leading-snug rounded-lg px-2.5 py-1.5 transition-all duration-150 ${
                            isHighlighted
                              ? "bg-[#2563EB]/6 text-[#0D1B2A] font-medium border border-[#2563EB]/15"
                              : "text-[#0D1B2A]/85 hover:bg-[#F8FAFC] hover:text-[#2563EB]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                              isHighlighted
                                ? "bg-[#2563EB]"
                                : "bg-[#CBD5E1] group-hover:bg-[#2563EB]/60"
                            }`}
                          />
                          <span className="flex-1 truncate">{cap}</span>
                          {isHighlighted && (
                            <span className="inline-flex items-center text-[9.5px] font-bold tracking-wider text-[#2563EB] uppercase px-1.5 py-0.5 rounded bg-[#2563EB]/10 shrink-0">
                              Key Focus
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] font-medium text-[#667085]">
                  <span className="inline-flex items-center gap-1.5 text-[#667085]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                    {group.tag}
                  </span>
                  <span className="text-[#2563EB] inline-flex items-center gap-1 font-semibold transition-transform duration-200 group-hover:translate-x-0.5">
                    Explore <ArrowRight className="h-3 w-3" />
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

export default WhatWeBuild;
