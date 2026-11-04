import { PAGE_LAYOUT_PRESETS, buildLayoutSections } from "./src/lib/page-layouts.js";

async function runTests() {
  console.log("=== TESTING 22 WHOLE-PAGE PREBUILT LAYOUT PRESETS ===");

  console.log(`Total presets defined: ${PAGE_LAYOUT_PRESETS.length}`);
  if (PAGE_LAYOUT_PRESETS.length < 20) {
    throw new Error(`Expected at least 20 presets, got ${PAGE_LAYOUT_PRESETS.length}`);
  }

  const dummyBiz = {
    id: "test_biz_1",
    businessName: "Nexus Apex Tech",
    slug: "nexus-apex",
    city: "Ahmedabad",
    category: "Software",
    contactDetails: { phone: "+91 99999 88888", whatsapp: "+91 99999 88888" },
  };

  PAGE_LAYOUT_PRESETS.forEach((preset, idx) => {
    console.log(`\n[${idx + 1}/22] Testing preset: "${preset.name}" (${preset.id})...`);
    console.log(`  - Category: ${preset.category}`);
    console.log(`  - Badge: ${preset.badge}`);
    console.log(`  - Theme ID: ${preset.themeId}`);

    const built = buildLayoutSections(preset.id, dummyBiz);
    console.log(`  - Built theme primaryColor: ${built.theme?.primaryColor}`);
    console.log(`  - Built sections count: ${built.sections?.length}`);

    if (!built.sections || built.sections.length === 0) {
      throw new Error(`Preset "${preset.name}" generated 0 sections!`);
    }

    // Check each section has required fields
    built.sections.forEach((sec, sIdx) => {
      if (!sec.id || !sec.type || !sec.content) {
        throw new Error(`Preset ${preset.id} section ${sIdx} missing required properties`);
      }
    });

    console.log(`  - First section: ${built.sections[0].type} (${built.sections[0].name})`);
    console.log(`  - Last section: ${built.sections[built.sections.length - 1].type} (${built.sections[built.sections.length - 1].name})`);
    console.log(`  ✓ Passed`);
  });

  console.log("\n==============================================");
  console.log("ALL 12 PREBUILT LAYOUT PRESETS VERIFIED SUCCESSFULLY!");
  console.log("==============================================");
}

runTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
