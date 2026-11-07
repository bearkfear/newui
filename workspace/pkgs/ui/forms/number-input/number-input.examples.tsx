import { Hash } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { InputGroup } from "../input-group/input-group";
import type { NumberValueDetails } from "./number.types";
import { NumberInput } from "./number-input";

export function LocaleExamples() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["pt-BR", "en-US", "de-DE", "fr-FR", "hi-IN"]}>
        {(locale) => (
          <Field.Root>
            <Field.Label>{locale}</Field.Label>
            <NumberInput locale={locale} defaultValue="1234567.89" maximumFractionDigits={4} />
            <Field.Description>
              Type or paste a number using this locale's separators. Press − anywhere to toggle its
              sign.
            </Field.Description>
          </Field.Root>
        )}
      </For>
    </div>
  );
}

export function FractionExamples() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Integer quantity</Field.Label>
        <NumberInput
          locale="pt-BR"
          defaultValue="1234"
          maximumFractionDigits={0}
          allowNegative={false}
        />
        <Field.Description>Whole, nonnegative values only.</Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Up to four decimal places</Field.Label>
        <NumberInput locale="pt-BR" defaultValue="1234.5" maximumFractionDigits={4} />
        <Field.Description>
          No mandatory fractional zeros. Excess fractional digits are rejected.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Exactly two displayed places</Field.Label>
        <NumberInput
          locale="pt-BR"
          defaultValue="1234.5"
          minimumFractionDigits={2}
          maximumFractionDigits={2}
        />
        <Field.Description>
          Clear and type 12,5. Zeros are completed when you leave the field.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>At least two, up to four places</Field.Label>
        <NumberInput
          locale="pt-BR"
          defaultValue="1234.5678"
          minimumFractionDigits={2}
          maximumFractionDigits={4}
        />
      </Field.Root>
    </div>
  );
}

export function ControlledNumberExample() {
  const [value, setValue] = createSignal("1234.56");
  const [locale, setLocale] = createSignal("pt-BR");
  const [grouping, setGrouping] = createSignal(true);
  const [details, setDetails] = createSignal<NumberValueDetails>();
  let input: HTMLInputElement | undefined;
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Measurement</Field.Label>
        <InputGroup.Root>
          <InputGroup.Icon>
            <Hash />
          </InputGroup.Icon>
          <NumberInput
            ref={input}
            locale={locale()}
            useGrouping={grouping()}
            value={value()}
            minimumFractionDigits={2}
            maximumFractionDigits={4}
            onValueChange={(next) => {
              setDetails(next);
              setValue(next.rawValue);
            }}
          />
          <InputGroup.Addon placement="end">kg</InputGroup.Addon>
          <NumberSignAction
            value={value()}
            onToggle={() => {
              setValue(value().startsWith("-") ? value().slice(1) : `-${value()}`);
              input?.focus();
            }}
          />
        </InputGroup.Root>
        <Field.Description>
          The sign button also works without a minus key. Enter digits first, then change the sign.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button onClick={() => setLocale(locale() === "pt-BR" ? "en-US" : "pt-BR")}>
          Switch locale
        </Button>
        <Button onClick={() => setGrouping(!grouping())} aria-pressed={grouping()}>
          Grouping
        </Button>
        <Button onClick={() => setValue("98765432109876543210.1234")}>Load precise value</Button>
        <Button onClick={() => setValue("")}>Clear</Button>
      </div>
      <p class="text-fields-demo-status">
        Locale: {locale()} · Canonical: {value() || "(empty)"}
      </p>
      <pre class="text-fields-demo-code">
        {JSON.stringify(details() ?? { rawValue: value() }, null, 2)}
      </pre>
    </div>
  );
}

function NumberSignAction(props: { value: string; onToggle: () => void }) {
  return (
    <InputGroup.Action>
      <Button
        variant="ghost"
        aria-label={props.value.startsWith("-") ? "Make positive" : "Make negative"}
        disabled={!props.value || props.value === "0"}
        onClick={props.onToggle}
      >
        ±
      </Button>
    </InputGroup.Action>
  );
}
