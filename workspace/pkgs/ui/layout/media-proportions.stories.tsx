import type { Meta, StoryObj } from "storybook-solidjs-vite";

type MediaArgs = { ratio: number; fit: "contain" | "cover" };
const meta = {
  title: "Layout/Media proportions",
  tags: ["autodocs"],
  args: { ratio: 16 / 9, fit: "contain" },
  argTypes: {
    ratio: { control: { type: "number", min: 0.1, step: 0.1 } },
    fit: { control: "inline-radio", options: ["contain", "cover"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Use native CSS aspect-ratio for responsive media. There is no public AspectRatio component. The surrounding layout sets width, and object-fit controls cropping. These examples use the local brand icon to avoid remote asset dependencies.",
      },
    },
  },
  render: (args) => (
    <div style={{ "max-width": "28rem" }}>
      <img
        src="/favicon.svg"
        alt="newui brand icon"
        style={{
          display: "block",
          width: "100%",
          "aspect-ratio": String(args.ratio),
          "object-fit": args.fit,
          background: "var(--nui-surface)",
          "border-radius": "12px",
        }}
      />
    </div>
  ),
} satisfies Meta<MediaArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Widescreen: Story = {};
export const Square: Story = { args: { ratio: 1 } };
export const Portrait: Story = { args: { ratio: 3 / 4 } };
export const CropToFill: Story = { args: { fit: "cover" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
