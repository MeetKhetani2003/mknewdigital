"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  Globe,
  Cpu,
  Megaphone,
  BarChart3,
  MapPin,
  ChevronDown,
  Check,
  Layers,
  Award,
  Search,
  Phone,
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";
import { projects } from "@/utils/projectsData";

const services = [
  {
    title: "Website Development in Junagadh",
    desc: "Custom Next.js & React websites, high-conversion e-commerce storefronts, and mobile-first portals built with sub-second loading and pre-configured Google SEO.",
    img: "/images/service-webdev.jpg",
    tag: "Web Development",
    link: "/services/web-development",
    points: ["Next.js 16 & React", "99+ PageSpeed Score", "WhatsApp Order Router", "Junagadh Local SEO"],
  },
  {
    title: "Custom Software Development in Junagadh",
    desc: "MERN stack web applications, retail GST billing software, inventory synchronization, and bespoke ERP/CRM dashboards engineered to automate complex business workflows.",
    img: "/images/service-marketing.jpg",
    tag: "Custom Software",
    link: "/services/software-development",
    points: ["MERN Stack Architecture", "GST Billing & POS", "Inventory & Khata Sync", "Multi-Branch Cloud Access"],
  },
  {
    title: "Digital Marketing Agency in Junagadh",
    desc: "Full-funnel digital marketing strategies combining organic Google search ranking, localized content marketing, and high-converting lead capture funnels.",
    img: "/images/service-marketing.jpg",
    tag: "Digital Marketing",
    link: "/services/digital-marketing-agency-junagadh",
    points: ["Google Page 1 Ranking", "Lead Capture Funnels", "Social Brand Identity", "High-Converting Copy"],
  },
  {
    title: "Meta Ads Agency in Junagadh (FB & Instagram)",
    desc: "Hyper-targeted Facebook & Instagram ad campaigns focused on direct WhatsApp inquiries, store visits, and maximum return on advertising spend (ROAS).",
    img: "/images/service-video.jpg",
    tag: "Meta Paid Ads",
    link: "/services/meta-ads-google-ads-junagadh",
    points: ["Local Radius Geo-Targeting", "4K AI Video Reel Creatives", "Direct-to-WhatsApp Ads", "Strict ROAS Optimization"],
  },
  {
    title: "Google Ads & PPC Management in Junagadh",
    desc: "High-intent Google Search, Call-only, and Local Service Ads that put your business at the top of Google the moment ready-to-buy customers search in Junagadh.",
    img: "/images/service-marketing.jpg",
    tag: "Google PPC Ads",
    link: "/services/meta-ads-google-ads-junagadh",
    points: ["Commercial Intent Keywords", "Call-Only Ads for Mobile", "Negative Keyword Filters", "Zero Ad Budget Waste"],
  },
  {
    title: "Google Profile SEO & Maps Ranking in Junagadh",
    desc: "Rank in the coveted Google Maps 3-Pack for local searches. We optimize your Google Business Profile (GMB) to drive phone calls and physical store foot traffic.",
    img: "/images/service-design.jpg",
    tag: "Google Maps SEO",
    link: "/services/google-profile-local-seo-junagadh",
    points: ["Google Maps 3-Pack Rank", "Indian Local Citations", "5-Star Review Escalation", "Weekly Geo-Tagged Updates"],
  },
];

