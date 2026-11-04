import { NextResponse } from "next/server";
import { getBusinessById, getDigitalCard } from "@/lib/storage";

export async function GET(request, { params }) {
  try {
    const { businessId } = await params;
    const business = await getBusinessById(businessId);
    if (!business) {
      return new NextResponse("Business not found", { status: 404 });
    }

    const card = await getDigitalCard(businessId);
    const cardData = card?.publishedVersion || card?.draftVersion || {};
    const vCard = cardData.vCardData || {};

    const name = business.businessName || "Contact";
    const phone = business.contactDetails?.phone || "";
    const email = business.contactDetails?.email || "";
    const address = business.contactDetails?.address || "";
    const website = `https://mkdigitalnexus.in/business/${business.slug}`;
    const title = business.businessInformation?.ownerName || "Managing Director";
    const org = business.businessName;

    // Build standard VCF format (version 3.0)
    const vcfLines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${name}`,
      `N:${name};;;;`,
      `ORG:${org}`,
      `TITLE:${title}`,
      phone ? `TEL;TYPE=CELL,VOICE:${phone}` : "",
      email ? `EMAIL;TYPE=WORK,INTERNET:${email}` : "",
      website ? `URL:${website}` : "",
      address ? `ADR;TYPE=WORK:;;${address.replace(/,/g, "\\,")};;;;` : "",
      business.businessInformation?.tagline ? `NOTE:${business.businessInformation.tagline}` : "",
      "END:VCARD",
    ].filter(Boolean).join("\r\n");

    const safeFilename = `${business.slug || "contact"}-card.vcf`;

    return new NextResponse(vcfLines, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": `attachment; filename="${safeFilename}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    return new NextResponse("Error generating contact card: " + err.message, { status: 500 });
  }
}

