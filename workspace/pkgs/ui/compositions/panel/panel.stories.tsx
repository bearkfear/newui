import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Panel } from "./panel";
import { PanelExample } from "./stories/panel-example";

const meta = {
  title: "Compositions/Panel",
  component: Panel.Root,
  tags: ["autodocs"],
  args: { tone: "default" },
  argTypes: { tone: { control: "inline-radio", options: ["default", "subtle"] } },
  parameters: {
    docs: {
      description: {
        component:
          "A named section for a header, search or filters, content, compact lists, and footer actions. Compose native elements and existing controls inside its parts. Root does not own filtering or selection: the application does. This example supports search, status filtering, selection, and reset with local Solid signals.",
      },
    },
  },
  render: (args) => (
    <div style={{ "max-width": "36rem" }}>
      <PanelExample {...args} />
    </div>
  ),
} satisfies Meta<typeof Panel.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Subtle: Story = { args: { tone: "subtle" } };
export const ContentOnly: Story = {
  render: (args) => (
    <Panel.Root {...args} aria-label="Release notes">
      <Panel.Header>
        <Panel.Title>Release notes</Panel.Title>
      </Panel.Header>
      <Panel.Body>
        Use Panel.Body for free-form content when a compact list is unnecessary.
      </Panel.Body>
    </Panel.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
