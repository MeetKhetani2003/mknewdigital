"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  HeartHandshake
} from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

const milestones = [
  { 
    year: "2023", 
    title: "Foundation in Junagadh", 
    desc: "Founded by Meet Khetani at Talav Gate near Vanzari Chowk, Junagadh, to provide local businesses with modern, high-speed web architecture and custom software." 
  },
  { 
    year: "2024", 
    title: "MERN Stack & Industrial ERPs", 
    desc: "Expanded into custom software engineering, inventory dashboards, and industrial B2B catalog platforms for manufacturers and exporters across Saurashtra and Gujarat." 
  },
  { 
    year: "2025", 
    title: "International Scale & AI Growth", 
    desc: "Shipped enterprise deployments for international clients in Canada (GWGC, Green Wave Packaging), scaling full-service capabilities across Meta Ads and Google Profile SEO." 
  },
  { 
    year: "2026", 
    title: "100+ Deployments Milestone", 
    desc: "Achieved 100+ live client launches worldwide with a verified 4.9★ Google Business Profile rating (68+ reviews), setting the regional benchmark in Saurashtra." 
  },
];

const founderHighlights = [
  {
    icon: Code2,
    title: "Full-Stack Software Architect",
    desc: "Specialized in Next.js, React, Node.js, and scalable MongoDB systems."
  },
  {
    icon: Layers,
    title: "3+ Years in Junagadh",
    desc: "Hands-on studio presence at Talav Gate serving Gujarat & global clients."
  },
  {
    icon: CheckCircle2,
    title: "100+ Shipped Deliveries",
    desc: "Every project built with zero bloat, clean code, and guaranteed speed."
  },
  {
    icon: HeartHandshake,
    title: "Direct Founder Access",
    desc: "No middlemen or junior account reps — work directly with Meet."
  }
];

