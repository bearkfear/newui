import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import {
  ButtonGroupContext,
  useButtonGroup,
} from "../../actions/button-group/button-group.context";
import type { TextControlOptions } from "../text-control.context";
import { InputGroupContext, useTextControl } from "../text-control.context";
import { textControlRecipe } from "../text-control.recipe";
import { focusInputFromGroup, preserveInputFocusFromGroup } from "./input-group.events";
import {
  InputGroupAction,
  InputGroupAddon,
  InputGroupIcon,
  InputGroupLoading,
} from "./input-group.parts";

export type InputGroupRootProps = JSX.HTMLAttributes<HTMLDivElement> &
  TextControlOptions & {
    attached?: boolean;
  };

export function InputGroupRoot(props: InputGroupRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "attached",
    "class",
    "children",
    "onClick",
    "onPointerDown",
  ]);
  const control = useTextControl(local);
  const buttons = useButtonGroup();
  const options = () => ({
    size: control.size(),
    tone: control.tone(),
    rounded: control.rounded(),
    valid: control.valid(),
    invalid: control.invalid(),
    loading: control.loading(),
    disabled: control.disabled(),
    readOnly: control.readOnly(),
  });
  const buttonOptions = mergeProps(buttons, {
    get size() {
      return control.size();
    },
    get disabled() {
      return buttons.disabled || control.disabled();
    },
  });
  return (
    <InputGroupContext.Provider value={options}>
      <ButtonGroupContext.Provider value={buttonOptions}>
        {/* biome-ignore lint/a11y/noStaticElementInteractions: Decorative hit areas forward clicks to the native input; the group is not a separate control. */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: Keyboard users focus the native input directly through Tab. */}
        <div
          {...rest}
          onPointerDown={(event) => {
            if (typeof local.onPointerDown === "function") local.onPointerDown(event);
            else local.onPointerDown?.[0](local.onPointerDown[1], event);
            preserveInputFocusFromGroup(event);
          }}
          onClick={(event) => {
            if (typeof local.onClick === "function") local.onClick(event);
            else local.onClick?.[0](local.onClick[1], event);
            focusInputFromGroup(event);
          }}
          data-attached={local.attached ? "" : undefined}
          data-invalid={control.invalid() ? "" : undefined}
          data-valid={control.valid() ? "" : undefined}
          data-disabled={control.disabled() ? "" : undefined}
          data-readonly={control.readOnly() ? "" : undefined}
          data-loading={control.loading() ? "" : undefined}
          aria-busy={control.loading() || undefined}
          class={textControlRecipe({
            size: control.size(),
            tone: control.tone(),
            rounded: control.rounded(),
            class: ["nui-input-group", local.class].filter(Boolean).join(" "),
          })}
        >
          {local.children}
        </div>
      </ButtonGroupContext.Provider>
    </InputGroupContext.Provider>
  );
}

export const InputGroup = {
  Root: InputGroupRoot,
  Icon: InputGroupIcon,
  Addon: InputGroupAddon,
  Action: InputGroupAction,
  Loading: InputGroupLoading,
};
