"use client";
import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function ContactFormSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const [formData, setFormData] = useState({ fullName: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const whatsapp = (business.contactDetails?.whatsapp || "+91 98765 43210").replace(/[^0-9]/g, "");
  const primaryColor = theme.primaryColor || "#1B6FD6";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Also trigger WhatsApp redirect with lead message
    const msg = `New Inquiry from Website:%0A• Name: ${encodeURIComponent(formData.fullName)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Service: ${encodeURIComponent(formData.service || "General")}%0A• Message: ${encodeURIComponent(formData.message || "Please call me.")}`;
    window.open(`https://wa.me/${whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section ref={containerRef} id="contact" className="py-20 sm:py-28 bg-slate-50/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            {content.badge && (
              <EditableElement
                elementKey="badge"
                sectionId={section.id}
                label="Badge"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-2"
              >
                <span>{content.badge}</span>
              </EditableElement>
            )}

            <EditableElement
              elementKey="heading"
              sectionId={section.id}
              label="Form Heading"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h2"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              {content.heading || "Request a Free Quotation"}
            </EditableElement>

            <EditableElement
              elementKey="description"
              sectionId={section.id}
              label="Description"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-3 text-sm sm:text-base text-slate-600"
            >
              {content.description || "Send us your requirement. We will contact you with exact estimates and schedule."}
            </EditableElement>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
              <p className="text-sm text-slate-600 mt-2">
                {content.successMessage || "Thank you! Our representative will call you shortly."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-semibold text-emerald-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Service / Product Needed
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="e.g. Custom Wooden Dining Set or On-site consultation"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Additional Details or Questions
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your requirements, measurements, or preferred timeline..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  style={{ backgroundColor: primaryColor }}
                  className="w-full py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{content.submitText || "Submit Inquiry & Connect"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Your details are 100% confidential. No spam guaranteed.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

