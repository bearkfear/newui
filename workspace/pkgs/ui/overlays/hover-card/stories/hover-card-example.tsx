import { Text } from "../../../content/text/text";
import { HoverCard, type HoverCardRootProps } from "../hover-card";
import { ProfilePreview } from "./profile-preview";

export interface HoverCardExampleProps {
  placement?: NonNullable<HoverCardRootProps["positioning"]>["placement"];
  openDelay?: number;
  closeDelay?: number;
  showArrow?: boolean;
  disabled?: boolean;
}

export function HoverCardExample(props: HoverCardExampleProps) {
  return (
    <div style={{ display: "grid", gap: "16px", padding: "32px 0" }}>
      <Text>
        Built with tools from{" "}
        <HoverCard.Root
          positioning={{ placement: props.placement }}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          disabled={props.disabled}
        >
          <HoverCard.Trigger
            asChild={(triggerProps) => (
              <a
                {...triggerProps()}
                href="https://github.com/solidjs"
                target="_blank"
                rel="noreferrer"
              >
                SolidJS
              </a>
            )}
          />
          <HoverCard.Content showArrow={props.showArrow ?? true}>
            <ProfilePreview />
          </HoverCard.Content>
        </HoverCard.Root>
        .
      </Text>
      <Text size="7" tone="muted">
        Hover or focus the link to preview. Clicking opens its destination in a new tab.
      </Text>
    </div>
  );
}
