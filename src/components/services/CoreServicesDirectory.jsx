"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { 
  Globe, 
  ShoppingBag, 
  Code2, 
  Database, 
  Smartphone, 
  TrendingUp, 
  ArrowRight 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const coreServices = [
  {
    number: "01",
    title: "Website Development",
    desc: "Custom business websites, corporate websites, landing pages and responsive web experiences designed around your brand and business objectives.",
    capabilities: [
      "Corporate Websites",
      "Multi-Page Platforms",
      "Landing Pages",
      "Responsive UI/UX",
      "SEO-Ready Architecture"
    ],
    link: "/services/web-development",
    icon: Globe,
  },
  {
    number: "02",
    title: "E-commerce Development",
    desc: "Online stores, product catalogues, inventory management, payment gateway integration and order management solutions.",
    capabilities: [
      "Online Stores",
      "Product Catalogues",
      "Inventory Tracking",
      "Payment Gateways",
      "Order Management"
    ],
    link: "/services/ecommerce-development",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Web Applications",
    desc: "Custom web platforms, business portals, booking systems and interactive applications built around specific workflows.",
    capabilities: [
      "Custom Web Platforms",
      "Business Portals",
      "Booking Systems",
      "Interactive Dashboards",
      "Cloud APIs"
    ],
    link: "/services/custom-web-applications",
    icon: Code2,
  },
  {
    number: "04",
    title: "CRM & Business Software",
    desc: "Custom CRM dashboards, lead management, inventory systems, invoicing and business process automation.",
    capabilities: [
      "Custom CRM Dashboards",
      "Lead Management",
      "Inventory Systems",
      "Automated Invoicing",
      "Workflow Automation"
    ],
    link: "/services/crm-business-software",
    icon: Database,
  },
  {
    number: "05",
    title: "Mobile Application Development",
    desc: "Business-focused mobile applications designed to make services and digital experiences accessible on mobile devices.",
    capabilities: [
      "iOS & Android Apps",
      "Cross-Platform Engineering",
      "Responsive Mobile UI",
      "App Store Readiness",
      "Secure Cloud Auth"
    ],
    link: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Digital Marketing & Branding",
    desc: "SEO, social media management, Meta Ads, Google Business Profile optimization and digital brand development.",
    capabilities: [
      "Search Engine Optimization",
      "Meta & Google Ads",
      "Google Profile Ranking",
      "Social Media Management",
      "Brand Identity"
    ],
    link: "/services/digital-marketing-seo",
    icon: TrendingUp,
  },
];

export function CoreServicesDirectory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".directory-header-fade",
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

      // Staggered reveal for each directory row
      gsap.fromTo(
        ".directory-row-item",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      id="core-services"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="directory-header-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Our Expertise</span>
          </div>

          <h2 className="directory-header-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            Everything Your Business Needs to Grow Digitally.
          </h2>

          <p className="directory-header-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            We bring design, development and technology together to create digital solutions that solve real business challenges and support long-term growth.
          </p>
        </div>

        {/* =========================================
            EDITORIAL DIRECTORY ROWS
           ========================================= */}
        <div className="divide-y divide-[#E7EAF0] border-t border-[#E7EAF0]">
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.number}
                className="directory-row-item group py-6 sm:py-7 transition-colors duration-200 hover:bg-[#F8FAFC] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* LEFT COLUMN: NUMBER, ICON & TITLE */}
                  <div className="lg:col-span-5 flex items-start gap-4 sm:gap-5">
                    <span className="font-mono text-[14px] font-bold tracking-wider text-[#667085]/60 mt-1 shrink-0">
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F7FA] border border-[#E7EAF0] text-[#2563EB] transition-colors duration-200 group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] group-hover:border-[#2563EB]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="text-[20px] sm:text-[23px] font-bold tracking-[-0.02em] text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <div className="pl-[52px]">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: DESCRIPTION & CAPABILITIES */}
                  <div className="lg:col-span-7 pl-9 lg:pl-0">
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#667085] max-w-2xl">
                      {service.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#E7EAF0] text-[12px] font-medium text-[#0D1B2A] transition-colors group-hover:border-[#CBD5E1]"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoreServicesDirectory;
