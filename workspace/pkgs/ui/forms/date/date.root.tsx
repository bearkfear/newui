import { splitProps } from "solid-js";
import { createDateContext, DateContext } from "./date.context";
import type { DateRootProps } from "./date.types";

export const dateOptionKeys = [
  "locale",
  "value",
  "defaultValue",
  "onValueChange",
  "name",
  "names",
  "form",
  "required",
  "min",
  "max",
  "isDateUnavailable",
  "placeholderValue",
  "shouldForceLeadingZeros",
  "size",
  "tone",
  "rounded",
  "valid",
  "invalid",
  "loading",
  "disabled",
  "readOnly",
] as const;

export function DateRoot(props: DateRootProps) {
  const [, rest] = splitProps(props, dateOptionKeys);
  const [local, dom] = splitProps(rest, ["class", "children"]);
  const context = createDateContext(props, false);
  return (
    <DateContext.Provider value={context}>
      <div {...dom} class={["nui-date-root", local.class].filter(Boolean).join(" ")}>
        {local.children}
      </div>
    </DateContext.Provider>
  );
}
