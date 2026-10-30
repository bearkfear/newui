import { createMemo, createSignal, onCleanup } from "solid-js";

export function useProfileForm() {
  const initial = {
    name: "Jamie Lee",
    email: "jamie@forma.studio",
    bio: "Making room for thoughtful work.",
  };
  const [values, setValues] = createSignal(initial);
  const [touched, setTouched] = createSignal({ name: false, email: false });
  const [pending, setPending] = createSignal(false);
  const [result, setResult] = createSignal("");
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const errors = createMemo(() => ({
    name: values().name.trim() ? "" : "Enter your name.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values().email)
      ? ""
      : "Enter a complete email address.",
  }));
  const change = (name: keyof typeof initial, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setResult("");
  };
  const touch = (name: "name" | "email") => setTouched((current) => ({ ...current, [name]: true }));
  const submit = (event: SubmitEvent & { currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    if (pending()) return;
    setTouched({ name: true, email: true });
    if (errors().name || errors().email) {
      const fieldName = errors().name ? "name" : "email";
      const form = event.currentTarget;
      queueMicrotask(() => form.querySelector<HTMLInputElement>(`[name="${fieldName}"]`)?.focus());
      return;
    }
    const snapshot = values();
    setPending(true);
    timer = setTimeout(() => {
      setPending(false);
      setResult(`Saved the submitted profile for ${snapshot.name}.`);
    }, 800);
  };
  const reset = (event: Event) => {
    event.preventDefault();
    clearTimeout(timer);
    setPending(false);
    setValues(initial);
    setTouched({ name: false, email: false });
    setResult("");
  };
  return { values, errors, touched, pending, result, change, touch, submit, reset };
}

export type ProfileFormState = ReturnType<typeof useProfileForm>;
