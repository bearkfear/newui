import type { Locales } from "./i18n-types";

export const docsLocaleOptions = [
  { label: "🇧🇷 pt-BR", value: "pt-BR", prefix: "", htmlLang: "pt-BR", openGraph: "pt_BR" },
  { label: "🇺🇸 EN", value: "en", prefix: "/en", htmlLang: "en-US", openGraph: "en_US" },
  { label: "🇪🇸 Español", value: "es", prefix: "/es", htmlLang: "es", openGraph: "es_ES" },
  { label: "🇨🇳 简体中文", value: "zh-CN", prefix: "/zh-cn", htmlLang: "zh-CN", openGraph: "zh_CN" },
] as const;

export type DocsLocale = (typeof docsLocaleOptions)[number]["value"];
export type OnboardingLocale = Exclude<DocsLocale, Locales>;

export const onboardingPath = "/getting-started/";
export const onboardingPaths = [
  onboardingPath,
  "/getting-started/installation/",
  "/getting-started/first-component/",
] as const;
export type OnboardingPath = (typeof onboardingPaths)[number];

export function getLocaleOption(locale: DocsLocale) {
  return docsLocaleOptions.find((option) => option.value === locale) ?? docsLocaleOptions[0];
}

export function isDocsLocale(value: string): value is DocsLocale {
  return docsLocaleOptions.some((option) => option.value === value);
}

export function isOnboardingLocale(locale: DocsLocale): locale is OnboardingLocale {
  return locale === "es" || locale === "zh-CN";
}

export function isOnboardingPath(path: string): path is OnboardingPath {
  return onboardingPaths.some((candidate) => candidate === path);
}

export function getFullLocale(locale: DocsLocale): Locales {
  return isOnboardingLocale(locale) ? "en" : locale;
}
