import { NextResponse } from "next/server";
import { getDigitalCard, saveDraftDigitalCard, getBusinessById } from "@/lib/storage";

export async function GET(request, { params }) {
  try {
    const { businessId } = await params;
    const business = await getBusinessById(businessId);
    if (!business) {
      return NextResponse.json({ success: false, message: "Business not found" }, { status: 404 });
    }

    const card = await getDigitalCard(businessId);
    return NextResponse.json({
      success: true,
      card,
      business,
    });
  } catch (error) {
    console.error("API GET Digital Card Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const { businessId } = await params;
    const body = await request.json();
    const { draftVersion } = body;

    if (!draftVersion) {
      return NextResponse.json({ success: false, message: "Missing draftVersion" }, { status: 400 });
    }

    const saved = await saveDraftDigitalCard(businessId, draftVersion);
    return NextResponse.json({
      success: true,
      card: saved,
      message: "Digital card draft saved successfully",
    });
  } catch (error) {
    console.error("API POST Digital Card Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

