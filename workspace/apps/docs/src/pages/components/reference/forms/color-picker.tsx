import { ColorPicker, Field, parseColor } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Cor de destaque" : "Accent color"}</Field.Label>
      <ColorPicker.Root name="accent" defaultValue={parseColor("#0090ff")}>
        <ColorPicker.Trigger />
        <ColorPicker.Content
          alpha
          hueLabel={pt() ? "Matiz" : "Hue"}
          alphaLabel={pt() ? "Opacidade" : "Opacity"}
        />
      </ColorPicker.Root>
    </Field.Root>
  );
}
