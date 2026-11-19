import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonGroupPage } from "../../docs/src/pages/components/button-group/button-group-page";
import "./home-showcases.css";

const meta = {
  title: "Showcases/ButtonGroup Documentation",
  component: ButtonGroupPage,
  args: { locale: "pt-BR" },
  render: (args) => <ButtonGroupPage {...args} />,
} satisfies Meta<typeof ButtonGroupPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
