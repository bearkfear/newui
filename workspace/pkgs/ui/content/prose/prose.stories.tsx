import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Prose } from "./prose";

const meta = {
  title: "Content/Prose",
  component: Prose,
  tags: ["autodocs"],
  args: { size: "md" },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
  parameters: { docs: { description: { component: "Scoped styles for native editorial HTML with a 65ch reading measure. Accepts rendered JSX; it does not parse Markdown or sanitize HTML. Avoid nesting interactive UI components inside editorial content." } } },
  render: (args) => <Prose {...args}><h1>Content deserves a rhythm</h1><p>Prose styles native HTML from editorial content. It restores the hierarchy, lists, and spacing removed by the global reset.</p><h2>Start with readable content</h2><p>Use <strong>semantic HTML</strong> and <a href="#publishing">descriptive links</a>. Inline <code>tokens</code> use the same theme as the rest of the page.</p><ul><li>Choose a clear heading hierarchy.</li><li>Keep related ideas together.<ol><li>Write the content.</li><li>Review its presentation.</li></ol></li></ul><blockquote><p>Typography should help the reader follow the content.</p></blockquote><h3 id="publishing">Publishing</h3><pre><code>{'import { Prose } from "newui";\nimport "newui/styles.css";'}</code></pre><table><caption>Content formats</caption><thead><tr><th scope="col">Format</th><th scope="col">Rendering</th></tr></thead><tbody><tr><td>Markdown</td><td>Bring your own renderer</td></tr><tr><td>CMS</td><td>Sanitize HTML in the application</td></tr></tbody></table><hr /><p>Prose provides presentation. Parsing and HTML sanitization belong to the consuming application.</p></Prose>,
} satisfies Meta<typeof Prose>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
