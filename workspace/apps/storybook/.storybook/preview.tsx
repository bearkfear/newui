import type { Preview } from "storybook-solidjs-vite";
import { createJSXDecorator } from "storybook-solidjs-vite";
import "../../../pkgs/ui/foundations/styles.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Component color theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    createJSXDecorator((Story, context) => (
      <div
        data-nui-theme={context.globals.theme}
        style={{
          padding: "2rem",
          "min-height": "100vh",
          "font-family": "system-ui, sans-serif",
          background: context.globals.theme === "dark" ? "#0f172a" : "#ffffff",
          color: context.globals.theme === "dark" ? "#e2e8f0" : "#172554",
        }}
      >
        <Story />
      </div>
    )),
  ],
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Getting started", "Foundations", "Layout", "Content", "Actions", "Forms", "Navigation", "Overlays", "Feedback", "Data", "Compositions"],
      },
    },
  },
};

export default preview;
