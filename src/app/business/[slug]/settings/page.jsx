import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/storage";
import { ClientSettingsPortal } from "@/components/business/ClientSettingsPortal";

export const metadata = {
  title: "Client Settings & Inquiries Portal | MK Digital Nexus",
  description: "Secure client portal to view inquiries, manage GridFS image gallery, and customize website and digital card.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BusinessSettingsPage({ params }) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  return (
    <ClientSettingsPortal
      initialBusiness={business}
      initialSlug={slug}
    />
  );
}

