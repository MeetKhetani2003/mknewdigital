import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  Gauge,
  Cpu,
  Globe,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "Custom Website Development Company | Next.js & React | MK Digital Nexus",
  description:
    "We engineer fast, modern, and SEO-tuned business websites with Next.js and React. Sub-second load times, mobile-first UX, and conversion-focused architecture.",
  keywords: [
    "custom website development company",
    "Next.js website developers",
    "corporate website design",
    "responsive business web development",
    "lead generation websites",
    "website redesign services",
    "React website development",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/web-development",
  },
  openGraph: {
    title: "Custom Website Development Company | Next.js & React | MK Digital Nexus",
    description:
      "We engineer fast, modern, and SEO-tuned business websites with Next.js and React. Sub-second load times, mobile-first UX, and conversion-focused architecture.",
    url: "https://www.mkdigitalnexus.in/services/web-development",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const liveProjects = [
  {
    name: "Anvil Techno Forge",
    category: "Industrial & Manufacturing",
    url: "https://www.anviltechnoforge.co.in",
    img: "/websites/AnvilTechno.png",
    tech: "Next.js • Tailwind CSS • SEO Ready",
  },
  {
    name: "Ravi Prakash Industries",
    category: "Manufacturing & Export",
    url: "https://www.raviprakashindustries.in/",
    img: "/websites/RaviprakashIndustries.png",
    tech: "React • Responsive UI • WhatsApp Leads",
  },
  {
    name: "BSR Worldwide",
    category: "Global Logistics & Export",
    url: "https://www.bsrworldwide.in/",
    img: "/websites/bsr.png",
    tech: "Next.js • Multilingual • Fast Load",
  },
  {
    name: "Groovy Cafe",
    category: "Hospitality & Food Service",
    url: "https://www.groovycafe.in/",
    img: "/websites/GroovyCafe.png",
    tech: "Mobile-First • Menu Showcase • Directions",
  },
  {
    name: "Shynex Detailing",
    category: "Automotive Services",
    url: "https://www.shynexdetailing.ca/",
    img: "/websites/shynex.png",
    tech: "Custom UX • Direct Booking • 99+ Speed",
  },
  {
    name: "RSDM Institute",
    category: "Education & Academy",
    url: "https://www.rsdminstitute.com/",
    img: "/websites/rsdm.png",
    tech: "Multi-Page • Course Catalog • Admissions",
  },
];

const technicalPillars = [
  {
    icon: Zap,
    label: "01",
    title: "Sub-Second Next.js Speed",
    desc: "Built with Next.js Server Components and edge caching to achieve 99+ Google PageSpeed scores, reducing bounce rates and ranking higher on Google.",
  },
  {
    icon: Search,
    label: "02",
    title: "Technical SEO Built-In",
    desc: "Semantic HTML5, automated XML sitemaps, JSON-LD Schema markup, and OpenGraph tags to ensure every page is indexed and understood by search engines.",
  },
  {
    icon: Smartphone,
    label: "03",
    title: "Fluid Mobile-First UX",
    desc: "Engineered specifically for touchscreens and variable network conditions. Responsive fluid layouts that look exceptional from smartphones to 4K displays.",
  },
  {
    icon: ShieldCheck,
    label: "04",
    title: "Conversion Lead Funnels",
    desc: "Strategic CTA placement, click-to-WhatsApp triggers, interactive Google Maps directions, and friction-free inquiry forms that capture high-intent inquiries.",
  },
];

const websiteTypes = [
  {
    title: "Corporate & Industrial Websites",
    desc: "Multi-page corporate platforms designed to establish brand authority, showcase machinery, certifications, and international capabilities.",
    features: ["Product catalog with technical specs", "Company history & credentials", "Inquiry quote request forms"],
  },
  {
    title: "High-Converting Lead Gen Sites",
    desc: "Dedicated conversion landing pages built for marketing campaigns and service providers who need direct calls and form inquiries.",
    features: ["Friction-free lead capture forms", "Direct WhatsApp & click-to-call", "Trust metrics & customer proof"],
  },
  {
    title: "Portfolio & Brand Showcases",
    desc: "Visually captivating digital portfolios tailored for architects, interior designers, agencies, and creative professionals.",
    features: ["High-resolution image galleries", "Case study breakdowns", "Smooth interactive animations"],
  },
  {
    title: "Informational & Multi-Page Portals",
    desc: "Comprehensive multi-page websites for educational institutes, healthcare providers, and organizations with deep content.",
    features: ["Modular page structure", "Searchable content sections", "Fast client-side routing"],
  },
];

const deliveryProcess = [
  {
    step: "01",
    title: "Requirement Discovery",
    desc: "We analyze your business goals, target audience, brand identity, and competitor landscape to define the technical scope.",
  },
  {
    step: "02",
    title: "Information Architecture & Wireframing",
    desc: "We plan a clear user journey, page hierarchy, and conversion-focused wireframes before writing a single line of code.",
  },
  {
    step: "03",
    title: "Custom Next.js Development",
    desc: "We develop your website using clean, hand-coded Next.js and Tailwind CSS with zero bloat and sub-second performance.",
  },
  {
    step: "04",
    title: "QA & Lighthouse Audit",
    desc: "Rigorous testing across iOS, Android, and modern desktop browsers, verifying 99+ PageSpeed scores and on-page SEO.",
  },
  {
    step: "05",
    title: "Cloud Launch & Handover",
    desc: "We deploy to production on edge cloud servers, configure domain DNS, SSL, Google Search Console, and deliver project files.",
  },
];

const webFaqs = [
  {
    q: "How long does it take to develop a custom website?",
    a: "Standard business websites typically take 7 to 14 days, while complex multi-page corporate portals take 2 to 4 weeks depending on the number of pages, custom features, and content readiness.",
  },
  {
    q: "Why do you develop with Next.js instead of WordPress?",
    a: "Next.js websites load up to 10x faster than traditional WordPress sites, have zero vulnerable plugins, provide superior Google Core Web Vitals scores, and deliver significantly higher conversion rates.",
  },
  {
    q: "Will my website work properly on mobile phones and tablets?",
    a: "Yes. All our websites are built mobile-first. We rigorously test layouts, tap targets, navigation, and font readability across iPhones, Android devices, iPads, and desktop screens.",
  },
  {
    q: "Do you include search engine optimization (SEO)?",
    a: "Yes. Every website we build includes foundational technical SEO: semantic HTML5, title and meta tags, OpenGraph social preview tags, automated XML sitemaps, robots.txt, and JSON-LD schema.",
  },
  {
    q: "Can you redesign my existing slow or outdated website?",
    a: "Yes. We can review your existing website, modernize the visual design, rebuild the architecture in Next.js, and preserve your existing Google SEO rankings through proper 301 redirects.",
  },
  {
    q: "Will I own the source code and domain?",
    a: "Yes. You retain 100% full ownership of your domain, assets, and source code. We provide complete repository access and deployment configurations upon project completion.",
  },
];

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Development",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Custom Website Development Services",
    description:
      "High-performance custom website development using Next.js and React. Built for sub-second speeds, Google SEO ranking, and lead generation.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: webFaqs.map((faq) => ({
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
          1. PERFORMANCE-FIRST HERO SECTION
          ========================================================================= */}
      <section className="relative bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 border-b border-[#E7EAF0] overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2563EB]/6 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
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
                Website Development
              </li>
            </ol>
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Next.js & React Engineering</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                Fast, High-Converting Websites Engineered for{" "}
                <span className="text-[#2563EB]">Modern Businesses.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                We build custom, lightning-fast business websites using modern Next.js technology. 
                Engineered for sub-second page speed, Google search visibility, and maximum inquiry conversion.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Discuss Your Website</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#live-work"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>View Live Deployments</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> 99+ Google PageSpeed Score
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> On-Page SEO Standard
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> 100% Code Ownership
                </span>
              </div>
            </div>

            {/* Right Metric & Speed Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7EAF0] bg-[#FFFFFF] p-6 sm:p-7 shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)] relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                      <Gauge className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-[14px] font-bold text-[#0D1B2A]">Core Web Vitals Benchmark</h2>
                      <p className="text-[11.5px] text-[#667085]">Verified Next.js Production Audit</p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    PASS
                  </span>
                </div>

                {/* Score Rings / Metrics */}
                <div className="grid grid-cols-3 gap-3 my-5 text-center">
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                    <div className="text-[24px] font-bold text-[#10B981]">99</div>
                    <div className="text-[11px] font-medium text-[#667085] mt-0.5">Performance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                    <div className="text-[24px] font-bold text-[#10B981]">100</div>
                    <div className="text-[11px] font-medium text-[#667085] mt-0.5">SEO Score</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                    <div className="text-[24px] font-bold text-[#10B981]">0.7s</div>
                    <div className="text-[11px] font-medium text-[#667085] mt-0.5">Load Time</div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2 text-[12px] text-[#0D1B2A]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">Framework</span>
                    <span className="font-semibold">Next.js 15 (App Router)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">Styling</span>
                    <span className="font-semibold">Tailwind CSS (Zero Runtime)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8FAFC]">
                    <span className="text-[#667085]">Hosting</span>
                    <span className="font-semibold">Cloud Edge CDN</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. LIVE VERIFIED CLIENT DEPLOYMENTS SHOWCASE
          ========================================================================= */}
      <section id="live-work" className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Proven Deliveries</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Live Production Websites We Have Engineered.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Real deployments built for real businesses. Inspect our live production work across industrial manufacturing, corporate logistics, and consumer brands.
            </p>
          </div>

          {/* Grid of Verified Live Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {liveProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(37,99,235,0.12)] flex flex-col justify-between"
              >
                {/* Browser Mockup Chrome Header */}
                <div>
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F8FAFC] border-b border-[#E7EAF0]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                    </div>
                    <span className="text-[10px] font-mono text-[#667085] truncate max-w-[180px]">
                      {project.url.replace("https://", "").replace("www.", "")}
                    </span>
                    <ExternalLink className="h-3 w-3 text-[#667085] group-hover:text-[#2563EB] transition-colors" />
                  </div>

                  {/* Screenshot Image */}
                  <div className="relative aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
                    <Image
                      src={project.img}
                      alt={`${project.name} live website screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Info */}
                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-[17px] font-bold text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-5 py-3 bg-[#F8FAFC] border-t border-[#E7EAF0] flex items-center justify-between text-[11.5px] text-[#667085]">
                  <span>{project.tech}</span>
                  <span className="font-semibold text-[#2563EB] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Visit ↗
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. CORE TECHNICAL PILLARS
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Engineering Quality</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Why Our Websites Outperform Standard Templates.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              We don&apos;t build slow, bloated WordPress sites. We craft clean, custom-coded Next.js web applications engineered for speed, search visibility, and frictionless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 flex flex-col justify-between transition-all duration-200 hover:border-[#2563EB]/35 hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-xl bg-[#2563EB]/8 text-[#2563EB] flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#667085] bg-[#F5F7FA] px-2 py-0.5 rounded">
                        {pillar.label}
                      </span>
                    </div>

                    <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-[13px] leading-relaxed text-[#667085]">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. TYPES OF WEBSITES WE BUILD
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Tailored Solutions</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Solutions Built Around Your Business Model.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Whether you are an industrial exporter needing an authoritative corporate catalog or a local business wanting more phone calls, we craft the exact digital experience you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {websiteTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-7 transition-all hover:border-[#2563EB]/35 hover:shadow-xs"
              >
                <h3 className="text-[19px] font-bold text-[#0D1B2A] mb-2">
                  {type.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#667085] mb-4">
                  {type.desc}
                </p>
                <ul className="space-y-2 border-t border-[#F1F5F9] pt-4">
                  {type.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[12.5px] text-[#0D1B2A]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. 5-STAGE DELIVERY PROCESS
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Transparent Execution</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              How We Take Your Website From Concept to Launch.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              A milestone-driven engineering framework that ensures speed, absolute quality, and zero unexpected surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {deliveryProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#E7EAF0] bg-white p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-[#667085]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. SERVICE-SPECIFIC WEB DEVELOPMENT FAQS
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Web Development FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About Website Projects.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Clear answers regarding timelines, Next.js technology choices, responsive testing, and source code ownership.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need an e-commerce store or custom app instead?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  Check our dedicated solutions for online shopping and custom software.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/ecommerce-development" className="hover:underline flex items-center gap-1">
                    Explore E-commerce Development →
                  </Link>
                  <Link href="/services/custom-web-applications" className="hover:underline flex items-center gap-1">
                    Explore Custom Web Applications →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {webFaqs.map((faq, i) => (
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
          7. DEDICATED CLOSING CTA
          ========================================================================= */}
      <section className="bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Ready to Build?</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Let&apos;s Build a High-Performance Website for Your Business.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Schedule a discussion to review your requirements, explore suitable designs, and receive a clear milestone roadmap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss Your Website</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20website%20development%20project."
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
