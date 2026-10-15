"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ArrowRight, Star, Sparkles, ExternalLink, Globe, Cpu, Megaphone, MapPin, BarChart3, Video, Palette } from "lucide-react";

const webPlans = [
  {
    name: "Professional Business Website",
    original: "₹8,000",
    price: "₹5,000",
    period: "one-time",
    desc: "Festival Offer: Modern Next.js website for Junagadh businesses with Google SEO pre-built.",
    features: [
      "5-7 Responsive Pages (Next.js)",
      "Junagadh On-Page SEO & Search Console",
      "WhatsApp & Google Maps Direction Setup",
      "5 Years Cloud Hosting Included",
      "Sub-Second 99+ PageSpeed Score"
    ],
    highlighted: true,
    badge: "Most Popular in Junagadh",
  },
  {
    name: "E-commerce Storefront",
    price: "₹12,000",
    period: "one-time",
    desc: "Complete online shop with UPI, Razorpay, inventory tracking, and WhatsApp order alerts.",
    features: [
      "50–150 Products with Variants",
      "Instant UPI & Card Payment Gateway",
      "Admin Panel for Stock & Orders",
      "Mobile-First Fast Checkout",
      "Customer Invoice Generation"
    ],
  },
  {
    name: "Advanced E-commerce Engine",
    price: "₹25,000",
    period: "one-time",
    desc: "Enterprise storefront with 500+ products, smart filters, and abandoned cart recovery.",
    features: [
      "200–500+ Products Catalog",
      "Smart Multi-Filter & Search",
      "Abandoned Cart WhatsApp/Email Recovery",
      "Courier API / Shiprocket Integration",
      "Advanced Sales Analytics"
    ],
  },
  {
    name: "Bespoke Custom Web App",
    price: "Custom",
    period: "quote",
    desc: "Tailored enterprise portal or SaaS architecture built for high-scale operations.",
    features: [
      "Dedicated Full-Stack Architecture",
      "High-Concurrency Performance SLA",
      "Third-Party API & ERP Integration",
      "Custom Microservices & Database",
      "Dedicated Technical Project Lead"
    ],
  },
];

const softwarePlans = [
  {
    name: "Custom GST Billing & POS",
    original: "₹20,000",
    price: "₹14,999",
    period: "one-time",
    desc: "Fast, error-free retail & wholesale billing software built for Junagadh shopkeepers & distributors.",
    features: [
      "Instant GST Invoices & Thermal Print",
      "Direct WhatsApp Bill Dispatch to Customers",
      "Customer Ledger & Credit (Khata) Tracking",
      "Barcode Scanner & Inventory Sync",
      "Daily Sales & Profit P&L Reports"
    ],
    highlighted: true,
    badge: "Retail Choice",
  },
  {
    name: "MERN Custom Web Application",
    price: "₹28,000",
    period: "one-time",
    desc: "Custom web-based business application developed using MongoDB, Express, React, and Node.js.",
    features: [
      "Interactive React/Next.js User Portal",
      "Secure Node.js & Express RESTful API",
      "Scalable MongoDB Database Design",
      "Multi-Level Staff Access & Roles",
      "Automated Daily Cloud Backups"
    ],
  },
  {
    name: "Enterprise ERP & CRM Dashboard",
    price: "₹45,000+",
    period: "quote",
    desc: "Centralized operations hub for manufacturers, exporters, and multi-branch companies in Saurashtra.",
    features: [
      "End-to-End Inquiry & Lead Pipeline",
      "Raw Material & Finished Goods Tracking",
      "Multi-Branch & Warehouse Synchronization",
      "Staff Attendance & Task Delegation",
      "Custom Business Intelligence KPIs"
    ],
  },
];

