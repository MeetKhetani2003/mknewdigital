export interface Project {
  id: string;
  title: string;
  cat: string;
  sector: string;
  url: string;
  img: string;
  desc: string;
  techStack: string[];
  features: string[];
  cost: string;
  timeline: string;
  experience: string;
  longDesc: string;
  testimonial: {
    quote: string;
    clientName: string;
    clientRole: string;
    initials: string;
  };
}

export const rawProjects = [
  // =========================================================================
  // 1. INDUSTRIAL, MANUFACTURING & SOLAR (14)
  // =========================================================================
  {
    id: "daftari-industries",
    title: "Daftari Industries",
    cat: "Landing Pages",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://daftariindustries.vercel.app",
    desc: "Leading industrial enterprise landing page with products catalog and inquiry setup.",
  },
  {
    id: "rickey-exports",
    title: "Rickey Exports",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://www.rickeyexports.com",
    desc: "Global exports business portal showing manufacturing and global shipping solutions.",
  },
  {
    id: "dk-enterprise",
    title: "DK Enterprise",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://dk-enterprise.vercel.app",
    desc: "High-performance industrial machinery, precision tools, and engineering supplies directory.",
  },
  {
    id: "gravity",
    title: "Gravity",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://gravity-gamma-three.vercel.app",
    desc: "Sleek industrial products catalog with a modern interactive engineering portfolio.",
  },
  {
    id: "anvil",
    title: "Anvil Techno Forge",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://anvil-eta.vercel.app",
    desc: "Precision forging and heavy-duty industrial components manufacturer website.",
  },
  {
    id: "swastik",
    title: "Swastik",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://swastik-pi.vercel.app",
    desc: "Industrial parts manufacturer portal showcasing precision CNC machining and fabrication.",
  },
  {
    id: "ajanta-motors",
    title: "Ajanta Motors",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://ajantamotors.vercel.app",
    desc: "Automotive and industrial motor parts supplier directory with catalog search.",
  },
  {
    id: "ravi-prakash-industries",
    title: "Ravi Prakash Industries",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://raviprakashindustries.in",
    desc: "Manufacturing company site showcasing chemical, pharmaceutical, and processing equipment.",
  },
  {
    id: "radha-solar",
    title: "Radha Solar",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://radhasolar.com",
    desc: "Rooftop solar panel EPC installation, industrial solar farms, and green subsidy advisory.",
  },
  {
    id: "irrot-solar",
    title: "Irrot Solar",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://irrot-solar.vercel.app",
    desc: "Renewable energy solar solutions, commercial inverters, and sustainable power generators.",
  },
  {
    id: "ajay-bird-netting",
    title: "Ajay Bird Netting",
    cat: "Business Websites",
    sector: "Industrial, Manufacturing & Solar",
    url: "https://ajay-bird-netting.vercel.app",
    desc: "Commercial and residential bird safety netting, anti-pigeon balcony spikes, and installation.",
  },

  // =========================================================================
  // 2. HEALTHCARE & MEDICAL (10)
  // =========================================================================
  {
    id: "arshad-dr",
    title: "Arshad Dr.",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://arshad-dr.vercel.app",
    desc: "Professional doctor portfolio with direct appointment request systems and patient guidance.",
  },
  {
    id: "varun-dr",
    title: "Varun Dr.",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://varundr.vercel.app",
    desc: "Modern clinical website for patient onboarding, health checkups, and consultation details.",
  },
  {
    id: "dr-jhatka",
    title: "Dr. Jhatka",
    cat: "Web Applications",
    sector: "Healthcare & Medical",
    url: "https://www.drjhatka.com",
    desc: "Interactive medical treatment catalog and appointment booking portal with custom animations.",
  },
  {
    id: "varenyam",
    title: "Varenyam",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://varenyam.vercel.app",
    desc: "Healthcare and holistic wellness clinic portfolio highlighting personalized patient care.",
  },
  {
    id: "ravi-dr",
    title: "Ravi Dr.",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://ravi-orpin-beta.vercel.app",
    desc: "Personal medical practitioner portal for consultation booking and OPD treatment schedule.",
  },
  {
    id: "medlife",
    title: "Medlife",
    cat: "Web Applications",
    sector: "Healthcare & Medical",
    url: "https://medlife-dusky.vercel.app",
    desc: "Modern healthcare platform presentation with medical plans, diagnostics, and doctor appointments.",
  },
  {
    id: "bhuvika-medicare",
    title: "Bhuvika Medicare",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://healthcarewebsite-wine.vercel.app",
    desc: "Medicare diagnostic center, pathology laboratory tests, and health package directory.",
  },
  {
    id: "dental-aesthetics",
    title: "Dental Aesthetics",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://www.drseemadermadent.in",
    desc: "Premium dermatology and dental aesthetics clinic website with comprehensive treatment showcase.",
  },
  {
    id: "docathome",
    title: "DocAtHome",
    cat: "Web Applications",
    sector: "Healthcare & Medical",
    url: "https://docathome-psi.vercel.app",
    desc: "On-demand in-home doctor visits, doorstep nursing care, and elder medical assistance platform.",
  },
  {
    id: "zavia-healthcare",
    title: "Zavia Healthcare",
    cat: "Business Websites",
    sector: "Healthcare & Medical",
    url: "https://zavia-healthcare.vercel.app",
    desc: "Multi-specialty preventive healthcare, chronic illness management, and wellness programs.",
  },

  // =========================================================================
  // 3. E-COMMERCE & RETAIL (13)
  // =========================================================================
  {
    id: "branded-collections",
    title: "Branded Collections",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://brandedcollections.in",
    desc: "Fully functional premium fashion e-commerce storefront with online card and UPI checkout.",
  },
  {
    id: "childrens-ecommerce",
    title: "Children's E-commerce",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://ecommerce-children.vercel.app",
    desc: "Kids apparel and toy e-commerce store with fully operational shopping cart and category filters.",
  },
  {
    id: "somnathnx",
    title: "SomnathNX",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://somnathnx.com",
    desc: "Traditional ethnic wear and modern clothing store with payment gateway and pan-India shipping.",
  },
  {
    id: "saheli-shrungar",
    title: "Saheli Shrungar",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://saheli-shrungar.vercel.app",
    desc: "Premium kids fancy dress costumes, festive ethnic apparel, and event rental accessory store.",
  },
  {
    id: "furniture",
    title: "Furniture Store",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://furniture-mu-lemon.vercel.app",
    desc: "Bespoke handcrafted wooden furniture collection catalog with instant WhatsApp quotation router.",
  },
  {
    id: "cow-dung-products",
    title: "Cow Dung Products",
    cat: "Landing Pages",
    sector: "E-commerce & Retail",
    url: "https://cowdung-products.vercel.app",
    desc: "Organic eco-friendly agricultural products and bio-fertilizers catalog with custom order inquiries.",
  },
  {
    id: "fashion-kurti-saree",
    title: "Fashion / Kurti Saree",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://fashion-ecom-inquiry.vercel.app",
    desc: "B2B women ethnic wear inquiry platform showing wholesale catalogs and bulk fabric ordering.",
  },
  {
    id: "aone-furniture",
    title: "Aone Furniture",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://aonefurniture.vercel.app",
    desc: "Premium home and executive office ergonomic furniture showroom and retail inquiry store.",
  },
  {
    id: "suntesto-ecommerce",
    title: "Suntesto E-commerce",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://suntesto-ecom.vercel.app",
    desc: "Dynamic multi-product retail storefront platform with shopping cart and payment requests.",
  },
  {
    id: "meri-digital-dukan",
    title: "Meri Digital Dukan",
    cat: "Web Applications",
    sector: "E-commerce & Retail",
    url: "https://meridigitaldukan.vercel.app",
    desc: "Hyperlocal retail empowerment portal allowing small shopkeepers to take their shop digital.",
  },
  {
    id: "radha-dhoops",
    title: "Radha Dhoops",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://radhadhoops.vercel.app",
    desc: "Handcrafted natural herbal dhoop, agarbatti, and traditional pooja fragrances online shop.",
  },
  {
    id: "hb-ecommerce",
    title: "HB E-commerce",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://hbecommerce.vercel.app",
    desc: "Modern direct-to-consumer lifestyle merchandise store with responsive cart and mobile checkout.",
  },
  {
    id: "ocean-store",
    title: "Ocean Store",
    cat: "E-commerce",
    sector: "E-commerce & Retail",
    url: "https://oceanstore.vercel.app",
    desc: "Curated online general store offering daily essentials, kitchenware, and seasonal gadgets.",
  },

  // =========================================================================
  // 4. BUSINESS, CORPORATE & SERVICES (30)
  // =========================================================================
  {
    id: "mashru",
    title: "Mashru",
    cat: "Landing Pages",
    sector: "Business, Corporate & Services",
    url: "https://mashru2.vercel.app",
    desc: "Premium heritage silk-cotton Mashru fabric business landing page with artisan catalog.",
  },
  {
    id: "bansi",
    title: "Bansi",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://bansi-zp2a.vercel.app",
    desc: "Corporate business website highlighting engineering services, client credentials, and team.",
  },
  {
    id: "groovy-cafe",
    title: "Groovy Cafe",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://groovycafe.in",
    desc: "Artisan bistro and cafe website with interactive food menu, table reservation, and reviews.",
  },
  {
    id: "bsr-worldwide",
    title: "BSR Worldwide",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://www.bsrworldwide.in",
    desc: "Import-export trade consultancy corporate website highlighting trade routes and shipping.",
  },
  {
    id: "mahatvi",
    title: "Mahatvi",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://www.mahatvi.com",
    desc: "Modern corporate business website showcasing enterprise trade and technical infrastructure.",
  },
  {
    id: "palera-design",
    title: "Palera Design",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://www.paleradesign.com",
    desc: "Bespoke design studio portfolio showcasing high-end interior architecture and custom decor.",
  },
  {
    id: "food-vally",
    title: "Food Vally",
    cat: "Web Applications",
    sector: "Business, Corporate & Services",
    url: "https://foodvally-lime.vercel.app",
    desc: "Cloud kitchen food ordering platform with category navigation and order routing.",
  },
  {
    id: "sundryer",
    title: "SunDryer",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://sundryer.in",
    desc: "Commercial food-grade solar dryer systems manufacturer website with ROI calculator.",
  },
  {
    id: "maa-shiva-services",
    title: "Maa Shiva Services",
    cat: "CRM & Business Software",
    sector: "Business, Corporate & Services",
    url: "https://maashivaservices.in",
    desc: "Professional home appliance repairs and maintenance dispatch booking software.",
  },
  {
    id: "durga-transport-services",
    title: "Durga Transport Services",
    cat: "CRM & Business Software",
    sector: "Business, Corporate & Services",
    url: "https://durgatransportservices.in",
    desc: "Logistics and heavy transport fleet management system with freight quote calculator.",
  },
  {
    id: "national-transportation",
    title: "National Transportation",
    cat: "CRM & Business Software",
    sector: "Business, Corporate & Services",
    url: "https://national-transportation.vercel.app",
    desc: "Interstate freight forwarding and logistics platform with real-time consignment inquiry.",
  },
  {
    id: "sasuma-spices",
    title: "Sasuma Spices",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://www.shasumaspices.in",
    desc: "Authentic spices and seasoning manufacturer brand website with retail packet listings.",
  },
  {
    id: "actual-overseas",
    title: "Actual Overseas",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://makhana-red.vercel.app",
    desc: "Foxnut (Makhana) and premium dry fruits exporter international corporate trade portal.",
  },
  {
    id: "mahi-parlour",
    title: "Mahi Parlour",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://mahi-parlour.vercel.app",
    desc: "Beauty salon, bridal makeover packages, and aesthetic skincare treatments booking portfolio.",
  },
  {
    id: "opal",
    title: "Opal",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://opal-ivory-ten.vercel.app",
    desc: "Bespoke corporate management consulting, financial auditing, and business advisory portal.",
  },
  {
    id: "raisha-textiles",
    title: "Raisha Textiles",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://raisha-taxtiles.vercel.app",
    desc: "Textile manufacturing plant website showcasing fabric weaves, printing, and bulk yarn supplies.",
  },
  {
    id: "urban-cleaning",
    title: "Urban Cleaning",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://urbancleaning.vercel.app",
    desc: "Residential deep cleaning, corporate office sanitation, and specialized pest control services.",
  },
  {
    id: "navixa",
    title: "Navixa",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://navixa-five.vercel.app",
    desc: "Next-gen enterprise digital transformation, cloud app development, and UI/UX consultancy.",
  },
  {
    id: "dr-ashish-pathak",
    title: "Dr Ashish Pathak & Associates",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://drashishpathakandassociats.vercel.app",
    desc: "Senior legal advisory, taxation law practice, dispute resolution, and corporate compliance firm.",
  },
  {
    id: "razor-marble",
    title: "Razor Marble",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://razamarble.vercel.app",
    desc: "Italian marble slabs, polished granite countertops, and luxury quartz stone collection.",
  },
  {
    id: "the-tiger",
    title: "The Tiger",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://the-tiger.vercel.app",
    desc: "Wildlife safari tour booking, eco-resort stays, and certified forest guide expeditions.",
  },
  {
    id: "vedic",
    title: "Vedic",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://vedic.vercel.app",
    desc: "Authentic Ayurvedic healthcare portal, classical herbal formulations, and lifestyle wellness.",
  },
  {
    id: "agrwal",
    title: "Agrwal",
    cat: "Business Websites",
    sector: "Business, Corporate & Services",
    url: "https://agrwal.vercel.app",
    desc: "Agricultural grain wholesale trader, pulses milling, and supply-chain distribution broker.",
  },
  {
    id: "smp24",
    title: "SMP24",
    cat: "CRM & Business Software",
    sector: "Business, Corporate & Services",
    url: "https://smp24.vercel.app",
    desc: "Round-the-clock commercial security monitoring, smart CCTV installations, and manned guard dispatch.",
  },
  {
    id: "ici",
    title: "ICI",
    cat: "Other Digital Solutions",
    sector: "Business, Corporate & Services",
    url: "https://ici-sage.vercel.app",
    desc: "Industrial certification programs, mechanical testing standards, and compliance audits.",
  },
  {
    id: "donga",
    title: "Donga (Finance)",
    cat: "Other Digital Solutions",
    sector: "Business, Corporate & Services",
    url: "https://donga-ca.vercel.app",
    desc: "Chartered accountant tax filing, audit preparation, corporate book-keeping, and GST advisory.",
  },

  // =========================================================================
  // 5. EDUCATION & INSTITUTIONAL (11)
  // =========================================================================
  {
    id: "rsd-institute",
    title: "RSD Institute",
    cat: "Business Websites",
    sector: "Education & Institutional",
    url: "https://www.rsdminstitute.com",
    desc: "Higher education institute portal with admissions, academic courses, faculty, and campus gallery.",
  },
  {
    id: "mahakali-tuition",
    title: "Mahakali Tuition",
    cat: "Business Websites",
    sector: "Education & Institutional",
    url: "https://mahakali-tution.vercel.app",
    desc: "Secondary and higher secondary coaching classes website with syllabus downloads and batch timings.",
  },
  {
    id: "grow-with-amit",
    title: "Grow With Amit",
    cat: "Business Websites",
    sector: "Education & Institutional",
    url: "https://growwithamit.mkdigitalnexus.in",
    desc: "E-learning platform, skill development webinars, and digital business masterclasses.",
  },
  {
    id: "viren-surati",
    title: "Viren Surati",
    cat: "Landing Pages",
    sector: "Education & Institutional",
    url: "https://www.virensurati.in",
    desc: "Keynote motivational speaker, corporate life coach, and student career guidance mentor.",
  },
  {
    id: "dronacharya-consultancy",
    title: "Dronacharya Consultancy",
    cat: "Business Websites",
    sector: "Education & Institutional",
    url: "https://dronacharya-consultancy.vercel.app",
    desc: "Overseas university admissions, visa processing assistance, and student immigration consulting.",
  },
  {
    id: "vce-gujarat",
    title: "VCE Gujarat",
    cat: "Web Applications",
    sector: "Education & Institutional",
    url: "https://vcegujarat.in",
    desc: "Village computer entrepreneur e-governance service delivery and certificate management portal.",
  },
  {
    id: "education-board",
    title: "Education Board",
    cat: "Web Applications",
    sector: "Education & Institutional",
    url: "https://education-board-tau.vercel.app",
    desc: "Academic board notifications, examination timetable schedules, and student hall ticket updates.",
  },
  {
    id: "hppy-learning",
    title: "HPPY Learning",
    cat: "Business Websites",
    sector: "Education & Institutional",
    url: "https://hppylearning.vercel.app",
    desc: "Interactive early childhood gamified learning, phonics curriculum, and cognitive foundation.",
  },

  // =========================================================================
  // 6. AUTOMOTIVE, TRAVEL & HOSPITALITY (7)
  // =========================================================================
  {
    id: "madhav-travels",
    title: "Madhav Travels",
    cat: "Business Websites",
    sector: "Automotive, Travel & Hospitality",
    url: "https://madhavtravels.vercel.app",
    desc: "Intercity sleeper bus ticketing, Gujarat pilgrimage tours, and private tempo traveler rentals.",
  },
  {
    id: "blueray-goa",
    title: "BlueRay Goa",
    cat: "Other Digital Solutions",
    sector: "Automotive, Travel & Hospitality",
    url: "https://www.blueraygoa.com",
    desc: "Boutique luxury resort in North Goa with suite photography, beach club access, and reservations.",
  },
  {
    id: "sonar-bangla",
    title: "Sonar Bangla",
    cat: "Other Digital Solutions",
    sector: "Automotive, Travel & Hospitality",
    url: "https://hotelshonarbangla.in",
    desc: "Heritage hotel resort and authentic Bengali culinary restaurant with online room bookings.",
  },
  {
    id: "cars21",
    title: "Cars21",
    cat: "Business Websites",
    sector: "Automotive, Travel & Hospitality",
    url: "https://cars21.in",
    desc: "Pre-owned multi-brand certified cars dealership with vehicle inspection reports and auto financing.",
  },
  {
    id: "swamikrupa-car",
    title: "Swamikrupa Car",
    cat: "Business Websites",
    sector: "Automotive, Travel & Hospitality",
    url: "https://swamikrupa-car.vercel.app",
    desc: "Self-drive car rentals, wedding luxury fleet hire, and long-term corporate cab leasing in Gujarat.",
  },
  {
    id: "sk-cab",
    title: "SK Cab",
    cat: "Web Applications",
    sector: "Automotive, Travel & Hospitality",
    url: "https://skcab-rouge.vercel.app",
    desc: "Instant airport taxi dispatch, outstation one-way drops, and corporate fleet bookings.",
  },
  {
    id: "sufi-taxi-goa",
    title: "Sufi Taxi Goa",
    cat: "Web Applications",
    sector: "Automotive, Travel & Hospitality",
    url: "https://sufitaxi-goa.vercel.app",
    desc: "Goa Dabolim and Mopa airport taxi pickup, South Goa sightseeing packages, and fixed fares.",
  },

  // =========================================================================
  // 7. INTERIOR, REAL ESTATE, PHOTOGRAPHY & EVENTS (7)
  // =========================================================================
  {
    id: "new-angle-interior",
    title: "New Angle Interior",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://nwstudio-beta.vercel.app",
    desc: "Modern interior design portfolio, modular residential kitchen concepts, and office renovation.",
  },
  {
    id: "global-interior-hub",
    title: "Global Interior Hub",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://globalinteriorhub.vercel.app",
    desc: "Turnkey architectural planning, custom 3D space visualizer, and luxury residential interiors.",
  },
  {
    id: "ishanya",
    title: "Ishanya Realty",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://ishanayarealty.com",
    desc: "Premium residential apartments, commercial business hubs, and real estate developer portfolio.",
  },
  {
    id: "eternal-studio",
    title: "Eternal Studio",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://theeternalstudio.com",
    desc: "Professional commercial photography, fashion lookbooks, and high-end video production studio.",
  },
  {
    id: "wedding-shoot",
    title: "Wedding Shoot",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://weddingshoot.vercel.app",
    desc: "Destination wedding cinematography, candid couple photography, and teaser reel shoots.",
  },
  {
    id: "festiviya",
    title: "Festiviya",
    cat: "Other Digital Solutions",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://festiviya.vercel.app",
    desc: "Luxury event management, grand wedding stage decor, music concert lighting, and sound rentals.",
  },
  {
    id: "ankan",
    title: "Ankan (Creative Agency)",
    cat: "Landing Pages",
    sector: "Interior, Real Estate, Photography & Events",
    url: "https://ankan.mkdigitalnexus.in",
    desc: "Bespoke digital branding, visual identity typography, and creative advertising agency portfolio.",
  },

  // =========================================================================
  // 8. NGOS & SOCIAL INITIATIVES (7)
  // =========================================================================
  {
    id: "urvika-foundation",
    title: "Urvika Foundation",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://urvikafoundation.mkdigitalnexus.in",
    desc: "Non-profit social organization platform dedicated to healthcare, child welfare, and food aid.",
  },
  {
    id: "green-society",
    title: "Green Society",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://green-social.vercel.app",
    desc: "Environmental protection NGO running tree plantation drives and urban plastic waste reduction.",
  },
  {
    id: "up-youth-association",
    title: "UP Youth Association",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://up-youth-association.mkdigitalnexus.in",
    desc: "Community leadership association promoting youth sports, cultural festivals, and disaster aid.",
  },
  {
    id: "ngo-road-safety",
    title: "NGO Road Safety",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://ngo-roadsafety.vercel.app",
    desc: "Citizen road traffic discipline, accident prevention awareness, and emergency medical helpline.",
  },
  {
    id: "ngo-purnatva",
    title: "NGO Purnatva",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://ngopurnatva.vercel.app",
    desc: "Underprivileged girl education sponsorships, vocational tailoring centers, and women self-reliance.",
  },
  {
    id: "mahila-mandali-junagadh",
    title: "Mahila Mandali Junagadh",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://mahila-mandali-junagadh.vercel.app",
    desc: "Junagadh women cooperative society supporting local cottage industries and handicrafts.",
  },
  {
    id: "yra",
    title: "YRA",
    cat: "Other Digital Solutions",
    sector: "NGOs & Social Initiatives",
    url: "https://yra.vercel.app",
    desc: "Youth athletics coaching, state-level sports competitions, and underprivileged player scouting.",
  },

  // =========================================================================
  // 9. DIGITAL PRODUCTS & PORTALS (3)
  // =========================================================================
  {
    id: "book",
    title: "Book Platform",
    cat: "Web Applications",
    sector: "Digital Products & Portals",
    url: "https://book.mkdigitalnexus.in",
    desc: "Interactive agency digital brochure, PDF portfolio flipper, and digital client presentation app.",
  },
  {
    id: "profilecard",
    title: "ProfileCard",
    cat: "Web Applications",
    sector: "Digital Products & Portals",
    url: "https://profilecard-eight-mu.vercel.app",
    desc: "Smart NFC digital business card generator with dynamic vCard saving and social link hub.",
  },
];

