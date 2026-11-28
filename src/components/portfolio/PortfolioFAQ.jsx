"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import { triggerBookServiceModal } from "@/components/ui/FloatingActions";

const portfolioFaqs = [
  {
    id: "01",
    question: "Are all the projects displayed in your portfolio live websites?",
    answer:
      "We showcase actual projects completed by MK Digital Nexus. Where a live website is available, we provide its direct link.",
  },
  {
    id: "02",
    question: "Can I see more projects from a particular industry?",
    answer:
      "You can explore projects using the portfolio categories. Contact us if you need examples relevant to a specific business or industry.",
  },
  {
    id: "03",
    question: "Do you work on projects similar to the ones shown here?",
    answer:
      "Yes. We can discuss your requirements and explore an approach based on your business goals and the type of solution you need.",
  },
  {
    id: "04",
    question: "Can I request a website similar to a project in your portfolio?",
    answer:
      "Yes. We can use a project as a reference for understanding your preferences, but the final design and functionality will be planned around your own brand and requirements.",
  },
  {
    id: "05",
    question: "Do you showcase custom software and web applications too?",
    answer:
      "Yes. Our portfolio includes different types of digital projects, including websites, e-commerce platforms and business applications where available.",
  },
  {
    id: "06",
    question: "Can I get a detailed breakdown of a particular project?",
    answer:
      "Contact us with the project name. We can discuss the available details and explain relevant design and development decisions.",
  },
];

export function PortfolioFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for clear scanability

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="portfolio-faqs"
      aria-labelledby="portfolio-faq-heading"
      className="relative bg-white pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 border-b border-[#E7EAF0] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Header, Description & Compact Start a Project Box
              ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              <span>PORTFOLIO FAQs</span>
            </div>

            <h2
              id="portfolio-faq-heading"
              className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-[-0.025em] text-[#0D1B2A] leading-[1.2]"
            >
              Curious About Our Work?
            </h2>

            <p className="mt-3.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
              Here are a few things you might want to know about our projects, development approach and portfolio.
            </p>

            {/* Compact Start a Project Card */}
            <div className="mt-7 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E7EAF0]">
              <div className="flex items-center gap-2 text-[12.5px] font-semibold text-[#0D1B2A] mb-2">
                <Sparkles className="h-4 w-4 text-[#2563EB]" />
                <span>Ready to start your next build?</span>
              </div>
              <p className="text-[13px] text-[#667085] leading-relaxed mb-4">
                Whether you need a reference-driven redesign or a tailored web application, let&apos;s map out your project requirements.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => triggerBookServiceModal()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] text-white text-[13px] font-semibold hover:bg-[#1D4ED8] transition-colors cursor-pointer shadow-xs"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-[#0D1B2A] hover:text-[#2563EB] transition-colors"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Refined Accordion List
              ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E7EAF0] border-t border-b border-[#E7EAF0]">
              {portfolioFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const buttonId = `portfolio-faq-btn-${faq.id}`;
                const panelId = `portfolio-faq-panel-${faq.id}`;

                return (
                  <div key={faq.id} className="py-4 sm:py-5 transition-colors">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleAccordion(idx)}
                      className="group w-full flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded-lg py-1"
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        <span className="font-mono text-[12px] font-semibold text-[#2563EB] bg-[#2563EB]/8 px-2 py-0.5 rounded-md mt-0.5 shrink-0">
                          {faq.id}
                        </span>
                        <span
                          className={`text-[15px] sm:text-[16.5px] font-semibold transition-colors duration-200 ${
                            isOpen
                              ? "text-[#2563EB]"
                              : "text-[#0D1B2A] group-hover:text-[#2563EB]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 mt-0.5 ${
                          isOpen
                            ? "bg-[#2563EB] border-[#2563EB] text-white"
                            : "bg-white border-[#E7EAF0] text-[#667085] group-hover:border-[#2563EB]/40 group-hover:text-[#2563EB]"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                        ) : (
                          <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                        isOpen ? "grid-template-rows-[1fr]" : "grid-template-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-3 pl-[38px] sm:pl-[42px] pr-8 pb-1">
                          <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#475467]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PortfolioFAQ;
