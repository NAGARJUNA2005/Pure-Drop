import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({build: {
  minify: 'esbuild',
  cssMinify: true,
  chunkSizeWarningLimit: 1000,
},

  plugins: [react()],
});
