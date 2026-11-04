"use client";
import React from "react";
import { EditableElement } from "../EditableElement";
import { IconRenderer } from "../IconRenderer";
import { useSectionAnimation } from "../useSectionAnimation";

export function HighlightsSection({
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

  return (
    <section ref={containerRef} className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100"
            >
              <div
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              >
                <IconRenderer name={it.icon || "Award"} className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{it.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

