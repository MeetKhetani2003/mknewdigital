"use client";

import { PageHero } from "@/components/common/PageHero";
import { ProcessHeroVisual } from "@/components/process/ProcessHeroVisual";
import { ProjectJourney } from "@/components/process/ProjectJourney";
import { ProcessDevelopment } from "@/components/process/ProcessDevelopment";
import { ProcessTestingQA } from "@/components/process/ProcessTestingQA";
import { ProcessLaunchDeployment } from "@/components/process/ProcessLaunchDeployment";
import { ProcessSupportGrowth } from "@/components/process/ProcessSupportGrowth";
import { ProcessCTA } from "@/components/process/ProcessCTA";

export default function ProcessPage() {
  return (
    <>
      <title>Our Process | How We Work | MK Digital Nexus</title>
      <meta
        name="description"
        content="Discover how MK Digital Nexus approaches web development and digital projects. From first conversation to final launch, explore our thoughtful, transparent process."
      />
      <meta
        name="keywords"
        content="our process, web development process, how we work, MK Digital Nexus process, software development lifecycle, digital solutions workflow"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/process" />

      {/* =========================================================================
          1. OUR PROCESS HERO
          ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Process" },
        ]}
        eyebrow="HOW WE WORK"
        heading="From First Conversation to Final Launch."
        highlightText="Final Launch."
        description="Every successful digital project begins with understanding. Discover how we turn your requirements into a clear plan, thoughtful design and a functional digital solution."
        primaryCta={{
          text: "Start Your Project",
          href: null, // Triggers the project inquiry modal directly
        }}
        secondaryCta={{
          text: "Explore Our Services",
          href: "/services",
        }}
        visual={<ProcessHeroVisual />}
      />

      {/* =========================================================================
          2. THE PROJECT JOURNEY (5-STAGE HORIZONTAL OVERVIEW)
          ========================================================================= */}
      <ProjectJourney />

      {/* =========================================================================
          3. PHASE 04 — DEVELOPMENT & IMPLEMENTATION
          ========================================================================= */}
      <ProcessDevelopment />

      {/* =========================================================================
          4. PHASE 05 — TESTING & QUALITY ASSURANCE
          ========================================================================= */}
      <ProcessTestingQA />

      {/* =========================================================================
          5. PHASE 06 — LAUNCH & DEPLOYMENT
          ========================================================================= */}
      <ProcessLaunchDeployment />

      {/* =========================================================================
          6. PHASE 07 — SUPPORT & CONTINUOUS GROWTH
          ========================================================================= */}
      <ProcessSupportGrowth />

      {/* =========================================================================
          7. PROCESS CLOSING CTA
          ========================================================================= */}
      <ProcessCTA />
    </>
  );
}
