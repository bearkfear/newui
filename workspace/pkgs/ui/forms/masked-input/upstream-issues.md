# Upstream mask issue review

[Contract](README.md) · [Study](../input-masking.md)

Reports inform implementation and manual Storybook review; they do not prove our adapter fixes every upstream browser bug. IMask is pinned to 7.6.1. Subsequent authorized [regression coverage](test-coverage.md) complements these exploratory reports.

## vue-the-mask findings

| Report                                                                                                                       | Risk                                                 | Handling and review scenario                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [#146](https://github.com/vuejs-tips/vue-the-mask/issues/146)                                                                | Duplicate events cause duplicate requests.           | No input redispatch; Native Validity And Events counts native events.                              |
| [#176](https://github.com/vuejs-tips/vue-the-mask/issues/176)                                                                | Overwritten oninput breaks custom validity clearing. | Preserve handlers; submit empty, type, then submit again in Native Validity And Events.            |
| [#203](https://github.com/vuejs-tips/vue-the-mask/issues/203), [#129](https://github.com/vuejs-tips/vue-the-mask/issues/129) | Wrong phone mask length.                             | Copied pattern lists and IMask selection; insert/delete through the boundary in Controlled Phone.  |
| [#207](https://github.com/vuejs-tips/vue-the-mask/issues/207)                                                                | Alternative token prefixes cannot both be entered.   | Content-based selection; Alternative Prefixes reproduces R/SO patterns.                            |
| [#153](https://github.com/vuejs-tips/vue-the-mask/issues/153)                                                                | Set, clear, reload gives inconsistent values.        | Explicit raw controlled contract and IMask setters; Controlled Phone provides load/clear controls. |
| [#163](https://github.com/vuejs-tips/vue-the-mask/issues/163), [#134](https://github.com/vuejs-tips/vue-the-mask/issues/134) | Literal token conflicts; non-ASCII letters excluded. | Escapes, null overrides, and custom regexes; Custom Tokens shows literal # and Unicode letters.    |
| [#209](https://github.com/vuejs-tips/vue-the-mask/issues/209)                                                                | Firefox cursor jumps/overwrites.                     | Delegate selection to IMask; Firefox insertion/repeated-digit review remains pending.              |

## IMask findings

| Report                                                                 | Risk                                                                              | Handling and review scenario                                                                                                                        |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [#1053](https://github.com/uNmAnNeR/imaskjs/issues/1053)               | Cursor jumps with dynamic masks and raw controlled values, reported in React/iOS. | Preserve the editor during editing; unchanged raw values do not invoke a setter that realigns the caret. Controlled Phone needs iOS/Firefox review. |
| [#1073](https://github.com/uNmAnNeR/imaskjs/issues/1073)               | Removed options survive partial updates.                                          | Replace the model on configuration changes using complete compiled options; Reactive Configuration switches patterns/token rules.                   |
| [Discussion #703](https://github.com/uNmAnNeR/imaskjs/discussions/703) | Trailing separator remains after deleting the following digit.                    | Use eager remove and lazy placeholders; review deletion beside spaces, periods, and hyphens.                                                        |
| [#934](https://github.com/uNmAnNeR/imaskjs/issues/934)                 | Displayed input.value cannot transparently be raw too.                            | Explicit callback and submitValue contract; Native Submission And Reset shows both outputs.                                                         |

## Chromium inspection

Interactive inspection in Chromium 156.0.8078.4 used the real clipboard and the native paste shortcut, not fill() or synthetic input events. No automated test files or assertions were added. The inspected scenarios produced no page errors.
- Custom digit token: pasting 12345678900 displayed 123.456.789-00 and reported rawValue 12345678900; one trusted insertFromPaste event.
- Formatted paste: 987.654.321-00 remained formatted and reported rawValue 98765432100; one additional trusted insertFromPaste event.
- Invalid/overflow paste: abc 123.456.789-00 999 displayed 123.456.789-00, discarding letters and excess digits.
- Selection replacement: replacing the middle 456 with pasted 222 displayed 123.222.789-00 and reported rawValue 12322278900.
- Controlled initial value 11987654321 displayed (11) 98765-4321; an external update to 1134567890 displayed (11) 3456-7890.
- Controlled formatted phone paste displayed (21) 98765-4321, stored raw 21987654321, and incremented the native input counter once.
- Uncontrolled defaultValue 12345678 displayed 12345-678 on mount. Pasting 87654-321 changed the display; native reset restored 12345-678.
- Native FormData contained formatted 12345-678 for formatted submission and raw 12345678 for raw submission, including after reset.

## Remaining manual review

See the subsequent [paste and editing review](paste-review.md) for long input and history checks, including the reset/undo defect found and corrected during exploration.

Use Chromium and Firefox for typing, Backspace/Delete at literals, repeated characters, paste, selection replacement, clear/reload, undo/redo, controlled rejection, configuration changes, and external form ownership.

Use Safari/iOS and Android keyboards for composition, autocorrection/autofill, selection, cursor position, and history. Check canceled reset, inherited disabled state, raw submission, and completeness separately from validation. Do not describe browser-specific cases as verified until exercised.
