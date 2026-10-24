# Card

A compound surface for related content. Its structure combines the explicit title/description parts of the Solid UI reference with optional media and divided footer actions inspired by Bulma. The implementation is original and uses newui recipes and Radix tokens.

## Parts and options

- `Root`: `variant="outline"` (default), `"soft"`, or `"elevated"`; `as="div"` (default), `"article"`, or `"section"`.
- `Header`: title and description stacked vertically. Actions follow below on narrow cards and occupy a second column when the card is at least 24rem wide.
- `Title`: existing Heading API; defaults to `h2`, size 5. Choose the heading level for the page hierarchy.
- `Description`: existing Text API; defaults to muted text, size 6.
- `Actions`: optional wrapping header controls; give icon-only controls an accessible name.
- `Media`: full-width visual content, with rounded outer corners when first or last. Direct images keep their natural aspect ratio; supply image sizing or cropping when needed.
- `Content`: padded, free-form content; spacing joins with an immediately preceding Header.
- `Footer`: `variant="simple"` (default) for wrapping content with consistent outer padding, or `"divided"` for a bordered row. Header, content, and simple footer share spacing without accumulating adjacent padding.
- `FooterItem`: equal-width wrappers for the divided footer. Put native links or buttons inside them.

All parts are optional. Props, event handlers, DOM refs, and additive classes are forwarded. Root and Footer export `CardRootProps` and `CardFooterProps`.

```tsx
<Card.Root as="article" aria-labelledby="project-title">
  <Card.Media>
    <img src="/project.jpg" alt="Project preview" />
  </Card.Media>
  <Card.Header>
    <Card.Title id="project-title">Project updates</Card.Title>
    <Card.Description>The latest news from your team.</Card.Description>
  </Card.Header>
  <Card.Content>
    <Text>Review the next milestone with your team.</Text>
  </Card.Content>
  <Card.Footer>
    <Button>Review milestone</Button>
  </Card.Footer>
</Card.Root>;
```

## Behavior and validation

Card is a static HTML composition and needs no Ark behavior primitive. It does not add a click handler, focus stop, or button role. Compose real controls inside it; interactive menus or disclosures should use the corresponding Ark-powered components. Header, Content, Media, Actions, Footer, and FooterItem render div elements without additional landmark roles.

Review Content / Card in Storybook for visual variants, media, divided actions, header actions, content-only layouts, and mobile examples. Local signals demonstrate saving, resetting, and following. The brand image examples use a nested light theme to preserve the artwork contrast. The implementation awaits user validation; no new automated tests were added.

## References

- [Bulma Card](https://bulma.io/documentation/components/card/).
- [Solid UI Card](https://www.solid-ui.com/docs/components/card).
