import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  CreditCard,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  QrCode,
  Truck,
  RotateCcw,
  BarChart3,
  ExternalLink,
} from "lucide-react";

/* =========================================================================
   SEO METADATA & STRUCTURED DATA
   ========================================================================= */
export const metadata = {
  title: "E-commerce Website Development | Custom Online Stores | MK Digital Nexus",
  description:
    "Scale your online sales with custom e-commerce websites. Blazing-fast checkouts, seamless UPI & card payment gateways, inventory management, and merchant admin portals.",
  keywords: [
    "custom ecommerce website development",
    "online storefront development",
    "e-commerce platform development",
    "Razorpay UPI payment gateway integration",
    "custom product catalog website",
    "e-commerce checkout optimization",
    "D2C online store development",
    "MK Digital Nexus",
  ],
  alternates: {
    canonical: "https://www.mkdigitalnexus.in/services/ecommerce-development",
  },
  openGraph: {
    title: "E-commerce Website Development | Custom Online Stores | MK Digital Nexus",
    description:
      "Scale your online sales with custom e-commerce websites. Blazing-fast checkouts, seamless UPI & card payment gateways, inventory management, and merchant admin portals.",
    url: "https://www.mkdigitalnexus.in/services/ecommerce-development",
    siteName: "MK Digital Nexus",
    type: "website",
  },
};

const ecommerceFeatures = [
  {
    icon: ShoppingBag,
    title: "Fast Product Catalog & Filters",
    desc: "Multi-category product catalog with instant search, price filters, and color/size variant management built for sub-second browsing.",
  },
  {
    icon: CreditCard,
    title: "Instant Multi-Gateway Checkout",
    desc: "Seamless UPI QR, Google Pay, PhonePe, Cards, NetBanking, and Cash on Delivery integration via trusted gateways like Razorpay.",
  },
  {
    icon: Package,
    title: "Real-Time Inventory Tracking",
    desc: "Automatic stock deduction upon order placement, low-stock warnings, and warehouse inventory updates from any device.",
  },
  {
    icon: Zap,
    title: "Cart Abandonment Recovery",
    desc: "Automated WhatsApp and email notifications with direct checkout resumption links to recover unfinished purchases.",
  },
  {
    icon: ShieldCheck,
    title: "Automated GST Invoicing",
    desc: "Instant generation of GST-compliant PDF invoices sent directly to customer email and WhatsApp immediately after payment.",
  },
  {
    icon: BarChart3,
    title: "Merchant Admin Dashboard",
    desc: "Centralized control panel to view sales volume, manage orders, update product prices, and track revenue analytics in real time.",
  },
];

const commerceFlow = [
  {
    step: "01",
    title: "Visual Product Selection",
    desc: "Customers explore high-resolution photo galleries, view variant pricing, and select items with 0 loading lag.",
  },
  {
    step: "02",
    title: "1-Click Frictionless Cart",
    desc: "Clean slide-out cart or instant buy-now button that bypasses complex multi-step forms.",
  },
  {
    step: "03",
    title: "Secured Payment Processing",
    desc: "Immediate UPI QR scan or credit card authentication with automated webhook payment verification.",
  },
  {
    step: "04",
    title: "Dispatch & Live Tracking",
    desc: "Automated order confirmation sent to customer's WhatsApp with live courier tracking links.",
  },
];

