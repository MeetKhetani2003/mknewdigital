"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { WebDevHeroVisual } from "@/components/services/WebDevHeroVisual";
import { 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Globe, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Database, 
  Server, 
  CreditCard, 
  Search, 
  Wrench, 
  ChevronDown, 
  Sparkles,
  ShoppingBag,
  Cpu,
  Monitor,
  UserCheck,
  Building2,
  Lock
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

const whatWeBuildCategories = [
  {
    title: "Business Websites",
    desc: "Professional websites for companies, service providers and growing businesses looking to establish authority and generate inquiries.",
    icon: Building2,
    badge: "Corporate & Studio",
  },
  {
    title: "E-commerce Websites",
    desc: "Online stores with product catalogues, shopping carts, frictionless checkout flows, and secure payment gateway integrations.",
    icon: ShoppingBag,
    badge: "Direct-to-Consumer",
  },
  {
    title: "Custom Web Applications",
    desc: "Purpose-built web applications and digital platforms engineered around your company's specific operational workflows.",
    icon: Cpu,
    badge: "Bespoke Logic",
  },
  {
    title: "Landing Pages",
    desc: "Focused, high-converting landing pages built specifically for marketing campaigns, product launches and targeted lead generation.",
    icon: Zap,
    badge: "High Conversion",
  },
  {
    title: "Portfolio & Personal Websites",
    desc: "Refined digital profiles for founders, executives, independent professionals and creative studios to present their work.",
    icon: UserCheck,
    badge: "Brand Identity",
  },
  {
    title: "Industry-Specific Websites",
    desc: "Tailored website experiences built around the distinct requirements of manufacturing, medical, legal and retail businesses.",
    icon: Layers,
    badge: "Sector Solutions",
  },
];

const capabilities = [
  {
    title: "Responsive Design & Development",
    desc: "Fluid layouts engineered to perform seamlessly across all smartphone, tablet and desktop viewports.",
    icon: Smartphone,
  },
  {
    title: "Custom UI Implementation",
    desc: "Handcrafted user interfaces built from your exact brand guidelines rather than generic templates.",
    icon: Layers,
  },
  {
    title: "Frontend & Backend Development",
    desc: "Full-stack architecture combining high-performance React/Next.js frontends with robust Node.js logic.",
    icon: Code2,
  },
  {
    title: "Database Integration",
    desc: "Structured database design with MongoDB or MySQL for safe data storage, customer records and inventories.",
    icon: Database,
  },
  {
    title: "Contact Forms & Enquiry Systems",
    desc: "Automated inquiry forms with spam protection, real-time email routing and optional WhatsApp notifications.",
    icon: Globe,
  },
  {
    title: "Payment Gateway Integration",
    desc: "Secure online checkout and payment systems integrated via Razorpay, Stripe, UPI and trusted gateways.",
    icon: CreditCard,
  },
  {
    title: "API & Third-Party Integrations",
    desc: "Seamless connection to CRMs, marketing tools, shipping aggregators and internal business software.",
    icon: Server,
  },
  {
    title: "SEO-Friendly Architecture",
    desc: "Semantic HTML5, automated XML sitemaps, JSON-LD Schema markup and clean crawlable URL structures.",
    icon: Search,
  },
  {
    title: "Performance Optimization",
    desc: "Sub-second load times achieved through edge caching, image optimization and zero template bloat.",
    icon: Zap,
  },
  {
    title: "Website Maintenance & Support",
    desc: "Ongoing technical assistance, periodic dependency updates and security monitoring after launch.",
    icon: Wrench,
  },
];

const processSteps = [
  { num: "01", name: "Requirement Understanding", desc: "Define goals, audience, and technical scope." },
  { num: "02", name: "Structure & Planning", desc: "Plan page architecture and user journeys." },
  { num: "03", name: "UI/UX Design", desc: "Create high-fidelity wireframes and visual design." },
  { num: "04", name: "Development", desc: "Hand-code responsive, clean frontend & backend." },
  { num: "05", name: "Testing & Quality Assurance", desc: "Verify responsiveness, speed and integrations." },
  { num: "06", name: "Deployment & Launch", desc: "Deploy to production with SSL and custom DNS." },
  { num: "07", name: "Support & Maintenance", desc: "Provide continuous support and improvements." },
];

const techStack = [
  "HTML, CSS and JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

const whyChoosePoints = [
  {
    title: "Business-Focused Development",
    desc: "We focus on solving your operational challenges and helping you connect with real customers, not just visual decoration.",
  },
  {
    title: "Responsive User Experiences",
    desc: "Every layout is meticulously designed and tested for fluid touch interaction across modern smartphones and tablets.",
  },
  {
    title: "Custom Functionality",
    desc: "Whether you need specialized lead calculators, client portals or inventory sync, we code exactly what you require.",
  },
  {
    title: "Scalable Architecture",
    desc: "Built on clean Next.js and Node.js frameworks that can easily scale as your business catalog and traffic grow.",
  },
  {
    title: "Transparent Project Communication",
    desc: "Direct communication with lead engineers. Clear milestone updates, honest timelines and zero technical jargon.",
  },
  {
    title: "Post-Launch Assistance",
    desc: "We provide structured handover, source code ownership, and agreed maintenance support to keep your site running smoothly.",
  },
];

const webDevFaqs = [
  {
    q: "How long does it take to develop a business website?",
    a: "Standard business websites typically take between 2 to 4 weeks depending on the number of pages, custom functional requirements, and content readiness. More complex e-commerce platforms or web applications may take 4 to 8 weeks. We provide clear milestone timelines before beginning.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes. All websites developed by MK Digital Nexus are built mobile-first. We rigorously test across iOS, Android, tablets, and desktop resolutions to ensure seamless touch navigation, readable typography, and fast loading.",
  },
  {
    q: "Can I request custom features?",
    a: "Absolutely. Because we write custom code using Next.js and React rather than relying on restrictive templates, we can engineer bespoke calculators, multi-step inquiry flows, member portals, and specialized integrations tailored to your business.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes. Every website includes foundational technical SEO: semantic HTML5 tags, fast Core Web Vitals, automated XML sitemaps, Open Graph preview tags, and structured JSON-LD schema to help search engines index your content correctly.",
  },
  {
    q: "Can I manage website content after launch?",
    a: "Yes. Depending on your preference, we can integrate an intuitive content dashboard or provide structured, documented updates so you can easily update text, products, and images.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. We configure reliable global edge hosting with SSL certificates and custom domain connection. We also offer ongoing maintenance arrangements for software updates, security monitoring, and technical assistance.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can modernize outdated or sluggish websites by upgrading the design system, improving mobile responsiveness, rebuilding the architecture in Next.js, and preserving your existing search engine rankings.",
  },
];

export default function WebDevelopmentServicePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development Services",
    "serviceType": "Web Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MK Digital Nexus",
      "url": "https://www.mkdigitalnexus.in",
      "telephone": "+916353121773",
      "email": "hello@mkdigitalnexus.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Shyam Apt, Shop No. 5, Near Vanzari Chowk, Nava Nagarwada, Talav Gate",
        "addressLocality": "Junagadh",
        "addressRegion": "Gujarat",
        "postalCode": "362001",
        "addressCountry": "IN"
      }
    },
    "description": "Professional, responsive and performance-focused websites developed with Next.js, React, and modern web standards by MK Digital Nexus.",
    "areaServed": "Worldwide",
    "url": "https://www.mkdigitalnexus.in/services/web-development"
  };

  return (
    <>
      <title>Website Development Services | MK Digital Nexus</title>
      <meta
        name="description"
        content="Get professional business websites, e-commerce platforms and custom web applications developed by MK Digital Nexus."
      />
      <meta
        name="keywords"
        content="website development services, custom business website, Next.js web development, e-commerce website development, professional web developers, MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/services/web-development" />

      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />

      {/* =========================================================================
          1. HERO SECTION (COMMON INNER PAGE HERO)
          ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Website Development" },
        ]}
        eyebrow="WEBSITE DEVELOPMENT"
        heading="Websites Built to Make Your Business Stand Out."
        highlightText="Stand Out."
        description="We design and develop professional, responsive and performance-focused websites that help businesses establish their online presence, showcase their services and connect with potential customers."
        primaryCta={{
          text: "Start Your Website Project",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Explore Our Work",
          href: "/portfolio",
        }}
        visual={<WebDevHeroVisual />}
      />

      {/* =========================================================================
          2. INTRODUCTION — MORE THAN JUST A WEBSITE
          ========================================================================= */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                <span>STRATEGIC DIGITAL FOUNDATION</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Your Website Is Where Your <span className="text-[#2563EB]">Digital Presence Begins.</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
                In today&apos;s digital market, your website is often the very first interaction a customer has with your business. Rather than treating it as an afterthought or a static page, we approach website development as an investment in your company&apos;s commercial infrastructure.
              </p>

              <p className="text-[14.5px] leading-relaxed text-[#667085]">
                A professionally engineered website gives your business credibility, explains your unique value proposition clearly, and gives prospects the confidence to take action.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0D1B2A]">Credibility & Brand</h3>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Establish a polished, professional identity that builds immediate trust with first-time visitors.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0D1B2A]">Product & Service Showcase</h3>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Display your products, industrial capabilities, or specialized services with structured clarity.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0D1B2A]">Inquiry Generation</h3>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Turn passive visitors into high-intent customer leads through strategic calls-to-action and forms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Globe className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0D1B2A]">Always-On Information</h3>
                <p className="text-[13px] text-[#667085] leading-relaxed">
                  Provide prospective clients with answers, directions, contact methods, and solutions 24 hours a day.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE BUILD (6 DISTINCT SERVICE CATEGORIES)
          ========================================================================= */}
      <section className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>CORE CATEGORIES</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              What We Build: <span className="text-[#2563EB]">Tailored Solutions for Every Need.</span>
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
              Different businesses have different commercial goals. We craft websites specifically aligned with your industry, customer audience, and functional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whatWeBuildCategories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-7 shadow-2xs hover:border-[#CBD5E1] hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] text-[#2563EB]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10.5px] font-mono font-medium text-[#667085] bg-[#F1F3F7] px-2.5 py-0.5 rounded border border-[#E7EAF0]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-bold text-[#0D1B2A] tracking-[-0.015em]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#667085]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR DEVELOPMENT CAPABILITIES (10 STRUCTURED CAPABILITIES)
          ========================================================================= */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Engineering Capabilities Built for <span className="text-[#2563EB]">Long-Term Reliability.</span>
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
              Every website we build is developed using modern web engineering standards, ensuring high security, responsive views and clean architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {capabilities.map((cap) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-5 rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] flex items-start gap-4 hover:bg-white hover:border-[#CBD5E1] transition-all"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E7EAF0] text-[#2563EB] shadow-2xs mt-0.5">
                    <CapIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-[15.5px] font-bold text-[#0D1B2A] tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] text-[#667085] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. OUR WEBSITE DEVELOPMENT PROCESS (7 STAGES LINKED TO /process)
          ========================================================================= */}
      <section className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                <span>STRUCTURED WORKFLOW</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Our Website Development <span className="text-[#2563EB]">Process.</span>
              </h2>

              <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
                A disciplined, milestone-driven approach that keeps you involved and ensures projects deliver on time and to specifications.
              </p>
            </div>

            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              <span>Explore Full 7-Stage Process Page</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((stp) => (
              <div
                key={stp.num}
                className="p-5 rounded-xl border border-[#E7EAF0] bg-white flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="text-[12px] font-mono font-bold text-[#2563EB] mb-2">
                    PHASE {stp.num}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0D1B2A] leading-snug">
                    {stp.name}
                  </h3>
                </div>
                <p className="mt-3 text-[12.5px] text-[#667085] leading-relaxed border-t border-[#F1F3F7] pt-2.5">
                  {stp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. TECHNOLOGY STACK
          ========================================================================= */}
      <section className="relative bg-white py-14 sm:py-18 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] font-bold text-[#667085]">
              MODERN TECH STACK
            </span>
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#0D1B2A] tracking-tight mt-1">
              Engineered with Proven, Modern Technologies
            </h2>
            <p className="text-[14px] text-[#667085] mt-2">
              We hand-code using industry-standard frameworks for sub-second performance, security and zero template lock-in.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0] text-[13px] font-semibold text-[#0D1B2A] shadow-2xs hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. WHY CHOOSE MK DIGITAL NEXUS?
          ========================================================================= */}
      <section className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>THE MK DIGITAL NEXUS DIFFERENCE</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Built Around Your Business, <span className="text-[#2563EB]">Not Just a Template.</span>
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-[#667085]">
              We don&apos;t install generic pre-made themes with hundreds of unused lines of code. Every website is built purposefully around your brand and conversion objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((pt) => (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-white border border-[#E7EAF0] shadow-2xs space-y-2 hover:border-[#CBD5E1] transition-all"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h3 className="text-[16px] font-bold text-[#0D1B2A] tracking-tight pt-1">
                  {pt.title}
                </h3>
                <p className="text-[13.5px] text-[#667085] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. FREQUENTLY ASKED QUESTIONS (ACCORDION)
          ========================================================================= */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Got Questions? <span className="text-[#2563EB]">We Have Answers.</span>
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Clear answers regarding timelines, technical capabilities, SEO, and ongoing maintenance.
            </p>
          </div>

          <div className="space-y-3.5">
            {webDevFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-[#E7EAF0] bg-white overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#F8FAFC]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#0D1B2A] tracking-[-0.01em]">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[#667085] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#2563EB] text-white border-[#2563EB]" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-4 sm:px-5 pb-5 pt-1 text-[14px] leading-relaxed text-[#667085] border-t border-[#F1F3F7]"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CONVERSION CTA SECTION
          ========================================================================= */}
      <section className="relative bg-[#0D1B2A] text-white py-14 sm:py-18 lg:py-20 border-t border-[#1E293B] overflow-hidden text-center">
        {/* Subtle background radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            <span>START YOUR PROJECT</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.2]">
            Ready to Build Your Business Website?
          </h2>

          <p className="mt-3.5 text-[14.5px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Let&apos;s discuss your requirements and create a website that represents your business professionally and supports your next stage of growth.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(37,99,235,0.45)] cursor-pointer"
            >
              <span>Get a Project Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent text-white border border-white/20 text-[14px] font-semibold transition-all duration-200 hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>

          <p className="mt-6 text-[12px] text-slate-400">
            Clear milestones • 100% code ownership • Direct developer communication
          </p>
        </div>
      </section>
    </>
  );
}
