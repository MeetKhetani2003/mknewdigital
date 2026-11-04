"use client";
import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function PricingSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const plans = content.plans || [];
  const primaryColor = theme.primaryColor || "#1B6FD6";
  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");

  return (
    <section ref={containerRef} id="pricing" className="py-20 sm:py-28 bg-white">
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
            label="Pricing Heading"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {content.heading || "Transparent, Fixed-Price Packages"}
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
            {content.description || "Every plan comes with certified quality, clear estimates, and free warranty support."}
          </EditableElement>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((pl, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pl.popular
                  ? "bg-slate-900 text-white shadow-2xl ring-2 ring-blue-500 scale-105 z-10"
                  : "bg-white text-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{pl.name}</h3>
                  {pl.popular && (
                    <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Popular</span>
                    </span>
                  )}
                </div>

                <p className={`text-xs ${pl.popular ? "text-slate-400" : "text-slate-500"} mb-6`}>
                  {pl.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl sm:text-4xl font-black">{pl.price}</span>
                  <span className={`text-xs font-medium ${pl.popular ? "text-slate-400" : "text-slate-500"}`}>
                    {pl.period || ""}
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {(pl.features || []).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pl.popular ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={pl.popular ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/${whatsapp}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20want%20to%20order%20the%20${encodeURIComponent(pl.name)}%20(${encodeURIComponent(pl.price)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: pl.popular ? primaryColor : "#F1F5F9",
                    color: pl.popular ? "#FFFFFF" : "#0F172A",
                  }}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

