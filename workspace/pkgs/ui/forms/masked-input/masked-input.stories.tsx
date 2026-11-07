import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import { MaskTextExamples } from "./mask-text.examples";
import { MaskedInput, type MaskedInputProps } from "./masked-input";
import { ConfigurationLimitsExample } from "./masked-input.configuration-examples";
import {
  ControlledMaskExample,
  CustomTokenExample,
  ReactiveMaskExample,
} from "./masked-input.examples";
import { MaskStateExamples, MaskSubmissionExample } from "./masked-input.form-examples";
import { NativeValidityExample, PrefixMaskExample } from "./masked-input.issue-examples";
import { PasteAndHistoryExample } from "./masked-input.paste-examples";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Masked Input",
  tags: ["autodocs"],
  args: { mask: "###.###.###-##", inputmode: "numeric", placeholder: "123.456.789-00" },
  render: (args) => (
    <Field.Root>
      <Field.Label>Document number</Field.Label>
      <MaskedInput {...args} />
      <Field.Description>Formatting does not validate the document number.</Field.Description>
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "Opt-in masking over Input with raw controlled values, configurable tokens, progressive patterns, and explicit native form submission. The internal Solid adapter delegates editing to IMask. ! escapes the next pattern character. Token overrides merge with defaults; null turns a token into a literal.",
      },
    },
  },
} satisfies Meta<MaskedInputProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomTokens: Story = { render: () => <CustomTokenExample /> };
export const ControlledPhone: Story = { render: () => <ControlledMaskExample /> };
export const ReactiveConfiguration: Story = { render: () => <ReactiveMaskExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <MaskSubmissionExample /> };
export const States: Story = { render: () => <MaskStateExamples /> };
export const AlternativePrefixes: Story = { render: () => <PrefixMaskExample /> };
export const NativeValidityAndEvents: Story = { render: () => <NativeValidityExample /> };
export const TextHelpers: Story = { render: () => <MaskTextExamples /> };
export const PasteAndHistory: Story = { render: () => <PasteAndHistoryExample /> };
export const ConfigurationLimits: Story = { render: () => <ConfigurationLimitsExample /> };
export const Dark: Story = { ...CustomTokens, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...ControlledPhone,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
