import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Section } from "./section";

const meta = {
  title: "Layout/Section",
  component: Section,
  tags: ["autodocs"],
  args: { spacing: "md" },
  argTypes: { spacing: { control: "inline-radio", options: ["sm", "md", "lg"] } },
  parameters: {
    docs: {
      description: {
        component:
          "Native section with responsive vertical spacing. Name meaningful regions with aria-labelledby and a visible heading. Compose with Container for horizontal layout.",
      },
    },
  },
  render: (args) => (
    <Section {...args} aria-labelledby="section-preview-title">
      <h2 id="section-preview-title">Room for each section</h2>
      <p>
        Vertical spacing grows at the medium breakpoint. Container handles the horizontal gutters.
      </p>
    </Section>
  ),
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
