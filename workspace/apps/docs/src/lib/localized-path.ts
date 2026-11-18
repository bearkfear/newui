import type { Locales } from "../i18n/i18n-types";

export function getLocaleFromPath(pathname: string): Locales {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}

export function getLocalizedPath(path: string, locale: Locales) {
  const pathname = path.startsWith("/en/") ? path.slice(3) : path === "/en" ? "/" : path;
  if (locale === "pt-BR") return pathname || "/";
  return pathname === "/" ? "/en/" : `/en${pathname}`;
}
