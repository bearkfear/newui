import type { APIEvent } from "@solidjs/start/server";
import { indexablePages } from "../i18n/page-metadata";
import { pageLocales, pageUrl, siteOrigin } from "../lib/site-metadata";

export function GET(event: APIEvent) {
  const origin = siteOrigin(event.request.url);
  const entries = Object.keys(indexablePages).flatMap((path) => {
    const locales = pageLocales(path).map(({ value }) => value);
    const alternateLinks = locales.map(
      (locale) =>
        `<xhtml:link rel="alternate" hreflang="${locale}" href="${pageUrl(path, locale, origin)}"/>`,
    );
    alternateLinks.push(
      `<xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(path, "pt-BR", origin)}"/>`,
    );
    return locales.map(
      (locale) =>
        `  <url><loc>${pageUrl(path, locale, origin)}</loc>${alternateLinks.join("")}</url>`,
    );
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
