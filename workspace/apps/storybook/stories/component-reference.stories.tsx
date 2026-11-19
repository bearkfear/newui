import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  componentAnchor,
  componentGroups,
} from "../../docs/src/pages/components/component-catalog";
import { ReferencePage } from "../../docs/src/pages/components/reference/reference-page";
import "./home-showcases.css";

const slugs = componentGroups.flatMap((group) =>
  group.components
    .filter((name) => name !== "Button" && name !== "ButtonGroup")
    .map(componentAnchor),
);

const meta = {
  title: "Showcases/Component Reference",
  component: ReferencePage,
  args: { locale: "pt-BR", slug: "accordion" },
  argTypes: {
    locale: { control: "inline-radio", options: ["pt-BR", "en"] },
    slug: { control: "select", options: slugs },
  },
  render: (args) => <ReferencePage {...args} />,
} satisfies Meta<typeof ReferencePage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Reference: Story = {};
export const Mobile: Story = {
  args: { slug: "date-range-picker" },
  globals: { viewport: { value: "mobile", isRotated: false } },
};
