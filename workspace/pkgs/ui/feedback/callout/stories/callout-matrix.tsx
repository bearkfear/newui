import { For } from "solid-js";
import { CalloutExample } from "./callout-example";

const messages = [
  {
    tone: "neutral",
    title: "Workspace information",
    description: "Your project details are available to the team.",
  },
  {
    tone: "primary",
    title: "Share your next milestone",
    description: "Keep everyone informed with a project update.",
  },
  {
    tone: "info",
    title: "Scheduled maintenance",
    description: "Save your changes before the maintenance window.",
  },
  {
    tone: "success",
    title: "Changes saved",
    description: "Your project preferences are up to date.",
  },
  {
    tone: "warning",
    title: "Review your sharing settings",
    description: "This project is currently visible to all workspace members.",
  },
  {
    tone: "danger",
    title: "Update could not be saved",
    description: "Your changes are still available. Please try again.",
  },
] as const;

export function CalloutMatrix() {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
        gap: "16px",
      }}
    >
      <For each={messages}>
        {(message) => (
          <For each={["soft", "outline", "message"] as const}>
            {(variant) => <CalloutExample {...message} variant={variant} />}
          </For>
        )}
      </For>
    </div>
  );
}
