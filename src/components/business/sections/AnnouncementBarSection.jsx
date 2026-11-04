"use client";
import React, { useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { EditableElement } from "../EditableElement";

export function AnnouncementBarSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  theme = {},
}) {
  const [dismissed, setDismissed] = useState(false);
  const content = section.content || {};
  const layout = section.layout || "centered";

  if (dismissed && !isEditing) return null;

  const bgStyle = {
    backgroundColor: section.styles?.backgroundColor || theme.primaryColor || "#1B6FD6",
    color: "#FFFFFF",
  };

  return (
    <div
      style={bgStyle}
      className={`w-full py-2.5 px-4 text-xs sm:text-sm font-medium z-30 relative transition-all`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {layout === "ticker" ? (
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee">
              <span className="mx-4">{content.text || "Special Announcement"}</span>
              <span className="mx-4">•</span>
              <span className="mx-4">{content.badge || "Limited Time"}</span>
              <span className="mx-4">•</span>
              <span className="mx-4">{content.text || "Special Announcement"}</span>
            </div>
          </div>
        ) : layout === "split" ? (
          <>
            <div className="flex items-center gap-2">
              {content.badge && (
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-semibold">
                  {content.badge}
                </span>
              )}
              <EditableElement
                elementKey="text"
                sectionId={section.id}
                label="Announcement Text"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
              >
                <span>{content.text || "Limited time offer for clients"}</span>
              </EditableElement>
            </div>
            {content.buttonText && (
              <EditableElement
                elementKey="buttonText"
                sectionId={section.id}
                label="Button"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="a"
                href={content.buttonLink || "#contact"}
                className="inline-flex items-center gap-1 underline underline-offset-4 font-semibold hover:opacity-90"
              >
                <span>{content.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </EditableElement>
            )}
          </>
        ) : (
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <EditableElement
              elementKey="text"
              sectionId={section.id}
              label="Announcement Text"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
            >
              <span>{content.text || "Welcome to our official business website!"}</span>
            </EditableElement>
            {content.buttonText && (
              <EditableElement
                elementKey="buttonText"
                sectionId={section.id}
                label="Action Link"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="a"
                href={content.buttonLink || "#contact"}
                className="ml-2 underline font-semibold hover:opacity-90 inline-flex items-center gap-1"
              >
                {content.buttonText}
              </EditableElement>
            )}
          </div>
        )}

        {!isEditing && (
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 hover:bg-white/10 rounded transition-colors text-white/80 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}

