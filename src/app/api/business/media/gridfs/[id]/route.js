import { NextResponse } from "next/server";
import { getGridFSFile, openGridFSDownloadStream, deleteGridFSFile } from "@/lib/gridfs";
import { Readable } from "stream";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const file = await getGridFSFile(id);

    if (!file) {
      return new NextResponse("File not found in GridFS", { status: 404 });
    }

    const downloadStream = await openGridFSDownloadStream(id);

    // Convert Node Readable Stream to Web ReadableStream for Next.js response
    const webStream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => {
          controller.enqueue(chunk);
        });
        downloadStream.on("end", () => {
          controller.close();
        });
        downloadStream.on("error", (err) => {
          controller.error(err);
        });
      },
    });

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Type": file.contentType || "image/jpeg",
        "Content-Length": file.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    console.error("GridFS Stream Error:", err);
    return new NextResponse("Error streaming file: " + err.message, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await deleteGridFSFile(id);
    return NextResponse.json({ success: true, message: "File deleted from GridFS" });
  } catch (err) {
    console.error("GridFS Delete Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

