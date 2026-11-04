"use client";
import React, { useState } from "react";
import {
  Sliders,
  Type,
  Palette,
  Sparkles,
  Layout,
  Link as LinkIcon,
  Image as ImageIcon,
  Check,
  ChevronRight,
  Maximize2,
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";
import { AnimationControls } from "./AnimationControls";
import { MediaManager } from "./MediaManager";
import { AVAILABLE_FONTS } from "@/lib/themes";

export function BuilderRightPanel({
  selectedSection = null,
  selectedElement = null,
  onUpdateSection = () => {},
  onUpdateElementContent = () => {},
  business = {},
  theme = {},
}) {
  const [activeTab, setActiveTab] = useState("content"); // "content" | "style" | "animation" | "layout"
  const [showMediaModal, setShowMediaModal] = useState(false);

  if (!selectedSection) {
    return (
      <div className="w-80 sm:w-96 h-[calc(100vh-3.5rem)] bg-white border-l border-slate-200/80 p-6 flex flex-col items-center justify-center text-center text-slate-400 select-none z-30">
        <Sliders className="w-10 h-10 mb-3 text-slate-300 stroke-1" />
        <p className="font-bold text-slate-700 text-sm">Select an Element or Section</p>
        <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
          Click on any heading, button, card, image or section in the canvas to edit its properties, typography, styles and GSAP animations.
        </p>
      </div>
    );
  }

  const content = selectedSection.content || {};
  const styles = selectedSection.styles || {};
  const animations = selectedSection.animations || {};
  const elementKey = selectedElement?.elementKey;
  const isElementSelected = !!elementKey;

  // Stored element custom styles
  const currentElementOverrides = selectedSection.elements?.[elementKey] || {};
  const elementStyles = currentElementOverrides.style || currentElementOverrides || {};

  const updateContent = (key, value) => {
    onUpdateSection({
      ...selectedSection,
      content: {
        ...content,
        [key]: value,
      },
    });
  };

  const updateSectionStyle = (key, value) => {
    onUpdateSection({
      ...selectedSection,
      styles: {
        ...styles,
        [key]: value,
      },
    });
  };

  const updateElementStyle = (styleKey, value) => {
    const existingElement = selectedSection.elements?.[elementKey] || {};
    const existingStyles = existingElement.style || existingElement || {};
    onUpdateSection({
      ...selectedSection,
      elements: {
        ...(selectedSection.elements || {}),
        [elementKey]: {
          ...existingElement,
          style: {
            ...existingStyles,
            [styleKey]: value,
          },
        },
      },
    });
  };

  const resetElementStyles = () => {
    const updatedElements = { ...(selectedSection.elements || {}) };
    delete updatedElements[elementKey];
    onUpdateSection({
      ...selectedSection,
      elements: updatedElements,
    });
  };

  const updateAnimations = (newAnimConfig) => {
    onUpdateSection({
      ...selectedSection,
      animations: newAnimConfig,
    });
  };

  return (
    <div className="w-80 sm:w-96 h-[calc(100vh-3.5rem)] bg-white border-l border-slate-200/80 flex flex-col z-30 select-none">
      {/* Top Context Header */}
      <div className="p-3.5 border-b border-slate-200/80 bg-slate-50/70 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
            {isElementSelected ? "Element Inspector" : "Section Inspector"}
          </span>
          <h3 className="text-xs font-bold text-slate-800 truncate max-w-[220px]">
            {isElementSelected ? `${selectedElement.label || elementKey}` : selectedSection.name}
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
          {selectedSection.layout || "default"}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200/80 bg-slate-50/50">
        <button
          onClick={() => setActiveTab("content")}
          className={`flex-1 py-2 font-bold text-xs text-center border-b-2 transition-all ${
            activeTab === "content"
              ? "border-blue-600 text-blue-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Content
        </button>
        <button
          onClick={() => setActiveTab("style")}
          className={`flex-1 py-2 font-bold text-xs text-center border-b-2 transition-all ${
            activeTab === "style"
              ? "border-blue-600 text-blue-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Style
        </button>
        <button
          onClick={() => setActiveTab("animation")}
          className={`flex-1 py-2 font-bold text-xs text-center border-b-2 transition-all ${
            activeTab === "animation"
              ? "border-blue-600 text-blue-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Animation
        </button>
        <button
          onClick={() => setActiveTab("layout")}
          className={`flex-1 py-2 font-bold text-xs text-center border-b-2 transition-all ${
            activeTab === "layout"
              ? "border-blue-600 text-blue-600 bg-white"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Layout
        </button>
      </div>

      {/* Inspector Body Scrollable */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* 1. CONTENT TAB */}
        {activeTab === "content" && (
          <div className="space-y-4 text-xs text-slate-700">
            {/* If badge exists */}
            {content.badge !== undefined && (
              <div>
                <label className="block font-bold text-slate-700 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={content.badge || ""}
                  onChange={(e) => updateContent("badge", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs"
                />
              </div>
            )}

            {/* If heading exists */}
            {content.heading !== undefined && (
              <div>
                <label className="block font-bold text-slate-700 mb-1">Section Heading</label>
                <textarea
                  rows={2}
                  value={content.heading || ""}
                  onChange={(e) => updateContent("heading", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs"
                />
              </div>
            )}

            {/* If subheading exists */}
            {content.subheading !== undefined && (
              <div>
                <label className="block font-bold text-slate-700 mb-1">Subheading</label>
                <input
                  type="text"
                  value={content.subheading || ""}
                  onChange={(e) => updateContent("subheading", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs"
                />
              </div>
            )}

            {/* If description exists */}
            {content.description !== undefined && (
              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={content.description || ""}
                  onChange={(e) => updateContent("description", e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs"
                />
              </div>
            )}

            {/* Primary Button */}
            {content.primaryBtnText !== undefined && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                  Primary Button
                </span>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Label</label>
                  <input
                    type="text"
                    value={content.primaryBtnText || ""}
                    onChange={(e) => updateContent("primaryBtnText", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Link URL</label>
                  <input
                    type="text"
                    value={content.primaryBtnUrl || ""}
                    onChange={(e) => updateContent("primaryBtnUrl", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                  />
                </div>
              </div>
            )}

            {/* Secondary Button */}
            {content.secondaryBtnText !== undefined && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                  Secondary Button
                </span>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Label</label>
                  <input
                    type="text"
                    value={content.secondaryBtnText || ""}
                    onChange={(e) => updateContent("secondaryBtnText", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 mb-0.5">Link URL</label>
                  <input
                    type="text"
                    value={content.secondaryBtnUrl || ""}
                    onChange={(e) => updateContent("secondaryBtnUrl", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                  />
                </div>
              </div>
            )}

            {/* If Image exists */}
            {content.imageUrl !== undefined && (
              <div className="space-y-2">
                <label className="block font-bold text-slate-700">Image Asset</label>
                <div className="rounded-xl overflow-hidden border border-slate-200 h-28 bg-slate-100 relative">
                  <img src={content.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowMediaModal(true)}
                    className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Choose from Media</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. STYLE TAB */}
        {activeTab === "style" && (
          <div className="space-y-5 text-xs text-slate-700">
            {/* ELEMENT LEVEL STYLING (Active when an element is clicked) */}
            {isElementSelected ? (
              <div className="space-y-4">
                <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-blue-600 block">Editing Element</span>
                    <span className="font-bold text-slate-900">{selectedElement.label || elementKey}</span>
                  </div>
                  <button
                    onClick={resetElementStyles}
                    title="Reset element to default styling"
                    className="px-2 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Font Family */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Font Family</label>
                  <select
                    value={elementStyles.fontFamily || ""}
                    onChange={(e) => updateElementStyle("fontFamily", e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 outline-none text-xs"
                  >
                    <option value="">Default Theme Font</option>
                    <option value="'Poppins', sans-serif">Poppins (Modern Clean)</option>
                    <option value="'Inter', sans-serif">Inter (Crisp Neutral)</option>
                    <option value="'Outfit', sans-serif">Outfit (Contemporary)</option>
                    <option value="'Playfair Display', serif">Playfair Display (Luxury Serif)</option>
                    <option value="'Plus Jakarta Sans', sans-serif">Plus Jakarta Sans (Tech)</option>
                  </select>
                </div>

                {/* Font Size */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-700">Font Size</span>
                    <span className="font-mono text-blue-600 font-bold">{elementStyles.fontSize || "Default"}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 mb-2">
                    {[
                      { label: "Sm", val: "14px" },
                      { label: "Base", val: "16px" },
                      { label: "Lg", val: "20px" },
                      { label: "XL", val: "24px" },
                      { label: "2XL", val: "32px" },
                      { label: "3XL", val: "40px" },
                      { label: "4XL", val: "50px" },
                      { label: "Hero", val: "64px" },
                    ].map((sz) => (
                      <button
                        key={sz.val}
                        onClick={() => updateElementStyle("fontSize", sz.val)}
                        className={`py-1 text-[11px] rounded border font-semibold ${
                          elementStyles.fontSize === sz.val
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Weight */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Font Weight</label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: "Regular", val: "400" },
                      { label: "Medium", val: "500" },
                      { label: "SemiBold", val: "600" },
                      { label: "Bold", val: "700" },
                      { label: "ExtraBold", val: "800" },
                      { label: "Black", val: "900" },
                    ].map((fw) => (
                      <button
                        key={fw.val}
                        onClick={() => updateElementStyle("fontWeight", fw.val)}
                        className={`py-1.5 text-[11px] rounded-lg border font-semibold ${
                          elementStyles.fontWeight === fw.val
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {fw.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Color */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-1.5">Text Color</label>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="color"
                      value={elementStyles.color || "#0f172a"}
                      onChange={(e) => updateElementStyle("color", e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                    />
                    <input
                      type="text"
                      placeholder="#0f172a"
                      value={elementStyles.color || ""}
                      onChange={(e) => updateElementStyle("color", e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase"
                    />
                  </div>
                  {/* Swatches */}
                  <div className="flex gap-1.5">
                    {["#0F172A", "#1B6FD6", "#0D9488", "#EA580C", "#DC2626", "#854D0E", "#FFFFFF"].map((col) => (
                      <button
                        key={col}
                        onClick={() => updateElementStyle("color", col)}
                        style={{ backgroundColor: col }}
                        className="w-6 h-6 rounded-md border border-slate-300 shadow-sm hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                </div>

                {/* Background Color & Padding (Buttons / Badges / Cards) */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-1.5">Element Background</label>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="color"
                      value={elementStyles.backgroundColor || "#ffffff"}
                      onChange={(e) => updateElementStyle("backgroundColor", e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                    />
                    <button
                      onClick={() => updateElementStyle("backgroundColor", "transparent")}
                      className="text-[11px] text-blue-600 font-semibold underline"
                    >
                      Transparent
                    </button>
                  </div>
                </div>

                {/* Border Radius */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-700">Corner Radius</span>
                    <span className="font-mono text-blue-600 font-bold">{elementStyles.borderRadius || "Default"}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: "Square", val: "0px" },
                      { label: "Soft", val: "8px" },
                      { label: "Round", val: "16px" },
                      { label: "Pill", val: "9999px" },
                    ].map((br) => (
                      <button
                        key={br.val}
                        onClick={() => updateElementStyle("borderRadius", br.val)}
                        className={`py-1 text-[11px] rounded border font-semibold ${
                          elementStyles.borderRadius === br.val
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {br.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Alignment */}
                <div className="pt-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-1">Text Alignment</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "left", label: "Left" },
                      { id: "center", label: "Center" },
                      { id: "right", label: "Right" },
                    ].map((align) => (
                      <button
                        key={align.id}
                        onClick={() => updateElementStyle("textAlign", align.id)}
                        className={`py-1.5 rounded-lg border text-xs font-semibold ${
                          elementStyles.textAlign === align.id
                            ? "bg-blue-600 text-white border-blue-600 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {align.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* SECTION LEVEL STYLING (Active when whole section is selected) */
              <div className="space-y-5">
                {/* Text Alignment */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Section Text Alignment</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["text-left", "text-center", "text-right"].map((align) => (
                      <button
                        key={align}
                        onClick={() => updateSectionStyle("alignment", align)}
                        className={`py-1.5 rounded-lg border text-xs font-semibold capitalize ${
                          styles.alignment === align
                            ? "bg-blue-50 border-blue-600 text-blue-600 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {align.replace("text-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section Background Color */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-2">Section Background</label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Background Color</span>
                    <input
                      type="color"
                      value={styles.backgroundColor && styles.backgroundColor !== "transparent" ? styles.backgroundColor : "#ffffff"}
                      onChange={(e) => updateSectionStyle("backgroundColor", e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                    />
                  </div>

                  {/* Swatches */}
                  <div className="flex gap-1.5 mb-2">
                    {[
                      { col: "#FFFFFF", name: "White" },
                      { col: "#FFFBEB", name: "Warm Cream" },
                      { col: "#0B0F17", name: "Dark Obsidian" },
                      { col: "#F8FAFC", name: "Slate Light" },
                      { col: "#F0F9FF", name: "Sky Tint" },
                      { col: "#0F172A", name: "Navy Slate" },
                    ].map((sw) => (
                      <button
                        key={sw.col}
                        title={sw.name}
                        onClick={() => updateSectionStyle("backgroundColor", sw.col)}
                        style={{ backgroundColor: sw.col }}
                        className="w-6 h-6 rounded-md border border-slate-300 shadow-sm hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => updateSectionStyle("backgroundColor", "transparent")}
                    className="text-[11px] text-blue-600 font-semibold underline"
                  >
                    Reset to Transparent / Default Theme
                  </button>
                </div>

                {/* Section Text Color */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-2">Section Text Color</label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Primary Font Color</span>
                    <input
                      type="color"
                      value={styles.textColor && styles.textColor !== "inherit" ? styles.textColor : "#0f172a"}
                      onChange={(e) => updateSectionStyle("textColor", e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                    />
                  </div>
                  <button
                    onClick={() => updateSectionStyle("textColor", "inherit")}
                    className="text-[11px] text-blue-600 font-semibold underline"
                  >
                    Inherit Global Theme Text Color
                  </button>
                </div>

                {/* Vertical Spacing (Padding) */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block font-bold text-slate-700 mb-2">Vertical Spacing (Padding)</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: "py-8", label: "Compact (32px)" },
                      { id: "py-16", label: "Normal (64px)" },
                      { id: "py-24", label: "Spacious (96px)" },
                      { id: "py-32", label: "Hero (128px)" },
                    ].map((pad) => (
                      <button
                        key={pad.id}
                        onClick={() => updateSectionStyle("paddingTop", pad.id)}
                        className={`py-2 px-1 rounded-lg border text-[11px] font-semibold text-center ${
                          styles.paddingTop === pad.id
                            ? "bg-blue-50 border-blue-600 text-blue-600 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {pad.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. ANIMATION TAB */}
        {activeTab === "animation" && (
          <AnimationControls
            animations={animations}
            onChange={updateAnimations}
            sectionId={selectedSection?.id}
            selectedElementId={selectedElement?.elementKey ? `${selectedElement.sectionId}.${selectedElement.elementKey}` : null}
            elementLabel={selectedElement?.label}
          />
        )}

        {/* 4. LAYOUT TAB */}
        {activeTab === "layout" && (
          <div className="space-y-4 text-xs text-slate-700">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Max Container Width</label>
              <select
                value={styles.containerWidth || "max-w-7xl"}
                onChange={(e) => updateSectionStyle("containerWidth", e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 outline-none"
              >
                <option value="max-w-5xl">Compact (1024px)</option>
                <option value="max-w-6xl">Medium (1152px)</option>
                <option value="max-w-7xl">Standard (1280px)</option>
                <option value="w-full">Full Bleed (100%)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Section Visibility</label>
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  checked={selectedSection.visible !== false}
                  onChange={(e) => onUpdateSection({ ...selectedSection, visible: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                />
                <span className="font-semibold text-slate-700">Visible on published website</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Media Picker Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-black text-slate-900 mb-4">Select Image for Section</h3>
            <MediaManager
              business={business}
              onSelectMedia={(url) => {
                updateContent("imageUrl", url);
                setShowMediaModal(false);
              }}
            />
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowMediaModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
