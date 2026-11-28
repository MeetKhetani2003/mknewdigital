"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Phone, MessageSquare } from "lucide-react";
import { Logo } from "../ui/Logo";
import { triggerBookServiceModal } from "../ui/FloatingActions";

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
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E7EAF0] shadow-[0_2px_12px_rgba(13,27,42,0.04)] py-2.5 sm:py-3"
            : "border-b border-[#E7EAF0] py-3.5 sm:py-4.5"
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* ========================================================= */}
          {/* LEFT: BRAND LOGO */}
          {/* ========================================================= */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg shrink-0"
            aria-label="MK Digital Nexus - Return to Homepage"
          >
            <div className="relative flex items-center justify-center shrink-0">
              <Logo className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold tracking-tight text-[#0D1B2A] leading-tight group-hover:text-[#2563EB] transition-colors">
                MK Digital Nexus
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#667085] uppercase">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* CENTER: DESKTOP NAVIGATION LINKS (xl: and above) */}
          {/* Automatically collapes to mobile drawer below xl (1280px) to prevent overlapping */}
          {/* ========================================================= */}
          <nav
            className="hidden xl:flex items-center space-x-1"
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
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14.5px] font-medium leading-[1.5] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
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
                  className={`relative px-3 py-2 text-[14.5px] font-medium leading-[1.5] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    active
                      ? "text-[#0D1B2A] font-semibold"
                      : "text-[#111827] hover:text-[#2563EB] hover:bg-[#F1F5F9]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#2563EB] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT: CTA BUTTONS & MOBILE TOGGLE */}
          {/* Consistent h-10 height, vertically centered, no horizontal overflow */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* WhatsApp Quick Chat CTA - compact on desktop */}
            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 h-10 px-3 xl:px-3.5 rounded-[8px] bg-[#25D366] text-white hover:bg-[#20ba59] text-[13.5px] font-medium transition-colors shadow-xs shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              aria-label="Chat on WhatsApp"
            >
              <svg
                className="h-4 w-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Primary CTA: Start a Project */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-3.5 sm:px-4.5 rounded-[8px] bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8] text-[13.5px] sm:text-[14px] font-medium transition-all duration-200 shadow-xs shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              Start a Project
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-[8px] text-[#111827] hover:bg-[#F1F5F9] border border-[#E7EAF0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] shrink-0 transition-colors"
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
          className="fixed inset-0 z-40 bg-[#0D1B2A]/40 backdrop-blur-xs xl:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[360px] bg-[#FFFFFF] border-l border-[#E7EAF0] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E7EAF0]">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 object-contain" />
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-[#0D1B2A] leading-tight">
                MK Digital Nexus
              </span>
              <span className="text-[11px] font-medium text-[#667085] uppercase tracking-wider">Digital Studio</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-[#111827] hover:bg-[#F1F5F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1.5">
          {navigationLinks.map((item) => {
            const active = isLinkActive(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.label} className="border-b border-[#F1F3F7] pb-2 mb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-[15px] font-medium ${
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

        {/* Drawer Footer CTA Suite */}
        <div className="p-5 border-t border-[#E7EAF0] bg-[#F8FAFC] space-y-2.5">
          {/* Primary CTA: Start a Project */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center h-11 bg-[#2563EB] text-[#FFFFFF] hover:bg-[#1D4ED8] text-[14.5px] font-medium rounded-[8px] transition-colors shadow-xs"
          >
            Start a Project
          </Link>

          {/* Quick Book Consultation Trigger */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              triggerBookServiceModal();
            }}
            className="w-full flex items-center justify-center gap-2 h-10 border border-[#E7EAF0] bg-[#FFFFFF] text-[#0D1B2A] hover:bg-[#F1F5F9] text-[13.5px] font-medium rounded-[8px] transition-colors"
          >
            <MessageSquare className="h-4 w-4 text-[#2563EB]" />
            <span>Book Consultation (2hr Quote)</span>
          </button>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 h-10 bg-[#25D366] text-[#FFFFFF] hover:bg-[#20ba59] text-[13.5px] font-medium rounded-[8px] transition-colors"
          >
            <svg
              className="h-4 w-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Chat</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href="tel:+916353121773"
            className="flex items-center justify-center gap-2 py-1.5 text-[12.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>Call Directly: +91 63531 21773</span>
          </a>
        </div>
      </div>
    </>
  );
}
