import { DateInput as ArkDateInput, useDateInputContext } from "@ark-ui/solid/date-input";
import { Show, splitProps } from "solid-js";
import { textControlRecipe } from "../text-control.recipe";
import { useDateContext } from "./date.context";
import { dateDraft } from "./date.draft";
import { createDateInputApi } from "./date.input-api";
import { DateNativeInput } from "./date.native-input";
import type { DateEntryProps } from "./date.types";

export function DateSegments(props: DateEntryProps) {
  const date = useDateContext();
  const [local, rest] = splitProps(props, [
    "index",
    "class",
    "children",
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
  ]);
  const index = () => local.index ?? 0;
  const api = createDateInputApi(index);
  const draft = dateDraft(api);
  const invalid = () => date.invalid() || (!api().focused && draft.partial());
  return (
    <ArkDateInput.RootProvider value={api} class="nui-date-entry" data-index={index()}>
      <ArkDateInput.Control>
        <ArkDateInput.SegmentGroup
          {...rest}
          id={date.groupId(index())}
          aria-label={local["aria-label"]}
          aria-labelledby={
            local["aria-labelledby"] ??
            (local["aria-label"]
              ? undefined
              : [date.labelId(0), date.range ? date.endpointId(index()) : undefined]
                  .filter(Boolean)
                  .join(" "))
          }
          aria-describedby={date.control.describedBy(local["aria-describedby"])}
          aria-busy={date.control.loading() || undefined}
          aria-invalid={invalid() || undefined}
          data-invalid={invalid() ? "" : undefined}
          data-valid={date.control.valid() && !invalid() ? "" : undefined}
          class={textControlRecipe({
            size: date.control.size(),
            tone: date.control.tone(),
            rounded: date.control.rounded(),
            class: ["nui-date-segments", local.class].filter(Boolean).join(" "),
          })}
        >
          <Show when={date.range}>
            <span id={date.endpointId(index())} class="nui-date-endpoint">
              {index() === 0 ? date.messages().start : date.messages().end}
            </span>
          </Show>
          {local.children ?? <LocalizedSegments />}
        </ArkDateInput.SegmentGroup>
      </ArkDateInput.Control>
      <DateNativeInput api={api} index={index()} />
    </ArkDateInput.RootProvider>
  );
}

function LocalizedSegments() {
  const date = useDateContext();
  const api = useDateInputContext();
  const draft = dateDraft(api);
  return (
    <ArkDateInput.SegmentContext>
      {(segment) => (
        <ArkDateInput.Segment
          segment={segment}
          aria-required={(segment.isEditable && date.required()) || undefined}
          aria-invalid={
            (segment.isEditable && (date.invalid() || (!api().focused && draft.partial()))) ||
            undefined
          }
          aria-label={
            segment.type === "literal"
              ? undefined
              : date.messages()[segment.type as "day" | "month" | "year"]
          }
        />
      )}
    </ArkDateInput.SegmentContext>
  );
}
