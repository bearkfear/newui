import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { CalloutCloseButton } from "./callout.close-button";
import { CalloutOptions } from "./callout.context";
import { CalloutIcon } from "./callout.icon";
import {
  CalloutActions,
  CalloutBody,
  CalloutContent,
  CalloutDescription,
  CalloutHeader,
  CalloutTitle,
} from "./callout.parts";
import { calloutRecipe } from "./callout.recipe";

/** Choose tone/variant for appearance; neither one adds alert or live-region semantics. */
export type CalloutRootProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calloutRecipe>;

/**
 * Compose Title/Description with optional Icon, Actions, or CloseButton. Color does not announce the
 * message: add native role/live-region semantics only when the application needs an announcement.
 * CloseButton has no built-in hide state; its onClick must update application visibility.
 */
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

/** Callout parts for an inline message; there is no separate Alert component or dismissal state. */
export const Callout = {
  Root: CalloutRoot,
  Header: CalloutHeader,
  Body: CalloutBody,
  Icon: CalloutIcon,
  Content: CalloutContent,
  Title: CalloutTitle,
  Description: CalloutDescription,
  Actions: CalloutActions,
  CloseButton: CalloutCloseButton,
};
