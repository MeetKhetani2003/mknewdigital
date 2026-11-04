import { NextResponse } from "next/server";
import { duplicateBusiness } from "@/lib/storage";

export async function POST(req, { params }) {
  try {
    const { id } = await params;
    const duplicated = await duplicateBusiness(id);
    return NextResponse.json({ success: true, business: duplicated });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

