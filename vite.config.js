import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/its.agency/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});