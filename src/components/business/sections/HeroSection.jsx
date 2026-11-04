"use client";
import React from "react";
import { ArrowRight, Phone, Star, ShieldCheck, CheckCircle2, Sparkles, TrendingUp, Activity, Check } from "lucide-react";
import { EditableElement } from "../EditableElement";
import { useSectionAnimation } from "../useSectionAnimation";

export function HeroSection({
  section,
  isEditing = false,
  selectedElementId,
  onSelectElement,
  business = {},
  theme = {},
}) {
  const containerRef = useSectionAnimation(section, isEditing);
  const content = section.content || {};
  const layout = section.layout || "split";

  const primaryBtnColor = theme.primaryColor || "#1B6FD6";
  const headingFont = theme.headingFont ? { fontFamily: `'${theme.headingFont}', sans-serif` } : {};
  const heroImg = content.imageUrl || content.image || "/images/generated/saas-dashboard.jpg";

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-white"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-50/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* LAYOUT 1: SPLIT CARD (MODERN SAAS / TECH PLATFORM) */}
        {layout === "split_card" ? (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              {content.badge && (
                <EditableElement
                  elementKey="badge"
                  sectionId={section.id}
                  label="Trust Badge"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                  <span>{content.badge}</span>
                </EditableElement>
              )}

              <EditableElement
                elementKey="heading"
                sectionId={section.id}
                label="Headline"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="h1"
                style={headingFont}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
              >
                {content.heading || "Intelligent Infrastructure for Modern High-Growth Enterprises"}
              </EditableElement>

              <EditableElement
                elementKey="description"
                sectionId={section.id}
                label="Description"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="p"
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {content.description ||
                  "Empowering industry leaders with high-velocity digital capabilities, zero-downtime reliability, and dedicated 24/7 technical concierge."}
              </EditableElement>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <EditableElement
                  elementKey="primaryButton"
                  sectionId={section.id}
                  label="Primary Button"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  as="a"
                  href={content.primaryButton?.link || "#contact"}
                  style={{ backgroundColor: primaryBtnColor }}
                  className="px-8 py-4 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/25 hover:opacity-95 transition-all inline-flex items-center gap-2.5 group"
                >
                  <span>{content.primaryButton?.text || "Deploy Platform Now"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </EditableElement>

                {content.secondaryButton && (
                  <EditableElement
                    elementKey="secondaryButton"
                    sectionId={section.id}
                    label="Secondary Button"
                    isEditing={isEditing}
                    selectedElementId={selectedElementId}
                    onSelectElement={onSelectElement}
                    as="a"
                    href={content.secondaryButton?.link || "#services"}
                    className="px-6 py-4 rounded-xl border border-slate-300 bg-white/80 hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base transition-all inline-flex items-center gap-2"
                  >
                    <span>{content.secondaryButton?.text || "Explore Architecture"}</span>
                  </EditableElement>
                )}
              </div>

              {/* Micro-trust indicators */}
              <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>99.98% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Instant Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D App Mockup Canvas */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
                {/* macOS Window Controls Chrome */}
                <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>analytics.nexus.live</span>
                  </div>
                  <div className="w-12" />
                </div>

                <EditableElement
                  elementKey="imageUrl"
                  sectionId={section.id}
                  label="App Mockup Image"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  className="relative block"
                >
                  <img
                    src={heroImg}
                    alt={content.imageAlt || "Tech Dashboard"}
                    className="w-full h-[360px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </EditableElement>

                {/* Floating Metric 1 */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Monthly Conversion</p>
                    <p className="text-sm font-black text-slate-900">+128.4% Growth</p>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute top-16 right-5 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-slate-700/80 text-white flex items-center gap-2 text-xs font-semibold">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Real-Time Node: Active</span>
                </div>
              </div>
            </div>
          </div>
        ) : layout === "minimal_type" ? (
          /* LAYOUT 2: MINIMAL EDITORIAL TYPOGRAPHY HERO */
          <div className="max-w-5xl mx-auto">
            <div className="border-b border-slate-200 pb-8 mb-10 flex flex-wrap items-center justify-between gap-4">
              {content.badge ? (
                <EditableElement
                  elementKey="badge"
                  sectionId={section.id}
                  label="Category Label"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold"
                >
                  <span>{content.badge}</span>
                </EditableElement>
              ) : (
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  [ 01 / PRIME COLLECTION ]
                </span>
              )}
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                ESTABLISHED 2026 • GUJARAT
              </span>
            </div>

            <EditableElement
              elementKey="heading"
              sectionId={section.id}
              label="Editorial Headline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h1"
              style={headingFont}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.08]"
            >
              {content.heading || "Architectural Purity & Uncompromising Materiality"}
            </EditableElement>

            <div className="mt-8 grid sm:grid-cols-12 gap-8 items-start">
              <div className="sm:col-span-7">
                <EditableElement
                  elementKey="description"
                  sectionId={section.id}
                  label="Editorial Narrative"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  as="p"
                  className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed"
                >
                  {content.description ||
                    "We create enduring physical environments that elevate how people live and experience space, guided by restraint, natural textures, and obsessive precision."}
                </EditableElement>
              </div>

              <div className="sm:col-span-5 flex flex-col sm:items-end gap-4">
                <EditableElement
                  elementKey="primaryButton"
                  sectionId={section.id}
                  label="Primary Button"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  as="a"
                  href={content.primaryButton?.link || "#contact"}
                  style={{ backgroundColor: primaryBtnColor }}
                  className="px-8 py-4 rounded-full text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all inline-flex items-center gap-2"
                >
                  <span>{content.primaryButton?.text || "Schedule Consultation"}</span>
                  <ArrowRight className="w-4 h-4" />
                </EditableElement>
              </div>
            </div>

            {/* Editorial Showcase Photo Frame */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
              <EditableElement
                elementKey="imageUrl"
                sectionId={section.id}
                label="Showcase Photo"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
              >
                <img
                  src={heroImg}
                  alt={content.imageAlt || "Editorial Feature"}
                  className="w-full h-[420px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </EditableElement>
            </div>
          </div>
        ) : layout === "centered" ? (
          /* LAYOUT 3: CENTERED HEADLINE HERO */
          <div className="text-center max-w-3xl mx-auto">
            {content.badge && (
              <EditableElement
                elementKey="badge"
                sectionId={section.id}
                label="Trust Badge"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
              >
                <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                <span>{content.badge}</span>
              </EditableElement>
            )}

            <EditableElement
              elementKey="heading"
              sectionId={section.id}
              label="Main Headline"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="h1"
              style={headingFont}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              {content.heading || "Elevate Your Business With Our Expertise"}
            </EditableElement>

            {content.subheading && (
              <EditableElement
                elementKey="subheading"
                sectionId={section.id}
                label="Subheading"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="p"
                className="mt-4 text-lg font-medium text-blue-600"
              >
                {content.subheading}
              </EditableElement>
            )}

            <EditableElement
              elementKey="description"
              sectionId={section.id}
              label="Description Paragraph"
              isEditing={isEditing}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              as="p"
              className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {content.description ||
                "Delivering exceptional quality, customized service, and proven results for every client."}
            </EditableElement>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <EditableElement
                elementKey="primaryButton"
                sectionId={section.id}
                label="Primary Button"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="a"
                href={content.primaryButton?.link || "#contact"}
                style={{ backgroundColor: primaryBtnColor }}
                className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all inline-flex items-center gap-2"
              >
                <span>{content.primaryButton?.text || "Get In Touch"}</span>
                <ArrowRight className="w-4 h-4" />
              </EditableElement>

              {content.secondaryButton && (
                <EditableElement
                  elementKey="secondaryButton"
                  sectionId={section.id}
                  label="Secondary Button"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  as="a"
                  href={content.secondaryButton?.link || "#services"}
                  className="px-7 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-all inline-flex items-center gap-2"
                >
                  <span>{content.secondaryButton?.text || "Our Services"}</span>
                </EditableElement>
              )}
            </div>

            {/* Quick stats counter */}
            {content.stats && content.stats.length > 0 && (
              <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                {content.stats.map((st, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">{st.value}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1">{st.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* LAYOUT 4: CLASSIC MODERN SPLIT (TEXT LEFT, MEDIA RIGHT) */
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              {content.badge && (
                <EditableElement
                  elementKey="badge"
                  sectionId={section.id}
                  label="Badge"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>{content.badge}</span>
                </EditableElement>
              )}

              <EditableElement
                elementKey="heading"
                sectionId={section.id}
                label="Headline"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="h1"
                style={headingFont}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
              >
                {content.heading || "Leading Business Service Provider"}
              </EditableElement>

              <EditableElement
                elementKey="description"
                sectionId={section.id}
                label="Description"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                as="p"
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {content.description ||
                  "Delivering tailored craftsmanship, prompt completion, and honest pricing. Proudly serving clients with unwavering dedication."}
              </EditableElement>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <EditableElement
                  elementKey="primaryButton"
                  sectionId={section.id}
                  label="Primary Button"
                  isEditing={isEditing}
                  selectedElementId={selectedElementId}
                  onSelectElement={onSelectElement}
                  as="a"
                  href={content.primaryButton?.link || "#contact"}
                  style={{ backgroundColor: primaryBtnColor }}
                  className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/20 hover:opacity-95 transition-all inline-flex items-center gap-2"
                >
                  <span>{content.primaryButton?.text || "Inquire Now"}</span>
                  <ArrowRight className="w-4 h-4" />
                </EditableElement>

                {content.secondaryButton && (
                  <EditableElement
                    elementKey="secondaryButton"
                    sectionId={section.id}
                    label="Secondary Button"
                    isEditing={isEditing}
                    selectedElementId={selectedElementId}
                    onSelectElement={onSelectElement}
                    as="a"
                    href={content.secondaryButton?.link || "#services"}
                    className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-all inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{content.secondaryButton?.text || "View Services"}</span>
                  </EditableElement>
                )}
              </div>

              {/* Verified Trust Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Transparent Rates</span>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <EditableElement
                elementKey="imageUrl"
                sectionId={section.id}
                label="Hero Image / Media"
                isEditing={isEditing}
                selectedElementId={selectedElementId}
                onSelectElement={onSelectElement}
                className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group"
              >
                <img
                  src={heroImg}
                  alt={content.imageAlt || "Business Hero Preview"}
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow">
                    ★
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Customer Rating</p>
                    <p className="text-sm font-extrabold text-slate-900">4.9 / 5.0 on Google</p>
                  </div>
                </div>
              </EditableElement>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
