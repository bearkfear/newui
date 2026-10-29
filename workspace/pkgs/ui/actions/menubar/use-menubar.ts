import type { UseMenuContext } from "@ark-ui/solid/menu";
import { createSignal } from "solid-js";
import type { MenuContentProps } from "../menu/menu.content";
import type { MenubarController } from "./menubar.context";

function nextIndex(key: string, index: number, count: number) {
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  return (index + (key === "ArrowRight" ? 1 : -1) + count) % count;
}

export function createMenubarController(
  api: UseMenuContext,
  element: () => HTMLDivElement | undefined,
): MenubarController {
  const [active, activate] = createSignal("");
  const [panels, setPanels] = createSignal<ReadonlyMap<string, MenuContentProps>>(new Map());
  function register(value: string, props: MenuContentProps) {
    setPanels((current) => new Map(current).set(value, props));
    return () =>
      setPanels((current) => {
        const next = new Map(current);
        if (next.get(value) === props) next.delete(value);
        return next;
      });
  }
  function move(key: string, current: string, open: boolean) {
    const triggers = Array.from(
      element()?.querySelectorAll<HTMLButtonElement>("[data-nui-menubar-trigger]:not(:disabled)") ??
        [],
    );
    const index = triggers.findIndex((trigger) => trigger.dataset["value"] === current);
    const target = triggers[nextIndex(key, index, triggers.length)];
    if (!target) return;
    const value = target.dataset["value"];
    if (!value) return;
    activate(value);
    if (open) {
      api().setHighlightedValue("");
      api().setTriggerValue(value);
    } else target.focus();
  }
  return { api, active, activate, move, panels, register };
}
