import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "../date/stories/date-demo.css";
import { DateConstraints, PartialRangeExample } from "../date/stories/date-constraints";
import { DateDemo } from "../date/stories/date-demo";
import { DateStates, LocaleComparison } from "../date/stories/date-examples";
import { DateFormExample } from "../date/stories/date-form";
import {
  DateDialogExample,
  PresetRangeExample,
  TwoMonthsExample,
} from "../date/stories/date-overlays";
import { DateVisualReview } from "../date/stories/date-visual-review";
import type { DateRangePickerRootProps } from "./date-range-picker";

const meta = {
  title: "Forms/DateRangePicker",
  tags: ["autodocs"],
  args: { locale: "pt-BR", size: "md", tone: "neutral", numOfMonths: 1 },
  argTypes: {
    locale: { control: "inline-radio", options: ["pt-BR", "en-US"] },
    numOfMonths: { control: "inline-radio", options: [1, 2] },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: (args) => <DateDemo {...args} kind="range" />,
  parameters: {
    docs: {
      description: {
        component:
          "Shared DatePicker in Ark range mode. Independent start/end segments preserve partial selection, including end-first entry. Typed reversed ranges are invalid. Unavailable endpoints cannot be chosen in the calendar; interior unavailable dates may be crossed. Form names are stable name[start]/name[end] or explicit names.",
      },
    },
  },
} satisfies Meta<DateRangePickerRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const SameRangeAcrossRegions: Story = { render: () => <LocaleComparison kind="range" /> };
export const PartialAndReversed: Story = { render: () => <PartialRangeExample /> };
export const TwoMonths: Story = { render: () => <TwoMonthsExample /> };
export const LimitsAndUnavailable: Story = { render: () => <DateConstraints kind="range" /> };
export const Presets: Story = { render: () => <PresetRangeExample /> };
export const States: Story = { render: () => <DateStates kind="range" /> };
export const NativeSubmissionAndReset: Story = { render: () => <DateFormExample /> };
export const InDialog: Story = { render: () => <DateDialogExample /> };
export const Dark: Story = { ...TwoMonths, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...TwoMonths,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};

export const VisualReview: Story = {
  render: (args) => <DateVisualReview locale={args.locale ?? "pt-BR"} />,
};
