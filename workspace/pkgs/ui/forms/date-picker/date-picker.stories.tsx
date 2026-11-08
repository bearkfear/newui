import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "../date/stories/date-demo.css";
import { parseDate } from "../date/date.value";
import { DateConstraints } from "../date/stories/date-constraints";
import { DateDemo } from "../date/stories/date-demo";
import { DateStates, DateVariants, LocaleComparison } from "../date/stories/date-examples";
import { DateFormExample } from "../date/stories/date-form";
import { DateDialogExample } from "../date/stories/date-overlays";
import { DateVisualReview } from "../date/stories/date-visual-review";
import type { DatePickerRootProps } from "./date-picker.types";

const meta = {
  title: "Forms/DatePicker",
  tags: ["autodocs"],
  args: { locale: "pt-BR", size: "md", tone: "neutral" },
  argTypes: {
    locale: { control: "inline-radio", options: ["pt-BR", "en-US"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: (args) => <DateDemo {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          "Ark DatePicker calendar plus the shared segmented DateInput. Choose day, month or year; Escape dismisses the calendar and restores trigger focus. Portal surfaces inherit theme tokens, including inside Dialog. Public values and FormData are independent of localized display.",
      },
    },
  },
} satisfies Meta<DatePickerRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const EnUS: Story = { args: { locale: "en-US", defaultValue: [parseDate("2028-02-29")] } };
export const SameDateAcrossRegions: Story = { render: () => <LocaleComparison kind="picker" /> };
export const States: Story = { render: () => <DateStates kind="picker" /> };
export const SizesAndTones: Story = { render: () => <DateVariants kind="picker" /> };
export const LimitsAndUnavailable: Story = { render: () => <DateConstraints kind="picker" /> };
export const NativeSubmissionAndReset: Story = { render: () => <DateFormExample /> };
export const InDialog: Story = { render: () => <DateDialogExample /> };
export const Dark: Story = { ...SameDateAcrossRegions, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...SameDateAcrossRegions,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};

export const VisualReview: Story = {
  render: (args) => <DateVisualReview locale={args.locale ?? "pt-BR"} />,
};
