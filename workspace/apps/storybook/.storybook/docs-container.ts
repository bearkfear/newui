import type { DocsContainerProps } from "@storybook/addon-docs/blocks";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import type { PropsWithChildren } from "react";
import { createElement, useEffect, useState } from "react";
import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { catalogTheme, resolveCatalogTheme } from "./theme";

// Storybook Docs renders with React even when the stories use Solid.
export function CatalogDocsContainer({ context, children }: PropsWithChildren<DocsContainerProps>) {
  const [preference, setPreference] = useState<unknown>(() => {
    const story = context.componentStories()[0];
    return story ? context.getStoryContext(story)["globals"]["theme"] : "system";
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystem = () => setSystemDark(media.matches);
    const updateGlobals = ({ globals }: { globals: Record<string, unknown> }) =>
      setPreference(globals["theme"]);
    updateSystem();
    media.addEventListener("change", updateSystem);
    context.channel.on(GLOBALS_UPDATED, updateGlobals);
    return () => {
      media.removeEventListener("change", updateSystem);
      context.channel.off(GLOBALS_UPDATED, updateGlobals);
    };
  }, [context.channel]);

  const theme = resolveCatalogTheme(preference, systemDark);
  return createElement(
    "div",
    { className: "nui-docs", "data-nui-theme": theme },
    createElement(DocsContainer, { context, theme: catalogTheme(theme) }, children),
  );
}
