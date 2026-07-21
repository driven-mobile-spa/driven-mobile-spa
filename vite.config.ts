import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/driven-mobile-spa/" : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
}));
