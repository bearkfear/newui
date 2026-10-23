import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Container } from "./container/container";
import { Section } from "./section/section";
import { Heading } from "../content/heading/heading";
import { Text } from "../content/text/text";
import { Prose } from "../content/prose/prose";
import { Button } from "../actions/button/button";

const meta = {
  title: "Layout/Page foundations",
  parameters: { controls: { disable: true }, docs: { description: { component: "Layout and typography primitives composed with newui recipes and semantic tokens. Use the theme, direction, viewport, and flush canvas controls to review the composition." } } },
  render: () => <main>
    <Section aria-labelledby="page-title">
      <Container size="md">
        <div style={{ display: "grid", gap: "24px" }}>
          <Heading as="h1" size="1" id="page-title">Space for your next idea.</Heading>
          <Text size="5" tone="muted">Consistent page widths, responsive spacing, and typography that adapts to your content.</Text>
          <div><Button>Start building</Button></div>
        </div>
      </Container>
    </Section>
    <Section spacing="sm" aria-labelledby="article-title" style={{ background: "var(--nui-surface)" }}>
      <Container size="md">
        <Prose>
          <h2 id="article-title">A foundation for real pages</h2>
          <p>Container controls width and horizontal gutters. Section adds vertical rhythm. Heading and Text keep interface typography consistent; Prose styles longer editorial content.</p>
          <h3>Compose the pieces</h3>
          <ul><li>Choose a container width for the page.</li><li>Name each section with a meaningful heading.</li><li>Keep supporting text readable in light and dark themes.</li></ul>
          <blockquote><p>These are independent primitives. Larger compositions can grow from them after visual validation.</p></blockquote>
        </Prose>
      </Container>
    </Section>
  </main>,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
export const Page: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
