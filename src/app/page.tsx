"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, Zap, CheckCircle2 } from "lucide-react";
import { projects } from "@/utils/projectsData";

const services = [
  {
    title: "Graphic Design",
    desc: "Scroll-stopping thumbnails, social creatives, and brand assets built for click-through.",
    img: "/images/service-design.jpg",
    tag: "Design",
  },
  {
    title: "Website Development",
    desc: "Static sites, multi-page storefronts, and e-commerce engines — fast, SEO-ready, conversion-tuned.",
    img: "/images/service-webdev.jpg",
    tag: "Web",
  },
  {
    title: "AI Video Reels",
    desc: "Scripted, voiced, edited and exported in 4K — ready for Instagram, YouTube Shorts, and Meta ads.",
    img: "/images/service-video.jpg",
    tag: "Video",
  },
  {
    title: "Digital Marketing",
    desc: "Paid funnels, SEO foundations, and analytics dashboards that turn traffic into revenue.",
    img: "/images/service-marketing.jpg",
    tag: "Growth",
  },
];

const homepageShowcase = [
  {
    title: "E-commerce Solutions",
    desc: "High-performance storefronts and catalog sites built for conversions and lightning-fast checkout.",
    items: projects.filter((p) => ["somnathnx", "branded-collections", "childrens-ecommerce"].includes(p.id))
  },
  {
    title: "Industrial & Manufacturing",
    desc: "B2B catalog systems, technical spec directories, and quote request setups built for industrial operators.",
    items: projects.filter((p) => ["daftari-industries", "gwgc", "green-wave-packaging"].includes(p.id))
  },
  {
    title: "Healthcare Portals",
    desc: "Reassuring medical directory portals, clinic profiles, and direct WhatsApp patient booking routers.",
    items: projects.filter((p) => ["arshad-dr", "varun-dr", "dr-jhatka"].includes(p.id))
  },
  {
    title: "Corporate & Business Services",
    desc: "Modern service catalogs, brand presentation sites, and optimized lead intake forms.",
    items: projects.filter((p) => ["shynex-detailing", "mashru", "palera-design"].includes(p.id))
  }
];



const homepageTestimonials = projects.map((p) => ({
  quote: p.testimonial.quote,
  name: p.testimonial.clientName,
  role: p.testimonial.clientRole,
  initials: p.testimonial.initials,
  projectId: p.id
}));

const stats = [
  { value: 180, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 2, suffix: " hrs", label: "Response SLA" },
];

