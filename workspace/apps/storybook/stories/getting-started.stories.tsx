import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { GettingStartedPage } from "../../docs/src/pages/getting-started/getting-started-page";
import "./home-showcases.css";

const meta = {
  title: "Showcases/Getting Started Guide",
  component: GettingStartedPage,
  args: { locale: "pt-BR" },
  render: (args) => <GettingStartedPage {...args} />,
} satisfies Meta<typeof GettingStartedPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Installation: Story = { args: { page: "installation" } };
export const FirstComponent: Story = { args: { page: "first-component" } };
export const Tailwind: Story = { args: { page: "tailwind" } };
export const ThemesAndTokens: Story = { args: { page: "themes-and-tokens" } };
