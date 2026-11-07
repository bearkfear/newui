import { createMemo, createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { formatCurrency, parseCurrency } from "./currency-format";

export function CurrencyHelpersExample() {
  const [text, setText] = createSignal("R$ 12.345.678.901.234.567.890,12");
  const options = { locale: "pt-BR", currency: "BRL" };
  const parsed = createMemo(() => parseCurrency(text(), options));
  const formatted = createMemo(() => {
    const result = parsed();
    return result.status === "valid" ? formatCurrency(result.value, options) : "";
  });
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Currency text to parse</Field.Label>
        <Input value={text()} onInput={(event) => setText(event.currentTarget.value)} />
        <Field.Description>
          A plain Input demonstrates helpers without CurrencyInput. The currency symbol is optional;
          separators follow pt-BR.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button onClick={() => setText("-R$ 1.234,56")}>Negative</Button>
        <Button onClick={() => setText("1.234,56")}>No symbol</Button>
        <Button onClick={() => setText("US$ 1.234,56")}>Different currency</Button>
        <Button onClick={() => setText("")}>Empty</Button>
        <Button onClick={() => setText("0")}>Zero</Button>
      </div>
      <pre class="text-fields-demo-code">
        {JSON.stringify({ parsed: parsed(), formatted: formatted() }, null, 2)}
      </pre>
    </div>
  );
}
