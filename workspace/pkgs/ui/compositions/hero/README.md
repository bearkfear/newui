# Hero

A responsive opening section composed from Section, Container, Heading, and Text.

```tsx
import { Hero, Button } from "@egcs/newui";

<Hero.Root layout="split" tone="accent" aria-labelledby="welcome-title">
  <Hero.Content>
    <Hero.Eyebrow>Your next chapter</Hero.Eyebrow>
    <Hero.Title id="welcome-title">Make room for your best work.</Hero.Title>
    <Hero.Description>A clearer space for your projects.</Hero.Description>
    <Hero.Actions>
      <Button>Start building</Button>
    </Hero.Actions>
  </Hero.Content>
  <Hero.Media>
    <img src="/workspace.png" alt="Project workspace overview" />
  </Hero.Media>
</Hero.Root>;
```

Root options: `layout` stacked (default) or split; `align` start (default) or center; `tone` default, subtle, or accent; `spacing` sm, md (default), or lg; `width` sm, md, lg (default), or full.

Split layout places content before media and becomes two columns from 768px. Stacked layout keeps both in one column. Center alignment affects content and actions reactively through Solid context. Media is optional.

Title defaults to h1, size 1. Description defaults to Text size 5, muted; Eyebrow to size 7. Override `as`, `size`, and `tone` on the typography parts to fit the document hierarchy. Name the native section using matching `aria-labelledby` and Title `id` values. Use unique IDs for multiple instances.

Actions accepts arbitrary JSX. Root attributes, events, styles, and refs target the section; the inner Container controls width and gutters. Each part accepts its native or typography props and additive classes.

Import `@egcs/newui/styles.css` once. Review Compositions / Hero and Overview.
