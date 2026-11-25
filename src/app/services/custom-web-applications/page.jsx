import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lock,
  Workflow,
  Sparkles,
  Terminal,
  Activity,
  FileCode,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "Custom Web Application Development | Full-Stack & SaaS | MK Digital Nexus",
  description:
    "Transform manual operations and launch scalable SaaS products with custom web applications. Robust MERN stack architecture, secure APIs, and responsive cloud portals.",
  keywords: [
    "custom web application development",
    "MERN stack web application development",
    "custom SaaS application developers",
    "cloud web portal development",
    "interactive web platforms",
    "full stack web app company",
    "business web applications",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/custom-web-applications",
  },
  openGraph: {
    title: "Custom Web Application Development | Full-Stack & SaaS | MK Digital Nexus",
    description:
      "Transform manual operations and launch scalable SaaS products with custom web applications. Robust MERN stack architecture, secure APIs, and responsive cloud portals.",
    url: "https://www.mkdigitalnexus.in/services/custom-web-applications",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const webAppTypes = [
  {
    icon: Layers,
    title: "Custom SaaS & Client Portals",
    desc: "Multi-tenant cloud applications with subscription tiers, self-service customer dashboards, and automated billing workflows.",
  },
  {
    icon: Workflow,
    title: "Booking & Scheduling Platforms",
    desc: "Interactive appointment engines, slot reservation systems, and automated calendar sync for service-driven businesses.",
  },
  {
    icon: Database,
    title: "Operational & Multi-Branch Tools",
    desc: "Centralized internal platforms that connect distributed team members, branch locations, and daily operational dispatches.",
  },
  {
    icon: Activity,
    title: "Real-Time Reporting Dashboards",
    desc: "Visual business intelligence dashboards that aggregate database metrics, track employee KPIs, and visualize revenue trends.",
  },
  {
    icon: Server,
    title: "Microservices & Custom REST APIs",
    desc: "Secure, high-concurrency API backends built to connect mobile apps, third-party services, and legacy enterprise software.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Administrative Portals",
    desc: "Granular access management allowing admins, managers, and staff members to access only the information relevant to their role.",
  },
];

const techStackLayers = [
  {
    layer: "Frontend Layer",
    tech: "React.js & Next.js",
    desc: "Reactive, responsive user interfaces with instant state updates, intuitive dashboards, and sub-second client navigation.",
  },
  {
    layer: "Backend API Layer",
    tech: "Node.js & Express.js",
    desc: "High-throughput asynchronous server runtimes handling concurrent user sessions, token auth, and background jobs.",
  },
  {
    layer: "Database Layer",
    tech: "MongoDB & MySQL",
    desc: "Optimized relational and document datastores with automated daily cloud snapshots, indexing, and high-concurrency query handling.",
  },
  {
    layer: "Security & Cloud",
    tech: "JWT, SSL & Edge CDN",
    desc: "Encrypted token authentication, HTTPS enforcement, OWASP-compliant inputs, and isolated environment deployment.",
  },
];

const webAppFaqs = [
  {
    q: "How does a custom web application differ from a regular website?",
    a: "A regular website is primarily informational, while a custom web application performs complex interactive business logic—such as user authentication, database processing, automated workflows, multi-role access, and real-time data calculations.",
  },
  {
    q: "Why choose custom development over ready-made SaaS subscriptions?",
    a: "Ready-made software charges recurring per-user fees, forces your team into rigid workflows, and keeps your data locked in third-party systems. A custom web application gives you 100% workflow alignment, zero per-seat fees, and complete data sovereignty.",
  },
  {
    q: "How do you ensure data security and role-based permissions?",
    a: "We implement Role-Based Access Control (RBAC), bcrypt password hashing, encrypted JSON Web Tokens (JWT), sanitized SQL/NoSQL queries to prevent injection attacks, and automated database backups.",
  },
  {
    q: "Can our web application integrate with third-party software and APIs?",
    a: "Yes. We can integrate payment gateways, SMS/WhatsApp messaging providers, email delivery services (SendGrid/Resend), accounting software, and external enterprise ERPs via secure RESTful APIs.",
  },
  {
    q: "Will we own the source code upon project completion?",
    a: "Yes. You receive full, unencumbered ownership of all source code, database architectures, and deployment configurations through a dedicated Git repository.",
  },
  {
    q: "What is the typical development timeline for a custom web app?",
    a: "MVP platforms and operational tools typically launch within 3 to 6 weeks, while enterprise multi-module platforms require 6 to 12 weeks with milestone-driven staging reviews.",
  },
];

export default function CustomWebApplicationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Web Application Development",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Custom Web Application Development Services",
    description:
      "Scalable full-stack web applications and SaaS platforms engineered on modern MERN architectures with secure APIs.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: webAppFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* =========================================================================
          1. TECHNICAL ARCHITECTURE HERO
          ========================================================================= */}
      <section className="relative bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 border-b border-[#E7EAF0] overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2563EB]/6 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#667085]">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[#CBD5E1]">/</li>
              <li>
                <Link href="/services" className="hover:text-[#2563EB] transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-[#CBD5E1]">/</li>
              <li className="font-medium text-[#0D1B2A]" aria-current="page">
                Custom Web Applications
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Full-Stack MERN Architecture</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                Scalable Full-Stack Web Applications Engineered for{" "}
                <span className="text-[#2563EB]">Complex Workflows.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                Replace off-the-shelf software bottlenecks with custom web platforms, business portals, 
                and SaaS architectures built to mirror your exact operations.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Discuss Your Web Application</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#tech-architecture"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>Explore Architecture</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Zero Per-Seat SaaS Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Role-Based Access Control
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Full Git Code Ownership
                </span>
              </div>
            </div>

            {/* Right Column: Code/Architecture Terminal Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#1E293B] bg-[#0D1B2A] p-5 sm:p-6 shadow-[0_16px_36px_-12px_rgba(13,27,42,0.25)] text-white">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="font-mono text-[11px] text-slate-400 ml-2">api.mkdigitalnexus.io</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    HTTP 200 OK
                  </span>
                </div>

                {/* Simulated API & Security Schema */}
                <div className="my-4 font-mono text-[11.5px] text-slate-300 space-y-2">
                  <div className="text-slate-500">// Architecture Overview</div>
                  <div className="flex justify-between">
                    <span className="text-[#38BDF8]">stack.frontend:</span>
                    <span className="text-white">&quot;React 19 / Next.js&quot;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#38BDF8]">stack.runtime:</span>
                    <span className="text-white">&quot;Node.js 22 LTS (Express)&quot;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#38BDF8]">stack.datastore:</span>
                    <span className="text-white">&quot;MongoDB Atlas / MySQL&quot;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#38BDF8]">security.auth:</span>
                    <span className="text-emerald-400">&quot;RBAC + JWT Tokens&quot;</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#38BDF8]">backups.schedule:</span>
                    <span className="text-white">&quot;Automated Daily Cloud&quot;</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Microservices Architecture</span>
                  <span className="text-[#38BDF8]">Production Ready</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. TYPES OF WEB APPLICATIONS WE BUILD
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Tailored Systems</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Purpose-Built Web Applications We Engineer.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              From commercial SaaS products to multi-branch operational platforms, we engineer software tailored to the way your business executes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webAppTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 transition-all hover:border-[#2563EB]/35 hover:shadow-xs"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/8 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {type.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {type.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. FULL-STACK MERN ARCHITECTURE BREAKDOWN
          ========================================================================= */}
      <section id="tech-architecture" className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Full-Stack Blueprint</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Architected for Performance, Security and Scale.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We build on modern, open technologies with clean modular separation of concerns—eliminating technical debt and vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackLayers.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-2xl border border-[#E7EAF0] bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                    {layer.layer}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#0D1B2A] mb-2">
                    {layer.tech}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICE-SPECIFIC WEB APPLICATION FAQS
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Web Application FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About Custom Software.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Clear explanations on code ownership, database security, scalability, and integration with existing tools.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need a dedicated CRM or mobile application?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  Explore our operational software and cross-platform mobile apps.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/crm-business-software" className="hover:underline flex items-center gap-1">
                    Explore CRM & Business Software →
                  </Link>
                  <Link href="/services/mobile-app-development" className="hover:underline flex items-center gap-1">
                    Explore Mobile App Development →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {webAppFaqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#E7EAF0]">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0D1B2A] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#667085]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DEDICATED CLOSING CTA
          ========================================================================= */}
      <section className="bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Engineer Your Software</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Let&apos;s Build a Custom Web Application for Your Business.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Discuss your system requirements, database structure, and integration scope with our technical leads.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss Web Application</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20custom%20web%20application%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-white/20 text-white text-[14px] font-semibold hover:bg-white/[0.06] hover:border-white/50 transition-all"
            >
              <span>Chat on WhatsApp</span>
              <span className="text-emerald-400 font-bold">●</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
