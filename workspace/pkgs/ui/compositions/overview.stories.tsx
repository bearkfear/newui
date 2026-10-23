import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ProjectPage } from "./stories/project-page";

const meta = {
  title: "Compositions/Overview",
  globals: { spacing: "flush" },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "Hero, Footer, Media Object, Panel, and Action Bar composed into one responsive page. Actions use local state; footer links navigate to catalog documentation. Use the theme, viewport, and direction controls for visual review.",
      },
    },
  },
  render: () => <ProjectPage />,
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Workspace: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
