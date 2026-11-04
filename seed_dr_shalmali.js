import {
  createBusiness,
  getBusinessBySlug,
  updateBusiness,
  saveDraftWebsite,
  publishWebsite,
  saveDraftDigitalCard,
  publishDigitalCard,
} from "./src/lib/storage.js";
import { PREDEFINED_THEMES } from "./src/lib/themes.js";
import { CARD_THEMES, BACKGROUND_PRESETS } from "./src/lib/digital-card-defaults.js";

async function seedDrShalmali() {
  console.log("=====================================================");
  console.log("SEEDING: Dr. Shalmali Khune (Sacred Healing Path)");
  console.log("=====================================================");

  const slug = "dr-shalmali-khune";
  const businessName = "Dr. Shalmali Khune";
  const category = "Astrology & Tarot";
  const city = "Pune";

  const businessData = {
    businessName: businessName,
    slug: slug,
    city: city,
    category: category,
    status: "published",
    logo: "/images/sacred-healing/logo.jpg",
    clientPassword: "sacred2026",
    contactDetails: {
      phone: "+91 9673791575",
      whatsapp: "+91 9673791575",
      email: "sacredhealingpath11@gmail.com",
      address: "Koregaon Park / Kalyani Nagar, Pune, Maharashtra 411001",
      openingHours: "Mon - Sat: 10:00 AM - 7:00 PM (By Appointment)",
      googleMapsUrl: "https://maps.google.com/?q=Pune+Maharashtra",
    },
    socialLinks: [
      { platform: "instagram", url: "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5" },
      { platform: "facebook", url: "https://www.facebook.com/share/1M9JNPzhPz/" },
    ],
    businessInformation: {
      about:
        "As a passionate Numerologist, Tarot Reader, Life Coach, Crystal Healer, and Reiki Healer, I help individuals gain clarity, overcome challenges and make aligned life decisions. Combining ancient cosmic wisdom with intuitive guidance for holistic well-being.",
      tagline: "सेक्रेड हीलिंग पाथ • Guidance for Clarity · Healing for Balance · Alignment for a Better Life",
      foundedYear: "2018",
      ownerName: "Dr. Shalmali Khune",
      ownerBio:
        "Numerologist, Tarot Reader, Life Coach, Crystal Healer & Reiki Healer with over 7+ years of experience guiding thousands towards cosmic harmony and emotional peace.",
      ownerPhoto: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    },
    theme: PREDEFINED_THEMES["sacred-astrology"] || {
      preset: "sacred-astrology",
      primaryColor: "#E5B84C",
      secondaryColor: "#1B0B2E",
      accentColor: "#F59E0B",
      backgroundColor: "#130722",
      textColor: "#FDFCF8",
      headingFont: "Playfair Display",
      bodyFont: "Inter",
      buttonStyle: "rounded-full",
      cardStyle: "glass",
      borderRadius: "24px",
      sectionSpacing: "spacious",
      containerWidth: "1200px",
    },
    seo: {
      title: "Dr. Shalmali Khune | Sacred Healing Path - Astrology, Numerology & Tarot in Pune",
      description:
        "Guidance for Clarity, Healing for Balance, Alignment for a Better Life. Consult Dr. Shalmali Khune for professional Astrology charts, Numerology blueprint & Tarot reading in Pune.",
      keywords: "Dr Shalmali Khune, Sacred Healing Path, Astrology Pune, Numerology Pune, Tarot reader Pune",
      canonicalUrl: `https://www.mkdigitalnexus.in/business/${slug}`,
      ogImage: "/images/sacred-healing/logo.jpg",
    },
  };

  // 1. Create or Update Business
  let business = await getBusinessBySlug(slug);
  if (!business) {
    business = await createBusiness(businessData);
    console.log(`✓ Created business record with ID: ${business.id}`);
  } else {
    await updateBusiness(business.id, {
      ...businessData,
      status: "published",
    });
    console.log(`✓ Updated business record with ID: ${business.id}`);
  }

  // 2. Build Single Page Website Sections matching Image 2 perfectly!
  const sections = [
    // 1. Header Navigation
    {
      id: "sec-nav",
      type: "header_navigation",
      layout: "centered_logo",
      visible: true,
      content: {
        logoText: "Sacred Healing Path",
        tagline: "Dr. Shalmali Khune",
        links: [
          { label: "Home", href: "#hero" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Benefits", href: "#benefits" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ],
        ctaText: "Book Consultation",
        ctaHref: "#contact",
      },
      styles: {
        backgroundColor: "#130722",
        textColor: "#FDFCF8",
        accentColor: "#E5B84C",
      },
    },

    // 2. Hero Section (matching Image 2)
    {
      id: "sec-hero",
      type: "hero",
      layout: "split_card",
      visible: true,
      content: {
        badge: "ASTROLOGY • NUMEROLOGY • TAROT",
        title: "Dr. Shalmali Khune",
        subtitle: "Astrology | Numerology | Tarot",
        description: "Guidance for Clarity · Healing for Balance · Alignment for a Better Life",
        primaryButtonText: "Book a Consultation",
        primaryButtonHref: "#contact",
        secondaryButtonText: "View My Digital Card",
        secondaryButtonHref: `/business/${slug}/digitalcard`,
        heroImage: "/images/sacred-healing/logo.jpg",
        trustBadge: "Certified Spiritual Practitioner • 7+ Years Experience",
      },
      styles: {
        backgroundColor: "#170a2a",
        primaryColor: "#E5B84C",
        textColor: "#FDFCF8",
      },
    },

    // 3. About Section (matching Image 2)
    {
      id: "sec-about",
      type: "about",
      layout: "classic_split",
      visible: true,
      content: {
        badge: "About Me",
        title: "About Dr. Shalmali Khune",
        subtitle: "Practitioner of Ancient Cosmic Wisdom & Intuitive Healing",
        description:
          "As a passionate practitioner of Astrology, Numerology and Tarot, I help individuals gain clarity, overcome challenges and make aligned life decisions. My approach combines ancient wisdom with intuitive guidance for holistic growth and well-being.\n\nWhether you are seeking clarity on your career trajectory, marital harmony, or spiritual alignment, personalized consultations provide grounded answers and affirmative remedies tailored to your unique energy blueprint.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        stats: [
          { number: "7+", label: "Years Experience" },
          { number: "3,500+", label: "Consultations Delivered" },
          { number: "98%", label: "Positive Client Satisfaction" },
        ],
      },
      styles: {
        backgroundColor: "#130722",
        primaryColor: "#E5B84C",
      },
    },

    // 4. Services Section (6 Modalities Requested by Client)
    {
      id: "sec-services",
      type: "services",
      layout: "icon_cards",
      visible: true,
      content: {
        badge: "Sacred Offerings",
        title: "My Modalities & Services",
        subtitle: "Holistic Spiritual Guidance, Numerology Vibrations & Intuitive Tarot",
        services: [
          {
            id: "srv-1",
            title: "Tarot Consultation",
            description: "Intuitive Tarot spreads unlocking clear answers for love, career direction, energetic blockages, and upcoming spiritual milestones.",
            price: "Intuitive Reading",
            icon: "shield-check",
          },
          {
            id: "srv-2",
            title: "Numerological Report",
            description: "Comprehensive master birth chart calculation revealing your life path number, destiny vibration, strengths, and favorable cosmic cycles.",
            price: "Complete Report",
            icon: "award",
          },
          {
            id: "srv-3",
            title: "Mobile Numerology",
            description: "In-depth frequency vibration analysis of your mobile phone number to attract auspicious business opportunities, wealth, and peaceful relationships.",
            price: "Number Analysis",
            icon: "phone",
          },
          {
            id: "srv-4",
            title: "Name Numerology",
            description: "Harmonize your personal or business name spelling to remove negative planetary debt and resonate with success, prosperity, and recognition.",
            price: "Name Correction",
            icon: "sparkles",
          },
          {
            id: "srv-5",
            title: "Crystal & Gemstone Guidance",
            description: "Personalized gemstone and sacred crystal recommendations to cleanse chakras, heal emotional wounds, and amplify positive aura vibrations.",
            price: "Healing Prescription",
            icon: "star",
          },
          {
            id: "srv-6",
            title: "Tarot Spells & Rituals",
            description: "Sacred intention-aligned Tarot candle rituals and spiritual manifestation work to attract love, career elevation, and aura shielding.",
            price: "Sacred Ritual",
            icon: "sun",
          },
        ],
      },
      styles: {
        backgroundColor: "#170a2a",
        primaryColor: "#E5B84C",
      },
    },

    // 5. Benefits Section (How It Can Help You)
    {
      id: "sec-benefits",
      type: "business_highlights",
      layout: "pill_strip",
      visible: true,
      content: {
        badge: "Transformation",
        title: "How It Can Help You",
        subtitle: "Five Pillars of Spiritual Harmony and Inner Peace",
        highlights: [
          {
            id: "hl-1",
            title: "Clarity in Decisions",
            description: "Eliminate self-doubt with cosmic roadmap validation.",
            icon: "award",
          },
          {
            id: "hl-2",
            title: "Emotional Healing",
            description: "Release blockages and cultivate serene mental stillness.",
            icon: "heart",
          },
          {
            id: "hl-3",
            title: "Personal Growth",
            description: "Unlock your innate talents and true life purpose.",
            icon: "star",
          },
          {
            id: "hl-4",
            title: "Better Relationships",
            description: "Harmonize communication and deep emotional bonds.",
            icon: "shield-check",
          },
          {
            id: "hl-5",
            title: "Peace & Balance",
            description: "Align your body, mind, and spirit with universe energy.",
            icon: "clock",
          },
        ],
      },
      styles: {
        backgroundColor: "#130722",
        primaryColor: "#E5B84C",
      },
    },

    // 6. Testimonials Section (What Clients Say)
    {
      id: "sec-testimonials",
      type: "testimonials",
      layout: "grid_cards",
      visible: true,
      content: {
        badge: "Client Love",
        title: "What Clients Say",
        subtitle: "Real Stories of Transformation and Peace",
        testimonials: [
          {
            name: "Verified Client",
            role: "Entrepreneur, Pune",
            content:
              "Her guidance through Tarot and Numerology brought amazing clarity in my career and personal life. Highly recommended!",
            rating: 5,
          },
          {
            name: "Pooja Deshmukh",
            role: "Corporate Executive, Mumbai",
            content:
              "Dr. Shalmali’s astrology reading gave me exact clarity during a critical career transition. Her warmth and accuracy are unparalleled.",
            rating: 5,
          },
          {
            name: "Anand Kulkarni",
            role: "Architect, Pune",
            content:
              "The name spelling correction and numerology blueprint she suggested brought immense positive momentum to our business within months.",
            rating: 5,
          },
        ],
      },
      styles: {
        backgroundColor: "#170a2a",
        primaryColor: "#E5B84C",
      },
    },

    // 7. CTA Section (Begin Your Healing Journey Today)
    {
      id: "sec-cta",
      type: "whatsapp_cta",
      layout: "banner_strip",
      visible: true,
      content: {
        title: "Begin Your Healing Journey Today",
        description: "Get personalized guidance through Astrology, Numerology and Tarot.",
        buttonText: "Book a Consultation via WhatsApp",
        whatsappMessage:
          "Hello Dr. Shalmali Khune, I visited your Sacred Healing Path website and would like to book a consultation session.",
      },
      styles: {
        backgroundColor: "#130722",
        primaryColor: "#E5B84C",
      },
    },

    // 8. Contact Info & Consultation Booking Form
    {
      id: "sec-contact",
      type: "contact_form",
      layout: "split",
      visible: true,
      content: {
        badge: "Connect With Me",
        title: "Book Your Consultation",
        subtitle: "In-Person in Pune or Online Video Consultation Worldwide",
        fields: [
          { name: "name", label: "Full Name", type: "text", required: true },
          { name: "phone", label: "WhatsApp Phone", type: "tel", required: true },
          { name: "email", label: "Email Address", type: "email", required: false },
          {
            name: "service",
            label: "Choose Service",
            type: "select",
            options: [
              "Astrology Janam Kundali Reading",
              "Numerology Life Blueprint",
              "Tarot Card Guidance Session",
              "Combined Complete Consultation",
            ],
          },
          { name: "message", label: "Your Query / Date of Birth Details", type: "textarea", required: false },
        ],
        submitButtonText: "Submit Consultation Request",
        addressText: "Koregaon Park / Kalyani Nagar, Pune, Maharashtra 411001",
        phoneText: "+91 98765 43210",
        emailText: "shalmalikhune@gmail.com",
      },
      styles: {
        backgroundColor: "#170a2a",
        primaryColor: "#E5B84C",
      },
    },

    // 9. Footer Section
    {
      id: "sec-footer",
      type: "footer",
      layout: "multi_column",
      visible: true,
      content: {
        copyright: "© 2026 Dr. Shalmali Khune - Sacred Healing Path. All Rights Reserved.",
        tagline: "Guidance for Clarity · Healing for Balance · Alignment for a Better Life",
        socials: [
          { platform: "instagram", url: "https://instagram.com/sacredhealingpath" },
          { platform: "youtube", url: "https://youtube.com/@drshalmalikhune" },
          { platform: "facebook", url: "https://facebook.com/sacredhealingpath" },
        ],
      },
      styles: {
        backgroundColor: "#0d0517",
        textColor: "#94a3b8",
      },
    },
  ];

  // Save and Publish Website
  await saveDraftWebsite(business.id, {
    sections,
    globalSettings: { theme: businessData.theme },
    animationSettings: { smoothScroll: true, disableOnMobile: false },
  });
  await publishWebsite(business.id);
  console.log(`✓ Published Single-Page Website at /business/${slug}`);

  // 3. Build & Publish Digital Card (matching Image 2 & reference URL)
  const digitalCardData = {
    businessId: business.id,
    slug: slug,
    name: "Dr. Shalmali Khune",
    isDualToneTitle: true,
    titlePart1: "DR. SHALMALI",
    titlePart2: "KHUNE",
    titlePart1Color: "#FFFFFF",
    titlePart2Gradient: "from-amber-300 via-yellow-400 to-amber-500",
    badge: "NUMEROLOGY • TAROT • CRYSTAL & REIKI HEALING",
    designation: "Sacred Healing Path · Pune, Maharashtra",
    subDesignation: "Guidance for Clarity · Healing for Balance · Alignment for a Better Life",
    avatarUrl: "/images/sacred-healing/logo.jpg",
    logoUrl: "/images/sacred-healing/logo.jpg",
    theme: {
      preset: "royal-gold",
      ...BACKGROUND_PRESETS["royal-gold"],
      backgroundColor: "#110620",
      accentColor: "#E5B84C",
    },
    socialLinks: [
      {
        id: "soc-wa",
        platform: "whatsapp",
        label: "WhatsApp",
        url: "https://wa.me/919673791575?text=Hello%20Dr.%20Shalmali%20Khune,%20I%20would%20like%20to%20book%20a%20consultation.",
        gradient: "from-[#25d366] via-[#1ebd5d] to-[#128c7e]",
      },
      {
        id: "soc-call",
        platform: "phone",
        label: "Call",
        url: "tel:+919673791575",
        gradient: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]",
      },
      {
        id: "soc-ig",
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5",
        gradient: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      },
      {
        id: "soc-fb",
        platform: "facebook",
        label: "Facebook",
        url: "https://www.facebook.com/share/1M9JNPzhPz/",
        gradient: "from-[#1877f2] via-[#166fe5] to-[#0e52b5]",
      },
      {
        id: "soc-mail",
        platform: "email",
        label: "Email",
        url: "mailto:sacredhealingpath11@gmail.com",
        gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
      },
    ],
    cards: [
      {
        id: "card-website",
        title: "Official Website",
        subtitle: "mkdigitalnexus.in/business/dr-shalmali-khune",
        icon: "globe",
        actionType: "website",
        actionTarget: `/business/${slug}`,
        photoImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        theme: "golden-sand",
        ...CARD_THEMES["golden-sand"],
      },
      {
        id: "card-whatsapp",
        title: "Chat on WhatsApp",
        subtitle: "Book Astrology & Tarot Session",
        icon: "message",
        actionType: "whatsapp",
        actionTarget:
          "https://wa.me/919876543210?text=Hello%20Dr.%20Shalmali%20Khune,%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
        photoImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600&q=80",
        theme: "emerald-green",
        ...CARD_THEMES["emerald-green"],
      },
      {
        id: "card-call",
        title: "Call Directly",
        subtitle: "+91 98765 43210",
        icon: "phone",
        actionType: "call",
        actionTarget: "tel:+919876543210",
        photoImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80",
        theme: "sky-blue",
        ...CARD_THEMES["sky-blue"],
      },
      {
        id: "card-services",
        title: "Sacred Offerings",
        subtitle: "Astrology • Numerology • Tarot",
        icon: "briefcase",
        actionType: "url",
        actionTarget: `/business/${slug}#services`,
        photoImage: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=600&q=80",
        theme: "royal-blue",
        ...CARD_THEMES["royal-blue"],
      },
      {
        id: "card-owner",
        title: "Founder & Spiritual Guide",
        subtitle: "Dr. Shalmali Khune",
        scriptText: "Ancient Wisdom & Intuition",
        icon: "user",
        actionType: "whatsapp",
        actionTarget:
          "https://wa.me/919876543210?text=Hi%20Dr.%20Shalmali,%20I%20would%20like%20to%20connect%20with%20you%20directly.",
        photoImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
        theme: "lavender-purple",
        ...CARD_THEMES["lavender-purple"],
      },
    ],
    features: [
      { id: "feat-1", icon: "award", title: "Clarity in Decisions" },
      { id: "feat-2", icon: "shield-check", title: "Emotional Healing" },
      { id: "feat-3", icon: "clock", title: "Personal Growth" },
      { id: "feat-4", icon: "headphones", title: "Peace & Balance" },
    ],
    trustBadge: {
      text: "SACRED HEALING PATH • PUNE, MAHARASHTRA",
    },
    ownerDetails: {
      name: "Dr. Shalmali Khune",
      role: "Numerologist, Tarot Reader, Life Coach, Crystal & Reiki Healer",
      agency: "Sacred Healing Path",
      phone: "+91 9673791575",
      email: "sacredhealingpath11@gmail.com",
      tagline: "Guidance for Clarity · Healing for Balance · Alignment for a Better Life",
    },
    floatingAction: {
      type: "call",
      title: "Book Session",
      subtitle: "9673791575",
      phone: "+919673791575",
    },
    vCardData: {
      firstName: "Dr. Shalmali",
      lastName: "Khune",
      organization: "Sacred Healing Path",
      title: "Numerologist, Tarot Reader & Life Coach",
      phone: "+919673791575",
      email: "sacredhealingpath11@gmail.com",
      website: `https://mkdigitalnexus.in/business/${slug}`,
      address: "Pune, Maharashtra, India",
      note: "सेक्रेड हीलिंग पाथ • Guidance for Clarity, Healing for Balance, Alignment for a Better Life",
    },
  };

  await saveDraftDigitalCard(business.id, digitalCardData);
  await publishDigitalCard(business.id, digitalCardData);
  console.log(`✓ Published Digital Business Card at /business/${slug}/digitalcard`);

  // 4. Create sample initial inquiry in database
  const Inquiry = (await import("./src/models/Inquiry.js")).default;
  const existingInquiry = await Inquiry.findOne({ slug });
  if (!existingInquiry) {
    await Inquiry.create({
      businessId: business.id,
      slug: slug,
      name: "Ananya Sharma",
      phone: "+91 98220 54321",
      email: "ananya.sharma@gmail.com",
      service: "Combined Complete Consultation",
      preferredDate: "Upcoming Saturday",
      preferredTime: "11:30 AM",
      message: "Looking for guidance on career change and auspicious timing for starting a new venture.",
      source: "website",
      status: "new",
    });
    console.log("✓ Created initial consultation inquiry in Inquiries database!");
  }

  console.log("\n=====================================================");
  console.log("DR. SHALMALI KHUNE SEEDING COMPLETE!");
  console.log("  1. Website:           /business/dr-shalmali-khune");
  console.log("  2. Digital Card:      /business/dr-shalmali-khune/digitalcard");
  console.log("  3. Client Settings:   /business/dr-shalmali-khune/settings");
  console.log("     Access Key:        sacred2026");
  console.log("  4. Admin Combo Hub:   /business/admin/dr-shalmali-khune");
  console.log("=====================================================");
}

seedDrShalmali()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

