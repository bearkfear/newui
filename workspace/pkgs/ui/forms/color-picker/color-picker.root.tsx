import { ColorPicker as ArkColorPicker } from "@ark-ui/solid/color-picker";
import { useFieldContext } from "@ark-ui/solid/field";
import { createContext, mergeProps, splitProps, useContext } from "solid-js";
import { type TextControlOptions, useTextControl } from "../text-control.context";

export type ColorPickerRootProps = ArkColorPicker.RootProps & TextControlOptions;
const VisualContext = createContext<ReturnType<typeof useTextControl>>();

export function useColorPickerVisual() {
  const value = useContext(VisualContext);
  if (!value) throw new Error("ColorPicker parts must be used inside ColorPicker.Root.");
  return value;
}

export function ColorPickerRoot(props: ColorPickerRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "required",
    "positioning",
    "ids",
    "class",
    "children",
  ]);
  const control = useTextControl(local);
  const field = useFieldContext();
  return (
    <VisualContext.Provider value={control}>
      <ArkColorPicker.Root
        {...mergeProps({ lazyMount: true, defaultFormat: "rgba" as const }, rest)}
        ids={mergeProps(
          field ? { trigger: field().ids.control, label: field().ids.label } : {},
          local.ids ?? {},
        )}
        disabled={control.disabled()}
        readOnly={control.readOnly()}
        invalid={control.invalid()}
        required={Boolean(local.required || field?.().required)}
        positioning={mergeProps(
          {
            placement: "bottom-start" as const,
            strategy: "fixed" as const,
            gutter: 6,
            overflowPadding: 12,
          },
          local.positioning ?? {},
        )}
        class={["nui-color-picker", local.class].filter(Boolean).join(" ")}
      >
        {local.children}
        <ArkColorPicker.HiddenInput />
      </ArkColorPicker.Root>
    </VisualContext.Provider>
  );
}
