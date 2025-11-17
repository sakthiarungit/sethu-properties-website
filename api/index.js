import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");

export default function handler(req, res) {
  // Try to serve the requested file
  let filePath = path.join(distPath, req.url);

  // If it's a directory or doesn't have an extension, try index.html
  if (
    !path.extname(filePath) ||
    fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()
  ) {
    filePath = path.join(distPath, "index.html");
  }

  // If file exists, serve it
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);

    // Set content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "application/javascript",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".woff": "font/woff",
      ".woff2": "font/woff2",
      ".ttf": "font/ttf",
    };

    const contentType = contentTypes[ext] || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=3600");

    return res.status(200).send(content);
  }

  // If nothing found, return 404
  res.status(404).send("Not Found");
}
