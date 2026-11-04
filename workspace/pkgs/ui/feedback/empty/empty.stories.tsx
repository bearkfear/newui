import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { EmptyTable } from "../../data/table/stories/table-examples";
import {
  EmptyExample,
  type EmptyExampleProps,
  EmptyInCard,
  NoResults,
} from "./stories/empty-example";
import { EmptyFlow } from "./stories/empty-flow";

const meta = {
  title: "Feedback/Empty",
  tags: ["autodocs"],
  args: {
    title: "No projects yet",
    description: "Create your first project to get started.",
    layout: "section",
    showIcon: true,
    showActions: false,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    layout: { control: "inline-radio", options: ["compact", "section", "page"] },
    showIcon: { control: "boolean" },
    showActions: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A reusable empty state for pages, sections, lists, and tables. Compose an optional decorative icon, a title, description, and native actions. The default inbox icon can be replaced with your own. Root is a native div with no live announcement, animation, focus management, or data fetching. Applications own loading, empty, error, and content states; use a persistent external status region for asynchronous updates. All colors use Radix-backed newui tokens.",
      },
      source: {
        language: "tsx",
        code: `import { Button, Empty } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Empty.Root>
  <Empty.Icon />
  <Empty.Content>
    <Empty.Title>No projects yet</Empty.Title>
    <Empty.Description>Create your first project to get started.</Empty.Description>
  </Empty.Content>
  <Empty.Actions>
    <Button onClick={createProject}>Create project</Button>
  </Empty.Actions>
</Empty.Root>`,
      },
    },
  },
  render: (args) => <EmptyExample {...args} />,
} satisfies Meta<EmptyExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithActions: Story = { args: { showActions: true } };
export const WithoutIcon: Story = { args: { showIcon: false } };
export const TitleOnly: Story = { args: { showIcon: false, description: "" } };
export const Compact: Story = { args: { layout: "compact" } };
export const Page: Story = { args: { layout: "page" }, globals: { spacing: "flush" } };
export const InsideCard: Story = { render: () => <EmptyInCard /> };
export const InsideTable: Story = { render: () => <EmptyTable /> };
export const SearchResults: Story = { render: () => <NoResults /> };
export const LoadingToEmpty: Story = { render: () => <EmptyFlow /> };
export const LongMessage: Story = {
  args: {
    title: "There are no shared project updates available in this workspace yet",
    description:
      "Once your team starts creating projects and sharing progress, the latest updates will appear here. You can create the first project whenever you are ready.",
    showActions: true,
  },
};
export const Dark: Story = { ...WithActions, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...WithActions,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const NestedDark: Story = {
  globals: { theme: "light" },
  render: () => (
    <div
      data-nui-theme="dark"
      style={{
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        "border-radius": "0.75rem",
      }}
    >
      <EmptyExample showActions />
    </div>
  ),
};
