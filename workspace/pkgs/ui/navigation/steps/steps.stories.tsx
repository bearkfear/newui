import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  ControlledSteps,
  LinearSteps,
  StepsExample,
  type StepsExampleProps,
} from "./stories/steps-example";

const meta = {
  title: "Navigation/Steps",
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    linear: false,
    defaultStep: 0,
    descriptions: true,
    surface: false,
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    linear: { control: "boolean" },
    defaultStep: { control: { type: "number", min: 0, max: 3 } },
    descriptions: { control: "boolean" },
    surface: {
      control: "boolean",
      description: "Demo-only Card composition inside Content; Steps does not add a surface.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An Ark-powered stepper with associated content, numbered/completed indicators, next/back controls, and horizontal or vertical layouts. Ark owns the active step, completion, linear validation, tab/content associations, and native control behavior. Use Tab and Enter/Space to operate the triggers and controls; this wrapper preserves the installed Ark keyboard behavior. Horizontal lists scroll on narrow screens; vertical lists stack above content on mobile. Applications own validation, requests, and result announcements. All colors use Radix-backed newui tokens, without Kobalte or additional dependencies.",
      },
      source: {
        language: "tsx",
        code: `import { Steps } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Steps.Root count={2} orientation="horizontal">
  <Steps.List aria-label="Project setup">
    <Steps.Item index={0}>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Label><Steps.Title>Details</Steps.Title><Steps.Description>Review the project</Steps.Description></Steps.Label>
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={1}>
      <Steps.Trigger>
        <Steps.Indicator />
        <Steps.Label><Steps.Title>Review</Steps.Title><Steps.Description>Confirm and finish</Steps.Description></Steps.Label>
      </Steps.Trigger>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Steps.Content index={0}>Project details</Steps.Content>
  <Steps.Content index={1}>Review your project</Steps.Content>
  <Steps.CompletedContent>All steps completed.</Steps.CompletedContent>
  <Steps.Actions>
    <Steps.PrevTrigger>Back</Steps.PrevTrigger>
    <Steps.NextTrigger>Next</Steps.NextTrigger>
  </Steps.Actions>
</Steps.Root>`,
      },
    },
  },
  render: (args) => <StepsExample {...args} />,
} satisfies Meta<StepsExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const WithCard: Story = {
  args: { surface: true },
  parameters: {
    docs: {
      source: {
        code: `<Steps.Content index={0}>
  <Card.Root>
    <Card.Content>Project details</Card.Content>
  </Card.Root>
</Steps.Content>`,
      },
    },
  },
};
export const WithoutDescriptions: Story = { args: { descriptions: false } };
export const MiddleStep: Story = { args: { defaultStep: 1 } };
export const Completed: Story = { args: { defaultStep: 3 } };
export const Linear: Story = { args: { linear: true } };
export const ValidatedProgression: Story = { render: () => <LinearSteps /> };
export const Controlled: Story = {
  render: () => <ControlledSteps />,
  parameters: {
    docs: {
      source: {
        code: `const [step, setStep] = createSignal(0);

<Steps.Root count={3} step={step()} onStepChange={(details) => setStep(details.step)}>
  {/* List, indexed Content, CompletedContent, and navigation controls */}
</Steps.Root>`,
      },
    },
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
export const VerticalDark: Story = { ...Vertical, globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const VerticalMobile: Story = { ...Mobile, args: { orientation: "vertical" } };
export const NestedDark: Story = {
  globals: { theme: "light" },
  render: () => (
    <div
      data-nui-theme="dark"
      style={{
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        padding: "1rem",
        "border-radius": "0.75rem",
      }}
    >
      <StepsExample defaultStep={1} />
    </div>
  ),
};
