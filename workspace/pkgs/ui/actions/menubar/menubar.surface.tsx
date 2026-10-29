import { createEffect, createSignal, mergeProps, Show, splitProps, untrack } from "solid-js";
import { MenuContent } from "../menu/menu.content";
import { useMenubar } from "./menubar.context";

export function MenubarSurface() {
  const bar = useMenubar();
  const panel = () => bar.panels().get(bar.api().triggerValue ?? "");
  const [local, rest] = splitProps(
    mergeProps(() => panel() ?? {}),
    ["children", "onKeyDown", "ref"],
  );
  const [surface, setSurface] = createSignal<HTMLDivElement>();
  createEffect(() => {
    const ref = local.ref;
    const element = surface();
    if (typeof ref === "function" && element) untrack(() => ref(element));
  });
  return (
    <MenuContent
      {...rest}
      ref={setSurface}
      on:keydown={{
        capture: true,
        handleEvent: (event) => {
          if (typeof local.onKeyDown === "function") local.onKeyDown(event);
          else local.onKeyDown?.[0](local.onKeyDown[1], event);
          if (event.defaultPrevented || event.target !== event.currentTarget) return;
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          if (
            event.key === "ArrowRight" &&
            event.currentTarget.querySelector("[data-part=trigger-item][data-highlighted]")
          )
            return;
          event.preventDefault();
          event.stopPropagation();
          bar.move(event.key, bar.api().triggerValue ?? "", true);
        },
      }}
    >
      <Show when={panel()} keyed>
        {(content) => content.children}
      </Show>
    </MenuContent>
  );
}
