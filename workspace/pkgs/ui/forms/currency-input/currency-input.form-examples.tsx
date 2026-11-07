import { Receipt } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { InputGroup } from "../input-group/input-group";
import { CurrencyInput } from "./currency-input";

export function CurrencyCompositionExample() {
  const [value, setValue] = createSignal("1234.5");
  let input: HTMLInputElement | undefined;
  return (
    <Field.Root>
      <Field.Label>Invoice amount</Field.Label>
      <InputGroup.Root>
        <InputGroup.Icon>
          <Receipt />
        </InputGroup.Icon>
        <CurrencyInput
          ref={input}
          locale="pt-BR"
          currency="BRL"
          value={value()}
          onValueChange={(next) => setValue(next.rawValue)}
        />
        <InputGroup.Addon placement="end">total</InputGroup.Addon>
        <InputGroup.Action>
          <Button
            variant="ghost"
            disabled={!value() || value() === "0"}
            aria-label={value().startsWith("-") ? "Make positive" : "Make negative"}
            onClick={() => {
              setValue(value().startsWith("-") ? value().slice(1) : `-${value()}`);
              input?.focus();
            }}
          >
            ±
          </Button>
        </InputGroup.Action>
      </InputGroup.Root>
      <Field.Description>
        The existing InputGroup provides icons, suffixes and a sign action without nesting another
        group.
      </Field.Description>
    </Field.Root>
  );
}

export function CurrencySubmissionExample() {
  const [submitted, setSubmitted] = createSignal<Record<string, FormDataEntryValue>>();
  return (
    <form
      class="text-fields-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));
      }}
    >
      <Field.Root>
        <Field.Label>Raw amount · automatic cents</Field.Label>
        <CurrencyInput
          name="canonical"
          locale="pt-BR"
          currency="BRL"
          entryMode="minor-unit"
          submitValue="raw"
          defaultValue="1234.5"
          min="-2000"
          max="2000"
          required
        />
        <Field.Description>
          Submits 1234.5, in major units. Allowed range: −2000 to 2000.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Formatted amount</Field.Label>
        <CurrencyInput name="formatted" locale="de-DE" currency="EUR" defaultValue="1234.5" />
        <Field.Description>
          Formatted submission includes the currency symbol. Reset restores the initial amounts.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect FormData</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
      <pre class="text-fields-demo-code">{JSON.stringify(submitted() ?? {}, null, 2)}</pre>
    </form>
  );
}

export function CurrencyPrecisionExamples() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Two to four decimal places</Field.Label>
        <CurrencyInput
          locale="pt-BR"
          currency="BRL"
          defaultValue="1234.5678"
          minimumFractionDigits={2}
          maximumFractionDigits={4}
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>Automatic entry with four fixed places</Field.Label>
        <CurrencyInput
          locale="pt-BR"
          currency="BRL"
          entryMode="minor-unit"
          minimumFractionDigits={4}
          maximumFractionDigits={4}
        />
        <Field.Description>
          Typing 1234 produces 0,1234. Automatic entry requires a fixed fractional scale.
        </Field.Description>
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>Disabled</Field.Label>
        <CurrencyInput locale="pt-BR" currency="BRL" defaultValue="1234.5" />
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Readonly</Field.Label>
        <CurrencyInput locale="pt-BR" currency="BRL" defaultValue="1234.5" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Manual currency decoration</Field.Label>
        <InputGroup.Root>
          <InputGroup.Addon>BRL</InputGroup.Addon>
          <CurrencyInput
            locale="pt-BR"
            currency="BRL"
            currencyDisplay="none"
            defaultValue="1234.5"
          />
        </InputGroup.Root>
      </Field.Root>
    </div>
  );
}
