import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Input } from "../input/input";
import { FieldFeedback } from "../stories/field-feedback";
import { HorizontalFields, NativeTextForm } from "../stories/native-form";
import { ProfileForm } from "../stories/profile-form";
import { ValidationStates } from "../stories/text-field-matrices";
import { TextFieldsOverview } from "../stories/text-fields-overview";
import { Field } from "./field";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Field",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Ark Field owns labels, help/error associations, required/disabled/readonly states, and native control semantics. newui adds Bulma-inspired styling, explicit valid/success feedback, loading, sizes, and horizontal composition. Invalid takes priority over valid. Validation rules and timing remain application-owned. All examples follow the theme toolbar.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = { render: () => <TextFieldsOverview /> };
export const Default: Story = {
  render: () => (
    <Field.Root required>
      <Field.Label>
        Email
        <Field.RequiredIndicator />
      </Field.Label>
      <Input name="email" type="email" placeholder="you@example.com" />
      <Field.Description>Used for account notifications.</Field.Description>
    </Field.Root>
  ),
};
export const Validation: Story = { render: () => <ValidationStates /> };
export const MessageTransitions: Story = { render: () => <FieldFeedback /> };
export const Profile: Story = { render: () => <ProfileForm /> };
export const NativeSubmissionAndReset: Story = { render: () => <NativeTextForm /> };
export const Horizontal: Story = { render: () => <HorizontalFields /> };
export const Mobile: Story = {
  ...Overview,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
