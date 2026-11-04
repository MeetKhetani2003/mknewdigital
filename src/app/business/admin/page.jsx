import { AdminDashboard } from "@/components/business/AdminDashboard";

export const metadata = {
  title: "Admin Dashboard & Visual Builder | MK Digital Nexus",
  description: "Manage and visually design dynamic business websites for multiple clients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BusinessAdminPage() {
  return <AdminDashboard />;
}

