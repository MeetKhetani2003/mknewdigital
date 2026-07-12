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
    default: "Premium Digital Agency | MK Digital Nexus",
    template: "%s | MK Digital Nexus",
  },
  description:
    "MK Digital Nexus is a boutique web development and digital agency in Rajkot, Gujarat. We engineer world-class websites, bespoke CRM systems, and AI-driven digital experiences for ambitious brands globally.",
  keywords: ["web development", "digital agency", "Rajkot", "Junagadh", "manufacturing websites", "CRM dashboards", "UI/UX design", "premium web design", "India web agency"],
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
