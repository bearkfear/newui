# Code Highlight

CodeHighlight displays source text using Prism grammars and newui theme tokens. Supported languages are text, bash, css, html, javascript, json, typescript, jsx, and tsx. Pass `code` as text; unsupported runtime values fall back to plain text. Values update reactively, and source text is rendered as Solid nodes rather than injected HTML.

```tsx
import { CodeHighlight } from "@egcs/newui/content";

<CodeHighlight language="tsx" title="example.tsx" code={source} copyable />;
```

The optional copy button copies the original text. `copyLabel`, `copiedLabel`, and `copyErrorLabel` support localization; success and failure are announced. Clipboard access depends on browser permissions and a secure context. Ark Clipboard 5.39.3 reports copied before its write completes, so this component uses the native Clipboard API to report failure accurately. Code stays visible if copying is unavailable.

The output uses native `pre` and `code`, scrolls horizontally, and inherits nested light/dark themes. This component is read-only; editing and Markdown rendering belong to the application. Storybook covers static, dynamic, plain text, scrolling, dark, and mobile examples.
