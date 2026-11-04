import type { Preview } from "storybook-solidjs-vite";
import { createJSXDecorator } from "storybook-solidjs-vite";
import { CatalogDocsContainer } from "./docs-container";
import "./library.css";
import "./preview.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Color scheme for the workshop and components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        dynamicTitle: true,
        items: [
          { value: "system", title: "System theme", icon: "browser" },
          { value: "light", title: "Light theme", icon: "sun" },
          { value: "dark", title: "Dark theme", icon: "moon" },
        ],
      },
    },
    spacing: {
      description: "Canvas padding; does not change component sizes",
      toolbar: {
        title: "Canvas spacing",
        icon: "component",
        dynamicTitle: true,
        items: [
          { value: "comfortable", title: "Comfortable canvas" },
          { value: "compact", title: "Compact canvas" },
          { value: "flush", title: "Flush canvas" },
        ],
      },
    },
    motion: {
      description: "Animation preference inside the component preview",
      toolbar: {
        title: "Motion",
        icon: "play",
        dynamicTitle: true,
        items: [
          { value: "system", title: "System motion" },
          { value: "reduced", title: "Reduced motion" },
        ],
      },
    },
  },
  initialGlobals: { theme: "system", spacing: "comfortable", motion: "system" },
  decorators: [
    createJSXDecorator((Story, context) => {
      return (
        <div
          class="nui-preview"
          data-nui-theme={context.globals["theme"]}
          data-spacing={context.globals["spacing"]}
          data-motion={context.globals["motion"]}
          data-view={context.viewMode}
        >
          <Story />
        </div>
      );
    }),
  ],
  parameters: {
    layout: "fullscreen",
    controls: {
      expanded: true,
      sort: "requiredFirst",
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    actions: { disable: false },
    docs: { container: CatalogDocsContainer, codePanel: true, source: { type: "code" }, toc: true },
    a11y: {
      test: "error",
      options: { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } },
    },
    backgrounds: { disable: true },
    viewport: {
      options: {
        mobile: {
          name: "Mobile · 390",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
        smallMobile: {
          name: "Small mobile · 320",
          styles: { width: "320px", height: "568px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet · 768",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop · 1440",
          styles: { width: "1440px", height: "900px" },
          type: "desktop",
        },
      },
    },
    options: {
      storySort: {
        order: [
          "Getting started",
          ["Introduction", "Workshop guide"],
          "Foundations",
          "Layout",
          "Content",
          "Actions",
          "Forms",
          "Navigation",
          "Overlays",
          "Feedback",
          "Data",
          "Compositions",
        ],
      },
    },
  },
};

export default preview;