function getClientDetails(title: string, cat: string) {
  const baseTitle = title
    .replace("Dr.", "")
    .replace("Dr", "")
    .replace("Tuition", "")
    .replace("Tuitions", "")
    .replace("Travels", "")
    .trim()
    .split(" ")[0] || "Client";

  let clientName = `${baseTitle} Patel`;
  let quote = `MK Digital Nexus delivered an exceptional web platform for ${title}. The speed, typography, and mobile responsiveness exceeded our expectations. Our customer inquiries increased noticeably after launch.`;

  switch (cat) {
    case "E-commerce":
      clientName = `${baseTitle} Mehta`;
      quote = `The storefront engineered for ${title} is lightning fast. Our checkout conversion improved substantially, and mobile shopping is effortless for our customers.`;
      break;
    case "Web Applications":
    case "CRM & Business Software":
      clientName = `${baseTitle} Shah`;
      quote = `The custom web software built for ${title} transformed our daily operations. Workflows that previously took hours are now automated seamlessly.`;
      break;
    case "Landing Pages":
      clientName = `${baseTitle} Joshi`;
      quote = `A high-impact landing page that clearly presents our products. The inquiry conversion rate has been outstanding since day one.`;
      break;
    default:
      clientName = `${baseTitle} Sheth`;
      break;
  }

  const cleanInitials = clientName.replace("Dr. ", "").replace("Dr ", "").trim().split(" ");
  const initials = cleanInitials.map((p) => p[0] || "").join("").toUpperCase().substring(0, 2) || "MK";

  return {
    quote,
    clientName,
    clientRole: `Founder / Director, ${title}`,
    initials,
  };
}

