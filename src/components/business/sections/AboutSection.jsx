"use client";
import React from "react";
import { CheckCircle2, Award, Users, Shield } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function AboutSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const layout = section.layout || "classic_split";

  const features = content.features || [
    "100% Genuine and Certified Quality",
    "Transparent Pricing with No Hidden Costs",
    "Dedicated After-Sales Support & Warranty",
    "Expert Team with Extensive Industry Experience",
  ];

  return (
    <section ref={containerRef} id="about" className="py-20 sm:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column with Experience badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <EditableElement
              elementKey="imageUrl"
              sectionId={section.id}
              label="About Image"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white"
            >
              <img
                src={content.imageUrl || content.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"}
                alt="About our business"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Years of Experience badge */}
              <div
                style={{ backgroundColor: theme.primaryColor || "#1B6FD6" }}
                className="absolute bottom-6 right-6 px-6 py-4 rounded-2xl text-white shadow-xl flex items-center gap-4"
              >
                <Award className="w-10 h-10 text-amber-300 shrink-0" />
                <div>
                  <p className="text-2xl font-black">{content.experienceYears || "10+"}</p>
                  <p className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                    {content.experienceText || "Years of Trust"}
                  </p>
                </div>
              </div>
            </EditableElement>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
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
              label="About Headline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {content.heading || `Building Trust & Excellence in ${business.city || "Junagadh"}`}
            </EditableElement>

            <EditableElement
              elementKey="description"
              sectionId={section.id}
              label="Story Narrative"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {content.description ||
                `${business.businessName || "Our company"} is dedicated to providing superior service. Our mission is to combine innovation, reliability, and warm customer care to exceed expectations on every project.`}
            </EditableElement>

            {/* Core Feature Bullet Points */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/60 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact & Action row */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                style={{ backgroundColor: theme.primaryColor || "#1B6FD6" }}
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm shadow hover:opacity-95 transition-all"
              >
                Contact Our Team
              </a>
              <div className="text-xs text-slate-500">
                <p className="font-semibold text-slate-800">Direct Founder Access</p>
                <p>Personalized attention on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

