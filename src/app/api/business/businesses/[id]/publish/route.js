import { NextResponse } from "next/server";
import { publishBusiness, unpublishBusiness, getBusinessById } from "@/lib/storage";

export async function POST(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const action = body.action || "publish"; // "publish" or "unpublish"

    let result;
    if (action === "unpublish") {
      result = await unpublishBusiness(id);
    } else {
      result = await publishBusiness(id);
    }

    return NextResponse.json({
      success: true,
      status: result.status,
      business: result,
      publicUrl: `/business/${result.slug}?city=${encodeURIComponent(result.city || "")}&category=${encodeURIComponent(result.category || "")}`,
    });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

