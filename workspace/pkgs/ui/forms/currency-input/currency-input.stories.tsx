import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import { CurrencyHelpersExample } from "./currency-helpers.examples";
import { CurrencyInput, type CurrencyInputProps } from "./currency-input";
import {
  ControlledCurrencyExample,
  CurrencyEntryExamples,
  CurrencyLocaleExamples,
} from "./currency-input.examples";
import {
  CurrencyCompositionExample,
  CurrencyPrecisionExamples,
  CurrencySubmissionExample,
} from "./currency-input.form-examples";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Currency Input",
  tags: ["autodocs"],
  args: { locale: "pt-BR", currency: "BRL", defaultValue: "1234.5" },
  render: (args) => (
    <Field.Root>
      <Field.Label>Amount</Field.Label>
      <CurrencyInput {...args} />
      <Field.Description>
        Type or paste an amount. Press - anywhere to toggle the sign.
      </Field.Description>
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "Exact major-unit decimal strings with configurable currency, locale, fractional precision, decimal or automatic minor-unit entry, InputGroup composition and DOM-independent helpers. Currency changes do not perform exchange-rate conversion.",
      },
    },
  },
} satisfies Meta<CurrencyInputProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const LocalesAndCurrencies: Story = { render: () => <CurrencyLocaleExamples /> };
export const EntryModes: Story = { render: () => <CurrencyEntryExamples /> };
export const Controlled: Story = { render: () => <ControlledCurrencyExample /> };
export const Composition: Story = { render: () => <CurrencyCompositionExample /> };
export const PrecisionAndStates: Story = { render: () => <CurrencyPrecisionExamples /> };
export const NativeSubmissionAndReset: Story = { render: () => <CurrencySubmissionExample /> };
export const Helpers: Story = { render: () => <CurrencyHelpersExample /> };
export const AutomaticCents: Story = { args: { entryMode: "minor-unit", defaultValue: "" } };
export const Dark: Story = { ...Composition, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...EntryModes,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
