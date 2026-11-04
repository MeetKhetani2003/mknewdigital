"use client";
import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function WhyChooseUsSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const reasons = content.reasons || [];
  const primaryColor = theme.primaryColor || "#1B6FD6";

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {content.heading || "Why Hundreds of Clients Rely On Us"}
            </EditableElement>

            <EditableElement
              elementKey="description"
              sectionId={section.id}
              label="Description"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {content.description ||
                "We are committed to delivering lasting value, exceptional attention to detail, and a stress-free customer journey from quote to delivery."}
            </EditableElement>

            <div className="mt-8 space-y-5">
              {reasons.map((r, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div
                    style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{r.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <EditableElement
              elementKey="imageUrl"
              sectionId={section.id}
              label="Photo"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100"
            >
              <img
                src={content.imageUrl || "/websites/rsdm.png"}
                alt="Why choose us showcase"
                className="w-full h-[450px] object-cover"
              />
            </EditableElement>
          </div>
        </div>
      </div>
    </section>
  );
}

