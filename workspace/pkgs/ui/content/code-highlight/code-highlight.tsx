import type { JSX } from "solid-js";
import { createMemo, createSignal, onCleanup, Show, splitProps } from "solid-js";
import { Button } from "../../actions/button/button";
import { HighlightTokens, highlightCode } from "./code-highlight.tokens";
import type { CodeHighlightLanguage } from "./code-highlight.types";

export type { CodeHighlightLanguage } from "./code-highlight.types";

export type CodeHighlightProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children" | "title"> & {
  code: string;
  language?: CodeHighlightLanguage;
  title?: string;
  copyable?: boolean;
  copyLabel?: string;
  copiedLabel?: string;
  copyErrorLabel?: string;
};

/** Display source code with optional syntax highlighting and a copy action. */
export function CodeHighlight(props: CodeHighlightProps) {
  const [local, rest] = splitProps(props, [
    "code",
    "language",
    "title",
    "copyable",
    "copyLabel",
    "copiedLabel",
    "copyErrorLabel",
    "class",
  ]);
  const tokens = createMemo(() => highlightCode(local.code, local.language ?? "text"));
  const [status, setStatus] = createSignal<"idle" | "copied" | "error">("idle");
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(local.code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    clearTimeout(timer);
    timer = setTimeout(() => setStatus("idle"), 3000);
  };
  return (
    <div {...rest} class={["nui-code-highlight", local.class].filter(Boolean).join(" ")}>
      <Show when={local.title || local.copyable}>
        <div class="nui-code-highlight-header">
          <span class="nui-code-highlight-title">{local.title}</span>
          <Show when={local.copyable}>
            <Button size="sm" variant="ghost" onClick={copy}>
              {status() === "copied"
                ? (local.copiedLabel ?? "Copied")
                : (local.copyLabel ?? "Copy")}
            </Button>
          </Show>
        </div>
      </Show>
      <section class="nui-code-highlight-scroll" tabindex="0" aria-label={local.title ?? "Code"}>
        <pre class="nui-code-highlight-pre">
          <code>
            <HighlightTokens tokens={tokens()} />
          </code>
        </pre>
      </section>
      <span
        class="nui-code-highlight-status"
        data-error={status() === "error" ? "" : undefined}
        role="status"
      >
        {status() === "error"
          ? (local.copyErrorLabel ?? "Could not copy code")
          : status() === "copied"
            ? (local.copiedLabel ?? "Copied")
            : ""}
      </span>
    </div>
  );
}
