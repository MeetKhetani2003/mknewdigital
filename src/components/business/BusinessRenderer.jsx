"use client";
import React from "react";
import Link from "next/link";
import { renderSection } from "./sections";
import { getThemeStyles } from "@/lib/themes";
import { Sparkles } from "lucide-react";
import { SacredAstrologyTemplate } from "./templates/SacredAstrologyTemplate";

export function BusinessRenderer({
  business = {},
  website = {},
  isEditing = false,
  selectedElementId = null,
  onSelectElement = () => {},
}) {
  const isAstrology =
    business.theme?.preset === "sacred-astrology" ||
    business.slug === "dr-shalmali-khune" ||
    business.category?.toLowerCase().includes("astrology");

  // When viewing the Dr. Shalmali Khune / Sacred Astrology theme in live or preview mode
  if (isAstrology && !isEditing) {
    return <SacredAstrologyTemplate business={business} website={website} isEditing={false} />;
  }

  const sections = isEditing
    ? website.draftVersion?.sections || []
    : website.publishedVersion?.sections || [];

  const theme = business.theme || {};
  const themeStyles = getThemeStyles(theme);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": business.seo?.structuredDataType || "LocalBusiness",
    name: business.businessName,
    description: business.seo?.description || business.businessInformation?.about,
    url: business.seo?.canonicalUrl || `https://www.mkdigitalnexus.in/business/${business.slug}`,
    telephone: business.contactDetails?.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.contactDetails?.address,
      addressLocality: business.city,
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    openingHours: business.contactDetails?.openingHours || "Mo-Sa 09:00-20:30",
    priceRange: "₹₹",
  };

  return (
    <div
      style={themeStyles}
      className="business-site-root min-h-screen w-full bg-white text-slate-900 selection:bg-blue-600 selection:text-white"
    >
      {!isEditing && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {sections.map((sec) =>
        renderSection(sec, {
          isEditing,
          selectedElementId,
          onSelectElement,
          business,
          theme,
        })
      )}

      {/* Floating Combo Link to Digital Business Card */}
      {!isEditing && business.slug && (
        <aside className="fixed bottom-5 left-5 z-40 hidden sm:block">
          <Link
            href={`/business/${business.slug}/digitalcard`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/90 text-white font-bold text-xs shadow-2xl border border-white/20 backdrop-blur-md hover:bg-black hover:scale-105 transition-all group select-none"
            title="Open Interactive Digital Business Card"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Digital Business Card</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-extrabold">
              NFC
            </span>
          </Link>
        </aside>
      )}
    </div>
  );
}

