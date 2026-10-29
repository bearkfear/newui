import { For } from "solid-js";
import { Badge } from "../../../content/badge/badge";
import { Table, type TableRootProps } from "../table";
import { invoices, statusTones } from "./invoices";

export type InvoiceTableProps = Pick<
  TableRootProps,
  "variant" | "density" | "striped" | "hoverable" | "fullWidth"
> & {
  highlightRow?: boolean;
};

export function InvoiceTable(props: InvoiceTableProps) {
  return (
    <Table.Container aria-label="Recent invoice details">
      <Table.Root
        variant={props.variant}
        density={props.density}
        striped={props.striped ?? false}
        hoverable={props.hoverable ?? false}
        fullWidth={props.fullWidth}
        style={{ "min-width": "38rem" }}
      >
        <Table.Caption>Recent invoices · October 2026. Amounts in USD.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Invoice</Table.Head>
            <Table.Head>Customer</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head align="end">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={invoices}>
            {(invoice) => (
              <Table.Row selected={Boolean(props.highlightRow) && invoice.id === "INV-1043"}>
                <Table.Head scope="row">
                  {invoice.id}
                  {props.highlightRow && invoice.id === "INV-1043" && <span> · Current</span>}
                </Table.Head>
                <Table.Cell>{invoice.customer}</Table.Cell>
                <Table.Cell>
                  <Badge tone={statusTones[invoice.status]}>{invoice.status}</Badge>
                </Table.Cell>
                <Table.Cell>{invoice.method}</Table.Cell>
                <Table.Cell align="end">{invoice.amount}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Head scope="row" colSpan={4}>
              Total
            </Table.Head>
            <Table.Cell align="end">$1,750.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    </Table.Container>
  );
}
