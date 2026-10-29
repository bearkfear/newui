import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { InvoiceTable, type InvoiceTableProps } from "./stories/invoice-table";
import {
  EmptyTable,
  GroupedHeaders,
  TableActions,
  TableAppearances,
} from "./stories/table-examples";
import { tableSource } from "./stories/table-source";

const meta = {
  title: "Data/Table",
  tags: ["autodocs"],
  args: {
    variant: "plain",
    density: "comfortable",
    striped: false,
    hoverable: false,
    fullWidth: true,
    highlightRow: false,
  },
  argTypes: {
    variant: { control: "select", options: ["plain", "bordered"] },
    density: { control: "select", options: ["compact", "comfortable"] },
    striped: { control: "boolean" },
    hoverable: { control: "boolean" },
    fullWidth: { control: "boolean" },
    highlightRow: {
      control: "boolean",
      description: "Demo-only state applied to one Table.Row's selected prop.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Native HTML tables with newui's Radix tokens. Solid UI inspires the restrained default; Bulma inspires composable stripes, cell borders, compact density, hover highlighting, and highlighted rows. Container is an optional named, keyboard-focusable scroll region; Root is the table itself. Caption names the table, Head defaults to column scope and accepts row scope, and cells preserve colspan/rowspan and DOM refs. Row.selected supplies visual emphasis only. Sorting, filtering, pagination, and selection behavior belong to the future Data Table. No interaction primitive or extra dependency is needed.",
      },
      source: { language: "tsx", code: tableSource },
    },
  },
  render: (args) => <InvoiceTable {...args} />,
} satisfies Meta<InvoiceTableProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Striped: Story = { args: { striped: true } };
export const Bordered: Story = { args: { variant: "bordered" } };
export const Compact: Story = { args: { density: "compact" } };
export const Hoverable: Story = { args: { hoverable: true } };
export const HighlightedRow: Story = {
  args: { striped: true, hoverable: true, highlightRow: true },
};
export const Combined: Story = {
  args: {
    variant: "bordered",
    density: "compact",
    striped: true,
    hoverable: true,
    highlightRow: true,
  },
};
export const NaturalWidth: Story = { args: { fullWidth: false } };
export const Appearances: Story = { render: () => <TableAppearances /> };
export const SpanningHeaders: Story = {
  render: () => <GroupedHeaders />,
  parameters: {
    docs: {
      source: {
        code: `<Table.Head rowSpan={2}>Product</Table.Head>
<Table.Head scope="colgroup" colSpan={2} align="center">2026 revenue</Table.Head>`,
      },
    },
  },
};
export const Empty: Story = {
  render: () => <EmptyTable />,
  parameters: {
    docs: {
      source: {
        code: `<Table.Body>
  <Table.Row><Table.Cell colSpan={3} align="center">No invoices yet.</Table.Cell></Table.Row>
</Table.Body>`,
      },
    },
  },
};
export const WithActions: Story = {
  render: () => <TableActions />,
  parameters: {
    docs: {
      source: {
        code: `<Table.Row selected={current() === project.name}>
  <Table.Head scope="row">{project.name}</Table.Head>
  <Table.Cell align="end">
    <Button onClick={() => setCurrent(project.name)} aria-label={\`View \${project.name}\`}>View</Button>
  </Table.Cell>
</Table.Row>`,
      },
    },
  },
};
export const Dark: Story = { ...Combined, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Combined,
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
        padding: "1rem",
        "border-radius": "0.75rem",
        "min-width": "0",
      }}
    >
      <InvoiceTable striped hoverable highlightRow />
    </div>
  ),
};
