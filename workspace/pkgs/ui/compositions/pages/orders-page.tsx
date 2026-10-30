import { Download } from "lucide-solid";
import { For, Show } from "solid-js";
import { Button, Panel, Tabs } from "../../index";
import { OrderDetails } from "./order-details";
import { type Order, orderMoney } from "./orders-data";
import { OrdersFooter } from "./orders-footer";
import { type OrdersState, useOrders } from "./orders-state";
import { EmptyOrders, OrderTable } from "./orders-table";
import { MetricCard, type Notify, PageHeading } from "./page-parts";

export function OrdersPage(props: { notify: Notify }) {
  const state = useOrders(props.notify);
  return (
    <div class="example-page">
      <PageHeading
        eyebrow="EVERY DETAIL, IN ORDER"
        title="Orders"
        description="A little organization goes a long way."
        actions={
          <Button size="sm" variant="outline" startIcon={<Download />} onClick={state.exportOrders}>
            Export orders
          </Button>
        }
      />
      <OrdersSummary orders={state.orders()} />
      <Panel.Root>
        <Panel.Header>
          <Panel.Title>Recent orders</Panel.Title>
          <Panel.Description>
            Open an order to review its details or record a payment.
          </Panel.Description>
        </Panel.Header>
        <Panel.Body>
          <OrdersTabs state={state} />
        </Panel.Body>
        <OrdersFooter state={state} />
      </Panel.Root>
      <OrderDetails
        order={state.orders().find((order) => order.id === state.selected())}
        open={state.selected() !== undefined}
        onClose={() => state.setSelected(undefined)}
        onUpdate={state.update}
      />
    </div>
  );
}

function OrdersTabs(props: { state: OrdersState }) {
  return (
    <Tabs.Root
      value={props.state.filter()}
      onValueChange={(details) => props.state.changeFilter(details.value)}
      variant="segmented"
      size="sm"
    >
      <Tabs.List aria-label="Filter orders" class="example-filters">
        <For each={["All", "Paid", "Pending", "Canceled"]}>
          {(status) => <Tabs.Trigger value={status}>{status}</Tabs.Trigger>}
        </For>
      </Tabs.List>
      <For each={["All", "Paid", "Pending", "Canceled"]}>
        {(status) => (
          <Tabs.Content value={status}>
            <Show when={props.state.filtered().length > 0} fallback={<EmptyOrders />}>
              <OrderTable orders={props.state.visible()} onSelect={props.state.setSelected} />
            </Show>
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
}

function OrdersSummary(props: { orders: Order[] }) {
  const total = () =>
    props.orders
      .filter((order) => order.status === "Paid")
      .reduce((sum, order) => sum + order.total, 0);
  return (
    <div class="example-metrics">
      <MetricCard
        label="Collected revenue"
        value={orderMoney(total())}
        delta={14.2}
        description="vs. previous month"
      />
      <MetricCard
        label="Orders this month"
        value={String(props.orders.length)}
        delta={9.1}
        description="vs. previous month"
      />
      <MetricCard
        label="Awaiting payment"
        value={String(props.orders.filter((order) => order.status === "Pending").length)}
        delta={-12}
        isPositiveGood={false}
        description="vs. previous month"
      />
    </div>
  );
}
