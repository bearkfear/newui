import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  IntroductionButtonDemo,
  IntroductionFeatures,
  IntroductionHero,
} from "./stories/introduction-sections";

const meta = {
  title: "Getting started/Introduction",
  parameters: { controls: { disable: true }, docs: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <main class="nui-catalog">
      <header class="nui-catalog-topline">
        <span class="nui-catalog-wordmark">
          newui<span style={{ color: "var(--catalog-accent)" }}>.</span>
        </span>
        <span class="nui-catalog-status">Component workshop · SolidJS</span>
      </header>
      <IntroductionHero />
      <IntroductionFeatures />
      <IntroductionButtonDemo />
      <aside class="nui-catalog-note">
        newui is available on npm. This catalog documents its components and known limitations.
        Colors use official Radix scales with automatic system themes. Navigation interactions use
        Ark UI.
      </aside>
      <footer class="nui-catalog-footer">
        <span>newui / Component development catalog</span>
        <a href="?path=/story/getting-started-workshop-guide--overview" target="_top">
          Learn your way around →
        </a>
      </footer>
    </main>
  ),
};
