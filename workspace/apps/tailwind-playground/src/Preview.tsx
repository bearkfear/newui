import { Button } from "@egcs/newui/actions";
import { Field, Input, InputGroup } from "@egcs/newui/forms";
import { createSignal } from "solid-js";

export function Preview() {
  const [count, setCount] = createSignal(0);
  return (
    <section class="grid gap-4" aria-label="Shared token preview">
      <div class="rounded-md border border-primary-border bg-primary-soft p-4 text-primary-text">
        <h2 class="text-xl font-semibold leading-tight">Application utilities</h2>
        <p class="mt-2 text-sm">
          This surface uses ordinary Tailwind classes and shared newui tokens.
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <Button onClick={() => setCount(count() + 1)}>newui button</Button>
        <button
          type="button"
          class="rounded-md bg-primary px-4 py-2 font-medium text-on-primary transition-colors hover:bg-primary-hover focus-visible:focus-ring"
          onClick={() => setCount(count() + 1)}
        >
          Application button
        </button>
      </div>
      <Field.Root>
        <Field.Label>Project name</Field.Label>
        <InputGroup.Root>
          <Input name="project" value="My project" />
          <InputGroup.Action>
            <Button variant="ghost" onClick={() => setCount(count() + 1)}>
              Open
            </Button>
          </InputGroup.Action>
        </InputGroup.Root>
        <Field.Description>Forms includes its Button styles automatically.</Field.Description>
      </Field.Root>
      <p role="status" class="text-sm text-muted-foreground">
        Button presses: {count()}
      </p>
    </section>
  );
}
