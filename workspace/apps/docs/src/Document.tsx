import { getColorModeScript } from "@egcs/newui/theme";
import { getHtmlProps } from "@kobalte/solidbase/server";
import type { DocumentComponentProps } from "@solidjs/start/server";

export default function Document(props: DocumentComponentProps) {
  const htmlProps = getHtmlProps();

  return (
    <html lang={htmlProps.lang} data-nui-theme="system">
      <head>
        <meta charset="utf-8" />
        <script innerHTML={getColorModeScript({ storageKey: "newui-docs-theme" })} />
        {props.assets}
      </head>
      <body>
        <div id="app">{props.children}</div>
        {props.scripts}
      </body>
    </html>
  );
}
