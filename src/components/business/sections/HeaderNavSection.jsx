"use client";
import React, { useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronRight } from "lucide-react";
import { EditableElement } from "../EditableElement";

export function HeaderNavSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const content = section.content || {};
  const layout = section.layout || "clean";

  const isDark = layout === "solid_dark";
  const isTransparent = layout === "transparent";
  const isCenteredLogo = layout === "centered_logo";

  const headerBg = isDark
    ? "bg-slate-900 text-white border-b border-slate-800"
    : isTransparent
    ? "bg-white/85 backdrop-blur-md text-slate-900 border-b border-slate-200/60 shadow-sm sticky top-0"
    : "bg-white text-slate-900 border-b border-slate-100 shadow-sm sticky top-0";

  const links = content.links || [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const phone = content.phone || business.contactDetails?.phone || "+91 98765 43210";
  const whatsapp = content.whatsapp || business.contactDetails?.whatsapp || "+91 98765 43210";
  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const cleanWa = whatsapp.replace(/[^0-9]/g, "");

  const logoMarkup = (
    <EditableElement
      elementKey="logoText"
      sectionId={section.id}
      label="Business Logo / Brand"
      isEditing={isEditing}
      selectedElementId={selectedElementId}
      onSelectElement={onSelectElement}
      className="flex items-center gap-3 shrink-0"
    >
      {content.logoUrl ? (
        <img src={content.logoUrl} alt={content.logoText || "Logo"} className="h-10 w-auto object-contain" />
      ) : (
        <div
          style={{ backgroundColor: theme.primaryColor || "#1B6FD6" }}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm"
        >
          {(content.logoText || business.businessName || "B").charAt(0).toUpperCase()}
        </div>
      )}
      <span className="font-bold text-lg sm:text-xl tracking-tight leading-none">
        {content.logoText || business.businessName || "Business Name"}
      </span>
    </EditableElement>
  );

  return (
    <header className={`w-full transition-all z-40 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* VARIATION 1: CENTERED LOGO (SYMMETRICAL LUXURY) */}
        {isCenteredLogo ? (
          <>
            {/* Left Nav Links */}
            <nav className="hidden md:flex items-center gap-6 flex-1">
              {links.slice(0, 3).map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-slate-700 hover:text-blue-600 transition-colors uppercase text-xs"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Centered Brand Mark */}
            <div className="flex-1 flex justify-center">
              {logoMarkup}
            </div>

            {/* Right Nav Links & CTA */}
            <div className="hidden md:flex items-center justify-end gap-5 flex-1">
              {links.slice(3).map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-slate-700 hover:text-blue-600 transition-colors uppercase text-xs"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${cleanWa}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20would%20like%20to%20reserve%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: theme.primaryColor || "#EA580C" }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-full shadow-md hover:brightness-105 transition-all uppercase tracking-wider"
              >
                <span>Reserve Table</span>
              </a>
            </div>
          </>
        ) : (
          /* VARIATION 2 & 3: CLEAN / SOLID DARK / TRANSPARENT */
          <>
            {logoMarkup}

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${cleanPhone}`}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  isDark
                    ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${cleanWa}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#25D366" }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg shadow-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </>
        )}

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark ? "text-white hover:bg-slate-800" : "text-slate-900 hover:bg-slate-100"
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fade-in text-slate-900">
          <nav className="flex flex-col gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-200 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call {phone}</span>
            </a>
            <a
              href={`https://wa.me/${cleanWa}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#25D366" }}
              className="flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold text-sm shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
