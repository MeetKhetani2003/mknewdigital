"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "../ui/FloatingActions";

export function AgencyShell({ children }) {
  const pathname = usePathname();
  const isBusiness = pathname?.startsWith("/business");

  if (isBusiness) {
    return <main className="min-h-screen w-full">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[72px] md:pt-[88px]">{children}</main>
      <FloatingActions />
      <Footer />
    </>
  );
}

