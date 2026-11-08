import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "../date/stories/date-demo.css";
import { parseDate } from "../date/date.value";
import { DateConstraints } from "../date/stories/date-constraints";
import { DateDemo } from "../date/stories/date-demo";
import {
  DateStates,
  DateVariants,
  LocaleComparison,
  ProviderExample,
} from "../date/stories/date-examples";
import { DateFormExample } from "../date/stories/date-form";
import { DateVisualReview } from "../date/stories/date-visual-review";
import type { DateInputRootProps } from "./date-input";

const meta = {
  title: "Forms/DateInput",
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
  render: (args) => <DateDemo {...args} kind="input" />,
  parameters: {
    docs: {
      description: {
        component:
          "Localized Ark segments with CalendarDate values and ISO form submission. Digits, arrows, Home/End, Delete and Tab use Ark behavior. Incomplete drafts stay in the editor until complete. See the date family README for locale, validation and SSR contracts.",
      },
    },
  },
} satisfies Meta<DateInputRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const EnUS: Story = { args: { locale: "en-US", defaultValue: [parseDate("2028-02-29")] } };
export const SameDateAcrossRegions: Story = { render: () => <LocaleComparison kind="input" /> };
export const ProviderAndFallback: Story = { render: () => <ProviderExample /> };
export const States: Story = { render: () => <DateStates kind="input" /> };
export const SizesAndTones: Story = { render: () => <DateVariants kind="input" /> };
export const LimitsAndUnavailable: Story = { render: () => <DateConstraints kind="input" /> };
export const NativeSubmissionAndReset: Story = { render: () => <DateFormExample /> };
export const Dark: Story = { ...SameDateAcrossRegions, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...SameDateAcrossRegions,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};

export const VisualReview: Story = {
  render: (args) => <DateVisualReview locale={args.locale ?? "pt-BR"} />,
};
