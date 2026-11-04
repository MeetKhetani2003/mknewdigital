"use client";
import React from "react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function StatisticsSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const stats = content.stats || [];
  const primaryColor = theme.primaryColor || "#1B6FD6";

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((st, idx) => (
            <div key={idx} className="pt-6 md:pt-0 px-4">
              <p
                style={{ color: theme.accentColor || "#38BDF8" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
              >
                {st.number}
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