const ecommerceFaqs = [
  {
    q: "Which payment gateways can you integrate into my online store?",
    a: "We integrate Razorpay, Cashfree, PayU, and Stripe. These gateways support direct UPI (Google Pay, PhonePe, Paytm), debit/credit cards, net banking, and EMI options with direct settlement to your bank account.",
  },
  {
    q: "Do you charge any commission on my sales?",
    a: "No. Unlike proprietary platforms that take cuts on every transaction, MK Digital Nexus charges zero commission. You keep 100% of your revenue and pay only your standard payment gateway processing fees.",
  },
  {
    q: "How many products can the e-commerce platform handle?",
    a: "Our custom architecture is built to scale smoothly from 20 products to 10,000+ items with complex variations (sizes, colors, SKUs) without slowing down page load times.",
  },
  {
    q: "Can I manage product inventory, prices, and orders myself?",
    a: "Yes. We deliver an intuitive merchant dashboard where you can easily upload new products, update prices, adjust stock levels, mark orders as dispatched, and download invoices.",
  },
  {
    q: "Can you integrate shipping courier APIs like Shiprocket?",
    a: "Yes. We can integrate third-party courier aggregators like Shiprocket, Delhivery, or Bluedart for automated rate calculations, label printing, and customer tracking updates.",
  },
  {
    q: "Is customer data and payment information secure?",
    a: "Yes. All transactions occur over 256-bit SSL encrypted channels directly through RBI-licensed payment gateways. Sensitive card data is never stored on your website database.",
  },
];

