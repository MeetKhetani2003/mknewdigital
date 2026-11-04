"use client";
import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function HeroBgVideoSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoUrl = content.videoUrl || "/service-video.html";
  const posterUrl = content.posterUrl || "/websites/loginex.png";
  const primaryBtnColor = theme.primaryColor || "#1B6FD6";

  return (
    <section ref={containerRef} className="relative overflow-hidden w-full min-h-[550px] sm:min-h-[640px] flex items-center justify-center bg-slate-950 text-white">
      {/* Background Poster / Fallback */}
      <img
        src={posterUrl}
        alt="Video Background Poster"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />

      {/* Video Overlay / Tint */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {content.badge && (
          <EditableElement
            elementKey="badge"
            sectionId={section.id}
            label="Badge"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-400 text-xs sm:text-sm font-semibold mb-6"
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
          as="h1"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          {content.heading || `Experience ${business.businessName || "Our Business"} in Motion`}
        </EditableElement>

        <EditableElement
          elementKey="description"
          sectionId={section.id}
          label="Description"
          isEditing={isEditing}
          selectedElementId={selectedElementId}
          onSelectElement={onSelectElement}
          as="p"
          className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {content.description ||
            "Take an exclusive look behind the scenes at our state-of-the-art facility, dedication, and precision craftsmanship."}
        </EditableElement>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <EditableElement
            elementKey="primaryButton"
            sectionId={section.id}
            label="CTA Button"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="a"
            href={content.primaryButton?.link || "#contact"}
            style={{ backgroundColor: primaryBtnColor }}
            className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            <span>{content.primaryButton?.text || "Schedule a Visit"}</span>
            <ArrowRight className="w-4 h-4" />
          </EditableElement>

          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Full Reel</span>
          </a>
        </div>
      </div>
    </section>
  );
}

