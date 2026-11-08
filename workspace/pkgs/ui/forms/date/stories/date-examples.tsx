import { createSignal, For } from "solid-js";
import { DateInput } from "../../date-input/date-input";
import { LocaleProvider } from "../date.locale";
import type { DateSelection } from "../date.types";
import { parseDate } from "../date.value";
import { DateDemo, type DateDemoKind } from "./date-demo";

export function LocaleComparison(props: { kind: DateDemoKind }) {
  const [value, setValue] = createSignal<DateSelection>(
    props.kind === "range"
      ? [parseDate("2028-02-29"), parseDate("2028-03-05")]
      : [parseDate("2028-02-29")],
  );
  return (
    <div class="date-demo-stack">
      <p>
        Edit either locale: both show the same calendar date. ISO values do not depend on locale.
      </p>
      <div class="date-demo-grid">
        <For each={["pt-BR", "en-US"]}>
          {(locale) => (
            <section class="date-demo-panel">
              <h3>{locale}</h3>
              <DateDemo
                kind={props.kind}
                locale={locale}
                value={value()}
                onValueChange={(details) => setValue(details.value)}
                label={props.kind === "range" ? "Travel period" : "Leap day"}
              />
            </section>
          )}
        </For>
      </div>
      <output class="text-fields-demo-code">
        {JSON.stringify(value().map((date) => date?.toString() ?? null))}
      </output>
      <button
        type="button"
        onClick={() =>
          setValue(
            props.kind === "range"
              ? [parseDate("2028-07-04"), parseDate("2028-07-12")]
              : [parseDate("2028-07-04")],
          )
        }
      >
        Set July 4 externally
      </button>
    </div>
  );
}

export function ProviderExample() {
  return (
    <LocaleProvider locale="pt-BR">
      <div class="date-demo-stack">
        <DateInput.Root defaultValue={[parseDate("2028-07-04")]}>
          <DateInput.Label>Inherited pt-BR</DateInput.Label>
          <DateInput.Control />
        </DateInput.Root>
        <DateDemo
          kind="input"
          locale="en-US"
          label="Override with en-US"
          defaultValue={[parseDate("2028-07-04")]}
        />
        <DateDemo
          kind="input"
          locale="not_a_locale"
          label="Invalid tag falls back to en-US"
          defaultValue={[parseDate("2028-07-04")]}
        />
      </div>
    </LocaleProvider>
  );
}

export function DateStates(props: { kind: DateDemoKind }) {
  return (
    <div class="date-demo-grid">
      <DateDemo kind={props.kind} label="Empty / partial editing" />
      <DateDemo kind={props.kind} label="Required" required />
      <DateDemo
        kind={props.kind}
        label="Disabled"
        disabled
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo
        kind={props.kind}
        label="Read only"
        readOnly
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo
        kind={props.kind}
        label="Invalid"
        invalid
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo kind={props.kind} label="Success" valid defaultValue={[parseDate("2028-02-29")]} />
    </div>
  );
}

export function DateVariants(props: { kind: DateDemoKind }) {
  return (
    <div class="date-demo-grid">
      <For each={["sm", "md", "lg"] as const}>
        {(size) => <DateDemo kind={props.kind} size={size} label={`Size ${size}`} />}
      </For>
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => <DateDemo kind={props.kind} tone={tone} label={`Tone ${tone}`} rounded />}
      </For>
    </div>
  );
}
