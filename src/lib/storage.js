import fs from "fs";
import path from "path";
import { connectDB, isDbConnected } from "./db.js";
import Business from "../models/Business.js";
import Website from "../models/Website.js";

const DATA_DIR = path.join(process.cwd(), "data");
const BUSINESSES_FILE = path.join(DATA_DIR, "businesses.json");
const WEBSITES_FILE = path.join(DATA_DIR, "websites.json");

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(BUSINESSES_FILE)) {
    fs.writeFileSync(BUSINESSES_FILE, JSON.stringify([], null, 2), "utf8");
  }
  if (!fs.existsSync(WEBSITES_FILE)) {
    fs.writeFileSync(WEBSITES_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

function readJsonFile(filePath) {
  ensureDataFiles();
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e);
    return [];
  }
}

function writeJsonFile(filePath, data) {
  ensureDataFiles();
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error(`Error writing ${filePath}:`, e);
    return false;
  }
}

function generateId(prefix = "id") {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Format slug from string
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export async function getBusinesses({ search = "", city = "", category = "", status = "" } = {}) {
  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const query = {};
      if (search) {
        query.$or = [
          { businessName: { $regex: search, $options: "i" } },
          { slug: { $regex: search, $options: "i" } },
          { city: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ];
      }
      if (city && city !== "all") query.city = { $regex: `^${city}$`, $options: "i" };
      if (category && category !== "all") query.category = { $regex: `^${category}$`, $options: "i" };
      if (status && status !== "all") query.status = status;

      const businesses = await Business.find(query).sort({ updatedAt: -1 }).lean();
      return businesses.map((b) => ({ ...b, id: b._id.toString() }));
    } catch (err) {
      console.warn("[Storage] Mongoose getBusinesses error, falling back to local files:", err.message);
    }
  }

  // Local file fallback
  let list = readJsonFile(BUSINESSES_FILE);
  if (search) {
    const s = search.toLowerCase();
    list = list.filter(
      (b) =>
        b.businessName?.toLowerCase().includes(s) ||
        b.slug?.toLowerCase().includes(s) ||
        b.city?.toLowerCase().includes(s) ||
        b.category?.toLowerCase().includes(s)
    );
  }
  if (city && city !== "all") {
    list = list.filter((b) => b.city?.toLowerCase() === city.toLowerCase());
  }
  if (category && category !== "all") {
    list = list.filter((b) => b.category?.toLowerCase() === category.toLowerCase());
  }
  if (status && status !== "all") {
    list = list.filter((b) => b.status === status);
  }

  list.sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
  return list;
}

export async function getBusinessById(id) {
  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const b = await Business.findById(id).lean();
      if (b) return { ...b, id: b._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose getBusinessById fallback:", err.message);
    }
  }

  const list = readJsonFile(BUSINESSES_FILE);
  return list.find((b) => b.id === id || b._id === id) || null;
}

export async function getBusinessBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();

  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const b = await Business.findOne({ slug: cleanSlug }).lean();
      if (b) return { ...b, id: b._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose getBusinessBySlug fallback:", err.message);
    }
  }

  const list = readJsonFile(BUSINESSES_FILE);
  return list.find((b) => b.slug?.toLowerCase() === cleanSlug) || null;
}

export async function createBusiness(data) {
  let slug = slugify(data.slug || data.businessName);
  
  // Ensure unique slug
  let uniqueSlug = slug;
  let counter = 1;
  while (await getBusinessBySlug(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  slug = uniqueSlug;

  const now = new Date().toISOString();
  const businessData = {
    ...data,
    slug,
    city: data.city || "Junagadh",
    category: data.category || "General Business",
    status: data.status || "draft",
    createdAt: now,
    updatedAt: now,
    media: data.media || [],
    socialLinks: data.socialLinks || [],
    contactDetails: data.contactDetails || {},
    businessInformation: data.businessInformation || {},
    theme: data.theme || {
      preset: "modern-business",
      primaryColor: "#1B6FD6",
      secondaryColor: "#0B2447",
      accentColor: "#38BDF8",
      backgroundColor: "#FFFFFF",
      textColor: "#0A1628",
      headingFont: "Poppins",
      bodyFont: "Inter",
      buttonStyle: "rounded-lg",
      cardStyle: "elevated",
      borderRadius: "12px",
      sectionSpacing: "spacious",
      containerWidth: "1200px",
    },
    seo: data.seo || {
      title: `${data.businessName} | ${data.category || "Business"} in ${data.city || "Junagadh"}`,
      description: `Official website of ${data.businessName} in ${data.city || "Junagadh"}. Quality services, pricing, customer reviews and contact information.`,
      keywords: `${data.businessName}, ${data.category}, ${data.city}`,
      canonicalUrl: `https://www.mkdigitalnexus.in/business/${slug}`,
    },
  };

  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const created = await Business.create(businessData);
      const bObj = created.toObject();
      return { ...bObj, id: bObj._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose createBusiness fallback:", err.message);
    }
  }

  // Local fallback
  const list = readJsonFile(BUSINESSES_FILE);
  const newBusiness = {
    id: generateId("biz"),
    ...businessData,
  };
  list.unshift(newBusiness);
  writeJsonFile(BUSINESSES_FILE, list);
  return newBusiness;
}

export async function updateBusiness(id, updates) {
  const now = new Date().toISOString();
  const cleanUpdates = { ...updates, updatedAt: now };

  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const updated = await Business.findByIdAndUpdate(id, cleanUpdates, { new: true }).lean();
      if (updated) return { ...updated, id: updated._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose updateBusiness fallback:", err.message);
    }
  }

  const list = readJsonFile(BUSINESSES_FILE);
  const index = list.findIndex((b) => b.id === id || b._id === id);
  if (index === -1) return null;

  list[index] = { ...list[index], ...cleanUpdates };
  writeJsonFile(BUSINESSES_FILE, list);
  return list[index];
}

