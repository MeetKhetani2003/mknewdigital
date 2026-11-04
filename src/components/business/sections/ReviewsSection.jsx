"use client";
import React from "react";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function ReviewsSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const reviews = content.reviews || [];

  return (
    <section ref={containerRef} id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Reviews Header Box */}
        <div className="max-w-2xl mx-auto text-center mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl font-extrabold text-blue-600">G</span>
            <span className="text-3xl font-extrabold text-red-500">o</span>
            <span className="text-3xl font-extrabold text-amber-500">o</span>
            <span className="text-3xl font-extrabold text-blue-600">g</span>
            <span className="text-3xl font-extrabold text-emerald-500">l</span>
            <span className="text-3xl font-extrabold text-red-500">e</span>
            <span className="text-xl font-bold text-slate-800 ml-2">Rating</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl font-black text-slate-900">
              {content.overallRating || "4.9"}
            </span>
            <div className="text-left">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Based on {content.totalReviews || "180+"} verified customer reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                        {rev.author}
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                      </h4>
                      <p className="text-[11px] text-slate-400">{rev.date}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 text-xs font-bold">Google</span>
                </div>

                <div className="flex items-center text-amber-400 mb-3">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Verified Client</span>
                <span className="text-emerald-600 font-semibold">Positive Experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

