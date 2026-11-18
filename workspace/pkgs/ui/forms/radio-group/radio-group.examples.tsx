import { Monitor, Moon, Sun } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Field } from "../field/field";
import { RadioGroup, type RadioGroupRootProps } from "./radio-group";

export function PlanOptions() {
  return (
    <For each={["Personal", "Team", "Enterprise"]}>
      {(plan) => (
        <RadioGroup.Item value={plan} disabled={plan === "Enterprise"}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>
            {plan}
            {plan === "Enterprise" ? " (unavailable)" : ""}
          </RadioGroup.ItemText>
        </RadioGroup.Item>
      )}
    </For>
  );
}

export function RadioGroupExample(props: RadioGroupRootProps) {
  return (
    <RadioGroup.Root {...props}>
      <RadioGroup.Label>Workspace plan</RadioGroup.Label>
      <PlanOptions />
    </RadioGroup.Root>
  );
}

export function ControlledRadioExample() {
  const [value, setValue] = createSignal<string | null>("Personal");
  return (
    <div class="text-fields-demo-stack">
      <RadioGroupExample value={value()} onValueChange={(details) => setValue(details.value)} />
      <output class="text-fields-demo-code">{JSON.stringify(value())}</output>
      <button type="button" onClick={() => setValue(null)}>
        Clear selection externally
      </button>
    </div>
  );
}

export function RadioStatesExample() {
  return (
    <div class="text-fields-demo-stack">
      <RadioGroupExample disabled defaultValue="Personal" />
      <RadioGroupExample readOnly defaultValue="Team" />
      <Field.Root invalid required>
        <Field.Label asChild={(props) => <span {...props()} />}>Workspace plan</Field.Label>
        <RadioGroup.Root>
          <PlanOptions />
        </RadioGroup.Root>
        <Field.ErrorText>Select a workspace plan.</Field.ErrorText>
      </Field.Root>
      <Field.Root valid size="lg">
        <Field.Label asChild={(props) => <span {...props()} />}>Confirmed plan</Field.Label>
        <RadioGroup.Root defaultValue="Team">
          <PlanOptions />
        </RadioGroup.Root>
        <Field.SuccessText>Your plan is available.</Field.SuccessText>
      </Field.Root>
    </div>
  );
}

export function RadioAppearanceExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["sm", "md", "lg"] as const}>
        {(size) => <RadioGroupExample size={size} defaultValue="Team" />}
      </For>
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <RadioGroup.Root tone={tone} defaultValue="yes" aria-label={`${tone} tone`}>
            <RadioGroup.Item value="yes">
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{tone}</RadioGroup.ItemText>
            </RadioGroup.Item>
          </RadioGroup.Root>
        )}
      </For>
    </div>
  );
}

export function SegmentedRadioExample() {
  return (
    <div class="text-fields-demo-stack">
      <RadioGroup.Root aria-label="Appearance" defaultValue="system" variant="segmented" size="sm">
        <RadioGroup.Item value="light" aria-label="Light">
          <RadioGroup.ItemControl />
          <Sun size={16} aria-hidden="true" />
          <RadioGroup.ItemText class="sr-only">Light</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="dark" aria-label="Dark">
          <RadioGroup.ItemControl />
          <Moon size={16} aria-hidden="true" />
          <RadioGroup.ItemText class="sr-only">Dark</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="system" aria-label="System">
          <RadioGroup.ItemControl />
          <Monitor size={16} aria-hidden="true" />
          <RadioGroup.ItemText class="sr-only">System</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
      <RadioGroup.Root
        aria-label="Appearance, medium size"
        defaultValue="dark"
        variant="segmented"
        size="md"
      >
        <RadioGroup.Item value="light">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Light</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="dark">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Dark</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="system">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>System</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  );
}
