"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Globe,
  Sparkles,
  ExternalLink,
  Plus,
  Trash2,
  MoveUp,
  MoveDown,
  Layers,
  Palette,
  Share2,
  Image as ImageIcon,
  Check,
  Eye,
  RefreshCw,
  Edit2,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  User,
  Shield,
  Smartphone,
  Sliders,
} from "lucide-react";
import { DigitalCardRenderer } from "./DigitalCardRenderer";
import { CARD_THEMES, BACKGROUND_PRESETS } from "@/lib/digital-card-defaults";

export function DigitalCardBuilder({
  initialBusiness,
  initialCard,
  onExit = () => {},
  onSwitchToWebsiteBuilder = () => {},
}) {
  const business = initialBusiness;
  const initialData = initialCard?.draftVersion || initialCard?.publishedVersion || {};

  const [activeTab, setActiveTab] = useState("cards"); // 'branding', 'cards', 'theme', 'socials', 'features'
  const [cardData, setCardData] = useState(initialData);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Editing single card modal / drawer
  const [editingCardIndex, setEditingCardIndex] = useState(null);

  const businessId = business?.id || business?._id;
  const cardSlug = business?.slug || "card";
  const publicUrl = `/business/${cardSlug}/digitalcard`;

  // Update top level card data
  const updateProfile = (field, value) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateTheme = (field, value) => {
    setCardData((prev) => ({
      ...prev,
      theme: {
        ...(prev.theme || {}),
        [field]: value,
      },
    }));
  };

  // Card items management
  const handleAddCard = () => {
    const newCard = {
      id: `card-${Date.now()}`,
      title: "New Action Link",
      subtitle: "Tap to explore",
      icon: "globe",
      actionType: "url",
      actionTarget: "https://",
      photoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      theme: "golden-sand",
      ...CARD_THEMES["golden-sand"],
    };
    setCardData((prev) => ({
      ...prev,
      cards: [...(prev.cards || []), newCard],
    }));
    setEditingCardIndex((cardData.cards || []).length);
  };

  const handleUpdateCardItem = (index, updates) => {
    setCardData((prev) => {
      const updatedCards = [...(prev.cards || [])];
      updatedCards[index] = { ...updatedCards[index], ...updates };
      return { ...prev, cards: updatedCards };
    });
  };

  const handleDeleteCardItem = (index) => {
    setCardData((prev) => ({
      ...prev,
      cards: (prev.cards || []).filter((_, i) => i !== index),
    }));
    if (editingCardIndex === index) setEditingCardIndex(null);
  };

  const handleMoveCard = (index, direction) => {
    setCardData((prev) => {
      const cards = [...(prev.cards || [])];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= cards.length) return prev;
      const temp = cards[index];
      cards[index] = cards[targetIndex];
      cards[targetIndex] = temp;
      return { ...prev, cards };
    });
  };

  // Save draft
  const handleSaveDraft = async () => {
    setSaving(true);
    setSaveSuccess(false);
    try {
      const res = await fetch(`/api/business/digitalcard/${businessId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftVersion: cardData }),
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2500);
      } else {
        alert(data.message || "Failed to save draft");
      }
    } catch (e) {
      alert("Error saving: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  // Publish Card
  const handlePublish = async () => {
    setPublishing(true);
    setPublishSuccess(false);
    try {
      // First save draft
      await fetch(`/api/business/digitalcard/${businessId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draftVersion: cardData }),
      });

      // Then publish
      const res = await fetch(`/api/business/digitalcard/${businessId}/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cardData }),
      });
      const data = await res.json();
      if (data.success) {
        setPublishSuccess(true);
        setTimeout(() => setPublishSuccess(false), 2500);
      } else {
        alert(data.message || "Failed to publish card");
      }
    } catch (e) {
      alert("Error publishing: " + e.message);
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans select-none">
      {/* Top Navbar */}
      <header className="h-16 px-4 sm:px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm text-white tracking-tight">
                {business.businessName}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Digital Card Builder
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">
              /business/{cardSlug}/digitalcard
            </p>
          </div>
        </div>

        {/* Center: Combo Toggle */}
        <div className="hidden md:flex items-center bg-slate-800/80 p-1 rounded-2xl border border-slate-700">
          <button
            onClick={onSwitchToWebsiteBuilder}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Website Builder</span>
          </button>
          <button
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Card Builder</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-slate-700"
          >
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Preview Card</span>
          </a>

          <button
            onClick={handleSaveDraft}
            disabled={saving}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 inline-flex items-center gap-1.5 transition-all"
          >
            {saveSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>{saving ? "Saving..." : "Save Draft"}</span>
              </>
            )}
          </button>

          <button
            onClick={handlePublish}
            disabled={publishing}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black shadow-lg inline-flex items-center gap-1.5 transition-all"
          >
            {publishSuccess ? (
              <>
                <Check className="w-4 h-4 text-slate-950" />
                <span>Published!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{publishing ? "Publishing..." : "Publish Live Card"}</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Workspace: Left is Live Interactive Mockup, Right is Control Editor */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Live Preview Phone Canvas */}
        <div className="flex-1 bg-slate-950 p-4 sm:p-8 flex items-center justify-center overflow-y-auto border-r border-slate-800/80">
          <div className="w-full flex flex-col items-center">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-400">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Real-Time Mobile Card Preview</span>
            </div>

            {/* Embedded Live Renderer */}
            <div className="w-full max-w-[430px] rounded-[36px] overflow-hidden shadow-2xl border border-slate-700/60">
              <DigitalCardRenderer
                card={{ publishedVersion: cardData, draftVersion: cardData }}
                business={business}
                showDesktopFrame={false}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Tabbed Controls Editor */}
        <div className="w-full lg:w-[460px] bg-slate-900 flex flex-col overflow-y-auto h-[calc(100vh-64px)]">
          {/* Editor Tabs Navigation */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20 overflow-x-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "cards"
                  ? "border-amber-400 text-amber-400 bg-slate-900"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Action Pills ({cardData.cards?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab("branding")}
              className={`px-4 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "branding"
                  ? "border-amber-400 text-amber-400 bg-slate-900"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Branding & Header</span>
            </button>

            <button
              onClick={() => setActiveTab("theme")}
              className={`px-4 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "theme"
                  ? "border-amber-400 text-amber-400 bg-slate-900"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Theme & Glow</span>
            </button>

            <button
              onClick={() => setActiveTab("socials")}
              className={`px-4 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "socials"
                  ? "border-amber-400 text-amber-400 bg-slate-900"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Socials & CTA</span>
            </button>
          </div>

          {/* Tab 1: Action Cards (Pills) */}
          {activeTab === "cards" && (
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-bold text-sm text-white">Interactive Action Pills</h3>
                  <p className="text-xs text-slate-400">
                    Signature 3D gradient link cards with photo thumbnails
                  </p>
                </div>

                <button
                  onClick={handleAddCard}
                  className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Pill</span>
                </button>
              </div>

              {/* Cards List */}
              <div className="space-y-3">
                {(cardData.cards || []).map((item, index) => (
                  <div
                    key={item.id || index}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <span className="font-bold text-xs text-white">{item.title}</span>
                        <span className="text-[10px] text-slate-400">({item.actionType})</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleMoveCard(index, "up")}
                          disabled={index === 0}
                          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30"
                        >
                          <MoveUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleMoveCard(index, "down")}
                          disabled={index === (cardData.cards || []).length - 1}
                          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 disabled:opacity-30"
                        >
                          <MoveDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteCardItem(index)}
                          className="p-1 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/20"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Card Fields */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-semibold">Title</label>
                        <input
                          type="text"
                          value={item.title || ""}
                          onChange={(e) => handleUpdateCardItem(index, { title: e.target.value })}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-semibold">Subtitle</label>
                        <input
                          type="text"
                          value={item.subtitle || ""}
                          onChange={(e) => handleUpdateCardItem(index, { subtitle: e.target.value })}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-semibold">Action Target URL</label>
                        <input
                          type="text"
                          value={item.actionTarget || ""}
                          onChange={(e) => handleUpdateCardItem(index, { actionTarget: e.target.value })}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-semibold">Theme Palette</label>
                        <select
                          value={item.theme || "golden-sand"}
                          onChange={(e) => {
                            const selectedTheme = CARD_THEMES[e.target.value] || CARD_THEMES["golden-sand"];
                            handleUpdateCardItem(index, {
                              theme: e.target.value,
                              ...selectedTheme,
                            });
                          }}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        >
                          {Object.entries(CARD_THEMES).map(([key, t]) => (
                            <option key={key} value={key}>
                              {t.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-semibold">
                        Right Masked Photo URL
                      </label>
                      <input
                        type="text"
                        value={item.photoImage || ""}
                        onChange={(e) => handleUpdateCardItem(index, { photoImage: e.target.value })}
                        className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-semibold">
                        Optional Cursive Note (e.g. "Let's Travel Together")
                      </label>
                      <input
                        type="text"
                        value={item.scriptText || ""}
                        onChange={(e) => handleUpdateCardItem(index, { scriptText: e.target.value })}
                        className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                        placeholder="e.g. Verified Partner"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Branding & Header */}
          {activeTab === "branding" && (
            <div className="p-6 space-y-4 text-xs">
              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Top Verified Badge</label>
                <input
                  type="text"
                  value={cardData.badge || ""}
                  onChange={(e) => updateProfile("badge", e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold outline-none focus:border-amber-400"
                  placeholder="VERIFIED BUSINESS PARTNER"
                />
              </div>

              {/* Dual-Tone Title Settings */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">Radiant Dual-Tone Title</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cardData.isDualToneTitle !== false}
                      onChange={(e) => updateProfile("isDualToneTitle", e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-[11px] text-slate-300">Enable</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase">Part 1 (White)</label>
                    <input
                      type="text"
                      value={cardData.titlePart1 || ""}
                      onChange={(e) => updateProfile("titlePart1", e.target.value)}
                      className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase">Part 2 (Radiant)</label>
                    <input
                      type="text"
                      value={cardData.titlePart2 || ""}
                      onChange={(e) => updateProfile("titlePart2", e.target.value)}
                      className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 font-bold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase">Part 2 Gradient Style</label>
                  <select
                    value={cardData.titlePart2Gradient || "from-amber-400 via-orange-400 to-amber-500"}
                    onChange={(e) => updateProfile("titlePart2Gradient", e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium outline-none"
                  >
                    <option value="from-amber-400 via-orange-400 to-amber-500">Gold & Amber Flame</option>
                    <option value="from-sky-400 via-blue-500 to-indigo-500">Sapphire Electric Blue</option>
                    <option value="from-emerald-400 via-teal-500 to-green-500">Emerald Prestige Green</option>
                    <option value="from-fuchsia-400 via-pink-500 to-rose-500">Sunset Magenta / Rose</option>
                    <option value="from-orange-400 via-amber-400 to-yellow-400">Titanium Sunburst</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Tagline / Designation</label>
                <input
                  type="text"
                  value={cardData.designation || ""}
                  onChange={(e) => updateProfile("designation", e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  placeholder="Where Every Journey Feels First Class"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Avatar / Logo Image URL</label>
                <input
                  type="text"
                  value={cardData.avatarUrl || ""}
                  onChange={(e) => updateProfile("avatarUrl", e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Founder / Owner Details</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <input
                    type="text"
                    value={cardData.ownerDetails?.name || ""}
                    onChange={(e) =>
                      updateProfile("ownerDetails", {
                        ...(cardData.ownerDetails || {}),
                        name: e.target.value,
                      })
                    }
                    className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium outline-none"
                    placeholder="Owner Name"
                  />
                  <input
                    type="text"
                    value={cardData.ownerDetails?.role || ""}
                    onChange={(e) =>
                      updateProfile("ownerDetails", {
                        ...(cardData.ownerDetails || {}),
                        role: e.target.value,
                      })
                    }
                    className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium outline-none"
                    placeholder="Role (e.g. Founder)"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Theme & Background */}
          {activeTab === "theme" && (
            <div className="p-6 space-y-4 text-xs">
              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Atmospheric Preset</label>
                <div className="grid grid-cols-2 gap-2.5 mt-2">
                  {Object.entries(BACKGROUND_PRESETS).map(([key, p]) => (
                    <button
                      key={key}
                      onClick={() => {
                        updateTheme("preset", key);
                        updateTheme("backgroundImageUrl", p.backgroundImageUrl);
                        updateTheme("accentColor", p.accentColor);
                      }}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        cardData.theme?.preset === key
                          ? "border-amber-400 bg-amber-500/10 text-white"
                          : "border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span className="font-bold block text-xs">{p.name}</span>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: p.accentColor }}
                        />
                        <span className="text-[10px] text-slate-400">{key}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Custom Background Image URL</label>
                <input
                  type="text"
                  value={cardData.theme?.backgroundImageUrl || ""}
                  onChange={(e) => updateTheme("backgroundImageUrl", e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Accent Color</label>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="color"
                    value={cardData.theme?.accentColor || "#F59E0B"}
                    onChange={(e) => updateTheme("accentColor", e.target.value)}
                    className="w-10 h-10 rounded-xl bg-transparent cursor-pointer border border-slate-700"
                  />
                  <input
                    type="text"
                    value={cardData.theme?.accentColor || "#F59E0B"}
                    onChange={(e) => updateTheme("accentColor", e.target.value)}
                    className="flex-1 p-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono text-xs uppercase"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Socials & Floating CTA */}
          {activeTab === "socials" && (
            <div className="p-6 space-y-4 text-xs">
              <h3 className="font-bold text-sm text-white">Floating Sticky Action</h3>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase">Button Title</label>
                    <input
                      type="text"
                      value={cardData.floatingAction?.title || "Call Now"}
                      onChange={(e) =>
                        updateProfile("floatingAction", {
                          ...(cardData.floatingAction || {}),
                          title: e.target.value,
                        })
                      }
                      className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 uppercase">Phone Number</label>
                    <input
                      type="text"
                      value={cardData.floatingAction?.phone || business.contactDetails?.phone || ""}
                      onChange={(e) =>
                        updateProfile("floatingAction", {
                          ...(cardData.floatingAction || {}),
                          phone: e.target.value,
                        })
                      }
                      className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium"
                    />
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-sm text-white pt-2">Footer Verified Trust Badge</h3>
              <div>
                <input
                  type="text"
                  value={cardData.trustBadge?.text || ""}
                  onChange={(e) =>
                    updateProfile("trustBadge", {
                      text: e.target.value,
                    })
                  }
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold outline-none"
                  placeholder="YOUR TRUSTED BUSINESS PARTNER"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

