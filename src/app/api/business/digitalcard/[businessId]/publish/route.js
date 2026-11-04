import { NextResponse } from "next/server";
import { publishDigitalCard } from "@/lib/storage";

export async function POST(request, { params }) {
  try {
    const { businessId } = await params;
    let body = {};
    try {
      body = await request.json();
    } catch (e) {
      // Body is optional
    }

    const card = await publishDigitalCard(businessId, body.cardData || null);
    return NextResponse.json({
      success: true,
      card,
      message: "Digital business card published successfully!",
    });
  } catch (error) {
    console.error("API Publish Digital Card Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

