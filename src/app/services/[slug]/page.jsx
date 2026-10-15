import ServiceDetailClient from "./service-client.jsx";

const serviceData = {
  "web-development": {
    title: "Website Development in Junagadh",
    subtitle: "High-Performance Next.js Websites & E-Commerce",
    description:
      "#1 Website development company in Junagadh, Gujarat. Fast, SEO-optimized custom websites and e-commerce platforms engineered for lead generation and maximum Google search visibility.",
    keywords: [
      "website development in junagadh",
      "website development company in junagadh",
      "web design in junagadh",
      "ecommerce website development junagadh",
      "next js development junagadh",
      "best web developers in junagadh",
      "business website designer vanzari chowk talav gate junagadh",
    ],
    overview:
      "We build lightning-fast, conversion-tuned websites in Junagadh and Rajkot. Using modern Next.js and React technology, we build mobile-first web storefronts and corporate sites with built-in on-page SEO to rank on Google Page 1.",
    techFeatures: [
      {
        label: "01",
        title: "Google Page 1 SEO Built-In",
        desc: "Semantic HTML5, automated XML sitemaps, JSON-LD Schema, and meta optimization tailored specifically for Junagadh and Saurashtra business searches.",
      },
      {
        label: "02",
        title: "Sub-Second Next.js Speed",
        desc: "99+ PageSpeed scores to eliminate bounce rates, boost mobile visitor conversion, and gain algorithmic priority on Google search.",
      },
      {
        label: "03",
        title: "WhatsApp & Maps Lead Capture",
        desc: "Direct-to-WhatsApp booking buttons, interactive Google Maps directions, and click-to-call mobile triggers that capture high-intent local buyers.",
      },
    ],
    liveLinks: [
      {
        name: "GWGC",
        url: "https://www.gwgc.ca/",
        img: "/websites/gwgc.png",
      },
      {
        name: "Anvil Techno Forge",
        url: "https://www.anviltechnoforge.co.in",
        img: "/websites/AnvilTechno.png",
      },
      {
        name: "Green Wave Packaging",
        url: "https://www.greenwavepackaging.ca/",
        img: "/websites/GreenWavePackaging.png",
      },
      {
        name: "Ravi Prakash Industries",
        url: "https://www.raviprakashindustries.in/",
        img: "/websites/RaviprakashIndustries.png",
      },
      {
        name: "Groovy Cafe",
        url: "https://www.groovycafe.in/",
        img: "/websites/GroovyCafe.png",
      },
      {
        name: "RSDM Institute",
        url: "https://www.rsdminstitute.com/",
        img: "/websites/rsdm.png",
      },
    ],
  },

  "software-development": {
    title: "Software Development in Junagadh",
    subtitle: "Custom Web Applications, MERN Stack & ERPs",
    description:
      "Top custom software development company in Junagadh. Scalable MERN stack software, customized billing software, business ERPs, and cloud automation built for businesses across Junagadh & Gujarat.",
    keywords: [
      "software development in junagadh",
      "software development company in junagadh",
      "custom software development junagadh",
      "mern stack development junagadh",
      "billing software junagadh",
      "erp software junagadh",
      "web application developers junagadh",
    ],
    overview:
      "We engineer custom enterprise software applications using the modern MERN stack (MongoDB, Express, React, Node.js). From multi-branch inventory systems and GST billing software to secure client management backends, we build software that automates operations.",
    techFeatures: [
      {
        label: "01",
        title: "Custom Business Logic",
        desc: "Software engineered precisely around your unique workflow, eliminating redundant manual spreadsheets and human error.",
      },
      {
        label: "02",
        title: "Full MERN Scalability",
        desc: "Modern Node.js microservices and MongoDB database architectures that effortlessly handle high-volume transactions and branch expansions.",
      },
      {
        label: "03",
        title: "Role-Based Security",
        desc: "Strict access control, encrypted user authentication, automated daily cloud backups, and offline-compatible responsive dashboards.",
      },
    ],
    liveLinks: [
      {
        name: "Groovy Foods",
        url: "https://www.groovyfoods.in/",
        img: "/software/GroovyFoods.png",
      },
      {
        name: "M & P Fasteners",
        url: "https://www.mandpfasteners.in/",
        img: "/software/Rickyexport.png",
      },
    ],
  },

  "digital-marketing-agency-junagadh": {
    title: "Digital Marketing Agency in Junagadh",
    subtitle: "Organic SEO, Social Media & High-ROAS Growth",
    description:
      "Premier digital marketing agency in Junagadh. Comprehensive local SEO, Instagram viral content, Meta Ads, and omnichannel brand positioning that outranks competitors and multiplies customer inquiries.",
    keywords: [
      "digital marketing in junagadh",
      "digital marketing agency in junagadh",
      "best digital marketing company in junagadh",
      "social media marketing junagadh",
      "seo services in junagadh",
      "seo company in junagadh",
      "lead generation agency junagadh",
    ],
    overview:
      "As Junagadh's dedicated digital marketing firm, we combine deep Saurashtra regional consumer insights with battle-tested performance marketing. We rank your brand organically on Google while driving explosive social demand through viral AI reels and targeted campaigns.",
    techFeatures: [
      {
        label: "01",
        title: "Google Local Search Domination",
        desc: "Rank for high-ticket commercial keywords like 'best in Junagadh', capturing customers at the exact moment they are ready to purchase.",
      },
      {
        label: "02",
        title: "Viral Social Media Production",
        desc: "High-retention 4K AI video reels, custom branded carousels, and engaging Gujarati & Hindi copy that build authentic local community trust.",
      },
      {
        label: "03",
        title: "Direct Conversion Funnels",
        desc: "Engineered landing pages and frictionless WhatsApp lead funnels that convert social traffic directly into qualified customer phone calls.",
      },
    ],
    liveLinks: [
      {
        name: "Groovy Cafe",
        url: "https://www.groovycafe.in/",
        img: "/websites/GroovyCafe.png",
      },
      {
        name: "Shynex Detailing",
        url: "https://www.shynexdetailing.ca/",
        img: "/websites/shynex.png",
      },
    ],
  },

  "meta-ads-google-ads-junagadh": {
    title: "Meta Ads & Google Ads in Junagadh",
    subtitle: "Hyper-Targeted Paid Acquisition & Instant Leads",
    description:
      "Expert Meta Ads (Facebook & Instagram) and Google Ads PPC agency in Junagadh. Stop wasting ad budget and scale qualified leads, direct calls, and store visits with guaranteed ROAS.",
    keywords: [
      "meta ads agency in junagadh",
      "facebook ads service in junagadh",
      "instagram ads agency junagadh",
      "google ads in junagadh",
      "google ads agency in junagadh",
      "google ppc company in junagadh",
      "paid performance marketing junagadh",
    ],
    overview:
      "Tired of boosting posts with zero return? We design and manage high-converting Meta Ads and Google Search PPC campaigns specifically optimized for Junagadh, Rajkot, and national markets with strict negative keyword filtering and laser-sharp targeting.",
    techFeatures: [
      {
        label: "01",
        title: "Google High-Intent Search Ads",
        desc: "Show up at the very top of Google when potential clients actively search for your service in Junagadh, capturing ready-to-buy inquiries.",
      },
      {
        label: "02",
        title: "Meta Hyper-Local Targeting",
        desc: "Pinpoint buyers within 5 to 50 km of your Junagadh location using custom demographics, interest layers, and behavior segmentation.",
      },
      {
        label: "03",
        title: "Real-Time ROAS Analytics",
        desc: "Transparent weekly reporting tracking cost-per-lead, click-through rates, and exact sales revenue generated from your advertising rupees.",
      },
    ],
    liveLinks: [
      {
        name: "GWGC",
        url: "https://www.gwgc.ca/",
        img: "/websites/gwgc.png",
      },
      {
        name: "Anvil Techno Forge",
        url: "https://www.anviltechnoforge.co.in",
        img: "/websites/AnvilTechno.png",
      },
    ],
  },

  "google-profile-local-seo-junagadh": {
    title: "Google Profile SEO in Junagadh",
    subtitle: "Rank #1 on Google Maps 3-Pack & Local Searches",
    description:
      "#1 Google Business Profile SEO and Local Google Maps ranking service in Junagadh. Optimize your GMB listing to attract massive phone calls, direction requests, and verified 5-star customer reviews.",
    keywords: [
      "google profile seo in junagadh",
      "google business profile ranking junagadh",
      "google maps ranking in junagadh",
      "local seo agency in junagadh",
      "gmb optimization company junagadh",
      "vanzari chowk talav gate google listing seo",
    ],
    overview:
      "Over 76% of Junagadh shoppers search Google Maps before visiting a local store or booking a professional. We optimize your Google Business Profile to dominate the top 3 spots in the local map pack for all relevant Junagadh commercial keywords.",
    techFeatures: [
      {
        label: "01",
        title: "Google Maps 3-Pack Domination",
        desc: "Comprehensive NAP consistency, localized category mapping, and geo-tagged photo uploads that trigger Google's local ranking algorithm.",
      },
      {
        label: "02",
        title: "Review Generation & Management",
        desc: "Proven review funnel automation to consistently earn genuine 5-star client ratings that dramatically boost local consumer trust.",
      },
      {
        label: "03",
        title: "Local Citations & Authority",
        desc: "100% manual high-authority Indian business directory citations ensuring your address and phone number are recognized across the web.",
      },
    ],
    liveLinks: [
      {
        name: "BSR Worldwide",
        url: "https://www.bsrworldwide.in/",
        img: "/websites/bsr.png",
      },
      {
        name: "Groovy Cafe",
        url: "https://www.groovycafe.in/",
        img: "/websites/GroovyCafe.png",
      },
    ],
  },

  "crm-inventory-dashboard": {
    title: "CRM & Inventory Dashboards in Junagadh",
    subtitle: "Custom Internal Tools & Real-Time Intelligence",
    description:
      "Bespoke CRM dashboards, inventory tracking portals, and operational management systems engineered for manufacturing, retail, and service businesses in Junagadh.",
    keywords: [
      "crm dashboard junagadh",
      "business intelligence dashboard junagadh",
      "inventory dashboard junagadh",
      "admin panel development junagadh",
    ],
    overview:
      "Replace fragmented WhatsApp messages and Excel sheets with a centralized, cloud-hosted admin dashboard designed specifically for your team's workflow and internal operations in Junagadh.",
    techFeatures: [
      {
        label: "01",
        title: "Bespoke Workflow Logic",
        desc: "Engineered specifically to mirror your real-world team workflow, stock movement, and customer follow-up pipelines.",
      },
      {
        label: "02",
        title: "Real-Time Profit & Stock Insights",
        desc: "Automated graphs, low-stock WhatsApp alerts, and profit margin breakdowns visible from any smartphone or tablet.",
      },
      {
        label: "03",
        title: "High Concurrency & Privacy",
        desc: "Bank-grade data encryption, multi-tenant permission layers, and self-hosted database options to safeguard business secrets.",
      },
    ],
    liveLinks: [
      {
        name: "Bhagvati Admin (Demo)",
        url: "https://bhagvati-admin.vercel.app/",
        img: "/crm/bhagvati.png",
      },
      {
        name: "Restaurant POS Admin (Demo)",
        url: "https://pos-client-kappa.vercel.app/",
        img: "/crm/restaurant.png",
      },
    ],
  },
};

/* ================================
   Dynamic SEO Metadata
================================ */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = serviceData[slug] || serviceData["web-development"];

  return {
    title: `${data.title} | MK Digital Nexus`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.title} | MK Digital Nexus`,
      description: data.description,
      url: `https://www.mkdigitalnexus.in/services/${slug}`,
      siteName: "MK Digital Nexus Junagadh",
      type: "website",
    },
    alternates: {
      canonical: `https://www.mkdigitalnexus.in/services/${slug}`,
    },
  };
}

/* ================================
   Page Component
================================ */

export default async function Page({ params }) {
  const { slug } = await params;

  const data = serviceData[slug];

  if (!data) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-3xl font-bold text-navy-900">Service Not Found</h1>
        <p className="mt-2 text-muted">The service you are looking for does not exist.</p>
      </div>
    );
  }

  return <ServiceDetailClient data={data} />;
}
