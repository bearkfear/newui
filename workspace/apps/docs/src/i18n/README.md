# Documentation localization

The docs app uses `typesafe-i18n` with Brazilian Portuguese (`pt-BR`) as the base locale and English (`en`) as a required translation. Locale files live in `src/i18n/<locale>/index.ts`. Keep all user-facing copy here, grouped by page or UI context (for example, `home`, `gettingStarted`, `navigation`, or `settings`). Use keys that describe meaning rather than placement or presentation.

When adding or changing a message:
1. Update the base locale in `pt-BR/index.ts` first.
2. Add the matching translation in `en/index.ts`; the generated types enforce key and parameter parity.
3. Run `bun run typesafe-i18n --no-watch` from `apps/docs` to regenerate the Solid adapter and translation types.
4. Resolve the locale from the URL. Portuguese uses the root path and English uses `/en/`. Spanish (`/es/`) and Simplified Chinese (`/zh-cn/`) translate the onboarding guides and the shared shell through `onboarding-shell-copy.ts` and `pages/getting-started/onboarding-guide-copy.ts`. Keep locale resolution request-scoped for SSR.

Use `Intl` formatters with an explicit locale for dates, numbers, and currency. Keep source content and route slugs separate from translated UI labels unless a route is intentionally localized.
