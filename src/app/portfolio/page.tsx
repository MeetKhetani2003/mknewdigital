"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { ProjectCardCompact } from "@/components/ui/ProjectCardCompact";
import { Search, X, ArrowUpRight, ArrowRight, Sparkles, Filter as FilterIcon } from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";
import { projects } from "@/utils/projectsData";

type Filter = "All" | "Industrial" | "Healthcare" | "E-commerce" | "Business" | "Institutional" | "Other";

const filters: Filter[] = ["All", "Industrial", "Healthcare", "E-commerce", "Business", "Institutional", "Other"];

const categoryGroups = [
  {
    key: "Industrial" as Filter,
    title: "Industrial & Manufacturing",
    desc: "Precision forging, heavy machinery, technical catalog platforms, and industrial exporter websites.",
    categoryTag: "Heavy Industry & Manufacturing",
    items: projects.filter((p) => p.cat === "Industrial"),
  },
  {
    key: "E-commerce" as Filter,
    title: "E-Commerce & Digital Storefronts",
    desc: "Conversion-optimized online stores, catalog systems, and rapid checkout order flows.",
    categoryTag: "E-Commerce Engines",
    items: projects.filter((p) => p.cat === "E-commerce"),
  },
  {
    key: "Healthcare" as Filter,
    title: "Healthcare & Clinical Systems",
    desc: "Doctor profiles, patient onboarding, and clinical booking systems.",
    categoryTag: "Medical & Health",
    items: projects.filter((p) => p.cat === "Healthcare"),
  },
  {
    key: "Business" as Filter,
    title: "Corporate & Professional Services",
    desc: "Consultancies, logistics networks, automotive studios (Canada), and corporate portals.",
    categoryTag: "Business & Corporate",
    items: projects.filter((p) => p.cat === "Business"),
  },
  {
    key: "Institutional" as Filter,
    title: "Institutional & Consultancies",
    desc: "Higher education institutes, coaching centers, and educational consulting portals.",
    categoryTag: "Institutes & Learning",
    items: projects.filter((p) => p.cat === "Institutional"),
  },
  {
    key: "Other" as Filter,
    title: "Specialized Platforms & Non-Profits",
    desc: "Real estate directories, interior design studios, hospitality suites, and foundations.",
    categoryTag: "Specialized Verticals",
    items: projects.filter((p) => p.cat === "Other"),
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCat = active === "All" || p.cat === active;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.cat.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const isCarouselView = active === "All" && searchQuery.trim() === "";

  return (
    <>
      <title>Work & Live Portfolio | 100+ Digital Deployments | MK Digital Nexus</title>
      <meta
        name="description"
        content="Browse our verified archive of 100+ live websites, custom software, and e-commerce platforms engineered for businesses in the USA, Canada, and India by MK Digital Nexus."
      />
      <meta
        name="keywords"
        content="web development portfolio, custom software projects, Next.js live websites, client case studies, MK Digital Nexus portfolio"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/portfolio" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Studio Proof of Execution
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-950 leading-[1.08]">
              Proven Digital Experiences. <br />
              <span className="text-slate-500 font-normal">Real Code. Real Results.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed text-slate-600">
              Explore our portfolio of approximately 100 websites and custom applications built for manufacturing companies, medical clinics, export houses, and direct-to-consumer brands across North America and India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[68px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-xs py-3.5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          {/* Categories Tab list */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  active === f
                    ? "bg-navy-950 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-950"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-slate-50/70 py-1.5 pl-9 pr-9 text-xs outline-none transition-all placeholder:text-slate-400 focus:border-navy-950 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Grid / Carousel Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {isCarouselView ? (
            <div className="space-y-20">
              {categoryGroups.map((group, idx) => (
                <Reveal key={group.key} delay={idx * 0.05}>
                  <ProjectCarousel
                    title={group.title}
                    desc={group.desc}
                    categoryTag={group.categoryTag}
                    projects={group.items}
                    maxItems={10}
                    onViewCategory={() => {
                      setActive(group.key);
                      window.scrollTo({ top: 340, behavior: "smooth" });
                    }}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Showing {filtered.length} matching deployments
                </span>
                {active !== "All" && (
                  <button
                    onClick={() => setActive("All")}
                    className="text-xs font-bold text-accent hover:underline cursor-pointer"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="text-base font-semibold text-slate-600">
                    No projects found matching &ldquo;{searchQuery}&rdquo;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActive("All");
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy-950 px-5 py-2 text-xs font-bold text-white"
                  >
                    Reset Search
                  </button>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 rounded-full bg-navy-950/80 backdrop-blur px-2.5 py-0.5 text-[10px] font-semibold text-white">
                          {item.cat}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-navy-950 group-hover:text-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                          <Link
                            href={`/portfolio/${item.id}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-navy-950 hover:text-accent"
                          >
                            <span>Case Study</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>

                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-navy-950"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-slate-50 py-20 border-t border-slate-200 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-950">
            Need a similar custom website for your business?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We provide structured, milestone-based quotes and guaranteed delivery schedules.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => triggerBookServiceModal()}
              className="rounded-full bg-navy-950 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent transition-colors cursor-pointer"
            >
              Start Project Inquiry
            </button>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 hover:bg-slate-100 transition-colors"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
