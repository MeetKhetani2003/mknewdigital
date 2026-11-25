"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";

const serviceDropdownItems = [
  {
    title: "Website Development",
    desc: "Custom Next.js & React websites with sub-second speed.",
    href: "/services/web-development",
  },
  {
    title: "E-commerce Development",
    desc: "High-conversion online storefronts with payment gateways.",
    href: "/services/ecommerce-development",
  },
  {
    title: "Custom Web Applications",
    desc: "Scalable MERN stack platforms and full-stack software.",
    href: "/services/custom-web-applications",
  },
  {
    title: "CRM & Business Software",
    desc: "Internal operations tools, Khata/billing, and workflows.",
    href: "/services/crm-business-software",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for iOS & Android.",
    href: "/services/mobile-app-development",
  },
  {
    title: "Digital Marketing & SEO",
    desc: "Technical SEO audits, Google profile ranking & growth.",
    href: "/services/digital-marketing-seo",
  },
];

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef(null);
  const dropdownContainerRef = useRef(null);

  // Handle scroll state for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Dropdown hover timing to prevent accidental closure
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E7EAF0] shadow-[0_2px_12px_rgba(13,27,42,0.04)] py-3 sm:py-3.5"
            : "border-b border-[#E7EAF0] py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 sm:px-8">
          
          {/* ========================================================= */}
          {/* LEFT: BRAND LOGO */}
          {/* ========================================================= */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
            aria-label="MK Digital Nexus - Return to Homepage"
          >
            <div className="relative flex items-center justify-center">
              <Logo className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#0D1B2A] leading-tight group-hover:text-[#2563EB] transition-colors">
                MK Digital Nexus
              </span>
              <span className="text-[11px] font-normal tracking-wide text-[#667085]">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* CENTER: DESKTOP NAVIGATION LINKS */}
          {/* ========================================================= */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((item) => {
              const active = isLinkActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownContainerRef}
                    className="relative"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[14px] sm:text-[15px] font-medium leading-[1.5] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                        active
                          ? "text-[#0D1B2A] font-semibold"
                          : "text-[#111827] hover:text-[#2563EB] hover:bg-[#F1F5F9]"
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#667085] transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#2563EB]" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Mega Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[560px] transition-all duration-200 ${
                        servicesDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto visible"
                          : "opacity-0 -translate-y-2 pointer-events-none invisible"
                      }`}
                    >
                      <div className="rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] p-5 shadow-[0_12px_36px_rgba(13,27,42,0.08)]">
                        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#E7EAF0]">
                          <span className="text-[12px] font-semibold uppercase tracking-wider text-[#667085]">
                            Our Specialized Solutions
                          </span>
                          <Link
                            href="/services"
                            className="text-[12px] font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <span>All Services</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {serviceDropdownItems.map((svc) => (
                            <Link
                              key={svc.title}
                              href={svc.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group block p-3 rounded-lg hover:bg-[#F1F5F9] transition-colors"
                            >
                              <div className="text-[14px] font-medium text-[#111827] group-hover:text-[#2563EB] transition-colors leading-snug">
                                {svc.title}
                              </div>
                              <p className="mt-1 text-[12px] text-[#667085] leading-relaxed line-clamp-2">
                                {svc.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-[14px] sm:text-[15px] font-medium leading-[1.5] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    active
                      ? "text-[#0D1B2A] font-semibold"
                      : "text-[#111827] hover:text-[#2563EB] hover:bg-[#F1F5F9]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#2563EB] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT: PRIMARY CTA & MOBILE TOGGLE */}
          {/* ========================================================= */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8] text-[14px] sm:text-[15px] font-medium px-5 py-2.5 rounded-[8px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            >
              Start a Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#111827] hover:bg-[#F1F5F9] border border-[#E7EAF0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE FULL-HEIGHT SLIDE-IN NAVIGATION PANEL */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0D1B2A]/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[360px] bg-[#FFFFFF] border-l border-[#E7EAF0] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7EAF0]">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-[#0D1B2A] leading-tight">
                MK Digital Nexus
              </span>
              <span className="text-[11px] text-[#667085]">Digital Studio</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-[#111827] hover:bg-[#F1F5F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {navigationLinks.map((item) => {
            const active = isLinkActive(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.label} className="border-b border-[#F1F3F7] pb-2 mb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 text-[15px] font-medium ${
                        active ? "text-[#2563EB] font-semibold" : "text-[#111827]"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className="p-2 text-[#667085] hover:text-[#0D1B2A]"
                      aria-label="Expand services submenu"
                      aria-expanded={mobileServicesExpanded}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesExpanded ? "rotate-180 text-[#2563EB]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Accordion content */}
                  {mobileServicesExpanded && (
                    <div className="pl-3 pr-1 py-2 space-y-2 bg-[#F5F7FA] rounded-lg mt-1">
                      {serviceDropdownItems.map((svc) => (
                        <Link
                          key={svc.title}
                          href={svc.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-[13px] text-[#667085] hover:text-[#2563EB]"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 text-[15px] font-medium transition-colors border-b border-[#F1F3F7] ${
                  active ? "text-[#2563EB] font-semibold" : "text-[#111827] hover:text-[#2563EB]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-[#E7EAF0] bg-[#F5F7FA]">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8] text-[15px] font-medium py-3 rounded-[8px] transition-colors shadow-sm"
          >
            Start a Project
          </Link>
          <p className="mt-3 text-center text-[12px] text-[#667085]">
            Custom Web Development & Digital Studio
          </p>
        </div>
      </div>
    </>
  );
}
