# Date localization

[Date family](README.md)

## Locale configuration

The public LocaleProvider re-exports Ark's existing Solid locale provider. There was no application-wide newui provider before this family. A root's locale overrides the nearest Ark provider; otherwise Ark's en-US default applies. This matches numeric/currency defaults without changing those components' separate locale configuration.

The effective locale is canonicalized with Intl. Invalid/unsupported tags fall back to en-US. Gregorian formatting is explicit (`u-ca-gregory`) even for regions whose default calendar differs. No browser language sniffing occurs. Keep provider values identical on server and client.

pt-BR and en-US have translated segment labels, placeholders, endpoint labels, calendar controls, and native custom validity messages. Other Intl-supported locales retain localized formatting/months/weekdays with English wrapper messages. Full translation coverage for additional languages is outside this release.

| Concern               | pt-BR              | en-US              |
| --------------------- | ------------------ | ------------------ |
| Segment order         | day / month / year | month / day / year |
| Empty date            | dd / mm / aaaa     | mm / dd / yyyy     |
| Leap day              | 29/02/2028         | 2/29/2028          |
| Default first weekday | Sunday             | Sunday             |
| Public/form date      | 2028-02-29         | 2028-02-29         |

Ark/Intl determine separators, order, month names, weekdays and regional first-weekday defaults. `startOfWeek={1}` selects Monday without changing locale. `shouldForceLeadingZeros` requests padded segments; there is no universal DD/MM/YYYY mask.

## Calendar and timezone scope

The family accepts Gregorian AD CalendarDate only, including min/max and placeholder values. Native Date, CalendarDateTime, ZonedDateTime, BC dates and other calendars are outside its contract. Runtime guards reject unsupported public values and reversed min/max bounds.

Ark 5.39.3 and internationalized/date support other calendars through createCalendar. Exposing it requires defining non-Gregorian values, era editing and serialization across both primitives. This release keeps a Gregorian-only contract rather than implying complete calendar support from locale alone.

Timezone is neither a locale nor a calendar. Primitives use UTC for internal formatting/reference-day calculations. The family exposes no timezone/time-granularity option and never calls new Date(iso) or turns a selected date into an instant. ISO strings remain civil calendar dates in every timezone.

## SSR and hydration

Locale/calendar selection is deterministic. Intl data must be available for the selected locale on both runtimes; use a full-ICU server for consistent text. Two-month layouts use one month as their SSR media-query fallback, adapting after mount.

Ark's empty editor/calendar reference defaults to today's UTC date. To avoid midnight boundaries or server/client clock differences, pass the same serialized placeholderValue on both sides, for example parseDate("2028-02-15"). Also serialize controlled/default selections. The closed portal mounts on the client; do not rely on an open calendar for server-rendered content.

## Known upstream accessibility limitation

Installed Zag DateInput 1.45.0 hardcodes English segment names in its live-region announcements. The wrapper translates segment accessible names and preserves Ark announcements; those extra announcements may still include English in pt-BR. Ark's public translation API exposes only placeholders. Complete removal requires an upstream enhancement or separately reviewed dependency patch.

## References

- [Ark DateInput](https://ark-ui.com/docs/components/date-input): segments and shared value integration.
- [Ark DatePicker](https://ark-ui.com/docs/components/date-picker): calendar, range and locale.
- [Ark Locale](https://ark-ui.com/docs/utilities/locale): inherited configuration.
- [CalendarDate](https://react-aria.adobe.com/internationalized/date/CalendarDate): dates without times.

Installed Ark Solid 5.39.3 / Zag 1.45.0 types/source determine the APIs used here; the live docs advertised 5.40.0 during implementation. Visual references: [Bulma](https://bulma.io/documentation/form/input/), [Buefy](https://buefy.org/documentation/datepicker/), and [SolidUI](https://www.solid-ui.com/docs/components/date-picker), adapted to existing newui tokens and controls.
