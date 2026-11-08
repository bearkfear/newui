# Date values and native forms

[Date family](README.md) · [API](api.md)

## Common contract

CalendarDate and parseDate are re-exported from the explicitly pinned internationalized/date dependency, at Ark's version. `DateSelection = (CalendarDate | null)[]` is common to all components. A single root accepts at most one entry; a range accepts at most two.
- `[]`: no selection.
- `[date]`: single selection, or start-only range.
- `[start, end]`: complete range.
- `[null, end]`: end-only range, preserving the empty start position.
- `[start, null]` or `[null]`: explicitly cleared endpoint(s).

Use value/onValueChange for controlled operation, defaultValue for uncontrolled operation. `onValueChange({ value, valueAsString })` reports calendar objects and ISO strings; empty endpoints have empty strings. External/calendar/editor changes share this contract. Native reset updates uncontrolled state without invoking the callback; applications own controlled resets.

Incomplete localized drafts remain owned by Ark and do not replace the last committed calendar value. Clearing an endpoint commits an empty endpoint. Incomplete drafts serialize an empty string, preventing stale committed dates from being submitted.

## Validation

Ark constrains editing to real month/day ranges, including leap years. Changing month/year can constrain an impossible day to the last valid day. parseDate rejects malformed/impossible ISO strings; direct CalendarDate construction follows the dependency's constraining semantics.

Ark constrains min/max values during some editing/blur operations. The wrapper also marks committed dates outside bounds invalid. It does not discard controlled external values; applications can display their Field error and replace them. Do not rely on an invalid draft being preserved after blur.

Unavailable endpoints are invalid. The calendar prevents their selection; typing may commit them and block native submission. Unavailable interior dates may be crossed. Continuous-availability booking rules require application validation.

Typed reversed ranges retain their entered order and are invalid; the calendar follows Ark's ordered selection. Optional ranges permit a single endpoint. Required ranges need both. A partially filled individual date is invalid even when optional.

## FormData and reset

Each editor renders a visually hidden, untabbable native text input containing its ISO date. It participates in constraint validation; Ark's hidden inputs do not. Invalid submission focuses visible segments. Use Field for visible feedback.

| Root configuration                         | Submitted fields                             |
| ------------------------------------------ | -------------------------------------------- |
| DateInput name="birthday"                  | birthday=2028-02-29                          |
| DatePicker name="departure"                | departure=2028-02-29                         |
| DateRangePicker name="trip"                | trip[start]=2028-02-29, trip[end]=2028-03-05 |
| Range names={{ start: "from", end: "to" }} | from=2028-02-29, to=2028-03-05               |

Names never depend on selection length. Empty dates submit empty strings; unnamed controls do not submit. Disabled controls are omitted; readonly controls submit. form="id" associates editors with an external form. Direct new FormData(form) bypasses validation like native inputs; use submission/reportValidity when validation is required.

Uncanceled reset restores uncontrolled defaults and clears partial drafts. Controlled values remain owned by the parent. Canceled reset preserves committed selection and unfinished editing. The adapter reuses text-control reset binding and waits until event propagation/cancellation completes.

Use Field.Root disabled to disable the entire segmented interaction. Native disabled fieldsets affect form inputs but do not propagate disabled state into Ark's contenteditable segments; pass disabled to Field/Root as well.
