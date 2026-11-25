import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Search,
  MapPin,
  Megaphone,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Target,
  Sparkles,
  PhoneCall,
  Eye,
  Percent,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "Digital Marketing & SEO Services | Search & Paid Growth | MK Digital Nexus",
  description:
    "Attract qualified customer inquiries with data-driven SEO, Google Profile local optimization, and high-ROAS Meta & Google Ads campaigns. Transparent reporting and proven results.",
  keywords: [
    "digital marketing and SEO services",
    "search engine optimization company",
    "Google Business Profile optimization",
    "Meta ads and Google PPC agency",
    "local SEO services",
    "performance marketing agency",
    "lead generation services",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/digital-marketing-seo",
  },
  openGraph: {
    title: "Digital Marketing & SEO Services | Search & Paid Growth | MK Digital Nexus",
    description:
      "Attract qualified customer inquiries with data-driven SEO, Google Profile local optimization, and high-ROAS Meta & Google Ads campaigns. Transparent reporting and proven results.",
    url: "https://www.mkdigitalnexus.in/services/digital-marketing-seo",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const marketingChannels = [
  {
    icon: Search,
    title: "Technical & On-Page SEO",
    desc: "Keyword research, technical audits, semantic content optimization, and structured schema markup to achieve sustained organic Google Page 1 rankings.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Local SEO",
    desc: "Dominate the Google Maps 3-pack for high-intent local commercial searches, generating continuous direct phone calls and direction requests.",
  },
  {
    icon: Target,
    title: "High-Intent Google Search Ads (PPC)",
    desc: "Capture ready-to-buy searchers at the exact moment they need your service with strict negative keyword filtering and disciplined budget management.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads & Social Lead Funnels",
    desc: "Laser-targeted Facebook and Instagram ad campaigns with high-CTR creatives that route qualified prospects directly into WhatsApp conversations.",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Analyzing user drop-off points, refining call-to-action buttons, and streamlining lead forms to maximize the return from every site visitor.",
  },
  {
    icon: Eye,
    title: "Transparent Monthly Reporting",
    desc: "Zero vanity metrics. Honest monthly performance reports tracking keyword positions, verified inquiry counts, and cost-per-lead analytics.",
  },
];

const rankingFramework = [
  {
    step: "01",
    title: "Technical & Keyword Audit",
    desc: "We analyze high-intent search terms, competitor backlink profiles, and identify website indexing roadblocks.",
  },
  {
    step: "02",
    title: "On-Page & Schema Optimization",
    desc: "Refining title tags, headings, content depth, internal linking, and adding rich snippet JSON-LD structured data.",
  },
  {
    step: "03",
    title: "Google Business Profile Tuning",
    desc: "Auditing NAP consistency, geo-tagging media, mapping business categories, and establishing review acquisition funnels.",
  },
  {
    step: "04",
    title: "Performance Campaign Execution",
    desc: "Deploying targeted paid search and social campaigns with strict conversion tracking and weekly negative keyword tuning.",
  },
];

const marketingFaqs = [
  {
    q: "How long does it take to see results from organic SEO?",
    a: "Organic SEO is a compounding long-term investment. Most businesses observe initial ranking improvements within 60 to 90 days, with significant search traffic and inbound leads establishing between 4 to 6 months.",
  },
  {
    q: "How do Google Search Ads compare to organic SEO?",
    a: "Google Search Ads deliver immediate visibility and leads from day one by paying per click, while organic SEO builds durable long-term search equity that generates leads without paying for each click. We often recommend combining both for maximum market coverage.",
  },
  {
    q: "Why is Google Business Profile (Local SEO) crucial for my business?",
    a: "Over 70% of mobile users search for local services on Google Maps before making a call or visiting a location. Ranking in the Google Maps top 3 generates high-intent phone calls from customers ready to buy immediately.",
  },
  {
    q: "What monthly ad budget do you recommend for Meta or Google Ads?",
    a: "We recommend starting with a manageable ad spend (typically ₹15,000–₹30,000/month for local businesses) to validate audience targeting and conversion rates before scaling budgets based on proven Return On Ad Spend (ROAS).",
  },
  {
    q: "Do you focus on vanity metrics like impressions and page likes?",
    a: "No. Impressions and likes do not pay your business expenses. We focus strictly on commercial outcomes: verified phone calls, qualified WhatsApp inquiries, form submissions, and cost-per-lead efficiency.",
  },
  {
    q: "Do we have to sign long-term lock-in contracts?",
    a: "No. We operate with transparent month-to-month service agreements. We earn your continued partnership through verified results, transparent monthly reporting, and consistent communication.",
  },
];

export default function DigitalMarketingSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing and SEO Services",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Digital Marketing & SEO Services",
    description:
      "Data-driven SEO, Google Profile ranking, and high-ROAS Meta and Google ad campaigns focused on qualified customer inquiries.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: marketingFaqs.map((faq) => ({
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
          1. GROWTH-FOCUSED HERO SECTION
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
                Digital Marketing & SEO
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Search Authority & Paid ROAS</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                Data-Driven Digital Marketing & SEO Built to{" "}
                <span className="text-[#2563EB]">Generate Inquiries.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                Stop wasting advertising budgets on vanity likes and boosted posts. We combine technical SEO, 
                Google Maps 3-pack optimization, and targeted paid funnels that deliver actual customer calls.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Request Growth Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#channels"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>Our Growth Channels</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Zero Vanity Metrics
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Verified Google Maps Ranking
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Transparent Monthly Reporting
                </span>
              </div>
            </div>

            {/* Right Column: Growth Metrics Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7EAF0] bg-white p-6 shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)]">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#2563EB]" />
                    <span className="text-[13px] font-bold text-[#0D1B2A]">Performance Metrics</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                    Verified ROAS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-5">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                    <div className="text-[20px] font-bold text-[#0D1B2A] flex items-center gap-1">
                      <span className="text-[#2563EB]">#1</span>–<span className="text-[#2563EB]">#3</span>
                    </div>
                    <div className="text-[11.5px] text-[#667085] mt-1">Google Maps 3-Pack Target</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                    <div className="text-[20px] font-bold text-[#10B981]">
                      -38%
                    </div>
                    <div className="text-[11.5px] text-[#667085] mt-1">Cost Per Acquisition (CPA)</div>
                  </div>
                </div>

                <div className="space-y-2 text-[12px]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">High-Intent Keywords</span>
                    <span className="font-semibold text-[#0D1B2A]">100% Commercial Target</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">Lead Routing</span>
                    <span className="font-semibold text-[#2563EB]">Direct WhatsApp & Phone</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">Negative Keywords</span>
                    <span className="font-semibold text-[#0D1B2A]">Zero Wasted Ad Spend</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] text-center text-[11px] text-[#667085]">
                  <span>Focused entirely on qualified customer inquiries</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE 4 GROWTH CHANNELS
          ========================================================================= */}
      <section id="channels" className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Full Funnel Execution</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Growth Channels Engineered for Measurable Return.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We integrate organic search visibility with hyper-targeted paid acquisition to ensure your business captures customers at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 transition-all hover:border-[#2563EB]/35 hover:shadow-sm"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/8 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {channel.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {channel.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. RANKING & CONVERSION FRAMEWORK
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Proven Methodology</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              How We Build Search Visibility and Customer Inquiries.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              A systematic optimization process based on Google ranking standards, commercial intent mapping, and rigorous conversion testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rankingFramework.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#E7EAF0] bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#F5F7FA] px-2.5 py-0.5 rounded-full inline-block mb-3.5">
                    Stage {step.step}
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICE-SPECIFIC MARKETING FAQS
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Marketing FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About SEO & Paid Ads.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Clear details on timelines, Google Business Profile ranking, ad budget planning, and reporting transparency.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need a high-performance website first?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  A fast website is the foundation of every successful marketing campaign.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/web-development" className="hover:underline flex items-center gap-1">
                    Explore Website Development →
                  </Link>
                  <Link href="/services/ecommerce-development" className="hover:underline flex items-center gap-1">
                    Explore E-commerce Development →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {marketingFaqs.map((faq, i) => (
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
            <span>Multiply Search Inquiries</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Ready to Generate Consistent Customer Inquiries?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Discuss your target market, competitors, and growth objectives with our search and performance marketing specialists.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss Marketing Strategy</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20digital%20marketing%20and%20SEO%20strategy."
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
