import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: "/images/service-webdev.jpg",
    },
    category: {
      type: String,
      required: true,
      default: "Web Development",
    },
    authorName: {
      type: String,
      default: "Meet Khetani",
    },
    authorRole: {
      type: String,
      default: "Lead Engineer & Founder",
    },
    readTime: {
      type: String,
      default: "5 min read",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published", "scheduled"],
      default: "published",
      index: true,
    },
    scheduledDate: {
      type: Date,
      default: null,
    },
    seoTitle: {
      type: String,
      default: "",
    },
    seoDescription: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);
