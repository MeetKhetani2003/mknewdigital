"use client";
import React from "react";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { EditableElement } from "../EditableElement";

export function FooterSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const content = section.content || {};
  const phone = content.phone || business.contactDetails?.phone || "+91 98765 43210";
  const whatsapp = content.whatsapp || business.contactDetails?.whatsapp || "+91 98765 43210";
  const address = content.address || business.contactDetails?.address || `Main Road, ${business.city || "Junagadh"}, Gujarat`;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5">
            <EditableElement
              elementKey="logoText"
              sectionId={section.id}
              label="Footer Brand"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="flex items-center gap-3"
            >
              <div
                style={{ backgroundColor: theme.primaryColor || "#1B6FD6" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-sm"
              >
                {(content.logoText || business.businessName || "B").charAt(0).toUpperCase()}
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {content.logoText || business.businessName || "Business Name"}
              </span>
            </EditableElement>

            <EditableElement
              elementKey="tagline"
              sectionId={section.id}
              label="Footer Tagline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed"
            >
              {content.tagline ||
                `${business.businessName || "Our business"} delivers top-tier craftsmanship, reliable services, and certified customer care in ${business.city || "Junagadh"}, Gujarat.`}
            </EditableElement>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 transition-colors border border-slate-800"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Offerings</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Portfolio & Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Col 3: Address & Office */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Location & Hours</h4>
            <p className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
              <span>{address}</span>
            </p>
            <p className="text-xs text-slate-400 mt-4">
              Working Hours: Mon - Sat (9:00 AM - 8:30 PM)
            </p>
            <div className="mt-4">
              <span className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full">
                Verified Business Profile
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Credits and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{content.copyright || `© ${new Date().getFullYear()} ${business.businessName || "Business"}. All rights reserved.`}</p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.mkdigitalnexus.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 font-medium transition-colors"
            >
              Powered by MK Digital Nexus
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

