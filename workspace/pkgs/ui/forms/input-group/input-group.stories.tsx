import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Input } from "../input/input";
import { AttachedActions } from "../stories/attached-actions";
import {
  AdornedFields,
  ClearableField,
  LoadingField,
  PasswordField,
  SearchField,
} from "../stories/input-examples";
import { TextSizes, TextTones } from "../stories/text-field-matrices";
import { InputGroup } from "./input-group";
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
export const Disabled: Story = { render: () => <SearchField disabled /> };
export const AttachedEdges: Story = { render: () => <AttachedActions /> };
export const Sizes: Story = { render: () => <TextSizes /> };
export const Tones: Story = {
  render: () => (
    <TextTones
      renderControl={() => (
        <InputGroup.Root>
          <InputGroup.Addon>@</InputGroup.Addon>
          <Input defaultValue="forma.studio" placeholder="A semantic tone" />
        </InputGroup.Root>
      )}
    />
  ),
};
export const Loading: Story = { render: () => <LoadingField /> };
export const Mobile: Story = {
  ...IconsAndAddons,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
