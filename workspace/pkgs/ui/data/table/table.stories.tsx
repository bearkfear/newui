import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { InvoiceTable, type InvoiceTableProps } from "./stories/invoice-table";
import { playlistSource } from "./stories/playlist-source";
import { PlaylistTable } from "./stories/playlist-table";
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
  <Table.Row>
    <Table.Cell colSpan={3}>
      <Empty.Root layout="compact">
        <Empty.Icon />
        <Empty.Content>
          <Empty.Title>No invoices yet</Empty.Title>
          <Empty.Description>New invoices will appear here.</Empty.Description>
        </Empty.Content>
      </Empty.Root>
    </Table.Cell>
  </Table.Row>
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
export const Mobile: Story = {
  ...Combined,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};

export const Playlist: Story = {
  render: () => <PlaylistTable />,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Music-library composition inspired by the supplied playlist reference. Native cells contain illustrated covers, title/album details, artists, favorites, library toggles, durations, and Ark dropdown actions. Select using the song title; playback controls only preview state and do not load audio. The initial blue row is selected independently of playback. Scoped story CSS supplies rounded rows and solid emphasis without changing Table's default appearance or API. Narrow viewports preserve the columns with native horizontal scrolling.",
      },
      source: { code: playlistSource },
    },
  },
};
export const PlaylistMobile: Story = {
  ...Playlist,
  globals: { viewport: { value: "mobile", isRotated: false } },
};
