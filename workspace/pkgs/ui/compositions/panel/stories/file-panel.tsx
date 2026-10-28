import { createSignal } from "solid-js";
import { Text } from "../../../content/text/text";
import { Tabs } from "../../../navigation/tabs/tabs";
import { Panel } from "../panel";
import { FileActions } from "./file-actions";
import { FileContent, fileSource } from "./file-content";

export function FilePanel() {
  const [view, setView] = createSignal("preview");
  const [status, setStatus] = createSignal("");
  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <Tabs.Root
        variant="segmented"
        tone="neutral"
        size="sm"
        value={view()}
        onValueChange={(details) => setView(details.value)}
      >
        <Panel.Root aria-label="Implementation stages file">
          <Panel.Bar>
            <Panel.BarGroup>
              <Tabs.List aria-label="File view">
                <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                <Tabs.Trigger value="code">Code</Tabs.Trigger>
                <Tabs.Trigger value="blame">Blame</Tabs.Trigger>
              </Tabs.List>
              <Text as="span" size="7" tone="muted" style={{ "font-family": "monospace" }}>
                {fileSource.trimEnd().split("\n").length} lines ·{" "}
                {(fileSource.length / 1024).toFixed(2)} KB
              </Text>
            </Panel.BarGroup>
            <FileActions onRaw={() => setView("code")} onStatus={setStatus} />
          </Panel.Bar>
          <Panel.Body>
            <FileContent />
          </Panel.Body>
        </Panel.Root>
      </Tabs.Root>
      <Text size="7" tone="muted" role="status">
        {status()}
      </Text>
    </div>
  );
}
