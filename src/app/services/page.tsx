"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ArrowRight, Star, Sparkles } from "lucide-react";

const thumbnailPlans = [
  {
    name: "Single Thumbnail",
    price: "₹400",
    period: "one-time",
    desc: "Perfect for a one-off launch, event, or campaign drop.",
    features: ["1 custom thumbnail", "2 revisions", "Source file included", "48-hour delivery"],
  },
  {
    name: "Monthly — 5 Creatives",
    price: "₹1,200",
    period: "per month",
    desc: "Consistent output for creators and small brands.",
    features: ["5 thumbnails / creatives", "Unlimited revisions", "Brand kit applied", "Priority queue"],
    highlighted: true,
  },
  {
    name: "One-time — 5 Creatives",
    price: "₹1,500",
    period: "one-time",
    desc: "A launch-ready creative bundle, delivered together.",
    features: ["5 thumbnails / creatives", "3 revisions each", "Consistent style", "5-day delivery"],
  },
];

const webPlans = [
  {
    name: "Static Single Page",
    price: "₹2,000",
    period: "one-time",
    desc: "A sharp landing page for a single product, event, or personal brand.",
    features: ["1 page, responsive", "Contact form", "SEO basics", "7-day delivery"],
  },
  {
    name: "Multi-page + Product Listing",
    price: "₹5,000",
    period: "one-time",
    desc: "A full brochure site with product showcase — no checkout needed.",
    features: ["Up to 6 pages", "Product listing", "Blog-ready CMS", "WhatsApp integration"],
  },
  {
    name: "E-commerce Basic",
    price: "₹12,000",
    period: "one-time",
    desc: "50–100 products, payments, inventory — ready to sell.",
    features: ["50–100 products", "Razorpay / Stripe", "Order management", "Admin dashboard"],
    highlighted: true,
  },
  {
    name: "E-commerce Advance",
    price: "₹25,000",
    period: "one-time",
    desc: "200–500 products with variants, filters, and advanced UX.",
    features: ["200–500 products", "Variants & filters", "Abandoned cart", "Email automation"],
  },
  {
    name: "Custom — 500+ Products",
    price: "Custom",
    period: "quote",
    desc: "Bespoke builds for large catalogs and enterprise storefronts.",
    features: ["Architecture review", "Custom integrations", "Performance SLA", "Dedicated PM"],
  },
];

const videoPlans = [
  {
    name: "Single Reel",
    price: "₹700",
    period: "one-time",
    desc: "A one-off polished reel — ready to post.",
    features: ["Up to 60 sec", "Captions", "Music licensed", "72-hour delivery"],
  },
  {
    name: "Starter",
    price: "₹1,999",
    period: "per month",
    desc: "Weekly content for creators just getting started on AI video.",
    features: ["4 reels / month", "HD export", "Trend-based music", "Auto captions"],
  },
  {
    name: "Business",
    price: "₹4,999",
    period: "per month",
    desc: "For brands that want a consistent, fully scripted reel engine.",
    features: ["10 reels / month", "Script writing", "AI voiceover", "Subtitles + HD export"],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹8,999",
    period: "per month",
    desc: "Cinematic-grade reels with premium sound, edit, and brand lockup.",
    features: ["20 reels / month", "Premium scripting", "Cinematic editing", "Brand logo + 4K export"],
  },
];

const comboPlans = [
  {
    name: "Starter Business Pack",
    includes: "Static website + 4 reels / month",
    original: "₹3,999",
    price: "₹3,299",
    period: "per month",
    saves: "Save ₹700",
  },
  {
    name: "Growth Pack",
    includes: "Multi-page site + 10 reels / month + 5 thumbnails",
    original: "₹8,199",
    price: "₹6,499",
    period: "per month",
    saves: "Save ₹1,700",
  },
  {
    name: "E-commerce Launch Combo",
    includes: "E-commerce basic + 10 reels + 5 thumbnails",
    original: "₹18,199",
    price: "₹14,999",
    period: "one-time + monthly",
    saves: "Save ₹3,200",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "E-commerce Premium Combo",
    includes: "E-commerce advance + 20 reels + 10 creatives",
    original: "₹42,999",
    price: "₹33,999",
    period: "one-time + monthly",
    saves: "Save ₹9,000",
  },
  {
    name: "Social Media Only Combo",
    includes: "10 reels + 8 thumbnails / month",
    original: "₹6,199",
    price: "₹4,799",
    period: "per month",
    saves: "Save ₹1,400",
  },
];

type Tab = "individual" | "combo";

