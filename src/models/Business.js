import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: [true, "Business name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Business slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    city: {
      type: String,
      default: "Junagadh",
      trim: true,
      index: true,
    },
    category: {
      type: String,
      default: "Business",
      trim: true,
      index: true,
    },
    logo: {
      type: String,
      default: "",
    },
    contactDetails: {
      phone: { type: String, default: "" },
      whatsapp: { type: String, default: "" },
      email: { type: String, default: "" },
      address: { type: String, default: "" },
      openingHours: { type: String, default: "Mon - Sat: 9:00 AM - 8:00 PM" },
      googleMapsUrl: { type: String, default: "" },
    },
    socialLinks: [
      {
        platform: { type: String, default: "instagram" },
        url: { type: String, default: "" },
      },
    ],
    businessInformation: {
      about: { type: String, default: "" },
      tagline: { type: String, default: "" },
      foundedYear: { type: String, default: "2020" },
      ownerName: { type: String, default: "" },
      ownerPhoto: { type: String, default: "" },
      ownerBio: { type: String, default: "" },
      highlights: [{ type: String }],
    },
    media: [
      {
        id: { type: String },
        url: { type: String },
        name: { type: String },
        type: { type: String, default: "image" },
        size: { type: Number, default: 0 },
        alt: { type: String, default: "" },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
    theme: {
      preset: { type: String, default: "modern-business" },
      primaryColor: { type: String, default: "#1B6FD6" },
      secondaryColor: { type: String, default: "#0B2447" },
      accentColor: { type: String, default: "#38BDF8" },
      backgroundColor: { type: String, default: "#FFFFFF" },
      textColor: { type: String, default: "#0A1628" },
      headingFont: { type: String, default: "Poppins" },
      bodyFont: { type: String, default: "Inter" },
      buttonStyle: { type: String, default: "rounded-lg" },
      cardStyle: { type: String, default: "elevated" },
      borderRadius: { type: String, default: "12px" },
      sectionSpacing: { type: String, default: "spacious" },
      containerWidth: { type: String, default: "1200px" },
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
      index: true,
    },
    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      keywords: { type: String, default: "" },
      canonicalUrl: { type: String, default: "" },
      ogImage: { type: String, default: "" },
      structuredDataType: { type: String, default: "LocalBusiness" },
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

BusinessSchema.index({ city: 1, category: 1 });

export default mongoose.models.Business || mongoose.model("Business", BusinessSchema);

