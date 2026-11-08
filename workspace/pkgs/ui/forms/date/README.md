# Date family

[Forms](../README.md) · [Localization](localization.md) · [Values and forms](values-and-forms.md) · [API](api.md)

DateInput, DatePicker, and DateRangePicker share Gregorian calendar dates, segmented editing, Field visuals, and locale configuration. Import from `@egcs/newui` or `@egcs/newui/forms`, plus `@egcs/newui/styles.css` once.

```tsx
import { DatePicker, Field, LocaleProvider, parseDate } from "@egcs/newui";

<LocaleProvider locale="pt-BR">
  <Field.Root required>
    <Field.Label>Departure</Field.Label>
    <DatePicker.Root name="departure" defaultValue={[parseDate("2028-02-29")]}>
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger />
        <DatePicker.ClearTrigger />
      </DatePicker.Control>
      <DatePicker.Content />
    </DatePicker.Root>
    <Field.Description>Choose your departure date.</Field.Description>
  </Field.Root>
</LocaleProvider>;
```

For DateInput, use Root with Control (the complete segmented editor). Outside Field, supply Label or an accessible name on Control. For a range, use DateRangePicker.Root with two Inputs, `index={0}` and `index={1}`. A single Label names the complete range; localized endpoint names supplement it.

## Behavior and appearance

Ark DateInput owns segment editing, digit entry, paste, arrows, Home/End, deletion, and segment focus. Ark DatePicker owns calendar selection, month/year navigation, dismissal, range preview, and calendar keyboard behavior. The wrapper synchronizes calendar values without implementing another navigation state machine.

The calendar heading switches to month/year grids. Selection closes the popover by default; `closeOnSelect={false}` keeps it open. Escape restores focus to the calendar trigger because the editor uses segments rather than Ark's text input. Clear removes committed values and unfinished drafts.

Content includes the theme-preserving portal, positioner, and default Calendar. Supply children to compose Calendar with Ark PresetTrigger buttons. Presets retain Ark's DateValue[]/preset contract; use Gregorian CalendarDate values. Presets remain subject to family validation and form submission rules.

Field inherits size, tone, rounded, success, invalid, disabled, readonly, required, descriptions, and error associations. Success is explicit, not inferred from validation. Applications own visible errors and server validation. Standalone roots offer the same options.

Sizes are sm/md/lg; tones match Input. Light/dark tokens and nested themes survive portals, including inside Dialog. Focus uses the shared reduced-motion recipe; the calendar introduces no animation. Forced colors preserve selection and focus.

One month is the default. `numOfMonths={2}` shows adjacent months above 42rem and one month below it. The machine's actual visible duration changes; a second focusable calendar is never merely hidden with CSS. Inputs and actions share one border. Range endpoints have visible localized labels and stack inside narrow containers.

## Review examples

[Visual review against Input](http://localhost:6006/?path=/story/forms-datepicker--visual-review) compares the complete family.
- [DateInput comparison](http://localhost:6006/?path=/story/forms-dateinput--same-date-across-regions)
- [DatePicker comparison](http://localhost:6006/?path=/story/forms-datepicker--same-date-across-regions)
- [Range comparison](http://localhost:6006/?path=/story/forms-daterangepicker--same-range-across-regions)
- [Partial/reversed ranges](http://localhost:6006/?path=/story/forms-daterangepicker--partial-and-reversed)
- [Submission/reset](http://localhost:6006/?path=/story/forms-datepicker--native-submission-and-reset)
- [Dialog and nested dark theme](http://localhost:6006/?path=/story/forms-datepicker--in-dialog)
- [Two months](http://localhost:6006/?path=/story/forms-daterangepicker--two-months) · [Mobile](http://localhost:6006/?path=/story/forms-daterangepicker--mobile)

Implementation review precedes automated test creation. No new automated tests or Storybook interaction assertions accompany this family.
