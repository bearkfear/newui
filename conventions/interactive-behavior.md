# Interactive behavior

## Rule

Use suitable Ark UI Solid primitives for interactive component behavior. Evaluate the existing Ark anatomy and API before implementing state machines, keyboard navigation, focus management, dismissal, or accessible state associations by hand.

Keep newui wrappers focused on styling, composition, and the minimum application-specific adaptation. Preserve Ark event cancellation, controlled/uncontrolled state, DOM refs, and relevant data attributes. Use maintained utilities for supporting behavior such as media queries.

Use native links, lists, and controls where no composite interaction is needed. Page navigation must not become an ARIA action menu solely because it is called a menu. The vertical navigation uses native lists with Ark Collapsible only for optional expandable branches.

Record the chosen Ark mapping or a missing equivalent in the owning area's documentation. A missing equivalent is a reason to evaluate another maintained primitive before writing a replacement.

Use left-to-right navigation. Do not add direction controls or alternate-direction examples. Test creation still follows [implementation validation](implementation-validation.md).

## Rationale

Existing accessibility primitives reduce duplicated interaction code while allowing newui to retain its own visual language and composition contracts.
