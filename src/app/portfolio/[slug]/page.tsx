import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/utils/projectsData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, DollarSign, Calendar, Layers, Activity } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.id === slug);
  if (!p) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${p.title} Case Study | Website & Software in Junagadh | MK Digital Nexus`,
    description: `Detailed case study of the ${p.title} live production deployment (${p.cat} industry) shipped by MK Digital Nexus Junagadh. Architecture, features, and results.`,
    keywords: [
      p.title,
      p.cat,
      ...p.techStack,
      "website development in junagadh",
      "custom software development junagadh",
      "web developer portfolio junagadh",
      "ecommerce website development gujarat",
      "MK Digital Nexus case study",
    ],
    openGraph: {
      title: `${p.title} Case Study | MK Digital Nexus Junagadh`,
      description: `Review the technical specifications, development journey, and cost details for ${p.title}.`,
      type: "article",
      images: [
        {
          url: p.img,
          width: 1200,
          height: 630,
          alt: `${p.title} Website Screenshot`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.mkdigitalnexus.in/portfolio/${slug}`,
    },
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const p = projects.find((x) => x.id === slug);

  if (!p) {
    notFound();
  }

  const cleanUrl = p.url.replace("https://", "").replace("www.", "");

  return (
    <>
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          {/* Breadcrumb Back Link */}
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted hover:text-navy-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Archive
          </Link>

          {/* Tag */}
          <div>
            <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              {p.cat} Category Case Study
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl max-w-5xl">
            {p.title}
          </h1>

          {/* Sub description */}
          <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
            {p.desc}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-16 items-center gap-3 rounded-full bg-navy-900 px-8 text-base font-bold text-white transition-all hover:bg-accent hover:-translate-y-1 hover:shadow-2xl"
            >
              Visit Live Website
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-16 items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-8 text-base font-bold text-navy-900 transition-all hover:border-navy-900 hover:-translate-y-1"
            >
              Request Similar Site
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="grid gap-14 lg:grid-cols-12">
            
            {/* Left Column: Screenshot & Case Details */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Browser Mockup Frame */}
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white card-shadow shadow-xl">
                {/* Mock Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-4 select-none">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="ml-3 flex-1 rounded-md bg-slate-200/60 py-1 text-center text-xs font-semibold text-slate-600 tracking-wider">
                    {cleanUrl}
                  </div>
                </div>
                
                {/* Screenshot view */}
                <div className="relative aspect-[16/10] bg-offwhite">
                  <img
                    src={p.img}
                    alt={`${p.title} website homepage preview`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Development Journey / Narrative Section */}
              <div className="space-y-4 pt-4">
                <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Development Experience
                </h2>
                <div className="h-1 w-16 bg-accent rounded-full" />
                <p className="text-lg leading-relaxed text-muted mt-6">
                  {p.experience}
                </p>
                <p className="text-lg leading-relaxed text-muted">
                  {p.longDesc}
                </p>
              </div>

            </div>

            {/* Right Column: Spec Cards, Tech Stack, Features */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Specification Grid Panel */}
              <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-9 space-y-7 shadow-md">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Project Scope & Estimations
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  
                  {/* Cost estimation */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">Estimated Cost</div>
                      <div className="text-xl font-bold text-navy-900 mt-0.5">{p.cost}</div>
                    </div>
                  </div>

                  {/* Project timeline */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">Build Timeline</div>
                      <div className="text-xl font-bold text-navy-900 mt-0.5">{p.timeline}</div>
                    </div>
                  </div>

                  {/* Industry segment */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">Industry Vertical</div>
                      <div className="text-xl font-bold text-navy-900 mt-0.5">{p.cat}</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tech Stack tags */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="h-5 w-5 text-accent" />
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functional Deliverables checklist */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest">
                  Key Features & Deliverables
                </h3>
                <ul className="space-y-3.5">
                  {p.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base text-muted font-medium">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative rounded-3xl bg-white p-10 sm:p-14 card-shadow shadow-xl border border-slate-200">
            <div className="absolute -top-7 left-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-3xl font-serif text-white italic shadow-lg select-none">
              “
            </div>
            
            <blockquote className="text-2xl sm:text-3xl font-serif italic text-navy-950 leading-relaxed pt-2">
              "{p.testimonial.quote}"
            </blockquote>
            
            <div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 font-bold text-white text-base shadow-md">
                {p.testimonial.initials}
              </div>
              <div>
                <div className="text-lg font-bold text-navy-900">{p.testimonial.clientName}</div>
                <div className="text-sm text-muted">{p.testimonial.clientRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="circuit-bg relative overflow-hidden py-24 sm:py-32">
        <div className="grid-pattern-light absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
            Need a high-performance website like this?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/80">
            We build and deliver responsive web solutions matching the visual excellence and SEO criteria shown above. Tell us your needs and receive a scoped quote.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-16 items-center gap-3 rounded-full bg-white px-10 text-base sm:text-lg font-bold text-navy-900 transition-all hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-2xl"
            >
              Get a Scoped Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-16 items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 text-base sm:text-lg font-bold text-white backdrop-blur transition-all hover:bg-white/20 hover:-translate-y-1"
            >
              Browse Other Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
