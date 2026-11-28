"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const contactFaqs = [
  {
    q: "What information should I share before starting a project?",
    a: "Sharing an overview of your business, your main goals for the project, your target audience, any reference websites you like, and your expected timeline helps us provide a precise technical proposal and roadmap.",
  },
  {
    q: "How do you determine project pricing?",
    a: "Our pricing is transparent and based on project scope, functional complexity, custom technical requirements, and integrations. We provide clear milestone breakdowns with zero hidden fees before work begins.",
  },
  {
    q: "Can you develop custom software for my business?",
    a: "Yes. In addition to custom websites and e-commerce stores, we engineer bespoke web applications, internal business software, CRM systems, inventory portals, and database dashboards tailored to your exact operational workflows.",
  },
  {
    q: "Do you provide ongoing technical support?",
    a: "Yes. We offer post-launch technical assistance, maintenance, updates, performance monitoring, and ongoing feature enhancements according to agreed service arrangements.",
  },
  {
    q: "Can I discuss my project before making a decision?",
    a: "Absolutely. We encourage an initial consultation to understand your requirements, explain our architectural approach, and confirm alignment before any formal commitment is made.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="contact-faq"
      aria-labelledby="contact-faq-heading"
      className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-[#E7EAF0]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAF0] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0D1B2A] mb-3.5 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            <span>COMMUNICATION FAQS</span>
          </div>

          <h2
            id="contact-faq-heading"
            className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold tracking-tight text-[#0D1B2A] leading-[1.2]"
          >
            Frequently Asked <span className="text-[#2563EB]">Questions.</span>
          </h2>

          <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#667085]">
            Everything you need to know about initiating a project, technical discussions and collaboration with MK Digital Nexus.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="rounded-xl border border-[#E7EAF0] bg-white overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#F8FAFC]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#0D1B2A] tracking-[-0.01em]">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] border border-[#E7EAF0] text-[#667085] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#2563EB] text-white border-[#2563EB]" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-[14px] leading-relaxed text-[#667085] border-t border-[#F1F3F7]"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ContactFAQ;
