import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import "../stories/text-fields-demo.css";
import type { RichTextEditorProps } from "./rich-text.types";
import { RichTextEditor } from "./rich-text-editor";
import {
  ControlledRichTextExample,
  RichTextFormExample,
  RichTextHelperExample,
  RichTextStates,
  sampleDocument,
} from "./rich-text-editor.examples";

const meta = {
  title: "Forms/Rich Text Editor",
  tags: ["autodocs"],
  args: {
    placeholder: "Write an article…",
    size: "md",
    tone: "neutral",
    maxCharacters: 800,
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    maxCharacters: { control: { type: "number", min: 1 } },
  },
  render: (args) => (
    <Field.Root>
      <Field.Label>Article body</Field.Label>
      <RichTextEditor.Root {...args} defaultValue={sampleDocument}>
        <RichTextEditor.Toolbar />
        <RichTextEditor.Content />
        <RichTextEditor.CharacterCount />
      </RichTextEditor.Root>
      <Field.Description>
        Formatting produces canonical JSON, normalized HTML, and text.
      </Field.Description>
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "A Tiptap/ProseMirror-backed editor with a fixed schema, JSON controlled values, normalized HTML and plain-text representations, native form serialization, and DOM-independent conversion helpers. HTML import is schema normalization, not sanitization. Required emptiness remains application validation.",
      },
    },
  },
} satisfies Meta<RichTextEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ControlledAndRepresentations: Story = {
  render: () => <ControlledRichTextExample />,
};
export const NativeSubmissionAndReset: Story = { render: () => <RichTextFormExample /> };
export const LegacyHtmlHelpers: Story = { render: () => <RichTextHelperExample /> };
export const States: Story = { render: () => <RichTextStates /> };
export const Empty: Story = {
  render: (args) => (
    <RichTextEditor.Root {...args} aria-label="Article body">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
      <RichTextEditor.CharacterCount />
    </RichTextEditor.Root>
  ),
};
export const Dark: Story = { ...ControlledAndRepresentations, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...ControlledAndRepresentations,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
