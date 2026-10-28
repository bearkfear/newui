import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbExample } from "./stories/breadcrumb-example";
import { BreadcrumbNavigation } from "./stories/breadcrumb-navigation";

const meta = {
  title: "Navigation/Breadcrumb",
  tags: ["autodocs"],
  args: { currentLabel: "Breadcrumb" },
  argTypes: { currentLabel: { control: "text" } },
  parameters: {
    docs: {
      description: {
        component:
          "Native breadcrumb navigation inspired by Solid UI. Links identify ancestors; Page identifies the current destination. Item adds decorative chevrons automatically. Long labels wrap on narrow screens. No menu state or custom keyboard navigation is needed.",
      },
      source: {
        language: "tsx",
        code: `import { Breadcrumb } from "newui";
import "newui/styles.css";

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/workspace">Workspace</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/workspace/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`,
      },
    },
  },
  render: (args) => <BreadcrumbExample {...args} />,
} satisfies Meta<{ currentLabel: string }>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const LongLabel: Story = {
  args: { currentLabel: "Design system documentation and accessibility implementation guidelines" },
};
export const LongLabelMobile: Story = { ...LongLabel, globals: { ...Mobile.globals } };
export const LongWordMobile: Story = {
  args: { currentLabel: "DesignSystemDocumentationAndAccessibilityImplementationGuidelines" },
  globals: { ...Mobile.globals },
};
export const CurrentOnly: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Workspace</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};
export const Navigation: Story = { render: () => <BreadcrumbNavigation /> };
