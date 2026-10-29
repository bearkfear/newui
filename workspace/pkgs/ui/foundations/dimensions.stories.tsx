import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../actions/button/button";
import { Card } from "../content/card/card";

const meta = {
  title: "Foundations/Dimensions",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const row = { display: "flex", "flex-wrap": "wrap", gap: "16px", "align-items": "center" } as const;

function SpacingScale() {
  return (
    <section class="nui-catalog-section">
      <h2>Spacing unit · 0.25rem</h2>
      <For each={[1, 2, 3, 4, 5, 6, 8, 12]}>
        {(step) => (
          <div style={{ display: "flex", "align-items": "center", gap: "16px" }}>
            <code style={{ width: "8rem", "flex-shrink": "0" }}>{step} × unit</code>
            <span
              aria-hidden="true"
              style={{
                width: `calc(var(--nui-space-unit) * ${step})`,
                height: "16px",
                background: "var(--nui-primary-text)",
              }}
            />
          </div>
        )}
      </For>
    </section>
  );
}

function RadiusScale() {
  return (
    <section class="nui-catalog-section">
      <h2>Radius scale</h2>
      <div style={row}>
        <For each={["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]}>
          {(size) => (
            <figure style={{ display: "grid", gap: "8px", "justify-items": "center" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "64px",
                  height: "64px",
                  background: "var(--nui-primary-soft)",
                  border: "1px solid var(--nui-primary-border)",
                  "border-radius": `var(--nui-radius-${size})`,
                }}
              />
              <figcaption>{size}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </section>
  );
}

export const Scale: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Dimensions</p>
      <h1>Space, controls, and surfaces.</h1>
      <SpacingScale />
      <RadiusScale />
      <section class="nui-catalog-section">
        <h2>Control heights</h2>
        <div style={row}>
          <Button size="xs">xs · 24px</Button>
          <Button size="sm">sm · 32px</Button>
          <Button size="md">md · 40px</Button>
          <Button size="lg">lg · 48px</Button>
        </div>
        <p>Default rem equivalents at a 16px root. Responsive buttons use the next smaller size.</p>
      </section>
      <section class="nui-catalog-section">
        <h2>Surface roles</h2>
        <div style={{ display: "grid", gap: "24px" }}>
          <For each={["outline", "soft", "elevated"] as const}>
            {(variant) => (
              <Card.Root variant={variant}>
                <Card.Header>
                  <Card.Title>{variant} surface</Card.Title>
                  <Card.Description>Shared header gap; independent body spacing.</Card.Description>
                </Card.Header>
                <Card.Content>Use elevation according to the content's role.</Card.Content>
              </Card.Root>
            )}
          </For>
        </div>
      </section>
    </main>
  ),
};
