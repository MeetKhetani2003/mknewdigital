import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mkdigitalnexus.in"),
  title: {
    default: "Website Development Service in Junagadh & Rajkot | MK Digital Nexus",
    template: "%s | MK Digital Nexus",
  },
  description:
    "Leading website development service in Junagadh and Rajkot. Top digital marketing agency near you providing custom web design, SEO optimization, and graphic design.",
  keywords: [
    "website development service in junagadh",
    "website in junagadh",
    "digital marketing agency in junagadh",
    "web design in junagadh",
    "graphic design in junagadh",
    "website development in rajkot",
    "digital marketing agency in rajkot",
    "web design agency near junagadh",
    "graphic designers in rajkot",
    "SEO services in junagadh",
    "near junagadh",
    "near rajkot",
    "web development agency Gujarat"
  ],
  authors: [{ name: "MK Digital Nexus" }],
  creator: "MK Digital Nexus",
  publisher: "MK Digital Nexus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mkdigitalnexus.in",
    siteName: "MK Digital Nexus",
    title: "Premium Digital Agency | MK Digital Nexus",
    description: "We engineer world-class websites, bespoke CRM systems, and AI-driven digital experiences for ambitious brands globally.",
    images: [
      {
        url: "/images/hero-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "MK Digital Nexus - Premium Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Digital Nexus | Premium Digital Agency",
    description: "We engineer world-class websites, bespoke CRM systems, and AI-driven digital experiences for ambitious brands globally.",
    images: ["/images/hero-mockup.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png" }
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "MK Digital Nexus",
              "image": "https://www.mkdigitalnexus.in/logo.png",
              "@id": "https://www.mkdigitalnexus.in/#organization",
              "url": "https://www.mkdigitalnexus.in",
              "telephone": "+916353121773",
              "priceRange": "₹2000 - " + "₹33999",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Bhagwati Kalamandir, Kalvachok",
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
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://wa.me/916353121773"
              ],
              "areaServed": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Junagadh"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Rajkot"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Gujarat"
                }
              ],
              "description": "Leading website development service in Junagadh and Rajkot. Top digital marketing agency offering custom SEO, web design, and graphic design near you."
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-accent selection:text-white`}>
        <Navbar />
        <main className="min-h-screen pt-[72px] md:pt-[88px]">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
