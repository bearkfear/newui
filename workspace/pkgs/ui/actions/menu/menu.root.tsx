import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { mergeProps, splitProps } from "solid-js";

export type MenuRootProps = ArkMenu.RootProps;

export function MenuRoot(props: MenuRootProps) {
  const [local, rest] = splitProps(props, ["positioning"]);
  return (
    <ArkMenu.Root
      {...mergeProps({ lazyMount: true }, rest)}
      positioning={mergeProps(
        {
          placement: "bottom-start" as const,
          strategy: "fixed" as const,
          gutter: 4,
          overflowPadding: 16,
          overlap: true,
        },
        local.positioning ?? {},
      )}
    />
  );
}
