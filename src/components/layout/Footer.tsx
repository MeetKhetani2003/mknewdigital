import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Globe, Star } from "lucide-react";

const socialLinks = [
  {
    label: "Google Profile (4.9★)",
    href: "https://share.google/VqmKOhc9O8q5wXUvg",
    custom: "google",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mkdigitalnexus/",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.3C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mk-digital-nexus/",
    path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.3a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.3c0-1.3-.5-2-1.5-2s-1.5.8-1.5 2V19h-3V9h3v1.4a3.5 3.5 0 013-1.6c2 0 3 1.3 3 3.7V19z",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(27,111,214,0.15),rgba(255,255,255,0))] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-white/10">
          
          {/* Studio Profile & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10">
                <Logo className="h-9 w-9" light />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  MK DIGITAL NEXUS
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Custom Web & Digital Solutions Studio
                </span>
              </div>
            </div>

            <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-400">
              We design and engineer bespoke web applications, enterprise storefronts, 
              and digital platforms that move businesses forward. Headquartered in India, 
              collaborating seamlessly with ambitious companies across the USA, Canada, and worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Govt MSME Registered Studio</span>
              </div>

              <a
                href="https://share.google/VqmKOhc9O8q5wXUvg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold text-amber-300 transition-colors hover:bg-amber-400/20"
              >
                <div className="flex text-amber-400">
                  <Star className="h-3 w-3 fill-current" />
                </div>
                <span>4.9 / 5 Rating on Google</span>
                <ArrowUpRight className="h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Quick Links / Solutions */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/services/web-development" className="hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-accent transition-colors">
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link href="/services/custom-web-applications" className="hover:text-accent transition-colors">
                  Custom Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services/crm-business-software" className="hover:text-accent transition-colors">
                  CRM & Business Portals
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-accent transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing-seo" className="hover:text-accent transition-colors">
                  SEO & Search Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">
              Studio
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Selected Work (100+)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-accent transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Service Tiers & Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Start Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Studio Contact & Global Dispatch */}
          <div className="lg:col-span-3 sm:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">
              Global Contact
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="mailto:hello@mkdigitalnexus.in"
                className="flex items-center gap-2.5 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>hello@mkdigitalnexus.in</span>
              </a>

              <a
                href="tel:+916353121773"
                className="flex items-center gap-2.5 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>+91 63531 21773</span>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  First Floor, Shyam Apt, Shop 5, Near Vanzari Chowk, Talav Gate, Junagadh, Gujarat 362001, India
                </address>
              </div>
            </div>

            {/* Social handles */}
            <div className="pt-2 flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-accent hover:border-accent transition-all duration-200"
                >
                  {s.custom === "google" ? (
                    <span className="text-xs font-bold">G</span>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d={s.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} MK Digital Nexus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">Philosophy</Link>
            <Link href="/portfolio" className="hover:text-slate-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Direct Inquiry</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
