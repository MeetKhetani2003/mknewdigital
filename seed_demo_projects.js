import {
  createBusiness,
  getBusinessBySlug,
  updateBusiness,
  saveDraftWebsite,
  publishWebsite,
} from "./src/lib/storage.js";
import { buildLayoutSections, PAGE_LAYOUT_PRESETS } from "./src/lib/page-layouts.js";
import { PREDEFINED_THEMES } from "./src/lib/themes.js";

const DEMO_PROJECTS = [
  // ==========================================
  // CATEGORY 1: DOCTORS & HEALTHCARE
  // ==========================================
  {
    presetId: "dental-clinic",
    businessName: "Dr. Neil Smile Studio & Aesthetic Dental Center",
    slug: "dr-neil-dental",
    city: "Ahmedabad",
    category: "Dental",
    status: "published",
    contactDetails: {
      phone: "+91 98251 77660",
      whatsapp: "+91 98251 77660",
      email: "care@drneildental.com",
      address: "302, Titanium City Center, 100 Ft Anandnagar Road, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      openingHours: "Mon - Sat: 9:30 AM – 8:30 PM (By Appointment)",
    },
    businessInformation: {
      about: "Dr. Neil Smile Studio is Ahmedabad's premier digital aesthetic dentistry clinic, specializing in 3D intraoral scanning, European ceramic veneers, painless single-sitting root canals, and invisible aligners. Trusted by over 12,000+ happy smiles.",
      tagline: "Painless Laser Smile Design & German Dental Implants in Ahmedabad",
      foundedYear: "2016",
      ownerName: "Dr. Neil Parikh (MDS, Aesthetic Prosthodontist)",
    },
    seo: {
      title: "Dr. Neil Smile Studio | Best Aesthetic Dentist & Implants in Ahmedabad",
      description: "Experience pain-free digital dentistry, porcelain veneers, 3D laser root canals, and German dental implants at Dr. Neil Smile Studio in Prahlad Nagar, Ahmedabad. Book appointment.",
    },
  },

  {
    presetId: "healthcare-clinic",
    businessName: "Apex Heart & Multi-Speciality Super Hospital",
    slug: "apex-heart-hospital",
    city: "Rajkot",
    category: "Healthcare",
    status: "published",
    contactDetails: {
      phone: "+91 94280 88990",
      whatsapp: "+91 94280 88990",
      email: "emergency@apexhearthospital.org",
      address: "Near Indira Circle, 150 Feet Ring Road, Rajkot, Gujarat 360005",
      openingHours: "OPD: 8:30 AM – 8:00 PM | Emergency & Trauma 24x7",
    },
    businessInformation: {
      about: "Apex Heart & Super-Speciality Hospital is Saurashtra's leading cardiac and emergency trauma center. Equipped with a digital flat-panel Cath Lab, 3T MRI, robotic joint replacement suites, and 24x7 cardiac ambulances.",
      tagline: "24/7 Advanced Cardiac Care & NABH Super-Speciality Diagnostics",
      foundedYear: "2014",
      ownerName: "Dr. Rajiv Desai (DM, Chief Interventional Cardiologist)",
    },
    seo: {
      title: "Apex Heart & Multi-Speciality Hospital in Rajkot | 24/7 Cardiac Care",
      description: "Leading super-speciality hospital in Rajkot with round-the-clock emergency cardiac Cath Lab, joint replacement, 3T MRI, and master health checkup packages.",
    },
  },

  // ==========================================
  // CATEGORY 2: INDUSTRIES & MANUFACTURING
  // ==========================================
  {
    presetId: "industrial-b2b",
    businessName: "Valiant Precision Gears & CNC Engineering",
    slug: "valiant-gears",
    city: "Rajkot",
    category: "Manufacturing",
    status: "published",
    contactDetails: {
      phone: "+91 98982 33445",
      whatsapp: "+91 98982 33445",
      email: "exports@valiantgears.com",
      address: "Plot 42-45, Phase II, Aji GIDC Industrial Estate, Rajkot, Gujarat 360003",
      openingHours: "Mon - Sat: 8:30 AM – 7:30 PM",
    },
    businessInformation: {
      about: "Valiant Precision Gears operates a 50,000 sq ft high-precision machining facility in Aji GIDC, Rajkot. Supplying zero-defect forged alloy gears, transmission shafts, and robotic CNC turned parts to Tier-1 automotive and heavy machinery OEMs across 14 countries.",
      tagline: "ISO 9001:2015 Certified Precision Gears & Multi-Axis CNC Components",
      foundedYear: "2008",
      ownerName: "Ketan Trivedi (Managing Director & Production Head)",
    },
    seo: {
      title: "Valiant Precision Gears & CNC Engineering Rajkot | ISO 9001 Manufacturer",
      description: "Premier B2B manufacturer and exporter of precision alloy gears, automotive forgings, and CNC machined components in Rajkot, Gujarat. Request custom RFQ.",
    },
  },

  {
    presetId: "construction-contractor",
    businessName: "Apex Infrastructure & EPC Contracting",
    slug: "apex-infra",
    city: "Vadodara",
    category: "Infrastructure",
    status: "published",
    contactDetails: {
      phone: "+91 97120 44556",
      whatsapp: "+91 97120 44556",
      email: "contracts@apexinfraprojects.in",
      address: "7th Floor, Landmark Business Heights, Alkapuri, Vadodara, Gujarat 390007",
      openingHours: "Mon - Sat: 9:00 AM – 6:30 PM",
    },
    businessInformation: {
      about: "Apex Infrastructure & EPC Contracting is a premier grade-A engineering construction firm in Vadodara with over 18 years of turnkey delivery across commercial skyscrapers, pre-engineered steel warehouses, flyovers, and industrial logistics parks.",
      tagline: "Turnkey Commercial Towers, Heavy PEB Sheds & Civil Bridges in Gujarat",
      foundedYear: "2006",
      ownerName: "Er. Bhavesh Gondaliya (Chief Project Director)",
    },
    seo: {
      title: "Apex Infrastructure & EPC Contracting Vadodara | Turnkey Civil Projects",
      description: "Leading EPC contractor in Gujarat for commercial high-rises, industrial PEB warehouses, bridges, and infrastructure development. ISO 9001 certified execution.",
    },
  },

  // ==========================================
  // CATEGORY 3: SMALL BUSINESSES & LOCAL CRAFT
  // ==========================================
  {
    presetId: "bakery-cafe",
    businessName: "Crust & Craft Artisan Sourdough Bakery",
    slug: "crust-and-craft",
    city: "Surat",
    category: "Bakery",
    status: "published",
    contactDetails: {
      phone: "+91 98790 66778",
      whatsapp: "+91 98790 66778",
      email: "orders@crustandcraft.in",
      address: "Shop 12-14, Galleria Boulevard, Vesu Main Road, Surat, Gujarat 395007",
      openingHours: "Daily: 7:30 AM – 10:30 PM (Fresh Bakes at 8 AM & 4 PM)",
    },
    businessInformation: {
      about: "Crust & Craft is Surat's artisanal wood-hearth micro-bakery. Every loaf of our wild-fermented sourdough undergoes a 36-hour slow cold fermentation using organic heritage grains, paired with flaky 81-layer French butter croissants and single-origin pour-over brews.",
      tagline: "Wild-Fermented Hearth Breads, French Croissants & Specialty Coffee in Surat",
      foundedYear: "2021",
      ownerName: "Chef Natasha Dumas (Head Pastry Baker)",
    },
    seo: {
      title: "Crust & Craft Artisan Sourdough Bakery | Best Bakery & Cafe in Surat",
      description: "Freshly baked artisan sourdough loaves, French butter croissants, pistachio cruffins, and specialty pour-over coffee on Vesu Main Road, Surat. Order online.",
    },
  },

  {
    presetId: "luxury-jewelry",
    businessName: "Zaveri Heritage Diamond & Polki Atelier",
    slug: "zaveri-jewellers",
    city: "Junagadh",
    category: "Jewellery",
    status: "published",
    contactDetails: {
      phone: "+91 94272 11223",
      whatsapp: "+91 94272 11223",
      email: "concierge@zaveriheritage.com",
      address: "Zaveri Chambers, M.G. Road, Near Clock Tower, Junagadh, Gujarat 362001",
      openingHours: "Mon - Sat: 10:00 AM – 8:30 PM (VIP Lounge by Appointment)",
    },
    businessInformation: {
      about: "Zaveri Heritage Jewellers has adorned Saurashtra's royal families and brides since 1968. Celebrated for unheated Burmese rubies, certified Zambian emeralds, and authentic antique Kundan-Polki necklaces handcrafted by generational master karigars.",
      tagline: "Four Generations of Handcrafted 22K Royal Gold & IGI Solitaires in Junagadh",
      foundedYear: "1968",
      ownerName: "Prashant Zaveri (Master Gemologist & Founder)",
    },
    seo: {
      title: "Zaveri Heritage Jewellers in Junagadh | Certified Diamonds & Bridal Polki",
      description: "Junagadh's most trusted heritage jewellery showroom for 22K hallmarked gold, bridal Polki sets, IGI certified solitaires, and private vault consultations.",
    },
  },

  {
    presetId: "organic-farms",
    businessName: "Amrutam Organic Farms & Cold-Pressed Wellness",
    slug: "amrutam-farms",
    city: "Junagadh",
    category: "Organic",
    status: "published",
    contactDetails: {
      phone: "+91 98254 99112",
      whatsapp: "+91 98254 99112",
      email: "harvest@amrutamfarms.in",
      address: "Girnar Foothills Sanctuary Road, Bhavnath Valley, Junagadh, Gujarat 362004",
      openingHours: "Farm Store: Mon - Sun: 7:00 AM – 7:00 PM | Weekend Farm Tours 9 AM",
    },
    businessInformation: {
      about: "Amrutam Organic Farms is a 40-acre certified natural farming sanctuary at the foothills of Girnar, Junagadh. Cultivating non-GMO heirloom vegetables, cold-pressed wood-churned mustard & groundnut oils, and raw forest honey using ancient Vedic Jeevamrut techniques.",
      tagline: "Certified 100% Pesticide-Free Farm Baskets & Wood-Pressed Virgin Oils",
      foundedYear: "2017",
      ownerName: "Suresh Patel (Natural Farmer & Soil Steward)",
    },
    seo: {
      title: "Amrutam Organic Farms Junagadh | 100% Certified Organic Harvest & Pure Oils",
      description: "Order fresh weekly organic vegetable baskets, wood-pressed groundnut oils, Gir cow A2 ghee, and raw Girnar forest honey directly from the farm in Junagadh.",
    },
  },

  // ==========================================
  // CATEGORY 4: SERVICE SELLERS, AGENCIES & PROFESSIONALS
  // ==========================================
  {
    presetId: "modern-saas",
    businessName: "Cognition AI Labs & Enterprise Cloud Gateway",
    slug: "cognition-ai",
    city: "Ahmedabad",
    category: "Software",
    status: "published",
    contactDetails: {
      phone: "+91 99090 11224",
      whatsapp: "+91 99090 11224",
      email: "solutions@cognitionai.tech",
      address: "Tower B, Infocity IT Park, Gandhinagar - Ahmedabad Highway, Gujarat 382007",
      openingHours: "24/7 Cloud Support & Engineering NOC",
    },
    businessInformation: {
      about: "Cognition AI Labs builds enterprise-grade data intelligence infrastructure. Processing over 2.4 billion daily events with sub-millisecond latency, automated DevOps pipelines, and compliant zero-trust authentication for high-growth tech platforms.",
      tagline: "Neural Analytics, Real-Time Event Streaming & Zero-Trust Cloud Architecture",
      foundedYear: "2022",
      ownerName: "Aarav Sharma (CTO & Chief AI Architect)",
    },
    seo: {
      title: "Cognition AI Labs | Enterprise AI Analytics & Cloud Gateway Platform",
      description: "Powering modern enterprises with real-time streaming analytics, zero-trust cloud microservices, and AI workflow automation. Deploy platform in minutes.",
    },
  },

  {
    presetId: "legal-advisory",
    businessName: "Vaghela & Partners Corporate Legal Advisory",
    slug: "vaghela-legal",
    city: "Ahmedabad",
    category: "Legal",
    status: "published",
    contactDetails: {
      phone: "+91 79400 66770",
      whatsapp: "+91 79400 66770",
      email: "briefs@vaghelachambers.com",
      address: "Chambers 801-804, Pinnacle Business Park, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      openingHours: "Mon - Sat: 9:30 AM – 7:30 PM",
    },
    businessInformation: {
      about: "Vaghela & Partners is one of Gujarat's most respected corporate legal chambers. Representing Fortune 500 multinationals, industrial conglomerates, and private equity funds across high-stakes mergers, international arbitration, and commercial real estate conveyancing.",
      tagline: "Senior Counsel for Cross-Border M&A, Commercial Real Estate & IP Litigation",
      foundedYear: "2002",
      ownerName: "Adv. Digvijay Vaghela (Senior Managing Partner)",
    },
    seo: {
      title: "Vaghela & Partners | Top Corporate Law & Advisory Firm in Ahmedabad",
      description: "Leading corporate legal chambers in Gujarat specializing in mergers & acquisitions, commercial real estate due diligence, IP patents, and high court litigation.",
    },
  },

  {
    presetId: "fitness-gym",
    businessName: "Pulse Athletics & High-Adrenaline Performance Club",
    slug: "pulse-athletics",
    city: "Surat",
    category: "Fitness",
    status: "published",
    contactDetails: {
      phone: "+91 99790 33221",
      whatsapp: "+91 99790 33221",
      email: "join@pulseathletics.club",
      address: "Pulse Sports Complex, Near VR Mall, Dumas Road, Surat, Gujarat 395007",
      openingHours: "Mon - Sat: 5:30 AM – 10:30 PM | Sunday: 7:00 AM – 6:00 PM",
    },
    businessInformation: {
      about: "Pulse Athletics is Surat's elite 15,000 sq ft human performance facility. Engineered with competition Olympic barbells, Eleiko bumper plates, high-intensity turf tracks, 12-week transformation bootcamps, and an infrared contrast recovery lounge.",
      tagline: "Olympic Heavy Iron, 60m Sprint Turf & Contrast Cold Plunge Recovery in Surat",
      foundedYear: "2020",
      ownerName: "Coach Vikram Rathore (Head Strength & Conditioning Coach)",
    },
    seo: {
      title: "Pulse Athletics | Best Gym & High-Performance Fitness Club in Surat",
      description: "Join Pulse Athletics on Dumas Road, Surat. Olympic weightlifting, functional HIIT turf, 1-on-1 transformation coaching, and contrast cryo therapy. Claim day pass.",
    },
  },

  {
    presetId: "wedding-events",
    businessName: "Shubharambh Royal Weddings & Luxury Events",
    slug: "shubharambh-weddings",
    city: "Ahmedabad",
    category: "Events",
    status: "published",
    contactDetails: {
      phone: "+91 98240 55443",
      whatsapp: "+91 98240 55443",
      email: "celebrations@shubharambhweddings.in",
      address: "The Heritage Pavilion, Ambli - Bopal Road, Ahmedabad, Gujarat 380058",
      openingHours: "Mon - Sun: 10:00 AM – 8:00 PM (By Appointment)",
    },
    businessInformation: {
      about: "Shubharambh is Western India's most celebrated luxury wedding planning firm. Having curated over 350+ grand royal celebrations across palace hotels in Udaipur, Jaipur, Goa, and Ahmedabad with breathtaking floral mandaps, celebrity artist management, and 7-star banquet hospitality.",
      tagline: "Palatial Mandap Architecture, Live Gourmet Banquets & Destination Logistics",
      foundedYear: "2012",
      ownerName: "Kavita Singhania (Principal Wedding Architect)",
    },
    seo: {
      title: "Shubharambh Royal Weddings | Luxury Wedding Planners in Ahmedabad & Udaipur",
      description: "Bespoke destination wedding planning, regal palace mandap decor, gourmet catering hospitality, and celebrity artist management in Ahmedabad, Udaipur and Goa.",
    },
  },
];

