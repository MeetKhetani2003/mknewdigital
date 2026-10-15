"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ExternalLink, Copy, Check } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Website Development",
    budget: "₹5K – ₹25K",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp pre-filled message text
    const messageText = `Hi MK Digital Nexus,\n\nI would like to submit a project inquiry:\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Service:* ${form.service}\n*Approximate Budget:* ${form.budget}\n*Project Details:* ${form.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/916353121773?text=${encodedText}`;

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "First floor, Shyam Apt, Shop no. 5, road, near Vanzari chowk, Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <title>Contact Website Developers & Digital Marketers in Junagadh | MK Digital Nexus</title>
      <meta
        name="description"
        content="Contact MK Digital Nexus at First floor, Shyam Apt, near Vanzari Chowk, Talav Gate, Junagadh. #1 website development, custom software, Meta Ads, and Google Profile SEO in Junagadh & Rajkot."
      />
      <meta
        name="keywords"
        content="contact website developer junagadh, software development company junagadh, digital marketing agency junagadh, vanzari chowk talav gate junagadh web agency, hire web developer in junagadh, MK Digital Nexus address"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/contact" />

      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Get In Touch in Junagadh
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl">
              Start your project.
              <span className="block italic font-serif font-normal text-accent mt-2">
                Talav Gate, Junagadh.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
              Looking for the best website development company, custom software developers, or digital marketing in Junagadh? 
              Visit our studio near Vanzari Chowk, call us directly, or send an inquiry on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 card-shadow shadow-xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Project inquiry
                </h2>
                <p className="mt-3 text-base text-muted">
                  Fields marked * are required. We never share your personal information.
                </p>

                {submitted ? (
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="mt-2 text-2xl font-bold text-navy-900">
                      Thanks, {form.name || "friend"} — we got your details!
                    </div>
                    <p className="text-base text-muted max-w-md">
                      We'll review your project requirements and reply within two hours on WhatsApp and email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-10 space-y-7">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Your name *">
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Priya Sharma"
                          className="w-full rounded-2xl border border-slate-300 bg-offwhite px-5 py-4 text-base text-navy-900 outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        />
                      </Field>
                      <Field label="Email *">
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="priya@yourbrand.com"
                          className="w-full rounded-2xl border border-slate-300 bg-offwhite px-5 py-4 text-base text-navy-900 outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        />
                      </Field>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Service">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-2xl border border-slate-300 bg-offwhite px-5 py-4 text-base text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        >
                          <option>Website Development</option>
                          <option>Graphic Design</option>
                          <option>AI Video Reels</option>
                          <option>Digital Marketing</option>
                          <option>Combo / Full Launch</option>
                        </select>
                      </Field>
                      <Field label="Approximate budget">
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full rounded-2xl border border-slate-300 bg-offwhite px-5 py-4 text-base text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        >
                          <option>Under ₹5K</option>
                          <option>₹5K – ₹25K</option>
                          <option>₹25K – ₹75K</option>
                          <option>₹75K – ₹2L</option>
                          <option>₹2L+</option>
                        </select>
                      </Field>
                    </div>
                    <Field label="Tell us about your project *">
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="What are you building, what's the timeline, and what does success look like for your business?"
                        className="w-full resize-none rounded-2xl border border-slate-300 bg-offwhite px-5 py-4 text-base text-navy-900 outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                      />
                    </Field>

                    <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="group inline-flex h-16 items-center justify-center gap-3 rounded-full bg-navy-900 px-8 text-base font-bold text-white transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/30"
                      >
                        Send inquiry
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                      <a
                        href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-16 items-center justify-center gap-2.5 rounded-full border-2 border-[#25D366]/40 bg-[#25D366]/10 px-8 text-base font-bold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white hover:-translate-y-1 hover:shadow-lg"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-5">
            {/* Google Profile Card */}
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-9 card-shadow shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200/80">
                      <svg className="h-7 w-7" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold tracking-tight text-navy-900">
                        Google Business Profile
                      </div>
                      <div className="flex items-center gap-2 text-sm text-amber-500 font-bold">
                        <span>★★★★★</span>
                        <span className="text-navy-900 font-bold">4.9 / 5</span>
                        <span className="text-muted font-normal">(68+ reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Verified
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Read genuine client feedback, get turn-by-turn directions, or explore photos of our work on our official Google Business listing.
                </p>

                <a
                  href="https://share.google/VqmKOhc9O8q5wXUvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-navy-900 text-sm font-bold text-white transition-all hover:bg-accent hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  <span>Open in Google Maps / Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200/90 bg-offwhite p-8 sm:p-9 shadow-sm">
                <h3 className="text-2xl font-bold tracking-tight text-navy-900">
                  Contact details
                </h3>
                <ul className="mt-6 space-y-5 text-base">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">Email</div>
                      <a href="mailto:hello@mkdigitalnexus.in" className="text-muted hover:text-accent font-medium">
                        hello@mkdigitalnexus.in
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">Phone</div>
                      <a href="tel:+916353121773" className="text-muted hover:text-accent font-medium">
                        +91 63531 21773
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">Studio Address</div>
                      <span className="text-muted leading-relaxed block text-sm sm:text-base mt-0.5">
                        First floor, Shyam Apt, Shop no. 5, road, near Vanzari chowk, Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-accent hover:text-navy-900 hover:border-accent transition-all shadow-sm"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copied ? "Address copied to clipboard!" : "Copy full address"}</span>
                      </button>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-accent">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-sm">Hours</div>
                      <span className="text-muted font-medium">Mon – Sat · 10:00 – 19:00 IST</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-navy-900 p-8 sm:p-9 text-white shadow-xl">
                <div className="grid-pattern-light absolute inset-0 opacity-60" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    SLA guaranteed
                  </div>
                  <div className="mt-5 text-4xl font-extrabold tracking-tight">
                    &lt; 2 hour response
                  </div>
                  <p className="mt-3 text-base text-white/80 leading-relaxed">
                    Every inquiry during business hours gets a scoped reply within
                    two hours. Outside hours, we reply first thing the next morning.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Map Frame */}
            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-3xl border border-slate-200 card-shadow bg-white shadow-md">
                <div className="relative">
                  <iframe
                    title="MK Digital Nexus location — Vanzari Chowk, Junagadh"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=70.44%2C21.51%2C70.48%2C21.53&layer=mapnik&marker=21.5222%2C70.4579"
                    loading="lazy"
                    className="h-72 w-full border-0"
                  />
                  <a
                    href="https://share.google/VqmKOhc9O8q5wXUvg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-navy-900 shadow-xl border border-slate-200 hover:bg-navy-900 hover:text-white transition-all"
                  >
                    <span>Get Directions on Google</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="bg-white p-5 text-sm text-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
                  <span className="font-medium">📍 Near Vanzari Chowk, Talav Gate</span>
                  <span className="font-bold text-navy-900">Junagadh, Gujarat 362001</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/75">
        {label}
      </span>
      {children}
    </label>
  );
}
