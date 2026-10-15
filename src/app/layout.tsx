import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkdigitalnexus.in"),
  title: {
    default: "Website Development & Software Development in Junagadh | Digital Marketing, Meta Ads & Google Profile SEO | MK Digital Nexus",
    template: "%s | MK Digital Nexus Junagadh",
  },
  description:
    "#1 Website development company & custom software development agency in Junagadh, Gujarat. 100+ live projects delivered. Specialists in digital marketing, Meta Ads (Facebook & Instagram), Google Ads PPC, and Google Business Profile SEO ranking. Located near Vanzari Chowk, Talav Gate, Junagadh.",
  keywords: [
    // Website Development
    "website development in junagadh",
    "website development company in junagadh",
    "website design in junagadh",
    "best website developer in junagadh",
    "web development service in junagadh",
    "ecommerce website development junagadh",
    "nextjs web development junagadh",
    "business website designer junagadh",
    // Software Development
    "software development in junagadh",
    "software development company in junagadh",
    "custom software development junagadh",
    "mern stack developers junagadh",
    "billing software junagadh",
    "inventory management software junagadh",
    "crm development junagadh",
    "erp software company junagadh",
    "web application developers junagadh",
    // Digital Marketing
    "digital marketing in junagadh",
    "digital marketing agency in junagadh",
    "best digital marketing company in junagadh",
    "social media marketing agency junagadh",
    "seo services in junagadh",
    "seo company in junagadh",
    "lead generation agency junagadh",
    // Meta Ads & Social Ads
    "meta ads agency in junagadh",
    "facebook ads agency junagadh",
    "instagram ads agency junagadh",
    "performance marketing junagadh",
    "ai video reels junagadh",
    "paid advertising agency junagadh",
    // Google Ads & PPC
    "google ads in junagadh",
    "google ads agency in junagadh",
    "google ppc company in junagadh",
    "google search ads specialist junagadh",
    // Google Profile SEO & Local Maps
    "google profile seo in junagadh",
    "google business profile seo junagadh",
    "google maps ranking junagadh",
    "local seo agency in junagadh",
    "gmb optimization in junagadh",
    // Local Landmarks & Brand Searches
    "MK Digital Nexus",
    "MK Digital Nexus Junagadh",
    "web development near Vanzari chowk Junagadh",
    "Talav Gate Junagadh web design",
    "Nava Nagarwada Junagadh digital marketing",
    "Shyam Apartment Junagadh",
    "website development in rajkot",
    "digital marketing agency in rajkot",
    "web design agency Saurashtra Gujarat"
  ],
  authors: [{ name: "MK Digital Nexus", url: "https://www.mkdigitalnexus.in" }],
  creator: "MK Digital Nexus",
  publisher: "MK Digital Nexus",
  category: "technology",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Junagadh",
    "geo.position": "21.5222;70.4579",
    "ICBM": "21.5222, 70.4579",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mkdigitalnexus.in",
    siteName: "MK Digital Nexus Junagadh",
    title: "#1 Website Development, Software & Digital Marketing Agency in Junagadh",
    description: "Rank #1 with high-conversion websites, custom software, Meta & Google Ads, and Google Business Profile SEO in Junagadh & Rajkot.",
    images: [
      {
        url: "/images/hero-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "MK Digital Nexus - Top Web Development & Digital Marketing Agency in Junagadh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Digital Nexus | Top Website Development & Software Agency in Junagadh",
    description: "High-speed Next.js websites, custom MERN software, Google Ads, Meta Ads & Google Profile SEO in Junagadh.",
    images: ["/images/hero-mockup.jpg"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  alternates: {
    canonical: "https://www.mkdigitalnexus.in",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Core LocalBusiness & ProfessionalService JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://www.mkdigitalnexus.in/#localbusiness",
                  "name": "MK Digital Nexus - Website Development, Software & Digital Marketing Agency Junagadh",
                  "alternateName": [
                    "MK Digital Nexus",
                    "MK Digital Nexus Junagadh",
                    "Website Development Junagadh",
                    "Custom Software Development Junagadh"
                  ],
                  "url": "https://www.mkdigitalnexus.in",
                  "logo": "https://www.mkdigitalnexus.in/logo.png",
                  "image": "https://www.mkdigitalnexus.in/images/hero-mockup.jpg",
                  "founder": {
                    "@type": "Person",
                    "name": "Meet Khetani",
                    "jobTitle": "Founder & Lead Full-Stack Architect",
                    "image": "https://www.mkdigitalnexus.in/owner.png",
                    "sameAs": "https://www.linkedin.com/company/mk-digital-nexus/"
                  },
                  "telephone": "+916353121773",
                  "email": "hello@mkdigitalnexus.in",
                  "priceRange": "₹2000 - ₹35000",
                  "paymentAccepted": "Cash, UPI, Credit Card, Bank Transfer, Net Banking",
                  "currenciesAccepted": "INR",
                  "hasMap": "https://share.google/VqmKOhc9O8q5wXUvg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "First floor, Shyam Apt, Shop no. 5, road, near Vanzari chowk, Vanzari Chowk, Nava Nagarwada, Talav Gate",
                    "addressLocality": "Junagadh",
                    "addressRegion": "Gujarat",
                    "postalCode": "362001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 21.5222,
                    "longitude": 70.4579
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ],
                      "opens": "10:00",
                      "closes": "19:00"
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "68",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "sameAs": [
                    "https://share.google/VqmKOhc9O8q5wXUvg",
                    "https://www.instagram.com/mkdigitalnexus/",
                    "https://www.linkedin.com/company/mk-digital-nexus/",
                    "https://wa.me/916353121773"
                  ],
                  "areaServed": [
                    { "@type": "City", "name": "Junagadh" },
                    { "@type": "City", "name": "Rajkot" },
                    { "@type": "AdministrativeArea", "name": "Saurashtra" },
                    { "@type": "AdministrativeArea", "name": "Gujarat" },
                    { "@type": "Country", "name": "India" }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services in Junagadh",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Development in Junagadh",
                          "description": "Custom Next.js & React website development, mobile-first design, speed optimization, and lead capture systems for businesses in Junagadh.",
                          "url": "https://www.mkdigitalnexus.in/services/web-development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Custom Software Development in Junagadh",
                          "description": "Full-stack MERN software development, billing software, custom ERP/CRM platforms, and business automation dashboards in Junagadh.",
                          "url": "https://www.mkdigitalnexus.in/services/software-development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Digital Marketing & SEO in Junagadh",
                          "description": "Complete organic SEO, keyword ranking on Google first page, and local brand marketing for Junagadh companies.",
                          "url": "https://www.mkdigitalnexus.in/services/digital-marketing-agency-junagadh"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Meta Ads (Facebook & Instagram Ads) in Junagadh",
                          "description": "High-ROAS Meta Ads campaigns, retargeting funnels, and viral social creatives tailored for Junagadh & Saurashtra audiences.",
                          "url": "https://www.mkdigitalnexus.in/services/meta-ads-google-ads-junagadh"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Google Ads & PPC Management in Junagadh",
                          "description": "High-intent Google Search, Call-only, and Local Service Ads delivering instant qualified customer inquiries in Junagadh.",
                          "url": "https://www.mkdigitalnexus.in/services/meta-ads-google-ads-junagadh"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Google Business Profile SEO & Google Maps Ranking in Junagadh",
                          "description": "Local SEO to rank your business in the Google Maps 3-Pack for local searches in Junagadh, Vanzari Chowk, and Talav Gate.",
                          "url": "https://www.mkdigitalnexus.in/services/google-profile-local-seo-junagadh"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.mkdigitalnexus.in/#website",
                  "url": "https://www.mkdigitalnexus.in",
                  "name": "MK Digital Nexus",
                  "description": "Website Development, Software Development & Digital Marketing Agency in Junagadh",
                  "publisher": {
                    "@id": "https://www.mkdigitalnexus.in/#localbusiness"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
        <Navbar />
        <main className="min-h-screen pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
