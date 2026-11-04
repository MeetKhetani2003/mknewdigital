import { notFound } from "next/navigation";
import { getBusinessBySlug, getWebsite } from "@/lib/storage";
import { BusinessRenderer } from "@/components/business/BusinessRenderer";
import Link from "next/link";
import { ArrowLeft, Search, Building2, PhoneCall } from "lucide-react";

export async function generateMetadata({ params, searchParams }) {
  const { slug } = await params;
  const sParams = await searchParams;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    return {
      title: "Business Not Found | MK Digital Nexus",
      description: "The requested business page does not exist or has been unpublished.",
    };
  }

  const city = sParams?.city || business.city || "Junagadh";
  const category = sParams?.category || business.category || "Business";
  const name = business.businessName;

  const title =
    business.seo?.title ||
    `${name} in ${city} | Top ${category} Services & Pricing | MK Digital Nexus`;
  const description =
    business.seo?.description ||
    `Official website of ${name} in ${city}. Verified reviews, services, product catalogue, address and direct contact information.`;

  const canonicalUrl = `https://www.mkdigitalnexus.in/business/${slug}?city=${encodeURIComponent(city)}&category=${encodeURIComponent(category)}`;

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
      siteName: "MK Digital Nexus Business Network",
      images: [
        {
          url: business.seo?.ogImage || business.logo || "/screenshot.png",
          width: 1200,
          height: 630,
          alt: `${name} in ${city}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [business.seo?.ogImage || business.logo || "/screenshot.png"],
    },
    robots: {
      index: business.status === "published",
      follow: business.status === "published",
    },
  };
}

export default async function BusinessPublicPage({ params, searchParams }) {
  const { slug } = await params;
  const sParams = await searchParams;
  const business = await getBusinessBySlug(slug);

  // If business not found or not published (allow preview with query flag)
  const isPreview = sParams?.preview === "true";
  if (!business || (business.status !== "published" && !isPreview)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Building2 className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Business Website Not Found</h1>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            The business page <span className="font-mono font-semibold text-slate-700">"{slug}"</span> is either not yet published, has been moved, or does not exist.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to MK Digital Nexus</span>
            </Link>

            <Link
              href="/business/admin"
              className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Admin Builder Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const website = await getWebsite(business.id);

  // Apply query overrides for city/category if provided in query string
  const activeCity = sParams?.city || business.city;
  const activeCategory = sParams?.category || business.category;
  const enrichedBusiness = {
    ...business,
    city: activeCity,
    category: activeCategory,
  };

  return (
    <>
      {isPreview && (
        <div className="sticky top-0 z-50 bg-amber-500 text-slate-950 font-semibold text-xs py-2 px-4 text-center shadow flex items-center justify-center gap-2">
          <span>⚠️ You are previewing an unpublished draft of this business website.</span>
          <Link href="/business/admin" className="underline font-bold">
            Return to Admin Builder
          </Link>
        </div>
      )}
      <BusinessRenderer
        business={enrichedBusiness}
        website={website || { publishedVersion: { sections: [] } }}
        isEditing={false}
      />
    </>
  );
}

