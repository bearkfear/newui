import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { DeltaStates } from "../stories/indicator-examples";
import { DeltaBar } from "./delta-bar";

const meta = {
  title: "Data/Delta Bar",
  component: DeltaBar,
  tags: ["autodocs"],
  args: {
    label: "Revenue growth",
    description: "Compared with last month",
    value: 38.4,
    isPositiveGood: true,
  },
  argTypes: { value: { control: "number" }, isPositiveGood: { control: "boolean" } },
  parameters: {
    docs: {
      description: {
        component:
          "A signed percentage change around a fixed zero midpoint. Negative values extend left and positive values right on a −100% to +100% scale. Geometry is clamped; visible values remain complete. Set isPositiveGood=false when decreases are favorable. This is a comparison, not task progress; no progressbar role or Ark behavior is required. Import from newui.",
      },
    },
  },
} satisfies Meta<typeof DeltaBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DecreaseIsGood: Story = {
  args: { label: "Operating costs", value: -22.6, isPositiveGood: false },
};
export const StatesAndOverflow: Story = { render: () => <DeltaStates /> };
export const CustomFormat: Story = {
  args: { valueFormat: (value) => `${value > 0 ? "+" : ""}${value.toFixed(2)}%` },
};
export const Mobile: Story = {
  globals: { viewport: { value: "smallMobile", isRotated: false } },
  render: () => <DeltaStates />,
};
