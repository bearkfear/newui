import type { JSX } from "solid-js";
import { Show } from "solid-js";
import { Portal } from "solid-js/web";
import { createPortalScope } from "../../overlays/portal-scope";

export function ToastPortal(props: { children: JSX.Element; mount?: HTMLElement }) {
  let origin: HTMLSpanElement | undefined;
  const { scope, ready } = createPortalScope(() => origin);
  return (
    <>
      <span hidden aria-hidden="true" ref={origin} />
      <Show when={ready() && (props.mount ?? origin?.ownerDocument.body)} keyed>
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
