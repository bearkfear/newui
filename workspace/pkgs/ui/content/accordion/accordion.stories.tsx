import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AccordionContentExample } from "./stories/accordion-content";
import { AccordionExample, type AccordionExampleProps } from "./stories/accordion-example";
import { ControlledAccordion } from "./stories/controlled-accordion";

const meta = {
  title: "Content/Accordion",
  tags: ["autodocs"],
  args: { variant: "outline", multiple: false, collapsible: true, disabled: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["outline", "soft"] },
    multiple: { control: "boolean" },
    collapsible: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "44rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Grouped disclosures powered by Ark Accordion, including Arrow Up/Down, Home/End, open values, disabled items, and accessible associations. One item opens at a time by default; allow multiple with multiple=true. Content lazily mounts and stays mounted after its first opening. ItemHeading supplies the page-appropriate heading level.",
      },
    },
  },
  render: (args) => <AccordionExample {...args} />,
} satisfies Meta<AccordionExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Soft: Story = { args: { variant: "soft" } };
export const Multiple: Story = { args: { multiple: true } };
export const RequiredOpenItem: Story = { args: { collapsible: false } };
export const Disabled: Story = { args: { disabled: true } };
export const Controlled: Story = { render: () => <ControlledAccordion /> };
export const StructuredContent: Story = { render: () => <AccordionContentExample /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = {
  ...StructuredContent,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
