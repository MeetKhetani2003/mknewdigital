import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Article from "@/models/Article";
import { articles as initialArticles } from "@/data/articlesData";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status") || "published";
    const slug = searchParams.get("slug");

    let dbArticles = [];
    try {
      await connectDB();
      const query = {};
      if (status && status !== "all") query.status = status;
      if (category && category !== "All") query.category = category;
      if (slug) query.slug = slug;

      dbArticles = await Article.find(query).sort({ createdAt: -1 }).lean();
    } catch (dbErr) {
      console.warn("DB Articles fetch fallback to static data:", dbErr.message);
    }

    // Merge static default articles with any dynamic DB articles
    const merged = [...initialArticles];
    if (dbArticles && dbArticles.length > 0) {
      dbArticles.forEach((da) => {
        if (!merged.some((m) => m.slug === da.slug)) {
          merged.unshift({
            ...da,
            id: da._id.toString(),
            formattedDate: new Date(da.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            author: {
              name: da.authorName || "Meet Khetani",
              role: da.authorRole || "Lead Engineer & Founder",
            },
          });
        }
      });
    }

    if (slug) {
      const single = merged.find((a) => a.slug === slug);
      if (!single) {
        return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, article: single });
    }

    return NextResponse.json({
      success: true,
      articles: merged,
      count: merged.length,
    });
  } catch (err) {
    console.error("Articles GET error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      authorName,
      authorRole,
      readTime,
      featured,
      status,
      seoTitle,
      seoDescription,
    } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: "Title, slug, excerpt, and content are required." },
        { status: 400 }
      );
    }

    const newArticle = await Article.create({
      title: title.trim(),
      slug: slug.trim().toLowerCase(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      coverImage: coverImage || "/images/service-webdev.jpg",
      category: category || "Web Development",
      authorName: authorName || "Meet Khetani",
      authorRole: authorRole || "Lead Engineer & Founder",
      readTime: readTime || "5 min read",
      featured: Boolean(featured),
      status: status || "published",
      seoTitle: seoTitle || title,
      seoDescription: seoDescription || excerpt,
    });

    return NextResponse.json({
      success: true,
      article: newArticle,
      message: "Article saved successfully in CMS.",
    });
  } catch (err) {
    console.error("Article POST error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
