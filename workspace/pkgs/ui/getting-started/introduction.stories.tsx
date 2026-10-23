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
        <span class="nui-catalog-status">Component workshop · Early development</span>
      </header>
      <IntroductionHero />
      <IntroductionFeatures />
      <IntroductionButtonDemo />
      <aside class="nui-catalog-note">
        newui is in early development and is not published. Colors use official Radix scales with
        automatic system themes. Ark behaviors remain planned.
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
