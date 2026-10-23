import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

const meta = {
  title: "Actions/Button group",
  component: ButtonGroup,
  tags: ["autodocs"],
  args: { orientation: "horizontal", align: "start", attached: false, fullWidth: false, size: "md", variant: "outline", tone: "primary", disabled: false, "aria-label": "Document actions" },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
    attached: { control: "boolean" }, fullWidth: { control: "boolean" }, disabled: { control: "boolean" },
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] },
    variant: { control: "select", options: ["solid", "outline", "soft", "ghost", "link"] },
    tone: { control: "select", options: ["primary", "neutral", "info", "success", "warning", "danger"] },
  },
  parameters: { docs: { description: { component: "A named group of native buttons with shared size, variant, tone, and disabled state. Spaced horizontal groups wrap; attached groups stay on one line. Each button remains reachable with Tab. This is a layout group with no toolbar or selection behavior. Use direct Button children for joined corners and equal widths." } } },
  render: (args) => <ButtonGroup {...args}><Button>Save</Button><Button>Duplicate</Button><Button>Archive</Button></ButtonGroup>,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Attached: Story = { args: { attached: true } };
export const Vertical: Story = { args: { orientation: "vertical", attached: true } };
export const Centered: Story = { args: { align: "center" } };
export const EndAligned: Story = { args: { align: "end" } };
export const FullWidth: Story = { args: { fullWidth: true, attached: true } };
export const Disabled: Story = { args: { disabled: true } };
export const IndividualOverrides: Story = {
  render: (args) => <ButtonGroup {...args}><Button variant="solid">Save</Button><Button>Cancel</Button><Button tone="danger">Delete</Button></ButtonGroup>,
};
export const Wrapping: Story = {
  render: (args) => <div style={{ "max-width": "280px" }}><ButtonGroup {...args}><Button>Save changes</Button><Button>Preview</Button><Button>Duplicate</Button><Button>Archive</Button></ButtonGroup></div>,
};
export const RightToLeft: Story = { args: { attached: true }, globals: { direction: "rtl" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
