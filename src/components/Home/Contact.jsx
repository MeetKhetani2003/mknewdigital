"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".minimal-reveal", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-10 bg-[#fefcfb]">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-20">
          <span className="minimal-reveal text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">
            Inquiry
          </span>
          <h2 className="minimal-reveal text-5xl lg:text-6xl font-extralight text-primary tracking-tighter leading-none">
            Let's build your <br />
            <span className="font-medium italic">next big thing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Direct Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="minimal-reveal">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/30 mb-3">
                General Enquiries
              </p>
              <a
                href="mailto:mkdigitalnexus@gmail.com"
                className="text-xl font-light text-primary hover:text-accent transition-colors"
              >
                mkdigitalnexus@gmail.com
              </a>
            </div>
            <div className="minimal-reveal">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/30 mb-3">
                Office Location
              </p>
              <p className="text-xl font-light text-primary leading-relaxed">
                Junagadh, Gujarat <br /> India
              </p>
            </div>
          </div>

          {/* Right: Minimal Form (8 Columns) */}
          <div className="lg:col-span-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="minimal-reveal relative group">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors text-lg font-light placeholder:text-primary/20"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="minimal-reveal relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors text-lg font-light placeholder:text-primary/20"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="minimal-reveal md:col-span-2 relative group">
                <select className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors text-lg font-light text-primary/40 appearance-none cursor-pointer">
                  <option>Web Development</option>
                  <option>Software Development</option>
                  <option>CRM & Inventory Dashboard</option>
                </select>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="minimal-reveal md:col-span-2 relative group">
                <textarea
                  rows="1"
                  placeholder="Project Details"
                  className="w-full bg-transparent border-b border-primary/10 py-4 outline-none focus:border-accent transition-colors text-lg font-light placeholder:text-primary/20 resize-none overflow-hidden"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="minimal-reveal md:col-span-2 pt-4">
                <button className="group flex items-center gap-6">
                  <div className="px-10 py-5 bg-primary text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10 hover:shadow-accent/20">
                    Send Request
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                    or reach out via linkedin →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
