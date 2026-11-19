import { solidStart } from "@solidjs/start/config";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { dedupe: ["@solidjs/router", "solid-js"] },
  plugins: [solidStart()],
});
