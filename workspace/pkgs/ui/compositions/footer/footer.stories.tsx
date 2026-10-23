import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Footer } from "./footer";
import { FooterExample } from "./stories/footer-example";

const meta = {
  title: "Compositions/Footer",
  component: Footer.Root,
  tags: ["autodocs"],
  globals: { spacing: "flush" },
  args: { tone: "default", width: "lg" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "subtle"] },
    width: { control: "select", options: ["sm", "md", "lg", "full"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A native footer with a Container, optional brand, grouped navigation, and metadata. Link groups adapt to available width. Give each Footer.Group nav its own accessible name. Place a page Footer outside main so its native contentinfo landmark is preserved; router links can replace the native Link slot.",
      },
    },
  },
  render: (args) => <FooterExample {...args} />,
} satisfies Meta<typeof Footer.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Subtle: Story = { args: { tone: "subtle" } };
export const Minimal: Story = {
  render: (args) => (
    <Footer.Root {...args}>
      <Footer.Meta>
        <span>newui · Built with care.</span>
        <Footer.Link href="?path=/story/getting-started-introduction--overview" target="_top">
          Back to introduction
        </Footer.Link>
      </Footer.Meta>
    </Footer.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
