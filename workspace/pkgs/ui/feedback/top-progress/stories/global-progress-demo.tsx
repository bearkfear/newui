import { createContext, onCleanup, useContext } from "solid-js";
import { Button } from "../../../actions/button/button";
import { createTopProgress } from "../create-top-progress";
import { TopProgress } from "../top-progress";
import type { TopProgressController } from "../top-progress.contract";

const ProgressContext = createContext<TopProgressController>();

function PageActions() {
  const progress = useContext(ProgressContext);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const navigate = () => {
    clearTimeout(timer);
    progress?.start();
    timer = setTimeout(() => progress?.done(), 2400);
  };
  return (
    <div style={{ display: "flex", gap: "0.5rem", "flex-wrap": "wrap" }}>
      <Button onClick={navigate}>Load another page</Button>
      <Button variant="outline" onClick={() => progress?.fail()}>
        Simulate navigation error
      </Button>
    </div>
  );
}

export function GlobalProgressDemo() {
  const progress = createTopProgress();
  return (
    <ProgressContext.Provider value={progress}>
      <TopProgress controller={progress} label="Loading destination page" />
      <main style={{ display: "grid", gap: "1rem", padding: "1.5rem" }}>
        <h2>One bar for the application</h2>
        <p>The root owns the controller and the bar. Nested page actions use the shared context.</p>
        <PageActions />
        <p>Creating the controller per application root also isolates server requests.</p>
      </main>
    </ProgressContext.Provider>
  );
}
