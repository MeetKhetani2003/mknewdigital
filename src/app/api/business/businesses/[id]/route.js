import { NextResponse } from "next/server";
import { getBusinessById, updateBusiness, deleteBusiness, getWebsite } from "@/lib/storage";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const business = await getBusinessById(id);
    if (!business) {
      return NextResponse.json({ success: false, message: "Business not found" }, { status: 404 });
    }
    const website = await getWebsite(id);
    return NextResponse.json({ success: true, business, website });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const updated = await updateBusiness(id, body);
    if (!updated) {
      return NextResponse.json({ success: false, message: "Business not found to update" }, { status: 404 });
    }
    return NextResponse.json({ success: true, business: updated });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await deleteBusiness(id);
    return NextResponse.json({ success: true, message: "Business deleted successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

