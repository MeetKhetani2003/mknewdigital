"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

export function HeroSection() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const featuredWork = [
    {
      id: "anvil",
      title: "Anvil Techno Forge",
      category: "Precision Forging",
      location: "Industrial Exporter",
      desktopImg: "/websites/AnvilTechno.png",
      mobileImg: "/images/portfolio-mobile/anvil.png",
      url: "https://www.anviltechnoforge.co.in",
    },
    {
      id: "shynex",
      title: "Shynex Detailing",
      category: "Automotive Studio",
      location: "Ontario, Canada",
      desktopImg: "/websites/shynex.png",
      mobileImg: "/images/portfolio-mobile/shynex.png",
      url: "https://www.shynexdetailing.ca/",
    },
    {
      id: "groovy-cafe",
      title: "Groovy Cafe",
      category: "Hospitality & Dining",
      location: "Lifestyle & Food",
      desktopImg: "/websites/GroovyCafe.png",
      mobileImg: "/images/portfolio-mobile/groovy-cafe.png",
      url: "https://groovycafe.in/",
    },
    {
      id: "bsr",
      title: "BSR Worldwide",
      category: "Global Trade Logistics",
      location: "Import-Export",
      desktopImg: "/websites/bsr.png",
      mobileImg: "/images/portfolio-mobile/bsr.png",
      url: "https://www.bsrworldwide.in/",
    },
  ];

  const currentProject = featuredWork[activeProjectIdx];

  return (
    <section className="relative w-full bg-[#FFFFFF] border-b border-[#E7EAF0] overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
      {/* Subtle soft background tint behind right side */}
      <div 
        className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-b from-[#F5F7FA] to-[#FFFFFF] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1340px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          
          {/* =========================================
              LEFT COLUMN — CONTENT & CALL TO ACTIONS
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* 1. Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#2563EB]">
                Web Development | Digital Solutions
              </span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-semibold tracking-[-0.025em] text-[#0D1B2A] leading-[1.12]">
              Your Business Deserves{" "}
              <span className="text-[#2563EB]">
                More Than Just a Website.
              </span>
            </h1>

            {/* 3. Supporting Description */}
            <p className="mt-5 text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.6] text-[#667085] max-w-[540px]">
              We design and develop custom websites, web applications and digital solutions that help businesses build credibility, showcase their services and grow their online presence.
            </p>

            {/* 4. Two CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[7px] bg-[#2563EB] px-6 py-3.5 text-[15px] font-medium text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#1D4ED8] active:bg-[#1E40AF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-[7px] bg-[#FFFFFF] border border-[#E7EAF0] px-6 py-3.5 text-[15px] font-medium text-[#0D1B2A] transition-all duration-150 hover:bg-[#F5F7FA] hover:border-[#CBD5E1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A] cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="h-4 w-4 text-[#667085]" />
              </Link>
            </div>

            {/* 5. Trust Statement */}
            <div className="mt-8 pt-6 border-t border-[#E7EAF0] w-full max-w-[540px]">
              <p className="text-[13px] font-medium text-[#667085] tracking-[-0.01em]">
                Custom Development · Direct Communication · Global Collaboration
              </p>
              
              {/* Confirmed 100+ Websites Delivered Trust Indicator */}
              <div className="mt-2.5 inline-flex items-center gap-2 text-[12px] font-medium text-[#0D1B2A]">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>100+ Websites Delivered</span>
                <span className="text-[#CBD5E1]">·</span>
                <span className="text-[#667085]">Verified Client Deliveries</span>
              </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN — SOPHISTICATED DEVICE MOCKUPS
             ========================================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center w-full">
            
            {/* Top Project Selector Tabs */}
            <div className="w-full flex items-center justify-between mb-3 px-1 text-xs overflow-x-auto no-scrollbar py-0.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-[#667085] shrink-0 mr-2">
                Featured Deployment
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {featuredWork.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`px-2.5 py-1 rounded-[5px] text-[11px] font-medium transition-colors cursor-pointer ${
                      activeProjectIdx === idx
                        ? "bg-[#0D1B2A] text-[#FFFFFF]"
                        : "bg-[#F5F7FA] text-[#667085] hover:text-[#0D1B2A] hover:bg-[#E7EAF0]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Showcase Wrapper */}
            <div className="relative w-full">
              
              {/* Mockup Outer Card Container */}
              <div className="relative w-full rounded-2xl p-2 sm:p-2.5 bg-[#F5F7FA] border border-[#E7EAF0] shadow-[0_8px_30px_rgba(13,27,42,0.06)]">
                
                {/* --- DESKTOP DEVICE MOCKUP (MAIN) --- */}
                <div className="relative w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#E7EAF0] shadow-sm">
                  
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#FFFFFF] border-b border-[#E7EAF0]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E7EAF0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E7EAF0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E7EAF0]" />
                    </div>

                    <div className="flex items-center justify-center flex-1 mx-3 max-w-[280px]">
                      <div className="w-full rounded-[5px] bg-[#F5F7FA] border border-[#E7EAF0] px-2.5 py-0.5 text-center text-[10px] font-mono text-[#667085] truncate">
                        {currentProject.url.replace("https://", "").replace(/\/$/, "")}
                      </div>
                    </div>

                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-[#2563EB] hover:underline flex items-center gap-0.5"
                      aria-label={`Open ${currentProject.title} live website`}
                    >
                      <span>Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Desktop Screenshot Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F7FA]">
                    <img
                      src={currentProject.desktopImg}
                      alt={`${currentProject.title} desktop website preview`}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                    />
                  </div>

                  {/* Desktop Bottom Meta Label */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#FFFFFF] border-t border-[#E7EAF0] text-xs">
                    <div>
                      <span className="font-medium text-[#0D1B2A] block leading-tight">
                        {currentProject.title}
                      </span>
                      <span className="text-[11px] text-[#667085]">
                        {currentProject.category} · {currentProject.location}
                      </span>
                    </div>
                    <Link
                      href="/portfolio"
                      className="text-[11px] font-medium text-[#2563EB] hover:text-[#1D4ED8]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>

                {/* --- PROPORTIONED MOBILE PHONE MOCKUP (WITH REAL MOBILE SCREENSHOT) --- */}
                <div 
                  className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-[118px] sm:w-[145px] md:w-[165px] rounded-[18px] sm:rounded-[22px] bg-[#0D1B2A] p-1 sm:p-1.5 shadow-[0_16px_36px_rgba(13,27,42,0.24)] border-2 border-[#FFFFFF] z-20 transition-all duration-300"
                >
                  {/* Phone Speaker & Camera Notch */}
                  <div className="relative mx-auto h-2 w-10 sm:w-12 bg-[#0D1B2A] rounded-b-md z-30 mb-0.5 flex justify-center items-center">
                    <span className="h-1 w-1 rounded-full bg-[#374151]" />
                  </div>

                  {/* Phone Screen: Authentic 9:19.5 smartphone aspect ratio */}
                  <div className="relative aspect-[9/19.5] w-full rounded-[14px] sm:rounded-[16px] overflow-hidden bg-[#FFFFFF] border border-[#E7EAF0]">
                    <img
                      src={currentProject.mobileImg}
                      alt={`${currentProject.title} mobile screen preview`}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
