import { Check, Eye, EyeOff, Mail, Search, X } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { InputGroup } from "../input-group/input-group";

export function PasswordField() {
  const [visible, setVisible] = createSignal(false);
  return (
    <Field.Root>
      <Field.Label>Password</Field.Label>
      <InputGroup.Root>
        <Input
          name="password"
          type={visible() ? "text" : "password"}
          autocomplete="new-password"
          defaultValue="a-little-more-clarity"
        />
        <InputGroup.Action>
          <Button
            variant="ghost"
            tone="neutral"
            iconOnly
            aria-label={visible() ? "Hide password" : "Show password"}
            aria-pressed={visible()}
            onClick={() => setVisible(!visible())}
          >
            {visible() ? <EyeOff /> : <Eye />}
          </Button>
        </InputGroup.Action>
      </InputGroup.Root>
      <Field.Description>
        Use a unique password. You can reveal it to check your typing.
      </Field.Description>
    </Field.Root>
  );
}

export function SearchField(props: { disabled?: boolean } = {}) {
  const [query, setQuery] = createSignal("");
  const [result, setResult] = createSignal("Search the project catalog.");
  return (
    <form
      class="text-fields-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(
          query().trim()
            ? `Showing results for “${query().trim()}”.`
            : "Enter a project name to search.",
        );
      }}
    >
      <Field.Root disabled={props.disabled ?? false}>
        <Field.Label>Find a project</Field.Label>
        <InputGroup.Root attached>
          <InputGroup.Icon>
            <Search />
          </InputGroup.Icon>
          <Input
            type="search"
            name="query"
            value={query()}
            onInput={(event) => setQuery(event.currentTarget.value)}
            placeholder="Project name"
          />
          <InputGroup.Action>
            <Button type="submit">Search</Button>
          </InputGroup.Action>
        </InputGroup.Root>
      </Field.Root>
      <p class="text-fields-demo-status" role="status">
        {result()}
      </p>
    </form>
  );
}

export function ClearableField() {
  const [value, setValue] = createSignal("A thoughtful first impression");
  let input: HTMLInputElement | undefined;
  return (
    <Field.Root>
      <Field.Label>Project title</Field.Label>
      <InputGroup.Root>
        <Input
          ref={input}
          name="title"
          value={value()}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
        <InputGroup.Action>
          <Button
            variant="ghost"
            tone="neutral"
            iconOnly
            aria-label="Clear project title"
            disabled={!value()}
            onClick={() => {
              setValue("");
              input?.focus();
            }}
          >
            <X />
          </Button>
        </InputGroup.Action>
      </InputGroup.Root>
      <Field.Description>
        Clear keeps focus in the input so you can type a new title.
      </Field.Description>
    </Field.Root>
  );
}

export function AdornedFields() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Workspace address</Field.Label>
        <InputGroup.Root>
          <InputGroup.Addon>https://</InputGroup.Addon>
          <Input name="workspace" defaultValue="forma" aria-label="Workspace subdomain" />
          <InputGroup.Addon placement="end">.studio</InputGroup.Addon>
        </InputGroup.Root>
        <Field.Description>Choose the subdomain for your workspace.</Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Monthly budget</Field.Label>
        <InputGroup.Root>
          <InputGroup.Addon>R$</InputGroup.Addon>
          <Input name="budget" inputmode="decimal" placeholder="0,00" />
          <InputGroup.Addon placement="end">BRL</InputGroup.Addon>
        </InputGroup.Root>
        <Field.Description>
          Brazilian reais. Text editing is preserved; no numeric parsing or mask is applied.
        </Field.Description>
      </Field.Root>
      <Field.Root valid>
        <Field.Label>Contact email</Field.Label>
        <InputGroup.Root>
          <InputGroup.Icon>
            <Mail />
          </InputGroup.Icon>
          <Input name="contact" type="email" defaultValue="hello@forma.studio" />
          <InputGroup.Icon placement="end">
            <Check />
          </InputGroup.Icon>
        </InputGroup.Root>
        <Field.SuccessText>This address has been confirmed.</Field.SuccessText>
      </Field.Root>
    </div>
  );
}

export function LoadingField() {
  const [loading, setLoading] = createSignal(true);
  return (
    <div class="text-fields-demo-stack">
      <Field.Root loading={loading()}>
        <Field.Label>Workspace name</Field.Label>
        <InputGroup.Root>
          <Input name="workspace-name" defaultValue="Forma Studio" />
          <InputGroup.Loading label="Checking name availability" />
        </InputGroup.Root>
        <Field.Description>
          Checking does not disable editing. The application owns the request.
        </Field.Description>
      </Field.Root>
      <div>
        <Button variant="outline" size="sm" onClick={() => setLoading(!loading())}>
          {loading() ? "Finish checking" : "Check again"}
        </Button>
      </div>
    </div>
  );
}
