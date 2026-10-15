"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Phone, Calendar, Sparkles, Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface BookServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookServiceModal({ isOpen, onClose, defaultService = "Website Development" }: BookServiceModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    budget: "₹5,000 – ₹15,000",
    message: "",
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to contact API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "not-provided@client.in",
          service: formData.service,
          budget: formData.budget,
          message: `[BOOK SERVICE MODAL]\nPhone: ${formData.phone}\nService: ${formData.service}\nBudget: ${formData.budget}\nNotes: ${formData.message}`,
        }),
      });

      // Construct pre-filled WhatsApp message
      const text = `Hi MK Digital Nexus,\n\nI want to book a service consultation:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Budget:* ${formData.budget}\n*Project Brief:* ${formData.message || "Ready to discuss details"}`;
      const waUrl = `https://wa.me/916353121773?text=${encodeURIComponent(text)}`;

      setSubmitted(true);
      setLoading(false);

      // Open WhatsApp in background/tab
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 800);
    } catch {
      setSubmitted(true);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: defaultService,
      budget: "₹5,000 – ₹15,000",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-2xl z-10 my-auto overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-amber-500 to-orange-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="pr-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent mb-3">
                    <Sparkles className="h-3.5 w-3.5" /> Book Service Consultation
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900">
                    Get a Guaranteed Scoped Proposal in 2 Hours.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted">
                    Tell us what you're building. Receive an itemized fixed price and delivery timeline from our engineering team in Junagadh.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all placeholder:text-muted focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all placeholder:text-muted focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-navy-900 outline-none transition-all focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10"
                      >
                        <option value="Website Development">Website Development (Next.js)</option>
                        <option value="E-commerce Storefront">E-commerce Storefront</option>
                        <option value="Custom Software / Billing POS">Custom Software / Billing POS</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        <option value="Meta Ads & Google Ads">Meta Ads & Google Ads PPC</option>
                        <option value="Google Profile SEO (Maps)">Google Profile SEO (Google Maps 3-Pack)</option>
                        <option value="AI Video Reels & Graphics">AI Video Reels & Creative Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm font-medium text-navy-900 outline-none transition-all focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10"
                      >
                        <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000 (Starter)</option>
                        <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000 (Growth)</option>
                        <option value="₹35,000 – ₹75,000">₹35,000 – ₹75,000 (Scale)</option>
                        <option value="₹75,000+">₹75,000+ (Enterprise / Custom)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Brief Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need a modern website for our Junagadh manufacturing business with product catalog..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-navy-900 outline-none transition-all placeholder:text-muted focus:border-navy-900 focus:bg-white focus:ring-2 focus:ring-navy-900/10 resize-none"
                    />
                  </div>

                  {/* Trust Micro-Badges */}
                  <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-accent" /> Response within 2 hours
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> 100% Confidential
                    </span>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex h-13 w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent hover:shadow-xl hover:shadow-accent/25 active:scale-[0.99] disabled:opacity-75"
                    >
                      {loading ? (
                        <span>Preparing Your Proposal...</span>
                      ) : (
                        <>
                          <span>Submit & Connect on WhatsApp</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Service Request Received!
                </h3>
                <p className="mt-2 text-sm text-muted max-w-sm mx-auto">
                  Thank you, <strong className="text-navy-900">{formData.name}</strong>. Our senior engineering team in Junagadh has received your details and is preparing your scoped proposal.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I%20just%20submitted%20a%20service%20booking%20form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Chat Directly on WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-xs font-bold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
