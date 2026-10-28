# Callout

One composition for contextual guidance, status messages, and inline alerts. The colored block and optional dismissal take inspiration from Bulma Notification; the title/body composition follows Bulma Message. newui uses its own Radix tokens and compact title/description spacing. There is no separate Alert export: announcement semantics are native attributes on the same component.

## API

- `Root`: native div with `tone` neutral, primary, info (default), success, warning, or danger; `variant` soft (default) or outline. Native attributes, events, refs, styles, and additive classes are forwarded. Color does not set an announcement role.
- `Icon`: optional decorative span, with a tone-based information/check/warning/error icon. Supply children to replace the graphic; omit the part to remove it. Icons are hidden from assistive technology, so convey meaning in text as well.
- `Content`: flexible text column with the shared compact header gap.
- `Title`: optional semibold paragraph. It provides a visual message title without introducing a page heading or forcing a heading level.
- `Description`: div for plain or structured content, including paragraphs, lists, and native links. Links receive matching tone and visible focus styling.
- `Actions`: optional wrapping row for existing Buttons or native links, separated from the message by 0.75rem.
- `CloseButton`: optional native button, default type button and accessible label `Dismiss message`. Supports children, a custom aria-label, disabled, events, and refs. The consumer owns its onClick handler and visibility; the button has no hidden dismissal state.

Public types: `CalloutRootProps`, `CalloutIconProps`, and `CalloutCloseButtonProps`. Other parts accept their corresponding native HTML attributes.

```tsx
<Callout.Root tone="warning">
  <Callout.Icon />
  <Callout.Content>
    <Callout.Title>Review sharing settings</Callout.Title>
    <Callout.Description>This project is visible to all workspace members.</Callout.Description>
    <Callout.Actions>
      <Button size="sm">Review settings</Button>
    </Callout.Actions>
  </Callout.Content>
</Callout.Root>;
```

## Behavior and accessibility

Use the default without a live role for static guidance. Set `role="status"` for polite updates or `role="alert"` for important, time-sensitive messages. Prefer an already mounted live region when updating content; the Live Alert story keeps an alert region mounted before inserting its message. Do not assume that an alert present at initial page load will be announced. Alert semantics do not move focus. Use Alert Dialog when a workflow must be interrupted for confirmation.

Ark's catalog was evaluated: Toast is for queued transient notifications and Collapsible for expandable content. Neither is needed for a static native message with an application-owned button. Callout adds no keyboard model, state machine, timer, portal, focus trap, or automatic dismissal. The Dismissible story restores focus to its application-owned Show notice button after removing the message; consumers choose an appropriate next focus target for their own page.

Announcements, visibility, actions, errors, and retries remain application-owned. Avoid automatically removing important messages. A danger tone alone does not imply an assertive announcement. Use descriptive text rather than relying only on color or icon shape. The Actions example updates a persistent external status region after its simulated retry.

## Visual contract and review

Surfaces use Radix step 3 and noninteractive borders step 6. Titles use step 12 of the selected tone for higher contrast; descriptions, icons, and links use step 11 of that same scale. Neutral maps to Slate rather than switching to pure black or white. Close-button hover/active backgrounds use steps 4/5; disabled controls use the shared neutral tokens. Both variants follow nested light/dark scopes, wrap long text, and keep icon/close controls separate from the flexible content column. There are no component animations.

Storybook: Feedback / Callout includes all tones and variants, optional icon/title, actions with retry, dismiss/restore, a dynamic alert, structured content with links, theme comparison, long text, and mobile. These are reviewable demos without test assertions or play functions.

The user approved the implementation and Storybook examples, including tone-based title and description colors. No automated tests were added.

## References

- [Bulma Message](https://bulma.io/documentation/components/message/).
- [Bulma Notification](https://bulma.io/documentation/elements/notification/).
- [WAI-ARIA Alert pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).
