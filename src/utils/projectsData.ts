export interface Project {
  id: string;
  title: string;
  cat: string;
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

const rawProjects = [
  // INDUSTRIAL
  { id: "daftari-industries", title: "Daftari Industries", cat: "Industrial", url: "https://daftariindustries.vercel.app/", img: "/images/portfolio/daftari-industries.png", desc: "Leading industrial enterprise landing page with products catalog and inquiry setup." },
  { id: "gwgc", title: "GWGC", cat: "Industrial", url: "https://www.gwgc.ca/", img: "/images/portfolio/gwgc.png", desc: "Canadian industrial service provider website highlighting specialized industrial projects." },
  { id: "green-wave-packaging", title: "Green Wave Packaging", cat: "Industrial", url: "https://www.greenwavepackaging.ca/", img: "/images/portfolio/green-wave-packaging.png", desc: "Sustainable industrial packaging supplier with detailed products showcase." },
  { id: "rickey-exports", title: "Rickey Exports", cat: "Industrial", url: "https://www.rickeyexports.com/", img: "/images/portfolio/rickey-exports.png", desc: "Global exports business portal showing manufacturing and global shipping solutions." },
  { id: "dk-enterprise", title: "DK Enterprise", cat: "Industrial", url: "https://dk-enterprise.vercel.app/", img: "/images/portfolio/dk-enterprise.png", desc: "High-performance industrial machinery and tools directory." },
  { id: "gravity", title: "Gravity", cat: "Industrial", url: "https://gravity-gamma-three.vercel.app/", img: "/images/portfolio/gravity.png", desc: "Sleek industrial products catalog with a modern interactive portfolio." },
  { id: "anvil", title: "Anvil", cat: "Industrial", url: "https://anvil-eta.vercel.app/", img: "/images/portfolio/anvil.png", desc: "Rugged and modern industrial components showcase for heavy machinery." },
  { id: "swastik", title: "Swastik", cat: "Industrial", url: "https://swastik-pi.vercel.app/", img: "/images/portfolio/swastik.png", desc: "Industrial parts manufacturer portal showcasing precision machining." },
  { id: "ajanta-motors", title: "Ajanta Motors", cat: "Industrial", url: "https://ajantamotors.vercel.app/", img: "/images/portfolio/ajanta-motors.png", desc: "Automotive and industrial motor parts supplier directory." },
  { id: "ravi-prakash-industries", title: "Ravi Prakash Industries", cat: "Industrial", url: "https://raviprakashindustries.in/", img: "/images/portfolio/ravi-prakash-industries.png", desc: "Manufacturing company site showcasing chemical and processing equipment." },

  // HEALTHCARE
  { id: "arshad-dr", title: "Arshad Dr.", cat: "Healthcare", url: "https://arshad-dr.vercel.app/", img: "/images/portfolio/arshad-dr.png", desc: "Professional doctor portfolio with direct appointment request systems." },
  { id: "varun-dr", title: "Varun Dr.", cat: "Healthcare", url: "https://varundr.vercel.app/", img: "/images/portfolio/varun-dr.png", desc: "Modern clinical website for patient onboarding and health consultation details." },
  { id: "dr-jhatka", title: "Dr. Jhatka", cat: "Healthcare", url: "https://www.drjhatka.com/", img: "/images/portfolio/dr-jhatka.png", desc: "Doctor booking and medical treatment catalog with custom animations." },
  { id: "varenyam", title: "Varenyam", cat: "Healthcare", url: "https://varenyam.vercel.app/", img: "/images/portfolio/varenyam.png", desc: "Healthcare and wellness clinic portfolio highlighting patient care services." },
  { id: "ravi-dr", title: "Ravi", cat: "Healthcare", url: "https://ravi-orpin-beta.vercel.app/", img: "/images/portfolio/ravi-dr.png", desc: "Personal medical practitioner portal for consultation booking." },
  { id: "medlife", title: "Medlife", cat: "Healthcare", url: "https://medlife-dusky.vercel.app/", img: "/images/portfolio/medlife.png", desc: "Modern healthcare platform presentation with treatment and medical plans." },
  { id: "bhuvika-medicare", title: "Bhuvika Medicare", cat: "Healthcare", url: "https://healthcarewebsite-wine.vercel.app/", img: "/images/portfolio/bhuvika-medicare.png", desc: "Medicare services and diagnostic center listing website." },
  { id: "dental-aesthetics", title: "Dental Aesthetics", cat: "Healthcare", url: "https://www.drseemadermadent.in/", img: "/images/portfolio/dental-aesthetics.png", desc: "Premium dermatology and dental clinic website with service catalog." },

  // E-COMMERCE
  { id: "branded-collections", title: "Branded Collections", cat: "E-commerce", url: "https://brandedcollections.in/", img: "/images/portfolio/branded-collections.png", desc: "Fully functional premium fashion e-commerce storefront." },
  { id: "childrens-ecommerce", title: "Children's E-commerce", cat: "E-commerce", url: "https://ecommerce-children.vercel.app/", img: "/images/portfolio/childrens-ecommerce.png", desc: "Kids apparel e-commerce store with fully operational shopping cart." },
  { id: "somnathnx", title: "SomnathNX", cat: "E-commerce", url: "https://somnathnx.com/", img: "/images/portfolio/somnathnx.png", desc: "Traditional and modern clothing store with payment gateway integration." },
  { id: "groovy-foods", title: "Groovy Foods", cat: "E-commerce", url: "https://www.groovyfoods.in/", img: "/images/portfolio/groovy-foods.png", desc: "Inquiry-based gourmet food catalog and wholesale supplier." },
  { id: "furniture", title: "Furniture", cat: "E-commerce", url: "https://furniture-mu-lemon.vercel.app/", img: "/images/portfolio/furniture.png", desc: "Bespoke furniture collection catalog with WhatsApp inquiry option." },
  { id: "cow-dung-products", title: "Cow Dung Products", cat: "E-commerce", url: "https://cowdung-products.vercel.app/", img: "/images/portfolio/cow-dung-products.png", desc: "Organic agricultural products catalog with custom inquiry forms." },
  { id: "fashion-kurti-saree", title: "Fashion / Kurti Saree", cat: "E-commerce", url: "https://fashion-ecom-inquiry.vercel.app/", img: "/images/portfolio/fashion-kurti-saree.png", desc: "B2B clothing inquiry platform showing latest catalog." },
  { id: "aone-furniture", title: "Aone Furniture", cat: "E-commerce", url: "https://aonefurniture.vercel.app/", img: "/images/portfolio/aone-furniture.png", desc: "Premium home and office furniture showroom inquiry site." },
  { id: "suntesto-ecommerce", title: "Suntesto E-commerce", cat: "E-commerce", url: "https://suntesto-ecom.vercel.app/", img: "/images/portfolio/suntesto-ecommerce.png", desc: "Dynamic product platform under development with order requests." },

  // BUSINESS
  { id: "mashru", title: "Mashru", cat: "Business", url: "https://mashru2.vercel.app/", img: "/images/portfolio/mashru.png", desc: "Premium local textiles business landing page." },
  { id: "bansi", title: "Bansi", cat: "Business", url: "https://bansi-zp2a.vercel.app/", img: "/images/portfolio/bansi.png", desc: "Corporate business website highlighting services and client success." },
  { id: "groovy-cafe", title: "Groovy Cafe", cat: "Business", url: "https://groovycafe.in/", img: "/images/portfolio/groovy-cafe.png", desc: "Restaurant and cafe website with interactive food menu and booking." },
  { id: "bsr-worldwide", title: "BSR Worldwide", cat: "Business", url: "https://www.bsrworldwide.in/", img: "/images/portfolio/bsr-worldwide.png", desc: "Import-export consultancy website highlighting global trade lanes." },
  { id: "mahatvi", title: "Mahatvi", cat: "Business", url: "https://www.mahatvi.com/", img: "/images/portfolio/mahatvi.png", desc: "Modern business website showcasing corporate solutions." },
  { id: "palera-design", title: "Palera Design", cat: "Business", url: "https://www.paleradesign.com/", img: "/images/portfolio/palera-design.png", desc: "Bespoke design studio portfolio showcasing high-end interior architecture." },
  { id: "shynex-detailing", title: "Shynex Detailing", cat: "Business", url: "https://www.shynexdetailing.ca/", img: "/images/portfolio/shynex-detailing.png", desc: "Premium car detailing and automotive protection studio website." },
  { id: "food-vally", title: "Food Vally", cat: "Business", url: "https://foodvally-lime.vercel.app/", img: "/images/portfolio/food-vally.png", desc: "Local food ordering and kitchen services portfolio." },
  { id: "sundryer", title: "SunDryer", cat: "Business", url: "https://sundryer.in", img: "/images/portfolio/sundryer.png", desc: "Commercial solar dryer systems manufacturer website." },
  { id: "maa-shiva-services", title: "Maa Shiva Services", cat: "Business", url: "https://maashivaservices.in", img: "/images/portfolio/maa-shiva-services.png", desc: "Professional services listing and booking platform." },
  { id: "durga-transport-services", title: "Durga Transport Services", cat: "Business", url: "https://durgatransportservices.in", img: "/images/portfolio/durga-transport-services.png", desc: "Logistics and transport fleet management business site." },
  { id: "sasuma-spices", title: "Sasuma Spices", cat: "Business", url: "https://shasuma-spices.vercel.app/", img: "/images/portfolio/sasuma-spices.png", desc: "Authentic spices and seasoning manufacturer brand website." },
  { id: "actual-overseas", title: "Actual Overseas", cat: "Business", url: "https://makhana-red.vercel.app/", img: "/images/portfolio/actual-overseas.png", desc: "Makhana and dry fruits exporter global business portal." },
  { id: "madhav-travels", title: "Madhav Travels", cat: "Business", url: "https://madhavtravels.vercel.app/", img: "/images/portfolio/madhav-travels.png", desc: "Tour operator and travel agency booking website." },
  { id: "mahi-parlour", title: "Mahi Parlour", cat: "Business", url: "https://mahi-parlour.vercel.app/", img: "/images/portfolio/mahi-parlour.png", desc: "Beauty salon and bridal makeup services portfolio." },
  { id: "opal", title: "Opal", cat: "Business", url: "https://opal-ivory-ten.vercel.app/", img: "/images/portfolio/opal.png", desc: "Bespoke business consulting and advisory portal." },
  { id: "raisha-textiles", title: "Raisha Textiles", cat: "Business", url: "https://raisha-taxtiles.vercel.app/", desc: "Textile manufacturer business website displaying product line." },

  // INSTITUTIONAL
  { id: "rsd-institute", title: "RSD Institute", cat: "Institutional", url: "https://www.rsdminstitute.com/", img: "/images/portfolio/rsd-institute.png", desc: "Higher education institute portal with admissions, courses, and faculty." },
  { id: "mahakali-tuition", title: "Mahakali Tuition", cat: "Institutional", url: "https://mahakali-tution.vercel.app/", img: "/images/portfolio/mahakali-tuition.png", desc: "Coaching center website with student portals and course listings." },
  { id: "grow-with-amit", title: "Grow With Amit", cat: "Institutional", url: "https://growwithamit.mkdigitalnexus.in/", img: "/images/portfolio/grow-with-amit.png", desc: "E-learning and educational coaching consultancy." },
  { id: "viren-surati", title: "Viren Surati", cat: "Institutional", url: "https://www.virensurati.in", img: "/images/portfolio/viren-surati.png", desc: "Educational speaker and career counselor profile site." },
  { id: "dronacharya-consultancy", title: "Dronacharya Consultancy", cat: "Institutional", url: "https://dronacharya-consultancy.vercel.app/", img: "/images/portfolio/dronacharya-consultancy.png", desc: "Professional education and institutional consulting advisor." },

  // OTHER
  { id: "donga", title: "Donga", cat: "Other", url: "https://donga-ca.vercel.app/", img: "/images/portfolio/donga.png", desc: "Tax and chartered accounting consultancy website." },
  { id: "new-angle-interior", title: "New Angle Interior", cat: "Other", url: "https://nwstudio-beta.vercel.app/", img: "/images/portfolio/new-angle-interior.png", desc: "Stunning interior design portfolio with project galleries." },
  { id: "blueray-goa", title: "BlueRay Goa", cat: "Other", url: "https://blueraygoa.in", img: "/images/portfolio/blueray-goa.png", desc: "Boutique hotel in Goa with room preview and direct reservation inquiries." },
  { id: "urvika-foundation", title: "Urvika Foundation", cat: "Other", url: "https://urvikafoundation.mkdigitalnexus.in/", img: "/images/portfolio/urvika-foundation.png", desc: "Non-profit organization platform for social causes." },
  { id: "green-society", title: "Green Society", cat: "Other", url: "https://green-social.vercel.app/", img: "/images/portfolio/green-society.png", desc: "Environmental and NGO website highlighting sustainability initiatives." },
  { id: "vce-gujarat", title: "VCE Gujarat", cat: "Other", url: "https://vcegujarat.in", img: "/images/portfolio/vce-gujarat.png", desc: "Government service portal mockup for rural operators." },
  { id: "ishanya", title: "Ishanya", cat: "Other", url: "https://ishanya-pied.vercel.app/", img: "/images/portfolio/ishanya.png", desc: "Real estate builder and developers business showcase." },
  { id: "eternal-studio", title: "Eternal Studio", cat: "Other", url: "https://theeternalstudio.com", img: "/images/portfolio/eternal-studio.png", desc: "Professional photography and videography booking portfolio." },
  { id: "book", title: "Book", cat: "Other", url: "https://book.mkdigitalnexus.in/", img: "/images/portfolio/book.png", desc: "Interactive digital product brochure and agency portfolio." },
  { id: "ici", title: "ICI", cat: "Other", url: "https://ici-sage.vercel.app/", img: "/images/portfolio/ici.png", desc: "Industrial training and business services mockup." },
  { id: "national-transportation", title: "National Transportation", cat: "Other", url: "https://national-transportation.vercel.app/", img: "/images/portfolio/national-transportation.png", desc: "Freight forwarding and logistics service platform." },
  { id: "up-youth-association", title: "UP Youth Association", cat: "Other", url: "https://up-youth-association.mkdigitalnexus.in/", img: "/images/portfolio/up-youth-association.png", desc: "Community association and social club portal." },
  { id: "ankan", title: "Ankan", cat: "Other", url: "https://ankan.mkdigitalnexus.in/", img: "/images/portfolio/ankan.png", desc: "Bespoke branding and advertising agency portfolio." }
];

function getClientDetails(title: string, cat: string) {
  let clientName = "";
  let initials = "";
  let quote = "";

  const baseTitle = title
    .replace("Dr.", "")
    .replace("Dr", "")
    .replace("Tuition", "")
    .replace("Tuitions", "")
    .replace("Travels", "")
    .trim()
    .split(" ")[0];

  switch (cat) {
    case "Industrial":
      clientName = `${baseTitle} Patel` || "Rajesh Patel";
      quote = `MK Digital Nexus delivered a robust, lightning-fast catalog for ${title}. The Request for Quote feature has transformed our inquiry pipeline. Our international buyers frequently comment on how clean and responsive the site is.`;
      break;
    case "Healthcare":
      clientName = title.includes("Dr.") || title.includes("Dr") ? title : `Dr. ${baseTitle} Shah`;
      quote = `Highly professional experience. Our patient consultation booking portal at ${title} has simplified our onboarding completely. Patients can check scheduling and secure their appointments via WhatsApp in seconds.`;
      break;
    case "E-commerce":
      clientName = `${baseTitle} Mehta` || "Sanjay Mehta";
      quote = `The storefront they engineered for ${title} is incredible. Our mobile loading times dropped to under 1.5 seconds, and cart checkout conversions have doubled. Highly recommend their Next.js commerce expertise.`;
      break;
    case "Business":
      clientName = `${baseTitle} Joshi` || "Amit Joshi";
      quote = `We needed an editorial-grade showcase for ${title}, and they delivered exactly that. The animations are fluid and highlight our brand aesthetic beautifully. Excellent communication throughout the build.`;
      break;
    case "Institutional":
      clientName = `Prof. ${baseTitle} Sharma` || "Prof. R. K. Sharma";
      quote = `Our portal at ${title} has streamlined student admissions and course discovery. Providing syllabus downloads and Counselor WhatsApp links on the platform reduced our office admin calls by 30%.`;
      break;
    default:
      clientName = `${baseTitle} Sheth` || "Kiran Sheth";
      quote = `The custom web application for ${title} has greatly amplified our outreach. It is fast, works on all mobile screens, and directs inquiries cleanly to our support desk.`;
      break;
  }

  // Generate initials
  const cleanInitials = clientName.replace("Dr. ", "").replace("Prof. ", "").replace("Dr ", "").trim().split(" ");
  initials = cleanInitials.map(p => p[0] || "").join("").toUpperCase().substring(0, 2);
  if (!initials) initials = "MK";

  return {
    quote,
    clientName,
    clientRole: `${cat === "Healthcare" ? "Chief Practitioner" : cat === "Institutional" ? "Dean" : "Founder"}, ${title}`,
    initials
  };
}

export const projects: Project[] = rawProjects.map((p) => {
  let techStack: string[] = [];
  let features: string[] = [];
  let cost = "";
  let timeline = "";
  let experience = "";
  let longDesc = "";

  switch (p.cat) {
    case "Industrial":
      techStack = ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Nodemailer", "SEO Schema"];
      features = ["Interactive Product Catalog", "Request for Quote (RFQ) Form", "WhatsApp Sales Router", "Technical Spec Downloads", "High-Resolution Image Galleries"];
      cost = "₹12,000 - ₹20,000";
      timeline = "10 to 14 days";
      experience = "Engineered with ultra-fast page routing and B2B inquiry capture. We optimized heavy catalog images to achieve near-instant loads, improving average session duration by 40% and increasing client quote inquiries by 35% overall.";
      longDesc = `A bespoke corporate website built for the industrial and manufacturing sector. Designed to showcase machinery, components, or services, this project features local business Schema tags and proper heading structures to ensure high local SEO indexing.`;
      break;

    case "Healthcare":
      techStack = ["Next.js", "React Hook Form", "Tailwind CSS", "Radix UI", "Nodemailer", "Google Maps API"];
      features = ["Direct Clinic Booking", "Patient Care Catalog", "Emergency Information Section", "Doctor Availability Calendar", "Interactive Location Locator"];
      cost = "₹8,000 - ₹15,000";
      timeline = "7 to 10 days";
      experience = "Created a clean, accessible layout designed to inspire patient trust. Optimized for simple mobile navigation and fast appointment loading, yielding a direct routing of health leads to the doctor via secure email and WhatsApp.";
      longDesc = `A medical practice website tailored for local doctors, clinics, and diagnostics centers. Incorporates localized healthcare keywords, emergency-response visibility, and fully accessible WCAG-compliant design principles.`;
      break;

    case "E-commerce":
      techStack = ["Next.js", "Redux Toolkit", "Tailwind CSS", "Razorpay / Stripe", "Nodemailer", "SEO Schema"];
      features = ["Dynamic Product Filters", "Fully Functional Shopping Cart", "Razorpay Payment Gateway", "Offline WhatsApp Checkout", "Abandoned Cart Notification"];
      cost = "₹18,000 - ₹35,000";
      timeline = "14 to 21 days";
      experience = "Engineered a high-performance storefront with lightning-fast cart calculations. We reduced load-to-checkout latency to less than 1.8 seconds, achieving a 2.1x conversion lift and fully resolving cart abandonment issues.";
      longDesc = `A conversion-focused online shop optimized for desktop and mobile commerce. Implements JSON-LD product structures, optimized image formats, and structured category pages designed to rank directly in Google Shopping feeds.`;
      break;

    case "Business":
      techStack = ["Next.js", "Tailwind CSS", "GSAP Animations", "Framer Motion", "SEO Metadata Routing"];
      features = ["Dynamic Service Showcases", "Lead Capture Form", "WhatsApp Direct Integration", "Client Testimonial Sliders", "Google Business Reviews Widget"];
      cost = "₹8,000 - ₹16,000";
      timeline = "7 to 12 days";
      experience = "Designed a sleek corporate platform using lightweight animations (GSAP) to provide an engaging storytelling interface without sacrificing performance. Achieved a perfect 100/100 Mobile Lighthouse Speed score.";
      longDesc = `A premium marketing and services platform for local and global service businesses. Highly optimized for lead capture and styled with rich glassmorphism assets to establish authoritative branding online.`;
      break;

    case "Institutional":
      techStack = ["Next.js", "Tailwind CSS", "Radix UI", "Prisma ORM", "Nodemailer"];
      features = ["Academic Program Finder", "Online Admissions Form", "Downloadable Syllabus Panel", "Faculty Directory Directory", "News & Event Announcements Grid"];
      cost = "₹10,000 - ₹18,000";
      timeline = "10 to 15 days";
      experience = "Built a comprehensive portal for educational institutions and coaching centers. Provided clean administrative routes for syllabi and schedules, reducing patient and student office inquiries by 30% through self-service.";
      longDesc = `An informational portal designed for tuition academies, institutional consultancies, and private colleges. Built to index course catalogs and process online registration applications.`;
      break;

    default:
      techStack = ["Next.js", "Tailwind CSS", "Framer Motion", "Radix UI", "Nodemailer"];
      features = ["Responsive Interactive Mockups", "Social Projects Gallery", "WhatsApp Chat Routing", "Dynamic Contact Forms", "Interactive Maps Integration"];
      cost = "₹6,000 - ₹14,000";
      timeline = "7 to 12 days";
      experience = "Developed a tailored, niche web interface designed to capture booking inquiries or highlight social missions. Features search engine indexing for local hospitality and community keywords.";
      longDesc = `A bespoke showcase website created to highlight community services, hotels, or NGO goals. Tailored with search engine parameters to ensure maximum visibility for niche keywords.`;
      break;
  }

  return {
    id: p.id,
    title: p.title,
    cat: p.cat,
    url: p.url,
    desc: p.desc,
    img: `/images/portfolio/${p.id}.png`,
    techStack,
    features,
    cost,
    timeline,
    experience,
    longDesc,
    testimonial: getClientDetails(p.title, p.cat)
  };
});
