import { Show } from "solid-js";
import { AlertDialog, Badge, Button, Separator, Sheet, Table, Timeline } from "../../index";
import { type Order, orderMoney, orderTone } from "./orders-data";

export function OrderDetails(props: {
  order: Order | undefined;
  open: boolean;
  onClose: () => void;
  onUpdate: (id: string, status: Order["status"]) => void;
}) {
  return (
    <Sheet.Root
      open={props.open}
      onOpenChange={(details) => {
        if (!details.open) props.onClose();
      }}
    >
      <Sheet.Content size="md">
        <Sheet.Header>
          <Sheet.Title>Order details</Sheet.Title>
          <Sheet.Description>{props.order?.id} · October 29, 2026</Sheet.Description>
          <Sheet.CloseTrigger />
        </Sheet.Header>
        <Sheet.Body>
          <Show when={props.order}>
            {(order) => (
              <div class="example-stack">
                <div>
                  <Badge tone={orderTone(order().status)}>{order().status}</Badge>
                </div>
                <dl class="example-details">
                  <div>
                    <dt>Customer</dt>
                    <dd>{order().customer}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{order().email}</dd>
                  </div>
                </dl>
                <Separator />
                <OrderItems order={order()} />
                <OrderHistory order={order()} />
                <Show when={order().status === "Pending"}>
                  <Button onClick={() => props.onUpdate(order().id, "Paid")}>Record payment</Button>
                  <CancelOrder onCancel={() => props.onUpdate(order().id, "Canceled")} />
                </Show>
              </div>
            )}
          </Show>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger
            asChild={(closeProps) => (
              <Button {...closeProps()} variant="outline">
                Close details
              </Button>
            )}
          />
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}

function OrderHistory(props: { order: Order }) {
  return (
    <Timeline.Root aria-label="Order history" density="compact">
      <Timeline.Item status="complete">
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Title>Order received</Timeline.Title>
          <Timeline.Time dateTime="2026-10-29T09:00:00Z">October 29, 09:00 UTC</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item status={props.order.status === "Pending" ? "current" : "complete"}>
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Title>
            {props.order.status === "Paid"
              ? "Payment recorded"
              : props.order.status === "Canceled"
                ? "Order canceled"
                : "Awaiting payment"}
          </Timeline.Title>
          <Timeline.Description>
            {props.order.status === "Pending"
              ? "Record payment after confirming the transfer."
              : "The order status is up to date."}
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
}

function CancelOrder(props: { onCancel: () => void }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline" tone="danger">
            Cancel order
          </Button>
        )}
      />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Cancel this order?</AlertDialog.Title>
          <AlertDialog.Description>
            The order will move to Canceled. No payment will be collected.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.CancelTrigger>Keep order</AlertDialog.CancelTrigger>
          <AlertDialog.ActionTrigger onClick={props.onCancel}>
            Cancel order
          </AlertDialog.ActionTrigger>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

function OrderItems(props: { order: Order }) {
  return (
    <Table.Root>
      <Table.Caption>Order items · USD</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Item</Table.Head>
          <Table.Head align="end">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{props.order.item}</Table.Cell>
          <Table.Cell align="end">{orderMoney(props.order.total)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
