import type { Meta, StoryObj } from "storybook-solidjs-vite";

const tokens = ["primary", "primary-hover", "on-primary", "muted"];
const meta = { title: "Foundations/Tokens" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <section style={{ display: "grid", gap: "1rem", "max-width": "40rem" }}>
      <h1 style={{ "font-size": "1.5rem", "font-weight": "600" }}>Color tokens</h1>
      <p>These initial colors are provisional. Radix color scales will be integrated later. Switch the toolbar theme to compare values.</p>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "1.5rem" }}>
        {tokens.map((token) => (
          <figure style={{ display: "grid", gap: "0.5rem" }}>
            <div style={{ width: "8rem", height: "5rem", background: `var(--nui-${token})`, border: "1px solid #94a3b8", "border-radius": "0.5rem" }} />
            <figcaption><code>--nui-{token}</code></figcaption>
          </figure>
        ))}
      </div>
    </section>
  ),
};
