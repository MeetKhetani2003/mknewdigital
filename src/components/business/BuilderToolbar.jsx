"use client";
import React, { useState } from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Save,
  Eye,
  EyeOff,
  Globe,
  Copy,
  Check,
  ArrowLeft,
  Share2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function BuilderToolbar({
  business = {},
  website = {},
  viewport = "desktop",
  setViewport = () => {},
  canUndo = false,
  canRedo = false,
  onUndo = () => {},
  onRedo = () => {},
  onSaveDraft = () => {},
  saveStatus = "saved", // "saved" | "saving" | "unsaved"
  previewMode = false,
  setPreviewMode = () => {},
  onPublish = () => {},
  isPublishing = false,
  onExit = () => {},
  onSwitchToCardBuilder = null,
}) {
  const [copied, setCopied] = useState(false);

  const isPublished = business.status === "published";
  const publicUrl = `/business/${business.slug}?city=${encodeURIComponent(business.city || "")}&category=${encodeURIComponent(business.category || "")}`;

  const handleCopyUrl = () => {
    if (typeof window !== "undefined") {
      const full = `${window.location.origin}${publicUrl}`;
      navigator.clipboard?.writeText(full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="h-14 bg-white border-b border-slate-200/80 px-4 flex items-center justify-between gap-4 z-40 relative select-none">
      {/* Left: Brand + Business Name + Back */}
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
          title="Back to Admin Dashboard"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="font-extrabold text-sm tracking-tight text-slate-900 hidden sm:inline">
            MK Builder
          </span>
          <span className="text-slate-300 hidden sm:inline">/</span>
          <span className="font-bold text-xs sm:text-sm text-slate-800 truncate max-w-[140px] sm:max-w-xs">
            {business.businessName || "Untitled Business"}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              isPublished
                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                : "bg-amber-100 text-amber-700 border border-amber-200"
            }`}
          >
            {isPublished ? "Published" : "Draft"}
          </span>
        </div>
      </div>

      {/* Center: Viewport Switcher + Undo/Redo */}
      <div className="flex items-center gap-2">
        {/* Undo / Redo */}
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200/60">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded-md hover:bg-white text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            className="p-1.5 rounded-md hover:bg-white text-slate-600 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport Modes */}
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200/60">
          <button
            onClick={() => setViewport("desktop")}
            title="Desktop View (100%)"
            className={`p-1.5 rounded-md transition-all ${
              viewport === "desktop"
                ? "bg-white text-blue-600 shadow-sm font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport("tablet")}
            title="Tablet View (768px)"
            className={`p-1.5 rounded-md transition-all ${
              viewport === "tablet"
                ? "bg-white text-blue-600 shadow-sm font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewport("mobile")}
            title="Mobile View (375px)"
            className={`p-1.5 rounded-md transition-all ${
              viewport === "mobile"
                ? "bg-white text-blue-600 shadow-sm font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right: Save, Preview, Publish & Actions */}
      <div className="flex items-center gap-2">
        {/* Save Status Indicator */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 font-medium mr-2">
          <span
            className={`w-2 h-2 rounded-full ${
              saveStatus === "saving"
                ? "bg-amber-400 animate-pulse"
                : saveStatus === "unsaved"
                ? "bg-amber-500"
                : "bg-emerald-500"
            }`}
          />
          <span>
            {saveStatus === "saving"
              ? "Saving..."
              : saveStatus === "unsaved"
              ? "Unsaved changes"
              : "Saved"}
          </span>
        </div>

        {/* Switch to Digital Card Builder (Combo) */}
        {onSwitchToCardBuilder && (
          <button
            onClick={onSwitchToCardBuilder}
            className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 border border-amber-300 font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs"
            title="Switch to Digital Card Builder"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden md:inline">Digital Card</span>
          </button>
        )}

        {/* Save Draft Button */}
        <button
          onClick={onSaveDraft}
          disabled={saveStatus === "saving"}
          className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Save className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Save Draft</span>
        </button>

        {/* Clean Preview Toggle */}
        <button
          onClick={() => setPreviewMode(!previewMode)}
          title={previewMode ? "Exit Fullscreen Preview" : "Preview Canvas Cleanly"}
          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
            previewMode
              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
              : "border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          {previewMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{previewMode ? "Edit Mode" : "Preview"}</span>
        </button>

        {/* Publish / Unpublish Button */}
        <button
          onClick={onPublish}
          disabled={isPublishing}
          className={`px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all text-white ${
            isPublished
              ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20"
              : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>{isPublishing ? "Publishing..." : isPublished ? "Republish" : "Publish Website"}</span>
        </button>

        {/* Copy URL */}
        <button
          onClick={handleCopyUrl}
          title="Copy Live Public URL"
          className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>

        {/* View Live */}
        <a
          href={publicUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open Public Business Page in New Tab"
          className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

