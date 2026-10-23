import { createSignal, createUniqueId, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { ProjectArtwork } from "../../stories/project-artwork";
import type { HeroRootProps } from "../hero";
import { Hero } from "../hero";

export function HeroExample(props: HeroRootProps) {
  const titleId = createUniqueId();
  const [started, setStarted] = createSignal(false);
  return (
    <Hero.Root {...props} aria-labelledby={titleId}>
      <Hero.Content>
        <Hero.Eyebrow>Your next chapter</Hero.Eyebrow>
        <Hero.Title id={titleId}>Make room for your best work.</Hero.Title>
        <Hero.Description>
          Bring projects, people, and the next small step together in a space that feels clear.
        </Hero.Description>
        <Hero.Actions>
          <Button onClick={() => setStarted(true)} disabled={started()}>
            Start building
          </Button>
          <Button variant="outline" onClick={() => setStarted(false)} disabled={!started()}>
            Reset demo
          </Button>
        </Hero.Actions>
        <Text size="7" tone="muted" role="status">
          {started() ? "Your demo workspace is ready." : "A local demo. No account needed."}
        </Text>
      </Hero.Content>
      <Show when={props.layout === "split"}>
        <Hero.Media>
          <ProjectArtwork />
        </Hero.Media>
      </Show>
    </Hero.Root>
  );
}
