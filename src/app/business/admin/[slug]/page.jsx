import { notFound } from "next/navigation";
import { getBusinessBySlug, getWebsite, getDigitalCard } from "@/lib/storage";
import { AdminComboWorkspace } from "@/components/business/AdminComboWorkspace";

export const metadata = {
  title: "Business Combo Workspace (Website & Card) | MK Digital Nexus",
  description: "Manage and visually design both website and digital card for this business.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BusinessAdminComboPage({ params }) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const website = await getWebsite(business.id);
  const card = await getDigitalCard(business.id);

  return (
    <AdminComboWorkspace
      business={business}
      initialWebsite={website || { draftVersion: { sections: [] } }}
      initialCard={card}
    />
  );
}

