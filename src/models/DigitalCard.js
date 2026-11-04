import mongoose from "mongoose";

const DigitalCardSchema = new mongoose.Schema(
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
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    draftVersion: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    publishedVersion: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.DigitalCard || mongoose.model("DigitalCard", DigitalCardSchema);

