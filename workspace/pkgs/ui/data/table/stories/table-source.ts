export const tableSource = `import { Table } from "newui";
import "newui/styles.css";

<Table.Container aria-label="Recent invoices">
  <Table.Root striped hoverable>
    <Table.Caption>Recent invoices · Amounts in USD.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Invoice</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head align="end">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Head scope="row">INV-1042</Table.Head>
        <Table.Cell>Paid</Table.Cell>
        <Table.Cell align="end">$250.00</Table.Cell>
      </Table.Row>
      <Table.Row selected>
        <Table.Head scope="row">INV-1043 · Current</Table.Head>
        <Table.Cell>Pending</Table.Cell>
        <Table.Cell align="end">$150.00</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Head scope="row" colSpan={2}>Total</Table.Head>
        <Table.Cell align="end">$400.00</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>
</Table.Container>`;
