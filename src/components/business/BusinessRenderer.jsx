"use client";
import React from "react";
import { renderSection } from "./sections";
import { getThemeStyles } from "@/lib/themes";

export function BusinessRenderer({
  business = {},
  website = {},
  isEditing = false,
  selectedElementId = null,
  onSelectElement = () => {},
}) {
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
    </div>
  );
}

