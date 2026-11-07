import { createMemo, createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { formatNumber, parseNumber } from "./number-format";

export function NumberHelpersExample() {
  const [text, setText] = createSignal("12.345.678.901.234.567.890,1234");
  const [locale, setLocale] = createSignal("pt-BR");
  const parsed = createMemo(() =>
    parseNumber(text(), { locale: locale(), maximumFractionDigits: 4 }),
  );
  const output = createMemo(() => {
    const result = parsed();
    return result.status === "valid"
      ? formatNumber(result.value, {
          locale: locale(),
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })
      : "";
  });
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Text to parse ({locale()})</Field.Label>
        <Input value={text()} onInput={(event) => setText(event.currentTarget.value)} />
        <Field.Description>
          This is a plain Input. Only the helpers process the text below.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button onClick={() => setLocale(locale() === "pt-BR" ? "en-US" : "pt-BR")}>
          Switch parser locale
        </Button>
        <Button onClick={() => setText("invalid")}>Invalid</Button>
        <Button onClick={() => setText("")}>Empty</Button>
        <Button onClick={() => setText("0")}>Zero</Button>
      </div>
      <pre class="text-fields-demo-code">
        {JSON.stringify({ parsed: parsed(), formatted: output() }, null, 2)}
      </pre>
    </div>
  );
}