export default function EcommerceDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "E-Commerce Development",
    provider: {
      "@type": "Organization",
      name: "MK Digital Nexus",
      url: "https://www.mkdigitalnexus.in",
    },
    name: "Custom E-commerce Website Development Services",
    description:
      "Conversion-optimized custom online stores with instant UPI payment gateways, inventory management, and merchant admin portals.",
    areaServed: "India",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ecommerceFaqs.map((faq) => ({
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
          1. COMMERCIAL TRANSACTION HERO
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
                E-commerce Development
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Conversion-First Storefronts</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.15]">
                Conversion-Optimized E-commerce Platforms Built to{" "}
                <span className="text-[#2563EB]">Scale Sales.</span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-relaxed text-[#667085] max-w-xl">
                We engineer custom online stores with instant checkout, seamless UPI & card payments, 
                automated inventory controls, and dedicated merchant admin dashboards.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)]"
                >
                  <span>Build Your Online Store</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#storefront-flow"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-[#E7EAF0] bg-white text-[#0D1B2A] text-[14px] font-semibold hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-all"
                >
                  <span>How Storefronts Work</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-y-2 gap-x-6 text-[12.5px] text-[#667085]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> 0% Platform Commission
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Instant UPI & Razorpay
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981]" /> Real-Time Stock Sync
                </span>
              </div>
            </div>

            {/* Right Card: Transaction UI Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E7EAF0] bg-white p-6 shadow-[0_12px_32px_-12px_rgba(13,27,42,0.08)]">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[12.5px] font-bold text-[#0D1B2A]">Direct Checkout Gateway</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded">
                    UPI Active
                  </span>
                </div>

                <div className="my-5 p-4 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
                  <div className="flex items-center justify-between text-[13px] font-semibold text-[#0D1B2A] mb-1">
                    <span>Order Total</span>
                    <span className="text-[17px] font-bold text-[#2563EB]">₹2,499.00</span>
                  </div>
                  <div className="text-[11.5px] text-[#667085] flex items-center justify-between">
                    <span>Inclusive of GST & Delivery</span>
                    <span className="text-[#10B981] font-semibold">Free Shipping</span>
                  </div>
                </div>

                {/* Simulated Payment Sheet */}
                <div className="space-y-2 text-[12.5px]">
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#2563EB]/40 bg-[#2563EB]/5 text-[#0D1B2A] font-medium">
                    <span className="flex items-center gap-2">
                      <QrCode className="h-4 w-4 text-[#2563EB]" /> Instant UPI / GPay / PhonePe
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#E7EAF0] bg-white text-[#667085]">
                    <span className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" /> Credit / Debit Card & NetBanking
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg border border-[#E7EAF0] bg-white text-[#667085]">
                    <span className="flex items-center gap-2">
                      <Truck className="h-4 w-4" /> Cash On Delivery (COD) Option
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] text-center text-[11px] text-[#667085]">
                  <span>🔒 256-Bit Bank-Grade SSL & Webhook Protected</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE ANATOMY OF A HIGH-CONVERTING STOREFRONT
          ========================================================================= */}
      <section id="storefront-flow" className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Purchase Flow</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Frictionless Buying Journey From Click to Delivery.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Every millisecond of friction costs you customers. Our store architecture removes unnecessary steps, ensuring visitors complete purchases with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commerceFlow.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#E7EAF0] bg-[#F8FAFC] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[12px] font-bold text-[#2563EB] bg-white border border-[#E7EAF0] px-2.5 py-0.5 rounded-full inline-block mb-3.5 shadow-xs">
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
          3. E-COMMERCE FEATURE MATRIX
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Full Store Functionality</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Complete Features to Run Your Online Business.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Everything required to manage orders, process secure payments, update stock, and communicate directly with customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceFeatures.map((feat) => {
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
          4. B2C RETAIL VS B2B WHOLESALE COMMERCE
          ========================================================================= */}
      <section className="bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <span>Business Models</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
              Architected for Both Direct Retail and Wholesale Trade.
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Whether you sell single products directly to consumers or require tiered pricing for wholesale distributor bulk orders, we engineer the right portal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* D2C Model */}
            <div className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8">
              <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                D2C / Consumer Retail
              </span>
              <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3">
                Online Retail Storefronts
              </h3>
              <p className="text-[13.5px] text-[#667085] leading-relaxed mb-5">
                Optimized for maximum impulse buying, fast mobile navigation, seasonal discounts, customer reviews, and direct social media traffic conversions.
              </p>
              <ul className="space-y-2.5 border-t border-[#F1F5F9] pt-4 text-[13px] text-[#0D1B2A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> Fast mobile cart & UPI payment sheet
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> Discount coupons & festive sales banners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> Customer order history & tracking
                </li>
              </ul>
            </div>

            {/* B2B Model */}
            <div className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8">
              <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                B2B / Wholesale Distribution
              </span>
              <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3">
                B2B Wholesale Ordering Portals
              </h3>
              <p className="text-[13.5px] text-[#667085] leading-relaxed mb-5">
                Built for distributors and bulk buyers with tiered volume pricing, Minimum Order Quantities (MOQ), GST validation, and quotation generation.
              </p>
              <ul className="space-y-2.5 border-t border-[#F1F5F9] pt-4 text-[13px] text-[#0D1B2A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> Tiered pricing & bulk quantity discounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> GSTIN verification & tax invoice generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" /> Instant Request for Quotation (RFQ) flow
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. SERVICE-SPECIFIC E-COMMERCE FAQS
          ========================================================================= */}
      <section className="bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>E-commerce FAQs</span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]">
                Frequently Asked Questions About E-commerce.
              </h2>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#667085]">
                Clear details on payment gateway onboarding, transaction fees, catalog scaling, and courier shipping integration.
              </p>

              <div className="mt-7 p-5 rounded-2xl bg-white border border-[#E7EAF0]">
                <div className="text-[13px] font-semibold text-[#0D1B2A] mb-1">
                  Need custom enterprise software or a CRM?
                </div>
                <p className="text-[12.5px] text-[#667085] mb-3">
                  Check our business application and internal workflow solutions.
                </p>
                <div className="flex flex-col gap-2 text-[12.5px] font-medium text-[#2563EB]">
                  <Link href="/services/crm-business-software" className="hover:underline flex items-center gap-1">
                    Explore CRM & Business Software →
                  </Link>
                  <Link href="/services/web-development" className="hover:underline flex items-center gap-1">
                    Explore Corporate Website Development →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7EAF0] p-5 sm:p-7 space-y-4">
              {ecommerceFaqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E7EAF0]">
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
          6. DEDICATED CLOSING CTA
          ========================================================================= */}
      <section className="bg-[#0D1B2A] text-white py-12 sm:py-16 lg:py-18 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Launch Your Storefront</span>
          </div>

          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
            Ready to Start Selling Your Products Online?
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-slate-300 max-w-xl mx-auto">
            Discuss your product catalog, payment requirements, and delivery arrangements with our team to start your custom e-commerce storefront.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#2563EB] text-white text-[14px] font-semibold transition-all hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Discuss E-commerce Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I'd%20like%20to%20discuss%20an%20e-commerce%20website%20project."
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
