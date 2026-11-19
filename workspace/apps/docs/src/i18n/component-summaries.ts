import type { CatalogComponent } from "../pages/components/component-catalog";
import { controlSummaries } from "./component-control-summaries";
import { displaySummaries } from "./component-display-summaries";
import type { Locales } from "./i18n-types";

export const componentSummaries = { ...controlSummaries, ...displaySummaries } satisfies Record<
  Exclude<CatalogComponent, "Button" | "ButtonGroup">,
  Record<Locales, string>
>;
