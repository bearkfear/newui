import { solidStart } from "@solidjs/start/config";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  resolve: { dedupe: ["@solidjs/router", "solid-js"] },
  plugins: [
    solidStart(),
    mode === "vercel" &&
      nitro({ preset: "vercel", vercel: { functions: { runtime: "nodejs24.x" } } }),
  ],
}));
