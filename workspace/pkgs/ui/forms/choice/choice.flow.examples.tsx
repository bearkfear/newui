import { createSignal, For } from "solid-js";
import { Checkbox, type CheckboxRootProps } from "../checkbox/checkbox";
import { RadioGroup } from "../radio-group/radio-group";

type CheckedState = NonNullable<CheckboxRootProps["checked"]>;
type ChoiceSize = NonNullable<CheckboxRootProps["size"]>;

export function ChoiceFlowExample() {
  const [size, setSize] = createSignal<ChoiceSize>("md");
  const [font, setFont] = createSignal("system-ui, sans-serif");
  const [fontSize, setFontSize] = createSignal("15px");
  const [checked, setChecked] = createSignal<CheckedState>(false);
  return (
    <div class="choice-flow-demo">
      <div class="choice-flow-demo-options">
        <label>
          Control size
          <select
            value={size()}
            onChange={(event) => setSize(event.currentTarget.value as ChoiceSize)}
          >
            <For each={["sm", "md", "lg"]}>{(value) => <option>{value}</option>}</For>
          </select>
        </label>
        <label>
          Font family
          <select value={font()} onChange={(event) => setFont(event.currentTarget.value)}>
            <option value="system-ui, sans-serif">System sans</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="monospace">Monospace</option>
          </select>
        </label>
        <label>
          Text size
          <select value={fontSize()} onChange={(event) => setFontSize(event.currentTarget.value)}>
            <For each={["13px", "15px", "18px"]}>{(value) => <option>{value}</option>}</For>
          </select>
        </label>
        <button type="button" onClick={() => setChecked("indeterminate")}>
          Set indeterminate
        </button>
      </div>
      <p>
        Click the controls or use Space and arrow keys. The reference lines should stay in place.
      </p>
      <div style={{ "font-family": font(), "font-size": fontSize(), "line-height": "1.55" }}>
        <For each={["normal", "grid", "flex"]}>
          {(layout) => (
            <ChoiceFlowSample
              layout={layout}
              size={size()}
              checked={checked()}
              onChange={setChecked}
            />
          )}
        </For>
      </div>
      <p class="choice-flow-demo-inline">
        Inline text{" "}
        <Checkbox.Root
          size={size()}
          checked={checked()}
          onCheckedChange={(d) => setChecked(d.checked)}
        >
          <Checkbox.Control />
          <Checkbox.Label>Inline choice</Checkbox.Label>
        </Checkbox.Root>{" "}
        and following text.
      </p>
    </div>
  );
}

function ChoiceFlowSample(props: {
  layout: string;
  size: ChoiceSize;
  checked: CheckedState;
  onChange: (checked: CheckedState) => void;
}) {
  return (
    <section class="choice-flow-demo-sample" aria-label={`${props.layout} layout`}>
      <h3>{props.layout} flow</h3>
      <div class="choice-flow-demo-controls" data-layout={props.layout}>
        <Checkbox.Root
          size={props.size}
          checked={props.checked}
          onCheckedChange={(details) => props.onChange(details.checked)}
        >
          <Checkbox.Control />
          <Checkbox.Label>Receive updates</Checkbox.Label>
        </Checkbox.Root>
        <p>Fixed single-line description.</p>
      </div>
      <div class="choice-flow-demo-reference">Following single-line checkbox content</div>
      <div class="choice-flow-demo-controls" data-layout={props.layout}>
        <Checkbox.Root
          size={props.size}
          checked={props.checked}
          onCheckedChange={(details) => props.onChange(details.checked)}
        >
          <Checkbox.Control />
          <Checkbox.Label>
            Receive product updates, including release notes and account news.
          </Checkbox.Label>
        </Checkbox.Root>
        <p>Fixed checkbox description. This text must stay in place.</p>
      </div>
      <div class="choice-flow-demo-reference">Following checkbox content</div>
      <ChoiceFlowRadios layout={props.layout} size={props.size} />
      <div class="choice-flow-demo-reference">Following radio content</div>
    </section>
  );
}

function ChoiceFlowRadios(props: { layout: string; size: ChoiceSize }) {
  return (
    <RadioGroup.Root
      size={props.size}
      defaultValue="standard"
      class="choice-flow-demo-controls"
      data-layout={props.layout}
    >
      <RadioGroup.Label>Delivery preference</RadioGroup.Label>
      <For each={["standard", "priority"]}>
        {(value) => (
          <RadioGroup.Item value={value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>
              {value === "standard"
                ? "Standard delivery with tracking updates"
                : "Priority delivery"}
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        )}
      </For>
    </RadioGroup.Root>
  );
}
