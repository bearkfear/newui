import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ComponentsPage } from "../../docs/src/pages/components/components-page";
import "./home-showcases.css";

const meta = {
  title: "Showcases/Component Catalog",
  component: ComponentsPage,
  args: { locale: "pt-BR" },
  render: (args) => <ComponentsPage {...args} />,
} satisfies Meta<typeof ComponentsPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
