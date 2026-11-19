import { Button, Text } from "@egcs/newui";
import { ArrowRight, Bookmark, Plus, Search } from "lucide-solid";
import { createSignal, For, onCleanup } from "solid-js";
import { ComponentApi } from "../component-api";
import { ComponentExample } from "../component-example";
import {
  type ButtonCopy,
  buttonProps,
  buttonSizes,
  buttonTones,
  buttonVariants,
} from "./button-content";

export function ButtonBasics(props: { text: ButtonCopy }) {
  const source = () =>
    `import { Button } from "@egcs/newui/actions";\n\n<Button>${props.text.save}</Button>`;

  return (
    <ComponentExample
      id="usage"
      title={props.text.usage}
      description={props.text.usageDescription}
      text={props.text}
      code={source()}
    >
      <Button>{props.text.save}</Button>
    </ComponentExample>
  );
}

export function ButtonAppearance(props: { text: ButtonCopy }) {
  return (
    <>
      <ComponentExample
        id="variants"
        title={props.text.variants}
        description={props.text.variantDescription}
        text={props.text}
        code={buttonVariants
          .map((variant) => `<Button variant="${variant}">${variant}</Button>`)
          .join("\n")}
      >
        <For each={buttonVariants}>{(variant) => <Button variant={variant}>{variant}</Button>}</For>
      </ComponentExample>
      <ComponentExample
        id="tones"
        title={props.text.tones}
        description={props.text.toneDescription}
        text={props.text}
        code={buttonTones.map((tone) => `<Button tone="${tone}">${tone}</Button>`).join("\n")}
      >
        <For each={buttonTones}>{(tone) => <Button tone={tone}>{tone}</Button>}</For>
      </ComponentExample>
      <ComponentExample
        id="sizes"
        title={props.text.sizes}
        description={props.text.sizeDescription}
        text={props.text}
        code={buttonSizes.map((size) => `<Button size="${size}">${size}</Button>`).join("\n")}
      >
        <For each={buttonSizes}>{(size) => <Button size={size}>{size}</Button>}</For>
      </ComponentExample>
    </>
  );
}

export function ButtonIcons(props: { text: ButtonCopy }) {
  const source = () => `import { ArrowRight, Bookmark, Plus, Search } from "lucide-solid";

<Button startIcon={<Plus />}>${props.text.add}</Button>
<Button variant="outline" endIcon={<ArrowRight />}>${props.text.continue}</Button>
<Button variant="ghost" iconOnly aria-label=${JSON.stringify(props.text.search)} startIcon={<Search />} />`;

  return (
    <ComponentExample
      id="icons"
      title={props.text.icons}
      description={props.text.iconDescription}
      text={props.text}
      code={source()}
    >
      <Button startIcon={<Plus />}>{props.text.add}</Button>
      <Button variant="outline" endIcon={<ArrowRight />}>
        {props.text.continue}
      </Button>
      <Button variant="ghost" iconOnly aria-label={props.text.search} startIcon={<Search />} />
    </ComponentExample>
  );
}

export function ButtonStates(props: { text: ButtonCopy }) {
  const [favorite, setFavorite] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [saved, setSaved] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));

  const save = () => {
    setSaved(false);
    setLoading(true);
    timer = setTimeout(() => {
      setLoading(false);
      setSaved(true);
    }, 1200);
  };

  const source = () => `const [favorite, setFavorite] = createSignal(false);

<Button disabled>${props.text.unavailable}</Button>
<Button loading={loading()} onClick={save}>${props.text.save}</Button>
<Button
  variant="outline"
  aria-pressed={favorite()}
  startIcon={<Bookmark />}
  onClick={() => setFavorite((value) => !value)}
>
  ${props.text.favorite}
</Button>`;

  return (
    <ComponentExample
      id="states"
      title={props.text.states}
      description={props.text.stateDescription}
      text={props.text}
      code={source()}
    >
      <Button disabled>{props.text.unavailable}</Button>
      <Button loading={loading()} onClick={save}>
        {props.text.save}
      </Button>
      <Button
        variant="outline"
        aria-pressed={favorite()}
        startIcon={<Bookmark />}
        onClick={() => setFavorite((value) => !value)}
      >
        {props.text.favorite}
      </Button>
      <Text as="span" size="7" tone="muted" role="status" class="m-0">
        {saved() ? props.text.saved : ""}
      </Text>
    </ComponentExample>
  );
}

export function ButtonReference(props: { text: ButtonCopy }) {
  return <ComponentApi text={props.text} rows={buttonProps} />;
}
