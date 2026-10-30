export function initializeTextControl<T extends HTMLInputElement | HTMLTextAreaElement>(
  element: T,
  defaultValue: string | undefined,
  ref: T | ((element: T) => void) | undefined,
) {
  if (defaultValue !== undefined) element.defaultValue = defaultValue;
  if (typeof ref === "function") ref(element);
}
