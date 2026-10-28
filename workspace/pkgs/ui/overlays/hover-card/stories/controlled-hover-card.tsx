import { createSignal } from "solid-js";
import { Text } from "../../../content/text/text";
import { HoverCard } from "../hover-card";
import { ProfilePreview } from "./profile-preview";

export function ControlledHoverCard() {
  const [open, setOpen] = createSignal(false);
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "flex-wrap": "wrap",
        gap: "24px",
        padding: "32px 0",
      }}
    >
      <HoverCard.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <HoverCard.Trigger
          asChild={(props) => (
            <button
              {...props()}
              type="button"
              aria-expanded={open()}
              onClick={() => setOpen(!open())}
            >
              {open() ? "Hide preview" : "Show preview"}
            </button>
          )}
        />
        <HoverCard.Content>
          <ProfilePreview />
        </HoverCard.Content>
      </HoverCard.Root>
      <Text role="status" size="7" tone="muted">
        Preview is {open() ? "open" : "closed"}.
      </Text>
    </div>
  );
}
