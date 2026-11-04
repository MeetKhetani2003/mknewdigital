import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const updated = await Inquiry.findByIdAndUpdate(id, body, { returnDocument: "after" }).lean();
    if (!updated) {
      return NextResponse.json({ success: false, message: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      inquiry: { ...updated, id: updated._id.toString() },
      message: "Inquiry status updated",
    });
  } catch (err) {
    console.error("Inquiry Update Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    await Inquiry.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Inquiry deleted" });
  } catch (err) {
    console.error("Inquiry Delete Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

