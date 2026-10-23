import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../../actions/button/button";
import { ActionBar } from "./action-bar";
import { ActionBarExample } from "./stories/action-bar-example";

const meta = {
  title: "Compositions/Action bar",
  component: ActionBar.Root,
  tags: ["autodocs"],
  args: { variant: "surface" },
  argTypes: { variant: { control: "inline-radio", options: ["plain", "surface"] } },
  parameters: {
    docs: {
      description: {
        component:
          "A responsive row for contextual information and actions. Content stacks above wrapping actions on small screens. Native buttons retain their keyboard behavior. This composition introduces no ARIA toolbar, arrow-key navigation, or selection model; application state remains outside the component.",
      },
    },
  },
  render: (args) => <ActionBarExample {...args} />,
} satisfies Meta<typeof ActionBar.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Plain: Story = { args: { variant: "plain" } };
export const ActionsOnly: Story = {
  render: (args) => (
    <ActionBar.Root {...args}>
      <ActionBar.Actions>
        <Button disabled>Nothing to submit</Button>
      </ActionBar.Actions>
    </ActionBar.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
