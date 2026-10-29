import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../actions/button/button";
import { CustomizationSample } from "./stories/customization-sample";

const meta = {
  title: "Foundations/Customization",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const source = `<section
  data-nui-theme="dark"
  style={{
    "--nui-space-unit": "0.3rem",
    "--nui-radius-md": "0.75rem",
    "--nui-radius-xl": "1.5rem",
    "--nui-font-size-base": "1.125rem",
    "--nui-control-height-md": "3rem",
    "--nui-header-gap": "0.5rem",
    "--nui-focus-width": "3px",
    "--nui-focus-offset": "4px",
  }}
>
  {/* Import components from newui and newui/styles.css once. */}
  <Button>Create project</Button>
</section>`;

function CustomizationExample() {
  const [customized, setCustomized] = createSignal(true);
  return (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Customization</p>
      <h1>Public tokens, local decisions.</h1>
      <p class="nui-catalog-lead">
        Compare the same components in independent scopes. Toggle the overrides and open each dialog
        to review inherited metrics in portaled content.
      </p>
      <Button
        variant="outline"
        aria-pressed={customized()}
        onClick={() => setCustomized((value) => !value)}
      >
        {customized() ? "Reset custom metrics" : "Apply custom metrics"}
      </Button>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
          gap: "24px",
        }}
      >
        <CustomizationSample customized={false} theme="light" />
        <CustomizationSample customized={customized()} theme="dark" />
      </div>
      <section class="nui-catalog-section">
        <h2>Scoped token example</h2>
        <pre style={{ "overflow-x": "auto" }}>
          <code>{source}</code>
        </pre>
        <p>
          Choose variants first. Additive classes do not automatically resolve conflicting
          utilities.
        </p>
      </section>
    </main>
  );
}

export const ScopedMetrics: Story = { render: () => <CustomizationExample /> };
export const Mobile: Story = { ...ScopedMetrics, globals: { viewport: { value: "smallMobile" } } };