export default function Services() {
  const [tab, setTab] = useState<Tab>("individual");

  return (
    <>
      <title>Website Development Service & SEO in Junagadh & Rajkot | MK Digital Nexus</title>
      <meta name="description" content="Affordable website development services in Junagadh and Rajkot. Leading digital marketing agency for custom web design, SEO, and graphic design near you." />

      {/* Header */}
      <section className="relative overflow-hidden bg-offwhite pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Services & pricing
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl">
              Website development &
              <span className="block italic font-serif font-normal text-accent">
                digital marketing services.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Get premium website development service, graphic design, and digital marketing in Junagadh and Rajkot. Transparent pricing, clear deliverables, and optimized results near you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Toggle */}
      <section className="sticky top-[72px] z-30 border-y border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 sm:px-8">
          <div className="relative inline-flex rounded-full border border-slate-200 bg-offwhite p-1">
            <button
              onClick={() => setTab("individual")}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "individual" ? "text-white" : "text-muted hover:text-navy-900"
              }`}
            >
              Individual Plans
            </button>
            <button
              onClick={() => setTab("combo")}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "combo" ? "text-white" : "text-muted hover:text-navy-900"
              }`}
            >
              Combo Plans
            </button>
            <motion.span
              layout
              className="absolute inset-y-1 rounded-full bg-navy-900"
              style={{
                width: "calc(50% - 4px)",
                left: tab === "individual" ? "4px" : "calc(50%)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatePresence mode="wait">
            {tab === "individual" ? (
              <motion.div
                key="individual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-24"
              >
                {/* Graphic Design */}
                <PlanSection
                  tag="Graphic Design"
                  title="Thumbnails & creatives that get clicked."
                  desc="Every asset built around a single job — stop the scroll."
                  plans={thumbnailPlans}
                  image="/images/service-design.jpg"
                />
                {/* Website */}
                <PlanSection
                  tag="Website Development"
                  title="Fast, conversion-tuned websites."
                  desc="From a one-page launch to a 500-product storefront — pick the tier that matches your stage."
                  plans={webPlans}
                  image="/images/service-webdev.jpg"
                />
                {/* Video */}
                <PlanSection
                  tag="AI Video Reels"
                  title="A reel engine that actually ships."
                  desc="Scripted, voiced, edited, and exported — weekly, on-brand, and ready to post."
                  plans={videoPlans}
                  image="/images/service-video.jpg"
                />
              </motion.div>
            ) : (
              <motion.div
                key="combo"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mx-auto max-w-2xl text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Best Value
                  </span>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
                    Combo plans
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    Bundle website, reels, and design — and save 15–25% vs. buying
                    each service separately.
                  </p>
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {comboPlans.map((p, i) => (
                    <Reveal key={p.name} delay={i * 0.08}>
                      <div
                        className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                          p.highlighted
                            ? "border-accent/40 navy-glow bg-gradient-to-b from-white to-offwhite"
                            : "border-slate-200 bg-white card-shadow hover:card-shadow-hover"
                        }`}
                      >
                        {p.badge && (
                          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                            <Star className="h-3 w-3" fill="currentColor" />
                            {p.badge}
                          </span>
                        )}
                        <h3 className="text-xl font-semibold tracking-tight text-navy-900">
                          {p.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {p.includes}
                        </p>
                        <div className="mt-6 flex items-baseline gap-2">
                          <span className="text-sm text-muted line-through">
                            {p.original}
                          </span>
                          <span className="text-3xl font-semibold tracking-tight text-navy-900">
                            {p.price}
                          </span>
                        </div>
                        <div className="text-xs text-muted">{p.period}</div>
                        <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          <Sparkles className="h-3 w-3" />
                          {p.saves}
                        </span>
                        <Link
                          href="/contact"
                          className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                            p.highlighted
                              ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25"
                              : "bg-navy-900 text-white hover:bg-accent"
                          }`}
                        >
                          Get started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ-ish reassurance band */}
      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Send us a 2-line brief. We'll come back with a scoped quote and a
              recommendation — usually within the same afternoon.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Book a free scoping call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PlanSection({
  tag,
  title,
  desc,
  plans,
  image,
}: {
  tag: string;
  title: string;
  desc: string;
  plans: {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
  }[];
  image: string;
}) {
  return (
    <div>
      <div className="grid items-end gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {tag}
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{desc}</p>
        </div>
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 card-shadow">
            <img src={image} alt={tag} loading="lazy" className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                p.highlighted
                  ? "border-accent/40 navy-glow bg-gradient-to-b from-white to-offwhite"
                  : "border-slate-200 bg-white card-shadow hover:card-shadow-hover"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  <Star className="h-3 w-3" fill="currentColor" />
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold tracking-tight text-navy-900">
                {p.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-navy-900">
                  {p.price}
                </span>
                <span className="text-xs text-muted">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  p.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25"
                    : "bg-navy-900 text-white hover:bg-accent"
                }`}
              >
                Choose plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
