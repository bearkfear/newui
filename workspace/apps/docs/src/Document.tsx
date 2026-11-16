import type { DocumentComponentProps } from "@solidjs/start/server";

export default function Document(props: DocumentComponentProps) {
  return (
    <html lang="en-US" data-nui-theme="system">
      <head>{props.assets}</head>
      <body>
        <div id="app">{props.children}</div>
        {props.scripts}
      </body>
    </html>
  );
}
