import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import type { ToasterStore } from "../create-toaster";

function ToastTypeButtons(props: { toaster: ToasterStore }) {
  return (
    <For each={["info", "success", "warning", "error"] as const}>
      {(type) => (
        <Button
          variant="outline"
          tone={type === "error" ? "danger" : type}
          onClick={() =>
            props.toaster.create({
              type,
              title: `${type[0]?.toUpperCase()}${type.slice(1)} notification`,
              description: "Your workspace has a new update.",
            })
          }
        >
          {type}
        </Button>
      )}
    </For>
  );
}

export function ToastControls(props: { toaster: ToasterStore; onUndo: () => void }) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px" }}>
      <ToastTypeButtons toaster={props.toaster} />
      <Button
        onClick={() =>
          props.toaster.create({
            type: "success",
            title: "Project archived",
            description: "You can undo this action from this notification.",
            duration: Infinity,
            action: { label: "Undo", onClick: props.onUndo },
          })
        }
      >
        With Undo action
      </Button>
      <Button
        tone="neutral"
        variant="outline"
        onClick={() =>
          props.toaster.create({
            type: "info",
            title: "Review before continuing",
            description: "This notification stays until you dismiss it.",
            duration: Infinity,
          })
        }
      >
        Persistent
      </Button>
      <Button
        tone="neutral"
        variant="outline"
        onClick={() => {
          for (let index = 1; index <= 5; index++)
            props.toaster.create({
              type: "info",
              title: `Project update ${index}`,
              description: "Additional notifications wait in the queue.",
            });
        }}
      >
        Queue five
      </Button>
      <Button tone="neutral" variant="ghost" onClick={() => props.toaster.remove()}>
        Clear all
      </Button>
    </div>
  );
}
