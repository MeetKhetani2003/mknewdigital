import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    const trimmedEmail = (email || "").trim().toLowerCase();

    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Persist newsletter subscription into database
    try {
      await connectDB();
      await Inquiry.create({
        businessId: "mkdigitalnexus",
        slug: "mkdigitalnexus",
        name: "Newsletter Subscriber",
        phone: "N/A",
        email: trimmedEmail,
        service: "Newsletter / Insights Subscription",
        message: "User subscribed to MK Digital Nexus Insights & Knowledge newsletter.",
        source: "website",
        status: "new",
      });
    } catch (dbErr) {
      console.warn("Newsletter DB Save Warning (non-blocking):", dbErr.message);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing to MK Digital Nexus Insights! You are now subscribed to technology & business updates.",
    });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { success: false, message: "Subscription failed. Please try again later." },
      { status: 500 }
    );
  }
}
