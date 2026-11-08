import { CheckIcon, MinusIcon, MoonIcon, SunIcon } from "lucide-solid";
import { createSignal, For, Show } from "solid-js";
import { Field } from "../field/field";
import { Switch, type SwitchRootProps } from "./switch";

export function SwitchExample(props: SwitchRootProps) {
  return (
    <Field.Root>
      <Switch.Root {...props}>
        <Switch.Control />
        <Switch.Label>Enable notifications</Switch.Label>
      </Switch.Root>
      <Field.Description>Receive updates about your workspace.</Field.Description>
    </Field.Root>
  );
}

export function ControlledSwitchExample() {
  const [status, setStatus] = createSignal<"enabled" | "paused">("enabled");
  return (
    <div class="text-fields-demo-stack">
      <SwitchExample
        checked={status() === "enabled"}
        onCheckedChange={(details) => setStatus(details.checked ? "enabled" : "paused")}
      />
      <output class="text-fields-demo-code">Status: {status()}</output>
      <button type="button" onClick={() => setStatus("paused")}>
        Pause externally
      </button>
    </div>
  );
}

export function SwitchSizesExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <div class="text-fields-demo-row">
            <Switch.Root size={size}>
              <Switch.Control />
              <Switch.Label>{size} off</Switch.Label>
            </Switch.Root>
            <Switch.Root size={size} defaultChecked>
              <Switch.Control />
              <Switch.Label>{size} on</Switch.Label>
            </Switch.Root>
          </div>
        )}
      </For>
    </div>
  );
}

export function SwitchTonesExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <div class="text-fields-demo-row">
            <Switch.Root tone={tone} defaultChecked>
              <Switch.Control />
              <Switch.Label>{tone}</Switch.Label>
            </Switch.Root>
            <Switch.Root tone={tone} variant="outline" defaultChecked>
              <Switch.Control />
              <Switch.Label>{tone} outline</Switch.Label>
            </Switch.Root>
          </div>
        )}
      </For>
    </div>
  );
}

export function SwitchVariantsExample() {
  return (
    <div class="text-fields-demo-stack">
      <SwitchExample defaultChecked />
      <SwitchExample defaultChecked rounded={false} />
      <SwitchExample defaultChecked variant="outline" />
      <SwitchExample defaultChecked variant="outline" rounded={false} labelPosition="start" />
      <Switch.Root tone="success" passiveTone="danger">
        <Switch.Control />
        <Switch.Label>Service availability</Switch.Label>
      </Switch.Root>
      <Switch.Root tone="warning" passiveTone="info" defaultChecked>
        <Switch.Control>
          <Switch.Thumb>
            <Switch.Context>
              {(context) => (
                <Show when={context().checked} fallback={<MoonIcon aria-hidden="true" />}>
                  <SunIcon aria-hidden="true" />
                </Show>
              )}
            </Switch.Context>
          </Switch.Thumb>
        </Switch.Control>
        <Switch.Label>Daytime lighting</Switch.Label>
      </Switch.Root>
      <Switch.Root variant="outline" defaultChecked>
        <Switch.Control>
          <Switch.Thumb>
            <Switch.Context>
              {(context) => (
                <Show when={context().checked} fallback={<MinusIcon aria-hidden="true" />}>
                  <CheckIcon aria-hidden="true" />
                </Show>
              )}
            </Switch.Context>
          </Switch.Thumb>
        </Switch.Control>
        <Switch.Label>Automatic updates</Switch.Label>
      </Switch.Root>
    </div>
  );
}
