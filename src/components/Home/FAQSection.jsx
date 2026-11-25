"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqList = [
  {
    q: "What services does MK Digital Nexus provide?",
    a: "We provide website development, custom software, web applications, e-commerce solutions, CRM systems, mobile applications and digital marketing services.",
  },
  {
    q: "Do you build custom websites or use templates?",
    a: "We develop websites based on each client's requirements, brand identity and business goals. The approach and technology depend on the project.",
  },
  {
    q: "How long does it take to complete a website?",
    a: "Project timelines depend on the number of pages, features, design complexity and content readiness. We share an estimated timeline after understanding the requirements.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes. We build responsive websites designed to work across mobile phones, tablets and desktop devices.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can review your existing website and help redesign its interface, improve user experience and implement required functionality.",
  },
  {
    q: "Will I be able to manage my website after launch?",
    a: "Yes. Depending on the project, we can provide an admin dashboard or a suitable content-management solution to manage website content and business information.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. Hosting and maintenance arrangements can be discussed according to your project requirements and selected package.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We collaborate remotely with businesses across different locations and can coordinate through email, video meetings and other communication channels.",
  },
  {
    q: "How can I start a project?",
    a: "Simply contact us through the enquiry form, email or WhatsApp. Share your requirements, and our team will discuss the next steps with you.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header staggered fade-in
      gsap.fromTo(
        ".faq-fade",
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

      // Accordion rows staggered reveal
      gsap.fromTo(
        ".faq-row-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
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
      id="faq"
      className="relative bg-[#FFFFFF] pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 border-t border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* =========================================
              LEFT COLUMN: EDITORIAL HEADER & CTA BOX
             ========================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between">
            <div>
              {/* Eyebrow badge */}
              <div className="faq-fade inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
                <span>Got Questions?</span>
              </div>

              {/* Main heading */}
              <h2 className="faq-fade text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
                Everything You Need to Know.
              </h2>

              {/* Supporting description */}
              <p className="faq-fade mt-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
                A few things you might want to know before bringing your next digital project to life.
              </p>
            </div>

            {/* Compact Help & Contact CTA */}
            <div className="faq-fade mt-8 rounded-xl border border-[#E7EAF0] bg-[#F5F7FA] p-5 sm:p-6 transition-all duration-200">
              <div className="flex items-center gap-2 text-[#0D1B2A] font-semibold text-[14.5px]">
                <MessageCircle className="h-4 w-4 text-[#2563EB]" />
                <span>Still have a question?</span>
              </div>
              <p className="mt-1.5 text-[13px] text-[#667085] leading-relaxed">
                We&apos;re here to help. Reach out to our team directly for clear answers tailored to your business needs.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => triggerBookServiceModal()}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-[13px] font-medium text-[#FFFFFF] shadow-xs transition-all duration-150 hover:bg-[#1D4ED8] active:bg-[#1E40AF] cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="https://wa.me/919426989489?text=Hello%20MK%20Digital%20Nexus%2C%20I%20have%20a%20question%20about%20my%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#E7EAF0] bg-[#FFFFFF] px-3.5 py-2 text-[13px] font-medium text-[#0D1B2A] transition-all duration-150 hover:bg-[#F1F5F9]"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: 9-STEP ACCORDION
             ========================================= */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E7EAF0] border-y border-[#E7EAF0]">
            {faqList.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="faq-row-item transition-colors duration-150"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="flex w-full items-center justify-between py-4 sm:py-4.5 text-left transition-colors duration-150 hover:text-[#2563EB] cursor-pointer group"
                  >
                    <span className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors pr-4 tracking-[-0.01em]">
                      {faq.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#E7EAF0] bg-[#F5F7FA] text-[#667085] transition-all duration-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF]">
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  {/* Expandable answer */}
                  <div
                    id={`faq-answer-${idx}`}
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-4 pt-0.5"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#667085] pr-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQSection;
