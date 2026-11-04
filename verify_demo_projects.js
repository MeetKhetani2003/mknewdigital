import { getBusinesses, getWebsite } from "./src/lib/storage.js";

async function verifyDemoWebsites() {
  console.log("=== VERIFYING DEMO PROJECTS IN MK DIGITAL NEXUS ===");

  const businesses = await getBusinesses();
  console.log(`Total businesses retrieved: ${businesses.length}\n`);

  let allValid = true;

  for (const b of businesses) {
    const site = await getWebsite(b.id);
    if (!site) {
      console.error(`✗ No website found for business: ${b.businessName} (ID: ${b.id})`);
      allValid = false;
      continue;
    }

    const draftSecs = site.draftVersion?.sections?.length || 0;
    const pubSecs = site.publishedVersion?.sections?.length || 0;
    const theme = site.publishedVersion?.globalSettings?.theme || site.draftVersion?.globalSettings?.theme;

    if (b.status === "published" && pubSecs === 0) {
      console.error(`✗ Published business has 0 published sections: ${b.businessName}`);
      allValid = false;
    } else {
      console.log(`✓ [${b.category}] ${b.businessName}`);
      console.log(`    Slug: /business/${b.slug}?city=${encodeURIComponent(b.city.toLowerCase())}&category=${encodeURIComponent(b.category.toLowerCase())}`);
      console.log(`    Status: ${b.status} | Sections: ${pubSecs || draftSecs} | Theme: ${theme?.primaryColor} (${theme?.headingFont || "default"})\n`);
    }
  }

  if (allValid) {
    console.log("==================================================");
    console.log("ALL DEMO WEBSITES VERIFIED & HEALTHY!");
    console.log("==================================================");
  } else {
    throw new Error("One or more demo projects failed verification.");
  }
}

verifyDemoWebsites()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