const marketingPlans = [
  {
    name: "Meta Ads Starter (FB & Insta)",
    original: "₹7,000",
    price: "₹4,999",
    period: "per month",
    desc: "Hyper-local Facebook & Instagram ad campaigns designed to generate direct WhatsApp inquiries.",
    features: [
      "Junagadh & Saurashtra Geo-Fenced Targeting",
      "High-Converting Ad Creatives & Video Cuts",
      "Direct Click-to-WhatsApp Funnel",
      "A/B Audience & Ad Testing",
      "Weekly ROAS Performance Report"
    ],
    highlighted: true,
    badge: "Fastest Inquiries",
  },
  {
    name: "Google Ads & PPC Lead Engine",
    price: "₹7,499",
    period: "per month",
    desc: "Capture ready-to-buy customers searching for your products or services right now in Junagadh.",
    features: [
      "High-Intent Google Search Keyword Setup",
      "Direct Call-Only Ads for Mobile Callers",
      "Strict Negative Keyword Wastage Filtering",
      "Landing Page Conversion Rate Tuning",
      "Competitor Ad Outranking Strategy"
    ],
  },
  {
    name: "Omnichannel Growth Retainer",
    price: "₹12,999",
    period: "per month",
    desc: "Complete digital dominance: Meta Ads, Google PPC, plus weekly AI social video reels.",
    features: [
      "Combined Meta Ads + Google Ads Strategy",
      "8 Custom 4K AI Video Reels Included",
      "Complete Retargeting Funnel Setup",
      "Conversion Rate Optimization (CRO)",
      "Priority 24/7 WhatsApp Campaign Support"
    ],
  },
];

const googleProfileSeoPlans = [
  {
    name: "GMB Quick-Rank Audit",
    price: "₹2,999",
    period: "one-time",
    desc: "Complete Google Business Profile overhaul to fix ranking penalties and optimize local discovery.",
    features: [
      "Primary & Secondary Category Optimization",
      "NAP (Name, Address, Phone) Standardization",
      "Geo-Tagged High-Res Photos Upload",
      "Local Business Attributes & Services Config",
      "Direct Review Link & QR Code Generation"
    ],
  },
  {
    name: "Google Maps 3-Pack Growth",
    original: "₹7,000",
    price: "₹4,999",
    period: "per month",
    desc: "Continuous monthly local SEO to dominate the top 3 spots on Google Maps in Junagadh.",
    features: [
      "Google Maps 3-Pack Keyword Optimization",
      "Weekly Geo-Targeted Updates & Product Posts",
      "25+ Verified Indian Local Citations / Month",
      "5-Star Client Review Escalation Funnel",
      "Monthly Local Search Rank Tracking Report"
    ],
    highlighted: true,
    badge: "#1 On Maps",
  },
  {
    name: "Regional Junagadh SEO Monopoly",
    price: "₹8,999",
    period: "per month",
    desc: "Multi-location & aggressive local search optimization across Junagadh, Rajkot, and Saurashtra.",
    features: [
      "Rank for 15+ High-Volume Commercial Keywords",
      "In-Depth Competitor Google Profile Hijack Analysis",
      "50+ Premium Local Citations & Directories",
      "Google Local Entity & Knowledge Panel Setup",
      "Guaranteed Increase in Calls & Direction Clicks"
    ],
  },
];

