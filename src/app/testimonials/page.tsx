"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/utils/projectsData";

export default function Testimonials() {
  return (
    <>
      <title>Client Reviews & Google Ratings | Top Web & Software Agency in Junagadh</title>
      <meta
        name="description"
        content="Read verified 4.9/5 Google reviews for MK Digital Nexus in Junagadh. Proven track record across 100+ live website development, custom software, and Meta/Google Ads deployments."
      />
      <meta
        name="keywords"
        content="MK Digital Nexus reviews, web design company reviews Junagadh, best software development agency Junagadh, digital marketing client reviews Rajkot, Google profile reviews MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/testimonials" />

      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Reviews & testimonials
              </span>
              <a
                href="https://share.google/VqmKOhc9O8q5wXUvg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs sm:text-sm font-bold text-navy-900 shadow-sm hover:border-amber-400"
              >
                <span className="text-amber-500">★★★★★</span>
                <span>4.9 on Google</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl">
              Repeat clients are
              <span className="block italic font-serif font-normal text-accent mt-2">
                our favorite metric.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
              98% of our clients come back for a second project. Here is genuine feedback 
              from our <strong className="text-navy-900 font-bold">100+ live project launches</strong> — showing our commitment 
              to speed, clean code, and operational excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rating summary */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-offwhite p-10 text-center card-shadow shadow-xl sm:p-16">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 shadow-sm mb-6">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-navy-900">Google Business Verified Rating</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <div className="mt-6 text-6xl font-extrabold tracking-tight text-navy-900 sm:text-7xl">
                4.9 / 5
              </div>
              <p className="mt-4 text-lg text-muted max-w-md mx-auto leading-relaxed">
                Verified rating based on {projects.length}+ live projects delivered for clients in Junagadh, Rajkot, and worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://share.google/VqmKOhc9O8q5wXUvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center gap-2.5 rounded-full bg-navy-900 px-8 text-sm font-bold text-white transition-all hover:bg-accent hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  <span>View Our Google Business Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review wall - 2 spacious columns for bigger cards */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
            {projects.map((p, i) => {
              const r = p.testimonial;
              return (
                <Reveal key={p.id} delay={(i % 4) * 0.05}>
                  <figure className="group rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 card-shadow shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
                    <div>
                      {/* Rating & Verification Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <svg key={j} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 uppercase tracking-wider border border-emerald-200 select-none">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            Google Verified
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-4xl font-serif text-accent select-none mt-4">“</div>
                      <blockquote className="mt-1 text-xl sm:text-2xl font-serif italic text-navy-950 leading-relaxed">
                        {r.quote}
                      </blockquote>
                    </div>
                    
                    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                      <figcaption className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white shadow-md">
                          {r.initials}
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-bold text-navy-900">{r.clientName}</div>
                          <div className="text-xs sm:text-sm text-muted line-clamp-1">{r.clientRole}</div>
                        </div>
                      </figcaption>
                      
                      {/* Case Study Link */}
                      <Link 
                        href={`/portfolio/${p.id}`}
                        className="text-xs shrink-0 font-bold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 hover:text-navy-900"
                      >
                        Case Study <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="circuit-bg relative overflow-hidden py-24 sm:py-32">
        <div className="grid-pattern-light absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
              Ready to be our next case study?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl leading-relaxed text-white/80">
              Tell us what you're building and we'll come back with a scoped plan
              within two hours.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-16 items-center gap-3 rounded-full bg-white px-10 text-base sm:text-lg font-bold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-2xl"
            >
              Start a project <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
