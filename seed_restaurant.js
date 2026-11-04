import { createBusiness, saveDraftWebsite, publishWebsite, getBusinessBySlug } from "./src/lib/storage.js";
import { PREDEFINED_THEMES } from "./src/lib/themes.js";

async function createRestaurantDemo() {
  console.log("Creating premium demo restaurant business: 'The Saffron Lounge & Royal Kitchen'...");

  const slug = "the-saffron-lounge";
  const existing = await getBusinessBySlug(slug);

  const restaurantTheme = {
    preset: "restaurant",
    ...PREDEFINED_THEMES["restaurant"],
    primaryColor: "#EA580C",
    secondaryColor: "#7C2D12",
    accentColor: "#FBBF24",
    backgroundColor: "#FFFBEB",
    textColor: "#451A03",
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    buttonStyle: "rounded-full",
    cardStyle: "elevated",
    borderRadius: "16px",
    sectionSpacing: "spacious",
    containerWidth: "1200px",
  };

  const businessData = {
    businessName: "The Saffron Lounge & Royal Kitchen",
    slug: slug,
    city: "Ahmedabad",
    category: "Restaurant",
    status: "published",
    contactDetails: {
      phone: "+91 98980 12345",
      whatsapp: "+91 98980 12345",
      email: "reservations@thesaffronlounge.in",
      address: "Saffron Boulevard, Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054",
      openingHours: "Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM (Daily)",
    },
    businessInformation: {
      about: "The Saffron Lounge & Royal Kitchen is Ahmedabad's premier destination for royal Awadhi and Mughlai fine dining. We honor age-old charcoal clay-oven traditions, slow dum cooking, and farm-to-table Indian spices, complemented by live acoustic sitar melodies in a regal dining atmosphere.",
      tagline: "Royal Awadhi Gastronomy & Artisanal Fine Dining in Ahmedabad",
      foundedYear: "2018",
      ownerName: "Chef Ranveer Singhania",
    },
    theme: restaurantTheme,
    seo: {
      title: "The Saffron Lounge | Best Fine Dining Restaurant in Ahmedabad",
      description: "Experience royal Awadhi gravies, slow-cooked dal bukhara, charcoal tandoor kebabs, and luxury private dining at The Saffron Lounge on Sindhu Bhavan Road, Ahmedabad. Reserve your table.",
    },
  };

  let business;
  if (existing) {
    console.log("Restaurant already exists. Updating business record...");
    business = existing;
  } else {
    business = await createBusiness(businessData);
    console.log("Created business ID:", business.id);
  }

  // Build the 20 restaurant sections
  const sections = [
    // 1. Announcement Bar
    {
      id: "sec_announcement",
      type: "announcement_bar",
      name: "Announcement Bar",
      layout: "centered",
      visible: true,
      locked: false,
      content: {
        message: "🌿 Now accepting weekend table reservations | Chef's Royal Awadhi Tasting Menu available | Call +91 98980 12345",
        buttonText: "Reserve a Table",
        buttonUrl: "#reservation",
      },
      styles: {
        backgroundColor: "#7C2D12",
        textColor: "#FEF3C7",
        paddingTop: "py-2.5",
        paddingBottom: "py-2.5",
      },
      animations: {
        type: "fade-down",
        duration: 0.6,
        delay: 0,
        trigger: "load",
      },
    },

    // 2. Header / Navigation
    {
      id: "sec_header",
      type: "header_navigation",
      name: "Header Navigation",
      layout: "clean",
      visible: true,
      locked: false,
      content: {
        logoText: "The Saffron Lounge",
        ctaText: "Book Table",
        phone: "+91 98980 12345",
        links: [
          { label: "Our Story", href: "#about" },
          { label: "Signature Menu", href: "#menu" },
          { label: "Specialties", href: "#specialties" },
          { label: "Private Dining", href: "#pricing" },
          { label: "Ambience", href: "#gallery" },
          { label: "Guest Reviews", href: "#reviews" },
          { label: "Contact", href: "#contact" },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        textColor: "#451A03",
      },
      animations: {
        type: "fade-down",
        duration: 0.7,
        delay: 0.1,
        trigger: "load",
      },
    },

    // 3. Hero Section
    {
      id: "sec_hero",
      type: "hero",
      name: "Hero Section",
      layout: "split",
      visible: true,
      locked: false,
      content: {
        badge: "⭐ MICHELIN GUIDE RECOMMENDED • AHMEDABAD",
        heading: "Where Royal Heritage Meets Artisanal Culinary Mastery",
        description: "Awaken your senses with 18-hour slow-cooked Dal Bukhara, fragrant saffron dum biryanis, and succulent charcoal tandoor kebabs prepared by royal Master Chefs on Sindhu Bhavan Road.",
        primaryBtnText: "Reserve Your Table",
        primaryBtnUrl: "#reservation",
        secondaryBtnText: "Explore Signature Menu",
        secondaryBtnUrl: "#menu",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      },
      styles: {
        backgroundColor: "#FFFBEB",
        textColor: "#451A03",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "fade-up",
        duration: 0.9,
        delay: 0.2,
        trigger: "load",
        applyToChildren: true,
      },
    },

    // 4. Business Highlights Strip
    {
      id: "sec_highlights",
      type: "business_highlights",
      name: "Culinary Highlights",
      layout: "pill_strip",
      visible: true,
      locked: false,
      content: {
        heading: "The Saffron Lounge Standards",
        items: [
          { title: "Clay Oven Tandoor", description: "Natural charcoal cooking imparting authentic smoky aroma" },
          { title: "Dum Pukht Heritage", description: "Sealed dough handi cooking capturing pure royal spices" },
          { title: "Farm-to-Table Spices", description: "Hand-pounded saffron from Kashmir and stone-ground spices" },
          { title: "100% Pure Vegetarian", description: "Dedicated gourmet kitchen with extensive Jain options" },
          { title: "Private Dining Suites", description: "Exclusive private suites for family celebrations & VIP dinners" },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-12",
        paddingBottom: "py-12",
      },
      animations: {
        type: "reveal-on-scroll",
        duration: 0.8,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 5. About Section (The Story)
    {
      id: "sec_about",
      type: "about",
      name: "Our Story & Philosophy",
      layout: "classic_split",
      visible: true,
      locked: false,
      content: {
        badge: "ROYAL CULINARY HERITAGE",
        heading: "Reviving Grand Court Recipes with Modern Finesse",
        description: "Founded in 2018, The Saffron Lounge was born from a passion to preserve authentic royal Indian cooking techniques that time has nearly forgotten. Our Master Chefs hail from traditional culinary lineages of Lucknow and Rajasthan, meticulously balancing 42 native botanical spices, slow-simmering gravies over smoldering coals, and baking handcrafted artisan naans on natural terracotta walls.",
        features: [
          "18-Hour Charcoal Simmered Dal Bukhara",
          "Zero Artificial Additives, Food Colors, or Preservatives",
          "Hand-Selected Kashmiri Grade-A Saffron & Himalayan Herbs",
          "Live Sitar & Classical Flute Recitals Every Friday to Sunday",
        ],
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
        experienceYears: "22+",
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-20",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 6. Signature Menu (Services Section)
    {
      id: "sec_menu",
      type: "services",
      name: "Signature Menu",
      layout: "icon_cards",
      visible: true,
      locked: false,
      content: {
        badge: "HANDCRAFTED DELICACIES",
        heading: "Signature Culinary Offerings",
        description: "Each dish is prepared à la minute with uncompromised attention to fragrance, texture, and authentic royal spice profiles.",
        items: [
          {
            title: "Dal Saffron Bukhara",
            description: "Whole black lentils slow-simmered over charcoal embers for 18 hours with vine-ripened tomatoes, country butter, and fenugreek.",
            price: "₹480",
          },
          {
            title: "Smoked Paneer Angara Tikka",
            description: "Fresh farmhouse malai paneer steeped in roasted mustard oil, hand-pounded Kashmiri chili, and grilled over red-hot coals.",
            price: "₹450",
          },
          {
            title: "Nawabi Subz Dum Biryani",
            description: "Aged long-grain basmati rice layered with garden vegetables, saffron milk, and rose water, sealed in an earthen pot.",
            price: "₹520",
          },
          {
            title: "Truffle & Garlic Naan",
            description: "Hand-stretched organic leavened flatbread baked in terracotta tandoor, drizzled with white truffle oil and fresh herbs.",
            price: "₹180",
          },
          {
            title: "Shahi Tukda Saffron Brioche",
            description: "Crispy ghee-toasted brioche soaked in cardamom milk reduction, crowned with silver vark and crushed pistachio rabri.",
            price: "₹340",
          },
          {
            title: "Charred Jamun & Guava Mocktail",
            description: "Hand-muddled pink guava with black salt, roasted cumin, and charred chili smoke served in a chilled copper goblet.",
            price: "₹260",
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        stagger: 0.15,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 7. Chef's Special Platters (Product Showcase)
    {
      id: "sec_specialties",
      type: "product_showcase",
      name: "Chef's Tasting Platters",
      layout: "split",
      visible: true,
      locked: false,
      content: {
        badge: "CHEF'S SIGNATURE FEASTS",
        heading: "The Royal Degustation Platters",
        description: "Curated multi-course tasting journeys designed for sharing among family, friends, and distinguished guests.",
        items: [
          {
            name: "Maharaja Royal Thali Experience",
            price: "₹1,450",
            originalPrice: "₹1,800",
            badge: "Chef's Pride",
            description: "A lavish feast comprising 3 royal curries, Dal Saffron Bukhara, choice of 3 tandoori breads, saffron dum biryani, signature raita, and twin artisan desserts.",
            imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
          },
          {
            name: "The Tandoori Kebabs & Grill Assortment",
            price: "₹1,150",
            originalPrice: "₹1,400",
            badge: "Live Grill Special",
            description: "Smoked paneer angara, stuffed malai khumb (mushrooms), tandoori broccoli florets, and soya chaap roasted over fragrant wood coals.",
            imageUrl: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "zoom-in",
        duration: 0.85,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 8. Special Offers
    {
      id: "sec_offers",
      type: "special_offers",
      name: "Special Dining Offer",
      layout: "coupon_card",
      visible: true,
      locked: false,
      content: {
        badge: "EXCLUSIVE DINING PRIVILEGE",
        heading: "Weekend Table Reservation Privilege",
        description: "Book your table online for 4 guests or more and receive complimentary handcrafted Chef's signature desserts along with artisanal welcome mocktails on arrival.",
        discountText: "Complimentary Royal Dessert Platter",
        couponCode: "SAFFRONROYAL",
        buttonText: "Claim Table Privilege",
        buttonUrl: "#reservation",
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-16",
        paddingBottom: "py-16",
      },
      animations: {
        type: "bounce-in",
        duration: 0.8,
        trigger: "scroll",
      },
    },

    // 9. Why Choose Us
    {
      id: "sec_why_choose",
      type: "why_choose_us",
      name: "Why Dine With Us",
      layout: "checklist_split",
      visible: true,
      locked: false,
      content: {
        badge: "EXCELLENCE IN GASTRONOMY",
        heading: "Why Connoisseurs Choose The Saffron Lounge",
        description: "We don't merely serve meals; we orchestrate an unforgettable multisensory Indian banquet steeped in hospitality and grandeur.",
        points: [
          {
            title: "Master Chefs of Royal Lineage",
            description: "Over two decades of culinary mastery perfecting Awadhi, Rajasthani, and Mughlai culinary methods.",
          },
          {
            title: "Pure Hand-Stone Ground Spices",
            description: "We never purchase pre-ground spices; whole spices are roasted and pounded fresh every morning.",
          },
          {
            title: "100% Pure Vegetarian & Jain Specialization",
            description: "Independent preparation station dedicated to sattvic and Jain culinary preferences with zero compromise on taste.",
          },
          {
            title: "Intimate Royal Ambience & Live Music",
            description: "Carved jali screens, warm amber candelabras, and live acoustic sitar recitals create an oasis of tranquility.",
          },
          {
            title: "Valet Parking & Dedicated Host Concierge",
            description: "Seamless arrival experience with complimentary valet parking right on Sindhu Bhavan Road.",
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-20",
      },
      animations: {
        type: "fade-right",
        duration: 0.8,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 10. Statistics / Counter Strip
    {
      id: "sec_stats",
      type: "statistics",
      name: "Key Numbers",
      layout: "counter_strip",
      visible: true,
      locked: false,
      content: {
        items: [
          { number: "45,000", suffix: "+", label: "Happy Dining Guests" },
          { number: "4.9", suffix: "/5", label: "Google & Zomato Rating" },
          { number: "18", suffix: " Hours", label: "Slow Charcoal Cooking" },
          { number: "42", suffix: " Spices", label: "Secret Heritage Masalas" },
        ],
      },
      styles: {
        backgroundColor: "#7C2D12",
        textColor: "#FEF3C7",
        paddingTop: "py-16",
        paddingBottom: "py-16",
      },
      animations: {
        type: "zoom-in",
        duration: 0.8,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 11. Image Gallery
    {
      id: "sec_gallery",
      type: "gallery",
      name: "Ambience & Culinary Gallery",
      layout: "uniform_grid",
      visible: true,
      locked: false,
      content: {
        badge: "VISUAL SPLENDOR",
        heading: "An Invitation to Elegance",
        images: [
          { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", caption: "Grand Dining Hall" },
          { url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80", caption: "Royal Curry Platter" },
          { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", caption: "Private Dining Suite" },
          { url: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80", caption: "Smoked Angara Kebabs" },
          { url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80", caption: "Awadhi Saffron Biryani" },
          { url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", caption: "Artisan Shahi Tukda" },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        stagger: 0.1,
        trigger: "scroll",
      },
    },

    // 12. Chef / Owner Profile
    {
      id: "sec_chef",
      type: "owner_profile",
      name: "Executive Chef Profile",
      layout: "executive_card",
      visible: true,
      locked: false,
      content: {
        badge: "CULINARY PATRON",
        name: "Chef Ranveer Singhania",
        title: "Executive Chef & Culinary Director",
        bio: "With over 22 years of illustrious culinary experience across leading luxury 5-star hotels in India and the Middle East, Chef Ranveer leads The Saffron Lounge with obsessive devotion to heritage recipes, ancient slow-cooking secrets, and soulful hospitality.",
        quote: "True Indian royal cooking is not about heavy oil or excessive heat; it is an art of patience, where spices marry over gentle glowing embers to release their most delicate soul.",
        imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-20",
      },
      animations: {
        type: "fade-left",
        duration: 0.85,
        trigger: "scroll",
      },
    },

    // 13. Customer Testimonials & Reviews
    {
      id: "sec_reviews",
      type: "testimonials",
      name: "Guest Reviews",
      layout: "grid_cards",
      visible: true,
      locked: false,
      content: {
        badge: "WORDS FROM OUR PATRONS",
        heading: "A Dining Experience That Lingers",
        items: [
          {
            name: "Dr. Ananya Trivedi",
            role: "Food & Wine Critic, Ahmedabad",
            review: "The Dal Saffron Bukhara is arguably the best in Gujarat. The charcoal notes are mellow, the creaminess is ethereal, and the acoustic sitar music in the background transforms dinner into a royal celebration.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          },
          {
            name: "Prakash Patel",
            role: "Managing Director, Zydus Group",
            review: "We hosted our anniversary dinner in the Private Dining Suite. The personalized service, attention to Jain dietary preferences, and warm hospitality made our family feel like royalty. Unmatched quality.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
          },
          {
            name: "Meera & Siddharth Joshi",
            role: "Culinary Enthusiasts",
            review: "From the smoked pink guava mocktails to the melt-in-the-mouth paneer angara and truffle naan, every single bite is pure perfection. Make sure to book your weekend table well in advance!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        stagger: 0.15,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 14. Private Dining & Banquet Packages (Pricing Plans)
    {
      id: "sec_pricing",
      type: "pricing_plans",
      name: "Dining Packages",
      layout: "card_grid",
      visible: true,
      locked: false,
      content: {
        badge: "BESPOKE CULINARY EXPERIENCES",
        heading: "Private Dining & Banquet Packages",
        description: "Choose an all-inclusive multi-course banquet curated for celebrations, corporate meetings, and family gatherings.",
        plans: [
          {
            name: "The Saffron Silver Feast",
            price: "₹1,250",
            period: "/ guest",
            description: "Ideal for intimate family dinners and small gatherings (minimum 6 guests).",
            popular: false,
            features: [
              "2 Welcome Artisanal Mocktails",
              "3 Signature Starters & Kebabs",
              "Dal Saffron Bukhara & 2 Curries",
              "Assorted Tandoori Breads & Rice",
              "Chef's Duo of Desserts",
            ],
          },
          {
            name: "The Royal Awadhi Banquet",
            price: "₹1,850",
            period: "/ guest",
            description: "Our flagship dining package with dedicated private suite and personalized butler service.",
            popular: true,
            features: [
              "Free-flow Artisanal Mocktails & Welcome Chaat",
              "5 Charcoal Fired Starters & Platters",
              "3 Luxury Curries including Paneer Khas",
              "Subz Dum Biryani & Dum Pukht Gravies",
              "Choice of 4 Breads including Truffle Naan",
              "Tasting Trio of Royal Desserts",
              "Dedicated Private Dining Suite Access",
            ],
          },
          {
            name: "The Master Chef's Table",
            price: "₹2,600",
            period: "/ guest",
            description: "An exclusive 7-course degustation personally prepared and introduced by Chef Ranveer.",
            popular: false,
            features: [
              "Exclusive 7-Course Royal Tasting Journey",
              "Chef Ranveer's Table-Side Live Flambé",
              "Customized Menu with Rare Heritage Recipes",
              "Handmade Silverware & Crystal Table Setting",
              "Commemorative Gift Box with Signature Spices",
            ],
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "zoom-in",
        duration: 0.85,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 15. FAQ Section
    {
      id: "sec_faq",
      type: "faq",
      name: "Frequently Asked Questions",
      layout: "accordion_classic",
      visible: true,
      locked: false,
      content: {
        badge: "RESERVATIONS & POLICIES",
        heading: "Frequently Asked Questions",
        items: [
          {
            question: "Is advance table reservation mandatory?",
            answer: "While we warmly welcome walk-in guests whenever seating permits, we strongly recommend advance reservations for weekend dinners (Friday to Sunday) and for our Private Dining Suites to avoid wait times.",
          },
          {
            question: "Is the restaurant 100% vegetarian, and do you cater to Jain dietary needs?",
            answer: "Yes, The Saffron Lounge is a strictly 100% Pure Vegetarian restaurant. We have an extensive specialized Jain menu prepared in a dedicated area with zero onion, garlic, or root vegetables.",
          },
          {
            question: "How do I book a Private Dining Room (PDR) for birthdays or corporate meetings?",
            answer: "Our Private Dining Suites accommodate 10 to 45 guests. You can request a suite reservation directly through our online form or message our reservations manager on WhatsApp (+91 98980 12345).",
          },
          {
            question: "Is valet parking available at the venue?",
            answer: "Yes, complimentary valet parking is available at our main entrance on Sindhu Bhavan Road, Bodakdev for all our dining patrons.",
          },
          {
            question: "What are your operating hours?",
            answer: "We are open 7 days a week. Lunch is served from 12:00 PM to 3:30 PM, and Dinner from 7:00 PM to 11:30 PM.",
          },
        ],
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-20",
        paddingBottom: "py-20",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        trigger: "scroll",
      },
    },

    // 16. Contact Info Section
    {
      id: "sec_contact_info",
      type: "contact_info",
      name: "Restaurant Location & Hours",
      layout: "card_grid",
      visible: true,
      locked: false,
      content: {
        heading: "Visit The Saffron Lounge",
        phone: "+91 98980 12345",
        whatsapp: "+91 98980 12345",
        email: "reservations@thesaffronlounge.in",
        address: "Saffron Boulevard, Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054",
        hours: "Lunch: 12:00 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM (Daily)",
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-20",
        paddingBottom: "py-16",
      },
      animations: {
        type: "fade-up",
        duration: 0.8,
        trigger: "scroll",
        applyToChildren: true,
      },
    },

    // 17. Contact & Table Reservation Form
    {
      id: "sec_reservation",
      type: "contact_form",
      name: "Table Reservation Form",
      layout: "modern_card",
      visible: true,
      locked: false,
      content: {
        badge: "INSTANT TABLE RESERVATION",
        heading: "Reserve Your Royal Table",
        description: "Fill out the quick reservation details below. Our guest concierge will immediately confirm your table and any special dietary or celebration requests.",
        buttonText: "Confirm Table Reservation",
      },
      styles: {
        backgroundColor: "#FFFFFF",
        paddingTop: "py-20",
        paddingBottom: "py-24",
      },
      animations: {
        type: "reveal-on-scroll",
        duration: 0.85,
        trigger: "scroll",
      },
    },

    // 18. WhatsApp Reservation Banner Strip
    {
      id: "sec_whatsapp",
      type: "whatsapp_cta",
      name: "WhatsApp Quick Booking",
      layout: "banner_strip",
      visible: true,
      locked: false,
      content: {
        heading: "Prefer Quick WhatsApp Booking?",
        description: "Chat directly with our table concierge on WhatsApp for instant table confirmations, today's Chef specials, or custom menu planning within 3 minutes.",
        whatsappNumber: "+919898012345",
        buttonText: "Chat on WhatsApp Now",
      },
      styles: {
        backgroundColor: "#166534",
        textColor: "#FFFFFF",
        paddingTop: "py-14",
        paddingBottom: "py-14",
      },
      animations: {
        type: "zoom-in",
        duration: 0.75,
        trigger: "scroll",
      },
    },

    // 19. Google Maps Location
    {
      id: "sec_maps",
      type: "google_maps",
      name: "Google Maps Location",
      layout: "fullwidth_map",
      visible: true,
      locked: false,
      content: {
        heading: "Our Ahmedabad Location",
        city: "Ahmedabad",
        address: "Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054",
        mapQuery: "Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat",
      },
      styles: {
        backgroundColor: "#FFFBEB",
        paddingTop: "py-16",
        paddingBottom: "py-16",
      },
      animations: {
        type: "fade-in",
        duration: 0.8,
        trigger: "scroll",
      },
    },

    // 20. Footer
    {
      id: "sec_footer",
      type: "footer",
      name: "Footer",
      layout: "multi_column",
      visible: true,
      locked: false,
      content: {
        logoText: "The Saffron Lounge",
        tagline: "The Saffron Lounge & Royal Kitchen – Ahmedabad's Award-Winning Fine Dining Restaurant on Sindhu Bhavan Road.",
        copyright: `© ${new Date().getFullYear()} The Saffron Lounge & Royal Kitchen. All rights reserved. 100% Pure Vegetarian.`,
        phone: "+91 98980 12345",
        whatsapp: "+91 98980 12345",
        address: "Saffron Boulevard, Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054",
        links: [
          { label: "Our Story", href: "#about" },
          { label: "Signature Menu", href: "#menu" },
          { label: "Specialties", href: "#specialties" },
          { label: "Private Dining", href: "#pricing" },
          { label: "Guest Reviews", href: "#reviews" },
          { label: "Reserve Table", href: "#reservation" },
        ],
      },
      styles: {
        backgroundColor: "#291508",
        textColor: "#FEF3C7",
        paddingTop: "py-16",
        paddingBottom: "py-12",
      },
      animations: {
        type: "fade-up",
        duration: 0.6,
        trigger: "scroll",
      },
    },
  ];

  console.log(`Saving ${sections.length} restaurant sections to draft...`);
  await saveDraftWebsite(business.id, {
    sections,
    globalSettings: {
      theme: restaurantTheme,
      containerWidth: "1200px",
    },
    animationSettings: {
      defaultAnimation: "fade-up",
      defaultEasing: "power2.out",
    },
  });

  console.log("Publishing website to make it publicly accessible...");
  await publishWebsite(business.id);

  console.log("Restaurant Demo successfully created and published!");
  console.log(`Live URL: https://mkdigitalnexus.in/business/${slug}?city=ahmedabad&category=restaurant`);
  console.log(`Local URL: http://localhost:3000/business/${slug}?city=ahmedabad&category=restaurant`);
}

createRestaurantDemo().catch((err) => {
  console.error("Error creating restaurant demo:", err);
  process.exit(1);
});

