import { MetadataRoute } from "next";
import { projects } from "@/utils/projectsData";
import { getBusinesses } from "@/lib/storage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.mkdigitalnexus.in";
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dedicated SEO Service detail routes
  const serviceSlugs = [
    "web-development",
    "software-development",
    "digital-marketing-agency-junagadh",
    "meta-ads-google-ads-junagadh",
    "google-profile-local-seo-junagadh",
    "crm-inventory-dashboard",
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Portfolio detail routes
  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic published business routes
  let businessRoutes: MetadataRoute.Sitemap = [];
  try {
    const published = await getBusinesses({ status: "published" });
    businessRoutes = published.map((b: any) => ({
      url: `${baseUrl}/business/${b.slug}?city=${encodeURIComponent(b.city || "")}&category=${encodeURIComponent(b.category || "")}`,
      lastModified: b.updatedAt || currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  } catch (e: any) {
    console.error("Sitemap error:", e?.message);
    businessRoutes = [];
  }

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes, ...businessRoutes];
}