export async function deleteBusiness(id) {
  const dbOk = await connectDB();
  if (dbOk) {
    try {
      await Business.findByIdAndDelete(id);
      await Website.deleteMany({ businessId: id });
    } catch (err) {
      console.warn("[Storage] Mongoose deleteBusiness fallback:", err.message);
    }
  }

  let list = readJsonFile(BUSINESSES_FILE);
  list = list.filter((b) => b.id !== id && b._id !== id);
  writeJsonFile(BUSINESSES_FILE, list);

  let webList = readJsonFile(WEBSITES_FILE);
  webList = webList.filter((w) => w.businessId !== id);
  writeJsonFile(WEBSITES_FILE, webList);

  return true;
}

export async function duplicateBusiness(id) {
  const original = await getBusinessById(id);
  if (!original) throw new Error("Original business not found");

  const originalWebsite = await getWebsite(id);

  const duplicatedData = {
    ...original,
    businessName: `${original.businessName} (Copy)`,
    slug: `${original.slug}-copy`,
    status: "draft",
    publishedAt: null,
  };
  delete duplicatedData.id;
  delete duplicatedData._id;

  const newBiz = await createBusiness(duplicatedData);

  if (originalWebsite) {
    await saveDraftWebsite(newBiz.id, {
      sections: originalWebsite.draftVersion?.sections || originalWebsite.publishedVersion?.sections || [],
      globalSettings: originalWebsite.draftVersion?.globalSettings || {},
      animationSettings: originalWebsite.draftVersion?.animationSettings || {},
    });
  }

  return newBiz;
}

export async function publishBusiness(id) {
  const now = new Date().toISOString();
  await updateBusiness(id, { status: "published", publishedAt: now });
  await publishWebsite(id);
  return await getBusinessById(id);
}

export async function unpublishBusiness(id) {
  await updateBusiness(id, { status: "draft" });
  return await getBusinessById(id);
}

export async function getWebsite(businessId) {
  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const site = await Website.findOne({ businessId }).lean();
      if (site) return { ...site, id: site._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose getWebsite fallback:", err.message);
    }
  }

  const list = readJsonFile(WEBSITES_FILE);
  return list.find((w) => w.businessId === businessId) || null;
}

export async function saveDraftWebsite(businessId, { sections = [], globalSettings = {}, animationSettings = {} }) {
  const now = new Date().toISOString();
  const draftData = {
    sections,
    globalSettings,
    animationSettings,
    updatedAt: now,
  };

  const dbOk = await connectDB();
  if (dbOk) {
    try {
      let site = await Website.findOne({ businessId });
      if (!site) {
        site = new Website({
          businessId,
          draftVersion: draftData,
          publishedVersion: { sections: [], globalSettings: {}, animationSettings: {} },
          versionHistory: [],
        });
      } else {
        site.draftVersion = draftData;
        // Snapshot to history
        if (site.versionHistory.length > 20) {
          site.versionHistory.shift();
        }
        site.versionHistory.push({
          version: site.versionHistory.length + 1,
          savedAt: now,
          sections,
          globalSettings,
          note: "Auto-saved draft",
        });
      }
      await site.save();
      const obj = site.toObject();
      return { ...obj, id: obj._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose saveDraftWebsite fallback:", err.message);
    }
  }

  // Local fallback
  const list = readJsonFile(WEBSITES_FILE);
  let index = list.findIndex((w) => w.businessId === businessId);
  if (index === -1) {
    const newSite = {
      id: generateId("web"),
      businessId,
      draftVersion: draftData,
      publishedVersion: { sections: [], globalSettings: {}, animationSettings: {} },
      versionHistory: [
        {
          version: 1,
          savedAt: now,
          sections,
          globalSettings,
          note: "Initial draft",
        },
      ],
      createdAt: now,
      updatedAt: now,
    };
    list.push(newSite);
    writeJsonFile(WEBSITES_FILE, list);
    return newSite;
  } else {
    list[index].draftVersion = draftData;
    list[index].updatedAt = now;
    if (!list[index].versionHistory) list[index].versionHistory = [];
    if (list[index].versionHistory.length > 20) list[index].versionHistory.shift();
    list[index].versionHistory.push({
      version: list[index].versionHistory.length + 1,
      savedAt: now,
      sections,
      globalSettings,
      note: "Saved draft",
    });
    writeJsonFile(WEBSITES_FILE, list);
    return list[index];
  }
}

export async function publishWebsite(businessId) {
  const now = new Date().toISOString();
  const site = await getWebsite(businessId);
  if (!site) throw new Error("Website not found to publish");

  const sectionsToPublish = site.draftVersion?.sections || [];
  const globalSettings = site.draftVersion?.globalSettings || {};
  const animationSettings = site.draftVersion?.animationSettings || {};

  const publishedData = {
    sections: sectionsToPublish,
    globalSettings,
    animationSettings,
    publishedAt: now,
  };

  const dbOk = await connectDB();
  if (dbOk) {
    try {
      const updated = await Website.findOneAndUpdate(
        { businessId },
        { publishedVersion: publishedData, updatedAt: now },
        { new: true }
      ).lean();
      if (updated) return { ...updated, id: updated._id.toString() };
    } catch (err) {
      console.warn("[Storage] Mongoose publishWebsite fallback:", err.message);
    }
  }

  const list = readJsonFile(WEBSITES_FILE);
  const index = list.findIndex((w) => w.businessId === businessId);
  if (index !== -1) {
    list[index].publishedVersion = publishedData;
    list[index].updatedAt = now;
    writeJsonFile(WEBSITES_FILE, list);
    return list[index];
  }
  return null;
}

