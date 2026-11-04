// Digital Card Presets & Default Generator inspired by https://profilecard-eight-mu.vercel.app/

export const CARD_THEMES = {
  "golden-sand": {
    name: "Golden Sand",
    gradient: "from-[#fae8d2] via-[#f7d6b3] to-[#e7b889]",
    titleColor: "#111827",
    subtitleColor: "#4b5563",
    iconBg: "#18181b",
    iconColor: "#d4af37",
    accent: "#F59E0B",
  },
  "royal-blue": {
    name: "Royal Blue",
    gradient: "from-[#1762c2] via-[#0b4899] to-[#042858]",
    titleColor: "#ffffff",
    subtitleColor: "#bfdbfe",
    iconBg: "#1877f2",
    iconColor: "#ffffff",
    accent: "#3B82F6",
  },
  "sunset-pink": {
    name: "Sunset Pink / Insta",
    gradient: "from-[#e73362] via-[#ce2775] to-[#7f136e]",
    titleColor: "#ffffff",
    subtitleColor: "#fce7f3",
    iconBg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    iconColor: "#ffffff",
    accent: "#EC4899",
  },
  "emerald-green": {
    name: "Emerald WhatsApp",
    gradient: "from-[#0e9f5e] via-[#077a45] to-[#04522d]",
    titleColor: "#ffffff",
    subtitleColor: "#d1fae5",
    iconBg: "#25D366",
    iconColor: "#ffffff",
    accent: "#10B981",
  },
  "sky-blue": {
    name: "Sky Cyan",
    gradient: "from-[#8ed1fa] via-[#48a8e8] to-[#1c6fa6]",
    titleColor: "#0f172a",
    subtitleColor: "#1e293b",
    iconBg: "#0284c7",
    iconColor: "#ffffff",
    accent: "#0EA5E9",
  },
  "lavender-purple": {
    name: "Lavender Royal",
    gradient: "from-[#e5d4fd] via-[#cca7fa] to-[#a370e8]",
    titleColor: "#1e1b4b",
    subtitleColor: "#312e81",
    iconBg: "#3b82f6",
    iconColor: "#ffffff",
    accent: "#8B5CF6",
  },
  "obsidian-dark": {
    name: "Obsidian Slate",
    gradient: "from-[#27272a] via-[#18181b] to-[#09090b]",
    titleColor: "#ffffff",
    subtitleColor: "#a1a1aa",
    iconBg: "#3f3f46",
    iconColor: "#f4f4f5",
    accent: "#71717A",
  },
  "crimson-fire": {
    name: "Crimson Ember",
    gradient: "from-[#ef4444] via-[#b91c1c] to-[#7f1d1d]",
    titleColor: "#ffffff",
    subtitleColor: "#fecaca",
    iconBg: "#991b1b",
    iconColor: "#ffffff",
    accent: "#EF4444",
  },
};

export const BACKGROUND_PRESETS = {
  "luxury-dark": {
    name: "Luxury Dark (Default)",
    backgroundColor: "#050912",
    backgroundType: "image",
    backgroundImageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    overlayOpacity: 30,
    accentColor: "#F59E0B",
    glowColor1: "rgba(245, 158, 11, 0.15)",
    glowColor2: "rgba(59, 130, 246, 0.12)",
  },
  "royal-gold": {
    name: "Royal Awadhi Gold",
    backgroundColor: "#0a0702",
    backgroundType: "image",
    backgroundImageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    overlayOpacity: 35,
    accentColor: "#EAB308",
    glowColor1: "rgba(234, 179, 8, 0.18)",
    glowColor2: "rgba(234, 88, 12, 0.15)",
  },
  "sapphire-executive": {
    name: "Sapphire Executive Blue",
    backgroundColor: "#030b1e",
    backgroundType: "image",
    backgroundImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    overlayOpacity: 30,
    accentColor: "#38BDF8",
    glowColor1: "rgba(56, 189, 248, 0.18)",
    glowColor2: "rgba(99, 102, 241, 0.15)",
  },
  "emerald-prestige": {
    name: "Emerald Prestige & Organic",
    backgroundColor: "#02120b",
    backgroundType: "image",
    backgroundImageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    overlayOpacity: 30,
    accentColor: "#10B981",
    glowColor1: "rgba(16, 185, 129, 0.18)",
    glowColor2: "rgba(52, 211, 153, 0.15)",
  },
  "industrial-titanium": {
    name: "Industrial Titanium CNC",
    backgroundColor: "#090d16",
    backgroundType: "image",
    backgroundImageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    overlayOpacity: 35,
    accentColor: "#F97316",
    glowColor1: "rgba(249, 115, 22, 0.18)",
    glowColor2: "rgba(59, 130, 246, 0.15)",
  },
};

