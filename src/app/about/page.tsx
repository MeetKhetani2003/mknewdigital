"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const milestones = [
  { year: "2024", title: "Founded in Junagadh", desc: "Started our digital journey to help ambitious brands." },
  { year: "2025", title: "Studio scale", desc: "Expanded to a full-service studio across web, video, design, and paid growth." },
];

const stack = [
  { name: "Next.js", role: "Web framework" },
  { name: "Google Flow", role: "Workflow" },
  { name: "Canva", role: "Design" },
  { name: "CapCut", role: "Video edit" },
  { name: "Sarvam AI", role: "Voiceover" },
  { name: "Shopify", role: "E-commerce" },
  { name: "Figma", role: "UI / UX" },
  { name: "Vercel", role: "Hosting" },
];

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
                The tools we reach for every day.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {stack.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.04}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center card-shadow transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-white">
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="mt-4 text-base font-semibold text-navy-900">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted">{t.role}</div>
                </div>
              </Reveal>
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
