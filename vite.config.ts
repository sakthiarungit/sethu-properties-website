import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "copy-assets",
      apply: "build",
      enforce: "post",
      async writeBundle() {
        const srcDir = path.resolve(import.meta.dirname, "attached_assets/generated_images");
        const destDir = path.resolve(import.meta.dirname, "dist");

        if (fs.existsSync(srcDir)) {
          const files = fs.readdirSync(srcDir);
          files.forEach((file) => {
            const src = path.join(srcDir, file);
            const dest = path.join(destDir, file);
            fs.copyFileSync(src, dest);
          });
          console.log(`✓ Copied ${files.length} asset files to dist`);
        }
      },
    },
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    copyPublicDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
