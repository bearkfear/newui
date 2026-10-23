# Footer

A page footer with responsive brand content, link groups, and optional metadata.

```tsx
import { Footer, Text } from "newui";

<Footer.Root tone="subtle">
  <Footer.Content>
    <Footer.Brand>
      <Text>newui</Text>
    </Footer.Brand>
    <Footer.Links>
      <Footer.Group aria-label="Product">
        <Footer.Title>Product</Footer.Title>
        <Footer.Link href="/features">Features</Footer.Link>
        <Footer.Link href="/docs">Documentation</Footer.Link>
      </Footer.Group>
    </Footer.Links>
  </Footer.Content>
  <Footer.Meta>
    <span>Made to be yours.</span>
  </Footer.Meta>
</Footer.Root>;
```

Root options: `tone` default or subtle; `width` sm, md, lg (default), or full. Root uses Container for width and gutters. Content stacks on small screens and splits into brand/link columns from 768px. Links automatically distribute groups. Meta wraps its items and supplies a top divider.

Group renders nav and needs an accessible label. Title defaults to h2, size 6. Link is a native anchor with hover, focus, and current-page styling through `aria-current="page"`. Applications own destinations and routing; custom link elements may also be placed inside a Group.

Root renders footer. Place a page footer outside main to expose the native contentinfo landmark; a footer nested in an article has contextual semantics instead. Other layout parts render divs. Native attributes, events, styles, and refs are forwarded.

Import `newui/styles.css` once. Review Compositions / Footer and Overview before authorizing new tests.