const junagadhFaqs = [
  {
    q: "Which is the best website development company in Junagadh?",
    a: "MK Digital Nexus is recognized as the leading website development company in Junagadh, Gujarat. With over 100+ live client deployments shipped across India and Canada, we specialize in high-performance Next.js websites, custom e-commerce storefronts, and mobile-first portals that score 99+ on Google PageSpeed with built-in on-page SEO.",
  },
  {
    q: "What custom software development services do you provide in Junagadh?",
    a: "We engineer full-stack MERN (MongoDB, Express, React, Node.js) software applications tailored to local businesses. Our software solutions include retail and wholesale GST billing software with WhatsApp receipt delivery, multi-branch inventory management systems, custom CRM pipelines, and automated business intelligence dashboards.",
  },
  {
    q: "How do Meta Ads (Facebook & Instagram) and Google Ads help businesses in Junagadh?",
    a: "Meta Ads target local consumers within a 5km to 50km radius of your Junagadh location using compelling 4K video reels and direct WhatsApp chat triggers. Google Ads place your business at the top of Google when potential clients actively search for terms like 'best in Junagadh' or specific products, providing immediate high-intent leads.",
  },
  {
    q: "How does Google Profile SEO help my business rank #1 on Google Maps in Junagadh?",
    a: "Our Google Profile SEO optimizes your Google Business Profile (formerly GMB) for the Google Maps 3-Pack. We optimize primary and secondary categories, build high-authority Indian business citations, embed geo-tagged photos, maintain NAP (Name, Address, Phone) consistency near landmarks like Vanzari Chowk and Talav Gate, and run review generation systems to drive phone calls and foot traffic.",
  },
  {
    q: "What is the cost of website development and software in Junagadh?",
    a: "Professional business websites start at just ₹5,000 under our festival offer (including 5 years of hosting and Junagadh SEO setup), custom billing and POS software starts at ₹14,999, and monthly digital marketing with Meta/Google Ads starts at ₹4,999/month. We provide transparent, itemized proposals within 2 hours.",
  },
  {
    q: "Where is MK Digital Nexus located in Junagadh and how do we get started?",
    a: "Our office is located at First floor, Shyam Apt, Shop no. 5, road near Vanzari chowk, Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001. You can visit us in person, call +91 63531 21773, or send a direct WhatsApp message to schedule a free 30-minute discovery consultation.",
  },
];

const heroFeaturedProjects = [
  {
    id: "gwgc",
    title: "GWGC",
    tabName: "GWGC.ca",
    tag: "Industrial Service",
    url: "https://www.gwgc.ca/",
    img: "/websites/gwgc.png",
    stat: "99.8% Speed",
    client: "Canadian Industrial Provider",
  },
  {
    id: "anvil",
    title: "Anvil Techno Forge",
    tabName: "Anvil Techno",
    tag: "Precision Forging",
    url: "https://www.anviltechnoforge.co.in",
    img: "/websites/AnvilTechno.png",
    stat: "Heavy Machinery",
    client: "B2B Components Manufacturer",
  },
  {
    id: "ravi-prakash-industries",
    title: "Ravi Prakash Industries",
    tabName: "Ravi Prakash",
    tag: "Chemical Processing",
    url: "https://www.raviprakashindustries.in/",
    img: "/websites/RaviprakashIndustries.png",
    stat: "Industrial Plant",
    client: "Processing Equipment Producer",
  },
  {
    id: "green-wave-packaging",
    title: "Green Wave Packaging",
    tabName: "Green Wave",
    tag: "Eco Packaging",
    url: "https://www.greenwavepackaging.ca/",
    img: "/websites/GreenWavePackaging.png",
    stat: "Eco Packaging",
    client: "Canadian Supplier",
  },
  {
    id: "groovy-cafe",
    title: "Groovy Cafe",
    tabName: "Groovy Cafe",
    tag: "Hospitality & Food",
    url: "https://groovycafe.in/",
    img: "/websites/GroovyCafe.png",
    stat: "4.9★ Engagement",
    client: "Dine & Restaurant",
  },
];

