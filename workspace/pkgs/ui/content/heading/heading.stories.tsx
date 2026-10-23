import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { headingSizes, TypographySizeLabel } from "../stories/typography-scale";
import { Heading } from "./heading";

const meta = {
  title: "Content/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: { as: "h2", size: "3", children: "A clear hierarchy for every page" },
  argTypes: {
    as: { control: "select", options: ["h1", "h2", "h3", "h4", "h5", "h6"] },
    size: {
      description: "Visual size; 1 is the largest. Independent of the HTML element.",
      control: "inline-radio",
      options: ["1", "2", "3", "4", "5", "6"],
    },
    children: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Choose the semantic heading level with as independently of visual size. Sizes 1–6 run from 3rem to 1rem. Defaults to h2 and size 3. Set the level to match the document outline.",
      },
    },
  },
  render: (args) => <Heading {...args} />,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      {headingSizes.map((step) => (
        <div>
          <TypographySizeLabel {...step} />
          <Heading as="h2" size={step.size}>
            A clear hierarchy
          </Heading>
        </div>
      ))}
    </div>
  ),
};

export const SemanticLevel: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Heading levels define the document outline. Visual sizes are independent: this h2 is visually larger than the h1.",
      },
    },
  },
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      <Heading as="h1" size="5">
        Page title · h1, size 5
      </Heading>
      <Heading as="h2" size="2">
        Section heading · h2, size 2
      </Heading>
      <Heading as="h3" size="4">
        Subsection · h3, size 4
      </Heading>
    </div>
  ),
};
