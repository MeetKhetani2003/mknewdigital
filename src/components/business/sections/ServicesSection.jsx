"use client";
import React from "react";
import { ArrowRight, Sparkles, MessageCircle, Check } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { IconRenderer } from "../IconRenderer";
import { useSectionAnimation } from "../useSectionAnimation";

export function ServicesSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const layout = section.layout || "icon_cards";
  const items = content.items || [];
  const primaryColor = theme.primaryColor || "#1B6FD6";
  const whatsappNumber = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");

  return (
    <section ref={containerRef} id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          {content.badge && (
            <EditableElement
              elementKey="badge"
              sectionId={section.id}
              label="Badge"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-3"
            >
              <span>{content.badge}</span>
            </EditableElement>
          )}

          <EditableElement
            elementKey="heading"
            sectionId={section.id}
            label="Services Heading"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {content.heading || "Comprehensive Services & Solutions"}
          </EditableElement>

          <EditableElement
            elementKey="description"
            sectionId={section.id}
            label="Description"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="p"
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            {content.description ||
              "Explore our specialized range of offerings crafted with precision for clients across Gujarat."}
          </EditableElement>
        </div>

        {/* VARIATION 1: IMAGE CARDS (PHOTOGRAPHY-RICH) */}
        {layout === "image_cards" ? (
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {items.map((srv, idx) => {
              const cardImg = srv.imageUrl || srv.image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80";
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Photo Header with Zoom */}
                    <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                      <img
                        src={cardImg}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                      {srv.tag && (
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                          {srv.tag}
                        </span>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-slate-800 hover:text-blue-600 text-xs font-bold transition-all flex items-center justify-between"
                    >
                      <span>Inquire Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : layout === "numbered_list" ? (
          /* VARIATION 2: NUMBERED LIST (ARCHITECTURAL & EDITORIAL) */
          <div className="mt-16 divide-y divide-slate-200 max-w-5xl mx-auto border-y border-slate-200">
            {items.map((srv, idx) => {
              const numStr = (idx + 1).toString().padStart(2, "0");
              const cardImg = srv.imageUrl || srv.image;
              return (
                <div
                  key={idx}
                  className="py-8 group flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-slate-50/70 px-4 rounded-2xl transition-all"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-2xl sm:text-3xl font-light font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                      {numStr}
                    </span>
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {srv.title}
                        </h3>
                        {srv.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {srv.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 sm:self-center">
                    {cardImg && (
                      <img
                        src={cardImg}
                        alt={srv.title}
                        className="w-16 h-16 rounded-xl object-cover shadow-sm hidden md:block"
                      />
                    )}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      className="p-3 rounded-full hover:scale-110 transition-transform"
                      aria-label={`Inquire about ${srv.title}`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* VARIATION 3: ICON CARDS (HIGH-TECH & BUSINESS) */
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {items.map((srv, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    >
                      <IconRenderer name={srv.icon || "Sparkles"} className="w-6 h-6" />
                    </div>
                    {srv.tag && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {srv.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
