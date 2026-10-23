import type { Meta, StoryObj } from "storybook-solidjs-vite";

const meta = { title: "Getting started/Introduction" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <article style={{ display: "grid", gap: "1rem", "max-width": "44rem", "line-height": "1.6" }}>
      <h1 style={{ "font-size": "2rem", "font-weight": "700" }}>newui</h1>
      <p>A SolidJS UI library with its own visual identity. This Storybook is the component development catalog; the public website is still to be defined.</p>
      <p>Start with Actions / Button to explore variants, sizes, disabled state, reactivity, and token customization. Use the theme toolbar to compare light and dark appearances.</p>
      <p>Components, recipes, documentation, and stories live together inside the workspace. Other catalog areas will appear as their components are implemented.</p>
      <p>The planned npm package includes compiled CSS with global Preflight and nui-prefixed utilities:</p>
      <pre><code>{'import { Button } from "newui";\nimport "newui/styles.css";'}</code></pre>
      <p>The package is not published yet. The initial colors are provisional and Ark integration remains planned.</p>
    </article>
  ),
};
