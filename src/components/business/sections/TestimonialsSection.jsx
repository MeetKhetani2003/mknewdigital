"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function TestimonialsSection({
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

  return (
    <section ref={containerRef} id="testimonials" className="py-20 sm:py-28 bg-slate-50/70">
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
            {content.heading || "What Our Clients Say About Us"}
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
            {content.description || "Authentic feedback from verified clients who trust our craftsmanship."}
          </EditableElement>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-100 mb-3" />

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar || "/websites/shynex.png"}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