const stackCategories = [
  {
    title: "Web Development & Architecture",
    desc: "Modern frameworks, reactive states, and edge hosting engineered for sub-second speeds and top Google PageSpeed scores.",
    tools: [
      { name: "Next.js", role: "SSR & Static Optimization" },
      { name: "React.js", role: "Component Architecture" },
      { name: "Node.js", role: "Backend Runtime" },
      { name: "Express.js", role: "RESTful API Engine" },
      { name: "MongoDB", role: "NoSQL Database" },
      { name: "Vercel", role: "Global Edge CDN" },
    ]
  },
  {
    title: "AI Video Reels & Post-Production",
    desc: "AI voice synthesis, programmatic video workflows, and industry-grade editing suites to create high-performing social campaigns.",
    tools: [
      { name: "Premiere Pro", role: "4K Motion & Post" },
      { name: "Sarvam AI", role: "Regional Voiceover Synth" },
      { name: "Google Flow", role: "Video Generation" },
    ]
  },
  {
    title: "Graphic Design & AI Copywriting",
    desc: "Visual branding tools paired with leading language intelligence to build rich graphics and high-converting marketing copywriting.",
    tools: [
      { name: "Photoshop", role: "Creative Designing" },
      { name: "Canva", role: "Collateral Templates" },
      { name: "ChatGPT", role: "Conversion Copywriting" },
    ]
  }
];

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case "Next.js":
      return (
        <svg className="h-8 w-8 text-black fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.918 19.333l-5.698-8.232-1.92 2.656v5.576h-1.5v-10h1.5v3.42l5.776 8.24c-.66.528-1.4.954-2.158 1.34zm-.918-13.333c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"/>
        </svg>
      );
    case "React.js":
      return (
        <svg className="h-8 w-8 text-[#61DAFB] fill-current" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05"/>
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case "Node.js":
      return (
        <svg className="h-8 w-8 text-[#339933] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.09 5.09L3 8.6v6.8l6.09 3.51 6.09-3.51V8.6zm2.91-2.92L18 5.68v12.64l-6 3.51-6-3.51V5.68z" />
        </svg>
      );
    case "Express.js":
      return (
        <svg className="h-8 w-8 text-slate-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 10h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM6 7h2v2H6V7zm0 10h2v2H6v-2z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg className="h-8 w-8 text-[#47A248] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.193 11.455c-.562-3.89-2.584-7.464-5.193-10.455-2.609 2.991-4.631 6.565-5.193 10.455a16.896 16.896 0 00-.012 3.84c.321 2.222 1.48 4.263 3.327 5.717V24h3.756v-3.033c1.847-1.454 3.006-3.495 3.327-5.717.151-1.272.146-2.556-.012-3.84zM12 21.033v-19.11c2.096 2.587 3.756 5.568 4.193 8.812a14.28 14.28 0 01-.012 3.193c-.256 1.776-1.196 3.4-2.68 4.544L12 21.033z" />
        </svg>
      );
    case "Vercel":
      return (
        <svg className="h-8 w-8 text-black fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 22.525H0L12 1.475l12 21.05z" />
        </svg>
      );
    case "Premiere Pro":
      return (
        <svg className="h-8 w-8 text-[#9999FF] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#00005C" />
          <text x="5" y="15" fill="#9999FF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Pr</text>
        </svg>
      );
    case "Sarvam AI":
      return (
        <svg className="h-8 w-8 text-accent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21c0-.55-.45-1-1-1H4c-1.1 0-2-.9-2-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 2.21 1.79 4 4 4h4c.55 0 1-.45 1-1zm14-5c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1-.9 2-2 2h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c2.21 0 4-1.79 4-4v-4zM2 8c0 .55.45 1 1 1s1-.45 1-1V4c0-1.1.9-2 2-2h4c.55 0 1-.45 1-1s-.45-1-1-1H6C3.79 0 2 1.79 2 4v4zm20-6h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2 .9 2 2v4c0 .55.45 1 1 1s1-.45 1-1V4c0-2.21-1.79-4-4-4zm-4 11h-4v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H8c-.55 0-1-.45-1-1s.45-1 1-1h4V8c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1 .45 1 1s-.45 1-1 1z" />
        </svg>
      );
    case "Google Flow":
      return (
        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      );
    case "Photoshop":
      return (
        <svg className="h-8 w-8 text-[#31A8FF] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#001833" />
          <text x="5" y="15" fill="#31A8FF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Ps</text>
        </svg>
      );
    case "Canva":
      return (
        <svg className="h-8 w-8 text-[#00C4CC] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#00C4CC" />
          <text x="8" y="16" fill="white" fontSize="13" fontFamily="serif" fontWeight="bold">C</text>
        </svg>
      );
    case "ChatGPT":
      return (
        <svg className="h-8 w-8 text-[#10A37F] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3 10.3a3.3 3.3 0 00-.5-1.5 3.4 3.4 0 00-2.4-2.4 3.3 3.3 0 00-1.5-.5H16.8a3.4 3.4 0 00-2.4-2.4 3.3 3.3 0 00-1.5-.5h-.2a3.3 3.3 0 00-1.5.5A3.4 3.4 0 008.8 5.9h-.1a3.3 3.3 0 00-1.5.5A3.4 3.4 0 004.8 8.8v.1a3.3 3.3 0 00-.5 1.5c.02.77.3 1.5.8 2.1-.5.6-.8 1.3-.8 2.1 0 .6.2 1.2.5 1.7a3.4 3.4 0 002.4 2.4c.5.2 1 .3 1.6.3h.1a3.4 3.4 0 002.4 2.4c.5.2 1.1.3 1.6.3h.2c.6 0 1.1-.1 1.6-.3a3.4 3.4 0 002.4-2.4h.1c.6 0 1.1-.1 1.6-.3a3.4 3.4 0 002.4-2.4c.3-.5.5-1.1.5-1.7.02-.77-.26-1.5-.76-2.1.5-.6.8-1.3.8-2.1zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      );
    default:
      return (
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-xs font-bold text-white uppercase select-none">
          {name.split(" ")[0].substring(0, 2)}
        </div>
      );
  }
}

export default function About() {
  return (
    <>
      <title>About Meet Khetani & MK Digital Nexus | 3+ Years in Junagadh</title>
      <meta
        name="description"
        content="Meet Khetani is the Founder and Lead Software Architect at MK Digital Nexus, working for the last 3+ years in Junagadh at Talav Gate. Over 100+ live projects delivered across India & Canada."
      />
      <meta
        name="keywords"
        content="Meet Khetani, Meet Khetani Junagadh, MK Digital Nexus owner, about MK Digital Nexus, website developer in junagadh, software developer in junagadh, web development company in junagadh, Talav Gate Vanzari Chowk web studio"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/about" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                3+ Years in Junagadh · 100+ Deliveries
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold text-navy-900 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Talav Gate Studio HQ
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl">
              Junagadh's Premier
              <span className="block italic font-serif font-normal text-accent mt-2">
                Web & Software Studio.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
              Headquartered at Talav Gate near Vanzari Chowk in Junagadh, MK Digital Nexus was founded by <strong className="text-navy-900 font-bold">Meet Khetani</strong>. 
              Over the last 3 years, we have engineered 100+ live Next.js websites, custom business ERPs, Google Maps 3-Pack rankings, and high-ROAS ad campaigns for businesses in Saurashtra, Gujarat, and worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER & LEADERSHIP SPOTLIGHT: MEET KHETANI */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Founder Photo & Badge */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative background glow & frame */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 via-amber-500/10 to-orange-500/20 blur-xl opacity-75" />
                  
                  <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-3 shadow-2xl">
                    <div className="overflow-hidden rounded-2xl bg-slate-900">
                      <img
                        src="/owner.png"
                        alt="Meet Khetani - Founder & Lead Software Architect at MK Digital Nexus, Junagadh"
                        className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Overlay Identity Card */}
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl font-extrabold text-navy-900">Meet Khetani</div>
                          <div className="text-xs font-bold uppercase tracking-wider text-accent mt-0.5">
                            Founder & Lead Full-Stack Engineer
                          </div>
                        </div>
                        <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                          3+ Yrs Active
                        </span>
                      </div>

                      <div className="mt-3.5 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs text-muted">
                        <span className="flex items-center gap-1 font-medium text-slate-700">
                          <MapPin className="h-3.5 w-3.5 text-accent" /> Junagadh, Gujarat
                        </span>
                        <a
                          href="https://www.linkedin.com/company/mk-digital-nexus/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-navy-900 hover:text-accent flex items-center gap-1 transition-colors"
                        >
                          LinkedIn Profile <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Founder's Story & Vision */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                  Meet The Founder & Architect
                </span>
                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-navy-900 leading-[1.15]">
                  "We build software and websites that produce real revenue, not empty aesthetics."
                </h2>

                <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted">
                  <p>
                    I founded <strong className="text-navy-900 font-semibold">MK Digital Nexus</strong> with a clear observation: most local companies in Junagadh and Saurashtra were either overpaying metro agencies for bloated WordPress templates or struggling with freelancers who disappeared after delivery.
                  </p>
                  <p>
                    For the past <strong className="text-navy-900 font-semibold">3+ years</strong>, operating straight out of our studio at <strong className="text-navy-900 font-semibold">Talav Gate near Vanzari Chowk</strong>, I have worked directly with factory owners, clinicians, retail brands, and global exporters. We architect every Next.js site and custom MERN software application ourselves — with 100% clean code, fast load times, and guaranteed code ownership.
                  </p>
                  <p className="text-navy-900 font-semibold italic border-l-4 border-accent pl-4 py-1">
                    "When you work with MK Digital Nexus, you communicate directly with senior engineers who understand both technical code and your local market economics."
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {founderHighlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 transition-all hover:bg-white hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-navy-900">{item.title}</div>
                            <div className="text-xs text-muted mt-0.5 leading-snug">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Direct Action Connect Bar */}
                <div className="mt-9 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => triggerBookServiceModal()}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-navy-900 px-7 text-sm sm:text-base font-bold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
                  >
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>Book Consultation with Meet</span>
                  </button>

                  <a
                    href="tel:+916353121773"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm sm:text-base font-bold text-navy-900 transition-all hover:bg-slate-50 hover:border-navy-900 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <span>+91 63531 21773</span>
                  </a>

                  <a
                    href="mailto:hello@mkdigitalnexus.in"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-bold text-slate-700 transition-all hover:bg-white hover:text-navy-900"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    <span>hello@mkdigitalnexus.in</span>
                  </a>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Studio Location & Google Maps Verification */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 card-shadow shadow-xl">
              <img
                src="/images/team-office.jpg"
                alt="MK Digital Nexus studio headquarters at Talav Gate, Junagadh"
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80 font-bold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" /> First Floor, Shyam Apt, Shop 5, Near Vanzari Chowk, Talav Gate, Junagadh 362001
                  </div>
                  <div className="mt-2 text-2xl sm:text-3xl font-extrabold">Our Studio & Engineering Headquarters</div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://share.google/VqmKOhc9O8q5wXUvg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-2.5 text-sm font-bold text-white backdrop-blur hover:bg-white hover:text-navy-950 transition-all shadow-lg"
                  >
                    <span>View on Google Profile (4.9★ / 68+ Reviews)</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    MSME Registered Studio
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3-Year Milestones Timeline */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Our 3-Year Track Record
              </span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
                The journey so far in Junagadh.
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                How Meet Khetani built MK Digital Nexus from a dedicated Junagadh coding desk into an internationally deployed agency.
              </p>
            </div>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-navy-900/10 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-9 card-shadow shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-accent">
                          Year {m.year}
                        </div>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy-900">
                          {m.title}
                        </h3>
                        <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-accent shadow-md md:left-1/2" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tool Stack */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Engineering Stack
              </span>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">
                The technologies we master.
              </h2>
              <p className="mt-5 text-xl leading-relaxed text-muted max-w-2xl mx-auto">
                Modern software languages and frameworks leveraged by Meet Khetani and our team to guarantee speed, SEO dominance, and reliability.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 space-y-16">
            {stackCategories.map((cat, catIdx) => (
              <div key={cat.title} className="space-y-8">
                <Reveal delay={catIdx * 0.1}>
                  <div className="border-l-4 border-accent pl-5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-muted max-w-3xl">
                      {cat.desc}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
                  {cat.tools.map((t, toolIdx) => (
                    <Reveal key={t.name} delay={toolIdx * 0.04}>
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 text-center card-shadow shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between h-full group">
                        <div className="flex flex-col items-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 p-3 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                            <TechIcon name={t.name} />
                          </div>
                          <div className="mt-4 text-base font-bold text-navy-900">{t.name}</div>
                        </div>
                        <div className="mt-3 text-xs font-medium text-muted leading-tight">{t.role}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="circuit-bg relative overflow-hidden py-24 sm:py-32">
        <div className="grid-pattern-light absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight">
              Ready to work directly with Junagadh's top software architect?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl leading-relaxed text-white/80">
              Meet Khetani and the MK Digital Nexus team will scope your project with a guaranteed quotation within 2 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => triggerBookServiceModal()}
                className="inline-flex h-16 items-center gap-3 rounded-full bg-white px-10 text-base sm:text-lg font-bold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
              >
                <span>Book Service Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="https://wa.me/916353121773?text=Hi%20Meet%20Khetani%2C%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 items-center gap-2 rounded-full border-2 border-emerald-400 bg-emerald-500/20 backdrop-blur px-8 text-base font-bold text-white hover:bg-emerald-500 transition-all"
              >
                <span>WhatsApp Meet Khetani</span>
                <span className="text-emerald-400 font-bold">●</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
