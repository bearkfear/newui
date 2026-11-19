import { type DocsLocale, getFullLocale } from "../../i18n/docs-locales";
import { PageContents } from "../../layout/page-contents";
import type { GuidePage } from "./getting-started-content";
import { getGuideCopy } from "./onboarding-guide-copy";
import { themeGuideCopy } from "./theme-guide-content";
import { tokenReferenceLabels } from "./token-reference-content";

export function GuideContents(props: { page: GuidePage; locale: DocsLocale }) {
  const text = () => getGuideCopy(props.locale);
  const fullLocale = () => getFullLocale(props.locale);
  const theme = () => themeGuideCopy[fullLocale()];
  const entries = () =>
    (
      ({
        overview: [
          ["prerequisites", text().prerequisites],
          ["choose-styles", text().chooseStyles],
        ],
        installation: [
          ["install-package", text().installPackage],
          ["import-styles", text().importStyles],
          ["agent-skill", text().agentSkill],
        ],
        "first-component": [
          ["example", text().example],
          ["preview", text().preview],
        ],
        "themes-and-tokens": [
          ["concepts", theme().concepts],
          ["color-modes", theme().modes],
          ["brand", theme().brand],
          ["global-tokens", theme().global],
          ["token-reference", tokenReferenceLabels[fullLocale()].title],
        ],
        tailwind: [
          ["build-dependencies", text().tailwindDependencies],
          ["configure-postcss", text().configurePostcss],
          ["select-styles", text().selectStyles],
        ],
      }) as const
    )[props.page];

  return <PageContents label={text().onThisPage} entries={entries()} />;
}
