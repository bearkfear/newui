import type { Meta, StoryObj } from "storybook-solidjs-vite";

const meta = {
  title: "Getting started/Workshop guide",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Getting started / Workshop guide</p>
      <h1>Your component workbench.</h1>
      <p class="nui-catalog-lead">A repeatable workflow for exploring, documenting, and checking every new component.</p>
      <section class="nui-catalog-section"><h2>Set the scene</h2><div class="nui-catalog-grid">
        <article class="nui-catalog-card"><h3>Color & direction</h3><p>Theme follows your system by default. Choose light or dark explicitly; the workshop follows too. Switch LTR / RTL to inspect reading direction.</p></article>
        <article class="nui-catalog-card"><h3>Space & viewport</h3><p>Use comfortable, compact, or flush canvas padding. Viewports cover 320px and 390px phones, a tablet, and a desktop. Padding does not change component sizes.</p></article>
        <article class="nui-catalog-card"><h3>Motion & inspection</h3><p>Respect system motion preferences or force reduced motion in the preview. Use Storybook's measure, outlines, zoom, and vision simulators to inspect the result.</p></article>
      </div></section>
      <section class="nui-catalog-section"><h2>Explore a component</h2><ol style={{ "padding-inline-start": "24px", "list-style": "decimal" }}><li>Open Documentation for the component overview, props table, and source examples.</li><li>Open an individual story and edit Controls. Reset controls to return to its initial state.</li><li>Watch Actions for callback events. The Counter and Keyboard interaction stories run assertions through their play functions.</li><li>Open Accessibility and run the WCAG checks. Review keyboard focus and interaction manually as well.</li></ol></section>
      <section class="nui-catalog-section"><h2>Add the next component</h2><pre><code>{'// Keep the story beside its component.\nconst meta = {\n  title: "Actions/MyComponent",\n  component: MyComponent,\n  tags: ["autodocs"],\n  args: { children: "Example" },\n} satisfies Meta<typeof MyComponent>;'}</code></pre><p>Provide descriptions, explicit controls for public variants, state examples, and meaningful interaction assertions. Add an appropriate category; empty categories stay out of the sidebar.</p></section>
      <aside class="nui-catalog-note">Automated accessibility checks cover a subset of accessibility requirements. Always review keyboard navigation, meaningful labels, zoom, and actual assistive technology behavior.</aside>
    </main>
  ),
};
