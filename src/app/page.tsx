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
  Layers,
  ChevronDown,
  Check,
  Search,
  Code2,
  Cpu,
  Monitor,
  Smartphone,
  BarChart3,
  HeartHandshake,
  MapPin,
  Clock,
  Compass,
  FileCheck,
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";
import { projects } from "@/utils/projectsData";
import { HeroSection } from "@/components/Home/HeroSection";
import { TrustCredibility } from "@/components/Home/TrustCredibility";
import { ServicesSection } from "@/components/Home/ServicesSection";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
import { SelectedCaseStudy } from "@/components/Home/SelectedCaseStudy";
import { IndustriesWeServe } from "@/components/Home/IndustriesWeServe";
import { OurProcess } from "@/components/Home/OurProcess";
import { TestimonialsSection } from "@/components/Home/TestimonialsSection";
import { FAQSection } from "@/components/Home/FAQSection";

// Selected premier live client websites for Hero Interactive Preview
const heroFeaturedProjects = [
  {
    id: "anvil",
    title: "Anvil Techno Forge",
    tabName: "Industrial / Forge",
    tag: "Heavy Industry & Forging",
    url: "https://www.anviltechnoforge.co.in",
    img: "/websites/AnvilTechno.png",
    stat: "High Concurrency Architecture",
    client: "Global Industrial Manufacturer",
  },
  {
    id: "shynex-detailing",
    title: "Shynex Detailing",
    tabName: "Auto Detailing (Canada)",
    tag: "Automotive Studio",
    url: "https://www.shynexdetailing.ca/",
    img: "/websites/shynex.png",
    stat: "International Production Build",
    client: "Ontario, Canada Client",
  },
  {
    id: "bsr-worldwide",
    title: "BSR Worldwide",
    tabName: "Import-Export",
    tag: "Global Trade Logistics",
    url: "https://www.bsrworldwide.in/",
    img: "/websites/bsr.png",
    stat: "Trade Lane Catalog",
    client: "Global Logistics Network",
  },
  {
    id: "ravi-prakash-industries",
    title: "Ravi Prakash Industries",
    tabName: "Chemical / Equipment",
    tag: "Chemical Processing",
    url: "https://www.raviprakashindustries.in/",
    img: "/websites/RaviprakashIndustries.png",
    stat: "Product Catalog System",
    client: "Heavy Equipment Industry",
  },
  {
    id: "groovy-cafe",
    title: "Groovy Cafe",
    tabName: "Hospitality / Dining",
    tag: "Hospitality & Food",
    url: "https://groovycafe.in/",
    img: "/websites/GroovyCafe.png",
    stat: "Interactive Reservation UI",
    client: "Dining & Lifestyle",
  },
];

