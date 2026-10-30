# Input Group

InputGroup composes a single text input with decorative icons, adornments, and action Buttons. Ark Field remains responsible for the input's accessible label and message associations. The group adds styling and shared appearance/state context, not a new interaction primitive.

```tsx
<Field.Root>
  <Field.Label>Search projects</Field.Label>
  <InputGroup.Root attached>
    <InputGroup.Icon>
      <Search />
    </InputGroup.Icon>
    <Input name="query" type="search" />
    <InputGroup.Action>
      <Button type="submit">Search</Button>
    </InputGroup.Action>
  </InputGroup.Root>
</Field.Root>;
```

## Parts

- Root renders a div with the shared size, tone, rounded, valid, invalid, loading, disabled, and readOnly options. It inherits Field options. Native div attributes/ref and additive class target the group.
- Icon renders a decorative span with `placement="start" | "end"` (default start). It is hidden from assistive technology and ignores pointer events. Use Lucide children; icons do not create actions.
- Addon renders a text span at the start or end (default start). Use prefixes, currency names, units, or suffixes. Describe important formatting expectations in Field.Description; addons do not parse input.
- Action renders a span for actual Buttons, defaulting to end placement. Buttons retain their own accessible name, focus, events, pressed state, and native type. Root shares size and disabled state through the existing ButtonGroup context. Readonly does not disable independent actions such as revealing a password.
- Loading renders the existing Loading indicator while the inherited loading flag is true. Its `label` defaults to Checking…; it occupies a trailing icon slot. Loading never disables input editing by itself.

## Composition

Use one primary Input as a direct Root child. Put start parts before it and end parts after it. Icon placement also controls visual order; action/addon order follows the composition. Use `attached` for an action button flush with the control edge; ordinary actions are inset. The group reserves icon space without drawing over the typed value. Shared focus styling follows the input's visible focus; action buttons retain their own focus indicator.

Inputs and action Buttons follow the same control-height tokens in all three sizes. Attached actions overlap the group's one-pixel border at the outer edge, so the button's height and corner radius follow the group's outer contour without an inset seam. Leading and trailing actions preserve their respective outer corners. Validation colors apply to the group border and decorative icons; disabled styles take priority. Native disabled fieldsets also style and disable the input through platform semantics. Parent disabled/invalid/readonly states cannot be cleared on the Input. Local custom Buttons remain responsible for respecting any application-specific restrictions.

Use separate Fields for independently labeled controls. This first delivery does not include Select, numeric parsing, masks, or a general multi-control form group. Root can be used without Field when the Input has its own accessible name. Themes, tokens, reduced motion, events, and native refs remain supported.

## Review

Forms / Input Group covers leading/trailing icons, prefix/suffix addons, password reveal, clear, attached search submission, sizes, loading, and mobile. Forms / Field / Overview combines these with the rest of the text family. Implementation awaits user validation; no automated tests were added.
