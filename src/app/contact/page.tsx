"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Globe2,
  ShieldCheck,
  Calendar
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    country: "USA",
    phone: "",
    service: "Custom Website Development",
    budget: "$1,500 – $5,000",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // 1. Submit to existing Next.js backend API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.name} (${form.businessName || "Individual"})`,
          email: form.email,
          service: `${form.service} [Budget: ${form.budget}, Country: ${form.country}, Phone: ${form.phone}]`,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      // Also construct pre-filled WhatsApp link for direct fast tracking
      const whatsappMsg = `Hi MK Digital Nexus,\n\nI submitted an inquiry on your website:\n*Name:* ${form.name}\n*Business:* ${form.businessName}\n*Email:* ${form.email}\n*Country:* ${form.country}\n*Service:* ${form.service}\n*Budget:* ${form.budget}\n*Project Overview:* ${form.message}`;
      const encoded = encodeURIComponent(whatsappMsg);
      const waUrl = `https://wa.me/916353121773?text=${encoded}`;

      setSubmitted(true);
      setLoading(false);

      // Offer opening WhatsApp for direct dispatch if preferred
    } catch (err: any) {
      console.error(err);
      // Even if email service is momentarily offline, offer fallback
      setSubmitted(true);
      setLoading(false);
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "First floor, Shyam Apt, Shop no. 5, Near Vanzari Chowk, Talav Gate, Junagadh, Gujarat 362001, India"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <title>Contact Studio | MK Digital Nexus | Web & Software Inquiry</title>
      <meta
        name="description"
        content="Contact MK Digital Nexus for custom web development and digital solutions inquiries. Working with businesses in the USA, Canada, and India. Guaranteed 24-hour response."
      />
      <meta
        name="keywords"
        content="contact MK Digital Nexus, hire Next.js developers, custom software quote, website inquiry India, USA Canada web development agency"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/contact" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Start a Conversation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-950 leading-[1.08]">
              Let&apos;s Build Your Next Digital Asset.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed text-slate-600">
              Tell us about your business goals, project scope, and timelines. We&apos;ll schedule an introductory consultation and prepare a structured proposal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Section: Form + Studio Details */}
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
          
          {/* Left Column: Comprehensive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 sm:p-10 shadow-xs">
              <div className="mb-8 pb-6 border-b border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  Project Inquiry Form
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                  Fill in your details below. We review every submission directly and respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out, <strong>{form.name}</strong>. Founder Meet Khetani will review your specifications and reply via email ({form.email}) shortly.
                  </p>

                  <div className="mt-6 pt-6 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/916353121773?text=${encodeURIComponent(`Hi Meet, I just submitted an inquiry on the website: ${form.name} (${form.businessName || "Business"})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Ping on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-emerald-900 underline hover:no-underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Vance"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all placeholder:text-slate-400 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vance Precision Works"
                        value={form.businessName}
                        onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all placeholder:text-slate-400 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. david@vanceworks.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all placeholder:text-slate-400 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Country / Location *
                      </label>
                      <select
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all focus:border-navy-950"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all placeholder:text-slate-400 focus:border-navy-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Service Required *
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all focus:border-navy-950"
                      >
                        <option value="Custom Website Development">Custom Website Development</option>
                        <option value="Custom Web Application (MERN)">Custom Web Application (MERN)</option>
                        <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                        <option value="Business CRM / Operational Tool">Business CRM / Operational Tool</option>
                        <option value="UI/UX Redesign & Strategy">UI/UX Redesign & Strategy</option>
                        <option value="Technical SEO & Local Search">Technical SEO & Local Search</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Approximate Project Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all focus:border-navy-950"
                    >
                      <option value="$1,000 – $3,000 (INR 50K – 1.5L)">$1,000 – $3,000 / INR 50K – 1.5L</option>
                      <option value="$3,000 – $7,500 (INR 1.5L – 4L)">$3,000 – $7,500 / INR 1.5L – 4L</option>
                      <option value="$7,500 – $15,000+ (INR 4L+)">$7,500 – $15,000+ / INR 4L+</option>
                      <option value="Not Decided / Flexible">Not Decided / Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your business, what you want to achieve, existing website URL (if any), and any target deadlines..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-all placeholder:text-slate-400 focus:border-navy-950"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy-950 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent transition-all shadow-md cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Submitting Proposal Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Your information is strictly confidential. No marketing spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Studio Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Direct Studio Channels
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy-950">
                Talk Directly With Our Engineering Team
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prefer a quick chat or have an immediate technical requirement? Reach us across any of our direct channels below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      General & Project Inquiries
                    </span>
                    <a
                      href="mailto:hello@mkdigitalnexus.in"
                      className="text-sm font-bold text-navy-950 hover:text-accent transition-colors"
                    >
                      hello@mkdigitalnexus.in
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Average reply time: under 4 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Studio Phone
                    </span>
                    <a
                      href="tel:+916353121773"
                      className="text-sm font-bold text-navy-950 hover:text-emerald-700 transition-colors"
                    >
                      +91 63531 21773
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mon–Sat: 9:00 AM – 8:00 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Physical Studio Location
                    </span>
                    <address className="not-italic text-xs sm:text-sm font-medium text-navy-950 leading-relaxed mt-1">
                      First Floor, Shyam Apt, Shop 5, Near Vanzari Chowk, Talav Gate, Junagadh, Gujarat 362001, India
                    </address>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span>Address Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>

                      <a
                        href="https://share.google/VqmKOhc9O8q5wXUvg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                      >
                        <span>Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* International Collaboration Assurance */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-navy-950 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-2">
                <Globe2 className="h-4 w-4" />
                <span>Working with North America & Worldwide</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We coordinate seamlessly across EST, PST, and GMT time zones. Contract agreements, milestones, and invoice payments can be facilitated in USD, CAD, or INR.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
