import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledBranch } from "./stories/controlled-branch";
import { StaticMenu } from "./stories/static-menu";
import { VerticalMenuExample } from "./stories/vertical-menu-example";
import { VerticalMenu } from "./vertical-menu";

const meta = {
  title: "Navigation/Vertical menu",
  component: VerticalMenu.Root,
  tags: ["autodocs"],
  args: { variant: "surface", density: "comfortable" },
  argTypes: {
    variant: { control: "inline-radio", options: ["plain", "surface"] },
    density: { control: "inline-radio", options: ["comfortable", "compact"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Native nav, ul, li, and anchor elements for grouped and nested page navigation. Optional Branch parts use Ark Collapsible for controlled/uncontrolled state, disabled behavior, IDs, and expanded-state attributes. This is site navigation, not an ARIA action menu or tree: links keep native Tab behavior and branches use Enter/Space.",
      },
    },
  },
  render: (args) => <VerticalMenuExample {...args} />,
} satisfies Meta<typeof VerticalMenu.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Plain: Story = { args: { variant: "plain" } };
export const Compact: Story = { args: { density: "compact" } };
export const Static: Story = { render: () => <StaticMenu /> };
export const Controlled: Story = { render: () => <ControlledBranch /> };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
