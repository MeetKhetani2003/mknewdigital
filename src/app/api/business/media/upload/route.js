import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const businessId = formData.get("businessId") || "general";

    if (!file || typeof file === "string") {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Validate size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ success: false, message: "File exceeds 5MB size limit" }, { status: 400 });
    }

    // Validate type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ success: false, message: "Invalid image format. Allowed: JPG, PNG, WebP, SVG, GIF" }, { status: 400 });
    }

    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }

    const ext = path.extname(file.name) || ".png";
    const cleanName = path.basename(file.name, ext).replace(/[^\w\-]/g, "_");
    const filename = `${businessId}_${cleanName}_${Date.now()}${ext}`;
    const destinationPath = path.join(UPLOADS_DIR, filename);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    fs.writeFileSync(destinationPath, buffer);

    const publicUrl = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      name: file.name,
      size: file.size,
      type: file.type,
    });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

