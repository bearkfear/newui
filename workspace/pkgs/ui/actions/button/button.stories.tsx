import { createSignal } from "solid-js";
import { expect, userEvent, within } from "storybook/test";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ArrowIcon, PlusIcon } from "./stories/button-icons";
import baseMeta from "./stories/button-meta";
import { ButtonPressExample, ButtonPressThemes } from "./stories/button-press-example";

const meta = {
  ...baseMeta,
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

import { Button } from "./button";

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Small: Story = { args: { size: "sm" } };
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole("button");
    await expect(button).toBeDisabled();
    await userEvent.tab();
    await expect(button).not.toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Counter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A signal updates the label without remounting the button. The play function verifies two activations and the callback.",
      },
    },
    controls: { exclude: ["children"] },
  },
  render: (args) => {
    const [count, setCount] = createSignal(0);
    return (
      <Button
        {...args}
        onClick={(event) => {
          setCount((value) => value + 1);
          if (typeof args.onClick === "function") args.onClick(event);
        }}
      >
        Count: {count()}
      </Button>
    );
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
  parameters: {
    docs: {
      description: {
        story: "The native button is reachable with Tab and supports Enter and Space activation.",
      },
    },
  },
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
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ overflow: "auto" }}>
      <table class="nui-catalog-table">
        <caption>Button variants and semantic tones</caption>
        <thead>
          <tr>
            <th scope="col">Variant</th>
            {(["primary", "neutral", "info", "success", "warning", "danger"] as const).map(
              (tone) => (
                <th scope="col">{tone}</th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {(["solid", "outline", "soft", "ghost", "link"] as const).map((variant) => (
            <tr>
              <th scope="row">{variant}</th>
              {(["primary", "neutral", "info", "success", "warning", "danger"] as const).map(
                (tone) => (
                  <td>
                    <Button variant={variant} tone={tone}>
                      Action
                    </Button>
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", "flex-wrap": "wrap", "align-items": "center" }}>
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <Button size={size}>{size}</Button>
      ))}
    </div>
  ),
};
export const Soft: Story = { args: { variant: "soft" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = {
  args: { variant: "link" },
  parameters: {
    docs: {
      description: {
        story:
          "A visual link variant remains a native button for actions. Use an anchor for navigation.",
      },
    },
  },
};
export const Rounded: Story = { args: { rounded: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const Loading: Story = { args: { loading: true, children: "Save changes" } };
export const Responsive: Story = {
  args: { responsive: true, size: "lg", children: "Resize the viewport" },
};

export const WithIcons: Story = {
  render: (args) => (
    <Button {...args} startIcon={<PlusIcon />} endIcon={<ArrowIcon />}>
      Create project
    </Button>
  ),
};
export const IconOnly: Story = {
  render: (args) => (
    <Button {...args} iconOnly aria-label="Add project">
      <span class="nui-button-icon" aria-hidden="true">
        <PlusIcon />
      </span>
    </Button>
  ),
};
export const ToggleAction: Story = {
  render: () => {
    const [pressed, setPressed] = createSignal(false);
    return (
      <Button
        variant="outline"
        aria-pressed={pressed()}
        onClick={() => setPressed((value) => !value)}
      >
        Bold
      </Button>
    );
  },
};
export const LoadingAction: Story = {
  render: () => {
    const [loading, setLoading] = createSignal(false);
    return (
      <div style={{ display: "flex", gap: "12px", "flex-wrap": "wrap" }}>
        <Button loading={loading()} onClick={() => setLoading(true)}>
          Save changes
        </Button>
        <Button variant="ghost" disabled={!loading()} onClick={() => setLoading(false)}>
          Reset demo
        </Button>
      </div>
    );
  },
};

export const CustomTokens: Story = {
  args: {
    variant: "solid",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Container-scoped CSS variables replace the primary palette without recompiling styles.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        "--nui-primary": "var(--nui-success)",
        "--nui-primary-hover": "var(--nui-success-hover)",
        "--nui-on-primary": "var(--nui-on-success)",
        "--nui-primary-soft": "var(--nui-success-soft)",
        "--nui-primary-soft-hover": "var(--nui-success-soft-hover)",
        "--nui-primary-soft-active": "var(--nui-success-soft-active)",
        "--nui-primary-border": "var(--nui-success-border)",
        "--nui-primary-border-hover": "var(--nui-success-border-hover)",
        "--nui-primary-text": "var(--nui-success-text)",
        "--nui-primary-text-strong": "var(--nui-success-text-strong)",
        "--nui-primary-focus": "var(--nui-success-focus)",
      }}
    >
      <Button {...args} />
    </div>
  ),
};

export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const PressFeedback: Story = { render: () => <ButtonPressExample /> };
export const PressFeedbackDark: Story = { ...PressFeedback, globals: { theme: "dark" } };
export const PressFeedbackThemes: Story = { render: () => <ButtonPressThemes /> };
export const PressFeedbackReducedMotion: Story = {
  ...PressFeedback,
  globals: { motion: "reduced" },
};
