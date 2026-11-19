import { Button } from "@egcs/newui/actions";
import { Counter, CounterAnchor } from "@egcs/newui/content";
import { createSignal } from "solid-js";

export function CounterAnchorExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [count, setCount] = createSignal(4);
  const label = () =>
    pt() ? `Notificações (${count()} não lidas)` : `Notifications (${count()} unread)`;

  return (
    <CounterAnchor>
      <Button variant="outline" aria-label={label()} onClick={() => setCount(0)}>
        {pt() ? "Notificações" : "Notifications"}
      </Button>
      <Counter value={count()} placement="top-end" aria-hidden="true" />
    </CounterAnchor>
  );
}
