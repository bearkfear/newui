import { Field as ArkField, useFieldContext } from "@ark-ui/solid/field";
import type { JSX } from "solid-js";
import { createUniqueId, onCleanup, onMount, Show, splitProps } from "solid-js";
import { useFieldVisual } from "../text-control.context";

export type FieldLabelProps = ArkField.LabelProps;
export type FieldDescriptionProps = ArkField.HelperTextProps;
export type FieldErrorTextProps = ArkField.ErrorTextProps;
export type FieldSuccessTextProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type FieldContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export type FieldRequiredIndicatorProps = ArkField.RequiredIndicatorProps;

export function FieldLabel(props: FieldLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkField.Label {...rest} class={partClass("nui-field-label", local.class)} />;
}

export function FieldDescription(props: FieldDescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const field = useFieldContext();
  const visual = useFieldVisual();
  const hasFeedback = () =>
    Boolean(
      visual?.successId() ||
        (field?.().invalid && field().ariaDescribedby?.split(" ").includes(field().ids.errorText)),
    );
  return (
    <Show when={!hasFeedback()}>
      <ArkField.HelperText {...rest} class={partClass("nui-field-description", local.class)} />
    </Show>
  );
}

export function FieldErrorText(props: FieldErrorTextProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkField.ErrorText {...rest} class={partClass("nui-field-error", local.class)} />;
}

export function FieldSuccessText(props: FieldSuccessTextProps) {
  const field = useFieldVisual();
  return (
    <Show when={field?.options().valid}>
      <SuccessMessage {...props} />
    </Show>
  );
}

function SuccessMessage(props: FieldSuccessTextProps) {
  const [local, rest] = splitProps(props, ["id", "class"]);
  const field = useFieldVisual();
  const id = local.id ?? `${createUniqueId()}-success`;
  onMount(() => {
    const cleanup = field?.registerSuccess(id);
    onCleanup(() => cleanup?.());
  });
  return (
    <span
      {...rest}
      id={id}
      aria-live="polite"
      class={partClass("nui-field-success", local.class)}
    />
  );
}

export function FieldContent(props: FieldContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={partClass("nui-field-content", local.class)} />;
}

export function FieldRequiredIndicator(props: FieldRequiredIndicatorProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkField.RequiredIndicator {...rest} class={partClass("nui-field-required", local.class)} />
  );
}

function partClass(base: string, extra: string | undefined) {
  return [base, extra].filter(Boolean).join(" ");
}
