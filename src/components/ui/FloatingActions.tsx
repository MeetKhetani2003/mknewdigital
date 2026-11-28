"use client";

import { useState, useEffect } from "react";
import { Phone, Sparkles } from "lucide-react";
import { BookServiceModal } from "./BookServiceModal";

export function FloatingActions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Website Development");

  useEffect(() => {
    // Listen for custom trigger events from anywhere in the app (Hero, Navbar, CTAs)
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent<{ service?: string }>;
      if (customEvent.detail?.service) {
        setSelectedService(customEvent.detail.service);
      }
      setModalOpen(true);
    };

    window.addEventListener("open-book-service", handleOpenModal);
    return () => window.removeEventListener("open-book-service", handleOpenModal);
  }, []);

  return (
    <>
      {/* Lead Capture / Book Service Popup Modal */}
      <BookServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating Action Dock - Clean, minimal, non-intrusive floating group (Bottom-Right) */}
      <aside
        aria-label="Quick contact and booking actions"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5"
      >
        {/* 1. Quick Call Button - Minimalist icon button without showing numbers */}
        <a
          href="tel:+916353121773"
          className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0D1B2A] text-white border border-white/15 shadow-[0_8px_20px_rgba(13,27,42,0.25)] hover:bg-[#152336] hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Call MK Digital Nexus"
          title="Call Us"
        >
          <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform duration-300 group-hover:rotate-12" />
        </a>

        {/* 2. Quick WhatsApp Button - Minimalist icon button without verbose text */}
        <a
          href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:bg-[#20ba59] hover:shadow-[0_10px_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          aria-label="Chat with MK Digital Nexus on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg
            className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* 3. Book Service Button - Refined, elegant pill button */}
        <button
          onClick={() => {
            setSelectedService("Website Development");
            setModalOpen(true);
          }}
          className="group relative inline-flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 px-4 sm:px-5 rounded-full bg-[#0D1B2A] text-white border border-white/15 shadow-[0_10px_25px_rgba(13,27,42,0.3)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.25)] hover:border-[#2563EB]/60 hover:bg-[#152336] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Book a Service Consultation"
        >
          {/* Subtle blue accent icon badge */}
          <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </span>

          <span className="text-[13px] sm:text-[14px] font-semibold tracking-tight text-white group-hover:text-blue-100 transition-colors whitespace-nowrap">
            Book Service
          </span>

          {/* Subtle live indicator dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </button>
      </aside>
    </>
  );
}

// Utility function to trigger modal open from any other component
export function triggerBookServiceModal(service?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-book-service", { detail: { service } }));
  }
}
