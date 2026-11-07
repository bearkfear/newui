# Paste and editing review

[Contract](README.md) · [Upstream issues](upstream-issues.md)

Exploratory inspection used Chromium 156.0.8078.4, the native clipboard shortcut, and the Storybook examples. Observed results below apply to this browser session, not all browsers or input methods.

## Long and mixed text

- Pasting 10,000 digits into the document mask retained the first 11 accepted digits and formatted them as 123.456.789-01. The callback raw value matched the displayed digits.
- Pasting thousands of nonnumeric characters followed by 987.654.321-00 displayed that document and reported rawValue 98765432100.
- Pasting 5,500 digits into the controlled dynamic phone mask retained 21987654321 and displayed (21) 98765-4321.
- These clipboard actions completed without an observed stall or page error. This was not a performance benchmark.
- Mixed emoji, line breaks, spaces, full-width digits, Arabic-Indic digits, and ASCII digits produced 123.456.789-00 from the ASCII digits. Default numeric tokens intentionally accept only 0–9; other numeral systems require a custom token and normalization policy.
- An uncontrolled initial value with 20 digits displayed only the first 11 as 123.456.789-00. Formatting discards excess data and does not validate the original source.

## Selection and dynamic masks

- Replacing the middle three digits of a complete document with 12 pasted digits replaced only the selected three positions, preserved the suffix, and left the cursor after the replacement.
- Pasting into the middle of a complete document without selecting text preserved the value and cursor because no positions were available. The editor uses insertion, not overwrite.
- Undo/redo restored long paste replacements and kept callback raw/formatted values synchronized.
- A 10-digit controlled phone paste displayed (11) 3456-7890. Adding the eleventh digit switched to (11) 34567-8901; Backspace returned to the shorter pattern. Undo restored the longer value and raw state.

## Problems found and corrected

After native reset restored a default value, undo originally recovered the preceding pasted value. The adapter kept IMask's prior history across reset.

Accepted reset now clears and seeds history with the restored value. Configuration changes and external controlled replacements also start fresh history. Equal controlled echoes during normal editing preserve undo/redo.

The original reset sequence was repeated after the correction: undo kept 12345-678 instead of restoring 87654-321. Undo after an external phone replacement kept the loaded value, while undo after normal phone typing still restored the preceding edit. Undo after shortening the pattern kept the new four-position value.

A canceled native reset also incorrectly restored the default: the capture listener's microtask ran before the form handler called preventDefault. Reset synchronization now waits for the next task, after propagation and the browser's default action. Repeating the sequence preserved 87654-321 when canceled; subsequent undo still restored the preceding 12345-678, demonstrating that history was retained.

IMask's undo shortcut could also modify a field after it became readonly. A small HTMLInputMaskElement adapter guards undo/redo using the current native readonly/disabled state, including disabled fieldsets. Inspection confirmed that readonly undo/redo preserved 987.654.321-00 and that unlocking restored access to the preceding 123.456.789-00 history entry. Consumer keyboard handlers remain in the normal event flow.

## Reviewable example

Forms / Masked Input / Paste And History offers clipboard buttons for 10,000 digits, long text, mixed Unicode, and overflow; an editable document field; a readonly toggle; reset; callback details; and an oversized initial value. Copying only populates the clipboard: paste into the desired position yourself.

The mask filters characters in order; it does not identify which number in a paragraph is the intended document. Review extraction/validation policies in the consuming application. Firefox, Safari, mobile keyboards, and composition remain separate review work.
