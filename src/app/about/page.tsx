"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const milestones = [
  { year: "2024", title: "Founded in Junagadh", desc: "Started our digital journey to help ambitious brands." },
  { year: "2025", title: "Studio scale", desc: "Expanded to a full-service studio across web, video, design, and paid growth." },
];

const stackCategories = [
  {
    title: "Web Development & Optimization",
    desc: "Robust full-stack frameworks, databases, and optimized hosting used to deliver blazing-fast, secure, and SEO-optimized sites.",
    tools: [
      { name: "Next.js", role: "Better Optimization" },
      { name: "React.js", role: "Frontend UI Library" },
      { name: "Node.js", role: "Backend Runtime" },
      { name: "Express.js", role: "API Framework" },
      { name: "MongoDB", role: "NoSQL Database" },
      { name: "Vercel", role: "Cloud Hosting" },
    ]
  },
  {
    title: "AI Video Reels & Post-Production",
    desc: "AI voice synthesis, programmatic video workflows, and industry-grade editing suites to create high-performing social campaigns.",
    tools: [
      { name: "Premiere Pro", role: "Premium Assets & Effects" },
      { name: "Sarvam AI", role: "Voiceover Synth" },
      { name: "Google Flow", role: "Video Generating" },
    ]
  },
  {
    title: "Graphic Design & AI Copywriting",
    desc: "Visual branding tools paired with leading language intelligence to build rich graphics and high-converting marketing copywriting.",
    tools: [
      { name: "Photoshop", role: "Graphic Designing" },
      { name: "Canva", role: "Collateral Templates" },
      { name: "ChatGPT", role: "Content Copywriting" },
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
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              About the studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              A small, senior team.
              <span className="block italic font-serif font-normal text-accent">
                Big-studio output.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We started MK Digital Nexus because most agencies either under-deliver
              or over-charge. We wanted to build a studio where the work is sharp,
              the timelines are honest, and the people you talk to are the ones
              doing the work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Studio image */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 card-shadow">
              <img
                src="/images/team-office.jpg"
                alt="MK Digital Nexus studio in Junagadh"
                loading="lazy"
                className="aspect-[16/7] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-white/70">
                    Junagadh
                  </div>
                  <div className="mt-1 text-xl font-semibold">Our studio</div>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs backdrop-blur sm:inline-flex">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  MSME Registered
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story / mission */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Our mission
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Make premium digital work accessible to ambitious small brands.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                The best work in our industry used to be gated behind ₹5L+ retainers.
                We build tools, templates, and AI workflows that let us deliver
                senior-quality output at a price a bootstrapped founder can actually
                justify.
              </p>
              <p>
                We don't chase awards. We chase launches. Every project ships with a
                written scope, a dedicated PM, and a post-launch review — because
                the work only matters if it goes live.
              </p>
              <p className="text-ink/85">
                If you're building something you're proud of, we'd love to help you
                make it look the part.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Milestones
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                Our journey so far.
              </h2>
            </div>
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-navy-900/10 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                        <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {m.year}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy-900">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-accent md:left-1/2" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tool stack */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Tool stack
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                The technologies we master.
              </h2>
              <p className="mt-4 text-base text-muted max-w-lg mx-auto">
                Categorized tool stacks we leverage daily to build high-performance web products and viral social campaigns.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 space-y-16">
            {stackCategories.map((cat, catIdx) => (
              <div key={cat.title} className="space-y-6">
                <Reveal delay={catIdx * 0.1}>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="text-xl font-semibold text-navy-900 sm:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted max-w-3xl">
                      {cat.desc}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                  {cat.tools.map((t, toolIdx) => (
                    <Reveal key={t.name} delay={toolIdx * 0.04}>
                      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover flex flex-col justify-between h-full group">
                        <div className="flex flex-col items-center">
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-2.5 transition-transform duration-300 group-hover:scale-110">
                            <TechIcon name={t.name} />
                          </div>
                          <div className="mt-4 text-sm font-semibold text-navy-900">{t.name}</div>
                        </div>
                        <div className="mt-2 text-[11px] text-muted leading-tight">{t.role}</div>
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
      <section className="circuit-bg relative overflow-hidden py-20 sm:py-24">
        <div className="grid-pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let's build something worth bookmarking.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
