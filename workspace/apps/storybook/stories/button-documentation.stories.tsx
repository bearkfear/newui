import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonPage } from "../../docs/src/pages/components/button/button-page";
import "./home-showcases.css";

const meta = {
  title: "Showcases/Button Documentation",
  component: ButtonPage,
  args: { locale: "pt-BR" },
  render: (args) => <ButtonPage {...args} />,
} satisfies Meta<typeof ButtonPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
