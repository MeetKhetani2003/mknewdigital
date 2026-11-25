"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Layers, Server, Database, CreditCard, Cloud, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layers,
    description: "Modern, reactive user interfaces engineered for speed, responsiveness and search indexing.",
    gridClass: "lg:col-span-7",
    technologies: [
      {
        name: "JavaScript",
        role: "Core Language",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 rounded-[3px]" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="3" fill="#F7DF1E" />
            <path d="M6 17.5c.5.8 1.4 1.3 2.5 1.3 1.5 0 2.5-.8 2.5-2.5v-6h-2.2v6c0 .7-.3 1.1-.9 1.1-.5 0-.9-.3-1.1-.7l-.8.8zm7.5 1.2c1.2 0 2.2-.6 2.8-1.5l-1.6-1c-.4.5-.8.8-1.2.8-.7 0-1.1-.4-1.1-.9 0-.6.4-.8 1.5-1.3 1.8-.7 2.6-1.4 2.6-2.7 0-1.5-1.2-2.5-2.7-2.5-1.4 0-2.3.7-2.8 1.7l1.6.9c.3-.5.6-.8 1.1-.8.6 0 .9.3.9.7 0 .5-.4.7-1.4 1.1-1.7.7-2.7 1.4-2.7 2.9 0 1.6 1.2 2.6 3 2.6z" fill="#000000" />
          </svg>
        ),
      },
      {
        name: "React.js",
        role: "Component Library",
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 shrink-0" aria-hidden="true">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: "Next.js",
        role: "Full-Stack Framework",
        icon: (
          <svg viewBox="0 0 180 180" className="w-5 h-5 shrink-0" aria-hidden="true">
            <mask height="180" id="tech-next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
              <circle cx="90" cy="90" fill="#000" r="90" />
            </mask>
            <g mask="url(#tech-next-mask)">
              <circle cx="90" cy="90" fill="#0D1B2A" r="90" />
              <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#tech-next-g1)" />
              <rect fill="url(#tech-next-g2)" height="72" width="12" x="115" y="54" />
            </g>
            <defs>
              <linearGradient id="tech-next-g1" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="tech-next-g2" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: "HTML5",
        role: "Semantic Markup",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#E34F26" d="M2.5 1h19l-1.7 19.3L12 23l-7.8-2.7L2.5 1z" />
            <path fill="#EF652A" d="M12 21.1l6.4-2.2 1.4-16.1H12v18.3z" />
            <path fill="#EBEBEB" d="M12 5.5H6.9l.3 3.3h4.8v-3.3zm0 6.6H7.3l.3 3.3h4.4v-3.3zm0 6.6l-.1.1-2.8-.8-.2-2.1H6.7l.4 4.3 4.9 1.4v-2.9z" />
            <path fill="#FFFFFF" d="M12 5.5v3.3h4.5l-.3 3.3H12v3.3h4.1l-.4 4.4-3.7 1v2.9l4.9-1.4 1.1-12.8H12v-.7z" />
          </svg>
        ),
      },
      {
        name: "CSS3",
        role: "Modern Styling",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#1572B6" d="M2.5 1h19l-1.7 19.3L12 23l-7.8-2.7L2.5 1z" />
            <path fill="#33A9DC" d="M12 21.1l6.4-2.2 1.4-16.1H12v18.3z" />
            <path fill="#EBEBEB" d="M12 5.5H6.9l.8 9.9h4.3v-3.3H9.7l-.3-3.3h2.6V5.5zm0 13.2l-.1.1-2.8-.8-.2-2.1H6.7l.4 4.3 4.9 1.4v-2.9z" />
            <path fill="#FFFFFF" d="M12 5.5v3.3h4.5l-.3 3.3H12v3.3h4.1l-.4 4.4-3.7 1v2.9l4.9-1.4 1.1-12.8H12v-.7z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        role: "Utility Framework",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    description: "Robust server runtimes, business logic engines and scalable API services.",
    gridClass: "lg:col-span-5",
    technologies: [
      {
        name: "Node.js",
        role: "Runtime Engine",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#5FA04E" d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.3L4 8.9v9.2l8 4.6 8-4.6V8.9L12 4.3z" />
            <path fill="#5FA04E" d="M12 7.2l5 2.9v5.8l-5 2.9-5-2.9v-5.8l5-2.9z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        role: "API Framework",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="4" fill="#0D1B2A" />
            <text x="5" y="16.5" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold">ex</text>
          </svg>
        ),
      },
      {
        name: "REST APIs",
        role: "Architecture & Endpoints",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1.5" fill="#2563EB" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    description: "Structured relational models and high-throughput document stores.",
    gridClass: "lg:col-span-4",
    technologies: [
      {
        name: "MongoDB",
        role: "NoSQL Document DB",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#47A248" d="M12 1.5C11.6 1.8 7 7.2 7 13.5c0 4.2 3.1 7.8 5 8.9 1.9-1.1 5-4.7 5-8.9 0-6.3-4.6-11.7-5-12z" />
            <path fill="#3FA037" d="M12 1.5v20.9c1.9-1.1 5-4.7 5-8.9 0-6.3-4.6-11.7-5-12z" />
            <path fill="#FFFFFF" d="M12 5v14c-.3 0-.6-.1-.8-.3C9.8 17.5 9 15.6 9 13.5c0-3.5 2-6.9 3-8.5z" />
          </svg>
        ),
      },
      {
        name: "MySQL",
        role: "Relational SQL DB",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#00758F" aria-hidden="true">
            <path d="M17.8 7.3c-.6-.7-1.4-1.2-2.3-1.5-.9-.3-1.9-.3-2.8-.1-.9.2-1.8.6-2.5 1.2-.7.6-1.3 1.4-1.7 2.3-.4.9-.6 1.8-.5 2.8.1.9.4 1.8.9 2.6.5.8 1.2 1.4 2 1.9.8.5 1.7.7 2.7.7.9 0 1.8-.2 2.6-.6.8-.4 1.5-1 2-1.7l-1.6-1.1c-.4.5-.8.9-1.4 1.2-.6.3-1.2.4-1.8.4-.7 0-1.3-.2-1.9-.5-.6-.3-1-.8-1.4-1.4-.4-.6-.6-1.2-.6-1.9 0-.7.2-1.3.5-1.9.3-.6.8-1 1.3-1.4.5-.4 1.1-.6 1.8-.6.6 0 1.3.2 1.8.5.5.3 1 .8 1.3 1.3l1.5-1.3zM21 16.5c-1.2 0-2.3-.3-3.2-.9l.7-1.4c.7.5 1.6.7 2.5.7 1.1 0 1.8-.4 1.8-1.1 0-.6-.5-.9-1.4-1.2-1.4-.5-2.4-1.1-2.4-2.5 0-1.4 1.1-2.4 2.8-2.4 1 0 1.9.3 2.7.7l-.6 1.4c-.6-.4-1.3-.6-2.1-.6-.9 0-1.4.4-1.4.9 0 .6.5.9 1.4 1.2 1.4.5 2.4 1.1 2.4 2.5-.1 1.5-1.3 2.7-3.2 2.7z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Payments",
    icon: CreditCard,
    description: "Frictionless checkout, third-party hooks and automated notification channels.",
    gridClass: "lg:col-span-4",
    technologies: [
      {
        name: "Razorpay",
        role: "Payment Gateway",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
            <path d="M14.6 2.5L7.4 14.8H12.2L9.4 21.5L16.6 9.2H11.8L14.6 2.5Z" fill="#0082FF" />
          </svg>
        ),
      },
      {
        name: "Third-party APIs",
        role: "Custom Integrations",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m12 15 2 2 4-4" />
            <rect width="14" height="14" x="8" y="8" rx="2" />
            <path d="M4 10V6a2 2 0 0 1 2-2h4" />
            <path d="M14 4h4a2 2 0 0 1 2 2v4" />
          </svg>
        ),
      },
      {
        name: "Email Integrations",
        role: "SMTP & Transactional",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Infrastructure",
    icon: Cloud,
    description: "Reliable production hosting, CI/CD pipelines and version-controlled environments.",
    gridClass: "lg:col-span-4",
    technologies: [
      {
        name: "Vercel",
        role: "Cloud Edge Platform",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="#000000" aria-hidden="true">
            <path d="M12 1L24 22H0L12 1Z" />
          </svg>
        ),
      },
      {
        name: "Hostinger",
        role: "Web & VPS Hosting",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
            <path d="M7.5 4v16h3V13.5h3V20h3V4h-3v6.5h-3V4h-3z" fill="#673DE6" />
          </svg>
        ),
      },
      {
        name: "Git & GitHub",
        role: "Version Control & CI/CD",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path fill="#F05032" d="M21.6 10.9L13.1 2.4c-.8-.8-2-.8-2.8 0L8.8 3.9l3.5 3.5c.8-.3 1.8-.1 2.4.6.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.6.9.9.9 2.3 0 3.2s-2.3.9-3.2 0c-.7-.7-.9-1.7-.5-2.5l-3.2-3.2v5.2c.4.3.7.8.7 1.4 0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3c0-.6.3-1.1.7-1.4V8.4c-.4-.3-.7-.8-.7-1.4 0-.8.4-1.5 1-1.9L7.3 1.8 1.9 7.2c-.8.8-.8 2 0 2.8l8.5 8.5c.8.8 2 .8 2.8 0l8.4-8.4c.8-.8.8-2 0-2.8v-.4z" />
          </svg>
        ),
      },
    ],
  },
];

