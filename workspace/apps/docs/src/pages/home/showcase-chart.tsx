import { BarChart } from "@egcs/newui/charts";
import { createMemo } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";

const data = [
  { month: 0, value: 4200, expenses: 3000 },
  { month: 1, value: 5100, expenses: 3400 },
  { month: 2, value: 4800, expenses: 3200 },
  { month: 3, value: 6300, expenses: 4100 },
  { month: 4, value: 7200, expenses: 4600 },
  { month: 5, value: 8500, expenses: 5200 },
];

export function ShowcaseChart() {
  const { LL, locale } = useI18nContext();
  const month = createMemo(
    () => new Intl.DateTimeFormat(locale(), { month: "short", timeZone: "UTC" }),
  );
  const amount = createMemo(
    () =>
      new Intl.NumberFormat(locale(), {
        style: "currency",
        currency: locale() === "pt-BR" ? "BRL" : "USD",
        maximumFractionDigits: 0,
      }),
  );
  const axis = createMemo(() => new Intl.NumberFormat(locale()));
  return (
    <BarChart
      title={LL().homeShowcase.chart()}
      description={LL().homeShowcase.chartDescription()}
      labels={{
        legend: LL().homeShowcase.legend(),
        viewData: LL().homeShowcase.viewData(),
        hideData: LL().homeShowcase.hideData(),
        viewDataFor: (title) => `${LL().homeShowcase.viewData()}: ${title}`,
        hideDataFor: (title) => `${LL().homeShowcase.hideData()}: ${title}`,
        values: (title) => `${LL().homeShowcase.viewData()}: ${title}`,
        caption: (title) => `${LL().homeShowcase.viewData()}: ${title}`,
        category: LL().homeShowcase.category(),
      }}
      data={data}
      height={190}
      label={(item) => month().format(Date.UTC(2026, item.month, 1))}
      valueFormat={amount().format}
      axisFormat={axis().format}
      series={[
        { label: LL().homeShowcase.revenue(), value: (item) => item.value, tone: "primary" },
        { label: LL().homeShowcase.expenses(), value: (item) => item.expenses, tone: "neutral" },
      ]}
    />
  );
}
