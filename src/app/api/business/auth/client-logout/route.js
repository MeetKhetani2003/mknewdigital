import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { slug } = await req.json();
    const response = NextResponse.json({ success: true });
    if (slug) {
      response.cookies.delete(`client_auth_${slug}`);
    }
    return response;
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}

