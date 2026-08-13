"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
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

  return (
    <>
      <title>Contact Web Developers & Digital Marketers in Junagadh & Rajkot | MK Digital Nexus</title>
      <meta name="description" content="Get in touch with the best website development service and digital marketing agency in Junagadh and Rajkot. Get your custom quote today." />

      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Hire our agency.
              <span className="block italic font-serif font-normal text-accent">
                Junagadh & Rajkot.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Need a top-rated website development service or digital marketing agency near Junagadh or Rajkot? Submit your inquiry brief, and we'll reply within two hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 card-shadow sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                  Project inquiry
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Fields marked * are required. We never share your info.
                </p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <div className="mt-2 text-xl font-semibold text-navy-900">
                      Thanks, {form.name || "friend"} — we got it.
                    </div>
                    <p className="text-sm text-muted">
                      We'll reply within two hours on WhatsApp and email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name *">
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Priya Sharma"
                          className="w-full rounded-xl border border-slate-200 bg-offwhite px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        />
                      </Field>
                      <Field label="Email *">
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="priya@yourbrand.com"
                          className="w-full rounded-xl border border-slate-200 bg-offwhite px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                        />
                      </Field>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Service">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-offwhite px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
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
                          className="w-full rounded-xl border border-slate-200 bg-offwhite px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
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
                        placeholder="What are you building, what's the deadline, and what does success look like?"
                        className="w-full resize-none rounded-xl border border-slate-200 bg-offwhite px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                      />
                    </Field>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
                      >
                        Send inquiry
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                      <a
                        href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Or chat on WhatsApp
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-offwhite p-7">
                <h3 className="text-lg font-semibold tracking-tight text-navy-900">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-navy-900">Email</div>
                      <a href="mailto:mkdigitalnexus@gmail.com" className="text-muted hover:text-accent">
                        mkdigitalnexus@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-navy-900">Phone</div>
                      <a href="tel:+916353121773" className="text-muted hover:text-accent">
                        +91 63531 21773
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-navy-900">Studio</div>
                      <span className="text-muted">
                        Near Bhagwati Kalamandir, Kalvachok, Junagadh
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="font-medium text-navy-900">Hours</div>
                      <span className="text-muted">Mon – Sat · 10:00 – 19:00 IST</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-navy-900 p-7 text-white">
                <div className="grid-pattern-light absolute inset-0 opacity-60" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SLA guaranteed
                  </div>
                  <div className="mt-4 text-3xl font-semibold tracking-tight">
                    &lt; 2 hour response
                  </div>
                  <p className="mt-2 text-sm text-white/70">
                    Every inquiry during business hours gets a scoped reply within
                    two hours. Outside hours, we reply first thing the next morning.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-3xl border border-slate-200 card-shadow">
                <iframe
                  title="MK Digital Nexus location — Junagadh"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=70.43%2C21.50%2C70.47%2C21.54&layer=mapnik&marker=21.5222%2C70.4579"
                  loading="lazy"
                  className="h-64 w-full border-0"
                />
                <div className="bg-white p-4 text-xs text-muted">
                  📍 Junagadh — by appointment only
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
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
        {label}
      </span>
      {children}
    </label>
  );
}
