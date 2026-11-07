import { createMemo, createSignal, For, Show } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Textarea } from "../textarea/textarea";
import type { TextMaskOptions } from "./input-mask.types";
import { textMaskLimits, validateTextMaskOptions } from "./input-mask.validation";
import { maskText, unmaskText } from "./mask-text";
import { MaskedInput } from "./masked-input";

const samples = [
  { label: "Document", mask: "###.###.###-##" },
  { label: "Maximum pattern length", mask: "#".repeat(textMaskLimits.maxPatternLength) },
  { label: "Pattern too long", mask: "#".repeat(textMaskLimits.maxPatternLength + 1) },
  {
    label: "Maximum alternatives",
    mask: Array.from({ length: textMaskLimits.maxPatterns }, () => "###.###.###-##"),
  },
  {
    label: "Too many alternatives",
    mask: Array.from({ length: textMaskLimits.maxPatterns + 1 }, () => "###.###.###-##"),
  },
  { label: "Wrong value type", mask: 42 },
  { label: "Empty pattern", mask: "" },
  { label: "Incomplete escape", mask: "###!" },
];

type ConfigurationPreview = {
  options?: TextMaskOptions;
  formatted?: string;
  raw?: string;
  error?: string;
};

function previewConfiguration(text: string): ConfigurationPreview {
  try {
    const options: unknown = JSON.parse(text);
    validateTextMaskOptions(options);
    const formatted = maskText("12345678900", options);
    return { options, formatted, raw: unmaskText(formatted, options) };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Invalid mask configuration." };
  }
}

export function ConfigurationLimitsExample() {
  const [source, setSource] = createSignal(JSON.stringify({ mask: "###.###.###-##" }, null, 2));
  const preview = createMemo(() => previewConfiguration(source()));
  return (
    <div class="text-fields-demo-stack">
      <p class="text-fields-demo-status">
        Limits: {textMaskLimits.maxPatternLength} UTF-16 code units per pattern,{" "}
        {textMaskLimits.maxPatterns} alternatives, and {textMaskLimits.maxCustomTokens} custom
        tokens. Invalid configuration is rejected before a preview is mounted; pattern definitions
        are never truncated.
      </p>
      <div class="text-fields-demo-row">
        <For each={samples}>
          {(sample) => (
            <Button
              variant="outline"
              onClick={() => setSource(JSON.stringify({ mask: sample.mask }, null, 2))}
            >
              {sample.label}
            </Button>
          )}
        </For>
      </div>
      <Field.Root invalid={Boolean(preview().error)}>
        <Field.Label>Backend configuration JSON</Field.Label>
        <Textarea
          value={source()}
          onInput={(event) => setSource(event.currentTarget.value)}
          rows={6}
        />
        <Show when={preview().error}>
          {(message) => <Field.ErrorText>{message()}</Field.ErrorText>}
        </Show>
      </Field.Root>
      <Show when={preview().options} keyed>
        {(options) => (
          <Field.Root>
            <Field.Label>Validated mask preview</Field.Label>
            <MaskedInput {...options} defaultValue="12345678900" />
          </Field.Root>
        )}
      </Show>
      <pre class="text-fields-demo-code" aria-live="polite">
        {JSON.stringify(
          { formatted: preview().formatted, raw: preview().raw, error: preview().error },
          null,
          2,
        )}
      </pre>
    </div>
  );
}
