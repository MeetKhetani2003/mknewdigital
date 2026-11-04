"use client";
import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function ProductGridSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const items = content.items || [];
  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            label="Heading"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {content.heading || "Product Catalogue & Pricing"}
          </EditableElement>

          <EditableElement
            elementKey="description"
            sectionId={section.id}
            label="Description"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="p"
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            {content.description || "Browse our complete catalog. Click any item to directly ask for quote on WhatsApp."}
          </EditableElement>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={it.imageUrl || it.image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"}
                  alt={it.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {it.category && (
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {it.category}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-lg font-black text-slate-900">{it.price}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${whatsapp}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20inquiring%20about%20${encodeURIComponent(it.title)}%20(${encodeURIComponent(it.price)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "#25D366" }}
                    className="w-full py-2 px-3 rounded-lg text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow hover:brightness-105 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

