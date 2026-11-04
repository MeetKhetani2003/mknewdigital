import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, default: "" },
    layout: { type: String, default: "default" },
    visible: { type: Boolean, default: true },
    locked: { type: Boolean, default: false },
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
    styles: { type: mongoose.Schema.Types.Mixed, default: {} },
    animations: { type: mongoose.Schema.Types.Mixed, default: {} },
    elements: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { _id: false }
);

const VersionSnapshotSchema = new mongoose.Schema(
  {
    version: { type: Number, required: true },
    savedAt: { type: Date, default: Date.now },
    sections: [SectionSchema],
    globalSettings: { type: mongoose.Schema.Types.Mixed, default: {} },
    note: { type: String, default: "" },
  },
  { _id: false }
);

const WebsiteSchema = new mongoose.Schema(
  {
    businessId: {
      type: String,
      required: true,
      index: true,
    },
    draftVersion: {
      sections: [SectionSchema],
      globalSettings: { type: mongoose.Schema.Types.Mixed, default: {} },
      animationSettings: {
        smoothScroll: { type: Boolean, default: true },
        disableOnMobile: { type: Boolean, default: false },
        prefersReducedMotion: { type: Boolean, default: true },
      },
      updatedAt: { type: Date, default: Date.now },
    },
    publishedVersion: {
      sections: [SectionSchema],
      globalSettings: { type: mongoose.Schema.Types.Mixed, default: {} },
      animationSettings: {
        smoothScroll: { type: Boolean, default: true },
        disableOnMobile: { type: Boolean, default: false },
        prefersReducedMotion: { type: Boolean, default: true },
      },
      publishedAt: { type: Date, default: null },
    },
    versionHistory: [VersionSnapshotSchema],
  },
  {
    timestamps: true,
  }
);

WebsiteSchema.index({ businessId: 1 });

export default mongoose.models.Website || mongoose.model("Website", WebsiteSchema);

