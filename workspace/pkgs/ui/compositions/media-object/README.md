# Media Object

Places a thumbnail, flexible content, and optional actions in a responsive row.

```tsx
import { MediaObject, Button } from "newui";

<MediaObject.Root>
  <MediaObject.Media>
    <img src="/profile.png" alt="Avery Morgan" />
  </MediaObject.Media>
  <MediaObject.Content>
    <MediaObject.Title>Avery Morgan</MediaObject.Title>
    <MediaObject.Description>The latest designs are ready for review.</MediaObject.Description>
  </MediaObject.Content>
  <MediaObject.Actions>
    <Button size="sm">Reply</Button>
  </MediaObject.Actions>
</MediaObject.Root>;
```

Root options: `size` sm (2.5rem), md (4rem, default), or lg (6rem) for media width; `align` start (default) or center; `as` article (default) or div.

Use Media, Content, and optional Actions as direct Root children, in that order. Media stays beside content; actions move below content on small screens and occupy a third column from 768px. Image height follows its own aspect ratio. Content uses a grid gap to separate children without adding space above the first item. Content may include paragraphs, metadata, or another Media Object.

Title defaults to h3, size 5, with a compact line height to align its text with the media and actions; Description defaults to Text size 6, muted. Override heading levels to fit the surrounding page. Use article for a self-contained entry and div for a generic row. Supply meaningful image alt text; hide decorative thumbnails from assistive technology.

Root and parts forward native attributes, events, styles, and refs. Media width is scoped through a CSS variable on Root, so nested objects can have independent sizes. Applications own action behavior.

Import `newui/styles.css` once. Review Compositions / Media object and Overview before authorizing new tests.