const videoPlans = [
  {
    name: "Single AI Reel",
    price: "₹700",
    period: "one-time",
    desc: "A one-off polished 4K reel with voiceover and captions — ready to post.",
    features: ["Up to 60 sec", "Captions", "Music licensed", "48-hour delivery"],
  },
  {
    name: "Starter Reels (Weekly)",
    price: "₹1,999",
    period: "per month",
    desc: "Weekly content for creators and local shops starting out on Instagram.",
    features: ["4 reels / month", "HD/4K export", "Trend-based audio", "Automated captions"],
  },
  {
    name: "Business Growth Reels",
    price: "₹4,999",
    period: "per month",
    desc: "For businesses wanting a consistent, professional social reels engine.",
    features: ["10 reels / month", "Custom Gujarati/Hindi scripting", "AI voiceover", "Subtitles + 4K export"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium Cinematic Brand",
    price: "₹8,999",
    period: "per month",
    desc: "Studio-grade reels with premium sound design, cinematic pacing, and brand logo lockup.",
    features: ["20 reels / month", "Dedicated scriptwriter", "Cinematic motion editing", "Brand logo + 4K export"],
  },
];

const thumbnailPlans = [
  {
    name: "Single Creative / Thumbnail",
    price: "₹400",
    period: "one-time",
    desc: "High-CTR graphic design for social ads, YouTube thumbnails, or event announcements.",
    features: ["1 custom graphic", "2 revisions", "Source file included", "24-48 hr delivery"],
  },
  {
    name: "Monthly — 5 Creatives",
    price: "₹1,200",
    period: "per month",
    desc: "Consistent output for growing Junagadh retailers and creators.",
    features: ["5 graphics / creatives", "Unlimited revisions", "Brand kit applied", "Priority turnaround"],
    highlighted: true,
  },
  {
    name: "Pack of 10 Social Creatives",
    price: "₹2,200",
    period: "one-time",
    desc: "A full month of branded festival and promotional social banners delivered together.",
    features: ["10 graphics / banners", "Festival & offer designs", "Consistent brand look", "5-day delivery"],
  },
];

const comboPlans = [
  {
    name: "Junagadh Business Launch Combo",
    includes: "Fast Business Website + Google Profile SEO + 4 AI Reels",
    original: "₹11,000",
    price: "₹7,999",
    period: "one-time setup",
    saves: "Save ₹3,000",
    highlighted: true,
    badge: "Best for New Businesses",
  },
  {
    name: "Full Digital Growth Retainer",
    includes: "Website Maintenance + Meta Ads + Google Ads + 10 Reels + 5 Creatives",
    original: "₹24,000",
    price: "₹17,499",
    period: "per month",
    saves: "Save ₹6,500",
    highlighted: true,
    badge: "All-In-One Partner",
  },
  {
    name: "E-commerce Scale Bundle",
    includes: "E-commerce Storefront + Meta Ad Setup + 10 Reels + 5 Banners",
    original: "₹21,000",
    price: "₹16,499",
    period: "setup + monthly",
    saves: "Save ₹4,500",
  },
];

type Tab = "individual" | "combo";

export default function Services() {
  const [tab, setTab] = useState<Tab>("individual");

  return (
    <>
      <title>Services & Pricing | Website Development, Software & Digital Marketing in Junagadh</title>
      <meta
        name="description"
        content="Affordable, transparent pricing for website development, custom software, digital marketing, Meta Ads, Google Ads, and Google Profile SEO in Junagadh, Gujarat."
      />
      <meta
        name="keywords"
        content="website development cost in junagadh, custom software development pricing junagadh, digital marketing packages junagadh, meta ads pricing junagadh, google ads agency junagadh, google profile seo cost junagadh"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/services" />

      {/* Header */}
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Junagadh Digital Services & Pricing
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl">
              Engineered to rank.
              <span className="block italic font-serif font-normal text-accent mt-2">
                Priced for real ROI.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
              Explore transparent, performance-focused packages for <strong className="text-navy-900 font-semibold">Website Development</strong>,{" "}
              <strong className="text-navy-900 font-semibold">Custom Software</strong>, <strong className="text-navy-900 font-semibold">Digital Marketing</strong>,{" "}
              <strong className="text-navy-900 font-semibold">Meta & Google Ads</strong>, and <strong className="text-navy-900 font-semibold">Google Profile SEO</strong> in Junagadh & Saurashtra.
            </p>
          </Reveal>

          {/* Quick Service Deep Dive Links */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            <Link
              href="/services/web-development"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-xs hover:border-navy-900 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-accent" /> Website Development in Junagadh →
            </Link>
            <Link
              href="/services/software-development"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-xs hover:border-navy-900 transition-colors"
            >
              <Cpu className="h-3.5 w-3.5 text-accent" /> Custom Software Development →
            </Link>
            <Link
              href="/services/digital-marketing-agency-junagadh"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-xs hover:border-navy-900 transition-colors"
            >
              <Megaphone className="h-3.5 w-3.5 text-accent" /> Digital Marketing Agency →
            </Link>
            <Link
              href="/services/meta-ads-google-ads-junagadh"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-xs hover:border-navy-900 transition-colors"
            >
              <BarChart3 className="h-3.5 w-3.5 text-accent" /> Meta & Google Ads →
            </Link>
            <Link
              href="/services/google-profile-local-seo-junagadh"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-navy-900 shadow-xs hover:border-navy-900 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" /> Google Profile SEO (Maps) →
            </Link>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <section className="sticky top-[72px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 sm:px-8">
          <div className="relative inline-flex rounded-full border border-slate-300 bg-offwhite p-1.5 shadow-sm">
            <button
              onClick={() => setTab("individual")}
              className={`relative z-10 rounded-full px-7 py-2.5 text-sm sm:text-base font-bold transition-colors ${
                tab === "individual" ? "text-white" : "text-muted hover:text-navy-900"
              }`}
            >
              Core Service Plans
            </button>
            <button
              onClick={() => setTab("combo")}
              className={`relative z-10 rounded-full px-7 py-2.5 text-sm sm:text-base font-bold transition-colors ${
                tab === "combo" ? "text-white" : "text-muted hover:text-navy-900"
              }`}
            >
              All-In-One Combo Packs
            </button>
            <motion.span
              layout
              className="absolute inset-y-1.5 rounded-full bg-navy-900"
              style={{
                width: "calc(50% - 6px)",
                left: tab === "individual" ? "6px" : "calc(50%)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatePresence mode="wait">
            {tab === "individual" ? (
              <motion.div
                key="individual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-28"
              >
                {/* 1. Website Development */}
                <PlanSection
                  tag="Website Development in Junagadh"
                  title="Fast, conversion-tuned Next.js websites."
                  desc="Engineered with modern Next.js for sub-second speed, Google SEO dominance, and direct WhatsApp lead generation."
                  plans={webPlans}
                  detailUrl="/services/web-development"
                  image="/images/service-webdev.jpg"
                />

                {/* 2. Custom Software Development */}
                <PlanSection
                  tag="Software Development in Junagadh"
                  title="Custom MERN stack software & billing ERPs."
                  desc="Tailor-made software applications that automate manual spreadsheets, track inventory, and scale multi-branch operations."
                  plans={softwarePlans}
                  detailUrl="/services/software-development"
                  image="/images/service-software.jpg"
                />

                {/* 3. Meta Ads & Google Ads */}
                <PlanSection
                  tag="Meta Ads & Google Ads in Junagadh"
                  title="Laser-targeted paid ads with verified ROAS."
                  desc="Stop wasting money on boosted posts. We run high-intent Google Search Ads and localized Instagram/Facebook funnels."
                  plans={marketingPlans}
                  detailUrl="/services/meta-ads-google-ads-junagadh"
                  image="/images/service-marketing.jpg"
                />

                {/* 4. Google Profile SEO */}
                <PlanSection
                  tag="Google Profile SEO & Maps Ranking"
                  title="Rank #1 in the Google Maps 3-Pack in Junagadh."
                  desc="Capture high-intent phone calls, store visits, and direction requests from customers searching near Talav Gate & Vanzari Chowk."
                  plans={googleProfileSeoPlans}
                  detailUrl="/services/google-profile-local-seo-junagadh"
                  image="/images/service-localseo.jpg"
                />

                {/* 5. AI Video Reels */}
                <PlanSection
                  tag="AI Video Reels & Content"
                  title="High-retention social media reels that convert."
                  desc="Scripted, voiced in regional language, edited in 4K, and exported ready to dominate Instagram Explore."
                  plans={videoPlans}
                  image="/images/service-video.jpg"
                />

                {/* 6. Graphic Design */}
                <PlanSection
                  tag="Graphic Design & Creatives"
                  title="Scroll-stopping creatives & festival banners."
                  desc="High-CTR creative assets and thumbnails built to capture eyes and trigger clicks."
                  plans={thumbnailPlans}
                  image="/images/service-design.jpg"
                />
              </motion.div>
            ) : (
              <motion.div
                key="combo"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mx-auto max-w-3xl text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                    Best Value Bundles in Junagadh
                  </span>
                  <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
                    All-in-one growth combos
                  </h2>
                  <p className="mt-6 text-xl leading-relaxed text-muted">
                    Bundle website development, Google Profile SEO, and Meta ads management — saving up to 30% vs. booking services individually.
                  </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {comboPlans.map((p, i) => (
                    <Reveal key={p.name} delay={i * 0.08}>
                      <div
                        className={`relative flex h-full flex-col rounded-3xl border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                          p.highlighted
                            ? "border-accent/40 shadow-xl bg-gradient-to-b from-white to-orange-50/20"
                            : "border-slate-200/90 bg-white card-shadow shadow-md"
                        }`}
                      >
                        {p.badge && (
                          <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl">
                            <Star className="h-3.5 w-3.5" fill="currentColor" />
                            {p.badge}
                          </span>
                        )}
                        <h3 className="text-2xl font-bold tracking-tight text-navy-900">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted">
                          {p.includes}
                        </p>
                        <div className="mt-8 flex items-baseline gap-3">
                          <span className="text-base text-muted line-through font-medium">
                            {p.original}
                          </span>
                          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-900">
                            {p.price}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-muted mt-1">{p.period}</div>
                        
                        <div className="mt-6">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-sm font-bold text-emerald-700">
                            <Sparkles className="h-4 w-4" />
                            {p.saves}
                          </span>
                        </div>
                        
                        <div className="mt-auto pt-8">
                          <Link
                            href="/contact"
                            className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-full px-6 text-base font-bold transition-all hover:-translate-y-0.5 ${
                              p.highlighted
                                ? "bg-accent text-white hover:bg-accent-hover shadow-xl shadow-accent/25"
                                : "bg-navy-900 text-white hover:bg-accent"
                            }`}
                          >
                            Get started
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Reassurance CTA */}
      <section className="bg-offwhite py-24 sm:py-32 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
              Need a custom scope or local consultation in Junagadh?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              Visit our office near Vanzari Chowk, Talav Gate, Junagadh or message us on WhatsApp. 
              We'll prepare a custom quotation with clear deliverables within 2 hours.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center gap-3 rounded-full bg-navy-900 px-10 text-base sm:text-lg font-bold text-white transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20service%20plan%20for%20my%20business%20in%20Junagadh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 items-center gap-2 rounded-full border-2 border-emerald-500 bg-white px-8 text-base font-bold text-emerald-800 hover:bg-emerald-50 transition-all shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <span className="text-emerald-500 font-bold">●</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PlanSection({
  tag,
  title,
  desc,
  plans,
  image,
  detailUrl,
}: {
  tag: string;
  title: string;
  desc: string;
  plans: {
    name: string;
    price: string;
    original?: string;
    period: string;
    desc: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
  }[];
  image: string;
  detailUrl?: string;
}) {
  return (
    <div>
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {tag}
            </span>
            {detailUrl && (
              <Link
                href={detailUrl}
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-accent transition-colors"
              >
                Explore Details <ArrowRight className="h-3 w-3" />
              </Link>
            )}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">{desc}</p>
        </div>
        <div className="md:col-span-4">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 card-shadow shadow-md transition-all duration-300 hover:shadow-xl hover:border-accent/30">
            <img
              src={image}
              alt={tag}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${plans.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-4'}`}>
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                p.highlighted
                  ? "border-accent/40 shadow-lg bg-gradient-to-b from-white to-orange-50/20"
                  : "border-slate-200/90 bg-white card-shadow shadow-xs"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  <Star className="h-3 w-3" fill="currentColor" />
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-bold tracking-tight text-navy-900">
                {p.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{p.desc}</p>
              
              <div className="mt-5 flex items-baseline gap-2">
                {p.original && (
                  <span className="text-sm text-muted line-through font-medium">
                    {p.original}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
                  {p.price}
                </span>
                <span className="text-xs font-medium text-muted">{p.period}</span>
              </div>
              
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-ink/90 border-t border-slate-100 pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent font-bold" />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className={`inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-full px-5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    p.highlighted
                      ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25"
                      : "bg-navy-900 text-white hover:bg-accent"
                  }`}
                >
                  Choose plan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
