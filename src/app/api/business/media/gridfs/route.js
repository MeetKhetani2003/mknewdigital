import { NextResponse } from "next/server";
import { uploadToGridFS, getGridFSFilesByBusiness } from "@/lib/gridfs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const businessId = formData.get("businessId") || "general";

    if (!file || typeof file === "string") {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Size limit: 10MB
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ success: false, message: "File exceeds 10MB limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploaded = await uploadToGridFS({
      buffer,
      filename: file.name,
      contentType: file.type || "image/jpeg",
      businessId,
    });

    return NextResponse.json({
      success: true,
      file: uploaded,
      url: uploaded.url,
      message: "Image uploaded to MongoDB GridFS successfully",
    });
  } catch (err) {
    console.error("GridFS Upload Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    let businessId = searchParams.get("businessId") || "";
    const slug = searchParams.get("slug") || "";

    if (!businessId && slug) {
      const { getBusinessBySlug } = await import("@/lib/storage");
      const biz = await getBusinessBySlug(slug);
      if (biz) {
        businessId = biz.id || biz._id?.toString() || "";
      }
    }

    const files = await getGridFSFilesByBusiness(businessId);
    return NextResponse.json({
      success: true,
      files,
      count: files.length,
    });
  } catch (err) {
    console.error("GridFS List Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

