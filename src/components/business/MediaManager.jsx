"use client";
import React, { useState } from "react";
import { Upload, Image as ImageIcon, Check, Trash2, Copy, Sparkles } from "lucide-react";

const CURATED_STOCK_MEDIA = [
  { url: "/websites/shynex.png", name: "Modern Showroom & Reception", category: "Showroom" },
  { url: "/websites/bsr.png", name: "Premium Craftsmanship & Materials", category: "Craft" },
  { url: "/websites/RaviprakashIndustries.png", name: "Industrial Manufacturing & Plant", category: "Industrial" },
  { url: "/websites/GroovyCafe.png", name: "Hospitality & Lounge", category: "Hospitality" },
  { url: "/websites/AnvilTechno.png", name: "Tech & Corporate Architecture", category: "Corporate" },
  { url: "/websites/loginex.png", name: "Finished Product Deliverable", category: "Product" },
  { url: "/websites/rsdm.png", name: "Specialist Consultation & Workshop", category: "Workshop" },
];

export function MediaManager({
  business = {},
  onSelectMedia = () => {},
  onBusinessUpdate = () => {},
}) {
  const [activeTab, setActiveTab] = useState("business"); // "business" | "stock"
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [copiedUrl, setCopiedUrl] = useState("");

  const businessMedia = business.media || [];

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("businessId", business.id || "general");

      const res = await fetch("/api/business/media/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to upload file");
      }

      // Add to business media collection
      const newMediaItem = {
        id: `img_${Date.now()}`,
        url: data.url,
        name: data.name,
        size: data.size,
        type: data.type,
        alt: data.name,
        uploadedAt: new Date().toISOString(),
      };

      const updatedMedia = [newMediaItem, ...businessMedia];
      onBusinessUpdate({ ...business, media: updatedMedia });
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard?.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(""), 2000);
  };

  const handleDeleteMedia = (mediaId) => {
    const updated = businessMedia.filter((m) => m.id !== mediaId);
    onBusinessUpdate({ ...business, media: updated });
  };

  return (
    <div className="space-y-6 text-xs text-slate-700">
      {/* Upload Zone */}
      <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:border-blue-500 hover:bg-blue-50/30 transition-all">
        <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <p className="font-bold text-slate-800 text-sm">Upload Business Photos or Logo</p>
        <p className="text-slate-400 text-[11px] mt-1">PNG, JPG, WebP, SVG up to 5MB</p>

        <label className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl cursor-pointer shadow transition-all">
          <span>{isUploading ? "Uploading..." : "Choose File from Computer"}</span>
          <input
            type="file"
            accept="image/*"
            disabled={isUploading}
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {uploadError && (
          <p className="text-red-500 font-semibold text-[11px] mt-2">{uploadError}</p>
        )}
      </div>

      {/* Tabs: Business Media vs Curated Stock */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab("business")}
          className={`py-2 px-4 font-bold border-b-2 transition-all ${
            activeTab === "business"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Uploaded Media ({businessMedia.length})
        </button>
        <button
          onClick={() => setActiveTab("stock")}
          className={`py-2 px-4 font-bold border-b-2 transition-all ${
            activeTab === "stock"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          Curated Royalty-Free Library
        </button>
      </div>

      {/* Media Grid */}
      {activeTab === "business" ? (
        businessMedia.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-50" />
            <p>No media uploaded yet for this business.</p>
            <p className="text-[11px] mt-1">Upload photos above or use our stock library.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
            {businessMedia.map((img) => (
              <div
                key={img.id}
                className="group relative border border-slate-200 rounded-xl overflow-hidden bg-slate-100 shadow-sm"
              >
                <img src={img.url} alt={img.alt || img.name} className="w-full h-24 object-cover" />
                <div className="p-2 bg-white">
                  <p className="font-semibold text-slate-800 truncate text-[11px]">{img.name}</p>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => onSelectMedia(img.url)}
                      className="text-blue-600 font-bold hover:underline text-[10px]"
                    >
                      Apply Image
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(img.url)}
                        title="Copy URL"
                        className="p-1 hover:bg-slate-100 rounded text-slate-500"
                      >
                        {copiedUrl === img.url ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteMedia(img.id)}
                        title="Delete"
                        className="p-1 hover:bg-red-50 rounded text-red-500"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto p-1">
          {CURATED_STOCK_MEDIA.map((stock, idx) => (
            <div
              key={idx}
              className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:border-blue-400 transition-all"
            >
              <img src={stock.url} alt={stock.name} className="w-full h-24 object-cover" />
              <div className="p-2 bg-white">
                <p className="font-semibold text-slate-800 truncate text-[11px]">{stock.name}</p>
                <button
                  onClick={() => onSelectMedia(stock.url)}
                  className="mt-2 w-full py-1 rounded bg-blue-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors text-[10px]"
                >
                  Apply to Selection
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

