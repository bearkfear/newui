# Collapsible

A standalone disclosure powered by Ark UI Solid Collapsible. Ark owns open state, expanded/controlled associations, content visibility, height measurement, and presence. newui supplies the same surface, trigger, padding, indicator, and motion language as Accordion.

## API

- `Root`: Ark Collapsible props plus variant outline (default) or soft. Supports open/defaultOpen, onOpenChange, disabled, IDs, native attributes, events, and refs. Defaults to lazyMount true and unmountOnExit false.
- `Trigger`: Ark button. The wrapper also applies native disabled when Root is disabled. Native events, refs, and render-function asChild are preserved; a custom child such as Button supplies its own styling.
- `Indicator`: optional decorative chevron rendered as a span by default. Children replace the graphic; asChild is supported. Its state follows Ark.
- `Content`: Ark content with a padded inner body. Native attributes/refs go to the outer content element. Content can include paragraphs, lists, links, and controls.
- `Context`: Ark context for advanced application integration.

Public types: CollapsibleRootProps, CollapsibleTriggerProps, CollapsibleContentProps, and CollapsibleIndicatorProps.

```tsx
<Collapsible.Root>
  <Collapsible.Trigger>
    Project activity
    <Collapsible.Indicator />
  </Collapsible.Trigger>
  <Collapsible.Content>
    <p>The design team reviewed the next milestone.</p>
  </Collapsible.Content>
</Collapsible.Root>;
```

## Behavior and review

Use Collapsible for one independent disclosure and Accordion for a coordinated group with trigger-to-trigger keyboard navigation. Native Enter/Space activation stays with the trigger; there is no custom keyboard model in the wrapper.

Content first mounts when opened, then stays mounted while hidden so its local state survives closing. Set unmountOnExit for deliberate removal. Advanced Ark collapsed-size props remain available; an indicator of collapsed content must not be the only way to access important information. Application state and requests remain outside the component.

Radix surfaces, secondary text, native disabled behavior, and visible focus match Accordion. Shared CSS animates Ark's measured height and rotates the chevron. System/workshop reduced motion removes those effects. No animation library was added, and existing Ark Collapsible uses in navigation were not refactored.

Storybook: Content / Collapsible includes variants, initially open/closed states, native disabled behavior, controlled state, Button composition, growing content, dark theme, mobile, and reduced motion.

## References

- [Ark UI Collapsible](https://ark-ui.com/docs/components/collapsible).
