import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Database,
  Users,
  FileText,
  Package,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Layers,
  Sparkles,
  BarChart3,
  MessageSquare,
  Lock,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "Custom CRM & Business Software Development | MK Digital Nexus",
  description:
    "Stop losing leads in spreadsheets. We build custom CRM dashboards, inventory systems, GST billing software, and workflow automation tailored to your exact business operations.",
  keywords: [
    "custom CRM software development",
    "custom business software solutions",
    "lead management software development",
    "custom ERP and inventory software",
    "GST invoicing billing software",
    "business process automation software",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/crm-business-software",
  },
  openGraph: {
    title: "Custom CRM & Business Software Development | MK Digital Nexus",
    description:
      "Stop losing leads in spreadsheets. We build custom CRM dashboards, inventory systems, GST billing software, and workflow automation tailored to your exact business operations.",
    url: "https://www.mkdigitalnexus.in/services/crm-business-software",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const crmModules = [
  {
    icon: Users,
    title: "Lead Capture & Pipeline Tracking",
    desc: "Centralize incoming leads from website forms, WhatsApp, and calls into a single pipeline with automated staff assignment and follow-up alerts.",
  },
  {
    icon: FileText,
    title: "Instant GST Invoicing & WhatsApp PDF",
    desc: "Create professional GST-compliant quotations and tax invoices in seconds. Dispatch PDF receipts directly to customers via automated WhatsApp.",
  },
  {
    icon: Package,
    title: "Warehouse & Stock Management",
    desc: "Real-time stock deduction, batch number tracking, minimum threshold alerts, and supplier purchase order generation.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Staff Access (RBAC)",
    desc: "Control who sees what. Ensure field sales executives, accountants, and warehouse managers access only their assigned modules.",
  },
  {
    icon: BarChart3,
    title: "Executive Profit & KPI Analytics",
    desc: "Daily sales summaries, customer ledger (Khata) balances, overdue payment tracking, and profit margins calculated automatically.",
  },
  {
    icon: Database,
    title: "Multi-Branch & Cloud Sync",
    desc: "Connect multiple retail stores, godowns, or manufacturing units into a synchronized master database accessible from any phone or PC.",
  },
];

const spreadsheetComparison = [
  {
    feature: "Data Centralization",
    excel: "Scattered across multiple Excel files and individual staff PCs",
    customCrm: "100% centralized cloud database accessible securely by authorized team members",
  },
  {
    feature: "Lead Follow-ups",
    excel: "Manual notes easily forgotten; lost customer inquiries",
    customCrm: "Automated WhatsApp and SMS reminders with stage-by-stage pipeline tracking",
  },
  {
    feature: "Invoicing & Billing",
    excel: "Manual calculation prone to GST formula mistakes and duplicate entries",
    customCrm: "1-click GST invoice generation with automated tax calculations and WhatsApp PDF dispatch",
  },
  {
    feature: "Inventory & Stock",
    excel: "Manual stock counts updated days late; inventory discrepancies",
    customCrm: "Real-time automatic deduction on billing with low-stock warnings",
  },
  {
    feature: "Staff Accountability",
    excel: "Zero audit trail; anyone can accidentally edit or delete critical data",
    customCrm: "Granular role permissions with complete timestamped audit logging for every action",
  },
];

const crmFaqs = [
  {
    q: "Can you migrate our existing data from Excel or Tally?",
    a: "Yes. We provide complete data migration assistance. We clean, format, and import your existing customer lists, product catalogs, pricing tiers, and vendor records into the new CRM database.",
  },
  {
    q: "Do you charge recurring monthly per-user licensing fees?",
    a: "No. Unlike Commercial SaaS tools that penalize team growth by charging ₹1,500–₹5,000 per user every month, our custom CRM software carries zero per-seat licensing fees. Your entire team can use the system without extra cost.",
  },
  {
    q: "Can the CRM be accessed from mobile phones and tablets?",
    a: "Yes. All dashboards are fully responsive web applications that work smoothly on Android smartphones, iPhones, iPads, laptops, and desktop computers.",
  },
  {
    q: "How secure is our business financial and customer data?",
    a: "We implement bank-grade security protocols: encrypted database connections, daily automated cloud backups, strict role-based access control (RBAC), and self-hosted database options so you retain 100% data sovereignty.",
  },
  {
    q: "Can we add new custom features or modules in the future?",
    a: "Yes. Because the software is custom-engineered using modern modular code, you can easily add new modules (such as payroll, barcode scanning, or custom vendor portals) as your business expands.",
  },
  {
    q: "Do you provide training for our staff?",
    a: "Yes. We provide live walkthrough sessions and clear operational documentation to ensure your staff, accountants, and managers adopt the system quickly.",
  },
];

export default function CrmBusinessSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "CRM & Business Software Development",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Custom CRM & Business Software Solutions",
    description:
      "Bespoke CRM dashboards, inventory systems, GST billing software, and workflow automation tailored to your business operations.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: crmFaqs.map((faq) => ({
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
          1. OPERATIONS-FIRST HERO
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
                CRM & Business Software
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Operational Efficiency</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                Custom CRM & Business Software Built Around Your{" "}
                <span className="text-[#2563EB]">Actual Operations.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                Stop losing leads in spreadsheets and messy WhatsApp chats. We build custom CRM dashboards, 
                inventory tracking, and automated GST billing systems designed for your team.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Discuss Your Software</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#comparison"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>Spreadsheets vs Custom CRM</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Zero Recurring Seat Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> WhatsApp PDF Invoicing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> 100% Data Sovereignty
                </span>
              </div>
            </div>

            {/* Right Column: Live CRM Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7EAF0] bg-white p-5 sm:p-6 shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)]">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-[#2563EB]" />
                    <span className="text-[13px] font-bold text-[#0D1B2A]">Deployed Business Portals</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                    Active Demos
                  </span>
                </div>

                <div className="my-4 space-y-3">
                  <a
                    href="https://bhagvati-admin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB]/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-bold text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors">
                        Bhagvati Admin Platform
                      </span>
                      <ExternalLink className="h-3 w-3 text-[#667085]" />
                    </div>
                    <p className="text-[11.5px] text-[#667085]">
                      Enterprise inventory, ledger tracking, and wholesale distributor portal.
                    </p>
                  </a>

                  <a
                    href="https://pos-client-kappa.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] hover:bg-white hover:border-[#2563EB]/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-bold text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors">
                        Restaurant POS & Kitchen Admin
                      </span>
                      <ExternalLink className="h-3 w-3 text-[#667085]" />
                    </div>
                    <p className="text-[11.5px] text-[#667085]">
                      Order dispatch, thermal bill printing, table management, and P&L analytics.
                    </p>
                  </a>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] text-center text-[11.5px] text-[#667085]">
                  <span>Designed around real-world team workflows</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. SPREADSHEETS VS CUSTOM CRM COMPARISON MATRIX
          ========================================================================= */}
      <section id="comparison" className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Operational Comparison</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Why Businesses Outgrow Excel Spreadsheets.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              As your team grows, managing customer relationships and orders through Excel leads to lost inquiries, billing errors, and zero accountability.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E7EAF0] text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A]">
                    <th className="py-4 px-6 w-1/4">Operational Area</th>
                    <th className="py-4 px-6 w-3/8 text-red-600">Manual Spreadsheets</th>
                    <th className="py-4 px-6 w-3/8 text-[#2563EB]">MK Digital Nexus Custom CRM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7EAF0] text-[13px]">
                  {spreadsheetComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F8FAFC]/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#0D1B2A]">{row.feature}</td>
                      <td className="py-4 px-6 text-[#667085]">
                        <div className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.excel}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#0D1B2A] font-medium bg-[#2563EB]/[0.02]">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{row.customCrm}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. ESSENTIAL CRM & SOFTWARE MODULES
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Core Modules</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Modular Architecture Built Around Your Operations.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Select the exact modules required for your team. From lead intake to dispatch, every workflow is integrated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 transition-all hover:border-[#2563EB]/35 hover:shadow-sm"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/8 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICE-SPECIFIC CRM FAQS
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>CRM FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About Custom CRM Software.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Answers regarding Excel data migration, zero seat fees, security, and staff onboarding.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need an e-commerce platform or custom web application?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  Discover our full suite of digital solutions.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/custom-web-applications" className="hover:underline flex items-center gap-1">
                    Explore Custom Web Applications →
                  </Link>
                  <Link href="/services/ecommerce-development" className="hover:underline flex items-center gap-1">
                    Explore E-commerce Development →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {crmFaqs.map((faq, i) => (
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
            <span>Automate Operations</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Ready to Build a Centralized CRM for Your Team?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Discuss your workflow requirements, data migration, and team roles with our software engineers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss CRM Software</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20custom%20CRM%20project."
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
