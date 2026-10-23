import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import type { MediaObjectRootProps } from "../media-object";
import { MediaObject } from "../media-object";

export function ProfilePicture(props: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        "aspect-ratio": "1",
        display: "grid",
        "place-items": "center",
        background: "var(--nui-primary-soft)",
        color: "var(--nui-primary-text)",
        "font-weight": "600",
      }}
    >
      {props.initials}
    </div>
  );
}
export function MediaObjectExample(props: MediaObjectRootProps) {
  const [following, setFollowing] = createSignal(false);
  return (
    <MediaObject.Root {...props}>
      <MediaObject.Media>
        <ProfilePicture initials="AM" />
      </MediaObject.Media>
      <MediaObject.Content>
        <MediaObject.Title as="h2">Avery Morgan</MediaObject.Title>
        <Text size="7" tone="muted">
          Product designer · 12 minutes ago
        </Text>
        <MediaObject.Description>
          The latest designs are ready for review. A clearer layout makes the next step easier to
          find.
        </MediaObject.Description>
      </MediaObject.Content>
      <MediaObject.Actions>
        <Button
          size="sm"
          variant="outline"
          aria-pressed={following()}
          onClick={() => setFollowing((value) => !value)}
        >
          {following() ? "Following" : "Follow"}
        </Button>
      </MediaObject.Actions>
    </MediaObject.Root>
  );
}