// Strategic Service Offerings (Refined Editorial Format)
const studioServices = [
  {
    id: "web-dev",
    title: "Bespoke Website Development",
    category: "Core Digital Experience",
    desc: "Custom Next.js & React digital experiences built for lightning speed, clean typography, sub-second PageSpeed scores, and strong search authority.",
    deliverables: ["Next.js & React Architecture", "Sub-second PageSpeed", "Semantic On-Page SEO", "Responsive First Layouts"],
    href: "/services/web-development",
    badge: "Most Requested",
  },
  {
    id: "web-apps",
    title: "Custom Web Applications",
    category: "Full-Stack Architecture",
    desc: "Robust full-stack MERN (MongoDB, Express, React, Node.js) systems, internal tools, customer portals, and real-time operational platforms.",
    deliverables: ["Full-Stack MERN Engineering", "RESTful API Development", "Scalable Database Design", "Enterprise Authentication"],
    href: "/services/software-development",
    badge: "Engineered",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Storefronts",
    category: "Conversion Engineering",
    desc: "Custom shopping experiences with payment gateways (Stripe, UPI, Razorpay), real-time inventory synchronization, and streamlined checkout.",
    deliverables: ["Custom Cart & Checkout", "Multi-Currency & Gateways", "Inventory & Order Routing", "Abandoned Cart Automation"],
    href: "/services/web-development",
    badge: "High Conversion",
  },
  {
    id: "crm-software",
    title: "Business CRM & Operations Portals",
    category: "Workflow Automation",
    desc: "Streamlined operational software, billing pipelines, customer management dashboards, and synchronized business intelligence systems.",
    deliverables: ["Automated Invoicing & Khata", "Custom Lead Pipelines", "Multi-Branch Cloud Access", "Role-Based Permissions"],
    href: "/services/software-development",
    badge: "Operational",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    category: "Design Strategy",
    desc: "Design systems, interactive prototypes, and user flows designed using modern UX references from 21st.dev and Mobbin standards.",
    deliverables: ["Figma Design Systems", "Interactive Prototypes", "Editorial Typography Grids", "Accessibility & WCAG 2.1"],
    href: "/services",
    badge: "Human Centric",
  },
  {
    id: "seo-growth",
    title: "SEO & International Search Strategy",
    category: "Search Dominance",
    desc: "Technical SEO audits, schema markup implementation, Google Business Profile ranking, and content strategy for local & overseas discovery.",
    deliverables: ["Structured JSON-LD Schema", "Google Maps 3-Pack Growth", "Technical Core Web Vitals", "Authority Building Content"],
    href: "/services/digital-marketing-agency-junagadh",
    badge: "Rank #1",
  },
];

// 6-Step Development Process
const developmentProcess = [
  {
    step: "01",
    title: "Discover & Scope",
    desc: "We analyze your business model, target audience (domestic or overseas in the US/Canada), competitive landscape, and technical specifications.",
  },
  {
    step: "02",
    title: "Strategize & Architecture",
    desc: "We define information architecture, user journeys, technology stack, database schemas, and conversion funnels before writing code.",
  },
  {
    step: "03",
    title: "Design System & UI",
    desc: "We craft an editorial, premium interface tailored to your brand identity with high-contrast typography and intentional spacing.",
  },
  {
    step: "04",
    title: "Clean Code Engineering",
    desc: "We build your project using modern Next.js, React, and modular APIs with zero bloat, strict security standards, and full responsiveness.",
  },
  {
    step: "05",
    title: "Testing & Core Web Vitals",
    desc: "Comprehensive cross-device validation, form testing, Lighthouse 95+ performance optimization, and SEO schema verification.",
  },
  {
    step: "06",
    title: "Launch & Handover",
    desc: "Production deployment on global edge networks (Vercel/Cloudflare), domain routing, 100% code handover, and ongoing maintenance support.",
  },
];

// Grouped portfolio categories for showcase
const showcaseGroups = [
  {
    title: "Industrial & Manufacturing",
    desc: "Precision forging, heavy machinery, and technical component catalog platforms built for industrial manufacturers.",
    categoryTag: "Industrial Excellence",
    items: projects.filter((p) => p.cat === "Industrial").slice(0, 8),
  },
  {
    title: "E-Commerce & Digital Retail",
    desc: "Conversion-first storefronts, dynamic product catalogs, and automated inquiry & checkout engines.",
    categoryTag: "Online Storefronts",
    items: projects.filter((p) => p.cat === "E-commerce").slice(0, 8),
  },
  {
    title: "Corporate & Professional Services",
    desc: "Authoritative business websites, import-export consultants, and Canadian enterprise portals.",
    categoryTag: "Business & Corporate",
    items: projects.filter((p) => p.cat === "Business").slice(0, 8),
  },
  {
    title: "Healthcare & Clinical Portals",
    desc: "Professional medical practices, diagnostic centers, and direct patient consultation booking systems.",
    categoryTag: "Medical & Health",
    items: projects.filter((p) => p.cat === "Healthcare").slice(0, 8),
  },
];

