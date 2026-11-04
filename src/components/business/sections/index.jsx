import { AnnouncementBarSection } from "./AnnouncementBarSection";
import { HeaderNavSection } from "./HeaderNavSection";
import { HeroSection } from "./HeroSection";
import { HeroBgImageSection } from "./HeroBgImageSection";
import { HeroBgVideoSection } from "./HeroBgVideoSection";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { ProductShowcaseSection } from "./ProductShowcaseSection";
import { ProductGridSection } from "./ProductGridSection";
import { GallerySection } from "./GallerySection";
import { HighlightsSection } from "./HighlightsSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { StatisticsSection } from "./StatisticsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ReviewsSection } from "./ReviewsSection";
import { TeamSection } from "./TeamSection";
import { OwnerProfileSection } from "./OwnerProfileSection";
import { SpecialOffersSection } from "./SpecialOffersSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { ContactInfoSection } from "./ContactInfoSection";
import { ContactFormSection } from "./ContactFormSection";
import { WhatsappCtaSection } from "./WhatsappCtaSection";
import { GoogleMapsSection } from "./GoogleMapsSection";
import { SocialMediaSection } from "./SocialMediaSection";
import { FooterSection } from "./FooterSection";

export const SECTION_COMPONENTS = {
  announcement_bar: AnnouncementBarSection,
  header_navigation: HeaderNavSection,
  hero: HeroSection,
  hero_bg_image: HeroBgImageSection,
  hero_bg_video: HeroBgVideoSection,
  about: AboutSection,
  services: ServicesSection,
  product_showcase: ProductShowcaseSection,
  product_grid: ProductGridSection,
  gallery: GallerySection,
  business_highlights: HighlightsSection,
  why_choose_us: WhyChooseUsSection,
  statistics: StatisticsSection,
  testimonials: TestimonialsSection,
  customer_reviews: ReviewsSection,
  team_members: TeamSection,
  owner_profile: OwnerProfileSection,
  special_offers: SpecialOffersSection,
  pricing_plans: PricingSection,
  faq: FaqSection,
  contact_info: ContactInfoSection,
  contact_form: ContactFormSection,
  whatsapp_cta: WhatsappCtaSection,
  google_maps: GoogleMapsSection,
  social_media: SocialMediaSection,
  footer: FooterSection,
};

import { SectionContext } from "../SectionContext";

export function renderSection(section, props) {
  if (!section || !section.visible) return null;
  const Component = SECTION_COMPONENTS[section.type];
  if (!Component) {
    return (
      <div className="p-8 text-center text-xs text-slate-400 border border-dashed border-slate-200">
        Unknown section type: {section.type}
      </div>
    );
  }
  return (
    <SectionContext.Provider key={section.id} value={section}>
      <Component section={section} {...props} />
    </SectionContext.Provider>
  );
}

