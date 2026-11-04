"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  QrCode,
  Share2,
  Download,
  Copy,
  Check,
  Building2,
  CheckCircle,
  Eye,
  Sliders,
  Layers,
  Key,
  X,
  Lock,
} from "lucide-react";
import { VisualBuilder } from "./VisualBuilder";
import { DigitalCardBuilder } from "./DigitalCardBuilder";

export function AdminComboWorkspace({ business, initialWebsite, initialCard }) {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'website', 'card'
  const [website, setWebsite] = useState(initialWebsite);
  const [card, setCard] = useState(initialCard);
  const [copiedWeb, setCopiedWeb] = useState(false);
  const [copiedCard, setCopiedCard] = useState(false);

  // Client Password Admin Management
  const [clientPassword, setClientPassword] = useState(business.clientPassword || "sacred2026");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [newPasswordInput, setNewPasswordInput] = useState(business.clientPassword || "sacred2026");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handleUpdateClientPassword = async (e) => {
    e.preventDefault();
    if (!newPasswordInput.trim()) return;
    setPasswordSaving(true);
    try {
      const res = await fetch(`/api/business/businesses/${business.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientPassword: newPasswordInput.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setClientPassword(newPasswordInput.trim());
        setPasswordSuccess(true);
        setTimeout(() => {
          setPasswordModalOpen(false);
          setPasswordSuccess(false);
        }, 1200);
      } else {
        alert(data.message || "Failed to update password");
      }
    } catch (err) {
      alert("Error updating password: " + err.message);
    } finally {
      setPasswordSaving(false);
    }
  };

  const websiteUrl = `/business/${business.slug}`;
  const cardUrl = `/business/${business.slug}/digitalcard`;
  const fullWebsiteUrl = `https://mkdigitalnexus.in${websiteUrl}`;
  const fullCardUrl = `https://mkdigitalnexus.in${cardUrl}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(fullCardUrl)}&margin=10`;
  const vcardUrl = `/api/business/digitalcard/${business.id}/vcard`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard?.writeText(text);
    if (type === "web") {
      setCopiedWeb(true);
      setTimeout(() => setCopiedWeb(false), 2000);
    } else {
      setCopiedCard(true);
      setTimeout(() => setCopiedCard(false), 2000);
    }
  };

  // If in Website Builder mode, render VisualBuilder
  if (activeTab === "website") {
    return (
      <div className="relative">
        <VisualBuilder
          initialBusiness={business}
          initialWebsite={website}
          onExit={() => setActiveTab("overview")}
          onSwitchToCardBuilder={() => setActiveTab("card")}
        />
      </div>
    );
  }

  // If in Digital Card Builder mode, render DigitalCardBuilder
  if (activeTab === "card") {
    return (
      <DigitalCardBuilder
        initialBusiness={business}
        initialCard={card}
        onExit={() => setActiveTab("overview")}
        onSwitchToWebsiteBuilder={() => setActiveTab("website")}
      />
    );
  }

  // Default: Combo Product Overview & Launch Hub
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Top Header */}
      <header className="h-18 px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link
            href="/business/admin"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Back to Admin Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-white">{business.businessName}</h1>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Combo Digital Product
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {business.category} • {business.city}
            </p>
          </div>
        </div>

        {/* Builder Quick Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("website")}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Open Website Builder</span>
          </button>

          <button
            onClick={() => setActiveTab("card")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black flex items-center gap-2 shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Digital Card Builder</span>
          </button>
        </div>
      </header>

      {/* Main Combo Workspace */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {/* Combo Hero Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-amber-900/30 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Digital Presence Package</span>
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Website + Digital Card Combo
            </h2>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Every business gets both a high-converting multi-section website and an ultra-modern interactive digital business card (ideal for WhatsApp sharing, NFC tap, and instant phone contact saves).
            </p>
          </div>
        </div>

        {/* 3-Column Product Cards Grid (Website, Digital Card, Client Portal) */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Product 1: The Full Website */}
          <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Full Business Website</h3>
                    <p className="text-xs text-slate-400">Multi-Section Interactive</p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {business.status === "published" ? "Live" : "Draft"}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="truncate pr-2">{fullWebsiteUrl}</span>
                <button
                  onClick={() => copyToClipboard(fullWebsiteUrl, "web")}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0"
                  title="Copy Link"
                >
                  {copiedWeb ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Dynamic sections tailored to {business.category}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SEO Title, Schema markup, and OpenGraph</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Floating Digital Card combo badge</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveTab("website")}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Open Website Builder</span>
              </button>

              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="View Website"
              >
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product 2: The Digital Business Card */}
          <div className="p-7 rounded-3xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Digital Business Card</h3>
                    <p className="text-xs text-slate-400">Mobile-First NFC & WhatsApp</p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready & Active
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300 flex items-center justify-between">
                <span className="truncate pr-2">{fullCardUrl}</span>
                <button
                  onClick={() => copyToClipboard(fullCardUrl, "card")}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0"
                  title="Copy Link"
                >
                  {copiedCard ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Pulsing avatar badge with radiant header</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>3D gradient action pills with masked photos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>1-click "Add to Contacts" (.vcf) & QR code</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveTab("card")}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Open Card Builder</span>
              </button>

              <a
                href={cardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="View Digital Card"
              >
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product 3: Client Self-Service Portal */}
          <div className="p-7 rounded-3xl bg-slate-900 border border-emerald-500/30 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Client Settings Portal</h3>
                    <p className="text-xs text-slate-400">Password-Protected Management</p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Client Ready
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs flex flex-col gap-1.5">
                <div className="flex items-center justify-between font-mono text-emerald-400">
                  <span className="truncate pr-2">/business/{business.slug}/settings</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800/80">
                  <span className="text-slate-400 font-sans">Client Access Key:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {clientPassword}
                    </span>
                    <button
                      onClick={() => {
                        setNewPasswordInput(clientPassword);
                        setPasswordSuccess(false);
                        setPasswordModalOpen(true);
                      }}
                      className="px-2 py-0.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 transition-colors"
                      title="Change Client Password as Admin"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>

              <ul className="text-xs text-slate-400 space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Consultation Inquiries table with 1-click WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>MongoDB GridFS image gallery & uploader</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Customizable bio, services, and digital card</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
              <Link
                href={`/business/${business.slug}/settings`}
                target="_blank"
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Client Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* QR Code & Sharing Section */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-lg font-black text-white">Instant QR Code & NFC Ready</h3>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Print this QR code on physical business cards, brochures, and standees, or program it into an NFC smart card. Scanning opens the interactive Digital Business Card instantly on any smartphone.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={qrCodeUrl}
                download={`${business.slug}-qrcode.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold inline-flex items-center gap-2 border border-slate-700 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download QR Image</span>
              </a>

              <a
                href={vcardUrl}
                download
                className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-bold inline-flex items-center gap-2 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download vCard (.vcf)</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white text-slate-900 text-center shadow-2xl shrink-0">
            <img src={qrCodeUrl} alt="QR Code" className="w-40 h-40 rounded-lg" />
            <p className="text-[10px] font-bold text-slate-600 mt-1.5">Scan to Preview Card</p>
          </div>
        </div>
      </div>

      {/* Admin Client Password Change Modal */}
      {passwordModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-sm w-full p-6 shadow-2xl text-left relative animate-fade-in text-white">
            <button
              onClick={() => setPasswordModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white">Change Client Password</h3>
                <p className="text-xs text-slate-400">{business.businessName}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Set the password protecting the client's <span className="font-mono text-emerald-400">/settings</span> portal. The client uses this key to log in, view inquiries, and customize assets.
            </p>

            {passwordSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-1 my-3">
                <Check className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="text-xs font-bold text-emerald-300">Password Updated Successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleUpdateClientPassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    New Portal Password *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={newPasswordInput}
                      onChange={(e) => setNewPasswordInput(e.target.value)}
                      placeholder="e.g. sacred2026"
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const random = `${business.slug.split("-")[0] || "client"}${Math.floor(1000 + Math.random() * 9000)}`;
                        setNewPasswordInput(random);
                      }}
                      className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300"
                      title="Auto-generate password"
                    >
                      Gen
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPasswordModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-700 font-semibold text-xs text-slate-400 hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={passwordSaving || !newPasswordInput.trim()}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    {passwordSaving ? (
                      <span>Saving...</span>
                    ) : (
                      <>
                        <Key className="w-3.5 h-3.5" />
                        <span>Save Password</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

