"use client";

import React, { useState } from "react";
import { articles, getFeaturedArticle } from "@/data/articlesData";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { FeaturedArticle } from "@/components/insights/FeaturedArticle";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { NewsletterSection } from "@/components/insights/NewsletterSection";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const featured = getFeaturedArticle();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MK Digital Nexus Insights & Knowledge Hub",
    "description": "Explore web development insights, software solutions, digital marketing strategies, business automation guides and technology updates from MK Digital Nexus.",
    "url": "https://www.mkdigitalnexus.in/insights",
    "publisher": {
      "@type": "Organization",
      "name": "MK Digital Nexus",
      "url": "https://www.mkdigitalnexus.in",
      "logo": "https://www.mkdigitalnexus.in/logo.png"
    },
    "blogPost": articles.map((a) => ({
      "@type": "BlogPosting",
      "headline": a.title,
      "description": a.excerpt,
      "datePublished": a.date,
      "author": {
        "@type": "Person",
        "name": a.author.name
      },
      "url": `https://www.mkdigitalnexus.in/insights/${a.slug}`
    }))
  };

  return (
    <>
      <title>Insights & Blog | MK Digital Nexus</title>
      <meta
        name="description"
        content="Explore web development insights, software solutions, digital marketing strategies, business automation guides and technology updates from MK Digital Nexus."
      />
      <meta
        name="keywords"
        content="web development blog, custom software insights, business automation guides, Next.js architecture, digital marketing strategies, MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/insights" />

      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. HERO SECTION */}
      <InsightsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. FEATURED ARTICLE SECTION */}
      <FeaturedArticle article={featured} />

      {/* 3. BROWSE BY CATEGORY & LATEST ARTICLES GRID & SEARCH */}
      <InsightsExplorer
        articles={articles}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 4. NEWSLETTER / STAY UPDATED */}
      <NewsletterSection />
    </>
  );
}
