import { parseColor } from "@ark-ui/solid/color-picker";
import { createSignal, For, splitProps } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../../actions/button/button";
import { Dialog } from "../../overlays/dialog/dialog";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { ColorPicker } from "./color-picker";
import type { ColorPickerRootProps } from "./color-picker.root";

const colors = ["#e5484d", "#f5a623", "#30a46c", "#0090ff", "#8e4ec6", "#1c2024"];
function Example(props: ColorPickerRootProps & { alpha?: boolean }) {
  const [local, root] = splitProps(props, ["alpha"]);
  return (
    <Field.Root style={{ width: "18rem", "max-width": "100%" }}>
      <Field.Label>Color</Field.Label>
      <ColorPicker.Root {...root}>
        <ColorPicker.Trigger />
        <ColorPicker.Content alpha={Boolean(local.alpha)}>
          <ColorPicker.SwatchGroup aria-label="Suggested colors">
            <For each={colors}>{(color) => <ColorPicker.SwatchTrigger value={color} />}</For>
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker.Root>
      <Field.Description>Choose a color or enter a hex value.</Field.Description>
    </Field.Root>
  );
}

const meta = {
  title: "Forms/ColorPicker",
  component: ColorPicker.Root,
  render: (args) => <Example {...args} />,
  args: { defaultValue: parseColor("#0090ff") },
} satisfies Meta<ColorPickerRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Transparency: Story = {
  render: () => <Example alpha defaultValue={parseColor("#0090ff80")} />,
};
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = createSignal(parseColor("#30a46c"));
    return <Example value={value()} onValueChange={(details) => setValue(details.value)} />;
  },
};
export const FieldSizeComparison: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1.5rem", "max-width": "40rem" }}>
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <div
            style={{ display: "flex", "flex-wrap": "wrap", gap: "1rem", "align-items": "start" }}
          >
            <Field.Root size={size} style={{ flex: "1 1 14rem" }}>
              <Field.Label>Color ({size})</Field.Label>
              <ColorPicker.Root defaultValue={parseColor("#0090ff")}>
                <ColorPicker.Trigger />
                <ColorPicker.Content />
              </ColorPicker.Root>
              <Field.Description>Choose a color.</Field.Description>
            </Field.Root>
            <Field.Root size={size} style={{ flex: "1 1 14rem" }}>
              <Field.Label>Text ({size})</Field.Label>
              <Input defaultValue="Example text" />
              <Field.Description>Enter a name.</Field.Description>
            </Field.Root>
          </div>
        )}
      </For>
    </div>
  ),
};
export const States: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Example disabled />
      <Example readOnly />
      <Example invalid />
      <Example size="sm" />
      <Example size="lg" tone="primary" rounded />
    </div>
  ),
};
export const Form: Story = {
  render: () => (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        window.alert(new FormData(event.currentTarget).get("color"));
      }}
    >
      <Example name="color" defaultValue={parseColor("#0090ff")} />
      <div style={{ display: "flex", gap: "0.5rem", "margin-top": "1rem" }}>
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
    </form>
  ),
};
export const InDialog: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Open dialog</Button>} />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Choose a color</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Example />
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Root>
  ),
};
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
