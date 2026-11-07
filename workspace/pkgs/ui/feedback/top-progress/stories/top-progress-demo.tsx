import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { createTopProgress } from "../create-top-progress";
import { TopProgress } from "../top-progress";
import type { TopProgressController } from "../top-progress.contract";

export interface TopProgressDemoProps {
  glow?: boolean;
  delay?: number;
}

function ManualControls(props: { controller: TopProgressController }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", "flex-wrap": "wrap" }}>
      <Button onClick={() => props.controller.start()}>Start</Button>
      <Button variant="outline" onClick={() => props.controller.set(35)}>
        Set 35%
      </Button>
      <Button variant="outline" onClick={() => props.controller.set(75)}>
        Set 75%
      </Button>
      <Button variant="outline" onClick={() => props.controller.done()}>
        Complete
      </Button>
      <Button variant="outline" onClick={() => props.controller.fail()}>
        Fail
      </Button>
      <Button variant="ghost" onClick={() => props.controller.reset()}>
        Reset
      </Button>
    </div>
  );
}

function RequestControls(props: { run: (duration: number, fails?: boolean) => void }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", "flex-wrap": "wrap" }}>
      <Button variant="outline" onClick={() => props.run(2200)}>
        Track request · 2.2s
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          props.run(1800);
          props.run(4200);
        }}
      >
        Track two requests
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          props.run(1600, true);
          props.run(3600);
        }}
      >
        Error with pending work
      </Button>
      <Button variant="outline" onClick={() => props.run(40)}>
        Fast request · 40ms
      </Button>
    </div>
  );
}

export function TopProgressDemo(props: TopProgressDemoProps) {
  const controller = createTopProgress({ delay: props.delay ?? 150 });
  const [message, setMessage] = createSignal(
    "Use Start for automatic progress, or set a known value.",
  );
  const timers = new Set<ReturnType<typeof setTimeout>>();
  onCleanup(() => {
    for (const timer of timers) clearTimeout(timer);
  });
  const operation = (duration: number, fails = false) =>
    new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => {
        timers.delete(timer);
        if (fails) reject(new Error("The request failed."));
        else resolve();
      }, duration);
      timers.add(timer);
    });
  const run = (duration: number, fails = false) => {
    void controller.track(operation(duration, fails)).then(
      () => setMessage("Request completed. Other active requests keep the bar visible."),
      () => setMessage("Request failed. The bar keeps its error color until all requests settle."),
    );
  };
  return (
    <section style={{ display: "grid", gap: "1rem", "max-width": "48rem", padding: "1.5rem" }}>
      <TopProgress controller={controller} glow={props.glow ?? true} />
      <h2>Page loading</h2>
      <p>The bar is fixed at the top of this preview. It never blocks the page.</p>
      <ManualControls controller={controller} />
      <RequestControls run={run} />
      <p role="status">{message()}</p>
      <p>
        State: {controller.state().phase} · Tracked requests: {controller.state().pending}
      </p>
      <p>Manual Start must be paired with Complete or Fail, even when tracked requests finish.</p>
    </section>
  );
}
