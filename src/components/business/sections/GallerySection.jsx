"use client";
import React, { useState, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function GallerySection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const layout = section.layout || "uniform_grid";
  const images = content.images || [];
  const [activeImage, setActiveImage] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} id="gallery" className="py-20 sm:py-28 bg-slate-50/50">
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
            {content.heading || "Visual Showcase & Recent Projects"}
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
            {content.description || "A glimpse into our finished client work, workshop, and facility."}
          </EditableElement>
        </div>

        {/* VARIATION 1: MASONRY FLOW */}
        {layout === "masonry" ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => {
              const heights = ["h-72", "h-96", "h-80", "h-64", "h-88", "h-76"];
              const hClass = heights[idx % heights.length];
              return (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative ${hClass} rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-slate-200 break-inside-avoid`}
                >
                  <img
                    src={img.url}
                    alt={img.caption || "Showcase"}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                    <p className="text-base font-bold drop-shadow">{img.caption || "View Full Resolution"}</p>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 mt-1.5 font-semibold">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to expand</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : layout === "horizontal_scroll" || layout === "slider" ? (
          /* VARIATION 2: HORIZONTAL SNAP SLIDER RUNWAY */
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className="snap-start shrink-0 w-[280px] sm:w-[360px] h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group relative bg-slate-100"
                >
                  <img
                    src={img.url}
                    alt={img.caption || "Gallery"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <p className="text-sm font-bold">{img.caption || "Featured Project"}</p>
                    <div className="flex items-center gap-1 text-xs text-blue-300 mt-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Tap to enlarge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next navigation buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-white transition-all z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-white transition-all z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        ) : (
          /* VARIATION 3: UNIFORM GRID (CLASSIC MODERN) */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(img)}
                className="relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group bg-slate-200"
              >
                <img
                  src={img.url}
                  alt={img.caption || "Showcase"}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <p className="text-sm font-semibold">{img.caption || "View Full Image"}</p>
                  <div className="flex items-center gap-1.5 text-xs text-blue-300 mt-1 font-medium">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-slate-300"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage.url}
              alt={activeImage.caption || "Large image"}
              className="rounded-2xl max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
            {activeImage.caption && (
              <p className="text-white text-sm mt-3 text-center font-medium bg-black/40 px-4 py-1.5 rounded-full">
                {activeImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
