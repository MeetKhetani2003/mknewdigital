// Curated high-resolution image bank for all 15 industry presets
// Provides rich, modern, category-matched photography for heroes, services, galleries, teams, and products.

export const INDUSTRY_IMAGE_BANK = {
  "modern-saas": {
    hero: "/images/generated/saas-dashboard.jpg",
    heroFallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Neural Analytics Engine", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
      { title: "Real-time Event Streaming", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" },
      { title: "Enterprise Zero-Trust Auth", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" },
      { title: "Automated Workflow Engine", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Nexus AI Enterprise Suite", price: "₹ 19,999 / mo", image: "/images/generated/saas-dashboard.jpg" },
      { name: "DevOps Cloud Gateway", price: "₹ 8,499 / mo", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "/images/generated/saas-dashboard.jpg", caption: "Interactive Live Analytics UI" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", caption: "Revenue Forecast Graphs" },
      { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", caption: "Cloud Microservices Health" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", caption: "Product Engineering Team" },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", caption: "Conversion Funnel Metrics" },
      { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", caption: "Data Pipeline Architecture" },
    ],
    owner: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Aarav Sharma", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
      { name: "Rhea Sen", role: "VP of Product & AI", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
      { name: "Vikram Malhotra", role: "Head of Infrastructure", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "fine-dining": {
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Dal Saffron Bukhara", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80" },
      { title: "Smoked Paneer Angara", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80" },
      { title: "Nawabi Subz Dum Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80" },
      { title: "Artisan Shahi Tukda", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Maharaja Royal Thali Experience", price: "₹ 1,450", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" },
      { name: "Charcoal Tandoori Kebab Platter", price: "₹ 1,150", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", caption: "Grand Candlelit Dining Hall" },
      { url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80", caption: "Slow-simmered Awadhi Gravies" },
      { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", caption: "Private Dining Suite" },
      { url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80", caption: "Live Charcoal Tandoor Skewers" },
      { url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80", caption: "Aged Basmati Saffron Biryani" },
      { url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", caption: "Pistachio Rabri & Shahi Brioche" },
    ],
    owner: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Ranveer Singhania", role: "Executive Master Chef", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80" },
      { name: "Devansh Rawal", role: "Head of Tandoor & Grills", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80" },
      { name: "Meenakshi Dave", role: "Sommelier & Guest Concierge", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "luxury-furniture": {
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Bespoke Teak Living Sets", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" },
      { title: "Modular Architectural Kitchens", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
      { title: "Ergonomic Master Bedrooms", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80" },
      { title: "Natural Oak Dining Tables", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Scandinavian Walnut Dining Suite", price: "₹ 68,000", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80" },
      { name: "Presidential Leather Armchair", price: "₹ 34,500", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", caption: "Bespoke Minimal Living Room" },
      { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", caption: "Emerald Velvet Sofa Suite" },
      { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", caption: "Italian Modular Kitchen Studio" },
      { url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", caption: "Solid Hardwood Joinery" },
      { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", caption: "Master Bed & Floating Nightstands" },
      { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", caption: "Hand-stitched Leather Lounger" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Hitesh Patel", role: "Master Craftsman & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
      { name: "Priya Varma", role: "Principal Interior Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "healthcare-clinic": {
    hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Cardiology & Heart Care", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80" },
      { title: "Advanced Orthopedics", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80" },
      { title: "Pediatric Wellness Center", image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80" },
      { title: "3T MRI & High-Tech Pathology", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Comprehensive Master Health Checkup", price: "₹ 4,999", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
      { name: "Cardiac Risk Assessment Package", price: "₹ 3,499", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", caption: "Patient-First Consultation Lounge" },
      { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Digital Diagnostic Station" },
      { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", caption: "Orthopedic Rehabilitation Studio" },
      { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", caption: "NABH Accredited Surgical Suite" },
    ],
    owner: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Dr. Mihir Mehta (MD)", role: "Chief Medical Officer", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. Sunita Patel (MS)", role: "Head of Orthopedics", image: "https://images.unsplash.com/photo-1594824813576-9c48b260654b?auto=format&fit=crop&w=400&q=80" },
      { name: "Dr. Rajiv Desai (DM)", role: "Senior Interventional Cardiologist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "industrial-b2b": {
    hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "High-Volume Precision CNC Machining", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
      { title: "Robotic Welding & Heavy Fabrication", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
      { title: "Automotive Forging & Heat Treatment", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80" },
      { title: "ISO 9001 Metallurgy Lab Testing", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Heavy Duty Alloy Forged Shafts", price: "Custom B2B RFQ", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
      { name: "Industrial Flange Assemblies", price: "Bulk Tier Pricing", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", caption: "50,000 Sq Ft Precision Manufacturing Plant" },
      { url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80", caption: "Multi-Axis CNC Milling Cells" },
      { url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", caption: "Automated Tooling Quality Inspection" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", caption: "Certified Structural Steel Fabrication" },
    ],
    owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Rajesh Shah", role: "Managing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
      { name: "Ketan Trivedi", role: "VP of Quality & Production", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "real-estate": {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Ultra-Luxury Waterfront Villas", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
      { title: "Sky Penthouses with Private Helipad", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" },
      { title: "Private Golf Course Mansions", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" },
      { title: "Curated High-Yield Estate Portfolios", image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "The Presidential Sky Villa", price: "₹ 6.5 Cr", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
      { name: "The Horizon Oceanfront Residence", price: "₹ 4.8 Cr", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", caption: "Architectural Villa with Infinity Pool" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", caption: "Italian Marble Living Suite" },
      { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80", caption: "Panoramic Floor-to-Ceiling Glass Deck" },
      { url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80", caption: "Master En-Suite with Sunken Spa Tub" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Sameer Singhal", role: "Principal Developer & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "fitness-gym": {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Olympic Weightlifting & Strength", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" },
      { title: "High-Intensity Functional HIIT", image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=600&q=80" },
      { title: "1-on-1 Transformation Coaching", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80" },
      { title: "Infrared Sauna & Cryo Recovery", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Annual Athlete Pro Membership", price: "₹ 18,999 / yr", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
      { name: "12-Week Met-Con Bootcamp", price: "₹ 9,500", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", caption: "State-of-the-art Heavy Iron Zone" },
      { url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80", caption: "Olympic Barbells & Bumper Plates" },
      { url: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80", caption: "High Intensity Turf Track & Sleds" },
      { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80", caption: "Recovery Zone & Contrast Therapy" },
    ],
    owner: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Vikram Rathore", role: "Head Performance Coach", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "creative-agency": {
    hero: "https://images.unsplash.com/photo-1542744094-3a31727221eb?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Global Brand Identity & Strategy", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
      { title: "Design Systems & Web Products", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80" },
      { title: "Motion Direction & 3D Visuals", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80" },
      { title: "Full-Stack Web Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "FinTech Global Brand Identity System", price: "Retainer RFQ", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { name: "Enterprise Next.js SaaS Web App", price: "Custom Scope", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", caption: "Visual Identity System for FinTech" },
      { url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80", caption: "Design System Guidelines" },
      { url: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80", caption: "Editorial Brand Packaging" },
      { url: "https://images.unsplash.com/photo-1542744094-3a31727221eb?auto=format&fit=crop&w=800&q=80", caption: "Interactive Digital Experience" },
    ],
    owner: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Ananya Sen", role: "Creative Director & Co-Founder", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "legal-advisory": {
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Corporate Mergers & Acquisitions", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
      { title: "Commercial Property Conveyancing", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" },
      { title: "Intellectual Property & Patents", image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=600&q=80" },
      { title: "Arbitration & High Court Litigation", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Annual Corporate Legal Retainer", price: "₹ 45,000 / mo", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
      { name: "Due Diligence & Compliance Audit", price: "₹ 65,000", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", caption: "Corporate Boardroom & Advisory Chambers" },
      { url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80", caption: "Law Library & Precedent Research Wing" },
      { url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80", caption: "Confidential Client Consultation Suite" },
      { url: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80", caption: "Constitutional Court Briefing Room" },
    ],
    owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Adv. Digvijay Vaghela", role: "Senior Managing Partner", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
      { name: "Adv. Shalini Parekh", role: "Partner – Corporate & IP", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "resort-hotel": {
    hero: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Presidential Private Pool Villa", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" },
      { title: "Ayurvedic Forest Spa & Wellness", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" },
      { title: "Beachfront Candlelight Dining", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
      { title: "Helicopter Transfer & Concierge", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Royal Pavilion Lagoon Suite", price: "₹ 24,000 / night", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
      { name: "Cliffside Oceanview Villa", price: "₹ 38,000 / night", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", caption: "Serene Water Pavilion & Yoga Deck" },
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80", caption: "Infinity Pool Overlooking Coastline" },
      { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", caption: "Presidential Bedroom Suite" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", caption: "Twilight Fine Dining Gazebo" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Marc Dupond", role: "General Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "spa-wellness": {
    hero: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Swedish Deep Tissue Recovery", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" },
      { title: "Himalayan Warm Stone Ritual", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80" },
      { title: "24K Gold Cellular Facial Radiance", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" },
      { title: "Herbal Eucalyptus Steam Bath", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Full-Day Empress Rejuvenation Retreat", price: "₹ 8,500", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
      { name: "Couples Harmony Aromatherapy Experience", price: "₹ 11,000", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", caption: "Aromatherapy Floral Basin & Oils" },
      { url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80", caption: "Himalayan Basalt Stone Setup" },
      { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80", caption: "Organic Botanical Treatment Studio" },
      { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", caption: "Herbal Infusion Tea Lounge" },
    ],
    owner: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Dr. Ayesha Merchant", role: "Spa & Holistic Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "education-academy": {
    hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "IIT-JEE Advanced Engineering Batch", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
      { title: "NEET Medical Speciality Coaching", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" },
      { title: "National Olympiad & NTSE Foundation", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" },
      { title: "1-on-1 Faculty Mentorship & Doubts", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "2-Year Comprehensive JEE Pinnacle Batch", price: "₹ 85,000 / yr", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" },
      { name: "NEET Rank Booster Intensive Course", price: "₹ 72,000 / yr", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", caption: "Interactive Digital Smart Amphitheater" },
      { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", caption: "Peer Study Groups & Doubt Solving Clinic" },
      { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Reference Library & Online Testing Lab" },
      { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Physics & Chemistry Hands-on Lab" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Prof. Narendra Bhatt", role: "Academic Dean (Ex-IIT)", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "auto-dealership": {
    hero: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Certified Pre-Owned Luxury Sedans", image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=600&q=80" },
      { title: "Exotic Supercars & Performance", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" },
      { title: "Ceramic Coating & Paint Protection", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80" },
      { title: "Instant Trade-In & Bespoke Financing", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Porsche 911 Carrera GTS (Certified)", price: "₹ 1.85 Cr", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80" },
      { name: "BMW M8 Competition Gran Coupe", price: "₹ 2.15 Cr", image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", caption: "Spotlight Supercar Showroom" },
      { url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80", caption: "Precision Aerodynamics & Exhaust" },
      { url: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80", caption: "Carbon Fiber Cockpit & Leather" },
      { url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80", caption: "VIP Vehicle Handover Lounge" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Kunal Singhania", role: "Managing Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "bakery-cafe": {
    hero: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Wild Fermented Country Sourdough", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
      { title: "Flaky French Butter Croissants", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
      { title: "Artisan Belgian Chocolate Babka", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80" },
      { title: "Single-Origin Pour-Over Specialty Coffee", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Rustic Artisan Sourdough Boule", price: "₹ 240", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" },
      { name: "Pistachio Custard Cruffin", price: "₹ 180", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", caption: "Fresh Hearth Baked Sourdoughs" },
      { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", caption: "Laminated Butter Pastries" },
      { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", caption: "Barista Extracting Specialty Espresso" },
      { url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80", caption: "Morning Bakery Display" },
    ],
    owner: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Chef Natasha Dumas", role: "Head Pastry Baker", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "solar-greentech": {
    hero: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Residential Rooftop Solar (3kW - 10kW)", image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=600&q=80" },
      { title: "Commercial & Industrial Solar Plants", image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80" },
      { title: "Agricultural Solar Water Pumps", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80" },
      { title: "24/7 Smart Grid Generation Monitoring", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "5kW Tier-1 Mono PERC Rooftop System", price: "₹ 1,75,000", image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80" },
      { name: "10kW Commercial Solar Installation", price: "₹ 3,45,000", image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80", caption: "High-Efficiency Rooftop Solar Array" },
      { url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80", caption: "Residential Solar Integration" },
      { url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80", caption: "Sustainable Green Energy Generation" },
      { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", caption: "Commercial Rooftop Solar Grid" },
    ],
    owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Alok Dave", role: "Chief Solar Engineer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "wedding-events": {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Royal Mandap & Thematic Floral Architecture", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" },
      { title: "Destination Wedding Logistics & Hospitality", image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80" },
      { title: "Gourmet Live Banquets & Royal Catering", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80" },
      { title: "Cinematic Pre-Wedding & 4K Videography", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Grand Palace Royal Wedding Experience", price: "₹ 14,50,000", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
      { name: "Signature Lakeside Sangeet & Reception", price: "₹ 8,75,000", image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", caption: "Grand Palace Floral Mandap" },
      { url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80", caption: "Candlelit Banquet Dining Hall" },
      { url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80", caption: "Royal Sangeet Stage & Lighting" },
      { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80", caption: "Traditional Baraat Ceremony Decor" },
    ],
    owner: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Kavita Singhania", role: "Principal Wedding Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
      { name: "Aditya Rawal", role: "Head of Hospitality & Banquets", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "luxury-jewelry": {
    hero: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "IGI Certified Solitaire Diamond Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
      { title: "Handcrafted 22K Royal Bridal Polki", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
      { title: "Certified Gold Bullion & Coins", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80" },
      { title: "Bespoke Custom Jewellery Design CAD", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "The Imperial Kundan Polki Choker", price: "₹ 4,85,000", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" },
      { name: "2.50ct VVS1 Solitaire Platinum Ring", price: "₹ 6,20,000", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80", caption: "Bridal Heritage Emerald & Diamond Choker" },
      { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80", caption: "Solitaire Platinum Engagement Masterpiece" },
      { url: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80", caption: "Traditional Gold Filigree Bangles" },
      { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", caption: "Luxury Private VIP Vault Lounge" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Prashant Zaveri", role: "Master Gemologist & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "fashion-boutique": {
    hero: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Bespoke Bridal Lehengas & Gowns", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" },
      { title: "Hand-Embroidered Zardozi & Resham Work", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80" },
      { title: "Italian Wool Custom Tuxedos & Suits", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80" },
      { title: "1-on-1 Personal Runway Styling", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Crimson Velvet Zardozi Bridal Lehenga", price: "₹ 1,45,000", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
      { name: "Handwoven Banarasi Silk Heritage Saree", price: "₹ 68,000", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80", caption: "Milan Fashion Week Editorial Runway" },
      { url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80", caption: "Hand-Stitched Gold Zardozi Detailing" },
      { url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80", caption: "Bespoke Tuxedo Tailoring Atelier" },
      { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80", caption: "Velvet Bridal Couture Preview" },
    ],
    owner: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Mira Kapoor", role: "Creative Director & Couturier", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "construction-contractor": {
    hero: "https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Commercial High-Rise Turnkey EPC", image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=600&q=80" },
      { title: "Industrial PEB Sheds & Heavy Warehouses", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80" },
      { title: "Highways, Bridges & Civil Infrastructure", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
      { title: "Structural Seismic & Soil Testing Lab", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "25-Storey Commercial Business Hub", price: "EPC Turnkey Contract", image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=800&q=80" },
      { name: "100,000 Sq Ft Logistics Park Shed", price: "Turnkey PEB Contract", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1541888946425-d0fbb1861571?auto=format&fit=crop&w=800&q=80", caption: "Tower Crane at Sunset Construction" },
      { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80", caption: "Precision Structural Steel Fabrication" },
      { url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", caption: "Architectural Blueprint Engineering Review" },
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", caption: "Completed Glass Facade Headquarters" },
    ],
    owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Er. Bhavesh Gondaliya", role: "Chief Project Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "dental-clinic": {
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Digital Smile Design & Porcelain Veneers", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" },
      { title: "Pain-Free Laser Root Canal Therapy", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" },
      { title: "Clear Aligners & Invisible Orthodontics", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" },
      { title: "1-Hour Zoom Laser Teeth Whitening", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Complete Hollywood Smile Makeover", price: "₹ 45,000", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" },
      { name: "German Titanium Dental Implant Package", price: "₹ 28,000", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", caption: "Calm Aesthetic Dental Treatment Suite" },
      { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80", caption: "3D Intraoral Scanning Station" },
      { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80", caption: "Laser Smile Whitening In Progress" },
      { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", caption: "Sterilized European Dental Armamentarium" },
    ],
    owner: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Dr. Neil Parikh (MDS)", role: "Chief Aesthetic Prosthodontist", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "coworking-spaces": {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Flexible Dedicated Desks", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
      { title: "Private Soundproof Executive Cabins", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80" },
      { title: "4K AV Boardrooms & Conference Suites", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80" },
      { title: "High-Speed 1Gbps Redundant WiFi & Cafe", image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Dedicated Desk Nomad Pass", price: "₹ 6,500 / mo", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
      { name: "4-Person Private Team Suite", price: "₹ 26,000 / mo", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", caption: "Sunlit Open Plan Working Bay" },
      { url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80", caption: "Executive Boardroom with Smart Screen" },
      { url: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80", caption: "Artisan Coffee Bar & Networking Lounge" },
      { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", caption: "Acoustic Phone Booths for Private Calls" },
    ],
    owner: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Kabir Mathur", role: "Community Lead & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    ],
  },

  "organic-farms": {
    hero: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    about: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1000&q=80",
    services: [
      { title: "Weekly Doorstep Organic Veggie Box", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80" },
      { title: "Cold-Pressed Wood-Churned Virgin Oils", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
      { title: "Pure Raw Forest Honey & A2 Ghee", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80" },
      { title: "Weekend Agro-Tourism & Family Harvest", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80" },
    ],
    showcase: [
      { name: "Monthly Family Organic Basket Subscription", price: "₹ 3,200 / mo", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80" },
      { name: "Wood-Pressed Mustard & Groundnut Oil Combo", price: "₹ 1,150", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80" },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80", caption: "Golden Sunlit Organic Farmlands" },
      { url: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80", caption: "Fresh Heirloom Vegetable Harvest" },
      { url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80", caption: "Cold-Pressed Wood Extraction Unit" },
      { url: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80", caption: "Farm-Fresh Organic Harvest Bundles" },
    ],
    owner: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    team: [
      { name: "Suresh Patel", role: "Master Organic Cultivator", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    ],
  },
};

export function getIndustryImages(presetId) {
  return INDUSTRY_IMAGE_BANK[presetId] || INDUSTRY_IMAGE_BANK["modern-saas"];
}

