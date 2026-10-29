import { createSignal } from "solid-js";
import { Menubar } from "../menubar";

export function MenubarExample(props: { defaultOpen?: boolean; controlled?: boolean }) {
  const [message, setMessage] = createSignal("Choose a command from the application menu.");
  const [open, setOpen] = createSignal(false);
  return (
    <div
      style={{
        display: "grid",
        "align-content": "start",
        gap: "1.5rem",
        padding: "1rem",
        "min-height": "22rem",
      }}
    >
      <Menubar.Root
        aria-label="Document commands"
        defaultTriggerValue="file"
        defaultOpen={props.defaultOpen ?? false}
        {...(props.controlled
          ? { open: open(), onOpenChange: (details: { open: boolean }) => setOpen(details.open) }
          : {})}
      >
        <Menubar.Menu value="file">
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="new" onSelect={() => setMessage("New document created.")}>
              New document
            </Menubar.Item>
            <Menubar.SubRoot>
              <Menubar.SubTrigger>Open recent</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item
                  value="proposal"
                  onSelect={() => setMessage("Opened Project proposal.")}
                >
                  Project proposal
                </Menubar.Item>
                <Menubar.SubRoot>
                  <Menubar.SubTrigger>Archived</Menubar.SubTrigger>
                  <Menubar.SubContent>
                    <Menubar.Item
                      value="notes"
                      onSelect={() => setMessage("Opened Research notes.")}
                    >
                      Research notes
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.SubRoot>
              </Menubar.SubContent>
            </Menubar.SubRoot>
            <Menubar.Separator />
            <Menubar.Item value="save" onSelect={() => setMessage("Document saved.")}>
              Save
            </Menubar.Item>
            <Menubar.Item value="print" disabled>
              Print
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="undo" onSelect={() => setMessage("Last change undone.")}>
              Undo
            </Menubar.Item>
            <Menubar.Item value="redo" disabled>
              Redo
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item
              value="delete"
              destructive
              onSelect={() => setMessage("Selection deleted.")}
            >
              Delete selection
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="view">
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Group>
              <Menubar.GroupLabel>Document</Menubar.GroupLabel>
              <Menubar.Item value="zoom" onSelect={() => setMessage("Zoom reset to 100%.")}>
                Reset zoom
              </Menubar.Item>
              <Menubar.Item value="preview" onSelect={() => setMessage("Preview opened.")}>
                Preview
              </Menubar.Item>
            </Menubar.Group>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="help">
          <Menubar.Trigger disabled>Help</Menubar.Trigger>
          <Menubar.Content>Unavailable.</Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
      <p role="status" style={{ color: "var(--nui-muted-foreground)", "align-self": "start" }}>
        {message()}
      </p>
    </div>
  );
}
