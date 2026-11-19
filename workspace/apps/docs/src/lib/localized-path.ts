import {
  type DocsLocale,
  docsLocaleOptions,
  getLocaleOption,
  isOnboardingLocale,
  isOnboardingPath,
  onboardingPath,
} from "../i18n/docs-locales";

export function getLocaleFromPath(pathname: string): DocsLocale {
  return (
    docsLocaleOptions.find(
      ({ prefix }) => prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`)),
    )?.value ?? "pt-BR"
  );
}

export function getBasePath(path: string) {
  const { prefix } = getLocaleOption(getLocaleFromPath(path));
  return path.slice(prefix.length) || "/";
}

export function getCanonicalPath(path: string) {
  return `${getBasePath(path).replace(/\/+$/, "")}/`;
}

export function getLocalizedPath(path: string, locale: DocsLocale) {
  const pathname = getBasePath(path);
  if (isOnboardingLocale(locale)) {
    const normalized = getCanonicalPath(path);
    return isOnboardingPath(normalized)
      ? `${getLocaleOption(locale).prefix}${normalized}`
      : `/en${pathname}`;
  }
  return `${getLocaleOption(locale).prefix}${pathname}`;
}

export function getLanguageSwitchPath(path: string, locale: DocsLocale) {
  const normalized = getCanonicalPath(path);
  return isOnboardingLocale(locale) && !isOnboardingPath(normalized)
    ? getLocalizedPath(onboardingPath, locale)
    : getLocalizedPath(path, locale);
}
