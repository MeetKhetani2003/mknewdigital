import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    businessId: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      default: "General Consultation",
      trim: true,
    },
    preferredDate: {
      type: String,
      default: "",
    },
    preferredTime: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    source: {
      type: String,
      enum: ["website", "digital_card", "direct", "settings"],
      default: "website",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "confirmed", "completed", "cancelled"],
      default: "new",
      index: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);

