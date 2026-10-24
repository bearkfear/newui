import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";
import type { DialogContentProps } from "../dialog.content";
import { ProjectDialogContent } from "./project-dialog-content";

export interface DialogExampleProps {
  size?: DialogContentProps["size"];
  closeOnEscape?: boolean;
  closeOnInteractOutside?: boolean;
  defaultOpen?: boolean;
}

export function DialogExample(props: DialogExampleProps) {
  const [published, setPublished] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Dialog.Root
        defaultOpen={props.defaultOpen}
        closeOnEscape={props.closeOnEscape}
        closeOnInteractOutside={props.closeOnInteractOutside}
      >
        <Dialog.Trigger
          asChild={(triggerProps) => <Button {...triggerProps()}>Open project update</Button>}
        />
        <ProjectDialogContent size={props.size} onPublish={() => setPublished(true)} />
      </Dialog.Root>
      <Text role="status" size="7" tone="muted">
        {published() ? "Project update published." : "The update has not been published."}
      </Text>
    </div>
  );
}
