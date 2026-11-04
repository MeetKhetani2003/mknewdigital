import { NextResponse } from "next/server";
import { generateAiBusinessContent } from "@/lib/ai-generator";

export async function POST(req) {
  try {
    const body = await req.json();
    const content = generateAiBusinessContent(body);
    return NextResponse.json({ success: true, content });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

