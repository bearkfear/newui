import { Button, ButtonGroup, Switch } from "@egcs/newui";
import { createSignal } from "solid-js";
import type { Locales } from "../../../i18n/i18n-types";
import { ComponentApi } from "../component-api";
import { ComponentDocPage } from "../component-doc-page";
import { ComponentExample } from "../component-example";
import { type ButtonGroupCopy, buttonGroupCopy, buttonGroupProps } from "./button-group-content";

export function ButtonGroupPage(props: { locale: Locales }) {
  const text = () => buttonGroupCopy[props.locale];
  const entries = () =>
    [
      ["usage", text().usage],
      ["layout", text().layout],
      ["vertical", text().vertical],
      ["states", text().states],
      ["api", text().api],
    ] as const;

  return (
    <ComponentDocPage
      locale={props.locale}
      component="ButtonGroup"
      related="Button"
      entries={entries()}
      text={text()}
    >
      <GroupBasics text={text()} />
      <GroupLayout text={text()} />
      <GroupStates text={text()} />
      <ComponentApi text={text()} rows={buttonGroupProps} />
    </ComponentDocPage>
  );
}

function GroupBasics(props: { text: ButtonGroupCopy }) {
  const code = () => `import { Button, ButtonGroup } from "@egcs/newui/actions";

<ButtonGroup size="sm" variant="outline" aria-label=${JSON.stringify(props.text.document)}>
  <Button>${props.text.save}</Button>
  <Button>${props.text.duplicate}</Button>
  <Button tone="danger">${props.text.delete}</Button>
</ButtonGroup>`;

  return (
    <ComponentExample
      id="usage"
      title={props.text.usage}
      description={props.text.usageDescription}
      text={props.text}
      code={code()}
    >
      <ButtonGroup size="sm" variant="outline" aria-label={props.text.document}>
        <Button>{props.text.save}</Button>
        <Button>{props.text.duplicate}</Button>
        <Button tone="danger">{props.text.delete}</Button>
      </ButtonGroup>
    </ComponentExample>
  );
}

function GroupLayout(props: { text: ButtonGroupCopy }) {
  const attachedCode =
    () => `<ButtonGroup attached size="sm" variant="outline" aria-label=${JSON.stringify(props.text.document)}>
  <Button>${props.text.edit}</Button>
  <Button>${props.text.duplicate}</Button>
  <Button>${props.text.archive}</Button>
</ButtonGroup>`;
  const verticalCode =
    () => `<ButtonGroup orientation="vertical" fullWidth variant="soft" aria-label=${JSON.stringify(props.text.document)}>
  <Button>${props.text.edit}</Button>
  <Button>${props.text.archive}</Button>
</ButtonGroup>`;

  return (
    <>
      <ComponentExample
        id="layout"
        title={props.text.layout}
        description={props.text.layoutDescription}
        text={props.text}
        code={attachedCode()}
      >
        <ButtonGroup attached size="sm" variant="outline" aria-label={props.text.document}>
          <Button>{props.text.edit}</Button>
          <Button>{props.text.duplicate}</Button>
          <Button>{props.text.archive}</Button>
        </ButtonGroup>
      </ComponentExample>
      <ComponentExample
        id="vertical"
        title={props.text.vertical}
        description={props.text.verticalDescription}
        text={props.text}
        code={verticalCode()}
      >
        <div class="w-full max-w-xs">
          <ButtonGroup
            orientation="vertical"
            fullWidth
            variant="soft"
            aria-label={props.text.document}
          >
            <Button>{props.text.edit}</Button>
            <Button>{props.text.archive}</Button>
          </ButtonGroup>
        </div>
      </ComponentExample>
    </>
  );
}

function GroupStates(props: { text: ButtonGroupCopy }) {
  const [disabled, setDisabled] = createSignal(false);
  const code = () => `const [disabled, setDisabled] = createSignal(false);

<Switch.Root checked={disabled()} onCheckedChange={({ checked }) => setDisabled(checked)}>
  <Switch.Control />
  <Switch.Label>${props.text.disableGroup}</Switch.Label>
</Switch.Root>

<ButtonGroup disabled={disabled()} aria-label=${JSON.stringify(props.text.document)}>
  <Button>${props.text.save}</Button>
  <Button variant="outline" tone="danger">${props.text.delete}</Button>
</ButtonGroup>`;

  return (
    <ComponentExample
      id="states"
      title={props.text.states}
      description={props.text.stateDescription}
      text={props.text}
      code={code()}
    >
      <div class="grid justify-items-center gap-4">
        <Switch.Root checked={disabled()} onCheckedChange={({ checked }) => setDisabled(checked)}>
          <Switch.Control />
          <Switch.Label>{props.text.disableGroup}</Switch.Label>
        </Switch.Root>
        <ButtonGroup disabled={disabled()} aria-label={props.text.document}>
          <Button>{props.text.save}</Button>
          <Button variant="outline" tone="danger">
            {props.text.delete}
          </Button>
        </ButtonGroup>
      </div>
    </ComponentExample>
  );
}
