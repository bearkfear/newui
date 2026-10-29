import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Heading } from "../content/heading/heading";
import { Text } from "../content/text/text";

const meta = {
  title: "Foundations/Typography",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const sizes = ["1", "2", "3", "4", "5", "6"] as const;
const metrics = ["3rem", "2.5rem", "2rem", "1.5rem", "1.25rem", "1rem"];

function HeadingScale() {
  return (
    <section class="nui-catalog-section">
      <h2>Heading scale</h2>
      <p>Size changes presentation. The as property controls the document hierarchy.</p>
      <For each={sizes}>
        {(size, index) => (
          <div style={{ display: "grid", gap: "8px", "min-width": "0" }}>
            <code>
              size={size} · {metrics[index()]}
            </code>
            <Heading as="h3" size={size}>
              Design for the everyday.
            </Heading>
          </div>
        )}
      </For>
    </section>
  );
}

function TextScale() {
  return (
    <section class="nui-catalog-section">
      <h2>Text scale</h2>
      <For each={[...sizes, "7"] as const}>
        {(size) => (
          <div style={{ display: "grid", gap: "8px", "min-width": "0" }}>
            <code>size={size}</code>
            <Text size={size}>A shared language for clear interfaces.</Text>
          </div>
        )}
      </For>
      <Text tone="muted">Supporting text retains its semantic neutral color.</Text>
    </section>
  );
}

export const Scale: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Typography</p>
      <h1>One type scale, explicit roles.</h1>
      <p class="nui-catalog-lead">
        Existing Heading and Text sizes now share public metrics. Review wrapping at narrow widths
        and with browser zoom; rem values follow the document font size.
      </p>
      <HeadingScale />
      <TextScale />
      <section class="nui-catalog-section">
        <h2>System font tokens</h2>
        <p style={{ "font-family": "var(--nui-font-sans)" }}>Sans · Aa Bb Cc 0123456789</p>
        <p style={{ "font-family": "var(--nui-font-mono)" }}>Mono · Aa Bb Cc 0123456789</p>
      </section>
    </main>
  ),
};

export const Narrow: Story = {
  ...Scale,
  globals: { viewport: { value: "smallMobile" } },
};