export const projects: Project[] = rawProjects.map((p) => {
  let techStack = ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"];
  let features = ["Responsive Mobile Layout", "SEO Schema Markup", "WhatsApp Inquiry Router", "Sub-Second Load Time"];
  let cost = "₹10,000 - ₹25,000";
  let timeline = "7 to 14 days";
  let experience = "Engineered with modern Next.js server components and optimized caching for sub-second page loads and seamless mobile usability.";
  let longDesc = `A bespoke digital solution engineered for ${p.title}. Designed around specific operational workflows, local business Schema, and conversion-focused UX principles.`;

  if (p.cat === "E-commerce") {
    techStack = ["Next.js", "Tailwind CSS", "Razorpay / UPI", "Redux Toolkit", "Edge CDN"];
    features = ["Dynamic Product Catalog", "Shopping Cart", "Online Payment Gateway", "Order Status Tracking"];
    cost = "₹18,000 - ₹35,000";
    timeline = "14 to 21 days";
  } else if (p.cat === "CRM & Business Software" || p.cat === "Web Applications") {
    techStack = ["Next.js", "Node.js", "MongoDB / PostgreSQL", "Tailwind CSS", "REST APIs"];
    features = ["Custom Workflow Dashboard", "Role-Based Staff Access", "Database Reporting", "Automated Notifications"];
    cost = "₹25,000 - ₹60,000";
    timeline = "14 to 30 days";
  }

  return {
    id: p.id,
    title: p.title,
    cat: p.cat,
    sector: p.sector,
    url: p.url,
    desc: p.desc,
    img: `/images/portfolio/${p.id}.png`,
    techStack,
    features,
    cost,
    timeline,
    experience,
    longDesc,
    testimonial: getClientDetails(p.title, p.cat),
  };
});
