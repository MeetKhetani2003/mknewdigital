"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

const serviceOptions = [
  "Website Development",
  "E-commerce Development",
  "Custom Software Development",
  "CRM & Business Dashboard",
  "Digital Marketing",
  "Google Business Profile",
  "Other",
];

const budgetOptions = [
  "Below ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "Above ₹50,000",
  "Not Decided Yet",
];

const timelineOptions = [
  "Immediately",
  "Within 2–4 Weeks",
  "Within 1–3 Months",
  "Just Exploring",
];

export function ContactWorkspace() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "₹15,000 – ₹30,000",
    timeline: "Within 2–4 Weeks",
    projectDescription: "",
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "First Floor, Shyam Apt, Shop No. 5, Near Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001, India"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!form.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!form.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!form.projectDescription.trim()) {
      setErrorMessage("Please provide a brief project description.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Failed to submit enquiry. Please try again or reach out on WhatsApp.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please try again or use direct WhatsApp / Call options.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      service: "Website Development",
      budget: "₹15,000 – ₹30,000",
      timeline: "Within 2–4 Weeks",
      projectDescription: "",
    });
    setSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section 
      id="project-enquiry" 
      aria-label="Contact Information and Project Enquiry Form"
      className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: CONTACT INFORMATION & QUICK OPTIONS
              ======================================================================= */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Section Heading Block */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                <span>DIRECT STUDIO CONTACT</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Let&apos;s Start a Direct <span className="text-[#2563EB]">Conversation.</span>
              </h2>

              <p className="mt-3.5 text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
                Have a business challenge or an idea in mind? Reach out through our direct channels or send your requirements. We respond promptly with technical clarity.
              </p>
            </div>

            {/* 3. Structured Contact Information */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] flex items-center gap-2">
                <span className="h-1 w-3 bg-[#2563EB] rounded-full" />
                <span>OFFICIAL CONTACT DETAILS</span>
              </h3>

              <div className="rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] divide-y divide-[#E7EAF0] overflow-hidden">
                
                {/* Phone */}
                <div className="p-4 flex items-start gap-3.5 hover:bg-white transition-colors group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#2563EB] shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-[#667085] uppercase tracking-wider block">Phone Number</span>
                    <a 
                      href="tel:+916353121773" 
                      className="text-[14.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors mt-0.5 inline-block focus:outline-none focus-visible:underline"
                    >
                      +91 6353121773
                    </a>
                    <span className="text-[11px] text-[#667085] block mt-0.5">Mon – Sat • 9:30 AM to 7:30 PM IST</span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 flex items-start gap-3.5 hover:bg-white transition-colors group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#2563EB] shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-[#667085] uppercase tracking-wider block">Official Email</span>
                    <a 
                      href="mailto:hello@mkdigitalnexus.in" 
                      className="text-[14.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors mt-0.5 inline-block focus:outline-none focus-visible:underline"
                    >
                      hello@mkdigitalnexus.in
                    </a>
                    <span className="text-[11px] text-[#667085] block mt-0.5">Direct inbox • &lt;24h reply time</span>
                  </div>
                </div>

                {/* Website */}
                <div className="p-4 flex items-start gap-3.5 hover:bg-white transition-colors group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#2563EB] shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono text-[#667085] uppercase tracking-wider block">Official Studio URL</span>
                    <a 
                      href="https://www.mkdigitalnexus.in" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[14.5px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors mt-0.5 inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
                    >
                      <span>mkdigitalnexus.in</span>
                      <ExternalLink className="h-3 w-3 text-[#667085]" />
                    </a>
                    <span className="text-[11px] text-[#667085] block mt-0.5">Live Production Studio</span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="p-4 flex items-start gap-3.5 hover:bg-white transition-colors group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#2563EB] shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#667085] uppercase tracking-wider block">Office Address</span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="text-[11px] text-[#2563EB] hover:underline inline-flex items-center gap-1 cursor-pointer"
                        aria-label="Copy office address"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3 text-[#10B981]" />
                            <span className="text-[#10B981]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[13.5px] text-[#0D1B2A] leading-relaxed mt-1">
                      First Floor, Shyam Apt, Shop No. 5, Near Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001, India.
                    </p>
                    <a
                      href="https://maps.google.com/?q=First+Floor,+Shyam+Apt,+Shop+No.+5,+Near+Vanzari+Chowk,+Nava+Nagarwada,+Talav+Gate,+Junagadh,+Gujarat+362001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#2563EB] hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* 5. Alternative Contact Options (Quick Conversation) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1B2A] text-white space-y-4">
              <div>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-[#60A5FA] font-semibold block">
                  FAST RESPONSE CHANNELS
                </span>
                <h3 className="text-[19px] sm:text-[21px] font-bold text-white tracking-tight mt-1">
                  Prefer a Quick Conversation?
                </h3>
                <p className="text-[13.5px] text-slate-300 mt-1">
                  Let&apos;s discuss your requirements directly with our team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-slate-950 font-semibold text-[13px] hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Call */}
                <a
                  href="tel:+916353121773"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 text-white font-semibold text-[13px] border border-white/15 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Our Team</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@mkdigitalnexus.in"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 text-white font-semibold text-[13px] border border-white/15 hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: 4. PROJECT ENQUIRY FORM
              ======================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_16px_40px_-16px_rgba(13,27,42,0.06)]">
              
              {/* Form Title & Context */}
              <div className="border-b border-[#E7EAF0] pb-6 mb-7">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0D1B2A] tracking-tight">
                      Project Enquiry Form
                    </h3>
                    <p className="text-[13.5px] text-[#667085] mt-1">
                      Fill out the details below. We review every enquiry and reply with an initial scope within 24 hours.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#2563EB]/10 text-[#2563EB] text-[11px] font-mono font-semibold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Confidential</span>
                  </span>
                </div>
              </div>

              {submitted ? (
                /* Success State */
                <div className="py-10 text-center space-y-5">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="max-w-md mx-auto">
                    <h4 className="text-[20px] font-bold text-[#0D1B2A]">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="mt-2 text-[14px] text-[#667085] leading-relaxed">
                      Thank you for contacting MK Digital Nexus. Your project details have been recorded, and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] max-w-md mx-auto text-left text-[12.5px] text-[#475467] space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#667085]">Service:</span>
                      <span className="font-semibold text-[#0D1B2A]">{form.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667085]">Budget Scope:</span>
                      <span className="font-semibold text-[#0D1B2A]">{form.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#667085]">Timeline:</span>
                      <span className="font-semibold text-[#0D1B2A]">{form.timeline}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/916353121773?text=${encodeURIComponent(
                        `Hi MK Digital Nexus,\nI just submitted an enquiry on your website.\nName: ${form.fullName}\nService: ${form.service}\nBudget: ${form.budget}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-slate-950 font-semibold text-[13.5px] hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Fast-Track on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E7EAF0] text-[#0D1B2A] font-semibold text-[13.5px] hover:bg-[#F5F7FA] transition-colors cursor-pointer"
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13px] flex items-center gap-2.5">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Section 1: Personal Information */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-3 block">
                      1. PERSONAL INFORMATION
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patel"
                          required
                          className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label htmlFor="businessName" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Business Name <span className="text-[#94A3B8] text-[11px] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={form.businessName}
                          onChange={handleChange}
                          placeholder="e.g. Shasuma Spices"
                          className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label htmlFor="email" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          required
                          className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phone" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Project Information */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] font-semibold text-[#0D1B2A] mb-3 block">
                      2. PROJECT INFORMATION
                    </span>

                    <div className="space-y-4">
                      {/* Service Required */}
                      <div>
                        <label htmlFor="service" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget & Timeline Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Estimated Budget */}
                        <div>
                          <label htmlFor="budget" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                            Estimated Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                          >
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Project Timeline */}
                        <div>
                          <label htmlFor="timeline" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                            Project Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={form.timeline}
                            onChange={handleChange}
                            className="w-full h-11 px-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none"
                          >
                            {timelineOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div>
                        <label htmlFor="projectDescription" className="block text-[13px] font-semibold text-[#0D1B2A] mb-1.5">
                          Project Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="projectDescription"
                          name="projectDescription"
                          rows={4}
                          value={form.projectDescription}
                          onChange={handleChange}
                          placeholder="Tell us about your business goals, target audience, required features, or any reference websites you admire..."
                          required
                          className="w-full p-3.5 rounded-lg border border-[#CBD5E1] bg-white text-[14px] text-[#0D1B2A] placeholder-[#94A3B8] transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none leading-relaxed resize-y"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-7 text-[14.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11.5px] text-[#667085] mt-2.5">
                      Your information is held in strict confidence. No spam, ever.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactWorkspace;
