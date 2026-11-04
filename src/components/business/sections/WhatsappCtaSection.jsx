"use client";
import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function WhatsappCtaSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");
  const defaultMsg = encodeURIComponent(
    content.messagePrompt || `Hi ${business.businessName || "Business"}, I saw your website and want to know more about your services.`
  );

  return (
    <section ref={containerRef} className="py-14 bg-emerald-600 text-white relative overflow-hidden">
      {/* Subtle circular ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-700/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <EditableElement
            elementKey="heading"
            sectionId={section.id}
            label="WhatsApp Headline"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h3"
            className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
          >
            {content.heading || "Need Immediate Assistance? Chat With Us on WhatsApp!"}
          </EditableElement>

          <EditableElement
            elementKey="description"
            sectionId={section.id}
            label="Description"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="p"
            className="mt-3 text-sm sm:text-base text-emerald-100"
          >
            {content.description ||
              "Skip the queue. Chat directly with our manager on WhatsApp for fast answers, live photos, and instant price estimates."}
          </EditableElement>
        </div>

        <div>
          <a
            href={`https://wa.me/${whatsapp}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white text-emerald-800 font-extrabold text-sm sm:text-base shadow-2xl hover:bg-emerald-50 hover:scale-105 transition-all inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span>{content.buttonText || "Open WhatsApp Chat"}</span>
            <ArrowRight className="w-4 h-4 text-emerald-600" />
          </a>
        </div>
      </div>
    </section>
  );
}

