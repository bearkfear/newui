import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { CalloutCloseButton } from "./callout.close-button";
import { CalloutOptions } from "./callout.context";
import { CalloutIcon } from "./callout.icon";
import { CalloutActions, CalloutContent, CalloutDescription, CalloutTitle } from "./callout.parts";
import { calloutRecipe } from "./callout.recipe";

export type CalloutRootProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calloutRecipe>;

export function CalloutRoot(props: CalloutRootProps) {
  const [local, rest] = splitProps(props, ["tone", "variant", "class"]);
  return (
    <CalloutOptions.Provider value={() => ({ tone: local.tone ?? "info" })}>
      <div
        {...rest}
        data-nui-callout=""
        class={calloutRecipe({ tone: local.tone, variant: local.variant }).root({
          class: local.class,
        })}
      />
    </CalloutOptions.Provider>
  );
}

export const Callout = {
  Root: CalloutRoot,
  Icon: CalloutIcon,
  Content: CalloutContent,
  Title: CalloutTitle,
  Description: CalloutDescription,
  Actions: CalloutActions,
  CloseButton: CalloutCloseButton,
};
