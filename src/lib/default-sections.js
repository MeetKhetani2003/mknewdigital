export const SECTION_METADATA = [
  {
    type: "announcement_bar",
    name: "Announcement Bar",
    category: "Header & Navigation",
    description: "Top promotional banner with alert message, countdown or button.",
    variations: [
      { id: "centered", label: "Centered Minimal", desc: "Clean centered alert with text and button" },
      { id: "split", label: "Split Banner", desc: "Text on left, discount coupon and CTA on right" },
      { id: "ticker", label: "Animated Ticker", desc: "Continuous scrolling highlight marquee" },
      { id: "gradient", label: "Accent Gradient", desc: "High contrast gradient promotional bar" },
    ],
  },
  {
    type: "header_navigation",
    name: "Header / Navigation",
    category: "Header & Navigation",
    description: "Business navigation bar with logo, menu links, phone and WhatsApp buttons.",
    variations: [
      { id: "clean", label: "Clean Light", desc: "Standard crisp white navbar with sticky shadow" },
      { id: "transparent", label: "Floating Transparent", desc: "Overlay header floating above hero banner" },
      { id: "centered_logo", label: "Centered Logo", desc: "Logo in center with navigation links on both sides" },
      { id: "solid_dark", label: "Solid Navy / Dark", desc: "Premium dark navbar with high contrast buttons" },
    ],
  },
  {
    type: "hero",
    name: "Hero Section",
    category: "Hero",
    description: "High impact introductory section with headline, badge, and primary/secondary CTAs.",
    variations: [
      { id: "split", label: "Left Text + Right Image", desc: "Headline on left, featured photo or mockup on right" },
      { id: "centered", label: "Centered Hero", desc: "Bold centered headline with dual buttons and trust badge" },
      { id: "minimal_type", label: "Minimal Typography", desc: "Editorial large text focus with subtle backdrop" },
      { id: "split_card", label: "Text + Featured Card", desc: "Headline alongside an interactive quick inquiry card" },
    ],
  },
  {
    type: "hero_bg_image",
    name: "Hero with Background Image",
    category: "Hero",
    description: "Hero with high-resolution full-bleed image and darkened gradient overlay.",
    variations: [
      { id: "fullscreen", label: "Full-Screen Bleed", desc: "100vh height background with centered white text" },
      { id: "boxed", label: "Boxed Container", desc: "Rounded hero container with background image" },
      { id: "split_overlay", label: "Angled Gradient Overlay", desc: "Dramatic contrast overlay with left aligned text" },
    ],
  },
  {
    type: "hero_bg_video",
    name: "Hero with Background Video",
    category: "Hero",
    description: "Ambient video background with headline, audio controls, and inquiry CTA.",
    variations: [
      { id: "cinematic", label: "Cinematic Fullscreen", desc: "Looping video background with darkened overlay" },
      { id: "modal_video", label: "Hero + Play Modal", desc: "Clean background with interactive play video button" },
    ],
  },
  {
    type: "about",
    name: "About Business",
    category: "About & Story",
    description: "Company history, mission statement, founder vision, and experience badge.",
    variations: [
      { id: "classic_split", label: "Image + Story Split", desc: "Photo with floating experience badge and story text" },
      { id: "grid_features", label: "Story + 3 Core Pillars", desc: "Intro narrative with three highlight feature columns" },
      { id: "story_timeline", label: "Milestones Timeline", desc: "Chronological journey from founding year to present" },
    ],
  },
  {
    type: "services",
    name: "Services",
    category: "Offerings & Showcase",
    description: "Highlight key service offerings with icons, details, and inquiry buttons.",
    variations: [
      { id: "icon_cards", label: "Icon Grid Cards", desc: "3 or 4 column grid of modern animated icon cards" },
      { id: "image_cards", label: "Visual Image Cards", desc: "Cards with cover photos, tags, and explore links" },
      { id: "horizontal_list", label: "Horizontal Rows", desc: "Clean structured horizontal list with hover state" },
      { id: "numbered_grid", label: "Numbered Modern Grid", desc: "01, 02, 03 stylized modern service blocks" },
    ],
  },
  {
    type: "product_showcase",
    name: "Product Showcase",
    category: "Offerings & Showcase",
    description: "Spotlight on flagship products, premium collections, or featured inventory.",
    variations: [
      { id: "featured_spotlight", label: "Featured Product Hero", desc: "Large hero showcase with thumbs and specs" },
      { id: "carousel_slider", label: "Interactive Slider", desc: "Horizontal carousel of top selling items" },
      { id: "split_feature", label: "Alternating Features", desc: "Zig-zag alternating image and feature breakdown" },
    ],
  },
  {
    type: "product_grid",
    name: "Product Grid",
    category: "Offerings & Showcase",
    description: "Catalogue or inventory grid with price, tags, and WhatsApp inquiry buttons.",
    variations: [
      { id: "ecommerce_cards", label: "E-Commerce Cards", desc: "Product cards with price, badges and Order button" },
      { id: "compact_list", label: "Menu / Price List", desc: "Ideal for restaurants, salons and repair shops" },
      { id: "minimal_masonry", label: "Visual Masonry", desc: "Image-first lifestyle product cards" },
    ],
  },
  {
    type: "gallery",
    name: "Image Gallery",
    category: "Visual Portfolio",
    description: "Showcase showroom photos, work samples, completed jobs, or facility pictures.",
    variations: [
      { id: "masonry", label: "Pinterest Masonry", desc: "Dynamic staggered height image masonry grid" },
      { id: "uniform_grid", label: "Clean 3-Column Grid", desc: "Balanced square grid with hover zoom & lightbox" },
      { id: "slider", label: "Fullwidth Slider", desc: "Swipeable wide photo carousel" },
      { id: "horizontal_scroll", label: "Smooth Reel", desc: "Continuous horizontal scrolling gallery reel" },
    ],
  },
  {
    type: "business_highlights",
    name: "Business Highlights",
    category: "Trust & Highlights",
    description: "Quick badges, key differentiators, certifications, and awards.",
    variations: [
      { id: "pill_strip", label: "Pill Badge Strip", desc: "Horizontal badges with icons across one clean strip" },
      { id: "icon_box_row", label: "4-Column Feature Boxes", desc: "Clean modern boxes highlighting core strengths" },
      { id: "bento_grid", label: "Bento Grid", desc: "Modern asymmetrical Bento layout with visual badges" },
    ],
  },
  {
    type: "why_choose_us",
    name: "Why Choose Us",
    category: "Trust & Highlights",
    description: "Detailed reasons why customers should choose this business over competitors.",
    variations: [
      { id: "checklist_split", label: "Image + Checkmarks", desc: "Side-by-side with verified benefits and check icons" },
      { id: "counter_cards", label: "Numbered Benefit Cards", desc: "Step-by-step trust pillars with high contrast" },
      { id: "comparison_table", label: "Us vs Others Table", desc: "Clear comparison matrix highlighting advantages" },
    ],
  },
  {
    type: "statistics",
    name: "Statistics / Counters",
    category: "Trust & Highlights",
    description: "Key metrics like happy clients, years of experience, and projects delivered.",
    variations: [
      { id: "counter_strip", label: "Horizontal Counter Strip", desc: "4 animated numbers with labels in a clean bar" },
      { id: "boxed_grid", label: "Accent Stat Cards", desc: "Contained cards with vibrant accent borders" },
      { id: "minimal_stats", label: "Large Bold Numerals", desc: "Oversized typography with minimal captions" },
    ],
  },
  {
    type: "testimonials",
    name: "Testimonials",
    category: "Social Proof",
    description: "Client feedback, authentic customer quotes, and recommendations.",
    variations: [
      { id: "card_slider", label: "Card Slider", desc: "Interactive carousel of client quotes with avatars" },
      { id: "grid_cards", label: "3-Column Grid", desc: "Clean cards with star ratings and verified buyer tags" },
      { id: "single_spotlight", label: "Executive Quote", desc: "Large featured client testimonial spotlight" },
    ],
  },
  {
    type: "customer_reviews",
    name: "Customer Reviews",
    category: "Social Proof",
    description: "Google Maps style reviews with 5-star ratings, author badges, and verification.",
    variations: [
      { id: "google_style", label: "Google Review Badges", desc: "Authentic Google 5.0 star look with review chips" },
      { id: "badge_grid", label: "Review Badges Grid", desc: "Detailed customer feedback cards with dates" },
      { id: "rating_summary", label: "Overall Rating + Breakdown", desc: "4.9/5 bar with rating breakdown and verified quotes" },
    ],
  },
  {
    type: "team_members",
    name: "Team Members",
    category: "About & Story",
    description: "Introduce key staff members, doctors, chefs, or managers.",
    variations: [
      { id: "photo_cards", label: "Portrait Cards", desc: "Photo, designation, experience and contact button" },
      { id: "circle_avatars", label: "Round Avatars Grid", desc: "Friendly modern grid with circular photos" },
      { id: "split_leader", label: "Lead Partner + Staff", desc: "Founder spotlight next to team gallery" },
    ],
  },
  {
    type: "owner_profile",
    name: "Business Owner Profile",
    category: "About & Story",
    description: "Founder introduction, personal vision, and direct contact line.",
    variations: [
      { id: "executive_card", label: "Executive Split Card", desc: "Portrait on left, personal message & signature on right" },
      { id: "badge_spotlight", label: "Modern Founder Chip", desc: "Centered profile with WhatsApp connect button" },
    ],
  },
  {
    type: "special_offers",
    name: "Special Offers",
    category: "Promotions",
    description: "Time-limited promotions, festive vouchers, and discount deals.",
    variations: [
      { id: "coupon_card", label: "Dashed Coupon Voucher", desc: "Stylized promo ticket with copyable promo code" },
      { id: "countdown_banner", label: "Countdown Urgency Banner", desc: "Limited time banner with urgency timer" },
      { id: "side_by_side_deals", label: "Dual Deal Cards", desc: "Two highlighted promo cards with savings badges" },
    ],
  },
  {
    type: "pricing_plans",
    name: "Pricing Plans",
    category: "Promotions",
    description: "Transparent pricing packages with feature lists and select buttons.",
    variations: [
      { id: "three_tier", label: "3-Tier Cards (Basic/Pro/VIP)", desc: "Standard pricing with highlighted Most Popular tier" },
      { id: "flat_rate_cards", label: "Simple Flat Cards", desc: "Clean dual packages with WhatsApp inquiry" },
      { id: "toggle_monthly_annual", label: "Billed Monthly / Yearly", desc: "Pricing switcher with discount badge" },
    ],
  },
  {
    type: "faq",
    name: "FAQ",
    category: "Engagement & Support",
    description: "Frequently asked questions with expandable accordion answers.",
    variations: [
      { id: "accordion_classic", label: "Single Column Accordion", desc: "Clean accordion with plus/minus toggles" },
      { id: "two_column_grid", label: "2-Column FAQ Grid", desc: "Side-by-side questions for rich Q&A sections" },
      { id: "split_contact", label: "FAQ + Need Help Card", desc: "Questions on left, direct call card on right" },
    ],
  },
  {
    type: "contact_info",
    name: "Contact Information",
    category: "Contact & Conversion",
    description: "Phone, WhatsApp, physical address, business hours, and email.",
    variations: [
      { id: "card_grid", label: "4-Card Detail Grid", desc: "Individual cards for Phone, Address, Hours, and Email" },
      { id: "horizontal_bar", label: "Compact Contact Bar", desc: "Clean one-row contact info strip" },
      { id: "split_details", label: "Photo + Details", desc: "Showroom entrance photo with detailed contact list" },
    ],
  },
  {
    type: "contact_form",
    name: "Contact Form",
    category: "Contact & Conversion",
    description: "Lead capture inquiry form with instant submit and WhatsApp redirect.",
    variations: [
      { id: "modern_card", label: "Modern Floating Form", desc: "Sleek card with name, phone, service, and message" },
      { id: "split_form", label: "Split Form + Info", desc: "Form on left, office address and perks on right" },
      { id: "minimal_inline", label: "Quick Inquiry Strip", desc: "Fast inline lead capture for rapid callbacks" },
    ],
  },
  {
    type: "whatsapp_cta",
    name: "WhatsApp CTA",
    category: "Contact & Conversion",
    description: "Direct WhatsApp click-to-chat banner with preset inquiry message.",
    variations: [
      { id: "banner_strip", label: "High-Contrast Green Banner", desc: "Vibrant fullwidth banner with WhatsApp button" },
      { id: "chat_bubble_card", label: "Chat Simulation Card", desc: "Friendly chat preview with 30-sec response badge" },
      { id: "floating_bar", label: "Floating Bottom Bar", desc: "Fixed sticky banner prompting immediate chat" },
    ],
  },
  {
    type: "google_maps",
    name: "Google Maps / Location",
    category: "Contact & Conversion",
    description: "Interactive Google Map embed with address and 'Get Directions' link.",
    variations: [
      { id: "fullwidth_map", label: "Fullwidth Map + Floating Card", desc: "Immersive map with floating shop details" },
      { id: "split_map", label: "Split Map + Address & Hours", desc: "Side-by-side map and physical store directions" },
    ],
  },
  {
    type: "social_media",
    name: "Social Media Links",
    category: "Engagement & Support",
    description: "Connect on Instagram, Facebook, YouTube, LinkedIn, and Google Profile.",
    variations: [
      { id: "icon_buttons", label: "Large Branded Icon Buttons", desc: "Pills with channel logos and follower tags" },
      { id: "feed_preview", label: "Instagram Grid Simulation", desc: "Simulated Instagram feed with follow button" },
      { id: "community_cards", label: "Community Cards", desc: "Card for each platform with direct link" },
    ],
  },
  {
    type: "footer",
    name: "Footer",
    category: "Footer",
    description: "Business footer with copyright, quick links, contact recap, and credit.",
    variations: [
      { id: "multi_column", label: "Multi-Column Footer", desc: "4 columns: logo/about, quick links, contact, hours" },
      { id: "minimal_center", label: "Centered Minimal", desc: "Logo, social icons, and copyright centered" },
      { id: "dark_luxury", label: "Dark Luxury Footer", desc: "Rich navy/black background with gold/accent borders" },
    ],
  },
];

