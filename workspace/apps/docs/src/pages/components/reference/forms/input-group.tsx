import { Button } from "@egcs/newui/actions";
import { Field, Input, InputGroup } from "@egcs/newui/forms";
import { Search } from "lucide-solid";
import { createSignal, Show } from "solid-js";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [search, setSearch] = createSignal("");
  return (
    <form
      style={{ width: "min(100%, 26rem)" }}
      onSubmit={(event) => {
        event.preventDefault();
        const query = new FormData(event.currentTarget).get("query");
        if (typeof query === "string") setSearch(query.trim());
      }}
    >
      <Field.Root>
        <Field.Label>{pt() ? "Buscar projetos" : "Find projects"}</Field.Label>
        <InputGroup.Root attached>
          <InputGroup.Icon>
            <Search size={16} />
          </InputGroup.Icon>
          <Input name="query" type="search" required />
          <InputGroup.Action>
            <Button type="submit">{pt() ? "Buscar" : "Search"}</Button>
          </InputGroup.Action>
        </InputGroup.Root>
      </Field.Root>
      <Show when={search()}>
        <p role="status">
          {pt() ? "Busca enviada" : "Search submitted"} · {search()}
        </p>
      </Show>
    </form>
  );
}
