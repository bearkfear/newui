import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { For } from "solid-js";
import type { CodeHighlightLanguage } from "./code-highlight.types";

Prism.manual = true;

export function highlightCode(
  code: string,
  language: CodeHighlightLanguage,
): Array<string | Prism.Token> {
  const grammar = Prism.languages[language === "html" ? "markup" : language];
  const tokens = grammar ? Prism.tokenize(code, grammar) : code;
  return Array.isArray(tokens) ? tokens : [tokens];
}

export function HighlightTokens(props: { tokens: Array<string | Prism.Token> }) {
  return (
    <For each={props.tokens}>
      {(token) =>
        typeof token === "string" ? (
          token
        ) : (
          <span class={`nui-code-token ${token.type}`}>
            <HighlightTokens
              tokens={Array.isArray(token.content) ? token.content : [token.content]}
            />
          </span>
        )
      }
    </For>
  );
}
