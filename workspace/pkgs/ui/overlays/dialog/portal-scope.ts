import type { JSX } from "solid-js";
import { createSignal, onCleanup, onMount } from "solid-js";

interface PortalScope {
  style: JSX.CSSProperties;
  motion: string | undefined;
}

function readScope(origin: HTMLElement): PortalScope {
  const computed = origin.ownerDocument.defaultView?.getComputedStyle(origin);
  const style: Record<string, string> = {};
  if (computed) {
    for (const name of computed) {
      if (name.startsWith("--nui-")) style[name] = computed.getPropertyValue(name);
    }
    for (const name of ["color-scheme", "font-family", "font-size", "line-height", "color"]) {
      style[name] = computed.getPropertyValue(name);
    }
  }
  return {
    style,
    motion: origin.closest("[data-motion]")?.getAttribute("data-motion") ?? undefined,
  };
}

export function createPortalScope(origin: () => HTMLElement | undefined) {
  const [scope, setScope] = createSignal<PortalScope>({ style: {}, motion: undefined });
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    const element = origin();
    if (!element) return;
    const update = () => setScope(readScope(element));
    const Observer = element.ownerDocument.defaultView?.MutationObserver;
    const observer = Observer ? new Observer(update) : undefined;
    for (let node = element.parentElement; node; node = node.parentElement) {
      observer?.observe(node, {
        attributes: true,
        attributeFilter: ["class", "style", "data-nui-theme", "data-motion"],
      });
    }
    update();
    setReady(true);
    onCleanup(() => observer?.disconnect());
  });
  return { scope, ready };
}
