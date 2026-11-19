import { getColorModeScript } from "@egcs/newui/theme";
import type { DocumentComponentProps } from "@solidjs/start/server";
import { getRequestEvent } from "solid-js/web";

export function Document(props: DocumentComponentProps) {
  const path = new URL(getRequestEvent()?.request.url ?? "http://localhost/").pathname;
  const language = path.startsWith("/en/") || path === "/en" ? "en-US" : "pt-BR";

  return (
    <html lang={language} data-nui-theme="system">
      <head>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
        />
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
