"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { 
  getArticleBySlug, 
  getRelatedArticles, 
  articles 
} from "@/data/articlesData";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Copy, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { NewsletterSection } from "@/components/insights/NewsletterSection";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const [copied, setCopied] = useState(false);

  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#0D1B2A]">Article Not Found</h1>
        <p className="mt-2 text-[#667085]">The requested insight article could not be located.</p>
        <Link 
          href="/insights" 
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Insights</span>
        </Link>
      </div>
    );
  }

  const related = getRelatedArticles(article.slug, 3);
  const shareUrl = `https://www.mkdigitalnexus.in/insights/${article.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://www.mkdigitalnexus.in${article.coverImage}`,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "MK Digital Nexus",
      "logo": "https://www.mkdigitalnexus.in/logo.png"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl,
    }
  };

  return (
    <>
      <title>{`${article.title} | MK Digital Nexus Insights`}</title>
      <meta name="description" content={article.excerpt} />
      <link rel="canonical" href={shareUrl} />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="relative bg-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* =====================================================================
              1. BREADCRUMBS & BACK LINK
              ===================================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <nav aria-label="Breadcrumb">
              <ol className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-[#667085]">
                <li>
                  <Link href="/" className="hover:text-[#0D1B2A] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[#CBD5E1]">/</li>
                <li>
                  <Link href="/insights" className="hover:text-[#0D1B2A] transition-colors">
                    Insights
                  </Link>
                </li>
                <li className="text-[#CBD5E1]">/</li>
                <li className="text-[#0D1B2A] font-semibold truncate max-w-[200px] sm:max-w-[320px]">
                  {article.category}
                </li>
              </ol>
            </nav>

            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2563EB] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* =====================================================================
              2. ARTICLE HEADER BLOCK
              ===================================================================== */}
          <header className="max-w-4xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>{article.category}</span>
            </div>

            <h1 className="text-[28px] sm:text-[38px] lg:text-[46px] font-bold tracking-tight text-[#0D1B2A] leading-[1.18]">
              {article.title}
            </h1>

            <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-[#667085]">
              {article.excerpt}
            </p>

            {/* Author & Meta Row */}
            <div className="mt-8 pt-6 border-t border-[#E7EAF0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-full bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-[13px] border-2 border-white shadow-2xs">
                  MK
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#0D1B2A]">
                    {article.author.name}
                  </div>
                  <div className="text-[11.5px] text-[#667085]">
                    {article.author.role} • MK Digital Nexus
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[12.5px] font-mono text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#94A3B8]" />
                  <span>{article.formattedDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#94A3B8]" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </header>

          {/* =====================================================================
              3. FEATURED COVER IMAGE
              ===================================================================== */}
          <div className="rounded-2xl border border-[#E7EAF0] overflow-hidden aspect-[16/9] max-h-[520px] bg-slate-100 mb-12 sm:mb-16 shadow-2xs">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* =====================================================================
              4. ARTICLE CONTENT GRID WITH STICKY TABLE OF CONTENTS
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left/Sidebar: Table of Contents & Share Links (Sticky Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 order-2 lg:order-1">
              {/* Table of Contents */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <div className="rounded-xl border border-[#E7EAF0] bg-[#F8FAFC] p-5 shadow-2xs">
                  <span className="text-[11.5px] font-mono uppercase tracking-[0.14em] font-bold text-[#0D1B2A] block mb-3.5 flex items-center gap-2">
                    <BookOpen className="h-3.5 w-3.5 text-[#2563EB]" />
                    <span>TABLE OF CONTENTS</span>
                  </span>

                  <ul className="space-y-2 text-[13px] text-[#475467]">
                    {article.tableOfContents.map((toc) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          className="hover:text-[#2563EB] transition-colors leading-snug block py-1 border-l-2 border-transparent hover:border-[#2563EB] pl-2.5"
                        >
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Links */}
              <div className="rounded-xl border border-[#E7EAF0] bg-white p-5 shadow-2xs space-y-3">
                <span className="text-[11.5px] font-mono uppercase tracking-[0.14em] font-bold text-[#0D1B2A] block flex items-center gap-2">
                  <Share2 className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>SHARE THIS INSIGHT</span>
                </span>

                <div className="flex items-center gap-2 pt-1">
                  {/* Twitter / X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[#E7EAF0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0D1B2A] text-xs font-semibold flex-1 text-center transition-colors"
                  >
                    X (Twitter)
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[#E7EAF0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0D1B2A] text-xs font-semibold flex-1 text-center transition-colors"
                  >
                    LinkedIn
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${article.title} - ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[#E7EAF0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0D1B2A] text-xs font-semibold flex-1 text-center transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-lg border border-[#E7EAF0] bg-white text-[12px] font-semibold text-[#0D1B2A] hover:bg-[#F8FAFC] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#667085]" />
                      <span>Copy Article Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Consultation Callout */}
              <div className="rounded-xl bg-[#0D1B2A] text-white p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#60A5FA] font-semibold block">
                  LOOKING TO IMPLEMENT?
                </span>
                <h4 className="text-[15px] font-bold text-white leading-snug">
                  Let&apos;s architect your next digital milestone.
                </h4>
                <p className="text-[12px] text-slate-300 leading-relaxed">
                  Discuss custom Next.js engineering and business solutions directly with our studio.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-4 py-2 rounded-lg transition-colors"
                >
                  <span>Start Project Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* Right/Main Article Content */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="prose prose-slate max-w-none text-[15px] sm:text-[16px] leading-[1.75] text-[#334155] [&_h2]:text-[24px] [&_h2]:sm:text-[28px] [&_h2]:font-bold [&_h2]:text-[#0D1B2A] [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[18px] [&_h3]:sm:text-[20px] [&_h3]:font-bold [&_h3]:text-[#0D1B2A] [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:my-4 [&_ul]:my-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:my-1.5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#2563EB] [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-[#0D1B2A] [&_blockquote]:bg-[#F8FAFC] [&_blockquote]:rounded-r-lg [&_pre]:bg-[#0D1B2A] [&_pre]:text-slate-200 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:my-6 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:overflow-x-auto [&_code]:font-mono [&_code]:text-[13px] [&_code]:bg-[#F1F5F9] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[#2563EB]">
                <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, "<p>").replace(/## (.*?)\n/g, "<h2>$1</h2>").replace(/> "(.*?)"/g, "<blockquote>\"$1\"</blockquote>") }} />
              </div>

              {/* End of article author signature */}
              <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0] flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-[#0D1B2A]">
                    Written by {article.author.name}
                  </h4>
                  <p className="text-[13px] text-[#667085] mt-0.5">
                    Lead Architect & Founder at MK Digital Nexus. Junagadh, Gujarat.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="text-[12.5px] font-semibold text-[#2563EB] hover:underline"
                >
                  About Studio
                </Link>
              </div>
            </div>

          </div>

          {/* =====================================================================
              5. RELATED ARTICLES
              ===================================================================== */}
          {related && related.length > 0 && (
            <div className="mt-16 sm:mt-24 pt-12 border-t border-[#E7EAF0]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[11.5px] font-mono font-bold uppercase tracking-wider text-[#2563EB]">
                    CONTINUE READING
                  </span>
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0D1B2A] tracking-tight mt-1">
                    Related Articles & Guides
                  </h3>
                </div>

                <Link
                  href="/insights"
                  className="text-[13px] font-semibold text-[#2563EB] hover:underline hidden sm:inline-flex items-center gap-1"
                >
                  <span>All Articles</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <article
                    key={rel.id}
                    className="group rounded-xl border border-[#E7EAF0] bg-white overflow-hidden shadow-2xs hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-semibold text-[#2563EB] block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-[15px] font-bold text-[#0D1B2A] leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                        <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <div className="mt-3 text-[11px] font-mono text-[#667085]">
                        {rel.readTime}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
