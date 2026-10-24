import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { avatarRecipe } from "./avatar.recipe";

export type AvatarRootProps = ArkAvatar.RootProps & VariantProps<typeof avatarRecipe>;
export type AvatarImageProps = ArkAvatar.ImageProps;
export type AvatarFallbackProps = ArkAvatar.FallbackProps;
const styles = avatarRecipe();

export function AvatarRoot(props: AvatarRootProps) {
  const [local, rest] = splitProps(props, ["size", "shape", "class"]);
  return (
    <ArkAvatar.Root
      {...rest}
      class={avatarRecipe({ size: local.size, shape: local.shape }).root({ class: local.class })}
    />
  );
}

export function AvatarImage(props: AvatarImageProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkAvatar.Image {...rest} class={styles.image({ class: local.class })} />;
}

export function AvatarFallback(props: AvatarFallbackProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkAvatar.Fallback {...rest} class={styles.fallback({ class: local.class })} />;
}

export const Avatar = { Root: AvatarRoot, Image: AvatarImage, Fallback: AvatarFallback };
