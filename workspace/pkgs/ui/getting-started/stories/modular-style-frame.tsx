import { createEffect, createSignal, type JSX, onCleanup } from "solid-js";
import { clearDelegatedEvents, DelegatedEvents, delegateEvents, render } from "solid-js/web";
import { ModularStyleSamples, type StylePreviewMode } from "./modular-style-samples";

interface ModularStyleFrameProps {
  css: string;
  mode?: StylePreviewMode;
  theme: string;
  content?: () => JSX.Element;
  title?: string;
  height?: string;
}

export function ModularStyleFrame(props: ModularStyleFrameProps) {
  const [document, setDocument] = createSignal<Document>();
  let dispose: (() => void) | undefined;
  const mount = (event: Event & { currentTarget: HTMLIFrameElement }) => {
    dispose?.();
    const frame = event.currentTarget.contentDocument;
    if (!frame) return;
    const style = frame.createElement("style");
    style.dataset["nuiModularStyles"] = "";
    style.textContent = props.css;
    frame.head.append(style);
    frame.body.style.cssText =
      "margin:0;background:var(--nui-background);color:var(--nui-foreground)";
    setDocument(frame);
    delegateEvents([...DelegatedEvents], frame);
    const unmount = render(
      () => props.content?.() ?? <ModularStyleSamples mode={props.mode ?? "combined"} />,
      frame.body,
    );
    dispose = () => {
      unmount();
      clearDelegatedEvents(frame);
    };
  };
  createEffect(() => {
    const frame = document();
    if (!frame) return;
    frame.documentElement.dataset["nuiTheme"] = props.theme;
    const style = frame.querySelector("style[data-nui-modular-styles]");
    if (style) style.textContent = props.css;
  });
  onCleanup(() => dispose?.());
  return (
    <iframe
      title={props.title ?? `${props.mode} styles in an isolated document`}
      srcdoc={
        '<!doctype html><html lang="en"><head><title>Modular styles</title></head><body></body></html>'
      }
      onLoad={mount}
      style={{
        display: "block",
        width: "100%",
        height: props.height ?? (props.mode === "combined" ? "40rem" : "26rem"),
        border: "0",
      }}
    />
  );
}
