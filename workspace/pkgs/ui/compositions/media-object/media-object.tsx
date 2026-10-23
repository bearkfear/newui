import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { VariantProps } from "tailwind-variants/lite";
import {
  MediaObjectActions,
  MediaObjectContent,
  MediaObjectDescription,
  MediaObjectMedia,
  MediaObjectTitle,
} from "./media-object.parts";
import { mediaObjectRecipe } from "./media-object.recipe";

export type MediaObjectRootProps = JSX.HTMLAttributes<HTMLElement> &
  VariantProps<typeof mediaObjectRecipe> & {
    as?: "article" | "div";
  };

export function MediaObjectRoot(props: MediaObjectRootProps) {
  const [local, rest] = splitProps(mergeProps({ as: "article" as const }, props), [
    "as",
    "size",
    "align",
    "class",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...rest}
      class={mediaObjectRecipe({ size: local.size, align: local.align }).root({
        class: local.class,
      })}
    />
  );
}

export const MediaObject = {
  Root: MediaObjectRoot,
  Media: MediaObjectMedia,
  Content: MediaObjectContent,
  Title: MediaObjectTitle,
  Description: MediaObjectDescription,
  Actions: MediaObjectActions,
};
