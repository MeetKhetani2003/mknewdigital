import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all hover:scale-105 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.7)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        <MessageCircle className="relative h-5 w-5" fill="currentColor" />
      </span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
