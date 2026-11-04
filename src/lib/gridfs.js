import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { Readable } from "stream";

let gridfsBucket = null;

export async function getGridFSBucket() {
  await connectDB();
  if (!mongoose.connection.db) {
    throw new Error("MongoDB connection not ready for GridFS");
  }
  if (!gridfsBucket) {
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "businessMedia",
    });
  }
  return gridfsBucket;
}

export async function uploadToGridFS({ buffer, filename, contentType, businessId, metadata = {} }) {
  const bucket = await getGridFSBucket();

  return new Promise((resolve, reject) => {
    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);

    const uploadStream = bucket.openUploadStream(filename, {
      contentType: contentType || "image/jpeg",
      metadata: {
        businessId: businessId || "general",
        uploadedAt: new Date(),
        ...metadata,
      },
    });

    uploadStream.on("finish", () => {
      const fileId = uploadStream.id ? uploadStream.id.toString() : "";
      resolve({
        id: fileId,
        filename: filename,
        contentType: contentType,
        length: buffer.length,
        uploadDate: new Date(),
        url: `/api/business/media/gridfs/${fileId}`,
      });
    });

    uploadStream.on("error", (err) => {
      reject(err);
    });

    readableStream.pipe(uploadStream);
  });
}

export async function getGridFSFile(id) {
  const bucket = await getGridFSBucket();
  const objId = new mongoose.Types.ObjectId(id);
  const files = await bucket.find({ _id: objId }).toArray();
  if (!files || files.length === 0) return null;
  return files[0];
}

export async function openGridFSDownloadStream(id) {
  const bucket = await getGridFSBucket();
  const objId = new mongoose.Types.ObjectId(id);
  return bucket.openDownloadStream(objId);
}

export async function getGridFSFilesByBusiness(businessId) {
  const bucket = await getGridFSBucket();
  const query = businessId
    ? {
        $or: [
          { "metadata.businessId": businessId },
          { "metadata.slug": businessId },
        ],
      }
    : {};
  const files = await bucket.find(query).sort({ uploadDate: -1 }).toArray();
  return files.map((f) => ({
    id: f._id.toString(),
    filename: f.filename,
    contentType: f.contentType,
    length: f.length,
    uploadDate: f.uploadDate,
    businessId: f.metadata?.businessId,
    slug: f.metadata?.slug,
    title: f.metadata?.title || f.filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
    category: f.metadata?.category || "Sacred Healing",
    url: `/api/business/media/gridfs/${f._id.toString()}`,
  }));
}

export async function deleteGridFSFile(id) {
  const bucket = await getGridFSBucket();
  const objId = new mongoose.Types.ObjectId(id);
  await bucket.delete(objId);
  return true;
}
