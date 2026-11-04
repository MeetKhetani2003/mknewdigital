export function generateAiBusinessContent({
  businessName = "Business",
  city = "Junagadh",
  category = "Business",
  ownerName = "Pravin Shah",
  foundedYear = "2018",
  themePreset = "modern-business",
}) {
  const cat = (category || "").toLowerCase();
  const biz = businessName || "Our Business";
  const loc = city || "Junagadh";

  let heroHeading = `Premier ${category} Solutions in ${loc}`;
  let heroSubheading = `Crafted with Excellence, Delivered with Integrity`;
  let heroDescription = `Experience unmatched quality and personalized service with ${biz}. Proudly serving clients across ${loc} and Gujarat with proven reliability.`;
  
  let aboutHeading = `Setting the Standard for ${category} in ${loc}`;
  let aboutDescription = `Founded in ${foundedYear}, ${biz} was established to bring authentic craftsmanship, transparent service, and reliable solutions to clients in ${loc}. Under the leadership of ${ownerName}, our team blends proven techniques with modern aesthetics to deliver lasting results.`;
  
  let services = [
    {
      title: `Custom ${category} Consulting & Design`,
      description: `Tailored consultations to understand your exact preferences, space requirements, and budget specifications.`,
      icon: "Sparkles",
      tag: "Popular",
    },
    {
      title: "Precision Execution & Quality Crafting",
      description: `Handcrafted and assembled with top-tier materials adhering to strict durability and safety benchmarks.`,
      icon: "ShieldCheck",
      tag: "Guaranteed",
    },
    {
      title: "Professional Installation & Delivery",
      description: `Careful transportation and seamless on-site installation managed by our experienced in-house specialists.`,
      icon: "Wrench",
      tag: "On-Time",
    },
    {
      title: "After-Sales Care & Maintenance Support",
      description: `Prompt post-delivery assistance, warranty coverage, and scheduled checkups for enduring performance.`,
      icon: "Headphones",
      tag: "Dedicated",
    },
  ];

  let faqs = [
    {
      question: `What makes ${biz} the preferred ${category} provider in ${loc}?`,
      answer: `We prioritize genuine quality materials, transparent pricing with no hidden costs, on-time project completion, and a dedicated team based right here in ${loc}.`,
    },
    {
      question: `How can I request a customized quotation for my project?`,
      answer: `You can click our direct WhatsApp button, submit the contact form with your requirements, or visit our showroom in ${loc} for a personalized quotation.`,
    },
    {
      question: `Do you undertake projects outside of ${loc}?`,
      answer: `Yes, while our headquarters is located in ${loc}, we routinely fulfill client orders across Rajkot, Ahmedabad, Surat, and surrounding regions.`,
    },
    {
      question: `What warranty or quality assurance do you provide?`,
      answer: `Every product and service we deliver is accompanied by an authentic manufacturer or service warranty and our dedicated customer support guarantee.`,
    },
  ];

  let seoTitle = `${biz} | Best ${category} in ${loc}, Gujarat | Top Rated`;
  let seoDescription = `Looking for top-rated ${category.toLowerCase()} in ${loc}? Discover ${biz} – offering premium quality, affordable pricing, transparent estimates and prompt service. Contact us today!`;

  // Industry-specific smart tweaks
  if (cat.includes("furniture") || cat.includes("interior")) {
    heroHeading = `Bespoke Luxury Furniture & Interior Craft in ${loc}`;
    heroSubheading = `Timeless Elegance Designed for Modern Living`;
    heroDescription = `From handcrafted wooden living sets to ergonomic modular kitchens and office furnishings, ${biz} transforms residential and commercial spaces into inspiring environments.`;
    seoTitle = `${biz} - Luxury Wooden Furniture & Interior Showroom in ${loc}`;
    seoDescription = `Explore high-end wooden furniture, sofa sets, modular kitchens, and bedroom wardrobes at ${biz} in ${loc}. High durability with verified warranty.`;
    services = [
      { title: "Custom Living Room Collections", description: "Bespoke solid wood sofas, center tables, and TV units crafted to match your interior theme.", icon: "Sparkles", tag: "Bestseller" },
      { title: "Ergonomic Bedroom & Wardrobes", description: "Storage-optimized sliding wardrobes, master beds, and side tables built from moisture-resistant woods.", icon: "ShieldCheck", tag: "Custom Fit" },
      { title: "Modular Kitchen & Dining Sets", description: "Modern water-resistant cabinets, marble-top dining tables, and premium soft-close hardware.", icon: "Wrench", tag: "Modern" },
      { title: "Office & Commercial Furnishing", description: "Conference tables, ergonomic task chairs, and executive reception desks built for durability.", icon: "Headphones", tag: "Turnkey" },
    ];
  } else if (cat.includes("restaurant") || cat.includes("cafe") || cat.includes("food")) {
    heroHeading = `Authentic Flavors & Memorable Dining in ${loc}`;
    heroSubheading = `Fresh Ingredients, Handcrafted Recipes, Warm Hospitality`;
    heroDescription = `Join us at ${biz} for a culinary journey featuring authentic regional delicacies, handcrafted refreshments, and a warm family-friendly ambiance.`;
    seoTitle = `${biz} - Top Rated Restaurant & Cafe in ${loc} | Fresh Dining`;
    seoDescription = `Savor authentic regional cuisine, delicious cafe beverages, and warm hospitality at ${biz} in ${loc}. Reserve a table or order for takeout today.`;
  } else if (cat.includes("health") || cat.includes("clinic") || cat.includes("hospital") || cat.includes("doctor")) {
    heroHeading = `Advanced Healthcare & Compassionate Medical Care in ${loc}`;
    heroSubheading = `Your Health, Comfort, and Wellness are Our Utmost Priority`;
    heroDescription = `Equipped with modern diagnostic technology and led by seasoned medical specialists, ${biz} offers trusted healthcare services for families across ${loc}.`;
    seoTitle = `${biz} - Leading Healthcare Clinic & Medical Center in ${loc}`;
    seoDescription = `Book a doctor consultation at ${biz} in ${loc}. Comprehensive clinical care, modern diagnostics, and compassionate patient support.`;
  } else if (cat.includes("construct") || cat.includes("builder") || cat.includes("architect")) {
    heroHeading = `Engineered for Strength: Premier Construction in ${loc}`;
    heroSubheading = `Delivering Landmark Residential & Commercial Structures`;
    heroDescription = `Backed by years of civil engineering excellence, ${biz} delivers durable, cost-effective, and aesthetically pleasing infrastructure on time, every time.`;
    seoTitle = `${biz} - Construction Contractors & Civil Engineering in ${loc}`;
    seoDescription = `Trust ${biz} for turnkey residential and commercial building construction in ${loc}. Quality materials, seismic-compliant engineering, and on-time completion.`;
  }

  return {
    heroHeading,
    heroSubheading,
    heroDescription,
    aboutHeading,
    aboutDescription,
    services,
    faqs,
    seoTitle,
    seoDescription,
  };
}

