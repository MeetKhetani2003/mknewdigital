"use client";
import React from "react";
import { Globe, ExternalLink, Share2 } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

function SocialIcon({ platform = "", className = "w-5 h-5" }) {
  const p = platform.toLowerCase();
  if (p.includes("instagram")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (p.includes("facebook")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    );
  }
  if (p.includes("youtube")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    );
  }
  if (p.includes("linkedin")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  return <Globe className={className} />;
}

export function SocialMediaSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const links = content.links || [
    { platform: "Instagram", url: "https://instagram.com", handle: "@business" },
    { platform: "Facebook", url: "https://facebook.com", handle: "Official Page" },
    { platform: "YouTube", url: "https://youtube.com", handle: "Showcases" },
    { platform: "Google Profile", url: "https://google.com", handle: "5.0 Rating" },
  ];

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          {content.heading || "Connect With Us on Social Media"}
        </EditableElement>

        <EditableElement
          elementKey="description"
          sectionId={section.id}
          label="Description"
          isEditing={isEditing}
          selectedElementId={selectedElementId}
          onSelectElement={onSelectElement}
          as="p"
          className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto"
        >
          {content.description || "Follow our channels for new arrivals, client setups, and promo discounts."}
        </EditableElement>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-700 group-hover:text-blue-600 transition-colors">
                <SocialIcon platform={item.platform} className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">{item.platform}</p>
                <p className="text-[11px] text-slate-400 font-medium">{item.handle}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors ml-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
