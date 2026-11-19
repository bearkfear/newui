import { BarChart, DonutChart, LineChart } from "@egcs/newui/charts";
import type { Locales } from "../../../i18n/i18n-types";
import { labels, seriesData } from "./chart-preview-data";

export function ChartPreview(props: {
  locale: Locales;
  kind: "BarChart" | "LineChart" | "DonutChart";
}) {
  const text = () => labels[props.locale];
  const data = () => seriesData(props.locale, props.kind);
  const shared = {
    get data() {
      return data();
    },
    label: (row: ReturnType<typeof seriesData>[number]) => row.name,
    height: 200,
    class: "w-full",
    get valueFormat() {
      return new Intl.NumberFormat(props.locale).format;
    },
    get labels() {
      return {
        legend: text().legend,
        viewData: text().viewData,
        hideData: text().hideData,
        category: text().category,
        viewDataFor: (title: string) => `${text().viewData} · ${title}`,
        hideDataFor: (title: string) => `${text().hideData} · ${title}`,
        values: (title: string) => `${title} · ${text().viewData}`,
        caption: (title: string) => title,
      };
    },
  };
  if (props.kind === "DonutChart") {
    return (
      <DonutChart
        {...shared}
        title={text().channels}
        value={(row) => row.count}
        valueLabel={text().values}
      />
    );
  }
  if (props.kind === "LineChart") {
    return (
      <LineChart
        {...shared}
        title={text().trend}
        series={[{ label: text().visits, value: (row) => row.count }]}
      />
    );
  }
  return (
    <BarChart
      {...shared}
      title={text().orders}
      series={[{ label: text().values, value: (row) => row.count }]}
    />
  );
}
