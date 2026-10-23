import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  render: (args) => <Button {...args} />,
  args: { children: "Button", variant: "solid", size: "md", disabled: false, type: "button", onClick: fn() },
  parameters: {
    docs: { description: { component: "A native SolidJS button with solid and outline variants, small and medium sizes, visible keyboard focus, and semantic CSS tokens. Use the native disabled attribute when an action is unavailable. Defaults to type=button to avoid accidental form submission." } },
  },
  argTypes: {
    children: { control: "text", description: "Visible label. Provide an accessible name for every button.", table: { category: "Content" } },
    variant: { control: "inline-radio", options: ["solid", "outline"], description: "Visual emphasis.", table: { category: "Appearance", defaultValue: { summary: "solid" } } },
    size: { control: "inline-radio", options: ["sm", "md"], description: "Control height: sm = 32px; md = 40px.", table: { category: "Appearance", defaultValue: { summary: "md" } } },
    disabled: { control: "boolean", description: "Prevents pointer and keyboard activation.", table: { category: "Behavior", defaultValue: { summary: "false" } } },
    type: { control: "select", options: ["button", "submit", "reset"], description: "Native button type.", table: { category: "Behavior", defaultValue: { summary: "button" } } },
    class: { control: "text", description: "Additional CSS classes; arbitrary utility conflict resolution is not guaranteed.", table: { category: "Appearance" } },
    onClick: { control: false, description: "Native click handler. Calls are visible in Actions.", table: { category: "Events" } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Small: Story = { args: { size: "sm" } };
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Counter: Story = {
  parameters: { docs: { description: { story: "A signal updates the label without remounting the button. The play function verifies two activations and the callback." } }, controls: { exclude: ["children"] } },
  render: (args) => {
    const [count, setCount] = createSignal(0);
    return <Button {...args} onClick={(event) => { setCount((value) => value + 1); if (typeof args.onClick === "function") args.onClick(event); }}>Count: {count()}</Button>;
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("Update the Solid signal twice", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Count: 0" }));
      await userEvent.click(canvas.getByRole("button", { name: "Count: 1" }));
      await expect(canvas.getByRole("button", { name: "Count: 2" })).toBeVisible();
      await expect(args.onClick).toHaveBeenCalledTimes(2);
    });
  },
};

export const KeyboardInteraction: Story = {
  args: { children: "Activate with keyboard" },
  parameters: { docs: { description: { story: "The native button is reachable with Tab and supports Enter and Space activation." } } },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole("button");
    // Start keyboard navigation at a deterministic point inside this story.
    button.ownerDocument.body.focus();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard(" ");
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const AllVariants: Story = {
  parameters: { controls: { disable: true }, docs: { description: { story: "Compare every variant, size, and disabled state on the current theme." } } },
  render: () => (
    <div class="nui-catalog"><table class="nui-catalog-table"><caption style={{ "text-align": "start", "margin-bottom": "16px" }}>Button variants and states</caption><thead><tr><th scope="col">Variant</th><th scope="col">Small</th><th scope="col">Medium</th><th scope="col">Disabled</th></tr></thead><tbody>{(["solid", "outline"] as const).map((variant) => <tr><th scope="row">{variant}</th><td><Button variant={variant} size="sm">Action</Button></td><td><Button variant={variant}>Action</Button></td><td><Button variant={variant} disabled>Action</Button></td></tr>)}</tbody></table></div>
  ),
};

export const CustomTokens: Story = {
  parameters: { docs: { description: { story: "Container-scoped CSS variables replace the primary palette without recompiling styles." } } },
  render: (args) => <div style={{ "--nui-primary": "#15803d", "--nui-primary-hover": "#166534", "--nui-on-primary": "white" }}><Button {...args} /></div>,
};

export const RightToLeft: Story = { args: { children: "Continue →" }, globals: { direction: "rtl" }, parameters: { docs: { description: { story: "Inspect native reading direction. Directional icons and translated labels are the consuming application's responsibility." } } } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
