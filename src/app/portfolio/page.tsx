"use client";

import { PageHero } from "@/components/common/PageHero";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { FeaturedCaseStudies } from "@/components/portfolio/FeaturedCaseStudies";
import { PortfolioFAQ } from "@/components/portfolio/PortfolioFAQ";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";

export default function Portfolio() {
  return (
    <>
      <title>Our Work & Live Portfolio | Verified Digital Deployments | MK Digital Nexus</title>
      <meta
        name="description"
        content="Explore our verified archive of custom websites, e-commerce stores, web applications and business software engineered for companies across North America and India by MK Digital Nexus."
      />
      <meta
        name="keywords"
        content="web development portfolio, custom software projects, Next.js live websites, client case studies, MK Digital Nexus portfolio"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/portfolio" />

      {/* =========================================================================
          1. PORTFOLIO HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
        eyebrow="STUDIO PROOF OF EXECUTION"
        heading="Proven Digital Experiences. Real Code. Real Results."
        highlightText="Real Results."
        description="Explore our verified portfolio of custom websites, e-commerce storefronts, web applications and business software built for manufacturing companies, medical clinics, export houses, and direct-to-consumer brands."
        primaryCta={{
          text: "Discuss Your Project",
          href: null,
        }}
        secondaryCta={{
          text: "Contact Studio",
          href: "/contact",
        }}
      />

      {/* =========================================================================
          2. PROJECT CATEGORIES & PORTFOLIO EXPLORER
          ========================================================================= */}
      <PortfolioExplorer />

      {/* =========================================================================
          3. FEATURED CASE STUDIES (BEHIND THE PROJECTS)
          ========================================================================= */}
      <FeaturedCaseStudies />

      {/* =========================================================================
          4. PORTFOLIO FAQS
          ========================================================================= */}
      <PortfolioFAQ />

      {/* =========================================================================
          5. PORTFOLIO CTA
          ========================================================================= */}
      <PortfolioCTA />
    </>
  );
}
