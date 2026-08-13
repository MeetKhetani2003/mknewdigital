"use client";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/utils/projectsData";

export default function Testimonials() {
  return (
    <>
      <title>Client Reviews & Testimonials | MK Digital Nexus</title>
      <meta name="description" content="Read reviews from 62+ business owners, industrial firms, doctors, and e-commerce founders who trust MK Digital Nexus." />

      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Reviews & testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Repeat clients are
              <span className="block italic font-serif font-normal text-accent">
                our favorite metric.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              98% of our clients come back for a second project. Here is the feedback 
              from our <strong>{projects.length} live project launches</strong> — showing our commitment 
              to speed, clean code, and operational excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rating summary */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-offwhite p-8 text-center card-shadow sm:p-12">
              <div className="inline-flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl">
                4.9 / 5
              </div>
              <p className="mt-3 text-base text-muted">
                Average rating across {projects.length}+ live client deployments
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review wall */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {projects.map((p, i) => {
              const r = p.testimonial;
              return (
                <Reveal key={p.id} delay={(i % 6) * 0.05}>
                  <figure className="group rounded-2xl border border-slate-200 bg-white p-7 card-shadow transition-all duration-500 hover:-translate-y-1 hover:card-shadow-hover flex flex-col justify-between">
                    <div>
                      {/* Rating & Verification Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <svg key={j} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                            </svg>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 uppercase tracking-wider border border-emerald-100/60 select-none">
                            <CheckCircle2 className="h-2.5 w-2.5 shrink-0 text-emerald-600" />
                            Verified
                          </span>
                        </div>
                      </div>
                      <blockquote className="mt-4 text-base leading-relaxed text-ink/85 italic">
                        "{r.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <figcaption className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                          {r.initials}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-navy-900">{r.clientName}</div>
                          <div className="text-[11px] text-muted line-clamp-1">{r.clientRole}</div>
                        </div>
                      </figcaption>
                      
                      {/* Case Study Link */}
                      <Link 
                        href={`/portfolio/${p.id}`}
                        className="text-[10px] shrink-0 font-bold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5 hover:text-navy-900"
                      >
                        Case Study <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Ready to be our next case study?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Tell us what you're building and we'll come back with a scoped plan
              within two hours.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
