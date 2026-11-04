export const filePanelSource = `import { Panel, Tabs, Text } from "@egcs/newui";
import "@egcs/newui/styles.css";

export function FilePanel() {
  return (
    <Tabs.Root defaultValue="preview" variant="segmented" tone="neutral" size="sm">
      <Panel.Root aria-label="Document">
        <Panel.Bar>
          <Panel.BarGroup>
            <Tabs.List aria-label="File view">
              <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
              <Tabs.Trigger value="code">Code</Tabs.Trigger>
              <Tabs.Trigger value="blame">Blame</Tabs.Trigger>
            </Tabs.List>
            <Text as="span" size="7" tone="muted">16 lines · 0.3 KB</Text>
          </Panel.BarGroup>
          <Panel.BarActions>
            <a href="data:text/plain,Document%20source" download="document.md">Download</a>
          </Panel.BarActions>
        </Panel.Bar>
        <Panel.Body>
          <Tabs.Content value="preview" style={{ "padding-top": "0" }}>
            <h2>Implementation stages</h2>
          </Tabs.Content>
          <Tabs.Content value="code" style={{ "padding-top": "0" }}>
            <pre>Document source</pre>
          </Tabs.Content>
          <Tabs.Content value="blame" style={{ "padding-top": "0" }}>
            Latest changes
          </Tabs.Content>
        </Panel.Body>
      </Panel.Root>
    </Tabs.Root>
  );
}`;
