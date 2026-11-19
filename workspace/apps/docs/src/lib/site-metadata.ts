import { type DocsLocale, docsLocaleOptions } from "../i18n/docs-locales";
import { type IndexablePath, indexablePages, missingPageMetadata } from "../i18n/page-metadata";
import { getCanonicalPath, getLocaleFromPath, getLocalizedPath } from "./localized-path";

export const siteName = "NewUI";
export function pageLocales(path: string) {
  return docsLocaleOptions.filter(({ value }) => indexablePages[path]?.[value]);
}

export function siteOrigin(requestUrl: string) {
  return new URL(import.meta.env["VITE_DOCS_SITE_URL"] || requestUrl).origin;
}

export function pageUrl(path: string, locale: DocsLocale, origin: string) {
  return new URL(getLocalizedPath(path, locale), origin).href;
}

export function resolvePageMetadata(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  const normalized = getCanonicalPath(pathname);
  const indexed = indexablePages[normalized]?.[locale];
  const path = indexed ? (normalized as IndexablePath) : undefined;
  const entry = indexed ?? missingPageMetadata[locale];

  return {
    path,
    locale,
    title: path === "/" ? entry.title : `${entry.title} | ${siteName}`,
    description: entry.description,
  };
}

export function breadcrumbs(path: IndexablePath, locale: DocsLocale, origin: string) {
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
      name: item === "/" ? siteName : (indexablePages[item]?.[locale]?.title ?? siteName),
      item: pageUrl(item, locale, origin),
    })),
  };
}
