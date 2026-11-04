"use client";
import React from "react";
import { renderSection } from "./sections";
import { getThemeStyles } from "@/lib/themes";
import {
  ChevronUp,
  ChevronDown,
  Copy,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  Move,
} from "lucide-react";

export function BuilderCanvas({
  sections = [],
  business = {},
  website = {},
  viewport = "desktop",
  selectedSectionId = null,
  selectedElementId = null,
  onSelectSection = () => {},
  onSelectElement = () => {},
  onMoveSection = () => {},
  onDuplicateSection = () => {},
  onDeleteSection = () => {},
  onAddSectionBelow = () => {},
  previewMode = false,
}) {
  const theme = business.theme || {};
  const themeStyles = getThemeStyles(theme);

  // Viewport container width & styling
  let containerStyle = "w-full min-h-screen";
  let wrapperStyle = "w-full";

  if (viewport === "tablet") {
    containerStyle = "w-[768px] min-h-[900px] my-8 rounded-3xl shadow-2xl border-8 border-slate-800 bg-white overflow-hidden";
    wrapperStyle = "flex justify-center bg-slate-200/70 p-4 sm:p-8 min-h-[calc(100vh-3.5rem)] overflow-y-auto";
  } else if (viewport === "mobile") {
    containerStyle = "w-[375px] min-h-[750px] my-8 rounded-[40px] shadow-2xl border-[10px] border-slate-900 bg-white overflow-hidden";
    wrapperStyle = "flex justify-center bg-slate-200/70 p-4 sm:p-8 min-h-[calc(100vh-3.5rem)] overflow-y-auto";
  } else {
    wrapperStyle = "w-full h-[calc(100vh-3.5rem)] overflow-y-auto bg-slate-100/50";
  }

  return (
    <div className={wrapperStyle}>
      <div
        style={themeStyles}
        className={`business-site-root transition-all duration-300 relative bg-white text-slate-900 ${containerStyle}`}
      >
        {sections.length === 0 ? (
          <div className="py-24 text-center p-6 text-slate-400">
            <p className="text-base font-bold text-slate-600">No sections on page yet</p>
            <p className="text-xs text-slate-400 mt-1">Open the Left Panel and click any section to add it.</p>
          </div>
        ) : (
          sections.map((section, idx) => {
            const isSelected = selectedSectionId === section.id;

            return (
              <div
                key={section.id}
                data-selected-section={isSelected ? "true" : "false"}
                data-section-id={section.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectSection(section.id);
                }}
                style={{
                  backgroundColor:
                    section.styles?.backgroundColor && section.styles.backgroundColor !== "transparent"
                      ? section.styles.backgroundColor
                      : undefined,
                  color:
                    section.styles?.textColor && section.styles.textColor !== "inherit"
                      ? section.styles.textColor
                      : undefined,
                }}
                className={`relative group/sec transition-all ${
                  !previewMode
                    ? isSelected
                      ? "ring-2 ring-blue-600 ring-inset"
                      : "hover:ring-1 hover:ring-blue-400/60 hover:ring-inset"
                    : ""
                }`}
              >
                {/* Floating Section Toolbar in Edit Mode */}
                {!previewMode && (
                  <div
                    className={`absolute top-2 right-4 z-40 flex items-center gap-1 p-1 bg-slate-900/90 text-white rounded-xl shadow-xl backdrop-blur transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover/sec:opacity-100"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 text-blue-300 truncate max-w-[120px]">
                      {section.name}
                    </span>

                    <button
                      onClick={() => onMoveSection(idx, "up")}
                      disabled={idx === 0}
                      title="Move Section Up"
                      className="p-1 hover:bg-white/20 rounded disabled:opacity-20"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onMoveSection(idx, "down")}
                      disabled={idx === sections.length - 1}
                      title="Move Section Down"
                      className="p-1 hover:bg-white/20 rounded disabled:opacity-20"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDuplicateSection(section.id)}
                      title="Duplicate Section"
                      className="p-1 hover:bg-white/20 rounded"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeleteSection(section.id)}
                      title="Delete Section"
                      className="p-1 hover:bg-red-500/50 rounded text-red-300 hover:text-white"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Render Section Component */}
                {renderSection(section, {
                  isEditing: !previewMode,
                  selectedElementId,
                  onSelectElement,
                  business,
                  theme,
                })}

                {/* Quick Add Section Button between sections */}
                {!previewMode && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover/sec:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddSectionBelow(idx);
                      }}
                      className="px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] shadow-lg flex items-center gap-1 scale-90 hover:scale-100 transition-all"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Section</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

