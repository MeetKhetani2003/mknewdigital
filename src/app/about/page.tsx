"use client";

import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  HeartHandshake,
  Globe2,
  Workflow,
  Compass,
  Check
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

const studioMilestones = [
  { 
    year: "2023", 
    title: "Inception & Core Architecture", 
    desc: "Founded by Meet Khetani in Junagadh, Gujarat, with a resolute mission: replace sluggish CMS templates with custom-engineered, ultra-fast Next.js and MERN stack digital products." 
  },
  { 
    year: "2024", 
    title: "Industrial & Enterprise Portals", 
    desc: "Expanded into heavy industrial machinery catalogs, export platforms, and operational software for major manufacturers across India." 
  },
  { 
    year: "2025", 
    title: "International Deployments", 
    desc: "Shipped enterprise deployments for businesses in Ontario, Canada, and global trade corridors, refining our remote delivery protocols and time-zone aligned execution." 
  },
  { 
    year: "2026", 
    title: "100+ Production Launches Milestone", 
    desc: "Surpassed 100 live client deployments worldwide with a verified 4.9★ Google Business Profile rating, establishing a trusted benchmark for digital execution." 
  },
];

const pillars = [
  {
    icon: Code2,
    title: "Custom Engineering",
    desc: "Every website and web application is coded from first principles using Next.js, React, and modular APIs for maximum performance and zero theme bloat.",
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    desc: "Proudly based in Junagadh, Gujarat, India, delivering world-class software to clients across the United States, Canada, the UK, and India.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Founder Access",
    desc: "Clients collaborate directly with lead architect Meet Khetani. No junior account handlers, no translation errors, no bureaucratic delays.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Asset Ownership",
    desc: "You maintain 100% ownership of your code repositories, design tokens, and domain records upon project handover. No proprietary lock-in.",
  },
];

export default function About() {
  return (
    <>
      <title>About MK Digital Nexus | Custom Web Development Studio</title>
      <meta
        name="description"
        content="Learn about MK Digital Nexus, a custom web development studio founded by Meet Khetani in Junagadh, Gujarat, serving clients across the USA, Canada, and India. Over 100+ live projects delivered."
      />
      <meta
        name="keywords"
        content="about MK Digital Nexus, Meet Khetani, web development studio Junagadh, custom software developers Gujarat, international web development agency"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/about" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Our Philosophy & Story
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-950 leading-[1.08]">
              We Build Digital Experiences That Move Businesses Forward.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed text-slate-600">
              MK Digital Nexus was founded to bridge the gap between creative visual design and enterprise-level full-stack engineering. Based in Junagadh, India, serving ambitious businesses globally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Studio Philosophy & Pillars */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Our Foundation
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
                Your Business Deserves More Than Just a Website.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Most websites on the internet fail because they are built from heavy, generic templates that look identical and load slowly. 
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe that a company&apos;s digital presence should be its strongest sales asset. We combine refined typography, high-converting information architecture, and clean Next.js engineering to build digital tools that actually drive inquiries.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="block text-2xl font-extrabold text-navy-950">100+</span>
                  <span className="text-xs text-slate-500 font-medium">Shipped Sites</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="block text-2xl font-extrabold text-navy-950">4.9★</span>
                  <span className="text-xs text-slate-500 font-medium">Verified Rating</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="block text-2xl font-extrabold text-navy-950">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Custom Coded</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-7 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-navy-950">{pillar.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-xs">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100 shadow-sm">
                  <img
                    src="/owner.png"
                    alt="Meet Khetani - Founder & Full-Stack Architect"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">Meet Khetani</h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Founder & Lead Architect
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/mk-digital-nexus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-navy-950 flex items-center gap-1 font-medium"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Studio Leadership
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-navy-950">
                  Engineering With Founder Accountability
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  &ldquo;I started MK Digital Nexus because business owners were tired of generic digital agencies that deliver bloated templates, miss deadlines, and outsource project communication. Every website we build is treated as a critical piece of business infrastructure.&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Based in Junagadh, Gujarat, our studio provides transparent, responsive collaboration whether you are a local industrial manufacturer or an international business in Toronto or California.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="rounded-full bg-slate-100 px-3 py-1">Next.js & React</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Node.js & Express</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">MongoDB (MERN)</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Tailwind CSS</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Cloud Architecture</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Studio Timeline / Milestones */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              The Evolution of MK Digital Nexus
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {studioMilestones.map((m, idx) => (
              <div key={m.year} className="relative flex flex-col md:flex-row items-start gap-8">
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-10" : "md:order-2 md:pl-10"}`}>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mb-1">
                    {m.year}
                  </span>
                  <h4 className="text-lg font-bold text-navy-950">{m.title}</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 ring-4 ring-white" />

                <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? "md:order-2" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Location & Inquiry CTA */}
      <section className="bg-navy-950 text-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Physical Headquarters & Global Reach
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white">
            Based in Junagadh, India. Serving Worldwide.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300">
            First Floor, Shyam Apt, Shop 5, Near Vanzari Chowk, Talav Gate, Junagadh, Gujarat 362001
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => triggerBookServiceModal()}
              className="rounded-full bg-accent px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Start Project Inquiry
            </button>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-navy-950 transition-colors"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
