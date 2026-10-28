# Tabs

[Navigation](../README.md)

Horizontal content tabs powered by Ark Tabs. The primitive owns selection, focus, disabled triggers, and trigger/panel associations. Arrow Left/Right and Home/End move focus; `activationMode="manual"` requires Enter/Space to select. Automatic activation is the default.

```tsx
<Tabs.Root defaultValue="overview" variant="segmented" tone="neutral">
  <Tabs.List aria-label="Project sections">
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Project overview</Tabs.Content>
  <Tabs.Content value="activity">Recent updates</Tabs.Content>
</Tabs.Root>;
```

## Appearance and behavior

- `variant`: `underline` (default), `boxed`, `toggle`, `rounded`, or `segmented`.
- `tone`: `neutral`, `primary` (default), `info`, `success`, `warning`, or `danger`.
- `size`: `sm`, `md` (default), `lg`, or `xl`.
- `align`: `start` (default), `center`, or `end`; `fullWidth` grows triggers equally when space permits.
- Lists scroll horizontally on small screens. Safe alignment keeps the leading tab reachable.
- `value` / `onValueChange` provide controlled selection; `defaultValue` supplies initial selection.
- `lazyMount=true`, `unmountOnExit=false`: panels mount on first visit and retain local state. Override with Ark's rendering props when needed.
- Label every List and provide a Content for each Trigger value, including disabled tabs. Triggers accept content such as decorative icons and counts.
- Parts forward Ark attributes, events, refs, and `asChild`. `Tabs.Context` exposes Ark's selection API.
- This first version is horizontal. Page navigation links remain native navigation rather than tab panels.

## References and validation

The underline, boxed, toggle, and rounded designs reference [Bulma Tabs](https://bulma.io/documentation/components/tabs/). The segmented track references [Solid UI Tabs](https://www.solid-ui.com/docs/components/tabs). Interaction uses [Ark Tabs](https://ark-ui.com/docs/components/tabs), with no additional dependencies.

Storybook includes all variants, tones, sizes, alignment, full-width, manual activation, controlled selection, state retention, disabled triggers, dark theme, and mobile overflow. The user approved the implementation and Storybook examples; no automated tests were added.

## Rich triggers

Triggers accept arbitrary non-interactive children: decorative icons, labels, [Counter](../../content/counter/README.md), and textual Badge labels. Rich Content All Variants compares the five appearances; With Icons, With Counters, With Icons And Counters, and Icon Only provide focused examples. Notifications can be incremented or cleared in the Notifications tab. Dark/mobile examples include the same rich content.

Use `aria-hidden="true"` on decorative icons and give icon-only triggers an accessible name. Counter's accessible text can include context such as “5 unread”. Disabled triggers neutralize nested Badge/Counter colors. Keep buttons and links outside triggers.
