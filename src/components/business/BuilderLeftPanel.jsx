"use client";
import React, { useState } from "react";
import {
  Plus,
  Layers,
  Palette,
  Info,
  Image as ImageIcon,
  Search as SearchIcon,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Share2,
  LayoutTemplate,
} from "lucide-react";
import { SECTION_METADATA, createDefaultSection } from "@/lib/default-sections";
import { PREDEFINED_THEMES, AVAILABLE_FONTS } from "@/lib/themes";
import { PAGE_LAYOUT_PRESETS, buildLayoutSections } from "@/lib/page-layouts";
import { INDUSTRY_IMAGE_BANK } from "@/lib/image-bank";
import { MediaManager } from "./MediaManager";

export function BuilderLeftPanel({
  sections = [],
  onAddSection = () => {},
  onReorderSections = () => {},
  onToggleVisibility = () => {},
  onToggleLock = () => {},
  onDuplicateSection = () => {},
  onDeleteSection = () => {},
  onSelectSection = () => {},
  selectedSectionId = null,
  business = {},
  onUpdateBusiness = () => {},
  theme = {},
  onUpdateTheme = () => {},
  onApplyLayout = () => {},
}) {
  const [activeTab, setActiveTab] = useState("sections"); // "sections" | "layouts" | "layers" | "theme" | "info" | "media" | "seo"
  const [sectionSearch, setSectionSearch] = useState("");
  const [selectedMetaForModal, setSelectedMetaForModal] = useState(null);

  // Filter sections by search query
  const filteredSections = SECTION_METADATA.filter(
    (s) =>
      s.name.toLowerCase().includes(sectionSearch.toLowerCase()) ||
      s.category.toLowerCase().includes(sectionSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(sectionSearch.toLowerCase())
  );

  // Group sections by category
  const categories = Array.from(new Set(SECTION_METADATA.map((s) => s.category)));

  const handleApplyThemePreset = (presetKey) => {
    const preset = PREDEFINED_THEMES[presetKey];
    if (preset) {
      onUpdateTheme(preset);
      onUpdateBusiness({
        ...business,
        theme: preset,
      });
    }
  };

  const handleApplyLayout = (layoutId) => {
    const layout = PAGE_LAYOUT_PRESETS.find((l) => l.id === layoutId);
    if (!layout) return;

    if (
      sections.length === 0 ||
      confirm(
        `Apply the "${layout.name}" whole-page layout preset?\n\nThis will load a complete sequence of ${layout.sectionTypes.length} tailored sections, color palette, and styling for your business.`
      )
    ) {
      const { sections: newSections, theme: newTheme } = buildLayoutSections(layoutId, business);
      onApplyLayout({
        sections: newSections,
        theme: newTheme,
      });
    }
  };

  const moveSection = (index, direction) => {
    const newIdx = direction === "up" ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= sections.length) return;
    const reordered = [...sections];
    const [moved] = reordered.splice(index, 1);
    reordered.splice(newIdx, 0, moved);
    onReorderSections(reordered);
  };

  return (
    <div className="w-80 sm:w-96 h-[calc(100vh-3.5rem)] bg-white border-r border-slate-200/80 flex flex-col z-30 select-none">
      {/* Tab Navigation Icons Bar */}
      <div className="flex items-center justify-around border-b border-slate-200/80 p-1.5 bg-slate-50/80">
        <button
          onClick={() => setActiveTab("sections")}
          title="Section Library"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "sections" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Plus className="w-4 h-4 mb-1" />
          <span>Add</span>
        </button>

        <button
          onClick={() => setActiveTab("layouts")}
          title="Prebuilt Whole-Page Layouts"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "layouts" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <LayoutTemplate className="w-4 h-4 mb-1" />
          <span>Layouts</span>
        </button>

        <button
          onClick={() => setActiveTab("layers")}
          title="Layers & Section Order"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "layers" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Layers className="w-4 h-4 mb-1" />
          <span>Layers</span>
        </button>

        <button
          onClick={() => setActiveTab("theme")}
          title="Global Design & Themes"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "theme" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Palette className="w-4 h-4 mb-1" />
          <span>Theme</span>
        </button>

        <button
          onClick={() => setActiveTab("info")}
          title="Business Information"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "info" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Info className="w-4 h-4 mb-1" />
          <span>Business</span>
        </button>

        <button
          onClick={() => setActiveTab("media")}
          title="Media Library"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "media" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <ImageIcon className="w-4 h-4 mb-1" />
          <span>Media</span>
        </button>

        <button
          onClick={() => setActiveTab("seo")}
          title="SEO & Social Preview"
          className={`flex flex-col items-center py-2 px-2.5 rounded-xl font-bold text-[10px] transition-all ${
            activeTab === "seo" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Share2 className="w-4 h-4 mb-1" />
          <span>SEO</span>
        </button>
      </div>

      {/* Main Panel Content Scrollable */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* 1. SECTIONS TAB */}
        {activeTab === "sections" && (
          <div className="space-y-5">
            <div>
              <div className="relative">
                <SearchIcon className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 26 section types..."
                  value={sectionSearch}
                  onChange={(e) => setSectionSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 font-medium"
                />
              </div>
            </div>

            {categories.map((cat) => {
              const items = filteredSections.filter((s) => s.category === cat);
              if (items.length === 0) return null;

              return (
                <div key={cat} className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {cat}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {items.map((secMeta) => (
                      <div
                        key={secMeta.type}
                        className="p-3 rounded-xl border border-slate-200/80 bg-white hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                        onClick={() => setSelectedMetaForModal(secMeta)}
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {secMeta.name}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {secMeta.description}
                          </p>
                        </div>
                        <button
                          className="p-1.5 rounded-lg bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-600 transition-colors shrink-0 ml-2"
                          title="Select variation and add"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 1.5 LAYOUTS TAB: 12 Prebuilt Whole-Page Presets */}
        {activeTab === "layouts" && (
          <div className="space-y-4">
            <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
                Full-Page Architecture
              </span>
              <p className="text-xs font-semibold text-slate-800">
                22 Complete Industry Layout Presets
              </p>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                Click any layout below to immediately generate a complete, professionally sequenced page with tailored sections, matching color palette, fonts, and animations.
              </p>
            </div>

            <div className="space-y-3">
              {PAGE_LAYOUT_PRESETS.map((preset) => {
                const presetImg =
                  INDUSTRY_IMAGE_BANK[preset.id]?.hero ||
                  INDUSTRY_IMAGE_BANK[preset.id]?.heroFallback ||
                  "/images/generated/saas-dashboard.jpg";

                return (
                  <div
                    key={preset.id}
                    className="p-3 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-500 hover:shadow-md transition-all group overflow-hidden"
                  >
                    {/* Visual Card Photo Header */}
                    <div className="relative h-28 rounded-xl overflow-hidden mb-2.5 bg-slate-100 group-hover:shadow-sm transition-shadow">
                      <img
                        src={presetImg}
                        alt={preset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end justify-between p-2.5">
                        <span
                          style={{ backgroundColor: preset.accentColor }}
                          className="text-[9px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow"
                        >
                          {preset.badge}
                        </span>
                        <span className="text-[10px] font-bold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          {preset.sectionTypes.length} Sections
                        </span>
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                      {preset.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                      {preset.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2 mb-3">
                      {preset.tags.map((t) => (
                        <span key={t} className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleApplyLayout(preset.id)}
                      className="w-full py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Apply This Preset</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. LAYERS / STRUCTURE TAB */}
        {activeTab === "layers" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Page Sections ({sections.length})
              </span>
              <span className="text-[10px] text-slate-400">Drag or use arrows to reorder</span>
            </div>

            {sections.map((sec, idx) => (
              <div
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer ${
                  selectedSectionId === sec.id
                    ? "border-blue-600 bg-blue-50/60 shadow-sm"
                    : "border-slate-200/80 bg-white hover:bg-slate-50"
                } ${!sec.visible ? "opacity-50" : ""}`}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="font-mono text-[10px] text-slate-400 w-4">{idx + 1}</span>
                  <span className="font-bold text-slate-800 truncate">{sec.name}</span>
                </div>

                <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => moveSection(idx, "up")}
                    disabled={idx === 0}
                    title="Move Up"
                    className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-20"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => moveSection(idx, "down")}
                    disabled={idx === sections.length - 1}
                    title="Move Down"
                    className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-20"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onToggleVisibility(sec.id)}
                    title={sec.visible ? "Hide Section" : "Show Section"}
                    className="p-1 text-slate-400 hover:text-slate-800"
                  >
                    {sec.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-amber-500" />}
                  </button>
                  <button
                    onClick={() => onDuplicateSection(sec.id)}
                    title="Duplicate Section"
                    className="p-1 text-slate-400 hover:text-blue-600"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDeleteSection(sec.id)}
                    title="Delete Section"
                    className="p-1 text-slate-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. THEME TAB */}
        {activeTab === "theme" && (
          <div className="space-y-6 text-xs text-slate-700">
            {/* Predefined Themes */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Predefined Theme Presets (11 Industries)
              </label>
              <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50/50">
                {Object.entries(PREDEFINED_THEMES).map(([tKey, t]) => (
                  <button
                    key={tKey}
                    onClick={() => handleApplyThemePreset(tKey)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      theme.preset === tKey
                        ? "border-blue-600 bg-blue-50/70 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.primaryColor }} />
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.secondaryColor }} />
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.accentColor }} />
                    </div>
                    <p className="font-bold text-slate-900 text-xs">{t.name}</p>
                    <p className="text-[10px] text-slate-400 line-clamp-1">{t.headingFont}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Overrides */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Color Palette Overrides
              </label>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Primary Brand Color</span>
                <input
                  type="color"
                  value={theme.primaryColor || "#1B6FD6"}
                  onChange={(e) => onUpdateTheme({ ...theme, primaryColor: e.target.value })}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Secondary Dark Color</span>
                <input
                  type="color"
                  value={theme.secondaryColor || "#0B2447"}
                  onChange={(e) => onUpdateTheme({ ...theme, secondaryColor: e.target.value })}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700">Accent Vibrant Color</span>
                <input
                  type="color"
                  value={theme.accentColor || "#38BDF8"}
                  onChange={(e) => onUpdateTheme({ ...theme, accentColor: e.target.value })}
                  className="w-8 h-8 rounded-lg cursor-pointer border border-slate-200"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Typography Fonts
              </label>

              <div>
                <span className="block font-semibold text-slate-700 mb-1">Heading Font Family</span>
                <select
                  value={theme.headingFont || "Poppins"}
                  onChange={(e) => onUpdateTheme({ ...theme, headingFont: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 outline-none"
                >
                  {AVAILABLE_FONTS.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block font-semibold text-slate-700 mb-1">Body Text Font Family</span>
                <select
                  value={theme.bodyFont || "Inter"}
                  onChange={(e) => onUpdateTheme({ ...theme, bodyFont: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 outline-none"
                >
                  {AVAILABLE_FONTS.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Border Radius & Styling */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Border Radius & Container
              </label>

              <div>
                <span className="block font-semibold text-slate-700 mb-1">Card / Button Radius</span>
                <div className="grid grid-cols-4 gap-2">
                  {["0px", "6px", "12px", "24px"].map((rad) => (
                    <button
                      key={rad}
                      onClick={() => onUpdateTheme({ ...theme, borderRadius: rad })}
                      className={`py-1.5 rounded-lg border text-xs font-semibold ${
                        theme.borderRadius === rad
                          ? "bg-blue-50 border-blue-600 text-blue-600 font-bold"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {rad}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. BUSINESS INFO TAB */}
        {activeTab === "info" && (
          <div className="space-y-4 text-xs text-slate-700">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Business Name</label>
              <input
                type="text"
                value={business.businessName || ""}
                onChange={(e) => onUpdateBusiness({ ...business, businessName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">City / Location</label>
              <input
                type="text"
                value={business.city || ""}
                onChange={(e) => onUpdateBusiness({ ...business, city: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Category / Industry</label>
              <input
                type="text"
                value={business.category || ""}
                onChange={(e) => onUpdateBusiness({ ...business, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={business.contactDetails?.phone || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    contactDetails: { ...business.contactDetails, phone: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={business.contactDetails?.whatsapp || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    contactDetails: { ...business.contactDetails, whatsapp: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Physical Address</label>
              <textarea
                rows={2}
                value={business.contactDetails?.address || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    contactDetails: { ...business.contactDetails, address: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Opening Hours</label>
              <input
                type="text"
                value={business.contactDetails?.openingHours || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    contactDetails: { ...business.contactDetails, openingHours: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {/* 5. MEDIA TAB */}
        {activeTab === "media" && (
          <MediaManager
            business={business}
            onBusinessUpdate={onUpdateBusiness}
            onSelectMedia={(url) => {
              // Copy to clipboard or notification
              navigator.clipboard?.writeText(url);
              alert(`Image URL copied to clipboard: ${url}`);
            }}
          />
        )}

        {/* 6. SEO & SOCIAL PREVIEW TAB */}
        {activeTab === "seo" && (
          <div className="space-y-5 text-xs text-slate-700">
            <div>
              <label className="block font-bold text-slate-700 mb-1">SEO Page Title</label>
              <input
                type="text"
                value={business.seo?.title || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    seo: { ...business.seo, title: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs"
              />
              <p className="text-[10px] text-slate-400 mt-1">Recommended: 50-60 characters</p>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Meta Description</label>
              <textarea
                rows={3}
                value={business.seo?.description || ""}
                onChange={(e) =>
                  onUpdateBusiness({
                    ...business,
                    seo: { ...business.seo, description: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-xs resize-none"
              />
              <p className="text-[10px] text-slate-400 mt-1">Recommended: 120-160 characters</p>
            </div>

            {/* Google Search Card Preview */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Google Search Engine Snippet Preview
              </label>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-[11px] text-slate-500 truncate">
                  https://www.mkdigitalnexus.in &gt; business &gt; {business.slug}
                </p>
                <h4 className="text-sm font-semibold text-blue-700 line-clamp-1 hover:underline mt-0.5">
                  {business.seo?.title || `${business.businessName} in ${business.city}`}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-snug">
                  {business.seo?.description ||
                    `Official website of ${business.businessName}. Services, customer reviews and phone number in ${business.city}.`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Variation Picker Modal when adding a new section */}
      {selectedMetaForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-fade-in">
            <h3 className="text-lg font-black text-slate-900">
              Choose Layout for {selectedMetaForModal.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{selectedMetaForModal.description}</p>

            <div className="mt-6 space-y-2.5 max-h-72 overflow-y-auto p-1">
              {selectedMetaForModal.variations.map((v) => (
                <div
                  key={v.id}
                  onClick={() => {
                    const newSec = createDefaultSection(selectedMetaForModal.type, v.id, business);
                    onAddSection(newSec);
                    setSelectedMetaForModal(null);
                  }}
                  className="p-3.5 rounded-2xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 transition-all cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs group-hover:text-blue-600">
                      {v.label}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">{v.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    Add →
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedMetaForModal(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

