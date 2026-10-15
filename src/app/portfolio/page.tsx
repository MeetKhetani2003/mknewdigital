"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { ProjectCardCompact } from "@/components/ui/ProjectCardCompact";
import { Search, X, ArrowLeft } from "lucide-react";
import { projects } from "@/utils/projectsData";

type Filter = "All" | "Industrial" | "Healthcare" | "E-commerce" | "Business" | "Institutional" | "Other";

const filters: Filter[] = ["All", "Industrial", "Healthcare", "E-commerce", "Business", "Institutional", "Other"];

const categoryGroups = [
  {
    key: "Industrial" as Filter,
    title: "Industrial & Manufacturing",
    desc: "Precision forging, heavy machinery, Canadian industrial services, and specialized equipment supplier portals.",
    categoryTag: "Heavy Industry & Manufacturing",
    items: projects.filter((p) => p.cat === "Industrial").slice(0, 10),
  },
  {
    key: "E-commerce" as Filter,
    title: "E-Commerce & Online Storefronts",
    desc: "Conversion-optimized stores, multi-category catalogs, and fast WhatsApp order routers.",
    categoryTag: "E-Commerce Engines",
    items: projects.filter((p) => p.cat === "E-commerce").slice(0, 10),
  },
  {
    key: "Healthcare" as Filter,
    title: "Healthcare & Clinical Portals",
    desc: "Doctor profiles, patient onboarding, and clinical booking systems.",
    categoryTag: "Medical & Health",
    items: projects.filter((p) => p.cat === "Healthcare").slice(0, 10),
  },
  {
    key: "Business" as Filter,
    title: "Corporate & Business Services",
    desc: "Service agency sites, hospitality & cafes, import-export consultants, and corporate portals.",
    categoryTag: "Business & Corporate",
    items: projects.filter((p) => p.cat === "Business").slice(0, 10),
  },
  {
    key: "Institutional" as Filter,
    title: "Institutional & Consultancies",
    desc: "Higher education institutes, coaching centers, and educational consulting advisors.",
    categoryTag: "Institutes & Learning",
    items: projects.filter((p) => p.cat === "Institutional").slice(0, 10),
  },
  {
    key: "Other" as Filter,
    title: "Specialised Platforms & Non-Profits",
    desc: "Real estate, hospitality suites, interior studios, and community NGO platforms.",
    categoryTag: "Specialized Verticals",
    items: projects.filter((p) => p.cat === "Other").slice(0, 10),
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
      <title>Website & Software Portfolio | 100+ Live Projects in Junagadh | MK Digital Nexus</title>
      <meta
        name="description"
        content="Explore 100+ live production websites, e-commerce stores, custom software, and digital marketing deployments shipped by MK Digital Nexus for businesses in Junagadh, Rajkot, and worldwide."
      />
      <meta
        name="keywords"
        content="website development portfolio junagadh, software development projects junagadh, live website examples gujarat, web design case studies junagadh, MK Digital Nexus projects, ecommerce sites junagadh"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/portfolio" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-44 sm:pb-24">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent">
              Selected Work & Case Studies
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-7xl lg:text-8xl">
              A studio that ships.
              <span className="block italic font-serif font-normal text-accent mt-2">
                Here's the proof.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-xl sm:text-2xl leading-relaxed text-muted">
              Browse our comprehensive archive of websites, storefronts, and brand portals 
              we've launched for operators across India, Canada, and global trade lanes. 
              <strong className="text-navy-900 font-bold"> {projects.length} live projects</strong> and counting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[72px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur-xl shadow-xs">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          {/* Categories Tab list */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActive(f);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  active === f
                    ? "border-navy-900 bg-navy-900 text-white shadow-md scale-[1.02]"
                    : "border-slate-200 bg-white text-ink/75 hover:border-navy-900/30 hover:text-navy-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by title, tag, or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-11 pr-10 text-sm outline-none transition-all placeholder:text-muted focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-navy-900 p-1"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {isCarouselView ? (
            /* Mode 1: Single Carousel Format for each category (5-10 projects per category) */
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
                      window.scrollTo({ top: 380, behavior: "smooth" });
                    }}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            /* Mode 2: Compact Card Grid when filtering or searching */
            <div>
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                      {searchQuery ? `Search Results` : `${active} Projects`}
                    </h2>
                    <span className="rounded-full bg-navy-900/10 px-3 py-1 text-xs font-bold text-navy-900">
                      {filtered.length} {filtered.length === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  {searchQuery && (
                    <p className="text-sm text-muted mt-1">
                      Matching "{searchQuery}" across categories
                    </p>
                  )}
                </div>

                <button
                  onClick={() => {
                    setActive("All");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-accent transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to All Category Carousels
                </button>
              </div>

              {filtered.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {filtered.map((p, i) => (
                    <Reveal key={p.id + active} delay={(i % 6) * 0.03}>
                      <ProjectCardCompact p={p} isGrid={true} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <p className="text-2xl font-bold text-navy-900">No projects found matching "{searchQuery}"</p>
                  <p className="text-base text-muted mt-2">Try searching with a different keyword or category.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActive("All");
                    }}
                    className="mt-6 rounded-full bg-navy-900 px-8 py-3 text-base font-bold text-white transition-all hover:bg-accent hover:shadow-lg"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
