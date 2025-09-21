import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: "client", // ✅ root is project root
  build: {
    outDir: "dist/spa", // ✅ relative to project root
    emptyOutDir: true, // clean folder before building
  },
  plugins: [react()], // remove Express plugin for build
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
});
