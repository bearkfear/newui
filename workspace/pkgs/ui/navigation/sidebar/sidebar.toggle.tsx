import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-solid";
import { Show, splitProps } from "solid-js";
import { Button, type ButtonProps } from "../../actions/button/button";
import { Sheet } from "../../overlays/sheet/sheet";
import { useSidebar } from "./sidebar.context";

export type SidebarToggleProps = ButtonProps;

export function SidebarToggle(props: SidebarToggleProps) {
  const context = useSidebar();
  const [local, rest] = splitProps(props, ["onClick", "children", "ref"]);
  const icon = () => (
    <Show when={context.collapsed()} fallback={<PanelLeftClose />}>
      <PanelLeftOpen />
    </Show>
  );
  return (
    <Show
      when={context.desktop()}
      fallback={
        <Sheet.Trigger
          onClick={local.onClick}
          ref={local.ref}
          disabled={rest.disabled}
          asChild={(triggerProps) => (
            <Button
              variant="ghost"
              tone="neutral"
              size="sm"
              iconOnly
              aria-label="Open navigation"
              {...rest}
              {...triggerProps()}
            >
              {local.children ?? <Menu />}
            </Button>
          )}
        />
      }
    >
      <Button
        variant="ghost"
        tone="neutral"
        size="sm"
        iconOnly
        {...rest}
        aria-label={
          props["aria-label"] ?? (context.collapsed() ? "Expand sidebar" : "Collapse sidebar")
        }
        aria-expanded={!context.collapsed()}
        aria-controls={context.api().getPanelProps({ id: "sidebar" }).id}
        ref={local.ref}
        onClick={(event) => {
          if (typeof local.onClick === "function") local.onClick(event);
          else local.onClick?.[0](local.onClick[1], event);
          if (!event.defaultPrevented) context.toggle();
        }}
      >
        {local.children ?? icon()}
      </Button>
    </Show>
  );
}
