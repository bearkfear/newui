import { Resizable } from "../resizable";
import { frameStyle, PanelContent } from "./resizable-example";

export function NestedResizable() {
  return (
    <Resizable.Root
      panels={[
        { id: "files", minSize: 20 },
        { id: "workspace", minSize: 35 },
      ]}
      defaultSize={[30, 70]}
      style={{ ...frameStyle, height: "28rem", "max-width": "56rem" }}
    >
      <Resizable.Panel id="files">
        <PanelContent title="Files">
          README.md
          <br />
          package.json
          <br />
          src/
        </PanelContent>
      </Resizable.Panel>
      <Resizable.Handle id="files:workspace" aria-label="Resize files and workspace" withHandle />
      <Resizable.Panel id="workspace">
        <Resizable.Root
          orientation="vertical"
          panels={[
            { id: "editor", minSize: 25 },
            { id: "terminal", minSize: 20 },
          ]}
          defaultSize={[65, 35]}
          style={{ height: "100%", width: "100%" }}
        >
          <Resizable.Panel id="editor">
            <PanelContent title="Editor">Select a file to begin editing.</PanelContent>
          </Resizable.Panel>
          <Resizable.Handle
            id="editor:terminal"
            aria-label="Resize editor and terminal"
            withHandle
          />
          <Resizable.Panel id="terminal">
            <PanelContent title="Terminal">Ready.</PanelContent>
          </Resizable.Panel>
        </Resizable.Root>
      </Resizable.Panel>
    </Resizable.Root>
  );
}
