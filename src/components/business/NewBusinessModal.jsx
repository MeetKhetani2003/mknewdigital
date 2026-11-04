"use client";
import React, { useState } from "react";
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  Phone,
  MessageCircle,
  MapPin,
  Palette,
  FileText,
  Upload,
} from "lucide-react";
import { PREDEFINED_THEMES } from "@/lib/themes";
import { PAGE_LAYOUT_PRESETS } from "@/lib/page-layouts";
import { INDUSTRY_IMAGE_BANK } from "@/lib/image-bank";

export function NewBusinessModal({
  isOpen = false,
  onClose = () => {},
  onCreated = () => {},
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    businessName: "",
    slug: "",
    city: "Junagadh",
    category: "Furniture & Interior",
    logo: "",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "",
    address: "Near Main Market, Junagadh, Gujarat",
    about: "",
    tagline: "Quality Craftsmanship & Modern Living",
    foundedYear: "2018",
    ownerName: "Pravin Shah",
    themePreset: "furniture",
    layoutPreset: "luxury-furniture",
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Google Profile", url: "https://google.com" },
    ],
    photos: [
      "/websites/shynex.png",
      "/websites/bsr.png",
      "/websites/RaviprakashIndustries.png",
    ],
  });

  if (!isOpen) return null;

  const handleNameChange = (name) => {
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
    setForm({
      ...form,
      businessName: name,
      slug,
      email: form.email || `info@${slug || "business"}.com`,
    });
  };

  const handleAiGenerate = async () => {
    if (!form.businessName) {
      setError("Please enter a business name first");
      return;
    }
    setAiGenerating(true);
    setError("");

    try {
      const res = await fetch("/api/business/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: form.businessName,
          city: form.city,
          category: form.category,
          ownerName: form.ownerName,
          foundedYear: form.foundedYear,
        }),
      });

      const data = await res.json();
      if (data.success && data.content) {
        setForm((prev) => ({
          ...prev,
          about: data.content.aboutDescription || prev.about,
          tagline: data.content.heroSubheading || prev.tagline,
        }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.businessName) {
      setError("Business name is required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        businessName: form.businessName,
        slug: form.slug,
        city: form.city,
        category: form.category,
        logo: form.logo,
        contactDetails: {
          phone: form.phone,
          whatsapp: form.whatsapp,
          email: form.email,
          address: form.address,
        },
        socialLinks: form.socialLinks,
        businessInformation: {
          about: form.about,
          tagline: form.tagline,
          foundedYear: form.foundedYear,
          ownerName: form.ownerName,
        },
        theme: {
          preset: form.themePreset,
          ...PREDEFINED_THEMES[form.themePreset],
        },
        layoutPreset: form.layoutPreset,
      };

      const res = await fetch("/api/business/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to create business");
      }

      onCreated(data.business);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-fade-in relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Wizard Header */}
        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
            New Business Website Wizard • Step {step} of 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {step === 1 && "Basic Business Profile"}
            {step === 2 && "Contact & Communication Details"}
            {step === 3 && "Story, Highlights & Owner Profile"}
            {step === 4 && "Industry Theme & AI Starter Selection"}
          </h2>
          <div className="flex gap-1.5 mt-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  s <= step ? "bg-blue-600" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* STEP 1: BASIC PROFILE */}
          {step === 1 && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shreeji Luxury Furniture"
                  value={form.businessName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Website URL Slug *</label>
                  <div className="flex items-center px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 font-mono text-xs">
                    <span className="shrink-0 text-slate-400">/business/</span>
                    <input
                      type="text"
                      required
                      value={form.slug}
                      onChange={(e) => setForm({ ...form, slug: e.target.value })}
                      className="bg-transparent outline-none w-full text-slate-800 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">City / Town *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Junagadh, Rajkot, Ahmedabad"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Business Category / Industry *</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm bg-white font-medium"
                >
                  <option value="Furniture & Interior">Furniture & Interior Design</option>
                  <option value="Restaurant & Cafe">Restaurant, Cafe & Dining</option>
                  <option value="Healthcare & Clinic">Healthcare, Clinic & Hospital</option>
                  <option value="Construction & Builders">Construction & Architecture</option>
                  <option value="Hotels & Resorts">Hotels, Resorts & Hospitality</option>
                  <option value="Fashion & Lifestyle">Fashion, Jewelry & Boutique</option>
                  <option value="Technology & Software">Technology & IT Services</option>
                  <option value="Automobile & Garage">Automobile & Garage Services</option>
                  <option value="Wholesale & Trading">Wholesale & B2B Trading</option>
                  <option value="General Business">General Business / Other</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Logo URL (Optional)</label>
                <input
                  type="text"
                  placeholder="https://... or leave empty for generated avatar"
                  value={form.logo}
                  onChange={(e) => setForm({ ...form, logo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-xs font-mono"
                />
              </div>
            </div>
          )}

          {/* STEP 2: CONTACT & SOCIALS */}
          {step === 2 && (
            <div className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Direct Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Showroom / Office Physical Address</label>
                <textarea
                  rows={2}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Social Media Profiles (Minimum 3)</label>
                <div className="space-y-2">
                  {form.socialLinks.map((s, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <span className="w-24 font-bold text-slate-600 text-xs">{s.platform}</span>
                      <input
                        type="text"
                        value={s.url}
                        onChange={(e) => {
                          const updated = [...form.socialLinks];
                          updated[idx].url = e.target.value;
                          setForm({ ...form, socialLinks: updated });
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: STORY & OWNER */}
          {step === 3 && (
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <label className="block font-bold text-slate-700">About the Business</label>
                <button
                  type="button"
                  onClick={handleAiGenerate}
                  disabled={aiGenerating}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{aiGenerating ? "Generating..." : "Auto-Write with AI"}</span>
                </button>
              </div>

              <textarea
                rows={4}
                value={form.about}
                onChange={(e) => setForm({ ...form, about: e.target.value })}
                placeholder="Describe your company history, values, products and promise..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm resize-none"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Business Owner / Founder Name</label>
                  <input
                    type="text"
                    value={form.ownerName}
                    onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Founded Year</label>
                  <input
                    type="text"
                    value={form.foundedYear}
                    onChange={(e) => setForm({ ...form, foundedYear: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Business Photographs (Min 3 pre-loaded)</label>
                <div className="grid grid-cols-3 gap-3">
                  {form.photos.map((p, i) => (
                    <div key={i} className="h-20 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                      <img src={p} alt="Thumbnail" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PREBUILT LAYOUT & THEME */}
          {step === 4 && (
            <div className="space-y-4 text-xs">
              <label className="block font-bold text-slate-700 mb-1">
                Choose Full-Page Architecture Preset
              </label>
              <p className="text-[11px] text-slate-500 mb-2">
                Select from 22 complete industry layouts pre-configured with sections, colors, and animations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto p-1">
                {PAGE_LAYOUT_PRESETS.map((preset) => {
                  const presetImg =
                    INDUSTRY_IMAGE_BANK[preset.id]?.hero ||
                    INDUSTRY_IMAGE_BANK[preset.id]?.heroFallback ||
                    "/images/generated/saas-dashboard.jpg";

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          layoutPreset: preset.id,
                          themePreset: preset.themeId,
                        })
                      }
                      className={`p-2.5 rounded-2xl border text-left transition-all overflow-hidden flex flex-col justify-between ${
                        form.layoutPreset === preset.id
                          ? "border-blue-600 bg-blue-50/70 shadow-md ring-2 ring-blue-500/20"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <div className="relative h-20 rounded-xl overflow-hidden mb-2 bg-slate-100">
                          <img
                            src={presetImg}
                            alt={preset.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end justify-between p-2">
                            <span
                              style={{ backgroundColor: preset.accentColor }}
                              className="text-[9px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-wider"
                            >
                              {preset.badge}
                            </span>
                            <span className="text-[9px] font-bold text-white/90 bg-black/40 px-1.5 py-0.5 rounded-full">
                              {preset.sectionTypes.length} Sec
                            </span>
                          </div>
                        </div>

                        <p className="font-bold text-slate-900 text-xs">{preset.name}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{preset.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-900">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Ready to Launch Visual Builder</span>
                </div>
                <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                  Clicking "Create & Open Builder" will automatically create your business profile, initialize 19 pre-configured responsive sections, apply your theme, and open the full 3-panel visual canvas!
                </p>
              </div>
            </div>
          )}

          {/* Wizard Footer Navigation */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !form.businessName) {
                    setError("Please enter a business name");
                    return;
                  }
                  setError("");
                  setStep(step + 1);
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2 hover:bg-blue-700 shadow transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4" />
                <span>{loading ? "Creating Business..." : "Create & Open Builder"}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

