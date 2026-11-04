import { NextResponse } from "next/server";
import { getBusinesses, createBusiness, saveDraftWebsite } from "@/lib/storage";
import { generateStarterSections } from "@/lib/default-sections";
import { buildLayoutSections } from "@/lib/page-layouts";
import { PREDEFINED_THEMES } from "@/lib/themes";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const city = searchParams.get("city") || "";
    const category = searchParams.get("category") || "";
    const status = searchParams.get("status") || "";

    const businesses = await getBusinesses({ search, city, category, status });
    return NextResponse.json({ success: true, businesses });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.businessName) {
      return NextResponse.json({ success: false, message: "Business name is required" }, { status: 400 });
    }

    const themePreset = body.theme?.preset || "modern-business";
    const selectedTheme = PREDEFINED_THEMES[themePreset] || PREDEFINED_THEMES["modern-business"];

    const businessPayload = {
      ...body,
      theme: {
        ...selectedTheme,
        ...(body.theme || {}),
      },
    };

    const newBusiness = await createBusiness(businessPayload);

    // Automatically generate rich starter website sections tailored to this business
    let initialSections;
    if (body.layoutPreset) {
      const built = buildLayoutSections(body.layoutPreset, newBusiness);
      initialSections = built.sections;
    } else {
      initialSections = generateStarterSections(newBusiness);
    }

    await saveDraftWebsite(newBusiness.id, {
      sections: initialSections,
      globalSettings: { theme: newBusiness.theme },
      animationSettings: { smoothScroll: true, disableOnMobile: false },
    });

    return NextResponse.json({ success: true, business: newBusiness }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

