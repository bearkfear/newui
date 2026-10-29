import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { WorkshopScenes } from "./stories/workshop-scenes";

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
      <p class="nui-catalog-lead">
        A repeatable workflow for exploring, documenting, and checking every new component.
      </p>
      <WorkshopScenes />
      <section class="nui-catalog-section">
        <h2>Explore a component</h2>
        <ol style={{ "padding-inline-start": "24px", "list-style": "decimal" }}>
          <li>Open Documentation for the component overview, props table, and source examples.</li>
          <li>
            Open an individual story and edit Controls. Reset controls to return to its initial
            state.
          </li>
          <li>
            Watch Actions for callback events. The Counter and Keyboard interaction stories run
            assertions through their play functions.
          </li>
          <li>
            Open Accessibility and run the WCAG checks. Review keyboard focus and interaction
            manually as well.
          </li>
        </ol>
      </section>
      <section class="nui-catalog-section">
        <h2>Add the next component</h2>
        <pre>
          <code>
            {
              '// Keep the story beside its component.\nconst meta = {\n  title: "Actions/MyComponent",\n  component: MyComponent,\n  tags: ["autodocs"],\n  args: { children: "Example" },\n} satisfies Meta<typeof MyComponent>;'
            }
          </code>
        </pre>
        <p>
          Provide descriptions, explicit controls for public variants, state examples, and
          reviewable interactions. Add automated assertions only after the user explicitly approves
          the component and authorizes test work. Add an appropriate category; empty categories stay
          out of the sidebar.
        </p>
      </section>
      <aside class="nui-catalog-note">
        Automated accessibility checks cover a subset of accessibility requirements. Always review
        keyboard navigation, meaningful labels, zoom, and actual assistive technology behavior.
      </aside>
    </main>
  ),
};
