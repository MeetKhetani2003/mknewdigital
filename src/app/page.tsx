"use client";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight, Sparkles, Zap, CheckCircle2 } from "lucide-react";

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

const featured = [
  { title: "Lumen E-commerce", cat: "Shopify · Conversion", img: "/images/portfolio-ecommerce.jpg" },
  { title: "Aria Studio Brand", cat: "Identity · Print", img: "/images/portfolio-branding.jpg" },
  { title: "Nova Portfolio", cat: "Next.js · Motion", img: "/images/service-webdev.jpg" },
  { title: "Pulse Reels", cat: "AI Video · Social", img: "/images/service-video.jpg" },
  { title: "Meridian Dashboard", cat: "SaaS · UI", img: "/images/service-marketing.jpg" },
];

const testimonials = [
  {
    quote:
      "MK Digital Nexus rebuilt our storefront in three weeks and our conversion rate doubled. They think like operators, not freelancers.",
    name: "Ananya Iyer",
    role: "Founder, Lumen Apparel",
    initials: "AI",
  },
  {
    quote:
      "The AI reels they ship weekly feel handcrafted. Our Instagram reach is up 4× since we started the Business plan.",
    name: "Rohan Mehta",
    role: "Marketing Lead, Pulse",
    initials: "RM",
  },
  {
    quote:
      "Clean work, honest timelines, and a team that actually answers the phone. Rare combination in this space.",
    name: "Sneha Kapoor",
    role: "Co-founder, Meridian",
    initials: "SK",
  },
];

const stats = [
  { value: 180, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
  { value: 2, suffix: " hrs", label: "Response SLA" },
];

const trustedLogos = ["Lumen", "Aria", "Pulse", "Meridian", "Nova", "Orbit", "Cove", "Halo"];

export default function Home() {
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
                  Premium Digital Agency
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
              <p className="mt-10 text-[17px] font-medium leading-[1.8] text-muted max-w-[500px]">
                We are a boutique studio meticulously designing and engineering bespoke digital experiences for ambitious, world-class brands. 
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
                  What we build
                </span>
                <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Four disciplines. One studio. Zero handoffs.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                Whether you need a single reel or a full brand launch, we run every
                surface from the same playbook — so nothing gets lost in translation.
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

      {/* FEATURED WORK */}
      <section className="relative bg-offwhite py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Featured work
                </span>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                  Recent launches, in motion.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/portfolio"
                className="hidden items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-accent sm:inline-flex"
              >
                View all work <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 flex gap-6 overflow-x-auto px-5 pb-6 no-scrollbar sm:px-8 snap-x snap-mandatory">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group relative w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow transition-all duration-500 hover:-translate-y-1 hover:card-shadow-hover sm:w-[380px]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-muted">
                    {f.cat}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-navy-900">
                    {f.title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                What clients say
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Work that earns the second project.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="relative h-full rounded-2xl border border-slate-200 bg-white p-7 card-shadow transition-all duration-500 hover:-translate-y-1 hover:card-shadow-hover">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-ink/85">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                      <div className="text-xs text-muted">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
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
