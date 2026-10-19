"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    name: "Aarav Sharma",
    role: "CEO, TechFlow Solutions",
    content:
      "MK Digital Nexus transformed our business website into a high-performance Next.js platform optimized for SEO and scalability.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, RetailSync",
    content:
      "The custom CRM dashboard developed for our inventory management streamlined our operations and improved productivity.",
  },
  {
    name: "Rohan Mehta",
    role: "Director, BSR Worldwide",
    content:
      "Professional, fast, and scalable web development services. They built a powerful digital foundation for our company.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".testimonial-reveal", { opacity: 1, visibility: "visible" });

      gsap.from(".testimonial-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-10 bg-[#fefcfb]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="testimonial-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
            Client Testimonials
          </span>

          {/* SEO-Improved Heading */}
          <h2
            id="testimonials-heading"
            className="testimonial-reveal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-primary tracking-tight"
          >
            Trusted Web Development Company in{" "}
            <span className="font-medium italic">Rajkot & Junagadh</span>
          </h2>

          {/* Small SEO paragraph (invisible design impact, big SEO impact) */}
          <p className="testimonial-reveal mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Businesses across Gujarat trust MK Digital Nexus for professional
            website development, custom CRM dashboard solutions, and scalable
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-reveal group relative p-6 sm:p-8 md:p-10 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:border-accent/30 hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  ))}
                </div>

                <p className="text-gray-500 font-light italic leading-relaxed mb-10 text-lg">
                  "{review.content}"
                </p>

                <div>
                  <p className="text-sm font-bold text-primary tracking-wide">
                    {review.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
