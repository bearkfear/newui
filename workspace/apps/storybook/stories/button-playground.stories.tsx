import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ButtonPlayground } from "../../docs/src/pages/home/button-playground";
import "./home-showcases.css";

const meta = {
  title: "Showcases/Button Playground",
  component: ButtonPlayground,
  args: { locale: "pt-BR" },
  render: (args) => <ButtonPlayground {...args} />,
} satisfies Meta<typeof ButtonPlayground>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const English: Story = { args: { locale: "en" } };
