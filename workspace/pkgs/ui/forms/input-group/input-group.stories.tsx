import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AttachedActions } from "../stories/attached-actions";
import {
  AdornedFields,
  ClearableField,
  LoadingField,
  PasswordField,
  SearchField,
} from "../stories/input-examples";
import { TextSizes } from "../stories/text-field-matrices";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Input Group",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Compose one text input with decorative Icon parts, textual Addon prefixes/suffixes, Action wrappers for named Buttons, and an optional Loading indicator. Root inherits Field states and shares size/disabled state with newui Buttons. Attached actions join the control edge; ordinary actions are inset. Loading never disables editing automatically. Use separate Fields for independently labeled controls.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const IconsAndAddons: Story = { render: () => <AdornedFields /> };
export const PasswordAction: Story = { render: () => <PasswordField /> };
export const ClearAction: Story = { render: () => <ClearableField /> };
export const AttachedSearch: Story = { render: () => <SearchField /> };
export const AttachedEdges: Story = { render: () => <AttachedActions /> };
export const Sizes: Story = { render: () => <TextSizes /> };
export const Loading: Story = { render: () => <LoadingField /> };
export const Mobile: Story = {
  ...IconsAndAddons,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
