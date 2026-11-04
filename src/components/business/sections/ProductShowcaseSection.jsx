"use client";
import React from "react";
import { ArrowRight, Check, ShoppingBag, MessageCircle } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function ProductShowcaseSection({
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
  const primaryColor = theme.primaryColor || "#1B6FD6";
  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-slate-50/50">
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
            {content.heading || "Featured Collections & Flagship Products"}
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
            {content.description || "Crafted with precision engineering and high durability standards."}
          </EditableElement>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-slate-100 h-64 sm:h-80">
                <img
                  src={prod.imageUrl || prod.image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {prod.badge && (
                  <span className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {prod.badge}
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">{prod.price}</span>
                    {prod.originalPrice && (
                      <span className="text-sm text-slate-400 line-through font-medium">
                        {prod.originalPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{prod.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{prod.description}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${whatsapp}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(prod.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "#25D366" }}
                    className="flex-1 py-3 px-4 rounded-xl text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow hover:brightness-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                  <a
                    href="#contact"
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                  >
                    Details
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

