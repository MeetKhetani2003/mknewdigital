"use client";
import React from "react";
import { Phone, Quote } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function OwnerProfileSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const phone = content.phone || business.contactDetails?.phone || "+91 98765 43210";
  const cleanPhone = phone.replace(/[^0-9+]/g, "");

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-80 lg:h-full min-h-[380px] relative overflow-hidden bg-slate-800">
            <img
              src={content.imageUrl || content.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"}
              alt={content.name || "Business Owner"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16">
            <Quote className="w-12 h-12 text-blue-400/40 mb-6" />

            <EditableElement
              elementKey="heading"
              sectionId={section.id}
              label="Headline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h3"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            >
              {content.heading || "A Personal Promise of Quality"}
            </EditableElement>

            <EditableElement
              elementKey="message"
              sectionId={section.id}
              label="Owner Message"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed italic"
            >
              "{content.message ||
                `Our goal is simple: to treat every project as if it were for our own home or family. We stand by our craftsmanship, our team, and our commitments.`}"
            </EditableElement>

            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-white">{content.name || "Founder & Managing Director"}</h4>
                <p className="text-xs text-blue-400 font-semibold">{content.designation || business.businessName}</p>
              </div>

              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Owner Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

