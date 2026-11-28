"use client";

import { PageHero } from "@/components/common/PageHero";
import { ContactHeroVisual } from "@/components/contact/ContactHeroVisual";
import { ContactWorkspace } from "@/components/contact/ContactWorkspace";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MK Digital Nexus",
    "description": "Get in touch with MK Digital Nexus for professional website development, custom software, CRM dashboards and digital solutions.",
    "url": "https://www.mkdigitalnexus.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "MK Digital Nexus",
      "telephone": "+916353121773",
      "email": "hello@mkdigitalnexus.in",
      "url": "https://www.mkdigitalnexus.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Shyam Apt, Shop No. 5, Near Vanzari Chowk, Nava Nagarwada, Talav Gate",
        "addressLocality": "Junagadh",
        "addressRegion": "Gujarat",
        "postalCode": "362001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "19:30"
      }
    }
  };

  return (
    <>
      <title>Contact MK Digital Nexus | Start Your Digital Project</title>
      <meta
        name="description"
        content="Get in touch with MK Digital Nexus for professional website development, custom software, CRM dashboards and digital solutions."
      />
      <meta
        name="keywords"
        content="contact MK Digital Nexus, start project enquiry, hire web developer Junagadh, custom software development quote, website quotation India"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/contact" />

      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* =========================================================================
          1. CONTACT PAGE HERO (COMMON INNER PAGE HERO)
          ========================================================================= */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        eyebrow="LET'S CONNECT"
        heading="Have a Project in Mind? Let's Make It Happen."
        highlightText="Make It Happen."
        description="Whether you need a business website, custom software, an e-commerce platform or a complete digital solution, we're ready to understand your requirements and help you move forward."
        primaryCta={{
          text: "Start a Conversation",
          href: "#project-enquiry",
        }}
        secondaryCta={{
          text: "Explore Our Services",
          href: "/services",
        }}
        visual={<ContactHeroVisual />}
      />

      {/* =========================================================================
          2. CONTACT INFORMATION & PROJECT ENQUIRY FORM WORKSPACE
          ========================================================================= */}
      <ContactWorkspace />

      {/* =========================================================================
          3. FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <ContactFAQ />
    </>
  );
}
