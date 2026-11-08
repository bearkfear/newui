import { DatePicker as ArkDatePicker, useDatePickerContext } from "@ark-ui/solid/date-picker";
import { ChevronLeft, ChevronRight } from "lucide-solid";
import { createMemo, For, Show } from "solid-js";

export function DatePickerCalendar() {
  return (
    <>
      <ArkDatePicker.View view="day">
        <CalendarNavigation />
        <DayTables />
      </ArkDatePicker.View>
      <ArkDatePicker.View view="month">
        <CalendarNavigation />
        <MonthYearTable view="month" />
      </ArkDatePicker.View>
      <ArkDatePicker.View view="year">
        <CalendarNavigation />
        <MonthYearTable view="year" />
      </ArkDatePicker.View>
    </>
  );
}

function CalendarNavigation() {
  return (
    <ArkDatePicker.ViewControl class="nui-date-navigation">
      <ArkDatePicker.PrevTrigger class="nui-date-action nui-focus-ring">
        <ChevronLeft size={18} aria-hidden="true" />
      </ArkDatePicker.PrevTrigger>
      <ArkDatePicker.ViewTrigger class="nui-date-view-trigger nui-focus-ring">
        <ArkDatePicker.RangeText />
      </ArkDatePicker.ViewTrigger>
      <ArkDatePicker.NextTrigger class="nui-date-action nui-focus-ring">
        <ChevronRight size={18} aria-hidden="true" />
      </ArkDatePicker.NextTrigger>
    </ArkDatePicker.ViewControl>
  );
}

function DayTables() {
  const api = useDatePickerContext();
  return (
    <div class="nui-date-months">
      <For each={Array.from({ length: api().numOfMonths }, (_, index) => index)}>
        {(index) => <DayTable offset={index} />}
      </For>
    </div>
  );
}

function DayTable(props: { offset: number }) {
  const api = useDatePickerContext();
  // Preserve cell identity during focus/selection changes; getOffset allocates fresh weeks.
  const month = createMemo(() => api().getOffset({ months: props.offset }), undefined, {
    equals: (previous, next) =>
      previous.visibleRange.start.toString() === next.visibleRange.start.toString() &&
      previous.visibleRangeText.start === next.visibleRangeText.start &&
      previous.visibleRangeText.end === next.visibleRangeText.end &&
      previous.weeks.length === next.weeks.length &&
      previous.weeks[0]?.[0]?.toString() === next.weeks[0]?.[0]?.toString(),
  });
  return (
    <div>
      <Show when={api().numOfMonths > 1}>
        <div class="nui-date-month-title">{month().visibleRangeText.start}</div>
      </Show>
      <ArkDatePicker.Table aria-label={month().visibleRangeText.start}>
        <ArkDatePicker.TableHead>
          <ArkDatePicker.TableRow>
            <For each={api().weekDays}>
              {(day) => (
                <ArkDatePicker.TableHeader abbr={day.long}>{day.short}</ArkDatePicker.TableHeader>
              )}
            </For>
          </ArkDatePicker.TableRow>
        </ArkDatePicker.TableHead>
        <ArkDatePicker.TableBody>
          <For each={month().weeks}>
            {(week) => (
              <ArkDatePicker.TableRow>
                <For each={week}>
                  {(day) => (
                    <ArkDatePicker.TableCell value={day} visibleRange={month().visibleRange}>
                      <Show
                        when={day.month === month().visibleRange.start.month}
                        fallback={<span aria-hidden="true" />}
                      >
                        <ArkDatePicker.TableCellTrigger>{day.day}</ArkDatePicker.TableCellTrigger>
                      </Show>
                    </ArkDatePicker.TableCell>
                  )}
                </For>
              </ArkDatePicker.TableRow>
            )}
          </For>
        </ArkDatePicker.TableBody>
      </ArkDatePicker.Table>
    </div>
  );
}

function MonthYearTable(props: { view: "month" | "year" }) {
  const api = useDatePickerContext();
  const rows = createMemo(
    () =>
      props.view === "month"
        ? api().getMonthsGrid({ columns: 3, format: "short" })
        : api().getYearsGrid({ columns: 3 }),
    undefined,
    { equals: (previous, next) => JSON.stringify(previous) === JSON.stringify(next) },
  );
  return (
    <ArkDatePicker.Table columns={3}>
      <ArkDatePicker.TableBody>
        <For each={rows()}>
          {(row) => (
            <ArkDatePicker.TableRow>
              <For each={row}>
                {(cell) => (
                  <ArkDatePicker.TableCell value={cell.value}>
                    <ArkDatePicker.TableCellTrigger>{cell.label}</ArkDatePicker.TableCellTrigger>
                  </ArkDatePicker.TableCell>
                )}
              </For>
            </ArkDatePicker.TableRow>
          )}
        </For>
      </ArkDatePicker.TableBody>
    </ArkDatePicker.Table>
  );
}