// Intelligently splits a business name into 2 parts for radiant dual-tone header
export function splitDualToneTitle(name = "") {
  const words = name.trim().split(/\s+/);
  if (words.length <= 1) {
    return { part1: words[0] || "BUSINESS", part2: "HUB" };
  }
  if (words.length === 2) {
    return { part1: words[0], part2: words[1] };
  }
  // If 3 or more words, take first 1-2 words as part 1, and rest as part 2
  const mid = Math.ceil(words.length / 2);
  return {
    part1: words.slice(0, mid).join(" "),
    part2: words.slice(mid).join(" "),
  };
}

// Generate high-converting tailored card configuration from business record
export function generateDefaultDigitalCard(business) {
  const name = business.businessName || "Business Card";
  const city = business.city || "Gujarat";
  const category = business.category || "Business";
  const phone = business.contactDetails?.phone || "+91 98250 12345";
  const rawDigits = phone.replace(/[^\d]/g, "") || "919825012345";
  const cleanPhone = rawDigits.startsWith("91") ? rawDigits : `91${rawDigits}`;
  const whatsapp = business.contactDetails?.whatsapp || phone;
  const rawWaDigits = whatsapp.replace(/[^\d]/g, "") || cleanPhone;
  const cleanWa = rawWaDigits.startsWith("91") ? rawWaDigits : `91${rawWaDigits}`;
  const email = business.contactDetails?.email || `contact@${business.slug}.in`;
  const address = business.contactDetails?.address || `${city}, Gujarat, India`;
  const owner = business.businessInformation?.ownerName || "Founder & Managing Director";
  const about = business.businessInformation?.about || `Premier ${category} services in ${city}.`;
  const tagline = business.businessInformation?.tagline || `Top Rated ${category} in ${city}`;

  const { part1, part2 } = splitDualToneTitle(name);

  // Category specific customizations
  const catLower = category.toLowerCase();
  let bgPreset = "luxury-dark";
  let gradient2 = "from-amber-400 via-orange-400 to-amber-500";
  let scriptNote = "Let's Connect Together";

  if (catLower.includes("restaurant") || catLower.includes("food") || catLower.includes("bakery")) {
    bgPreset = "royal-gold";
    gradient2 = "from-amber-300 via-orange-400 to-amber-500";
    scriptNote = "Crafted with Passion";
  } else if (catLower.includes("health") || catLower.includes("doctor") || catLower.includes("dental") || catLower.includes("clinic")) {
    bgPreset = "sapphire-executive";
    gradient2 = "from-sky-300 via-blue-400 to-cyan-400";
    scriptNote = "Your Health First";
  } else if (catLower.includes("organic") || catLower.includes("farm") || catLower.includes("nature")) {
    bgPreset = "emerald-prestige";
    gradient2 = "from-emerald-300 via-green-400 to-teal-400";
    scriptNote = "100% Pure & Cold-Pressed";
  } else if (catLower.includes("manufactur") || catLower.includes("infra") || catLower.includes("gear") || catLower.includes("wholesale")) {
    bgPreset = "industrial-titanium";
    gradient2 = "from-orange-400 via-amber-400 to-yellow-400";
    scriptNote = "Engineering Precision";
  } else if (catLower.includes("jewel") || catLower.includes("wed") || catLower.includes("event") || catLower.includes("luxury")) {
    bgPreset = "royal-gold";
    gradient2 = "from-amber-200 via-yellow-400 to-amber-500";
    scriptNote = "Timeless Royal Elegance";
  }

  const bgConfig = BACKGROUND_PRESETS[bgPreset] || BACKGROUND_PRESETS["luxury-dark"];

  // Pre-configured Action Cards matching reference:
  // 1. Website Pill
  // 2. WhatsApp Chat Pill
  // 3. Location / Showroom Pill
  // 4. Products & Catalog Pill
  // 5. Owner / Founder Pill
  const actionCards = [
    {
      id: "card-website",
      title: "Official Website",
      subtitle: `mkdigitalnexus.in/business/${business.slug}`,
      icon: "globe",
      actionType: "website",
      actionTarget: `/business/${business.slug}`,
      photoImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      theme: "golden-sand",
      ...CARD_THEMES["golden-sand"],
    },
    {
      id: "card-whatsapp",
      title: "Chat on WhatsApp",
      subtitle: "Instant Quick Inquiry",
      icon: "message",
      actionType: "whatsapp",
      actionTarget: `https://wa.me/${cleanWa}?text=${encodeURIComponent(`Hello ${name}, I saw your digital card and would like to inquire about your services.`)}`,
      photoImage: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=600&q=80",
      theme: "emerald-green",
      ...CARD_THEMES["emerald-green"],
    },
    {
      id: "card-location",
      title: "Visit Showroom / Office",
      subtitle: `${city}, Gujarat`,
      icon: "map-pin",
      actionType: "map",
      actionTarget: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`,
      photoImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
      theme: "sky-blue",
      ...CARD_THEMES["sky-blue"],
    },
    {
      id: "card-services",
      title: "Services & Portfolio",
      subtitle: `Explore Top ${category} Offerings`,
      icon: "briefcase",
      actionType: "url",
      actionTarget: `/business/${business.slug}#services`,
      photoImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      theme: "royal-blue",
      ...CARD_THEMES["royal-blue"],
    },
    {
      id: "card-owner",
      title: "Founder & Leadership",
      subtitle: owner,
      scriptText: scriptNote,
      icon: "user",
      actionType: "whatsapp",
      actionTarget: `https://wa.me/${cleanWa}?text=${encodeURIComponent(`Hi ${owner}, I would like to connect regarding ${name}.`)}`,
      photoImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      theme: "lavender-purple",
      ...CARD_THEMES["lavender-purple"],
    },
  ];

  const socialLinks = [
    {
      id: "soc-wa",
      platform: "whatsapp",
      label: "WhatsApp",
      url: `https://wa.me/${cleanWa}?text=${encodeURIComponent(`Hello ${name}, I am reaching out from your digital card.`)}`,
      icon: "whatsapp",
      gradient: "from-[#25d366] via-[#1ebd5d] to-[#128c7e]",
    },
    {
      id: "soc-call",
      platform: "phone",
      label: "Call",
      url: `tel:${phone}`,
      icon: "phone",
      gradient: "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]",
    },
    {
      id: "soc-email",
      platform: "email",
      label: "Email",
      url: `mailto:${email}`,
      icon: "mail",
      gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    },
    {
      id: "soc-map",
      platform: "maps",
      label: "Maps",
      url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address}`)}`,
      icon: "map-pin",
      gradient: "from-[#ef4444] via-[#dc2626] to-[#b91c1c]",
    },
  ];

  const features = [
    { id: "feat-1", icon: "shield-check", title: "Verified Business" },
    { id: "feat-2", icon: "award", title: "Top Quality" },
    { id: "feat-3", icon: "clock", title: "Prompt Service" },
    { id: "feat-4", icon: "headphones", title: "Direct Support" },
  ];

  return {
    businessId: business.id || business._id,
    slug: business.slug,
    name,
    isDualToneTitle: true,
    titlePart1: part1.toUpperCase(),
    titlePart2: part2.toUpperCase(),
    titlePart1Color: "#FFFFFF",
    titlePart2Gradient: gradient2,
    badge: `VERIFIED ${category.toUpperCase()} • ${city.toUpperCase()}`,
    designation: tagline,
    subDesignation: about.length > 75 ? `${about.substring(0, 72)}...` : about,
    avatarUrl: business.logo || "",
    logoUrl: business.logo || "",
    theme: {
      preset: bgPreset,
      ...bgConfig,
    },
    socialLinks,
    cards: actionCards,
    features,
    trustBadge: {
      text: `YOUR TRUSTED ${category.toUpperCase()} PARTNER`,
    },
    ownerDetails: {
      name: owner,
      role: "Founder & Managing Director",
      agency: name,
      phone,
      email,
      tagline: tagline,
    },
    floatingAction: {
      type: "call",
      title: "Call Now",
      subtitle: phone.replace("+91 ", ""),
      phone: phone,
    },
    vCardData: {
      firstName: name,
      lastName: `(${category})`,
      organization: name,
      title: owner,
      phone,
      email,
      website: `https://mkdigitalnexus.in/business/${business.slug}`,
      address,
      note: tagline,
    },
  };
}

