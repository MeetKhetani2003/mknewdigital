import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";
import { getBusinessBySlug, getBusinessById } from "@/lib/storage";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { slug, businessId, name, phone, email, service, message, preferredDate, preferredTime, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Name and phone number are required" }, { status: 400 });
    }

    let targetBusinessId = businessId;
    let targetSlug = slug;

    if (!targetBusinessId && targetSlug) {
      const biz = await getBusinessBySlug(targetSlug);
      if (biz) {
        targetBusinessId = biz.id;
      }
    } else if (targetBusinessId && !targetSlug) {
      const biz = await getBusinessById(targetBusinessId);
      if (biz) {
        targetSlug = biz.slug;
      }
    }

    if (!targetBusinessId) {
      return NextResponse.json({ success: false, message: "Valid business ID or slug is required" }, { status: 400 });
    }

    const inquiry = await Inquiry.create({
      businessId: targetBusinessId,
      slug: targetSlug || "business",
      name: name.trim(),
      phone: phone.trim(),
      email: (email || "").trim(),
      service: service || "General Consultation",
      preferredDate: preferredDate || "",
      preferredTime: preferredTime || "",
      message: message || "",
      source: source || "website",
      status: "new",
    });

    return NextResponse.json({
      success: true,
      inquiry,
      message: "Consultation inquiry submitted successfully! The practitioner will reach out shortly.",
    });
  } catch (err) {
    console.error("Inquiry Submission Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get("businessId");
    const slug = searchParams.get("slug");
    const status = searchParams.get("status");

    let query = {};
    if (businessId) {
      query.businessId = businessId;
    } else if (slug) {
      query.slug = slug;
    }

    if (status && status !== "all") {
      query.status = status;
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({
      success: true,
      inquiries: inquiries.map((i) => ({ ...i, id: i._id.toString() })),
      count: inquiries.length,
    });
  } catch (err) {
    console.error("Inquiries Fetch Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

