"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui/Logo";
import { triggerBookServiceModal } from "../ui/FloatingActions";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services & Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_0_rgba(11,36,71,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="h-10 w-10" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-navy-900">
              MK Digital Nexus
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted font-medium">
              Digital Agency
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className={`relative px-4 py-2 text-base font-semibold transition-colors rounded-full block ${
                    isActive
                      ? "text-accent"
                      : "text-ink/80 hover:text-navy-900"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-full bg-navy-900/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3.5 lg:flex">
          <a
            href="tel:+916353121773"
            className="flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-accent transition-colors px-2.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100"
          >
            <Phone className="h-3 w-3 text-emerald-600" />
            <span>+91 63531 21773</span>
          </a>

          <button
            onClick={() => triggerBookServiceModal()}
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 cursor-pointer"
          >
            <span>Book Service</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur text-navy-900 shadow-sm"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {links.map((l) => {
                const isActive = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className={`block py-3 text-lg font-bold ${
                        isActive ? "text-accent" : "text-ink/85"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setOpen(false);
                    triggerBookServiceModal();
                  }}
                  className="block w-full rounded-full bg-navy-900 px-6 py-3.5 text-center text-base font-bold text-white shadow-lg hover:bg-accent transition-colors"
                >
                  ⚡ Book Service (2hr Proposal)
                </button>
                <a
                  href="tel:+916353121773"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-6 py-3 text-center text-sm font-bold text-navy-900"
                >
                  <Phone className="h-4 w-4 text-emerald-600" /> Call: +91 63531 21773
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
