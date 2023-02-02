import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
  watch: {
    usePolling: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        // target: "https://mrphonex-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
