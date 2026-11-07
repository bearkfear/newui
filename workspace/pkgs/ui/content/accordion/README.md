# Accordion

A group of disclosures powered by Ark UI Solid Accordion. Ark owns expanded values, single/multiple behavior, disabled items, keyboard navigation, IDs, trigger/content associations, and the Collapsible machinery used for content presence and height measurement. newui supplies the visual surface and parts.

## API

- `Root`: Ark Accordion props plus `variant` outline (default) or soft. Defaults: vertical orientation, collapsible true, multiple false, lazyMount true, unmountOnExit false. Native root attributes, events, refs, and additive classes are forwarded. Horizontal presentation is not part of this API.
- `value` / `defaultValue`: arrays of stable Item value strings. `onValueChange` supports controlled state. `multiple` allows several open items; `collapsible={false}` prevents closing the open item through its trigger.
- `Item`: Ark Item, with required value and optional disabled. Root also supports disabled. Ark supplies native disabled behavior on triggers.
- `ItemHeading`: native heading, default h3; choose as h2–h6 to match the page outline. Place the ItemTrigger inside it and keep other interactive controls outside that trigger.
- `ItemTrigger`: Ark button, styled by default. Supports render-function asChild for custom native/Button composition; in that case the child supplies its visual styling. Refs and event cancellation remain delegated to Ark.
- `ItemIndicator`: optional decorative chevron, rendered as a span by default so it can live inside a button. Children replace the graphic; asChild remains available.
- `ItemContent`: Ark content region, with an inner padded body for spacing. The outer element receives refs and native attributes. Children can contain links, lists, or independent controls.
- `Context` / `ItemContext`: Ark contexts for advanced composition.

Public types: AccordionRootProps, AccordionItemProps, AccordionItemHeadingProps, AccordionItemTriggerProps, AccordionItemContentProps, and AccordionItemIndicatorProps.

```tsx
<Accordion.Root defaultValue={["sharing"]}>
  <Accordion.Item value="sharing">
    <Accordion.ItemHeading>
      <Accordion.ItemTrigger>
        Who can see this project?
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
    </Accordion.ItemHeading>
    <Accordion.ItemContent>
      <p>Members of your workspace can view shared projects.</p>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>;
```

## Behavior and review

Arrow Up/Down and Home/End navigate triggers; Enter/Space operate the focused trigger. Ark owns this behavior and the region labels. Content first mounts on opening and remains mounted after closing, so local state survives; set unmountOnExit when deliberate reset is desired. Keep state outside content if it must survive unmounting.

Outline/soft surfaces use existing Radix background/surface tokens and step 6 borders. Triggers use neutral hover/active backgrounds, visible focus, and the shared disabled policy. Body text uses the secondary foreground, with 12px top padding, 16px side/bottom padding, and 12px between content blocks. CSS animates the Ark-measured height and rotates the indicator; system/workshop reduced motion disables those effects. These styles are local to the public components and do not alter the existing Navbar or VerticalMenu implementations.

Storybook: Content / Accordion includes FAQ content, variants, single/multiple expansion, required-open behavior, disabled root/item states, controlled state, structured content with a persistent review counter, dark theme, mobile, and reduced motion.

## References

- [Ark UI Accordion](https://ark-ui.com/docs/components/accordion).
