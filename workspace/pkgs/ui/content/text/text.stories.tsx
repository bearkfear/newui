import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { TypographySizeLabel, textSizes } from "../stories/typography-scale";
import { Text } from "./text";

const meta = {
  title: "Content/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    as: "p",
    size: "6",
    tone: "default",
    children: "Build readable interfaces with consistent typography and semantic colors.",
  },
  argTypes: {
    as: { control: "select", options: ["p", "span", "div"] },
    size: {
      description: "Visual size; 1 is the largest. Independent of the HTML element.",
      control: "inline-radio",
      options: ["1", "2", "3", "4", "5", "6", "7"],
    },
    tone: { control: "inline-radio", options: ["default", "muted"] },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Text with seven visual sizes (1 is largest, 7 is smallest) and semantic tone variants. Size defaults to 6 (1rem). Defaults to a paragraph. Use as=span for inline text; subtitles compose Text with Heading.",
      },
    },
  },
  render: (args) => <Text {...args} />,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      {textSizes.map((step) => (
        <div>
          <TypographySizeLabel {...step} />
          <Text size={step.size}>Readable text at every size.</Text>
        </div>
      ))}
    </div>
  ),
};

export const Muted: Story = { args: { tone: "muted" } };
export const Inline: Story = {
  render: () => (
    <p>
      Keep{" "}
      <Text as="span" size="6" tone="muted">
        supporting text
      </Text>{" "}
      inside the same paragraph.
    </p>
  ),
};
