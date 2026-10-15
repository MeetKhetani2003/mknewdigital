import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const socials = [
  {
    label: "Google Profile",
    href: "https://share.google/VqmKOhc9O8q5wXUvg",
    custom: "google",
  },
  { label: "Instagram", href: "https://www.instagram.com/mkdigitalnexus/", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.3C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mk-digital-nexus/", path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.3a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.3c0-1.3-.5-2-1.5-2s-1.5.8-1.5 2V19h-3V9h3v1.4a3.5 3.5 0 013-1.6c2 0 3 1.3 3 3.7V19z" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="grid-pattern-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <Logo className="h-12 w-12" light />
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold tracking-tight text-white">
                    MK Digital Nexus
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
                    Digital Agency
                  </span>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
                Crafting websites, AI-powered video reels, and design systems for
                brands that want to stand out — built out of Junagadh, delivered
                worldwide.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  MSME Registered · Junagadh
                </div>

                <a
                  href="https://share.google/VqmKOhc9O8q5wXUvg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs sm:text-sm font-bold text-amber-300 transition-all hover:bg-amber-400/20 hover:border-amber-400 shadow-sm"
                >
                  <span className="text-amber-400">★★★★★</span>
                  <span className="font-bold text-white">4.9 / 5</span>
                  <span className="text-white/70">on Google</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                Services
              </h4>
              <ul className="mt-6 space-y-4 text-base text-white/80">
                <li><Link href="/services" className="hover:text-accent transition-colors font-medium">Websites</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors font-medium">Graphic Design</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors font-medium">AI Video Reels</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors font-medium">Digital Marketing</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                Company
              </h4>
              <ul className="mt-6 space-y-4 text-base text-white/80">
                <li><Link href="/about" className="hover:text-accent transition-colors font-medium">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-accent transition-colors font-medium">Portfolio</Link></li>
                <li><Link href="/testimonials" className="hover:text-accent transition-colors font-medium">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                Get in touch
              </h4>
              <ul className="mt-6 space-y-4 text-base text-white/80">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <a href="mailto:hello@mkdigitalnexus.in" className="hover:text-accent transition-colors font-medium">
                    hello@mkdigitalnexus.in
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <a href="tel:+916353121773" className="hover:text-accent transition-colors font-medium">
                    +91 63531 21773
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <a href="tel:+916353121773" className="hover:text-accent transition-colors font-medium">
                    +91 63531 21773
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <div className="leading-relaxed">
                    <span className="text-white/90 text-sm sm:text-base">First floor, Shyam Apt, Shop no. 5, road, near Vanzari chowk, Vanzari Chowk, Nava Nagarwada, Talav Gate, Junagadh, Gujarat 362001</span>
                    <div className="mt-3">
                      <a
                        href="https://share.google/VqmKOhc9O8q5wXUvg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white hover:text-navy-950 hover:border-white shadow-sm"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        <span>Google Business Profile</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-7 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 transition-all hover:bg-accent hover:border-accent hover:text-white hover:scale-105"
                  >
                    {s.custom === "google" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.7 1 4 3.5 2.2 7.1l3.7 2.8C6.7 7.3 9.1 5 12 5z"/>
                        <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h6c-.3 1.4-1.1 2.5-2.2 3.3l3.6 2.8c2.1-1.9 3.2-4.7 3.2-8.1z"/>
                        <path fill="#FBBC05" d="M5.9 14.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1L2.2 7.1C1.4 8.6 1 10.2 1 12s.4 3.4 1.2 4.9l3.7-2.8z"/>
                        <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1-2.9 0-5.3-1.9-6.1-4.5L2.2 16.9C4 20.5 7.7 23 12 23z"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d={s.path} /></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} MK Digital Nexus. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/90">Privacy</a>
              <a href="#" className="hover:text-white/90">Terms</a>
              <a href="#" className="hover:text-white/90">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
