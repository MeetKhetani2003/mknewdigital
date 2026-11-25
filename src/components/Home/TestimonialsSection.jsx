"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const FiveStars = () => (
  <div className="flex items-center gap-1 text-[#F59E0B]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".testimonials-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        ".testimonial-card-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
      id="testimonials"
      className="relative bg-[#FFFFFF] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 border-t border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* =========================================
            SECTION HEADER & GOOGLE PROFILE LINK
           ========================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="testimonials-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Client Reviews</span>
            </div>

            <h2 className="testimonials-fade text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
              Real Experiences. Genuine Trust.
            </h2>

            <p className="testimonials-fade mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Our clients&apos; feedback reflects the experience of working with MK Digital Nexus. Here&apos;s what they have shared with us on Google.
            </p>
          </div>

          {/* Outbound Google Profile Link */}
          <div className="testimonials-fade shrink-0">
            <a
              href="https://share.google/VqmKOhc9O8q5wXUvg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-[#E7EAF0] bg-[#FFFFFF] px-4 py-2.5 text-[13px] font-medium text-[#0D1B2A] shadow-xs transition-all duration-150 hover:bg-[#F5F7FA] hover:border-[#CBD5E1] group"
            >
              <GoogleIcon />
              <span>Read all reviews on Google</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#667085] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0D1B2A]" />
            </a>
          </div>
        </div>

        {/* =========================================
            EDITORIAL TESTIMONIAL COMPOSITION
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* =========================================
              LEFT COLUMN: PROMINENT FEATURED REVIEW (Viking D)
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="testimonial-card-item h-full flex flex-col justify-between rounded-2xl border border-[#E7EAF0] bg-[#F5F7FA] p-7 sm:p-9 transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_10px_28px_-12px_rgba(37,99,235,0.08)]">
              <div>
                {/* Header with 5 Stars & Google Verification */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <FiveStars />
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E7EAF0] text-[11px] font-medium text-[#667085]">
                    <GoogleIcon />
                    <span>Verified Review</span>
                  </div>
                </div>

                {/* Exact Original Review Quote */}
                <blockquote className="text-[17px] sm:text-[19px] font-medium text-[#0D1B2A] leading-relaxed tracking-[-0.01em]">
                  &ldquo;Good work website 5 out of 5 star Work ,, comfortably completed my website work&rdquo;
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-6 border-t border-[#E7EAF0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF] border border-[#E7EAF0] text-[13px] font-bold text-[#0D1B2A]">
                    V
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-[#0D1B2A]">
                      Viking D
                    </h4>
                    <p className="text-[11.5px] text-[#667085]">
                      Google Business Review · 5.0 Star Rating
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[#10B981]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Google Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: THREE BALANCED REVIEWS
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Review 2: Ram Bharat */}
            <div className="testimonial-card-item rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] p-5 sm:p-6 transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_-10px_rgba(37,99,235,0.08)]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <FiveStars />
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#667085]">
                  <GoogleIcon />
                  <span className="hidden sm:inline">Google Review</span>
                </div>
              </div>
              <blockquote className="text-[14.5px] font-medium text-[#0D1B2A] leading-relaxed">
                &ldquo;Exllent job and quick response and satisfied work&rdquo;
              </blockquote>
              <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#0D1B2A]">
                  Ram Bharat
                </span>
                <span className="text-[11px] text-[#667085]">
                  5.0 ★ Rating
                </span>
              </div>
            </div>

            {/* Review 3: Harsh Chudasama */}
            <div className="testimonial-card-item rounded-xl border border-[#E7EAF0] bg-[#FFFFFF] p-5 sm:p-6 transition-all duration-200 hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_-10px_rgba(37,99,235,0.08)]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <FiveStars />
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#667085]">
                  <GoogleIcon />
                  <span className="hidden sm:inline">Google Review</span>
                </div>
              </div>
              <blockquote className="text-[14.5px] font-medium text-[#0D1B2A] leading-relaxed">
                &ldquo;Very nice service&rdquo;
              </blockquote>
              <div className="mt-3.5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#0D1B2A]">
                  Harsh Chudasama
                </span>
                <span className="text-[11px] text-[#667085]">
                  5.0 ★ Rating
                </span>
              </div>
            </div>

            {/* Review 4: Neelkanth Transport service (Rating-Only Review) */}
            <div className="testimonial-card-item rounded-xl border border-[#E7EAF0] bg-[#F5F7FA] p-4 sm:p-5 transition-all duration-200 hover:border-[#2563EB]/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFFFFF] border border-[#E7EAF0] text-[11px] font-bold text-[#0D1B2A]">
                    N
                  </div>
                  <div>
                    <h5 className="text-[13.5px] font-semibold text-[#0D1B2A]">
                      Neelkanth Transport service
                    </h5>
                    <p className="text-[11px] text-[#667085]">
                      Verified Google rating without written comments
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto pl-11 sm:pl-0">
                  <FiveStars />
                  <span className="text-[11.5px] font-semibold text-[#0D1B2A]">5.0</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
