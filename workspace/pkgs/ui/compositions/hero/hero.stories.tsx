import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Hero } from "./hero";
import { HeroExample } from "./stories/hero-example";

const meta = {
  title: "Compositions/Hero",
  component: Hero.Root,
  tags: ["autodocs"],
  globals: { spacing: "flush" },
  args: { tone: "default", layout: "stacked", align: "start", spacing: "md", width: "lg" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "subtle", "accent"] },
    layout: { control: "inline-radio", options: ["stacked", "split"] },
    align: { control: "inline-radio", options: ["start", "center"] },
    spacing: { control: "inline-radio", options: ["sm", "md", "lg"] },
    width: { control: "select", options: ["sm", "md", "lg", "full"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A responsive opening section composed from Section, Container, Heading, and Text. Split media stacks below content on small screens. Content and action alignment follows the root reactively. Name the section with aria-labelledby and a matching Title id; choose the title's heading level with as.",
      },
    },
  },
  render: (args) => <HeroExample {...args} />,
} satisfies Meta<typeof Hero.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Centered: Story = { args: { align: "center", width: "md" } };
export const Split: Story = { args: { layout: "split", tone: "accent" } };
export const Subtle: Story = { args: { tone: "subtle" } };
export const Compact: Story = { args: { spacing: "sm" } };
export const Mobile: Story = {
  args: { layout: "split" },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const RightToLeft: Story = { args: { layout: "split" }, globals: { direction: "rtl" } };
