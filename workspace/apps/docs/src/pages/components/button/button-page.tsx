import type { Locales } from "../../../i18n/i18n-types";
import { ComponentDocPage } from "../component-doc-page";
import { buttonCopy } from "./button-content";
import {
  ButtonAppearance,
  ButtonBasics,
  ButtonIcons,
  ButtonReference,
  ButtonStates,
} from "./button-examples";

export function ButtonPage(props: { locale: Locales }) {
  const text = () => buttonCopy[props.locale];
  const entries = () =>
    [
      ["usage", text().usage],
      ["variants", text().variants],
      ["tones", text().tones],
      ["sizes", text().sizes],
      ["icons", text().icons],
      ["states", text().states],
      ["api", text().api],
    ] as const;

  return (
    <ComponentDocPage
      locale={props.locale}
      component="Button"
      related="ButtonGroup"
      entries={entries()}
      text={text()}
    >
      <ButtonBasics text={text()} />
      <ButtonAppearance text={text()} />
      <ButtonIcons text={text()} />
      <ButtonStates text={text()} />
      <ButtonReference text={text()} />
    </ComponentDocPage>
  );
}
