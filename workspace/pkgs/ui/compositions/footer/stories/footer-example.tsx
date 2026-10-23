import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import type { FooterRootProps } from "../footer";
import { Footer } from "../footer";

export function FooterExample(props: FooterRootProps) {
  return (
    <Footer.Root {...props}>
      <Footer.Content>
        <Footer.Brand>
          <Heading as="h2" size="4">
            newui.
          </Heading>
          <Text tone="muted">Thoughtful building blocks for your next idea.</Text>
        </Footer.Brand>
        <Footer.Links>
          <Footer.Group aria-label="Explore components">
            <Footer.Title>Explore</Footer.Title>
            <Footer.Link href="?path=/docs/actions-button--documentation" target="_top">
              Buttons
            </Footer.Link>
            <Footer.Link href="?path=/docs/content-text--documentation" target="_top">
              Typography
            </Footer.Link>
            <Footer.Link href="?path=/docs/compositions-panel--documentation" target="_top">
              Panels
            </Footer.Link>
          </Footer.Group>
          <Footer.Group aria-label="Learning resources">
            <Footer.Title>Resources</Footer.Title>
            <Footer.Link href="?path=/story/getting-started-introduction--overview" target="_top">
              Introduction
            </Footer.Link>
            <Footer.Link href="?path=/story/getting-started-workshop-guide--overview" target="_top">
              Workshop guide
            </Footer.Link>
            <Footer.Link href="?path=/story/foundations-tokens--colors" target="_top">
              Design tokens
            </Footer.Link>
          </Footer.Group>
        </Footer.Links>
      </Footer.Content>
      <Footer.Meta>
        <span>Built with care. Made to be yours.</span>
        <span>SolidJS · Radix Colors</span>
      </Footer.Meta>
    </Footer.Root>
  );
}
