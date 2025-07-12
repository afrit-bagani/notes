import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

const isProduction = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isProduction ? "/notes/" : "/",
});