const homepageShowcase = [
  {
    title: "Industrial & Manufacturing",
    desc: "B2B catalog systems, technical spec directories, and quote request setups built for industrial operators across India & Canada.",
    categoryTag: "Industrial Excellence",
    items: projects.filter((p) => p.cat === "Industrial").slice(0, 10),
  },
  {
    title: "E-commerce Solutions",
    desc: "High-performance storefronts and catalog sites built for conversions, lightning-fast checkout, and payment gateways.",
    categoryTag: "Online Storefronts",
    items: projects.filter((p) => p.cat === "E-commerce").slice(0, 10),
  },
  {
    title: "Healthcare & Clinical Portals",
    desc: "Reassuring medical directory portals, clinical onboarding, and direct WhatsApp patient booking routers.",
    categoryTag: "Medical & Clinics",
    items: projects.filter((p) => p.cat === "Healthcare").slice(0, 10),
  },
  {
    title: "Corporate & Business Services",
    desc: "Modern service catalogs, brand presentation sites, and optimized lead intake forms.",
    categoryTag: "Brand Architecture",
    items: projects.filter((p) => p.cat === "Business").slice(0, 10),
  },
  {
    title: "Institutional & Consultancies",
    desc: "Educational institutes, coaching platforms, and NGO portals designed for community trust.",
    categoryTag: "Education & Trust",
    items: projects.filter((p) => p.cat === "Institutional").slice(0, 10),
  },
];

