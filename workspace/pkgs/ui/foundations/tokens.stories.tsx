import { createSignal, onMount } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";

const tokens = [
  { name: "primary", purpose: "Primary actions and emphasis" },
  { name: "primary-hover", purpose: "Hovered primary actions" },
  { name: "on-primary", purpose: "Content on primary surfaces" },
  { name: "muted", purpose: "Subtle interactive surfaces" },
];
const meta = { title: "Foundations/Tokens", parameters: { controls: { disable: true } } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function TokenSwatch(props: { name: string; purpose: string }) {
  let swatch!: HTMLDivElement;
  const [value, setValue] = createSignal("");
  onMount(() => {
    const read = () => setValue(getComputedStyle(swatch).getPropertyValue(`--nui-${props.name}`).trim());
    read();
    // Observe the decorator so resolved values follow toolbar theme changes.
    const observer = new MutationObserver(read);
    observer.observe(swatch.closest(".nui-preview")!, { attributes: true, attributeFilter: ["data-nui-theme"] });
    return observer;
  });
  return <figure class="nui-catalog-swatch"><div ref={swatch} class="nui-catalog-swatch-color" style={{ background: `var(--nui-${props.name})` }} /><figcaption><code>--nui-{props.name}</code><span>{props.purpose}</span><code style={{ color: "var(--catalog-muted)" }}>{value()}</code></figcaption></figure>;
}

export const Colors: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Semantic color</p><h1>Color with a purpose.</h1>
      <p class="nui-catalog-lead">A small semantic layer connects components to the active theme. Switch themes to inspect each resolved value.</p>
      <section class="nui-catalog-section"><h2>Component tokens</h2><div class="nui-catalog-grid">{tokens.map((token) => <TokenSwatch {...token} />)}</div></section>
      <section class="nui-catalog-section"><h2>Local customization</h2><p>Override public CSS variables on a container. All descendant components inherit the values.</p><pre><code>{'<div style={{ "--nui-primary": "#15803d",\n              "--nui-primary-hover": "#166534",\n              "--nui-on-primary": "#ffffff" }}>\n  <Button>Custom action</Button>\n</div>'}</code></pre></section>
      <aside class="nui-catalog-note">These library tokens are provisional. Workshop surfaces and typography are presentation styles, not additional public design tokens. Radix scales remain planned.</aside>
    </main>
  ),
};
