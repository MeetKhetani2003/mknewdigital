"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Sparkles, MessageCircle } from "lucide-react";
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

      {/* Floating Action Suite */}
      <div className="fixed bottom-5 sm:bottom-6 z-40 flex items-center justify-between w-full px-4 sm:px-6 pointer-events-none">
        
        {/* Left: Floating Call Button - Directly encourages immediate calls */}
        <div className="pointer-events-auto">
          <a
            href="tel:+916353121773"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-navy-950/95 backdrop-blur-md border border-white/20 pl-3.5 pr-4 sm:pr-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_30px_-6px_rgba(11,36,71,0.6)] transition-all duration-300 hover:scale-105 hover:bg-navy-900 hover:shadow-2xl active:scale-95"
            aria-label="Call MK Digital Nexus directly"
          >
            {/* Pulsing ring indicator */}
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 shadow-sm">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
              <Phone className="relative h-3.5 w-3.5 fill-current" />
            </span>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                Call Directly
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
                +91 63531 21773
              </span>
            </div>
          </a>
        </div>

        {/* Right: Floating Book Service + WhatsApp Suite */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          
          {/* Book Service Quick Popup Trigger */}
          <button
            onClick={() => {
              setSelectedService("Website Development");
              setModalOpen(true);
            }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-amber-500 to-orange-500 pl-3.5 pr-4 sm:pr-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_28px_-6px_rgba(255,107,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_-6px_rgba(255,107,0,0.65)] active:scale-95 cursor-pointer"
            aria-label="Book Service"
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/25 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="tracking-wide">Book Service</span>
            <span className="hidden md:inline text-[11px] font-normal text-white/90">
              (2hr Quote)
            </span>
          </button>

          {/* WhatsApp Direct Chat Trigger */}
          <a
            href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20book%20a%20service%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] p-2.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_-8px_rgba(37,211,102,0.7)] active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <span className="relative flex h-6 w-6 items-center justify-center shrink-0">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

        </div>

      </div>
    </>
  );
}

// Utility function to trigger modal open from any other component
export function triggerBookServiceModal(service?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-book-service", { detail: { service } }));
  }
}
