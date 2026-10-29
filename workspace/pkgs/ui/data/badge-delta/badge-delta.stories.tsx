import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { BadgeDeltaMatrix } from "../stories/indicator-examples";
import { BadgeDelta } from "./badge-delta";

const meta = {
  title: "Data/Badge Delta",
  component: BadgeDelta,
  tags: ["autodocs"],
  args: { value: 12.5, isPositiveGood: true, variant: "soft", size: "md", rounded: false },
  argTypes: {
    value: { control: "number" },
    isPositiveGood: { control: "boolean" },
    variant: { control: "inline-radio", options: ["soft", "solid", "outline"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A noninteractive Badge composition for signed percentage changes. Lucide arrows communicate numeric direction; color communicates business impact. Set isPositiveGood=false for costs and other metrics where decreases are favorable. Zero is neutral; nonfinite values show Unavailable. Supply metric and comparison context alongside the badge. Import from newui.",
      },
    },
  },
} satisfies Meta<typeof BadgeDelta>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const VariantsAndSizes: Story = { render: () => <BadgeDeltaMatrix /> };
export const DecreaseIsGood: Story = { args: { value: -8.2, isPositiveGood: false } };
export const Unchanged: Story = { args: { value: 0 } };
export const Unavailable: Story = { args: { value: Number.NaN } };
export const Rounded: Story = { args: { rounded: true } };
export const Mobile: Story = {
  globals: { viewport: { value: "smallMobile", isRotated: false } },
  render: () => <BadgeDeltaMatrix />,
};