// Verified stats
const studioStats = [
  { value: 100, suffix: "+", label: "Websites & Software Delivered" },
  { value: 98, suffix: "%", label: "Client Project Satisfaction" },
  { value: 4.9, suffix: "/5", label: "Google Review Rating", decimals: 1 },
  { value: 3, suffix: "+", label: "Years of Studio Craft" },
];

export default function Home() {
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Auto-cycle hero mockup
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroFeaturedProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentHeroProject = heroFeaturedProjects[heroActiveIndex];
  const cleanHeroUrl = currentHeroProject.url.replace("https://", "").replace("www.", "").replace(/\/$/, "");

  const faqs = [
    {
      q: "Where is MK Digital Nexus located and how do you serve international clients?",
      a: "MK Digital Nexus is headquartered at Talav Gate near Vanzari Chowk in Junagadh, Gujarat, India. We regularly partner with clients across the United States, Canada, and India via structured remote workflows, async video updates, direct phone/WhatsApp communication, and milestone-based deliveries.",
    },
    {
      q: "What technologies do you use for web and software development?",
      a: "We specialize in modern, high-performance web stacks: Next.js, React, Node.js, Express, MongoDB (MERN Stack), Tailwind CSS, and edge deployment via Vercel. Every site is custom-coded for maximum speed, security, and long-term maintainability without template lock-in.",
    },
    {
      q: "How many completed projects has your studio delivered?",
      a: "We have delivered over 100+ live production websites, e-commerce storefronts, and custom software systems across diverse sectors including industrial manufacturing, healthcare, exports, hospitality, and retail.",
    },
    {
      q: "What is your typical project timeline and process?",
      a: "A standard custom business website typically takes 2 to 3 weeks from discovery to deployment. Complex e-commerce systems and custom MERN web applications take 4 to 8 weeks depending on specifications. We follow a structured 6-phase process with transparent milestones.",
    },
    {
      q: "Do I own 100% of my code and website after launch?",
      a: "Yes, absolutely. Once final delivery is completed, you own all source code, design assets, and database architecture. We do not practice proprietary lock-in or hold your digital assets hostage.",
    },
  ];

  return (
    <>
      <title>MK Digital Nexus | Premium Web Development & Digital Solutions Studio</title>
      <meta
        name="description"
        content="MK Digital Nexus is a premium custom web development and digital solutions studio based in India, delivering international-grade websites, web apps, and e-commerce platforms for businesses in the USA, Canada, and India. 100+ projects delivered."
      />
      <meta
        name="keywords"
        content="web development studio, custom web applications, Next.js development agency, e-commerce website development, software development company, professional web design, MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in" />

      {/* SECTION 2: HIGH-IMPACT HERO SECTION */}
      <HeroSection />

      {/* SECTION 02: TRUST & CREDIBILITY */}
      <TrustCredibility />

      {/* SECTION 03: OUR SERVICES */}
      <ServicesSection />

      {/* SECTION 04: WHY MK DIGITAL NEXUS */}
      <WhyChooseUs />

      {/* SECTION 05: SELECTED CASE STUDY */}
      <SelectedCaseStudy />

      {/* SECTION 06: INDUSTRIES WE SERVE */}
      <IndustriesWeServe />

      {/* SECTION 07: OUR PROCESS */}
      <OurProcess />

      {/* SECTION 08: GENUINE GOOGLE CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* SECTION 11: STRONG CLOSING CALL TO ACTION */}
      <section className="py-24 sm:py-32 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Ready for your digital transformation?</span>
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Have a Project in Mind? <br />
            Let&apos;s Build Something Great.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business goals and what you want to achieve. We&apos;ll help you find the right digital architecture and deliver a comprehensive proposal.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerBookServiceModal()}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-accent-hover transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="/portfolio"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 text-sm font-bold text-white hover:bg-white hover:text-navy-950 transition-colors"
            >
              <span>View Our Portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
