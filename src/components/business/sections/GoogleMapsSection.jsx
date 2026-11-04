"use client";
import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function GoogleMapsSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const address = content.address || business.contactDetails?.address || `Main Road, ${business.city || "Junagadh"}, Gujarat`;
  const mapUrl = content.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section ref={containerRef} id="map" className="relative w-full h-[450px] sm:h-[520px] bg-slate-100 overflow-hidden">
      {/* Map iframe */}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${business.businessName || "Business"} Location Map`}
        className="w-full h-full filter saturate-150 contrast-105"
      />

      {/* Floating Shop Details Card */}
      <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-slate-200/80 z-20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">{business.businessName || "Our Showroom"}</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{address}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
          <span className="text-[11px] text-emerald-600 font-semibold">● Open Now</span>
        </div>
      </div>
    </section>
  );
}

