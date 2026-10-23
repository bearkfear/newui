# ButtonGroup

[Actions](../README.md)

Groups related native buttons with `role="group"`. Supply `aria-label` or `aria-labelledby` to describe the group.
- Shares `size`, `variant`, `tone`, and `disabled` with descendant Buttons through reactive Solid context. Individual appearance props override group defaults; disabling the group disables every button.
- `orientation`: horizontal (default) or vertical.
- `align`: start (default), center, end along the main axis; horizontal alignment follows reading direction.
- `attached`: join direct Button children without gaps, with logical outer corners. Attached groups stay on one line; keep labels short on narrow screens. Outer corners use the standard radius, including when a child requests rounded corners.
- `fullWidth`: fill the container and distribute space equally across direct Button children.
- Spaced horizontal groups wrap automatically.

```tsx
import { Button, ButtonGroup } from "newui";
import "newui/styles.css";

<ButtonGroup attached variant="outline" aria-label="Document actions">
  <Button>Save</Button>
  <Button>Duplicate</Button>
  <Button tone="danger">Delete</Button>
</ButtonGroup>;
```

Every button retains native Tab navigation. Grouping introduces no arrow-key navigation, selection state, or toolbar behavior. Avoid nesting ButtonGroup; joined styling and equal widths require direct Button children.

Review Actions / Button group in Storybook before authorizing new automated tests.
