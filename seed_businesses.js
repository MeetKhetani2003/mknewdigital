import { createBusiness, saveDraftWebsite, publishWebsite, getBusinessBySlug } from "./src/lib/storage.js";
import { generateStarterSections } from "./src/lib/default-sections.js";
import { PREDEFINED_THEMES } from "./src/lib/themes.js";

async function seed() {
  console.log("Seeding sample businesses...");

  const sampleBusinesses = [
    {
      businessName: "Shreeji Luxury Furniture",
      slug: "shreeji-furniture",
      city: "Junagadh",
      category: "Furniture",
      status: "published",
      contactDetails: {
        phone: "+91 98250 12345",
        whatsapp: "+91 98250 12345",
        email: "contact@shreejifurniture.in",
        address: "Near Vanzari Chowk, Station Road, Junagadh, Gujarat 362001",
        openingHours: "Mon - Sat: 9:30 AM - 8:30 PM",
      },
      businessInformation: {
        about: "Shreeji Luxury Furniture is Junagadh's most trusted showroom for bespoke wooden living sets, ergonomic bedroom wardrobes, and contemporary modular kitchens. Founded on traditional craftsmanship with modern design.",
        tagline: "Handcrafted Luxury Furniture for Generations",
        foundedYear: "2015",
        ownerName: "Hitesh Patel",
      },
      theme: {
        preset: "furniture",
        ...PREDEFINED_THEMES["furniture"],
      },
      seo: {
        title: "Shreeji Luxury Furniture in Junagadh | Best Wooden Furniture Showroom",
        description: "Explore handcrafted wooden sofas, master bedroom beds, modular kitchens and dining tables at Shreeji Luxury Furniture in Junagadh. Verified 5-year warranty.",
      },
    },
    {
      businessName: "Raj Traders & Industrial Supplies",
      slug: "raj-traders",
      city: "Rajkot",
      category: "Wholesale",
      status: "published",
      contactDetails: {
        phone: "+91 94260 56789",
        whatsapp: "+91 94260 56789",
        email: "sales@rajtraders.co.in",
        address: "Aji GIDC Industrial Area, Phase II, Rajkot, Gujarat 360003",
        openingHours: "Mon - Sat: 9:00 AM - 7:30 PM",
      },
      businessInformation: {
        about: "Raj Traders is a premier wholesale distributor of certified industrial hardware, precision components, and workshop equipment serving businesses across Saurashtra and Gujarat.",
        tagline: "Certified Industrial Hardware & Wholesale Distribution",
        foundedYear: "2010",
        ownerName: "Rajesh Shah",
      },
      theme: {
        preset: "corporate",
        ...PREDEFINED_THEMES["corporate"],
      },
      seo: {
        title: "Raj Traders & Industrial Supplies in Rajkot | Certified B2B Wholesale",
        description: "Leading wholesale supplier of industrial equipment, bearings, and heavy duty workshop tools in Rajkot. Bulk discounts and fast same-day dispatch.",
      },
    },
    {
      businessName: "Apex Multi-Speciality Clinic",
      slug: "apex-clinic",
      city: "Ahmedabad",
      category: "Healthcare",
      status: "published",
      contactDetails: {
        phone: "+91 79400 99888",
        whatsapp: "+91 79400 99888",
        email: "care@apexclinic.org",
        address: "Commerce Six Roads, Navrangpura, Ahmedabad, Gujarat 380009",
        openingHours: "Mon - Sat: 8:00 AM - 9:00 PM (Emergency 24x7)",
      },
      businessInformation: {
        about: "Apex Multi-Speciality Clinic provides comprehensive outpatient care, advanced diagnostics, cardiology, and orthopedics with patient-first values and compassionate medical specialists.",
        tagline: "Compassionate Healthcare with Modern Diagnostics",
        foundedYear: "2019",
        ownerName: "Dr. Mihir Mehta (MD)",
      },
      theme: {
        preset: "healthcare",
        ...PREDEFINED_THEMES["healthcare"],
      },
      seo: {
        title: "Apex Multi-Speciality Clinic in Ahmedabad | Top Doctors & Diagnostics",
        description: "Book doctor appointments at Apex Multi-Speciality Clinic in Ahmedabad. Compassionate patient care, advanced pathology, and expert medical consultation.",
      },
    },
  ];

  for (const bData of sampleBusinesses) {
    const existing = await getBusinessBySlug(bData.slug);
    if (!existing) {
      console.log(`Creating ${bData.businessName} (${bData.slug})...`);
      const created = await createBusiness(bData);
      const sections = generateStarterSections(created);
      await saveDraftWebsite(created.id, {
        sections,
        globalSettings: { theme: created.theme },
        animationSettings: { smoothScroll: true, disableOnMobile: false },
      });
      await publishWebsite(created.id);
      console.log(`Published ${created.businessName} at /business/${created.slug}`);
    } else {
      console.log(`${bData.businessName} already exists.`);
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

