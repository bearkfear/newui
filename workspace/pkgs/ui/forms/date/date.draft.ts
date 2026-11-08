import type { UseDateInputReturn } from "@ark-ui/solid/date-input";

export function dateDraft(api: UseDateInputReturn) {
  const segments = () =>
    api()
      .getSegments()
      .filter((segment) => segment.isEditable);
  const incomplete = () => segments().some((segment) => segment.isPlaceholder);
  const partial = () => incomplete() && segments().some((segment) => !segment.isPlaceholder);
  const uncommitted = () => {
    if (incomplete()) return false;
    const committed = api().value[0];
    const display = api().displayValues[0]?.toValue(api().placeholderValue);
    return Boolean(display && (!committed || display.compare(committed) !== 0));
  };
  return { incomplete, partial, uncommitted };
}
