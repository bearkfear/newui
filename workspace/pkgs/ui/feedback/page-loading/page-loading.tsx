import type { JSX } from "solid-js";
import { mergeProps, Show, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { LoadingProps } from "../loading/loading";
import { LoadingIndicator } from "../loading/loading.indicator";
import { pageLoadingRecipe } from "./page-loading.recipe";

export type PageLoadingProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "children"> &
  VariantProps<typeof pageLoadingRecipe> & {
    label?: string;
    description?: string;
    tone?: LoadingProps["tone"];
  };

export function PageLoading(props: PageLoadingProps) {
  const [local, rest] = splitProps(
    mergeProps(
      { role: "status" as const, "aria-atomic": true as const, label: "Loading page…" },
      props,
    ),
    ["layout", "tone", "label", "description", "class"],
  );
  const styles = () => pageLoadingRecipe({ layout: local.layout });
  return (
    <div {...rest} class={styles().root({ class: local.class })}>
      <LoadingIndicator size="lg" tone={local.tone} />
      <div class={styles().message()}>
        <p class={styles().label()}>{local.label}</p>
        <Show when={local.description}>
          <p class={styles().description()}>{local.description}</p>
        </Show>
      </div>
    </div>
  );
}
