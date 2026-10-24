import { usePresenceContext } from "@ark-ui/solid/presence";
import type { JSX } from "solid-js";
import { Show } from "solid-js";
import { Portal } from "solid-js/web";
import { createPortalScope } from "./portal-scope";

export interface DialogPortalProps {
  children: JSX.Element;
  mount?: HTMLElement;
}

export function DialogPortal(props: DialogPortalProps) {
  const presence = usePresenceContext();
  let origin: HTMLSpanElement | undefined;
  const { scope, ready } = createPortalScope(() => origin);
  return (
    <>
      <span hidden aria-hidden="true" ref={origin} />
      <Show
        when={ready() && !presence().unmounted && (props.mount ?? origin?.ownerDocument.body)}
        keyed
      >
        {(mount) => (
          <Portal mount={mount}>
            <div data-nui-overlay-root="" data-motion={scope().motion} style={scope().style}>
              {props.children}
            </div>
          </Portal>
        )}
      </Show>
    </>
  );
}
