import { createSignal, For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Empty } from "../../../feedback/empty/empty";
import { Table } from "../table";
import { InvoiceTable } from "./invoice-table";

export function TableAppearances() {
  const examples = [
    { title: "Plain", props: {} },
    { title: "Striped", props: { striped: true } },
    { title: "Bordered", props: { variant: "bordered" as const } },
    {
      title: "Compact, striped, and bordered",
      props: {
        variant: "bordered" as const,
        density: "compact" as const,
        striped: true,
        hoverable: true,
      },
    },
  ];
  return (
    <div style={{ display: "grid", gap: "2rem", "min-width": "0" }}>
      <For each={examples}>
        {(example) => (
          <div style={{ "min-width": "0" }}>
            <Heading as="h2" size="5" style={{ "margin-bottom": "0.75rem" }}>
              {example.title}
            </Heading>
            <InvoiceTable {...example.props} />
          </div>
        )}
      </For>
    </div>
  );
}

export function GroupedHeaders() {
  return (
    <Table.Container aria-label="Quarterly revenue comparison">
      <Table.Root variant="bordered">
        <Table.Caption>Quarterly revenue in USD · Grouped column headers.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head rowSpan={2}>Product</Table.Head>
            <Table.Head scope="colgroup" colSpan={2} align="center">
              2026 revenue
            </Table.Head>
          </Table.Row>
          <Table.Row>
            <Table.Head align="end">Q1</Table.Head>
            <Table.Head align="end">Q2</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Head scope="row">Workspace</Table.Head>
            <Table.Cell align="end">$12,400</Table.Cell>
            <Table.Cell align="end">$15,200</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Head scope="row">Analytics</Table.Head>
            <Table.Cell align="end">$8,600</Table.Cell>
            <Table.Cell align="end">$9,800</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}

export function EmptyTable() {
  return (
    <Table.Container aria-label="Invoices">
      <Table.Root>
        <Table.Caption>Invoices for the selected period.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head align="end">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan={3} align="center">
              <Empty.Root layout="compact">
                <Empty.Icon />
                <Empty.Content>
                  <Empty.Title>No invoices yet</Empty.Title>
                  <Empty.Description>New invoices will appear here.</Empty.Description>
                </Empty.Content>
              </Empty.Root>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}

export function TableActions() {
  const [current, setCurrent] = createSignal<string | null>(null);
  return (
    <div style={{ display: "grid", gap: "1rem", "min-width": "0" }}>
      <Table.Container aria-label="Project details">
        <Table.Root hoverable>
          <Table.Caption>Project actions use native buttons inside cells.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>Project</Table.Head>
              <Table.Head>Owner</Table.Head>
              <Table.Head align="end">Action</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For
              each={[
                { name: "Website refresh", owner: "Alex" },
                { name: "Component library", owner: "Sam" },
              ]}
            >
              {(project) => (
                <Table.Row selected={current() === project.name}>
                  <Table.Head scope="row">
                    {project.name}
                    {current() === project.name && " · Current"}
                  </Table.Head>
                  <Table.Cell>{project.owner}</Table.Cell>
                  <Table.Cell align="end">
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label={`View ${project.name}`}
                      onClick={() => setCurrent(project.name)}
                    >
                      View
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Table.Container>
      <Text role="status" tone="muted" size="7">
        Current project: {current() ?? "None"}
      </Text>
    </div>
  );
}
