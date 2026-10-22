import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// `base: "./"` keeps asset paths relative, so the build works from any
// host or sub-path (including GitHub Pages at /avl/).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
