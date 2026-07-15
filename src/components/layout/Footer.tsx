import Link from "next/link";
import { Logo } from "../ui/Logo";
import { Mail, MapPin, Phone } from "lucide-react";

const socials = [
  { label: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.3C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" },
  { label: "LinkedIn", href: "#", path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.3a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.3c0-1.3-.5-2-1.5-2s-1.5.8-1.5 2V19h-3V9h3v1.4a3.5 3.5 0 013-1.6c2 0 3 1.3 3 3.7V19z" },
  { label: "Twitter", href: "#", path: "M22 5.9a8.3 8.3 0 01-2.4.7 4.1 4.1 0 001.8-2.3 8.3 8.3 0 01-2.6 1 4.1 4.1 0 00-7 3.8A11.7 11.7 0 013 4.7a4.1 4.1 0 001.3 5.5 4 4 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.3 8.3 0 012 18.5a11.7 11.7 0 006.3 1.9c7.6 0 11.8-6.3 11.8-11.8v-.5A8.4 8.4 0 0022 5.9z" },
  { label: "YouTube", href: "#", path: "M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9-3-.2-7.5-.2-7.5-.2s-4.5 0-7.5.2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 8.9 2 10.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.2 6.9.2s4.5 0 7.5-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4zM9.9 14.5v-6l5.4 3-5.4 3z" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="grid-pattern-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5">
                <Logo className="h-10 w-10" light />
                <div className="flex flex-col leading-tight">
                  <span className="text-[15px] font-semibold tracking-tight text-white">
                    MK Digital Nexus
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Digital Agency
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
                Crafting websites, AI-powered video reels, and design systems for
                brands that want to stand out — built out of Junagadh, delivered
                worldwide.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                MSME Registered · Junagadh, India
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Services
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li><Link href="/services" className="hover:text-accent transition-colors">Websites</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Graphic Design</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">AI Video Reels</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Company
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Get in touch
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:hello@mkdigitalnexus.com" className="hover:text-accent transition-colors">
                    hello@mkdigitalnexus.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:+916353121773" className="hover:text-accent transition-colors">
                    +91 63531 21773
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-accent mt-0.5" />
                  <span>Near Bhagwati Kalamandir, Kalvachok, Junagadh</span>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:bg-accent hover:border-accent hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
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