const trustedLogos = ["Lumen", "Aria", "Pulse", "Meridian", "Nova", "Orbit", "Cove", "Halo"];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % homepageTestimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + homepageTestimonials.length) % homepageTestimonials.length);
  };

  // Autoplay functionality (advances slide every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);
  return (
    <>
      {/* HERO - PREMIUM BOUTIQUE (BRAND THEME) */}
      <section className="relative w-full min-h-[90vh] bg-offwhite flex flex-col justify-center overflow-hidden pt-32 pb-20">
        
        {/* Subtle, restrained lighting/pattern */}
        <div className="absolute inset-0 bg-[url('/images/team-office.jpg')] bg-cover bg-center opacity-[0.03] mix-blend-multiply grayscale" />
        <div className="grid-pattern absolute inset-0 opacity-40 mix-blend-overlay" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left: Refined Typography & Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
            
            <Reveal y={20}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-navy-900/20" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy-900/50">
                  Website Development Service & Digital Marketing Agency
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <h1 className="text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl md:text-[80px] leading-[1.05]">
                Elevating brands <br />
                through <span className="font-serif italic font-normal text-accent">extraordinary</span> <br />
                digital craft.
              </h1>
            </Reveal>

            <Reveal delay={0.2} y={20}>
              <p className="mt-10 text-[17px] font-medium leading-[1.8] text-muted max-w-[540px]">
                Bespoke website development service in Junagadh and Rajkot. We meticulously design and engineer custom SEO frameworks, AI social marketing, and graphic design experiences near you.
              </p>
            </Reveal>

            <Reveal delay={0.3} y={20}>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative flex h-14 w-full sm:w-auto items-center justify-between gap-8 rounded-none border border-navy-900 bg-navy-900 px-8 text-[13px] font-bold uppercase tracking-widest text-white transition-all hover:bg-accent hover:border-accent"
                >
                  <span>Initiate Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="group flex h-14 w-full sm:w-auto items-center justify-center gap-4 rounded-none border border-navy-900/20 bg-transparent px-8 text-[13px] font-bold uppercase tracking-widest text-navy-900 transition-all hover:border-navy-900/50 hover:bg-navy-900/5"
                >
                  <span>Explore Archive</span>
                </Link>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} y={20}>
              <div className="mt-20 flex items-center gap-12 border-t border-navy-900/10 pt-8 w-full max-w-[500px]">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900/40 mb-2">Location</div>
                  <div className="text-[13px] font-medium text-navy-900">Junagadh / Global</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900/40 mb-2">Availability</div>
                  <div className="text-[13px] font-medium text-navy-900 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Limited Capacity
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Restrained Editorial Imagery */}
          <div className="w-full lg:w-5/12 hidden lg:block relative">
            <Reveal delay={0.3} y={40} className="w-full">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-white border border-slate-200 p-4 shadow-sm">
                <div className="w-full h-full relative overflow-hidden bg-navy-900">
                  <div className="absolute inset-0 bg-navy-900/20 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                  <img 
                    src="/images/hero-mockup.jpg" 
                    alt="Editorial Project Preview" 
                    className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] hover:scale-105 hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                  />
                  
                  {/* Subtle editorial overlay text */}
                  <div className="absolute bottom-6 left-6 z-20 bg-navy-900/30 backdrop-blur-md px-4 py-3 border border-white/10 transition-colors hover:bg-navy-900/50">
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 mb-1">Featured</div>
                     <div className="text-sm font-serif italic text-white">Digital Nexus Redesign</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative accent lines */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r border-b border-navy-900/10 pointer-events-none" />
              <div className="absolute -left-4 -top-4 w-24 h-24 border-l border-t border-navy-900/10 pointer-events-none" />
            </Reveal>
          </div>
          
        </div>
      </section>

      {/* STATS BAND */}
      <section className="circuit-bg relative overflow-hidden py-16">
        <div className="grid-pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-1.5 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  What we offer near you
                </span>
                <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Website in Junagadh, Rajkot, and digital campaigns.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                From website design and search engine optimization (SEO) in Junagadh and Rajkot to AI social media campaigns, we run every surface to get you ranked on top.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:card-shadow-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-900 backdrop-blur">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2"
                    >
                      View plans
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK SHOWCASE */}
      <section className="relative bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Our Work Proof
                </span>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Bespoke website design & graphic portfolios.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-accent font-sans"
              >
                Explore Full Archive ({projects.length}+ Projects) <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Rows */}
          <div className="mt-16 space-y-16">
            {homepageShowcase.map((row, rowIndex) => (
              <div key={row.title} className="space-y-6">
                
                {/* Row Title & Description */}
                <Reveal delay={rowIndex * 0.05}>
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
                      {row.title}
                    </h3>
                    <p className="text-sm text-muted mt-0.5">{row.desc}</p>
                  </div>
                </Reveal>

                {/* Row Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {row.items.map((p, i) => (
                    <Reveal key={p.id} delay={i * 0.05}>
                      <HomepageProjectCard p={p} />
                    </Reveal>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS PREVIEW CAROUSEL */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                What clients say
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Work that earns the second project.
              </h2>
            </div>
          </Reveal>

          {/* Carousel Frame */}
          <div className="mt-16 relative">
            
            {/* Nav Arrows */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-md transition-all hover:bg-navy-900 hover:text-white hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            </div>
            
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-md transition-all hover:bg-navy-900 hover:text-white hover:scale-105"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Testimonial card */}
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-slate-200 bg-offwhite p-8 sm:p-14 card-shadow">
                
                {/* Carousel page indicator */}
                <div className="absolute right-8 top-8 text-xs font-bold text-muted tracking-widest select-none">
                  {String(activeTestimonial + 1).padStart(2, '0')} / {String(homepageTestimonials.length).padStart(2, '0')}
                </div>

                {/* Rating & Verification Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6 pt-2">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 uppercase tracking-wider border border-emerald-100/60 select-none">
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                      Google Verified
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative min-h-[160px] flex flex-col justify-center">
                  <div className="text-5xl font-serif text-accent select-none mb-2">“</div>
                  <blockquote className="text-xl sm:text-2xl font-serif italic text-navy-900 leading-relaxed tracking-wide">
                    {homepageTestimonials[activeTestimonial].quote}
                  </blockquote>
                </div>

                {/* Client detail and routing */}
                <div className="mt-10 flex flex-col justify-between gap-6 border-t border-slate-200/60 pt-8 sm:flex-row sm:items-center">
                  <figcaption className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-semibold text-white">
                      {homepageTestimonials[activeTestimonial].initials}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-navy-900">{homepageTestimonials[activeTestimonial].name}</div>
                      <div className="text-xs text-muted mt-0.5">{homepageTestimonials[activeTestimonial].role}</div>
                    </div>
                  </figcaption>

                  <div className="flex items-center gap-4">
                    <Link
                      href={`/portfolio/${homepageTestimonials[activeTestimonial].projectId}`}
                      className="group inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 hover:bg-accent hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-900 transition-all"
                    >
                      Read Case Study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </Reveal>

            {/* Pagination progress bar & Mobile nav buttons */}
            <div className="mt-8 flex items-center justify-between px-2">
              {/* Progress bar line */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted select-none">
                  {String(activeTestimonial + 1).padStart(2, '0')}
                </span>
                <div className="h-1 bg-slate-200 rounded-full w-32 sm:w-48 overflow-hidden relative">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${((activeTestimonial + 1) / homepageTestimonials.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-muted select-none">
                  {String(homepageTestimonials.length).padStart(2, '0')}
                </span>
              </div>

              {/* Mobile nav buttons */}
              <div className="flex gap-3 md:hidden">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <div className="circuit-bg relative py-24 sm:py-28">
          <div className="grid-pattern-light absolute inset-0 opacity-70" />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                2-hour response SLA on every inquiry
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Have a launch in mind?
                <span className="block italic font-serif font-normal text-accent">
                  Let's make it sharp.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Tell us what you're building. We'll respond with a scoped proposal —
                not a template — within two hours.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Start the conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Explore plans
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function HomepageProjectCard({ p }: { p: typeof projects[0] }) {
  const [imageError, setImageError] = useState(false);

  const getGradient = (cat: string) => {
    switch (cat) {
      case "Industrial":
        return "from-slate-700 to-slate-900";
      case "Healthcare":
        return "from-cyan-600 to-blue-800";
      case "E-commerce":
        return "from-purple-600 to-indigo-800";
      case "Business":
        return "from-emerald-600 to-teal-800";
      case "Institutional":
        return "from-orange-600 to-amber-800";
      default:
        return "from-rose-600 to-pink-800";
    }
  };

  const cleanUrl = p.url.replace("https://", "").replace("www.", "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:card-shadow-hover">
      {/* Mock Browser Header */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3 select-none">
        <div className="h-2 w-2 rounded-full bg-rose-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 rounded bg-slate-200/50 py-0.5 text-center text-[9px] font-medium text-muted/65 tracking-wider">
          {cleanUrl}
        </div>
      </div>

      {/* Screen Aspect ratio exactly 1.6 matches 1280x800 */}
      <a href={`/portfolio/${p.id}`} className="block relative aspect-[1.6] overflow-hidden bg-offwhite border-b border-slate-100">
        {imageError ? (
          <div className={`flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br ${getGradient(p.cat)} text-white`}>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-80">{p.cat}</span>
            <div className="text-xl font-serif font-normal italic tracking-wide">{p.title}</div>
            <span className="text-xs opacity-65">View Case Study</span>
          </div>
        ) : (
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg backdrop-blur opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </a>

      {/* Meta Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
            {p.cat}
          </span>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-muted hover:text-navy-900 transition-colors flex items-center gap-0.5"
          >
            Visit Live <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-navy-900 hover:text-accent transition-colors">
          <a href={`/portfolio/${p.id}`}>{p.title}</a>
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted line-clamp-2">{p.desc}</p>
        
        <a
          href={`/portfolio/${p.id}`}
          className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-navy-900 hover:text-accent transition-colors"
        >
          View Case Study <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
