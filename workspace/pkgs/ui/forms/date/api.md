# Date family API

[Date family](README.md) · [Localization](localization.md) · [Values and forms](values-and-forms.md)

## Composition

| Component                    | Parts                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| DateInput                    | Root, Label, Control, Segment, SegmentContext, Context                                        |
| DatePicker / DateRangePicker | Root, Label, Control, Input, Trigger, ClearTrigger, Content, Calendar, PresetTrigger, Context |

DateInput.Control and picker Input each render a complete editor; ref targets the accessible segment-group div. Children default to localized Ark segments; SegmentContext/Segment children enable advanced rendering. DateInput.Context is Ark's input context and must be inside Control. Picker Context is Ark's calendar context. Write application values through Root's common contract, especially for end-only ranges the calendar cannot represent.

Root refs target its div; Label refs the native label; Trigger/ClearTrigger refs buttons; Content refs Ark's calendar dialog. Native event props/refs flow through their owning parts. The value callback uses newui details; open/view/focus callbacks retain Ark's typed details. DOM event cancellation is preserved.

Input index defaults to zero; ranges need a second index={1}. Outside Field, provide one Label or explicit editor aria-label/aria-labelledby. Within Field, its label/error/description/success IDs associate with the groups; endpoint names supplement the range label.

## Shared Root options

| Option                         | Contract                                                  |
| ------------------------------ | --------------------------------------------------------- |
| value / defaultValue           | DateSelection; maximum one or two endpoints               |
| onValueChange                  | (details: DateValueChangeDetails) => void                 |
| locale                         | override Ark LocaleProvider                               |
| name / names / form            | ISO serialization, stable endpoint names                  |
| min / max                      | inclusive CalendarDate bounds                             |
| isDateUnavailable              | (date: CalendarDate, locale: string) => boolean           |
| placeholderValue               | CalendarDate reference for empty entry/calendar           |
| shouldForceLeadingZeros        | pad numeric segments                                      |
| required / disabled / readOnly | native and Ark interaction states                         |
| invalid / valid                | explicit error/success; automatic errors override success |
| size / tone / rounded          | same options as Input                                     |
| loading                        | aria-busy; does not disable interaction                   |

## Picker options

open, defaultOpen, onOpenChange, closeOnSelect, positioning, view, defaultView, onViewChange, onFocusChange and onVisibleRangeChange retain Ark contracts. startOfWeek accepts 0 (Sunday) through 6. numOfMonths accepts 1 or 2, adapting to one below 42rem.

Content accepts Ark Content props and optional mount: HTMLElement. Omit children for the default Calendar; otherwise compose Calendar and presets. Position defaults to fixed bottom-start with collision padding. Use the same composition in Dialog; do not wrap Content in another portal.

## Range composition

```tsx
<DateRangePicker.Root
  locale="en-US"
  name="trip"
  numOfMonths={2}
  defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
>
  <DateRangePicker.Label>Travel period</DateRangePicker.Label>
  <DateRangePicker.Control>
    <DateRangePicker.Input index={0} />
    <DateRangePicker.Input index={1} />
    <DateRangePicker.Trigger />
    <DateRangePicker.ClearTrigger />
  </DateRangePicker.Control>
  <DateRangePicker.Content />
</DateRangePicker.Root>;
```
