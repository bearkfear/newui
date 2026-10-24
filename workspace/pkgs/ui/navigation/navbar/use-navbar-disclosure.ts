import type { CollapsibleOpenChangeDetails } from "@ark-ui/solid/collapsible";
import { useCollapsible } from "@ark-ui/solid/collapsible";
import { createMediaQuery } from "@solid-primitives/media";
import { createSignal, createUniqueId } from "solid-js";

export type NavbarDisclosureProps = {
  open?: boolean | undefined;
  defaultOpen?: boolean | undefined;
  onOpenChange?: ((details: CollapsibleOpenChangeDetails) => void) | undefined;
};

export function useNavbarDisclosure(props: NavbarDisclosureProps) {
  const desktop = createMediaQuery("(min-width: 48rem)");
  const [mobileOpen, setMobileOpen] = createSignal(props.defaultOpen ?? false);
  const triggerId = `${createUniqueId()}-navbar-toggle`;
  const api = useCollapsible({
    ids: { trigger: triggerId },
    get open() {
      return desktop() || (props.open ?? mobileOpen());
    },
    onOpenChange(details) {
      if (desktop()) return;
      if (props.open === undefined) setMobileOpen(details.open);
      props.onOpenChange?.(details);
    },
  });
  function close() {
    if (!desktop()) api().setOpen(false);
  }
  function onKeyDown(event: KeyboardEvent & { currentTarget: HTMLDivElement }) {
    if (event.key !== "Escape" || event.defaultPrevented || desktop() || !api().open) return;
    event.preventDefault();
    close();
    event.currentTarget.ownerDocument.getElementById(triggerId)?.focus();
  }
  return { api, desktop, close, onKeyDown };
}
