import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import { NumberHelpersExample } from "./number-helpers.examples";
import { NumberInput, type NumberInputProps } from "./number-input";
import { ControlledNumberExample, FractionExamples, LocaleExamples } from "./number-input.examples";
import { NumberStateExamples, NumberSubmissionExample } from "./number-input.form-examples";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Number Input",
  tags: ["autodocs"],
  args: {
    locale: "pt-BR",
    defaultValue: "1234.5",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  },
  render: (args) => (
    <Field.Root>
      <Field.Label>Quantity</Field.Label>
      <NumberInput {...args} />
      <Field.Description>
        Type, paste, replace a selection, or clear. Zeros complete on blur.
      </Field.Description>
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "Decimal string values, locale grouping, configurable fractional precision, InputGroup composition and DOM-independent helpers. No floating-point conversion of accepted values. Currency Input provides currency formatting and automatic minor-unit entry over the same decimal editor.",
      },
    },
  },
} satisfies Meta<NumberInputProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Locales: Story = { render: () => <LocaleExamples /> };
export const DecimalPlaces: Story = { render: () => <FractionExamples /> };
export const ControlledAndComposition: Story = { render: () => <ControlledNumberExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <NumberSubmissionExample /> };
export const Helpers: Story = { render: () => <NumberHelpersExample /> };
export const States: Story = { render: () => <NumberStateExamples /> };
export const Dark: Story = { ...ControlledAndComposition, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...ControlledAndComposition,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
