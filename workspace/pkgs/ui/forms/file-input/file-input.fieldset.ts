import { onCleanup } from "solid-js";

/** Bridge native fieldset inheritance to Ark's non-native interactions. */
export function bindFileInputFieldset(
  input: HTMLInputElement,
  update: (disabled: boolean) => void,
) {
  const fieldsets: HTMLFieldSetElement[] = [];
  for (let ancestor = input.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (ancestor.localName === "fieldset") fieldsets.push(ancestor as HTMLFieldSetElement);
  }
  const sync = () =>
    update(
      fieldsets.some((fieldset) => {
        if (!fieldset.disabled) return false;
        // The first legend's descendants are exempt from this fieldset's disabled state.
        const legend = Array.from(fieldset.children).find((child) => child.localName === "legend");
        return !legend?.contains(input);
      }),
    );
  const Observer = input.ownerDocument.defaultView?.MutationObserver;
  const observer = Observer ? new Observer(sync) : undefined;
  for (const fieldset of fieldsets) {
    observer?.observe(fieldset, {
      attributes: true,
      attributeFilter: ["disabled"],
      childList: true,
    });
  }
  sync();
  onCleanup(() => observer?.disconnect());
}
