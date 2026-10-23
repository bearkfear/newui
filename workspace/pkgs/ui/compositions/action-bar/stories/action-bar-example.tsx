import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import type { ActionBarRootProps } from "../action-bar";
import { ActionBar } from "../action-bar";

export function ActionBarExample(props: ActionBarRootProps) {
  const [selected, setSelected] = createSignal(3);
  const [message, setMessage] = createSignal("Choose an action for the selected items.");
  function archive() {
    setMessage(`${selected()} items archived in this local demo.`);
    setSelected(0);
  }
  function reset() {
    setSelected(3);
    setMessage("Choose an action for the selected items.");
  }
  return (
    <ActionBar.Root {...props}>
      <ActionBar.Content>
        <ActionBar.Title>{selected()} items selected</ActionBar.Title>
        <ActionBar.Description role="status">{message()}</ActionBar.Description>
      </ActionBar.Content>
      <ActionBar.Actions>
        <Button size="sm" variant="ghost" onClick={reset}>
          Reset demo
        </Button>
        <Button size="sm" variant="outline" disabled={!selected()} onClick={() => setSelected(0)}>
          Clear
        </Button>
        <Button size="sm" disabled={!selected()} onClick={archive}>
          Archive
        </Button>
      </ActionBar.Actions>
    </ActionBar.Root>
  );
}
