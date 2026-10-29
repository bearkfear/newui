import { createSignal, type JSX } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Resizable } from "../resizable";

export interface ResizableExampleProps {
  orientation?: "horizontal" | "vertical";
  withHandle?: boolean;
  disabled?: boolean;
}

export const frameStyle: JSX.CSSProperties = {
  width: "100%",
  height: "20rem",
  border: "1px solid var(--nui-border)",
  "border-radius": "var(--nui-radius-md)",
  overflow: "hidden",
};

export function PanelContent(props: { title: string; children?: JSX.Element }) {
  return (
    <div style={{ height: "100%", overflow: "auto", padding: "1rem" }}>
      <strong>{props.title}</strong>
      <div style={{ "margin-top": "0.5rem", color: "var(--nui-muted-foreground)" }}>
        {props.children}
      </div>
    </div>
  );
}

export function ResizableExample(props: ResizableExampleProps) {
  return (
    <div style={{ width: "100%", "max-width": "56rem" }}>
      <p style={{ "margin-bottom": "1rem", color: "var(--nui-muted-foreground)" }}>
        Drag the divider, or focus it and use the arrow keys. Hold Shift for larger steps.
      </p>
      <Resizable.Root
        orientation={props.orientation ?? "horizontal"}
        panels={[
          { id: "navigation", minSize: 20 },
          { id: "content", minSize: 25 },
        ]}
        defaultSize={[35, 65]}
        style={frameStyle}
      >
        <Resizable.Panel id="navigation">
          <PanelContent title="Navigation">Projects, files, and recent activity.</PanelContent>
        </Resizable.Panel>
        <Resizable.Handle
          id="navigation:content"
          aria-label="Resize navigation and content"
          withHandle={props.withHandle}
          disabled={props.disabled}
        />
        <Resizable.Panel id="content">
          <PanelContent title="Workspace">
            Each panel scrolls independently as space changes.
          </PanelContent>
        </Resizable.Panel>
      </Resizable.Root>
    </div>
  );
}

export function ControlledResizable() {
  const [size, setSize] = createSignal([35, 65]);
  return (
    <div style={{ width: "100%", "max-width": "56rem", display: "grid", gap: "1rem" }}>
      <div style={{ display: "flex", "align-items": "center", gap: "1rem", "flex-wrap": "wrap" }}>
        <Button variant="outline" size="sm" onClick={() => setSize([35, 65])}>
          Reset sizes
        </Button>
        <span>
          Navigation {Math.round(size()[0] ?? 0)}% / Content {Math.round(size()[1] ?? 0)}%
        </span>
      </div>
      <Resizable.Root
        panels={[
          { id: "navigation", minSize: 20 },
          { id: "content", minSize: 25 },
        ]}
        size={size()}
        onResize={(details) => setSize(details.size)}
        style={frameStyle}
      >
        <Resizable.Panel id="navigation">
          <PanelContent title="Navigation" />
        </Resizable.Panel>
        <Resizable.Handle
          id="navigation:content"
          aria-label="Resize navigation and content"
          withHandle
        />
        <Resizable.Panel id="content">
          <PanelContent title="Content" />
        </Resizable.Panel>
      </Resizable.Root>
    </div>
  );
}

export function CollapsibleResizable() {
  const [collapsed, setCollapsed] = createSignal(false);
  return (
    <Resizable.Root
      panels={[
        { id: "navigation", minSize: 20, collapsible: true, collapsedSize: 0 },
        { id: "content", minSize: 30 },
      ]}
      defaultSize={[30, 70]}
      onCollapse={() => setCollapsed(true)}
      onExpand={() => setCollapsed(false)}
      style={{ ...frameStyle, "max-width": "56rem" }}
    >
      <Resizable.Panel id="navigation">
        <PanelContent title="Navigation">
          Drag to collapse, or press Enter on the divider.
        </PanelContent>
      </Resizable.Panel>
      <Resizable.Handle
        id="navigation:content"
        aria-label="Resize or collapse navigation"
        withHandle
      />
      <Resizable.Panel id="content">
        <PanelContent title="Workspace">
          <Resizable.Context>
            {(api) => (
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  collapsed() ? api().expandPanel("navigation") : api().collapsePanel("navigation")
                }
              >
                {collapsed() ? "Expand navigation" : "Collapse navigation"}
              </Button>
            )}
          </Resizable.Context>
          <p style={{ "margin-top": "1rem" }}>
            The action stays available when navigation is collapsed.
          </p>
        </PanelContent>
      </Resizable.Panel>
    </Resizable.Root>
  );
}
