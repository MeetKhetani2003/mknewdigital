"use client";

import { PageHero } from "@/components/common/PageHero";
import { CoreServicesDirectory } from "@/components/services/CoreServicesDirectory";
import { WhatWeBuild } from "@/components/services/WhatWeBuild";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { WhyWorkWithUs } from "@/components/services/WhyWorkWithUs";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { FinalServicesCTA } from "@/components/services/FinalServicesCTA";

export default function Services() {
  return (
    <>
      <title>Services & Digital Solutions | Website Development, Software & Marketing</title>
      <meta
        name="description"
        content="From custom websites and web applications to business software and digital growth solutions, MK Digital Nexus helps businesses turn ideas into powerful digital experiences."
      />
      <meta
        name="keywords"
        content="website development, custom software development, web applications, e-commerce development, CRM systems, digital marketing, MK Digital Nexus"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/services" />

      {/* 1. Common Inner Page Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        eyebrow="WHAT WE DO"
        heading="Digital Solutions Built Around Your Business."
        highlightText="Your Business."
        description="From custom websites and web applications to business software and digital growth solutions, we help businesses turn their ideas into powerful digital experiences."
        primaryCta={{
          text: "Discuss Your Project",
          href: null,
        }}
        secondaryCta={{
          text: "Explore Our Work",
          href: "/portfolio",
        }}
      />

      {/* 2. OUR CORE SERVICES DIRECTORY */}
      <CoreServicesDirectory />

      {/* 3. WHAT WE BUILD CAPABILITIES */}
      <WhatWeBuild />

      {/* 4. OUR TECHNOLOGY STACK */}
      <TechnologyStack />

      {/* 5. WHY WORK WITH US */}
      <WhyWorkWithUs />

      {/* 6. SERVICE FAQs */}
      <ServiceFAQ />

      {/* 7. FINAL PROJECT CTA */}
      <FinalServicesCTA />
    </>
  );
}
