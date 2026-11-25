import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Bell,
  Fingerprint,
  MapPin,
  WifiOff,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Apple,
  Play,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "Mobile App Development Services | iOS & Android Apps | MK Digital Nexus",
  description:
    "Reach your customers on iOS and Android with custom mobile apps. Native performance, responsive touch UI, offline reliability, and end-to-end App Store publishing.",
  keywords: [
    "mobile app development company",
    "cross platform app development",
    "React Native app developers",
    "iOS and Android mobile app development",
    "custom mobile app company",
    "business mobile application services",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | iOS & Android Apps | MK Digital Nexus",
    description:
      "Reach your customers on iOS and Android with custom mobile apps. Native performance, responsive touch UI, offline reliability, and end-to-end App Store publishing.",
    url: "https://www.mkdigitalnexus.in/services/mobile-app-development",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const mobileFeatures = [
  {
    icon: Bell,
    title: "Push Notifications & Instant Alerts",
    desc: "Re-engage customers with automated push notifications, order status updates, marketing offers, and personalized reminders.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth (Face ID / Fingerprint)",
    desc: "Fast, frictionless biometric authentication supporting Apple Face ID, Touch ID, and Android BiometricPrompt for enterprise security.",
  },
  {
    icon: MapPin,
    title: "GPS, Geofencing & Live Location",
    desc: "Location-aware functionality for on-demand booking, delivery tracking, field employee check-ins, and geo-targeted promotions.",
  },
  {
    icon: WifiOff,
    title: "Offline Mode & Auto-Sync",
    desc: "Enable users and field teams to input data without internet connectivity; changes sync automatically when a network reconnects.",
  },
  {
    icon: CreditCard,
    title: "In-App UPI & Card Payments",
    desc: "One-touch native payment sheets supporting Google Pay, PhonePe, Apple Pay, and credit cards with instant transaction verification.",
  },
  {
    icon: ShieldCheck,
    title: "App Store & Google Play Readiness",
    desc: "End-to-end guidance navigating Apple App Store Review Guidelines, Google Play Console policies, and privacy manifest mandates.",
  },
];

const mobileLifecycle = [
  {
    step: "01",
    title: "UX Wireframing & Touch Design",
    desc: "Thumb-friendly navigation, mobile interaction states, and ergonomic screen flows designed for modern notch and dynamic island displays.",
  },
  {
    step: "02",
    title: "Cross-Platform Engineering",
    desc: "Building a single high-performance codebase using React Native, compiling down directly to native iOS and Android binary code.",
  },
  {
    step: "03",
    title: "Backend API & Cloud Sync",
    desc: "Integrating secure cloud microservices, push notification channels (FCM/APNs), and real-time database synchronization.",
  },
  {
    step: "04",
    title: "Device QA & Store Approval",
    desc: "Rigorous testing on physical iPhones and Android devices, followed by full preparation, submission, and publishing on app stores.",
  },
];

const mobileFaqs = [
  {
    q: "Why do you develop cross-platform apps instead of building native iOS and Android separately?",
    a: "Cross-platform development (using React Native) compiles to native UI components while sharing up to 90% of the underlying business logic. This cuts development time and cost in half and ensures feature updates deploy simultaneously to both stores.",
  },
  {
    q: "Will the app have access to native device hardware like camera, GPS, and Bluetooth?",
    a: "Yes. Our cross-platform applications access the device camera, microphone, GPS location, Bluetooth peripherals, biometric sensors, and local storage with full native speed.",
  },
  {
    q: "Do you assist with publishing the app to the Apple App Store and Google Play?",
    a: "Yes. We manage the end-to-end publishing process: creating store listings, taking screenshots, configuring privacy policies, generating release binaries, and addressing review guidelines.",
  },
  {
    q: "Can the mobile app work when the user has no internet connection?",
    a: "Yes. We implement offline-first architectures using local device storage (SQLite/WatermelonDB). Users can browse saved data and queue actions that sync automatically once back online.",
  },
  {
    q: "How are app updates and new features deployed?",
    a: "We support Over-The-Air (OTA) updates for JavaScript-layer improvements (instant updates without waiting for app store re-review), alongside regular store version releases for native code updates.",
  },
  {
    q: "Do we retain full ownership of the mobile app source code?",
    a: "Yes. 100% full source code ownership, signing keys, and repository rights are handed over to your organization upon project completion.",
  },
];

export default function MobileAppDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Application Development",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Mobile App Development Services",
    description:
      "Cross-platform iOS and Android mobile applications built for fluid touch performance, offline caching, and native hardware integration.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mobileFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* =========================================================================
          1. MOBILE-FIRST HERO SECTION
          ========================================================================= */}
      <section className="relative bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 border-b border-[#E7EAF0] overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2563EB]/6 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#667085]">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[#CBD5E1]">/</li>
              <li>
                <Link href="/services" className="hover:text-[#2563EB] transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-[#CBD5E1]">/</li>
              <li className="font-medium text-[#0D1B2A]" aria-current="page">
                Mobile App Development
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>iOS & Android Engineering</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                High-Performance iOS & Android Mobile Apps Built for{" "}
                <span className="text-[#2563EB]">Seamless Experiences.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                Reach your customers on their smartphones with custom mobile apps. 
                Engineered for fluid 60 FPS touch performance, offline data reliability, and native device hardware access.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Discuss Your Mobile App</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>App Features</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> One Codebase (iOS & Android)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> App Store Approval Support
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Offline-First Sync
                </span>
              </div>
            </div>

            {/* Right Column: Device Frame Simulation Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[#E7EAF0] bg-white p-6 shadow-[0_16px_36px_-12px_rgba(13,27,42,0.08)] max-w-sm mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] text-[11px] font-mono text-[#667085]">
                  <span>9:41 AM</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> 5G • 100%
                  </span>
                </div>

                <div className="my-5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-sm">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#0D1B2A]">Native App Runtime</div>
                      <div className="text-[11px] text-[#667085]">60 FPS Smooth Scroll</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-[12px]">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E7EAF0]/60">
                      <span className="text-[#667085]">Push Notifications</span>
                      <span className="font-semibold text-[#10B981]">Active (FCM)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E7EAF0]/60">
                      <span className="text-[#667085]">Biometric Auth</span>
                      <span className="font-semibold text-[#0D1B2A]">Face ID Enabled</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E7EAF0]/60">
                      <span className="text-[#667085]">Offline Caching</span>
                      <span className="font-semibold text-[#2563EB]">Auto-Syncing</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11.5px] font-medium text-[#667085] pt-2">
                  <span className="flex items-center gap-1">
                    <Apple className="h-3.5 w-3.5" /> Apple App Store
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Play className="h-3 w-3" /> Google Play
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. KEY MOBILE CAPABILITIES
          ========================================================================= */}
      <section id="capabilities" className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Native Capabilities</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Native Features That Power Great Mobile Apps.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Full access to smartphone hardware capabilities combined with intuitive, ergonomic user experience design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-[#E7EAF0] bg-white p-6 transition-all hover:border-[#2563EB]/35 hover:shadow-sm"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#2563EB]/8 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. APP DEVELOPMENT LIFECYCLE
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>From Idea to Stores</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              How We Build and Publish Your Mobile App.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              A disciplined delivery process ensuring touch ergonomics, rigorous device testing, and smooth store submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileLifecycle.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#E7EAF0] bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-[#F5F7FA] px-2.5 py-0.5 rounded-full inline-block mb-3.5">
                    Phase {step.step}
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0D1B2A] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#667085]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICE-SPECIFIC MOBILE APP FAQS
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Mobile App FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About Mobile Apps.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Clear guidance on cross-platform performance, App Store approval, device compatibility, and updates.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need a web application or custom website?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  Discover our full-stack web platforms and corporate portals.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/custom-web-applications" className="hover:underline flex items-center gap-1">
                    Explore Custom Web Applications →
                  </Link>
                  <Link href="/services/web-development" className="hover:underline flex items-center gap-1">
                    Explore Website Development →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {mobileFaqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#E7EAF0]">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0D1B2A] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#667085]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DEDICATED CLOSING CTA
          ========================================================================= */}
      <section className="bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Launch on Mobile</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Let&apos;s Build Your Mobile App for iOS & Android.
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Discuss your mobile product concept, technical requirements, and target timeline with our engineering team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss Mobile App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20a%20mobile%20app%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-white/20 text-white text-[14px] font-semibold hover:bg-white/[0.06] hover:border-white/50 transition-all"
            >
              <span>Chat on WhatsApp</span>
              <span className="text-emerald-400 font-bold">●</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
