# Separator

A margin-free divider using the Radix neutral separator token. It complements native HTML semantics without an interaction state machine.

## API

- `orientation`: horizontal (default) or vertical.
- `decorative`: false (default) renders an hr with the matching `aria-orientation`; true hides the hr from assistive technology with aria-hidden and role none.
- Native attributes, DOM refs, styles, and additive classes are forwarded. Public type: `SeparatorProps`.

```tsx
<div style={{ display: "grid", gap: "16px" }}>
  <Text>Project overview</Text>
  <Separator />
  <Text>Recent activity</Text>
</div>

<div style={{ display: "flex", gap: "12px" }}>
  <span>Design</span>
  <Separator orientation="vertical" decorative />
  <span>Engineering</span>
</div>
```

The surrounding layout owns margins and gaps. Vertical separators stretch in flex rows and have a minimum height of 1rem; supply a height when using another layout. Separators are not focusable or resizable splitters. Use semantic separators for content divisions and decorative separators for visual embellishment.

Review Content / Separator for both orientations, decorative usage, and composition with content. The implementation has been validated by the user; no new automated tests were added.
