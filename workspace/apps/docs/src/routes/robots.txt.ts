import type { APIEvent } from "@solidjs/start/server";
import { siteOrigin } from "../lib/site-metadata";

export function GET(event: APIEvent) {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", siteOrigin(event.request.url))}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
