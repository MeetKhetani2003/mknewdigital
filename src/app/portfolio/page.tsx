"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Search, X } from "lucide-react";
import { projects } from "@/utils/projectsData";

type Filter = "All" | "Industrial" | "Healthcare" | "E-commerce" | "Business" | "Institutional" | "Other";

const filters: Filter[] = ["All", "Industrial", "Healthcare", "E-commerce", "Business", "Institutional", "Other"];

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

  return (
    <>
      <title>Our Portfolio & Shipped Projects | MK Digital Nexus</title>
      <meta name="description" content="Browse through 62+ live websites, storefronts, and web portals shipped by MK Digital Nexus for businesses worldwide." />
      
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Selected work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              A studio that ships.
              <span className="block italic font-serif font-normal text-accent">
                Here's the proof.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Browse our comprehensive archive of websites, storefronts, and brand portals 
              we've launched for operators across India, Canada, and global trade lanes. 
              <strong> {projects.length} live projects</strong> and counting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
          {/* Categories Tab list */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActive(f);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  active === f
                    ? "border-navy-900 bg-navy-900 text-white shadow-sm"
                    : "border-slate-200 bg-white text-ink/70 hover:border-navy-900/20 hover:text-navy-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-8 text-sm outline-none transition-all placeholder:text-muted focus:border-navy-900 focus:ring-1 focus:ring-navy-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-navy-900"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.id + active} delay={(i % 6) * 0.05}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted">No projects found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActive("All");
                }}
                className="mt-4 rounded-full bg-navy-900 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-accent"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imageError, setImageError] = useState(false);

  const getGradient = (cat: string) => {
    switch (cat) {
      case "Industrial":
        return "from-slate-700 to-slate-900";
      case "Healthcare":
        return "from-cyan-600 to-blue-800";
      case "E-commerce":
        return "from-purple-600 to-indigo-800";
      case "Business":
        return "from-emerald-600 to-teal-800";
      case "Institutional":
        return "from-orange-600 to-amber-800";
      default:
        return "from-rose-600 to-pink-800";
    }
  };

  const cleanUrl = p.url.replace("https://", "").replace("www.", "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white card-shadow transition-all duration-500 hover:-translate-y-1.5 hover:card-shadow-hover">
      {/* Mock Browser Header */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3 select-none">
        <div className="h-2 w-2 rounded-full bg-rose-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 rounded bg-slate-200/50 py-0.5 text-center text-[9px] font-medium text-muted/65 tracking-wider">
          {cleanUrl}
        </div>
      </div>

      {/* Screen Aspect ratio exactly 1.6 matches 1280x800 */}
      <a href={`/portfolio/${p.id}`} className="block relative aspect-[1.6] overflow-hidden bg-offwhite border-b border-slate-100">
        {imageError ? (
          <div className={`flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br ${getGradient(p.cat)} text-white`}>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] opacity-80">{p.cat}</span>
            <div className="text-xl font-serif font-normal italic tracking-wide">{p.title}</div>
            <span className="text-xs opacity-65">View Case Study</span>
          </div>
        ) : (
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg backdrop-blur opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </a>

      {/* Meta Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
            {p.cat}
          </span>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-muted hover:text-navy-900 transition-colors flex items-center gap-0.5"
          >
            Visit Live <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-navy-900 hover:text-accent transition-colors">
          <a href={`/portfolio/${p.id}`}>{p.title}</a>
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted line-clamp-2">{p.desc}</p>
        
        <a
          href={`/portfolio/${p.id}`}
          className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-navy-900 hover:text-accent transition-colors"
        >
          View details <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
