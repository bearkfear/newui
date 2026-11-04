import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Heading } from "../../content/heading/heading";
import type { PaginationRootProps } from "./pagination";
import { PaginationExample } from "./stories/pagination-example";
import { PaginationRecords } from "./stories/pagination-records";

const meta = {
  title: "Navigation/Pagination",
  tags: ["autodocs"],
  args: {
    count: 200,
    defaultPage: 10,
    defaultPageSize: 10,
    siblingCount: 1,
    size: "md",
  },
  argTypes: {
    count: { control: { type: "number", min: 0 } },
    defaultPage: { control: { type: "number", min: 1 } },
    defaultPageSize: { control: { type: "number", min: 1 } },
    siblingCount: { control: { type: "number", min: 0, max: 3 } },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Ark-powered pagination with numbered pages, ellipses, and previous/next controls. Solid UI-inspired styling groups Previous, page numbers, and Next in one centered row, with ghost controls and an outlined current page. Responsive mode shows a compact page summary on mobile. Pages are one-based; count is the number of records. Native buttons support Tab and Enter/Space. Initial page controls apply on mount; use the controlled example for live updates.",
      },
      source: {
        code: `import { Pagination } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Pagination.Root count={200} defaultPage={10} defaultPageSize={10}>
  <Pagination.PrevTrigger />
  <Pagination.Items />
  <Pagination.NextTrigger />
</Pagination.Root>`,
      },
    },
  },
  render: (args) => <PaginationExample {...args} />,
  decorators: [
    (Story) => (
      <div style={{ "max-width": "48rem", "min-width": "0" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<PaginationRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FirstPage: Story = { args: { defaultPage: 1 } };
export const LastPage: Story = { args: { defaultPage: 20 } };
export const SinglePage: Story = { args: { count: 7, defaultPage: 1 } };
export const Empty: Story = { args: { count: 0, defaultPage: 1 } };
export const ControlledRecords: Story = {
  render: () => <PaginationRecords />,
  parameters: {
    docs: {
      source: {
        code: `import { createSignal } from "solid-js";
import { Pagination } from "@egcs/newui";
import "@egcs/newui/styles.css";

export function DocumentPages() {
  const [page, setPage] = createSignal(1);
  const [pageSize, setPageSize] = createSignal(10);
  return <>
    <label>Rows per page
      <select value={pageSize()} onChange={(event) => {
        setPageSize(Number(event.currentTarget.value));
        setPage(1);
      }}>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </label>
    <Pagination.Root count={137} page={page()} pageSize={pageSize()}
      onPageChange={(details) => setPage(details.page)}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <p role="status">Page {page()} of {Math.ceil(137 / pageSize())}</p>
  </>;
}`,
      },
    },
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RecordsMobile: Story = { ...ControlledRecords, globals: { ...Mobile.globals } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "1.5rem" }}>
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <section>
            <Heading as="h2" size="6">
              {size}
            </Heading>
            <PaginationExample {...args} size={size} aria-label={`${size} pagination`} />
          </section>
        )}
      </For>
    </div>
  ),
};
