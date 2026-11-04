import { NextResponse } from "next/server";
import { getWebsite, saveDraftWebsite, publishWebsite } from "@/lib/storage";

export async function GET(req, { params }) {
  try {
    const { businessId } = await params;
    const website = await getWebsite(businessId);
    return NextResponse.json({ success: true, website: website || null });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { businessId } = await params;
    const body = await req.json();
    const { sections, globalSettings, animationSettings } = body;

    const saved = await saveDraftWebsite(businessId, {
      sections: sections || [],
      globalSettings: globalSettings || {},
      animationSettings: animationSettings || {},
    });

    return NextResponse.json({ success: true, website: saved });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  try {
    const { businessId } = await params;
    const published = await publishWebsite(businessId);
    return NextResponse.json({ success: true, website: published });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