export function createDefaultSection(type, variation = null, business = {}) {
  const meta = SECTION_METADATA.find((m) => m.type === type) || {
    type,
    name: type.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    variations: [{ id: "default", label: "Default" }],
  };

  const layout = variation || meta.variations[0]?.id || "default";
  const id = `sec_${type}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  const bizName = business.businessName || "Our Business";
  const city = business.city || "Junagadh";
  const category = business.category || "Business";
  const phone = business.contactDetails?.phone || "+91 98765 43210";
  const whatsapp = business.contactDetails?.whatsapp || "+91 98765 43210";
  const address = business.contactDetails?.address || `Near Main Road, ${city}, Gujarat`;

  let content = {};

  switch (type) {
    case "announcement_bar":
      content = {
        text: `✨ Special Offer: Get up to 25% OFF on all new orders this month in ${city}!`,
        buttonText: "Claim Offer",
        buttonLink: "#contact",
        badge: "Limited Time",
      };
      break;

    case "header_navigation":
      content = {
        logoText: bizName,
        logoUrl: business.logo || "",
        phone: phone,
        whatsapp: whatsapp,
        links: [
          { label: "Home", href: "#hero" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Gallery", href: "#gallery" },
          { label: "Reviews", href: "#reviews" },
          { label: "Contact", href: "#contact" },
        ],
        ctaText: "Book Appointment",
        ctaLink: "#contact",
      };
      break;

    case "hero":
      content = {
        badge: `Trusted #1 ${category} in ${city}`,
        heading: `Premium Quality ${category} Tailored For Your Needs`,
        subheading: `Welcome to ${bizName}`,
        description: `Experience exceptional quality, dedicated craftsmanship, and personalized service in ${city}. We bring you unmatched expertise backed by years of customer trust.`,
        primaryButton: { text: "Contact Us Now", link: "#contact" },
        secondaryButton: { text: "Explore Services", link: "#services" },
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        imageAlt: `${bizName} Showroom & Services`,
        stats: [
          { value: "500+", label: "Happy Clients" },
          { value: "10+", label: "Years Experience" },
          { value: "4.9/5", label: "Customer Rating" },
        ],
      };
      break;

    case "hero_bg_image":
      content = {
        badge: `Certified ${category} Specialists`,
        heading: `Crafting Excellence Every Single Day in ${city}`,
        description: `Delivering premier ${category.toLowerCase()} solutions with top-grade standards, affordable rates, and prompt client care.`,
        primaryButton: { text: "Get Instant Quote", link: "#contact" },
        secondaryButton: { text: "View Showcase", link: "#gallery" },
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        overlayOpacity: 0.65,
      };
      break;

    case "hero_bg_video":
      content = {
        badge: "Watch Our Story",
        heading: `Experience ${bizName} in Motion`,
        description: `Take an exclusive look behind the scenes at our state-of-the-art facility and dedicated team in ${city}.`,
        primaryButton: { text: "Schedule a Visit", link: "#contact" },
        videoUrl: "/service-video.html",
        posterUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      };
      break;

    case "about":
      content = {
        badge: "About Our Company",
        heading: `Building Trust & Excellence in ${city} Since ${business.businessInformation?.foundedYear || "2018"}`,
        description: `${bizName} is dedicated to providing superior ${category.toLowerCase()} services. Our mission is to combine innovation, reliability, and warm customer care to exceed expectations on every project.`,
        features: [
          "100% Genuine and Certified Quality",
          "Transparent Pricing with No Hidden Costs",
          "Dedicated After-Sales Support & Warranty",
          "Expert Team with Extensive Industry Experience",
        ],
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
        experienceYears: "10+",
        experienceText: "Years of Proven Industry Leadership",
      };
      break;

    case "services":
      content = {
        badge: "What We Offer",
        heading: `Comprehensive ${category} Solutions`,
        description: `Explore our specialized range of professional services crafted for residential, commercial, and industrial clients in ${city}.`,
        items: [
          {
            title: `Custom ${category} Solutions`,
            description: "Personalized design, consultation, and tailored execution fitting your exact requirements.",
            icon: "Sparkles",
            tag: "Popular",
            imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          },
          {
            title: "Premium Installation & Fitting",
            description: "Fast, precise, and seamless setup conducted by our skilled in-house technicians.",
            icon: "Wrench",
            tag: "Guaranteed",
            imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
          },
          {
            title: "Repair & Maintenance Services",
            description: "Timely checkups, restoration, and routine servicing to keep everything running at peak performance.",
            icon: "ShieldCheck",
            tag: "Fast Turnaround",
            imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          },
          {
            title: "Consultation & Estimates",
            description: "Free on-site inspection and transparent quotation with zero obligation.",
            icon: "PhoneCall",
            tag: "Free Quote",
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
          },
        ],
      };
      break;

    case "product_showcase":
      content = {
        badge: "Signature Collection",
        heading: "Featured Products of the Month",
        description: "Handcrafted and engineered with premium materials for maximum durability and aesthetic appeal.",
        items: [
          {
            name: `Signature Series Deluxe ${category}`,
            price: "₹ 14,999",
            originalPrice: "₹ 18,999",
            description: "Our top-rated bestseller featuring ergonomic design and luxury finish.",
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
            badge: "Best Seller",
          },
          {
            name: `Modern Executive Edition`,
            price: "₹ 24,500",
            originalPrice: "₹ 29,000",
            description: "Built for contemporary elegance and unmatched daily reliability.",
            imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
            badge: "Trending",
          },
        ],
      };
      break;

    case "product_grid":
      content = {
        badge: "Our Catalogue",
        heading: "Explore All Products & Options",
        description: "Browse our extensive selection. Click any item to directly inquire on WhatsApp.",
        items: [
          { title: "Standard Package", price: "₹ 4,999", category: "Essential", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
          { title: "Premium Plus", price: "₹ 9,999", category: "Bestseller", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
          { title: "Commercial Grade", price: "₹ 19,999", category: "Heavy Duty", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80" },
          { title: "Custom Masterpiece", price: "₹ 29,999", category: "Luxury", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80" },
        ],
      };
      break;

    case "gallery":
      content = {
        badge: "Our Showcase",
        heading: "Gallery & Recent Projects",
        description: "A glimpse of our showroom, client deliverables, and recent works in and around Gujarat.",
        images: [
          { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", caption: "Showroom Display & Premium Setup" },
          { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", caption: "High-grade Material & Finishing" },
          { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", caption: "Factory & Manufacturing Precision" },
          { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", caption: "Client Lounge & Hospitality" },
          { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", caption: "Custom Client Installation" },
          { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", caption: "Finished Project Delivery" },
        ],
      };
      break;

    case "business_highlights":
      content = {
        heading: `Why ${bizName} Stands Apart`,
        items: [
          { title: "Certified Expertise", desc: "Government and industry-certified professionals", icon: "Award" },
          { title: "Quick Delivery", desc: "Fast turnaround times without compromising on quality", icon: "Clock" },
          { title: "Transparent Pricing", desc: "No hidden charges or surprise invoices", icon: "CheckCircle" },
          { title: "24/7 Support", desc: "Prompt WhatsApp and phone support whenever needed", icon: "Headphones" },
        ],
      };
      break;

    case "why_choose_us":
      content = {
        badge: "The MK Nexus Standard",
        heading: "Why 500+ Clients Rely On Us",
        description: "We are committed to delivering lasting value, exceptional attention to detail, and a stress-free experience from start to finish.",
        reasons: [
          { title: "Uncompromising Quality", desc: "We select only top-tier raw materials and adhere to rigorous quality checks." },
          { title: "On-Time Completion", desc: "We respect your schedule and deliver promised milestones on time." },
          { title: "Local Presence in Junagadh", desc: "Visit our physical office or showroom anytime for direct assistance." },
          { title: "Dedicated After-Sales Service", desc: "Our relationship continues long after delivery with comprehensive warranties." },
        ],
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      };
      break;

    case "statistics":
      content = {
        stats: [
          { number: "1000+", label: "Projects Completed" },
          { number: "12+", label: "Years in Business" },
          { number: "99%", label: "Satisfaction Rate" },
          { number: "24h", label: "Average Response Time" },
        ],
      };
      break;

    case "testimonials":
      content = {
        badge: "Client Testimonials",
        heading: "What Our Customers Say",
        description: "Real stories and genuine feedback from clients who experienced our quality firsthand.",
        items: [
          {
            quote: "The dedication and craftsmanship provided by the team was outstanding. Delivered right on schedule and exceeded our expectations!",
            name: "Rajesh Patel",
            designation: "Homeowner, Junagadh",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          },
          {
            quote: "Very professional communication, clean finish, and the best pricing in town. Highly recommended for anyone looking for reliable service.",
            name: "Sneha Mehta",
            designation: "Business Director, Rajkot",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          },
          {
            quote: "Transparent quotes and polite staff. They handled our custom order with immense care. Will definitely collaborate again!",
            name: "Amit Varma",
            designation: "Architect, Gujarat",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
          },
        ],
      };
      break;

    case "customer_reviews":
      content = {
        badge: "Google Verified Reviews",
        overallRating: "4.9",
        totalReviews: "184",
        heading: "Rated 4.9 Stars on Google Maps",
        reviews: [
          {
            author: "Pooja Trivedi",
            rating: 5,
            date: "2 weeks ago",
            text: "Excellent service! The team visited our site, took measurements, and delivered flawlessly. Truly the top business in Junagadh.",
          },
          {
            author: "Hardik Joshi",
            rating: 5,
            date: "1 month ago",
            text: "Very reasonable rates and top class durability. Customer support on WhatsApp was instant and helpful.",
          },
          {
            author: "Nilesh Solanki",
            rating: 5,
            date: "2 months ago",
            text: "Prompt delivery and genuine material. Strongly recommend everyone in Saurashtra to consult them.",
          },
        ],
      };
      break;

    case "team_members":
      content = {
        badge: "Our Professionals",
        heading: "Meet the Dedicated Team",
        description: "Our certified technicians, designers, and managers committed to your success.",
        members: [
          { name: "Pravin Shah", role: "Founder & Master Craftsman", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
          { name: "Ketan Dave", role: "Head of Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
          { name: "Meera Raval", role: "Client Relationship Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
        ],
      };
      break;

    case "owner_profile":
      content = {
        badge: "Leadership Message",
        heading: `A Personal Note from the Founder`,
        name: business.businessInformation?.ownerName || "Pravin Shah",
        designation: `Founder & Managing Director, ${bizName}`,
        message: `When we started ${bizName}, our singular goal was to bring authentic craftsmanship, honest pricing, and genuine warmth to every single customer in ${city}. Over the years, our customers have become our biggest ambassadors. We invite you to experience our service and join our growing family.`,
        phone: phone,
        signature: "Pravin Shah",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      };
      break;

    case "special_offers":
      content = {
        badge: "Festive Promo",
        heading: "Limited-Time Special Offer",
        description: `Book your consultation this week and unlock special promotional pricing across all orders in ${city}.`,
        couponCode: "FESTIVE2026",
        discount: "FLAT 20% OFF",
        expiresIn: "Offer valid till end of the month",
        buttonText: "Redeem on WhatsApp",
        buttonLink: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(bizName)},%20I%20want%20to%20claim%20the%20FLAT%2020%25%20OFF%20offer!`,
      };
      break;

    case "pricing_plans":
      content = {
        badge: "Clear & Simple Pricing",
        heading: "Choose the Best Plan for You",
        description: "No hidden fees. Every package includes full warranty and dedicated client support.",
        plans: [
          {
            name: "Basic Plan",
            price: "₹ 5,999",
            period: "/ project",
            description: "Essential setup for residential clients and quick requirements.",
            features: ["Standard materials", "Basic on-site setup", "30-day warranty", "WhatsApp support"],
            popular: false,
          },
          {
            name: "Professional / Standard",
            price: "₹ 12,999",
            period: "/ project",
            description: "Most popular choice with premium upgrades and extended warranty.",
            features: [
              "Grade-A certified materials",
              "Custom styling & consultation",
              "1-Year full replacement warranty",
              "Priority same-day dispatch",
              "Free on-site inspection",
            ],
            popular: true,
          },
          {
            name: "Executive Luxury",
            price: "₹ 24,999",
            period: "/ project",
            description: "Complete turnkey solution with VIP concierge assistance.",
            features: [
              "Ultra-premium bespoke materials",
              "Architectural design consultation",
              "3-Year extended warranty",
              "Lifetime maintenance discounts",
              "Dedicated account manager",
            ],
            popular: false,
          },
        ],
      };
      break;

    case "faq":
      content = {
        badge: "Got Questions?",
        heading: "Frequently Asked Questions",
        description: "Here are the answers to the most common questions our clients ask us.",
        items: [
          {
            question: `How do I book a consultation with ${bizName}?`,
            answer: `You can easily book by clicking our WhatsApp CTA, filling out our contact form, or calling us directly at ${phone}. We respond within minutes!`,
          },
          {
            question: `Do you provide services outside ${city}?`,
            answer: `Yes! While our primary showroom and workshop is located in ${city}, we regularly serve clients across Rajkot, Ahmedabad, Surat, and throughout Gujarat.`,
          },
          {
            question: "What is your typical project delivery timeframe?",
            answer: "Most standard orders are completed and delivered within 3 to 7 working days. Custom turnkey projects are delivered according to a clear milestone schedule agreed upon beforehand.",
          },
          {
            question: "Do you offer warranty or guarantee on products and services?",
            answer: "Yes, every product and service comes with our verified written guarantee and free after-sales maintenance support.",
          },
        ],
      };
      break;

    case "contact_info":
      content = {
        badge: "Reach Out",
        heading: "Visit Our Showroom or Call Us",
        description: "We are always ready to assist you. Drop by our location or send us a message.",
        phone: phone,
        whatsapp: whatsapp,
        email: business.contactDetails?.email || `info@${business.slug || "business"}.com`,
        address: address,
        openingHours: business.contactDetails?.openingHours || "Monday - Saturday: 9:00 AM - 8:30 PM",
      };
      break;

    case "contact_form":
      content = {
        badge: "Get in Touch",
        heading: "Send Us an Inquiry",
        description: "Fill out the quick form below and our team will get back to you within 2 business hours.",
        submitText: "Send Message Now",
        successMessage: "Thank you! Your message has been received. We will contact you shortly.",
        formFields: [
          { name: "fullName", label: "Your Full Name", placeholder: "e.g. Ramesh Patel", type: "text", required: true },
          { name: "phone", label: "Phone Number", placeholder: "e.g. +91 98765 43210", type: "tel", required: true },
          { name: "service", label: "Service / Product of Interest", placeholder: "Select service", type: "text", required: false },
          { name: "message", label: "Your Requirements or Message", placeholder: "Describe your project or questions...", type: "textarea", required: false },
        ],
      };
      break;

    case "whatsapp_cta":
      content = {
        heading: "Need Immediate Assistance? Chat With Us on WhatsApp!",
        description: "Skip the waiting queue. Chat directly with our manager on WhatsApp for fast answers, live photos, and instant price estimates.",
        buttonText: "Chat on WhatsApp Now",
        whatsappNumber: whatsapp,
        messagePrompt: `Hi ${bizName}, I saw your website and would like to know more about your services.`,
      };
      break;

    case "google_maps":
      content = {
        badge: "Our Location",
        heading: `Find Us in ${city}`,
        address: address,
        mapEmbedUrl: business.contactDetails?.googleMapsUrl || `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`,
        directionsText: "Get Driving Directions",
      };
      break;

    case "social_media":
      content = {
        badge: "Stay Connected",
        heading: "Follow Our Journey Online",
        description: "Join our social channels for daily project updates, customer reviews, and exclusive discount announcements.",
        links: [
          { platform: "Instagram", url: "https://instagram.com", handle: `@${business.slug || "business"}` },
          { platform: "Facebook", url: "https://facebook.com", handle: `${bizName}` },
          { platform: "Google Profile", url: "https://google.com", handle: "5.0 Rating on Google" },
          { platform: "YouTube", url: "https://youtube.com", handle: "Watch Video Showcases" },
        ],
      };
      break;

    case "footer":
      content = {
        logoText: bizName,
        tagline: `${bizName} – Premium ${category} in ${city}, Gujarat.`,
        copyright: `© ${new Date().getFullYear()} ${bizName}. All rights reserved.`,
        phone: phone,
        whatsapp: whatsapp,
        address: address,
        links: [
          { label: "Home", href: "#hero" },
          { label: "Services", href: "#services" },
          { label: "About Us", href: "#about" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ],
      };
      break;

    default:
      content = {
        heading: `Section: ${meta.name}`,
        description: "Custom content section",
      };
  }

  return {
    id,
    type,
    name: meta.name,
    layout,
    visible: true,
    locked: false,
    content,
    styles: {
      backgroundColor: "transparent",
      textColor: "inherit",
      paddingTop: "py-16",
      paddingBottom: "py-16",
      containerWidth: "max-w-7xl",
      alignment: "text-left",
    },
    animations: {
      type: "fade-up",
      duration: 0.8,
      delay: 0,
      stagger: 0.15,
      easing: "power2.out",
      trigger: "scroll",
      scrollStart: "top 85%",
      once: true,
      disableOnMobile: false,
      applyToChildren: true,
    },
    elements: {},
  };
}

export function generateStarterSections(business = {}) {
  // A complete set of default sections for a high-converting business page
  const sequence = [
    { type: "announcement_bar", layout: "centered" },
    { type: "header_navigation", layout: "clean" },
    { type: "hero", layout: "split" },
    { type: "business_highlights", layout: "pill_strip" },
    { type: "about", layout: "classic_split" },
    { type: "services", layout: "icon_cards" },
    { type: "why_choose_us", layout: "checklist_split" },
    { type: "statistics", layout: "counter_strip" },
    { type: "gallery", layout: "uniform_grid" },
    { type: "special_offers", layout: "coupon_card" },
    { type: "testimonials", layout: "grid_cards" },
    { type: "customer_reviews", layout: "google_style" },
    { type: "owner_profile", layout: "executive_card" },
    { type: "faq", layout: "accordion_classic" },
    { type: "contact_info", layout: "card_grid" },
    { type: "contact_form", layout: "modern_card" },
    { type: "whatsapp_cta", layout: "banner_strip" },
    { type: "google_maps", layout: "fullwidth_map" },
    { type: "footer", layout: "multi_column" },
  ];

  return sequence.map(({ type, layout }) => createDefaultSection(type, layout, business));
}

