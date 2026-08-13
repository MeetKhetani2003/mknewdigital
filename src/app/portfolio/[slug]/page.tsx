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
    title: `${p.title} Case Study | MK Digital Nexus`,
    description: `Detailed review of the ${p.title} website (${p.cat} industry). Learn about its tech stack, cost estimation, development timeline, and core features.`,
    keywords: [p.title, p.cat, ...p.techStack, "web design cost", "web developer portfolio", "custom web development Rajkot"],
    openGraph: {
      title: `${p.title} Case Study | MK Digital Nexus`,
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
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          {/* Breadcrumb Back Link */}
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-navy-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Archive
          </Link>

          {/* Tag */}
          <div>
            <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
              {p.cat} Category Case Study
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-6xl max-w-4xl">
            {p.title}
          </h1>

          {/* Sub description */}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {p.desc}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5"
            >
              Visit Live Website
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-navy-900 hover:-translate-y-0.5"
            >
              Request Similar Site
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left Column: Screenshot & Case Details */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Browser Mockup Frame */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow">
                {/* Mock Browser Header */}
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3 select-none">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-3 flex-1 rounded bg-slate-200/50 py-1 text-center text-[10px] font-medium text-muted/70 tracking-wide">
                    {cleanUrl}
                  </div>
                </div>
                
                {/* Screenshot view */}
                <div className="relative aspect-[1.6] bg-offwhite">
                  <img
                    src={p.img}
                    alt={`${p.title} website homepage preview`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Development Journey / Narrative Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
                  Development Experience
                </h2>
                <div className="h-[1px] w-12 bg-accent" />
                <p className="text-base leading-relaxed text-muted mt-4">
                  {p.experience}
                </p>
                <p className="text-base leading-relaxed text-muted">
                  {p.longDesc}
                </p>
              </div>

            </div>

            {/* Right Column: Spec Cards, Tech Stack, Features */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Specification Grid Panel */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-6">
                <h3 className="text-lg font-bold text-navy-900 uppercase tracking-wider text-xs">
                  Project Scope & Estimations
                </h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  
                  {/* Cost estimation */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted">Estimated Cost</div>
                      <div className="text-base font-semibold text-navy-900">{p.cost}</div>
                    </div>
                  </div>

                  {/* Project timeline */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted">Build Timeline</div>
                      <div className="text-base font-semibold text-navy-900">{p.timeline}</div>
                    </div>
                  </div>

                  {/* Industry segment */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted">Industry Vertical</div>
                      <div className="text-base font-semibold text-navy-900">{p.cat}</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tech Stack tags */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" />
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-900 shadow-sm"
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
                <ul className="space-y-3">
                  {p.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative rounded-2xl bg-white p-8 sm:p-12 card-shadow border border-slate-200">
            <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-2xl font-serif text-white italic shadow-lg select-none">
              “
            </div>
            
            <blockquote className="text-xl sm:text-2xl font-serif italic text-navy-900 leading-relaxed">
              "{p.testimonial.quote}"
            </blockquote>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-semibold text-white">
                {p.testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-navy-900">{p.testimonial.clientName}</div>
                <div className="text-xs text-muted">{p.testimonial.clientRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Need a high-performance website like this?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            We build and deliver responsive web solutions matching the visual excellence and SEO criteria shown above. Tell us your needs and receive a scoped quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5"
            >
              Get a Scoped Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-slate-100 hover:-translate-y-0.5"
            >
              Browse Other Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
