# Badge

Compact labels using newui's Radix color roles. Inspired by Solid UI Badge and Bulma Tag; no upstream component source was copied.

## API

- `variant`: soft (default), solid, outline.
- `tone`: neutral (default), primary, info, success, warning, danger.
- `size`: sm, md (default), lg. Sizes use minimum heights so long labels can wrap.
- `rounded`: false (default) or true for a pill shape.
- `as`: span (default), a, or button. Anchors require `href`; buttons default to `type="button"` and support native disabled behavior.
- `BadgeGroup`: wraps related labels with a gap. Set `attached` to join parts; use matching sizes for attached parts. Attached groups use square inner corners and rounded outer corners.

Props, event handlers, refs, and additive classes are forwarded. Public types: `BadgeProps` and `BadgeGroupProps`.

```tsx
<BadgeGroup>
  <Badge tone="success">Published</Badge>
  <Badge tone="primary" variant="outline" rounded>Design</Badge>
</BadgeGroup>

<BadgeGroup attached>
  <Badge tone="primary">Design</Badge>
  <Badge as="button" tone="primary" aria-label="Remove Design label" onClick={remove}>
    <span aria-hidden="true">×</span>
  </Badge>
</BadgeGroup>
```

## Semantics and behavior

A plain badge adds no role, tab stop, or hover state. Native anchors and buttons provide navigation or action semantics and interactive color states; a badge is not implicitly a selectable control. Supply `aria-pressed` when implementing a toggle action. Convey status with text rather than color alone.

Groups add layout only. They are not listboxes, toolbars, or form controls. Removal is application-owned composition with a named button. The removable example returns focus to the next available action. No Ark state machine is needed for native labels, anchors, or buttons.

Review Content / Badge for tones, variants, sizes, wrapping, attached groups, navigation, disabled controls, and removal. The implementation has been validated by the user; no new automated tests were added.
