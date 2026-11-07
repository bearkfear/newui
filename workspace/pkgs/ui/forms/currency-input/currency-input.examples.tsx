import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import type { CurrencyEntryMode, CurrencyValueDetails } from "./currency.types";
import { CurrencyInput } from "./currency-input";

const locales = [
  { locale: "pt-BR", currency: "BRL", value: "1234.56" },
  { locale: "en-US", currency: "USD", value: "1234.56" },
  { locale: "de-DE", currency: "EUR", value: "1234.56" },
  { locale: "ja-JP", currency: "JPY", value: "1234" },
  { locale: "en-US", currency: "KWD", value: "1234.567" },
];

export function CurrencyLocaleExamples() {
  return (
    <div class="text-fields-demo-stack">
      <For each={locales}>
        {(example) => (
          <Field.Root>
            <Field.Label>
              {example.currency} · {example.locale}
            </Field.Label>
            <CurrencyInput
              locale={example.locale}
              currency={example.currency}
              defaultValue={example.value}
            />
            <Field.Description>
              Currency defaults determine decimal places. The locale determines separators and
              symbol placement.
            </Field.Description>
          </Field.Root>
        )}
      </For>
      <Field.Root>
        <Field.Label>USD displayed in Brazil</Field.Label>
        <CurrencyInput
          locale="pt-BR"
          currency="USD"
          defaultValue="1234.56"
          currencyDisplay="code"
        />
        <Field.Description>
          Changing the currency changes presentation; it does not convert the amount.
        </Field.Description>
      </Field.Root>
    </div>
  );
}

export function CurrencyEntryExamples() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Decimal entry · BRL</Field.Label>
        <CurrencyInput locale="pt-BR" currency="BRL" />
        <Field.Description>
          Type 1234 for 1.234,00, or 12,34 for 12,34. Zeros complete on blur.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Automatic cents · BRL</Field.Label>
        <CurrencyInput locale="pt-BR" currency="BRL" entryMode="minor-unit" />
        <Field.Description>
          Type 1234 for 12,34. Backspace removes a digit. Pasted amounts such as R$ 1.234,56 retain
          their full value.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Automatic thousandths · KWD</Field.Label>
        <CurrencyInput locale="en-US" currency="KWD" entryMode="minor-unit" />
        <Field.Description>Three decimal places: typing 1234 produces 1.234.</Field.Description>
      </Field.Root>
    </div>
  );
}

export function ControlledCurrencyExample() {
  const [value, setValue] = createSignal("1234.56");
  const [locale, setLocale] = createSignal("pt-BR");
  const [currency, setCurrency] = createSignal("BRL");
  const [mode, setMode] = createSignal<CurrencyEntryMode>("decimal");
  const [details, setDetails] = createSignal<CurrencyValueDetails>();
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Controlled amount</Field.Label>
        <CurrencyInput
          locale={locale()}
          currency={currency()}
          entryMode={mode()}
          value={value()}
          onValueChange={(next) => {
            setDetails(next);
            setValue(next.rawValue);
          }}
        />
        <Field.Description>
          Press - anywhere to toggle the sign without replacing the selected digits.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button onClick={() => setLocale(locale() === "pt-BR" ? "en-US" : "pt-BR")}>
          Switch locale
        </Button>
        <Button onClick={() => setCurrency(currency() === "BRL" ? "USD" : "BRL")}>
          Switch currency
        </Button>
        <Button onClick={() => setMode(mode() === "decimal" ? "minor-unit" : "decimal")}>
          Switch entry mode
        </Button>
        <Button onClick={() => setValue("98765432109876543210.12")}>Load precise value</Button>
        <Button onClick={() => setValue("")}>Clear</Button>
      </div>
      <p class="text-fields-demo-status">
        {locale()} · {currency()} · {mode()} · Canonical: {value() || "(empty)"}
      </p>
      <pre class="text-fields-demo-code">
        {JSON.stringify(details() ?? { rawValue: value() }, null, 2)}
      </pre>
    </div>
  );
}
