import type { Component } from "solid-js";
import type { Locales } from "../../../i18n/i18n-types";

export type LocalizedText = { "pt-BR": string; en: string };
export type ComponentDocumentation = {
  summary: LocalizedText;
  usage: LocalizedText;
  rows: readonly (readonly [string, string, string])[];
  code: string | ((locale: Locales) => string);
  preview: Component<{ locale: Locales }>;
};
