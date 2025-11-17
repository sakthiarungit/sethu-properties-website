import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");

export default function handler(req, res) {
  // Remove query parameters from URL
  const url = req.url.split("?")[0];

  // Try to serve the requested file
  let filePath = path.join(distPath, url);

  // Normalize path to prevent directory traversal
  filePath = path.normalize(filePath);
  if (!filePath.startsWith(distPath)) {
    return res.status(403).send("Forbidden");
  }

  // If it's a directory or doesn't have an extension, try index.html
  if (
    !path.extname(filePath) ||
    (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory())
  ) {
    filePath = path.join(distPath, "index.html");
  }

  // If file exists, serve it
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath);

      // Set content type based on file extension
      const ext = path.extname(filePath).toLowerCase();
      const contentTypes = {
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "application/javascript; charset=utf-8",
        ".mjs": "application/javascript; charset=utf-8",
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
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

      return res.status(200).send(content);
    } catch (err) {
      console.error("Error serving file:", err);
      return res.status(500).send("Internal Server Error");
    }
  }

  // If nothing found, return 404
  res.status(404).send("Not Found");
}
