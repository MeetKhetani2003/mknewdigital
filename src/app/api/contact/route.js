import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      name,
      businessName,
      email,
      phone,
      service,
      budget,
      timeline,
      projectDescription,
      message,
    } = body;

    const contactName = (fullName || name || "").trim();
    const contactEmail = (email || "").trim();
    const contactPhone = (phone || "").trim();
    const contactDesc = (projectDescription || message || "").trim();
    const contactService = service || "General Inquiry";
    const contactBudget = budget || "Not Decided Yet";
    const contactTimeline = timeline || "Flexible";
    const contactBusiness = (businessName || "").trim();

    if (!contactName || !contactEmail || !contactDesc) {
      return Response.json(
        { success: false, message: "Full Name, Email Address, and Project Description are required." },
        { status: 400 }
      );
    }

    // 1. Persist inquiry into MongoDB database if reachable
    try {
      await connectDB();
      await Inquiry.create({
        businessId: "mkdigitalnexus",
        slug: "mkdigitalnexus",
        name: contactName + (contactBusiness ? ` (${contactBusiness})` : ""),
        phone: contactPhone || "N/A",
        email: contactEmail,
        service: `${contactService} [Budget: ${contactBudget}, Timeline: ${contactTimeline}]`,
        message: contactDesc,
        source: "website",
        status: "new",
      });
    } catch (dbErr) {
      console.warn("DB Inquiry Save Warning (non-blocking):", dbErr.message);
    }

    // 2. Dispatch email notification if SMTP credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"MK Digital Nexus Website" <${process.env.EMAIL_USER}>`,
          to: "hello@mkdigitalnexus.in",
          subject: `New Project Enquiry - ${contactService} - ${contactName}`,
          html: `
            <h2>New Project Enquiry</h2>
            <p><strong>Name:</strong> ${contactName}</p>
            <p><strong>Business Name:</strong> ${contactBusiness || "N/A"}</p>
            <p><strong>Email:</strong> ${contactEmail}</p>
            <p><strong>Phone:</strong> ${contactPhone || "N/A"}</p>
            <p><strong>Service Required:</strong> ${contactService}</p>
            <p><strong>Estimated Budget:</strong> ${contactBudget}</p>
            <p><strong>Project Timeline:</strong> ${contactTimeline}</p>
            <p><strong>Project Description:</strong></p>
            <p style="white-space: pre-wrap;">${contactDesc}</p>
          `,
        });
      } catch (mailErr) {
        console.error("Email dispatch failed:", mailErr);
      }
    }

    return Response.json({
      success: true,
      message: "Project enquiry submitted successfully! Our team will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, message: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}
