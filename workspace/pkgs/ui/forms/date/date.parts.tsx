import { type JSX, splitProps } from "solid-js";
import { useDateContext } from "./date.context";

export type DateLabelProps = JSX.LabelHTMLAttributes<HTMLLabelElement>;

export function DateLabel(props: DateLabelProps) {
  const date = useDateContext();
  const [local, rest] = splitProps(props, ["children", "class"]);
  return (
    <label
      {...rest}
      id={date.labelId(0)}
      for={date.inputId(0)}
      class={["nui-date-label", local.class].filter(Boolean).join(" ")}
    >
      {local.children}
    </label>
  );
}
