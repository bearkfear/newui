import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NestedResizable } from "./stories/nested-resizable";
import {
  CollapsibleResizable,
  ControlledResizable,
  ResizableExample,
  type ResizableExampleProps,
} from "./stories/resizable-example";

const meta = {
  title: "Layout/Resizable",
  tags: ["autodocs"],
  args: { orientation: "horizontal", withHandle: true, disabled: false },
  argTypes: {
    orientation: { control: "inline-radio", options: ["horizontal", "vertical"] },
    withHandle: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Resizable panels powered by Ark Splitter. Drag or use arrow keys on the divider; Shift uses larger steps, Home/End reach constraints, and Enter toggles a collapsible panel. Panels accept percentage or pixel constraints. Applications own content, scrolling, and the root dimensions. Handles have accessible names and optional decorative grips. No additional dependency or custom interaction state machine.",
      },
      source: {
        language: "tsx",
        code: `import { Resizable } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Resizable.Root
  panels={[{ id: "navigation", minSize: 20 }, { id: "content", minSize: 25 }]}
  defaultSize={[35, 65]}
  style={{ height: "20rem", width: "100%" }}
>
  <Resizable.Panel id="navigation">Navigation</Resizable.Panel>
  <Resizable.Handle id="navigation:content" aria-label="Resize navigation and content" withHandle />
  <Resizable.Panel id="content">Content</Resizable.Panel>
</Resizable.Root>`,
      },
    },
  },
  render: (args) => <ResizableExample {...args} />,
} satisfies Meta<ResizableExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const WithoutGrip: Story = { args: { withHandle: false } };
export const Disabled: Story = { args: { disabled: true } };
export const Nested: Story = { render: () => <NestedResizable /> };
export const Controlled: Story = {
  render: () => <ControlledResizable />,
  parameters: {
    docs: {
      source: {
        code: `const [size, setSize] = createSignal([35, 65]);

<Resizable.Root panels={[{ id: "navigation", minSize: 20 }, { id: "content", minSize: 25 }]}
  size={size()} onResize={(details) => setSize(details.size)}>
  <Resizable.Panel id="navigation">Navigation</Resizable.Panel>
  <Resizable.Handle id="navigation:content" aria-label="Resize panels" withHandle />
  <Resizable.Panel id="content">Content</Resizable.Panel>
</Resizable.Root>`,
      },
    },
  },
};
export const Collapsible: Story = {
  render: () => <CollapsibleResizable />,
  parameters: {
    docs: {
      source: {
        code: `<Resizable.Root
  panels={[{ id: "navigation", minSize: 20, collapsible: true, collapsedSize: 0 }, { id: "content", minSize: 30 }]}
  defaultSize={[30, 70]} style={{ height: "20rem" }}>
  <Resizable.Panel id="navigation">Navigation</Resizable.Panel>
  <Resizable.Handle id="navigation:content" aria-label="Resize or collapse navigation" withHandle />
  <Resizable.Panel id="content">
    <Resizable.Context>{(api) => (
      <button type="button" onClick={() => api().isPanelCollapsed("navigation")
        ? api().expandPanel("navigation") : api().collapsePanel("navigation")}>
        Toggle navigation
      </button>
    )}</Resizable.Context>
  </Resizable.Panel>
</Resizable.Root>`,
      },
    },
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
export const NestedDark: Story = { ...Nested, globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const VerticalMobile: Story = { ...Mobile, args: { orientation: "vertical" } };
