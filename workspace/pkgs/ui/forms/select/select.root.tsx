import { Select as ArkSelect, type CollectionItem } from "@ark-ui/solid/select";
import { mergeProps, splitProps } from "solid-js";
import { useTextControl } from "../text-control.context";
import { SelectVisualContext } from "./select.context";
import { createSelectFormState } from "./select.form";
import type { SelectRootProps } from "./select.types";

export type { SelectRootProps } from "./select.types";

export function SelectRoot<T extends CollectionItem>(props: SelectRootProps<T>) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "positioning",
    "children",
    "class",
    "value",
    "defaultValue",
    "onValueChange",
  ]);
  const control = useTextControl(local);
  const form = createSelectFormState(props);
  return (
    <SelectVisualContext.Provider value={control}>
      <ArkSelect.Root
        {...mergeProps({ lazyMount: true }, rest)}
        disabled={control.disabled()}
        readOnly={control.readOnly()}
        invalid={control.invalid()}
        value={form.value()}
        onValueChange={form.onValueChange}
        positioning={mergeProps(
          {
            placement: "bottom-start" as const,
            strategy: "fixed" as const,
            sameWidth: true,
            gutter: 4,
            overflowPadding: 16,
          },
          local.positioning ?? {},
        )}
        class={["nui-select", local.class].filter(Boolean).join(" ")}
      >
        {local.children}
        <ArkSelect.HiddenSelect ref={form.register} />
      </ArkSelect.Root>
    </SelectVisualContext.Provider>
  );
}
