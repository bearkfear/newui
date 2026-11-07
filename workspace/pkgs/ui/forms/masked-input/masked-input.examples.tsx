import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { InputGroup } from "../input-group/input-group";
import type { InputMaskTokens, InputMaskValueDetails } from "./input-mask.types";
import { MaskedInput } from "./masked-input";

export const numericTokens = { "&": { pattern: /[0-9]/ } } satisfies InputMaskTokens;
const identifierTokens = {
  ...numericTokens,
  "#": null,
  L: { pattern: /\p{L}/u, transform: (character) => character.toUpperCase() },
} satisfies InputMaskTokens;

function MaskDetails(props: { value: InputMaskValueDetails | undefined }) {
  return (
    <pre class="text-fields-demo-code" aria-live="polite">
      {props.value
        ? JSON.stringify(props.value, null, 2)
        : "Edit the field to inspect mask changes."}
    </pre>
  );
}

export function CustomTokenExample() {
  const [details, setDetails] = createSignal<InputMaskValueDetails>();
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Document number</Field.Label>
        <MaskedInput
          mask="&&&.&&&.&&&-&&"
          tokens={numericTokens}
          inputmode="numeric"
          placeholder="123.456.789-00"
          onValueChange={setDetails}
        />
        <Field.Description>
          Each &amp; accepts a digit. Paste formatted or unformatted text, or edit in the middle.
        </Field.Description>
      </Field.Root>
      <MaskDetails value={details()} />
      <Field.Root>
        <Field.Label>Localized identifier</Field.Label>
        <MaskedInput mask="# &&&-LL" tokens={identifierTokens} placeholder="# 123-ÉA" />
        <Field.Description>
          # is a literal because its token is disabled. L accepts Unicode letters and uppercases
          them. Try accented letters such as é. Transforms must produce one character.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Escaped token</Field.Label>
        <MaskedInput mask="!A-AAA-###" placeholder="A-ABC-123" />
        <Field.Description>
          !A is literal A; subsequent A tokens uppercase ASCII letters.
        </Field.Description>
      </Field.Root>
    </div>
  );
}

export function ControlledMaskExample() {
  const [value, setValue] = createSignal("11987654321");
  const [nativeInputs, setNativeInputs] = createSignal(0);
  let input: HTMLInputElement | undefined;
  return (
    <form class="text-fields-demo-stack" onReset={() => setValue("11987654321")}>
      <Field.Root>
        <Field.Label>Phone</Field.Label>
        <InputGroup.Root>
          <InputGroup.Addon>BR</InputGroup.Addon>
          <MaskedInput
            ref={input}
            name="phone"
            submitValue="raw"
            type="tel"
            autocomplete="tel-national"
            mask={["(##) ####-####", "(##) #####-####"]}
            value={value()}
            onValueChange={(details) => setValue(details.rawValue)}
            onInput={() => setNativeInputs((count) => count + 1)}
          />
        </InputGroup.Root>
        <Field.Description>
          Try selecting text, inserting repeated digits, undo/redo, and removing the eleventh digit.
          The mask adapts between landline and mobile lengths.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button onClick={() => setValue("1134567890")}>Load landline</Button>
        <Button
          onClick={() => {
            setValue("");
            input?.focus();
          }}
        >
          Clear and focus
        </Button>
        <Button type="reset" variant="outline">
          Reset controlled state
        </Button>
      </div>
      <p class="text-fields-demo-status">Raw value: {value() || "(empty)"}</p>
      <p class="text-fields-demo-status">Native input events: {nativeInputs()}</p>
    </form>
  );
}

export function ReactiveMaskExample() {
  const [short, setShort] = createSignal(false);
  const [hexadecimal, setHexadecimal] = createSignal(false);
  const [details, setDetails] = createSignal<InputMaskValueDetails>();
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Configurable code</Field.Label>
        <MaskedInput
          mask={short() ? "&&-&&" : "&&&-&&&"}
          tokens={{ "&": { pattern: hexadecimal() ? /[0-9A-F]/i : /[0-9]/ } }}
          defaultValue="123456"
          onValueChange={setDetails}
        />
        <Field.Description>
          Changing the pattern or token reprocesses the current raw value. Truncated characters are
          discarded. Returning to a longer mask does not restore them.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button aria-pressed={short()} onClick={() => setShort(!short())}>
          {short() ? "Use six positions" : "Use four positions"}
        </Button>
        <Button aria-pressed={hexadecimal()} onClick={() => setHexadecimal(!hexadecimal())}>
          {hexadecimal() ? "Accept digits" : "Accept hexadecimal"}
        </Button>
      </div>
      <MaskDetails value={details()} />
    </div>
  );
}
