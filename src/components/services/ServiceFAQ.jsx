"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    id: "01",
    question: "Can you build a website according to my business requirements?",
    answer:
      "Yes. We develop custom websites based on your business goals, brand identity, target audience and required functionality.",
  },
  {
    id: "02",
    question: "Can you develop custom software for my business?",
    answer:
      "Yes. We build business-specific solutions such as CRM dashboards, inventory management systems, booking platforms and other custom web applications.",
  },
  {
    id: "03",
    question: "Can you integrate payment gateways and third-party APIs?",
    answer:
      "Yes. Payment gateways and external API integrations can be included depending on the project requirements and provider support.",
  },
  {
    id: "04",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your existing website's design, improve its user experience and implement additional functionality.",
  },
  {
    id: "05",
    question: "Do you provide e-commerce solutions?",
    answer:
      "Yes. We develop online stores with product management, shopping carts, order management and payment integration options.",
  },
  {
    id: "06",
    question: "Can you work with my existing business software?",
    answer:
      "We can assess your existing systems and explore suitable integrations or custom development options based on technical compatibility.",
  },
  {
    id: "07",
    question: "Do you provide SEO with website development?",
    answer:
      "We can implement technical SEO foundations, responsive layouts, metadata, structured content and other agreed SEO requirements. Ongoing SEO services can be discussed separately.",
  },
  {
    id: "08",
    question: "Can you add new features after project delivery?",
    answer:
      "Yes. Additional features, integrations and improvements can be planned and quoted according to your requirements.",
  },
];

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for clear scanability
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left column reveal
      gsap.fromTo(
        ".faq-left-col",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right column accordion items reveal
      gsap.fromTo(
        ".faq-accordion-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={sectionRef}
      id="service-faqs"
      className="relative bg-[#F8FAFC] pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* =========================================
              LEFT COLUMN: Header, Description & Contact CTA
             ========================================= */}
          <div className="faq-left-col lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>Service FAQs</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]">
              Questions Before You Get Started?
            </h2>

            <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Every project is different. Here are answers to some common questions about our development services and how we work.
            </p>

            {/* Compact Help Box */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E7EAF0] shadow-xs">
              <div className="flex items-center gap-2.5 text-[12px] font-semibold text-[#0D1B2A] mb-2">
                <MessageCircle className="h-4 w-4 text-[#2563EB]" />
                <span>Have a different question?</span>
              </div>
              <p className="text-[13px] text-[#667085] leading-relaxed mb-4">
                We are always available to discuss specific project scopes, custom architectures, or technical requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-xl bg-[#0D1B2A] text-white text-xs font-semibold hover:bg-[#2563EB] transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://wa.me/916353121773?text=Hi%20MK%20Digital%20Nexus%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-xl border border-[#E7EAF0] bg-white text-xs font-semibold text-[#0D1B2A] hover:bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="text-emerald-500 font-bold">●</span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Vertically Stacked Accordion
             ========================================= */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7EAF0] p-4 sm:p-6 shadow-xs divide-y divide-[#E7EAF0]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const itemId = `service-faq-${faq.id}`;
              const answerId = `service-faq-ans-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="faq-accordion-item py-4 first:pt-1 last:pb-1 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={itemId}
                    className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg py-1"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-[11px] font-bold text-[#667085] bg-[#F5F7FA] px-1.5 py-0.5 rounded border border-[#E7EAF0]/60 shrink-0 mt-0.5 group-hover:text-[#2563EB] transition-colors">
                        {faq.id}
                      </span>
                      <span className="text-[15px] sm:text-[16px] font-bold text-[#0D1B2A] group-hover:text-[#2563EB] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                          : "bg-[#F5F7FA] text-[#0D1B2A] border-[#E7EAF0] group-hover:border-[#2563EB]/40 group-hover:text-[#2563EB]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={itemId}
                    className={`grid transition-all duration-250 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#667085] pl-8 sm:pl-9 pr-2">
                        {faq.answer}
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

export default ServiceFAQ;
