import { NextResponse } from "next/server";
import { validateCredentials, signToken, COOKIE_NAME } from "@/lib/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!validateCredentials(username, password)) {
      return NextResponse.json(
        { success: false, message: "Invalid administrator credentials" },
        { status: 401 }
      );
    }

    const payload = {
      user: username,
      role: "admin",
      iat: Date.now(),
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    };

    const token = signToken(payload);

    const res = NextResponse.json({
      success: true,
      user: { username, role: "admin" },
    });

    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

