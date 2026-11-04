import { notFound } from "next/navigation";
import { getDigitalCardBySlug, getBusinessBySlug } from "@/lib/storage";
import { DigitalCardRenderer } from "@/components/business/DigitalCardRenderer";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getDigitalCardBySlug(slug);

  if (!result || !result.business) {
    return {
      title: "Digital Card Not Found | MK Digital Nexus",
      description: "The requested digital business card does not exist.",
    };
  }

  const { business, card } = result;
  const profile = card?.publishedVersion || card?.draftVersion || {};
  const name = profile.name || business.businessName;
  const city = business.city || "Gujarat";
  const category = business.category || "Business";

  const title = `${name} | Official Digital Business Card & Contact`;
  const description =
    profile.subDesignation ||
    `Official interactive digital card for ${name} (${category}) in ${city}. Save contact, chat on WhatsApp, view location and official website.`;

  const canonicalUrl = `https://mkdigitalnexus.in/business/${slug}/digitalcard`;
  const ogImage = profile.avatarUrl || business.logo || "/screenshot.png";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: `${name} Digital Profile`,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `${name} Digital Card`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BusinessDigitalCardPage({ params }) {
  const { slug } = await params;
  const result = await getDigitalCardBySlug(slug);

  if (!result || !result.business) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-amber-400/20">
            <Building2 className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-black text-white tracking-tight">Digital Card Not Found</h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            The digital card for <span className="font-mono text-amber-300">"{slug}"</span> does not exist or has been unpublished.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col gap-3">
            <Link
              href="/"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { business, card } = result;

  return (
    <DigitalCardRenderer
      card={card}
      business={business}
      showDesktopFrame={false}
    />
  );
}

