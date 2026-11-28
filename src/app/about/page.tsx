"use client";

import { PageHero } from "@/components/common/PageHero";
import { AboutHeroVisual } from "@/components/about/AboutHeroVisual";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { OurPhilosophy } from "@/components/about/OurPhilosophy";
import { OurExpertise } from "@/components/about/OurExpertise";
import { OurJourney } from "@/components/about/OurJourney";
import { OurCommitment } from "@/components/about/OurCommitment";
import { AboutConnect } from "@/components/about/AboutConnect";

export default function About() {
  return (
    <>
      <title>About MK Digital Nexus | Custom Web Development Studio</title>
      <meta
        name="description"
        content="Learn about MK Digital Nexus, a custom web development studio founded by Meet Khetani in Junagadh, Gujarat, serving clients across the USA, Canada, and India. Over 100+ live projects delivered."
      />
      <meta
        name="keywords"
        content="about MK Digital Nexus, Meet Khetani, web development studio Junagadh, custom software developers Gujarat, international web development agency"
      />
      <link rel="canonical" href="https://www.mkdigitalnexus.in/about" />

      {/* 1. Common Inner Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        eyebrow="GET TO KNOW US"
        heading="Technology, Creativity & Ideas That Move Businesses Forward."
        highlightText="Move Businesses Forward."
        description="MK Digital Nexus is a digital solutions company focused on website development, custom software and digital experiences. We bring business requirements and technology together to build practical solutions for modern businesses."
        primaryCta={{
          text: "Let's Work Together",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Explore Our Services",
          href: "/services",
        }}
        visual={<AboutHeroVisual />}
      />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Our Philosophy */}
      <OurPhilosophy />

      {/* 4. Our Areas of Expertise */}
      <OurExpertise />

      {/* 5. Our Journey */}
      <OurJourney />

      {/* 6. Our Commitment */}
      <OurCommitment />

      {/* 7. Let's Connect */}
      <AboutConnect />
    </>
  );
}
