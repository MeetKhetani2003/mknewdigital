"use client";
import React from "react";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function HeroBgImageSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const layout = section.layout || "fullscreen";

  const isBoxed = layout === "boxed";
  const bgImage = content.imageUrl || content.image || "/images/generated/fine-dining-hero.jpg";
  const overlayOpacity = content.overlayOpacity ?? 0.65;
  const primaryBtnColor = theme.primaryColor || "#1B6FD6";
  const headingFont = theme.headingFont ? { fontFamily: `'${theme.headingFont}', sans-serif` } : {};

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden text-white ${
        isBoxed ? "max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" : "w-full"
      }`}
    >
      <div
        className={`relative min-h-[540px] sm:min-h-[660px] flex items-center justify-center ${
          isBoxed ? "rounded-3xl overflow-hidden shadow-2xl" : ""
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Darkened overlay */}
        <div
          className="absolute inset-0 bg-slate-950 transition-opacity"
          style={{ opacity: overlayOpacity }}
        />

        {/* Ambient subtle vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          {content.badge && (
            <EditableElement
              elementKey="badge"
              sectionId={section.id}
              label="Badge"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg"
            >
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{content.badge}</span>
            </EditableElement>
          )}

          <EditableElement
            elementKey="heading"
            sectionId={section.id}
            label="Hero Heading"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h1"
            style={headingFont}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg"
          >
            {content.heading || "Crafting Excellence Every Single Day"}
          </EditableElement>

          <EditableElement
            elementKey="description"
            sectionId={section.id}
            label="Description"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="p"
            className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            {content.description ||
              "Delivering top-grade solutions with unmatched precision, affordable rates, and prompt client care."}
          </EditableElement>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <EditableElement
              elementKey="primaryButton"
              sectionId={section.id}
              label="Primary Button"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="a"
              href={content.primaryButton?.link || "#contact"}
              style={{ backgroundColor: primaryBtnColor }}
              className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <span>{content.primaryButton?.text || "Reserve Experience"}</span>
              <ArrowRight className="w-4 h-4" />
            </EditableElement>

            {content.secondaryButton && (
              <EditableElement
                elementKey="secondaryButton"
                sectionId={section.id}
                label="Secondary Button"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="a"
                href={content.secondaryButton?.link || "#services"}
                className="px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{content.secondaryButton?.text || "View Services"}</span>
              </EditableElement>
            )}
          </div>

          {/* Frosted Glass Counter Strip */}
          {content.stats && content.stats.length > 0 ? (
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {content.stats.map((st, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl py-3 px-4 text-center shadow-lg">
                  <p className="text-xl sm:text-2xl font-black text-white">{st.value}</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">{st.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% Verified Authentic Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Rated 4.9 by Connoisseurs</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
