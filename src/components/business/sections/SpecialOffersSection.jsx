"use client";
import React, { useState } from "react";
import { Tag, Copy, Check, MessageCircle, Sparkles } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function SpecialOffersSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const [copied, setCopied] = useState(false);

  const couponCode = content.couponCode || "MKFESTIVE26";
  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");

  const handleCopy = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border-2 border-dashed border-amber-400 p-8 sm:p-12 shadow-xl overflow-hidden">
          {/* Decorative Corner Badge */}
          <div className="absolute top-0 right-0 bg-amber-500 text-white font-extrabold text-xs px-6 py-2 rounded-bl-2xl shadow uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Promo</span>
          </div>

          <div className="max-w-2xl">
            <EditableElement
              elementKey="heading"
              sectionId={section.id}
              label="Promo Headline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h2"
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              {content.heading || "Special Promotional Discount"}
            </EditableElement>

            <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-amber-600">
              {content.discount || "FLAT 20% OFF"}
            </p>

            <EditableElement
              elementKey="description"
              sectionId={section.id}
              label="Description"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-4 text-sm sm:text-base text-slate-600"
            >
              {content.description ||
                `Mention this promo voucher during inquiry or order confirmation to receive instant discounts on all services in ${business.city || "Gujarat"}.`}
            </EditableElement>

            {/* Coupon Code Block */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-300 font-mono font-bold text-slate-800 text-sm">
                <Tag className="w-4 h-4 text-amber-600" />
                <span>{couponCode}</span>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-slate-200 rounded transition-colors text-slate-600"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={
                  content.buttonLink ||
                  `https://wa.me/${whatsapp}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20have%20promo%20code%20${encodeURIComponent(couponCode)}%20for%20the%20discount!`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#25D366" }}
                className="px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow flex items-center gap-2 hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{content.buttonText || "Redeem on WhatsApp"}</span>
              </a>
            </div>

            {content.expiresIn && (
              <p className="mt-4 text-xs text-slate-400 font-medium">{content.expiresIn}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

