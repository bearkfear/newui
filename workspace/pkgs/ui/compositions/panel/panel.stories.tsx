import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Panel } from "./panel";
import { FilePanel } from "./stories/file-panel";
import { filePanelSource } from "./stories/file-panel-source";
import { PanelExample } from "./stories/panel-example";
import { PanelHeaderTones } from "./stories/panel-header-tones";
import { TransactionPanel } from "./stories/transaction-panel";

const meta = {
  title: "Compositions/Panel",
  component: Panel.Root,
  tags: ["autodocs"],
  args: { tone: "default" },
  argTypes: { tone: { control: "inline-radio", options: ["default", "subtle"] } },
  parameters: {
    docs: {
      description: {
        component:
          "A named section for a header, search or filters, content, compact lists, and footer actions. Compose native elements and existing controls inside its parts. Root does not own filtering or selection: the application does. This example supports search, status filtering, selection, and reset with local Solid signals.",
      },
    },
  },
  render: (args) => (
    <div style={{ "max-width": "36rem" }}>
      <PanelExample {...args} />
    </div>
  ),
} satisfies Meta<typeof Panel.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Subtle: Story = { args: { tone: "subtle" } };
export const FileHeaderTabs: Story = {
  render: () => <FilePanel />,
  parameters: {
    docs: {
      description: {
        story:
          "Compact file-view header inspired by the provided Preview / Code / Blame reference. Tabs, metadata, and file actions share a bar and wrap on small screens. Raw selects Code; Copy and Download operate on the demo document. The source shows a minimal complete composition with a native download link.",
      },
      source: { language: "tsx", code: filePanelSource },
    },
  },
};
export const FileHeaderTabsDark: Story = { ...FileHeaderTabs, globals: { theme: "dark" } };
export const FileHeaderTabsMobile: Story = {
  ...FileHeaderTabs,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const RecordList: Story = { render: () => <TransactionPanel /> };
export const RecordListDark: Story = { ...RecordList, globals: { theme: "dark" } };
export const RecordListMobile: Story = {
  ...RecordList,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ContentOnly: Story = {
  render: (args) => (
    <Panel.Root {...args} aria-label="Release notes">
      <Panel.Header>
        <Panel.Title>Release notes</Panel.Title>
      </Panel.Header>
      <Panel.Body>
        Use Panel.Body for free-form content when a compact list is unnecessary.
      </Panel.Body>
    </Panel.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const SolidHeaderTones: Story = { render: () => <PanelHeaderTones /> };
export const SolidHeadersDark: Story = { ...SolidHeaderTones, globals: { theme: "dark" } };
