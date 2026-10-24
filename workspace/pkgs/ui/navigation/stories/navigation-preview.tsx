import { Heading } from "../../content/heading/heading";
import { Text } from "../../content/text/text";
import type { NavigationModel } from "./navigation-model";
import { navigationPages } from "./navigation-model";

export function NavigationPreview(props: { model: NavigationModel }) {
  const page = () => navigationPages[props.model.current()];
  return (
    <section
      id={props.model.targetId}
      aria-label="Selected destination"
      style={{
        display: "grid",
        gap: "16px",
        padding: "32px",
        "min-width": "0",
        "scroll-margin-top": "24px",
      }}
    >
      <Text size="7" tone="muted">
        YOUR WORKSPACE
      </Text>
      <Heading as="h1" size="3">
        {page().title}
      </Heading>
      <Text tone="muted">{page().description}</Text>
      <Text size="7" tone="muted" role="status">
        Current page: {page().title}
      </Text>
    </section>
  );
}
