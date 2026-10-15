"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/utils/projectsData";

export function ProjectCardCompact({
  p,
  isGrid = false,
  className = "",
}: {
  p: Project;
  isGrid?: boolean;
  className?: string;
}) {
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

  const cleanUrl = p.url.replace("https://", "").replace("www.", "").replace(/\/$/, "");

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 ${
        isGrid ? "w-full" : "w-[290px] sm:w-[320px] shrink-0 snap-start"
      } ${className}`}
    >
      {/* Mock Browser Header */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/90 px-3.5 py-2.5 select-none">
        <div className="h-2 w-2 rounded-full bg-rose-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className="ml-2 flex-1 rounded bg-slate-200/60 py-0.5 text-center text-[10px] font-mono text-slate-600 truncate px-1">
          {cleanUrl}
        </div>
      </div>

      {/* Screen Preview */}
      <Link
        href={`/portfolio/${p.id}`}
        className="block relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100"
      >
        {imageError ? (
          <div className={`flex h-full w-full flex-col justify-between p-5 bg-gradient-to-br ${getGradient(p.cat)} text-white`}>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{p.cat}</span>
            <div className="text-base font-serif italic">{p.title}</div>
            <span className="text-[11px] opacity-75">View Study →</span>
          </div>
        ) : (
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-navy-900 shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </Link>

      {/* Meta Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent truncate">
            {p.cat}
          </span>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-slate-500 hover:text-navy-900 transition-colors flex items-center gap-0.5 shrink-0"
          >
            Live <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-navy-900 group-hover:text-accent transition-colors line-clamp-1">
          <Link href={`/portfolio/${p.id}`}>{p.title}</Link>
        </h3>

        <p className="mt-1 flex-1 text-xs leading-relaxed text-muted line-clamp-2">
          {p.desc}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
          <Link
            href={`/portfolio/${p.id}`}
            className="inline-flex items-center gap-1 text-navy-900 hover:text-accent transition-colors"
          >
            Case Study <ArrowRight className="h-3 w-3" />
          </Link>
          <span className="text-[10px] font-medium text-slate-400">Deployed</span>
        </div>
      </div>
    </article>
  );
}