const homepageTestimonials = projects.map((p) => ({
  quote: p.testimonial.quote,
  name: p.testimonial.clientName,
  role: p.testimonial.clientRole,
  initials: p.testimonial.initials,
  projectId: p.id,
}));

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.9, suffix: "/5", label: "Google Review Rating", decimals: 1 },
  { value: 2, suffix: " hrs", label: "Response SLA" },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % homepageTestimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + homepageTestimonials.length) % homepageTestimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroFeaturedProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentHeroProject = heroFeaturedProjects[heroActiveIndex];
  const cleanHeroUrl = currentHeroProject.url.replace("https://", "").replace("www.", "").replace(/\/$/, "");

  return (
    <>
      <title>Website Development & Software in Junagadh | Digital Marketing, Meta Ads & Google Profile SEO</title>
      <meta
        name="description"
        content="#1 Website development company, custom software development, and top digital marketing agency in Junagadh, Gujarat. Meta Ads, Google Ads PPC, and Google Profile SEO maps ranking. 100+ live projects delivered."
      />
      <meta
        name="keywords"
        content="website development in junagadh, website development company in junagadh, software development in junagadh, custom software development junagadh, digital marketing in junagadh, digital marketing agency in junagadh, meta ads agency in junagadh, google ads agency in junagadh, google profile seo in junagadh, google maps ranking junagadh, web design vanzari chowk talav gate junagadh, ecommerce website development junagadh, MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in" />

      {/* JSON-LD FAQPage Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": junagadhFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      {/* HERO - EXECUTIVE, MODERN & HIGH-CONVERSION */}
      <section className="relative w-full min-h-[92vh] bg-offwhite flex flex-col justify-center overflow-hidden pt-32 pb-16">
        {/* Subtle Ambient Gradient Lighting */}
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-accent/12 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 -right-24 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
        <div className="grid-pattern absolute inset-0 opacity-40 mix-blend-overlay" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left: Headline & Actions */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
            <Reveal y={20}>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-1.5 text-xs font-bold text-navy-950 shadow-xs backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  ISO & MSME Certified Agency · Junagadh & Rajkot
                </span>

                <a
                  href="https://share.google/VqmKOhc9O8q5wXUvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-amber-950 shadow-xs transition-all hover:bg-amber-100/90 hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span className="text-amber-500 font-extrabold">★★★★★</span>
                  <span className="font-extrabold text-navy-950">4.9 / 5</span>
                  <span className="text-slate-600 font-medium">(68+ reviews)</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-navy-950 leading-[1.04]">
                Web Development & <br />
                Custom Software Built to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-500 to-orange-500 font-serif italic font-normal">
                  Outperform.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2} y={20}>
              <p className="mt-6 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-muted max-w-2xl">
                Senior engineering & digital growth agency based at <strong className="text-navy-900 font-semibold">Talav Gate, Junagadh</strong>. We build conversion-engineered Next.js websites, MERN software, and high-ROAS Meta & Google ad campaigns. 
                <strong className="text-navy-900 font-semibold"> 100+ live deployments shipped worldwide</strong> with guaranteed 2-hour scoped proposals.
              </p>
            </Reveal>

            <Reveal delay={0.3} y={20}>
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                {/* Book Service Consultation - Triggers popup modal */}
                <button
                  onClick={() => triggerBookServiceModal()}
                  className="group inline-flex h-15 items-center justify-center gap-2.5 rounded-full bg-navy-900 px-7 sm:px-8 text-base font-bold text-white transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30 shadow-lg cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>Book Service Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                {/* Direct Call Button */}
                <a
                  href="tel:+916353121773"
                  className="inline-flex h-15 items-center justify-center gap-2.5 rounded-full border-2 border-slate-300 bg-white/95 px-6 text-sm sm:text-base font-bold text-navy-900 backdrop-blur transition-all hover:border-navy-900 hover:bg-slate-50 hover:-translate-y-1 shadow-xs"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>Call: +91 63531 21773</span>
                </a>

                {/* Direct WhatsApp Button */}
                <a
                  href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20book%20a%20service%20consultation%20for%20my%20business%20in%20Junagadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-15 items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-5 text-sm font-bold text-emerald-800 transition-all hover:bg-emerald-600 hover:text-white hover:-translate-y-1"
                >
                  <span>WhatsApp Us</span>
                  <span className="text-emerald-500 font-bold group-hover:text-white">●</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4} y={20}>
              <div className="mt-11 grid grid-cols-3 gap-6 border-t border-slate-200/80 pt-6 w-full max-w-xl text-xs sm:text-sm">
                <div>
                  <div className="font-extrabold text-navy-900 flex items-center gap-1.5 text-sm">
                    <Zap className="h-4 w-4 text-accent" /> &lt; 2hr Response
                  </div>
                  <div className="text-muted mt-0.5 text-xs">Fast Scoped Proposal</div>
                </div>
                <div>
                  <div className="font-extrabold text-navy-900 flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 100% Code Ownership
                  </div>
                  <div className="text-muted mt-0.5 text-xs">Zero Retainer Lock-in</div>
                </div>
                <div>
                  <div className="font-extrabold text-navy-900 flex items-center gap-1.5 text-sm">
                    <ShieldCheck className="h-4 w-4 text-accent" /> 100+ Shipped
                  </div>
                  <div className="text-muted mt-0.5 text-xs">India & Global Projects</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Interactive Live Client Showcase Mockup */}
          <div className="w-full lg:w-5/12 relative">
            <Reveal delay={0.2} y={30} className="w-full">
              <div className="relative w-full rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-2xl">
                {/* Live project quick tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-1 pt-1 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted px-1 shrink-0">
                    Live Demo:
                  </span>
                  {heroFeaturedProjects.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setHeroActiveIndex(idx)}
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-all ${
                        heroActiveIndex === idx
                          ? "bg-navy-900 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                      }`}
                    >
                      {item.tabName}
                    </button>
                  ))}
                </div>

                {/* Simulated Modern Browser Frame */}
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2.5 select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="ml-2 flex-1 rounded-md bg-slate-100 py-1 px-3 text-center text-xs font-mono text-slate-600 truncate">
                      {cleanHeroUrl}
                    </div>
                    <a
                      href={currentHeroProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-0.5 shrink-0"
                    >
                      Open Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Screenshot View */}
                  <a
                    href={currentHeroProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] overflow-hidden bg-slate-100 group cursor-pointer"
                  >
                    <img
                      key={currentHeroProject.id}
                      src={currentHeroProject.img}
                      alt={`${currentHeroProject.title} live deployment preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Callout */}
                    <div className="absolute inset-0 bg-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-navy-900 shadow-xl flex items-center gap-1.5">
                        Visit Live Production Build <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Floating Status Pill */}
                    <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white flex items-center gap-1.5 text-[11px] font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{currentHeroProject.stat}</span>
                    </div>
                  </a>

                  {/* Bottom Info Ribbon */}
                  <div className="bg-white p-3.5 flex items-center justify-between border-t border-slate-100 text-xs">
                    <div>
                      <div className="font-bold text-navy-900">{currentHeroProject.title}</div>
                      <div className="text-muted text-[11px]">{currentHeroProject.client}</div>
                    </div>
                    <Link
                      href={`/portfolio/${currentHeroProject.id}`}
                      className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>

                {/* Floating Review Chip */}
                <div className="mt-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold text-sm">★★★★★</span>
                    <span className="text-navy-950 font-bold">Google Verified Review</span>
                  </div>
                  <span className="text-muted font-medium">98% Client Return</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Client Social Proof / Trust Strip */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full mt-14 pt-8 border-t border-slate-200/70">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 text-center mb-5">
            Trusted by 100+ Market Leaders, Industrial Manufacturers & Clinics Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity text-xs sm:text-sm font-bold text-navy-900 select-none">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> GWGC (Canada)
            </span>
            <span className="text-slate-300">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Anvil Techno Forge
            </span>
            <span className="text-slate-300">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Green Wave Packaging
            </span>
            <span className="text-slate-300">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ravi Prakash Industries
            </span>
            <span className="text-slate-300">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> BSR Worldwide
            </span>
            <span className="text-slate-300">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Groovy Cafe
            </span>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="circuit-bg relative overflow-hidden py-20 sm:py-24">
        <div className="grid-pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                  <AnimatedCounter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-2 text-base sm:text-lg text-white/80 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JUNAGADH LOCAL SEARCH DOMINANCE HUB - HIGH SEO POWER */}
      <section className="bg-slate-50 py-24 sm:py-32 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Junagadh Search Authority Hub
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900">
              #1 Digital Agency for <br className="hidden sm:inline" />
              Website, Software & Growth in Junagadh.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
              Based at <strong className="text-navy-900 font-semibold">Talav Gate near Vanzari Chowk</strong>, MK Digital Nexus 
              empowers local retailers, manufacturers, clinics, and service providers across Junagadh, Rajkot, and Saurashtra to 
              dominate Google search results and acquire profitable customers daily.
            </p>
          </div>

          {/* 6 Core Search Pillar Cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-navy-900/5 border border-navy-900/10 px-3 py-1 text-xs font-bold text-navy-900">
                      {svc.tag}
                    </span>
                    <Link
                      href={svc.link}
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-0.5"
                    >
                      Details <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900 hover:text-accent transition-colors">
                    <Link href={svc.link}>{svc.title}</Link>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed flex-1">
                    {svc.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                    {svc.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 font-bold" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={svc.link}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-navy-900 py-2.5 text-xs font-bold text-white hover:bg-accent transition-colors"
                    >
                      View Service Deliverables <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Local Geographic Coverage Strip */}
          <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Locally Serving Junagadh & Saurashtra Corridors:</h4>
                  <p className="text-xs text-muted mt-0.5">
                    Talav Gate · Vanzari Chowk · Nava Nagarwada · M.G. Road · Zanzarda Road · Motibaug · Joshipura · Bilkha Road · Junagadh GIDC · Rajkot Highway.
                  </p>
                </div>
              </div>

              <a
                href="https://share.google/VqmKOhc9O8q5wXUvg"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
              >
                <span>Find on Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK SHOWCASE - CAROUSEL FORMAT PER CATEGORY */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Proven Production Deployments
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
                  Client Websites & Software Archives.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-base font-bold text-navy-900 hover:text-accent font-sans"
              >
                Explore Full Archive ({projects.length}+ Projects) <ArrowRight className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>

          {/* Rows: Single Carousel format per category (5-10 projects) */}
          <div className="mt-16 space-y-16">
            {homepageShowcase.map((row, rowIndex) => (
              <Reveal key={row.title} delay={rowIndex * 0.05}>
                <ProjectCarousel
                  title={row.title}
                  desc={row.desc}
                  categoryTag={row.categoryTag}
                  projects={row.items}
                  maxItems={10}
                  viewAllLink="/portfolio"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW CAROUSEL */}
      <section className="bg-slate-50 py-24 sm:py-32 overflow-hidden border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                What clients say
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
                Work that earns the second project.
              </h2>
            </div>
          </Reveal>

          {/* Carousel Frame */}
          <div className="mt-16 relative">
            {/* Nav Arrows */}
            <div className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handlePrev}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-lg transition-all hover:bg-navy-900 hover:text-white hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handleNext}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-lg transition-all hover:bg-navy-900 hover:text-white hover:scale-105"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>

            {/* Testimonial card */}
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-14 shadow-lg">
                {/* Carousel page indicator */}
                <div className="absolute right-8 top-8 text-sm font-bold text-muted tracking-widest select-none">
                  {String(activeTestimonial + 1).padStart(2, "0")} / {String(homepageTestimonials.length).padStart(2, "0")}
                </div>

                {/* Rating & Verification Badges */}
                <div className="flex flex-wrap items-center gap-3.5 mb-6 pt-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    </svg>
                    <span className="text-xs font-bold text-slate-800">Verified Google Review</span>
                  </div>
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif italic text-navy-900 leading-relaxed">
                  "{homepageTestimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="mt-10 flex flex-col justify-between gap-6 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
                  <figcaption className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-base font-bold text-white shadow-md">
                      {homepageTestimonials[activeTestimonial].initials}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-navy-900">
                        {homepageTestimonials[activeTestimonial].name}
                      </div>
                      <div className="text-xs sm:text-sm text-muted">
                        {homepageTestimonials[activeTestimonial].role}
                      </div>
                    </div>
                  </figcaption>

                  <Link
                    href={`/portfolio/${homepageTestimonials[activeTestimonial].projectId}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-5 py-2.5 text-xs font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    View Project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Pagination progress bar */}
            <div className="mt-8 flex items-center justify-between px-2">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-navy-900">
                  {String(activeTestimonial + 1).padStart(2, "0")}
                </span>
                <div className="h-1.5 bg-slate-200 rounded-full w-40 sm:w-60 overflow-hidden relative">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${((activeTestimonial + 1) / homepageTestimonials.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-muted">
                  {String(homepageTestimonials.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex gap-2 md:hidden">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-xs"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-xs"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JUNAGADH LOCAL SEO FAQ ACCORDION */}
      <section className="bg-white py-24 sm:py-32 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Frequently Asked Questions in Junagadh
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-navy-900">
              Common Questions About Website, Software & Marketing.
            </h2>
            <p className="mt-4 text-base text-muted">
              Everything you need to know about partnering with MK Digital Nexus in Junagadh and Saurashtra.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {junagadhFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-navy-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-accent shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-muted border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <div className="circuit-bg relative py-24 sm:py-32">
          <div className="grid-pattern-light absolute inset-0 opacity-70" />
          <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-accent" />
                Guaranteed 2-hour response on every Junagadh inquiry
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Ready to Rank #1 in Junagadh?
                <span className="block italic font-serif font-normal text-accent mt-2">
                  Let's engineer your growth.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">
                Discuss your website, software, or ad campaign with our engineering team at Talav Gate, Junagadh. 
                Receive a scoped quote within 2 hours.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-16 items-center gap-3 rounded-full bg-white px-10 text-base font-bold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Project Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20project%20in%20Junagadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-16 items-center gap-2 rounded-full border-2 border-emerald-400 bg-emerald-500/20 px-8 text-base font-bold text-white backdrop-blur transition-all hover:bg-emerald-500 hover:-translate-y-1"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="text-emerald-400 font-bold">●</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
