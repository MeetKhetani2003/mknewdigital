import { NextResponse } from "next/server";
import { getBusinessBySlug } from "@/lib/storage";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ authenticated: false }, { status: 400 });
    }

    const cookie = req.cookies.get(`client_auth_${slug}`);
    if (cookie?.value === "authenticated") {
      const business = await getBusinessBySlug(slug);
      return NextResponse.json({
        authenticated: true,
        business,
      });
    }

    return NextResponse.json({ authenticated: false });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}

