// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Für Custom Domain am Apex (zktagents.com)
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Baue direkt ins Pages-Verzeichnis
  build: {
    outDir: "docs",       // GitHub Pages → Source: main / docs
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true,
  },
}));
