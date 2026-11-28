"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Target, 
  Cpu,
  Globe
} from "lucide-react";

const featuredStudies = [
  {
    id: "sasuma-spices",
    title: "Shasuma Spices",
    category: "Agro-Commodity & Spice Brokerage",
    sector: "Agriculture, FMCG & Wholesale Mandi Trading",
    url: "https://www.shasumaspices.in",
    liveUrlText: "shasumaspices.in",
    img: "/images/portfolio/sasuma-spices.png",
    overview:
      "Premier spice commission agency and agricultural commodity trading portal based in Unjha, Gujarat — Asia's largest trading hub for cumin, fennel, and coriander seeds.",
    challenge:
      "Institutional commodity buyers and wholesale spice exporters needed real-time APMC market rate transparency, verifiable seed grading parameters, and a direct RFQ procurement pipeline connecting directly to active trade brokers.",
    approach:
      "Engineered a high-trust digital portal featuring Unjha APMC market credentials, comprehensive spice and seed grading specifications, and a direct one-touch WhatsApp RFQ procurement pipeline.",
    features: [
      "Technical seed grading and moisture content specification sheets",
      "Direct commodity procurement RFQ generator for bulk spice buyers",
      "Official Unjha APMC market license and trade credibility showcase",
      "Instant one-touch mobile WhatsApp and telephone broker routing",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Schema.org", "Edge CDN"],
    caseStudySlug: "sasuma-spices",
  },
  {
    id: "branded-collections",
    title: "Branded Collections",
    category: "E-Commerce & Digital Storefront",
    sector: "Direct-to-Consumer Fashion & Apparel",
    url: "https://brandedcollections.in",
    liveUrlText: "brandedcollections.in",
    img: "/images/portfolio/branded-collections.png",
    overview:
      "Full-scale direct-to-consumer fashion e-commerce storefront retailing curated modern apparel and seasonal styles with pan-India automated courier dispatch.",
    challenge:
      "Shoppers on mobile 4G networks experienced bounce rates during multi-variant sizing selection and cart checkout. The storefront needed zero-lag catalog browsing, fast image loading, and instant UPI/Card payments.",
    approach:
      "Architected a headless Next.js commerce storefront with reactive client-side filters, persistent cart state, edge caching, and Razorpay payment gateway integration.",
    features: [
      "Real-time instant size and variant filtering with live stock status",
      "Zero-lag slide-over shopping bag with dynamic cart calculation",
      "Direct Razorpay gateway integration supporting instant UPI & Cards",
      "Automated order dispatch confirmation and customer digital receipts",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Razorpay API", "Redux Toolkit", "Vercel"],
    caseStudySlug: "branded-collections",
  },
  {
    id: "somnathnx",
    title: "SomnathNX",
    category: "Ethnic Retail & Fashion E-Commerce",
    sector: "Textiles, Sarees & Designer Ethnic Wear",
    url: "https://somnathnx.com",
    liveUrlText: "somnathnx.com",
    img: "/images/portfolio/somnathnx.png",
    overview:
      "Full-fledged retail storefront specializing in traditional designer sarees, festive lehengas, and contemporary ethnic wear with seamless pan-India logistics.",
    challenge:
      "Ethnic fashion products have rich visual details (embroidery, fabric weaves) that require high-resolution imagery without sacrificing fast load speeds on low-bandwidth mobile devices.",
    approach:
      "Deployed an image-optimized Next.js architecture with next-gen WebP compression, smart collection filtering, real-time cart state management, and unified payment processing.",
    features: [
      "High-definition fabric zoom and color variant selector",
      "Fast category filters for fabrics, occasions, and price ranges",
      "Secure online checkout with UPI, NetBanking, and Card support",
      "Real-time order dispatch notifications and courier tracking",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Payment Gateways", "Cloud Edge CDN"],
    caseStudySlug: "somnathnx",
  },
  {
    id: "book",
    title: "MK Digital Nexus Book Engine",
    category: "Custom Web Application & Presentation Engine",
    sector: "Digital Products & Interactive Media",
    url: "https://book.mkdigitalnexus.in",
    liveUrlText: "book.mkdigitalnexus.in",
    img: "/images/portfolio/book.png",
    overview:
      "Interactive 3D flipbook digital presentation engine engineered to showcase high-fidelity corporate proposals, client portfolios, and interactive marketing decks.",
    challenge:
      "Static PDF pitch decks suffer from awkward mobile zooming, long download times, and lack of client engagement tracking. The agency required an instant, interactive web-native viewer.",
    approach:
      "Developed a GPU-accelerated client-side flipbook web application featuring realistic page curls, interactive hot-spots, zero download lag, and responsive viewport adapting.",
    features: [
      "Smooth GPU-accelerated 3D page flip and turn animations",
      "Interactive embedded video, link hotspots, and inquiry CTAs",
      "Instant sub-second loading without downloading heavy PDF files",
      "Device-adaptive full-screen presentation mode for sales pitches",
    ],
    techStack: ["Next.js", "HTML5 Canvas", "Tailwind CSS", "TypeScript", "Edge Hosting"],
    caseStudySlug: "book",
  },
  {
    id: "saheli-shrungar",
    title: "Saheli Shrungar",
    category: "Specialty Retail & Costume Rental Storefront",
    sector: "Kids Fancy Dress, Costumes & Event Apparel",
    url: "https://saheli-shrungar.vercel.app",
    liveUrlText: "saheli-shrungar.vercel.app",
    img: "/images/portfolio/saheli-shrungar.png",
    overview:
      "Dedicated digital catalog and ordering portal for kids fancy dress costumes, historical character attire, traditional dance wear, and event rental packages.",
    challenge:
      "School events and annual functions create sudden surges in specific costume demands. Parents needed quick age-wise sizing charts, costume accessory checklists, and rapid booking confirmation.",
    approach:
      "Designed a vibrant, family-friendly e-commerce catalog featuring age-graded costume filtering, visual accessory checklists, and a fast inquiry-to-booking conversion funnel.",
    features: [
      "Age-wise and theme-based costume filtering (historical, animals, professions)",
      "Complete outfit accessory checklist and sizing guide",
      "Direct WhatsApp booking button for instant event reservations",
      "High-speed mobile-first design optimized for on-the-go parents",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    caseStudySlug: "saheli-shrungar",
  },
  {
    id: "dr-jhatka",
    title: "Dr. Jhatka Medicare",
    category: "Clinical Healthcare & Interactive Web Application",
    sector: "Medical Practice & Patient Booking",
    url: "https://www.drjhatka.com",
    liveUrlText: "drjhatka.com",
    img: "/images/portfolio/dr-jhatka.png",
    overview:
      "Engaging, modern clinical medical practice portal featuring interactive patient health services, specialized treatment catalogs, and direct OPD appointment scheduling.",
    challenge:
      "Traditional clinic websites are often clinical and intimidating for patients, leading to low engagement and missed appointment follow-ups. The clinic required an approachable, animated, and structured booking flow.",
    approach:
      "Built a dynamic web application combining fluid micro-interactions, clear disease treatment FAQs, accessible patient onboarding forms, and automated consultation appointment routing.",
    features: [
      "Interactive treatment catalog with symptoms and care roadmap",
      "One-click OPD appointment booking and calendar slot selection",
      "Accessible responsive interface with smooth visual guidance",
      "Direct clinical inquiry routing to practice reception staff",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "REST APIs", "Vercel"],
    caseStudySlug: "dr-jhatka",
  },
];

export function FeaturedCaseStudies() {
  return (
    <section
      id="featured-case-studies"
      className="relative bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            1. SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>BEHIND THE PROJECTS</span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            Beyond the Screens. Into the Solutions.
          </h2>

          <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            Every project has a purpose. Explore how we approach different business challenges and transform requirements into practical digital experiences.
          </p>
        </div>

        {/* =========================================
            2. ALTERNATING EDITORIAL CASE STUDY CARDS
           ========================================= */}
        <div className="divide-y divide-[#E7EAF0]">
          {featuredStudies.map((study, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={study.id}
                className="py-10 sm:py-14 first:pt-0 last:pb-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isReversed ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div>
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#2563EB]/8 text-[11px] font-semibold text-[#2563EB] border border-[#2563EB]/15">
                          {study.category}
                        </span>
                        <span className="text-[11.5px] font-medium text-[#667085]">
                          {study.sector}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#0D1B2A] leading-snug">
                        {study.title}
                      </h3>

                      {/* Overview */}
                      <p className="mt-3 text-[14px] sm:text-[14.5px] leading-relaxed text-[#667085]">
                        {study.overview}
                      </p>

                      {/* Challenge & Approach Blocks */}
                      <div className="mt-5 space-y-3">
                        <div className="p-3.5 rounded-xl bg-white border border-[#E7EAF0] shadow-2xs">
                          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] mb-1">
                            <Target className="h-3.5 w-3.5 text-[#2563EB]" />
                            <span>Business Challenge</span>
                          </div>
                          <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#667085]">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white border border-[#E7EAF0] shadow-2xs">
                          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] mb-1">
                            <Cpu className="h-3.5 w-3.5 text-[#2563EB]" />
                            <span>Our Approach</span>
                          </div>
                          <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#667085]">
                            {study.approach}
                          </p>
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div className="mt-5">
                        <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0D1B2A] mb-2.5 flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-[#2563EB]" />
                          <span>Key Features Shipped</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#475467]">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] mt-0.5 shrink-0" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-5 pt-4 border-t border-[#E7EAF0] flex flex-wrap items-center gap-1.5">
                        <span className="text-[11.5px] font-semibold text-[#667085] mr-1">Stack:</span>
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-white border border-[#E7EAF0] text-[11px] font-mono text-[#0D1B2A]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors shadow-xs"
                      >
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>

                      <Link
                        href={`/portfolio/${study.caseStudySlug}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Browser Mockup Visual Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="group rounded-2xl border border-[#E7EAF0] bg-white overflow-hidden shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)] transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-xl">
                      {/* Browser Window Header */}
                      <div className="h-8 bg-[#F8FAFC] border-b border-[#E7EAF0] px-4 flex items-center justify-between text-[11px] text-[#667085]">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/60" />
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#667085] bg-white px-3 py-0.5 rounded-md border border-[#E7EAF0]">
                          <Globe className="h-3 w-3 text-[#2563EB]" />
                          <span>{study.liveUrlText}</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#10B981] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded">
                          HTTPS
                        </span>
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative aspect-[16/10.5] overflow-hidden bg-[#F1F5F9]">
                        <img
                          src={study.img}
                          alt={`${study.title} verified production deployment`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Mockup Footer Details */}
                      <div className="p-3.5 bg-white border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] text-[#667085]">
                        <span className="flex items-center gap-1.5 font-medium text-[#0D1B2A]">
                          <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                          Verified Client Deployment
                        </span>
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Open Live Site</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCaseStudies;
