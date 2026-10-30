import { PackageOpen } from "lucide-solid";
import { For } from "solid-js";
import { Badge, Empty, Table } from "../../index";
import { type Order, orderMoney, orderTone } from "./orders-data";

export function OrderTable(props: { orders: Order[]; onSelect: (id: string) => void }) {
  return (
    <Table.Container aria-label="Recent orders">
      <Table.Root hoverable class="example-table">
        <Table.Caption>Recent orders · All amounts in USD</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Order</Table.Head>
            <Table.Head>Customer</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head align="end">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={props.orders}>
            {(order) => (
              <Table.Row>
                <Table.Head scope="row">
                  <button
                    type="button"
                    class="example-table-button"
                    onClick={() => props.onSelect(order.id)}
                  >
                    {order.id}
                  </button>
                  <span class="example-table-secondary">Oct 29, 2026</span>
                </Table.Head>
                <Table.Cell>
                  {order.customer}
                  <span class="example-table-secondary">{order.email}</span>
                </Table.Cell>
                <Table.Cell>
                  <Badge tone={orderTone(order.status)}>{order.status}</Badge>
                </Table.Cell>
                <Table.Cell align="end">{orderMoney(order.total)}</Table.Cell>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}

export function EmptyOrders() {
  return (
    <Empty.Root layout="section">
      <Empty.Icon>
        <PackageOpen />
      </Empty.Icon>
      <Empty.Content>
        <Empty.Title>No orders here</Empty.Title>
        <Empty.Description>
          Try another status, or cancel a pending order to see it here.
        </Empty.Description>
      </Empty.Content>
    </Empty.Root>
  );
}
