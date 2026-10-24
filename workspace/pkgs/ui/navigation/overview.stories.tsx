import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NavigationPage } from "./stories/navigation-page";

const meta = {
  title: "Navigation/Overview",
  globals: { spacing: "flush" },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "Navbar and VerticalMenu used together with synchronized current-page state. Ark supplies submenu and disclosure behavior; the application owns destinations. Inspect desktop/mobile layouts, keyboard focus, and dark mode using the workshop toolbar.",
      },
    },
  },
  render: () => <NavigationPage />,
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Workspace: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
