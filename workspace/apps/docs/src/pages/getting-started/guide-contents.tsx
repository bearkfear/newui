import type { Locales } from "../../i18n/i18n-types";
import { PageContents } from "../../layout/page-contents";
import { type GuidePage, guideCopy } from "./getting-started-content";
import { themeGuideCopy } from "./theme-guide-content";
import { tokenReferenceLabels } from "./token-reference-content";

export function GuideContents(props: { page: GuidePage; locale: Locales }) {
  const text = () => guideCopy[props.locale];
  const theme = () => themeGuideCopy[props.locale];
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
          ["token-reference", tokenReferenceLabels[props.locale].title],
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