async function seedDemoProjects() {
  console.log("==============================================================");
  console.log("SEEDING 11 HIGH-CONVERTING DEMO PROJECTS ACROSS 4 CORE DOMAINS");
  console.log("==============================================================");

  const results = [];

  for (const item of DEMO_PROJECTS) {
    const { presetId, ...bData } = item;
    console.log(`\nProcessing: "${bData.businessName}" (${bData.slug})...`);
    console.log(`  - Category: ${bData.category} in ${bData.city}`);
    console.log(`  - Using Preset: ${presetId}`);

    // 1. Check if business already exists
    let business = await getBusinessBySlug(bData.slug);

    if (!business) {
      // Create new business record
      business = await createBusiness({
        ...bData,
        theme: PREDEFINED_THEMES[bData.category.toLowerCase()] || PREDEFINED_THEMES["modern-business"],
      });
      console.log(`  ✓ Created business record with ID: ${business.id}`);
    } else {
      // Update existing record
      await updateBusiness(business.id, {
        ...bData,
        status: "published",
      });
      console.log(`  ✓ Updated existing business record (ID: ${business.id})`);
    }

    // 2. Build full-page sections and theme using our 22-preset layout engine
    const { sections, theme } = buildLayoutSections(presetId, business);
    console.log(`  ✓ Generated ${sections.length} tailored sections with industry imagery`);

    // 3. Save draft website
    await saveDraftWebsite(business.id, {
      sections,
      globalSettings: { theme },
      animationSettings: { smoothScroll: true, disableOnMobile: false },
    });
    console.log(`  ✓ Saved draft website version`);

    // 4. Publish website to make it live
    await publishWebsite(business.id);
    await updateBusiness(business.id, { status: "published" });
    console.log(`  ✓ Published website! Live at /business/${business.slug}?city=${encodeURIComponent(bData.city.toLowerCase())}&category=${encodeURIComponent(bData.category.toLowerCase())}`);

    results.push({
      name: bData.businessName,
      slug: bData.slug,
      category: bData.category,
      city: bData.city,
      preset: presetId,
      url: `/business/${bData.slug}?city=${encodeURIComponent(bData.city.toLowerCase())}&category=${encodeURIComponent(bData.category.toLowerCase())}`,
      sectionsCount: sections.length,
    });
  }

  console.log("\n==============================================================");
  console.log("ALL 11 DEMO PROJECTS SEEDED AND PUBLISHED SUCCESSFULLY!");
  console.log("==============================================================");
  console.table(results);
}

seedDemoProjects()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  });

