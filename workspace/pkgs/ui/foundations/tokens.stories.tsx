import type { JSX } from "solid-js";
import { createSignal, onCleanup, onMount } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../actions/button/button";

const tokens = [
  { name: "background", purpose: "Slate 1 · app background" },
  { name: "surface", purpose: "Slate 2 · subtle background" },
  { name: "border", purpose: "Slate 6 · separators" },
  { name: "control-border", purpose: "Slate 7 · interactive border" },
  { name: "control-border-hover", purpose: "Slate 8 · hovered border" },
  { name: "muted-foreground", purpose: "Slate 11 · supporting text" },
  { name: "foreground", purpose: "Slate 12 · high-contrast text" },
  { name: "disabled-background", purpose: "Slate 3 · disabled surface" },
  { name: "disabled-border", purpose: "Slate 6 · disabled border" },
  { name: "disabled-foreground", purpose: "Slate 8 · disabled text" },
];
const tones = ["primary", "neutral", "info", "success", "warning", "danger"] as const;
const roles = [
  "App background",
  "Subtle background",
  "Component background",
  "Hover background",
  "Active / selected background",
  "Separator",
  "Control border",
  "Hover border / focus ring",
  "Solid background",
  "Solid hover",
  "Supporting text",
  "High-contrast text",
];
const meta = {
  title: "Foundations/Tokens",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function TokenSwatch(props: { name: string; purpose: string }) {
  let swatch!: HTMLDivElement;
  const [value, setValue] = createSignal("");
  onMount(() => {
    const read = () => setValue(getComputedStyle(swatch).backgroundColor);
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-nui-theme", "style"],
    });
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    preference.addEventListener("change", read);
    onCleanup(() => {
      observer.disconnect();
      preference.removeEventListener("change", read);
    });
  });
  return (
    <figure class="nui-catalog-swatch">
      <div
        ref={swatch}
        class="nui-catalog-swatch-color"
        style={{ background: `var(--nui-${props.name})` }}
      />
      <figcaption>
        <code>--nui-{props.name}</code>
        <span>{props.purpose}</span>
        <code style={{ color: "var(--nui-muted-foreground)" }}>{value()}</code>
      </figcaption>
    </figure>
  );
}

export const Colors: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Semantic color</p>
      <h1>Color with a purpose.</h1>
      <p class="nui-catalog-lead">
        Official Radix Colors scales assign a purpose to every step. The same semantic tokens
        resolve to light or dark values automatically.
      </p>
      <section class="nui-catalog-section">
        <h2>Neutral roles</h2>
        <div class="nui-catalog-grid">
          {tokens.map((token) => (
            <TokenSwatch {...token} />
          ))}
        </div>
      </section>
      <section class="nui-catalog-section">
        <h2>Action roles</h2>
        <div class="nui-catalog-grid">
          {[
            "soft",
            "soft-hover",
            "soft-active",
            "border",
            "border-hover",
            "text",
            "text-strong",
          ].map((role) => (
            <TokenSwatch name={`primary-${role}`} purpose={`Primary ${role}`} />
          ))}
        </div>
      </section>
      <aside class="nui-catalog-note">
        System follows the operating system through CSS color-scheme and light-dark(). Explicit
        light and dark themes also work inside one another. Disabled controls use neutral tokens
        instead of opacity.
      </aside>
    </main>
  ),
};
export const Scales: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "32px" }}>
      {tones.map((tone) => (
        <section>
          <h2>{tone}</h2>
          <div
            style={{
              display: "grid",
              "grid-template-columns": "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
            }}
          >
            {roles.map((purpose, index) => (
              <TokenSwatch name={`${tone}-${index + 1}`} purpose={`${index + 1} · ${purpose}`} />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
function ThemeSample(props: { theme: "light" | "dark" | "system"; children?: JSX.Element }) {
  return (
    <section
      data-nui-theme={props.theme}
      style={{
        padding: "24px",
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        border: "1px solid var(--nui-border)",
        "border-radius": "12px",
        display: "grid",
        gap: "16px",
      }}
    >
      <h2>{props.theme} theme</h2>
      <p style={{ color: "var(--nui-muted-foreground)" }}>
        The nearest color scheme selects the matching Radix values.
      </p>
      <div style={{ display: "flex", gap: "12px", "flex-wrap": "wrap" }}>
        <Button>Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button disabled>Disabled</Button>
      </div>
      {props.children}
    </section>
  );
}
export const NestedThemes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      <ThemeSample theme="dark">
        <ThemeSample theme="light">
          <ThemeSample theme="system" />
        </ThemeSample>
      </ThemeSample>
      <ThemeSample theme="light">
        <ThemeSample theme="dark" />
      </ThemeSample>
    </div>
  ),
};
export const SystemTheme: Story = { render: () => <ThemeSample theme="system" /> };
export const States: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      {tones.map((tone) => (
        <section>
          <h2>{tone}</h2>
          <div style={{ display: "flex", gap: "12px", "flex-wrap": "wrap" }}>
            <Button tone={tone}>Solid · 9 / 10</Button>
            <Button tone={tone} variant="soft">
              Soft · 3 / 4 / 5
            </Button>
            <Button tone={tone} variant="outline">
              Border · 7 / 8
            </Button>
            <Button tone={tone} variant="ghost">
              Ghost
            </Button>
            <Button tone={tone} variant="link">
              Text · 11 / 12
            </Button>
            <Button tone={tone} variant="soft" aria-pressed="true">
              Selected · 5
            </Button>
            <Button tone={tone} disabled>
              Disabled · neutral
            </Button>
          </div>
        </section>
      ))}
    </div>
  ),
};
