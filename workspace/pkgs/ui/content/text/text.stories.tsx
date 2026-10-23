import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Text } from "./text";

const meta = {
  title: "Content/Text",
  component: Text,
  tags: ["autodocs"],
  args: { as: "p", size: "6", tone: "default", children: "Build readable interfaces with consistent typography and semantic colors." },
  argTypes: { as: { control: "select", options: ["p", "span", "div"] }, size: { description: "Visual size; 1 is the largest. Independent of the HTML element.", control: "inline-radio", options: ["1", "2", "3", "4", "5", "6", "7"] }, tone: { control: "inline-radio", options: ["default", "muted"] }, children: { control: "text" } },
  parameters: { docs: { description: { component: "Text with seven visual sizes (1 is largest, 7 is smallest) and semantic tone variants. Size defaults to 6 (1rem). Defaults to a paragraph. Use as=span for inline text; subtitles compose Text with Heading." } } },
  render: (args) => <Text {...args} />,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };

export const AllSizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => <div style={{ display: "grid", gap: "24px" }}>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 1 · 3rem</p><Text size="1">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 2 · 2.5rem</p><Text size="2">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 3 · 2rem</p><Text size="3">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 4 · 1.5rem</p><Text size="4">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 5 · 1.25rem</p><Text size="5">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 6 · 1rem</p><Text size="6">Readable text at every size.</Text></div>
    <div><p style={{ "font-size": "12px", "margin-block-end": "8px", color: "var(--nui-muted-foreground)" }}>Size 7 · 0.75rem</p><Text size="7">Readable text at every size.</Text></div>
  </div>,
};

export const Muted: Story = { args: { tone: "muted" } };
export const Inline: Story = {
  render: () => <p>Keep <Text as="span" size="6" tone="muted">supporting text</Text> inside the same paragraph.</p>,
};
