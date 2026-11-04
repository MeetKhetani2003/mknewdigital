import mongoose from "mongoose";

let isConnected = false;
let lastAttemptTime = 0;
const RETRY_INTERVAL_MS = 15000; // 15 seconds cooldown between connection attempts

export async function connectDB() {
  if (isConnected) {
    return true;
  }

  const now = Date.now();
  if (now - lastAttemptTime < RETRY_INTERVAL_MS) {
    // Within cooldown period; return false immediately without blocking
    return false;
  }

  lastAttemptTime = now;
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mkdigitalnexus";

  try {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 1000,
    };

    const conn = await mongoose.connect(uri, opts);
    isConnected = !!conn.connections[0].readyState;
    console.log("[DB] Connected to MongoDB successfully.");
    return true;
  } catch (error) {
    isConnected = false;
    // Log gracefully once without crashing the app; storage fallback will activate
    console.warn(`[DB] MongoDB not reachable at ${uri} (${error.message}). Using local persistent storage.`);
    return false;
  }
}

export function isDbConnected() {
  return isConnected;
}
