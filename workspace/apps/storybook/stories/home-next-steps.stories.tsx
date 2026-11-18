import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { HomeInstallation, HomeThemes } from "../../docs/src/pages/home/home-next-steps";
import "./home-showcases.css";

const meta = {
  title: "Showcases/Home Next Steps",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;
export const Themes: Story = { render: () => <HomeThemes locale="pt-BR" prefix="" /> };
export const Installation: Story = { render: () => <HomeInstallation locale="pt-BR" prefix="" /> };
