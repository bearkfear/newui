import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Heading } from "../heading/heading";
import { Text } from "../text/text";
import { Separator } from "./separator";

const meta = {
  title: "Content/Separator",
  component: Separator,
  tags: ["autodocs"],
  args: { orientation: "horizontal", decorative: false },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    decorative: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A margin-free divider using the Radix border token. Semantic separators render hr with the matching orientation. Decorative separators use aria-hidden and role none. The surrounding layout owns spacing; vertical separators stretch in a flex row or accept an explicit height.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        "flex-direction": args.orientation === "vertical" ? "row" : "column",
        gap: "16px",
        "max-width": "28rem",
      }}
    >
      <Text size="6">Project overview</Text>
      <Separator {...args} />
      <Text size="6">Recent activity</Text>
    </div>
  ),
} satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const Decorative: Story = { args: { decorative: true } };
export const InContent: Story = {
  render: () => (
    <section
      style={{ display: "grid", gap: "20px", "max-width": "28rem" }}
      aria-label="Project details"
    >
      <Heading size="5">Project details</Heading>
      <Text size="6">A shared workspace for your team.</Text>
      <Separator />
      <Heading as="h3" size="6">
        Latest update
      </Heading>
      <Text size="6">The first milestone is ready for review.</Text>
    </section>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
