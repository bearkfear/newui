import type { Locales } from "../i18n/i18n-types";
import { type IndexablePath, indexablePages, missingPageMetadata } from "../i18n/page-metadata";
import { getLocaleFromPath, getLocalizedPath } from "./localized-path";

export const siteName = "NewUI";
export const locales = ["pt-BR", "en"] as const satisfies readonly Locales[];
export const ogLocales = { "pt-BR": "pt_BR", en: "en_US" };

export function siteOrigin(requestUrl: string) {
  return new URL(import.meta.env["VITE_DOCS_SITE_URL"] || requestUrl).origin;
}

export function pageUrl(path: string, locale: Locales, origin: string) {
  return new URL(getLocalizedPath(path, locale), origin).href;
}

export function resolvePageMetadata(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  const base = getLocalizedPath(pathname, "pt-BR");
  const normalized = `${base.replace(/\/+$/, "")}/`;
  const indexed = indexablePages[normalized];
  const path = indexed ? (normalized as IndexablePath) : undefined;
  const entry = indexed?.[locale] ?? missingPageMetadata[locale];

  return {
    path,
    locale,
    title: path === "/" ? entry.title : `${entry.title} | ${siteName}`,
    description: entry.description,
  };
}

export function breadcrumbs(path: IndexablePath, locale: Locales, origin: string) {
  const paths: IndexablePath[] = ["/"];
  if (path.startsWith("/getting-started/") && path !== "/getting-started/")
    paths.push("/getting-started/");
  if (path.startsWith("/components/") && path !== "/components/") paths.push("/components/");
  paths.push(path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: paths.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item === "/" ? siteName : (indexablePages[item]?.[locale].title ?? siteName),
      item: pageUrl(item, locale, origin),
    })),
  };
}