export function TechnologyStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".tech-header-fade",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Staggered reveal for category cards
      gsap.fromTo(
        ".tech-category-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative bg-[#FFFFFF] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="tech-header-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            <span>Technology & Expertise</span>
          </div>

          <h2 className="tech-header-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
            Built with the Right Technology.
          </h2>

          <p className="tech-header-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            We choose technologies based on the requirements of each project, focusing on performance, scalability, reliability and long-term maintainability.
          </p>
        </div>

        {/* =========================================
            STRUCTURED TECHNOLOGY CATEGORIES GRID
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`tech-category-card rounded-2xl border border-[#E7EAF0] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#2563EB]/35 hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.08)] ${category.gridClass}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-[#F5F7FA] border border-[#E7EAF0] text-[#2563EB] flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-[17px] sm:text-[18px] font-bold tracking-[-0.015em] text-[#0D1B2A]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10.5px] font-bold text-[#2563EB] bg-[#2563EB]/8 border border-[#2563EB]/15 px-2 py-0.5 rounded-full tracking-wide">
                      {category.technologies.length} Tech
                    </span>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#667085] mb-4">
                    {category.description}
                  </p>

                  {/* Subtle Hairline */}
                  <div className="border-t border-[#F1F5F9] mb-4" />

                  {/* Technology Tiles */}
                  <div className={`grid gap-2.5 ${
                    category.id === "frontend"
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"
                  }`}>
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        tabIndex={0}
                        role="group"
                        aria-label={tech.name}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-[#E7EAF0] bg-[#F8FAFC]/50 hover:bg-[#FFFFFF] hover:border-[#2563EB]/35 hover:shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition-all duration-150 group/tile cursor-default"
                      >
                        <div className="h-8 w-8 rounded-lg bg-white border border-[#E7EAF0] flex items-center justify-center shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.04)] group-hover/tile:scale-105 group-hover/tile:border-[#2563EB]/25 transition-all">
                          {tech.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[13px] font-semibold text-[#0D1B2A] group-hover/tile:text-[#2563EB] transition-colors truncate">
                            {tech.name}
                          </div>
                          <div className="text-[11px] text-[#667085] truncate">
                            {tech.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Note */}
                <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-medium text-[#667085]">
                  <span>Project-Specific Selection</span>
                  <span className="text-[#2563EB] font-semibold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TechnologyStack;
