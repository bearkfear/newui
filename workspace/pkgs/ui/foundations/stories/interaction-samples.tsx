import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Accordion } from "../../content/accordion/accordion";
import { Loading } from "../../feedback/loading/loading";

export function FocusAndStates() {
  let target: HTMLButtonElement | undefined;
  const [pressed, setPressed] = createSignal(false);
  const [status, setStatus] = createSignal("Use Tab to inspect keyboard focus.");
  return (
    <section class="nui-catalog-section">
      <h2>Focus, native refs, and states</h2>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "16px" }}>
        <Button variant="outline" onClick={() => target?.focus()}>
          Focus target through its ref
        </Button>
        <Button ref={target} onFocus={() => setStatus("The target button received focus.")}>
          Focus target
        </Button>
        <Button
          variant="soft"
          aria-pressed={pressed()}
          onClick={() => setPressed((value) => !value)}
        >
          {pressed() ? "Selected" : "Select"}
        </Button>
        <Button disabled>Disabled</Button>
        <Button loading>Saving changes</Button>
      </div>
      <p role="status">{status()}</p>
      <p>Disabled controls leave the Tab order. Pressed state remains a separate action state.</p>
    </section>
  );
}

export function MotionSample(props: { reduced: boolean }) {
  return (
    <section class="nui-catalog-section" data-motion={props.reduced ? "reduced" : undefined}>
      <h2>{props.reduced ? "Locally reduced motion" : "System motion preference"}</h2>
      <Loading showLabel label="Loading preview" />
      <Accordion.Root collapsible>
        <Accordion.Item value="details">
          <Accordion.ItemHeading>
            <Accordion.ItemTrigger>
              Toggle details
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeading>
          <Accordion.ItemContent>
            Content and accessible state remain available when animation is disabled.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
      <Button variant="outline">Hover or focus to review transitions</Button>
    </section>
  );
}
