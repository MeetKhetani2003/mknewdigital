"use client";
import React, { useState } from "react";
import { Play, Sparkles, Sliders, Smartphone, Check } from "lucide-react";
import { ANIMATION_CATEGORIES, EASING_OPTIONS, runGsapAnimation } from "@/lib/animations";

export function AnimationControls({
  animations = {},
  onChange = () => {},
  sectionId = null,
  selectedElementId = null,
  elementLabel = null,
}) {
  const [activeCategory, setActiveCategory] = useState("entrance");
  const [isPlaying, setIsPlaying] = useState(false);

  const currentType = animations.type || "fade-up";
  const duration = animations.duration ?? 0.8;
  const delay = animations.delay ?? 0;
  const stagger = animations.stagger ?? 0.12;
  const easing = animations.easing || "power2.out";
  const trigger = animations.trigger || "scroll";
  const once = animations.once !== false;
  const disableOnMobile = !!animations.disableOnMobile;
  const applyToChildren = animations.applyToChildren !== false;

  const update = (key, value) => {
    onChange({
      ...animations,
      [key]: value,
    });
  };

  const handlePreview = (overrideConfig = {}) => {
    if (typeof window === "undefined") return;
    setIsPlaying(true);

    let target = null;

    // 1. If an individual element was selected, target that element directly
    if (selectedElementId) {
      target = document.querySelector(`[data-element-id="${selectedElementId}"]`);
    }

    // 2. Otherwise target the active section
    if (!target && sectionId) {
      target =
        document.querySelector(`[data-section-id="${sectionId}"]`) ||
        document.querySelector(`[data-selected-section="true"]`);
    }

    // 3. Fallback to any selected section or canvas root
    if (!target) {
      target =
        document.querySelector(`[data-selected-section="true"]`) ||
        document.querySelector(".business-site-root");
    }

    const mergedConfig = {
      ...animations,
      ...overrideConfig,
      trigger: "load", // force instant run for preview
      applyToChildren: selectedElementId ? false : (overrideConfig.applyToChildren ?? applyToChildren),
    };

    if (target) {
      // Scroll into view if needed
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      runGsapAnimation(target, mergedConfig);
    }

    const runDuration = parseFloat(mergedConfig.duration ?? duration) || 0.8;
    const runDelay = parseFloat(mergedConfig.delay ?? delay) || 0;
    setTimeout(() => {
      setIsPlaying(false);
    }, (runDuration + runDelay + 0.6) * 1000);
  };

  return (
    <div className="space-y-6 text-xs text-slate-700">
      {/* Target Preview Context Indicator */}
      <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-blue-900">
          Target: <span className="font-bold">{elementLabel || (sectionId ? "Section Elements" : "Canvas")}</span>
        </span>
        <button
          onClick={handlePreview}
          disabled={isPlaying}
          className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] flex items-center gap-1 shadow transition-all disabled:opacity-50"
        >
          <Play className="w-3 h-3 fill-white" />
          <span>{isPlaying ? "Playing..." : "Test Animation"}</span>
        </button>
      </div>

      {/* Animation Category Tabs */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Animation Category
        </label>
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
          {Object.entries(ANIMATION_CATEGORIES).map(([catKey, cat]) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`py-1.5 px-2.5 rounded-lg font-semibold text-center transition-all ${
                activeCategory === catKey
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat.label.replace(" Animations", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Animation Type Grid */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Animation Effect
        </label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1 border border-slate-200 rounded-xl bg-slate-50/50">
          <button
            onClick={() => {
              update("type", "none");
            }}
            className={`p-2 rounded-lg text-left font-medium transition-all ${
              currentType === "none"
                ? "bg-blue-600 text-white font-bold shadow-sm"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
            }`}
          >
            None (Disabled)
          </button>
          {ANIMATION_CATEGORIES[activeCategory]?.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                update("type", opt.id);
                // Also trigger preview on click so user immediately sees what this animation looks like!
                handlePreview({ type: opt.id });
              }}
              className={`p-2 rounded-lg text-left font-medium transition-all ${
                currentType === opt.id
                  ? "bg-blue-600 text-white font-bold shadow-sm"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {currentType !== "none" && (
        <>
          {/* Sliders: Duration, Delay, Stagger */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-700">Duration</span>
                <span className="font-mono text-blue-600 font-bold">{duration}s</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={duration}
                onChange={(e) => update("duration", parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-700">Delay</span>
                <span className="font-mono text-blue-600 font-bold">{delay}s</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="2.0"
                step="0.1"
                value={delay}
                onChange={(e) => update("delay", parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-700">Stagger (Child Elements)</span>
                <span className="font-mono text-blue-600 font-bold">{stagger}s</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.05"
                value={stagger}
                onChange={(e) => update("stagger", parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>
          </div>

          {/* Easing */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              GSAP Easing Curve
            </label>
            <select
              value={easing}
              onChange={(e) => update("easing", e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 outline-none focus:border-blue-600"
            >
              {EASING_OPTIONS.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>

          {/* Trigger */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Animation Trigger
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => update("trigger", "scroll")}
                className={`py-2 px-3 rounded-lg border font-semibold text-center transition-all ${
                  trigger === "scroll"
                    ? "bg-blue-50 border-blue-600 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                On Scroll into View
              </button>
              <button
                onClick={() => update("trigger", "load")}
                className={`py-2 px-3 rounded-lg border font-semibold text-center transition-all ${
                  trigger === "load"
                    ? "bg-blue-50 border-blue-600 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                On Page Load
              </button>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            {!selectedElementId && (
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold text-slate-700">Apply to All Child Elements</span>
                <input
                  type="checkbox"
                  checked={applyToChildren}
                  onChange={(e) => update("applyToChildren", e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                />
              </label>
            )}

            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-slate-700">Play Animation Once Only</span>
              <input
                type="checkbox"
                checked={once}
                onChange={(e) => update("once", e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-semibold text-slate-700">Disable Animation on Mobile</span>
              <input
                type="checkbox"
                checked={disableOnMobile}
                onChange={(e) => update("disableOnMobile", e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
              />
            </label>
          </div>

          {/* Large Preview Action Button */}
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={handlePreview}
              disabled={isPlaying}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isPlaying ? "Playing Animation..." : "Preview Animation Live"}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
