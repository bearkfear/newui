import { Button, Text } from "@egcs/newui";
import { A } from "@solidjs/router";
import type { ParentProps } from "solid-js";

export default function Layout(props: ParentProps) {
  return (
    <div class="min-h-screen bg-background text-foreground" data-nui-theme="system">
      <header class="flex min-h-18 items-center justify-between gap-4 border-b border-border px-8 max-sm:px-4">
        <A class="text-foreground no-underline" href="/" aria-label="newui documentation home">
          <Text as="span" size="5">
            newui
          </Text>
        </A>
        <nav class="flex items-center gap-6 max-sm:gap-3" aria-label="Main navigation">
          <A class="text-foreground no-underline" href="/">
            Documentation
          </A>
          <Button variant="outline" size="sm">
            GitHub
          </Button>
        </nav>
      </header>
      <main
        class="mx-auto w-[calc(100%-3rem)] max-w-6xl py-20 max-sm:w-[calc(100%-2rem)] max-sm:py-12"
        id="main-content"
      >
        {props.children}
      </main>
    </div>
  );
}
