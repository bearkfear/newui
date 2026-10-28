import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Tabs } from "../../../navigation/tabs/tabs";

export const fileSource = `# Implementation stages

A small library of thoughtful components for Solid.

## Foundations

- Radix color scales and semantic tokens
- Light and dark themes
- Accessible behavior powered by Ark UI

## Components

- Buttons and content
- Overlays and feedback
- Navigation and compositions
`;

export function FileContent() {
  return (
    <>
      <Tabs.Content value="preview" style={{ "padding-top": "0" }}>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            "max-width": "44rem",
            margin: "0 auto",
            padding: "1rem 0",
          }}
        >
          <Heading as="h2" size="3">
            Implementation stages
          </Heading>
          <Text tone="muted">A small library of thoughtful components for Solid.</Text>
          <Heading as="h3" size="5">
            Foundations
          </Heading>
          <Text>
            Radix color scales, light and dark themes, and accessible behavior powered by Ark UI.
          </Text>
          <Heading as="h3" size="5">
            Components
          </Heading>
          <Text>Buttons, content, overlays, feedback, navigation and compositions.</Text>
        </div>
      </Tabs.Content>
      <Tabs.Content value="code" style={{ "padding-top": "0" }}>
        <pre
          style={{
            margin: "0",
            "overflow-x": "auto",
            "font-size": "0.875rem",
            "line-height": "1.7",
            color: "var(--nui-muted-foreground)",
          }}
        >
          <code>{fileSource}</code>
        </pre>
      </Tabs.Content>
      <Tabs.Content value="blame" style={{ "padding-top": "0" }}>
        <div style={{ display: "grid", gap: "1rem" }}>
          <Heading as="h2" size="5">
            Latest changes
          </Heading>
          <Text>
            <code>5ff1f40</code> — Add tabs, counters and compact record lists.
          </Text>
          <Text tone="muted">Library team · Documentation updated alongside implementation.</Text>
        </div>
      </Tabs.Content>
    </>
  );
}
