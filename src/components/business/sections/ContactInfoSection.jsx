"use client";
import React from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function ContactInfoSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const phone = content.phone || business.contactDetails?.phone || "+91 98765 43210";
  const whatsapp = content.whatsapp || business.contactDetails?.whatsapp || "+91 98765 43210";
  const email = content.email || business.contactDetails?.email || `info@${business.slug || "business"}.com`;
  const address = content.address || business.contactDetails?.address || `Main Market Road, ${business.city || "Junagadh"}, Gujarat`;
  const hours = content.openingHours || business.contactDetails?.openingHours || "Mon - Sat: 9:00 AM - 8:30 PM";

  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const cleanWa = whatsapp.replace(/[^0-9]/g, "");
  const primaryColor = theme.primaryColor || "#1B6FD6";

  const cards = [
    {
      title: "Call Direct",
      value: phone,
      sub: "Mon - Sat, 9am - 8:30pm",
      icon: Phone,
      link: `tel:${cleanPhone}`,
      actionText: "Call Now",
    },
    {
      title: "WhatsApp Chat",
      value: whatsapp,
      sub: "Instant 30-sec response",
      icon: MessageCircle,
      link: `https://wa.me/${cleanWa}?text=Hi%20${encodeURIComponent(business.businessName || "Business")},%20I%20want%20to%20inquire%20about%20your%20services.`,
      actionText: "Chat Online",
      isWa: true,
    },
    {
      title: "Showroom / Office",
      value: address,
      sub: "Free parking available",
      icon: MapPin,
      link: "#map",
      actionText: "Get Directions",
    },
    {
      title: "Working Hours",
      value: hours,
      sub: "Sunday by appointment",
      icon: Clock,
      link: `mailto:${email}`,
      actionText: "Email Us",
    },
  ];

  return (
    <section ref={containerRef} id="contact-info" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {content.badge && (
            <EditableElement
              elementKey="badge"
              sectionId={section.id}
              label="Badge"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-3"
            >
              <span>{content.badge}</span>
            </EditableElement>
          )}

          <EditableElement
            elementKey="heading"
            sectionId={section.id}
            label="Heading"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            {content.heading || "Connect With Our Dedicated Team"}
          </EditableElement>

          <EditableElement
            elementKey="description"
            sectionId={section.id}
            label="Description"
            isEditing={isEditing}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            as="p"
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            {content.description || `Visit our showroom in ${business.city || "Junagadh"} or reach out directly.`}
          </EditableElement>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => {
            const IconComp = c.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    style={{
                      backgroundColor: c.isWa ? "#25D36620" : `${primaryColor}15`,
                      color: c.isWa ? "#25D366" : primaryColor,
                    }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                  <p className="mt-2 text-sm font-semibold text-slate-700 break-words">{c.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{c.sub}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={c.link}
                    target={c.isWa ? "_blank" : undefined}
                    rel={c.isWa ? "noopener noreferrer" : undefined}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>{c.actionText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

