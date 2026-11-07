import { For } from "solid-js";
import type { TextMaskOptions } from "./input-mask.types";
import { maskText, unmaskText } from "./mask-text";

const examples: { label: string; raw: string; options: TextMaskOptions }[] = [
  { label: "Document", raw: "12345678900", options: { mask: "###.###.###-##" } },
  { label: "Postal code", raw: "12345678", options: { mask: "#####-###" } },
  {
    label: "Landline",
    raw: "1134567890",
    options: { mask: ["(##) ####-####", "(##) #####-####"] },
  },
  { label: "Mobile", raw: "11987654321", options: { mask: ["(##) ####-####", "(##) #####-####"] } },
  {
    label: "Custom numeric token",
    raw: "123456",
    options: { mask: "&&&-&&&", tokens: { "&": { pattern: /[0-9]/ } } },
  },
  { label: "Partial document", raw: "12345", options: { mask: "###.###.###-##" } },
  { label: "Literal prefix", raw: "123", options: { mask: "!A-###" } },
  { label: "Uppercase normalization", raw: "abc123", options: { mask: "AAA-###" } },
  { label: "Empty text", raw: "", options: { mask: "###.###.###-##" } },
];

export function MaskTextExamples() {
  return (
    <div class="text-fields-demo-stack">
      <p class="text-fields-demo-status">
        These values use maskText and unmaskText without rendering an input. Unmasking retains
        normalization: it cannot restore discarded characters or reverse uppercase conversion.
      </p>
      <For each={examples}>
        {(example) => {
          const formatted = maskText(example.raw, example.options);
          return (
            <section class="text-fields-demo-stack" aria-label={example.label}>
              <strong>{example.label}</strong>
              <pre class="text-fields-demo-code">
                {JSON.stringify(
                  {
                    source: example.raw,
                    formatted,
                    unmasked: unmaskText(formatted, example.options),
                  },
                  null,
                  2,
                )}
              </pre>
            </section>
          );
        }}
      </For>
    </div>
  );
}
