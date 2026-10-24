import type { AvatarRootProps } from "../avatar";
import { Avatar } from "../avatar";

export function AvatarExample(props: AvatarRootProps) {
  return (
    <Avatar.Root role="img" aria-label="newui workspace" {...props}>
      <Avatar.Image src="/favicon.svg" alt="" />
      <Avatar.Fallback>NU</Avatar.Fallback>
    </Avatar.Root>
  );
}
