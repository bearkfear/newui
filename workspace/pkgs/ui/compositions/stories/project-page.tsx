import { Heading } from "../../content/heading/heading";
import { Container } from "../../layout/container/container";
import { Section } from "../../layout/section/section";
import { ActionBarExample } from "../action-bar/stories/action-bar-example";
import { FooterExample } from "../footer/stories/footer-example";
import { HeroExample } from "../hero/stories/hero-example";
import { MediaObjectExample } from "../media-object/stories/media-object-example";
import { PanelExample } from "../panel/stories/panel-example";

export function ProjectPage() {
  return (
    <div>
      <main>
        <HeroExample layout="split" tone="accent" spacing="lg" />
        <Section aria-label="Project workspace">
          <Container>
            <ActionBarExample variant="surface" />
            <div
              style={{
                display: "flex",
                "flex-wrap": "wrap",
                gap: "32px",
                "margin-block-start": "32px",
                "align-items": "start",
              }}
            >
              <div style={{ flex: "1 1 320px", "min-width": "0" }}>
                <PanelExample />
              </div>
              <section
                aria-label="Team activity"
                style={{ flex: "1 1 320px", "min-width": "0", display: "grid", gap: "24px" }}
              >
                <Heading size="4">Around the team</Heading>
                <MediaObjectExample />
              </section>
            </div>
          </Container>
        </Section>
      </main>
      <FooterExample tone="subtle" />
    </div>
  );
}
