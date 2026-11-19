import { Text } from "@egcs/newui/content";
import { Loading } from "@egcs/newui/feedback";
import { createSignal, onMount, Show } from "solid-js";
import { componentSummaries } from "../../../i18n/component-summaries";
import type { Locales } from "../../../i18n/i18n-types";
import { labels, seriesData } from "./chart-preview-data";
import type { ComponentDocumentation } from "./reference-types";

function chartExample(chart: "BarChart" | "LineChart" | "DonutChart", locale: Locales) {
  const text = labels[locale];
  const title =
    chart === "BarChart" ? text.orders : chart === "LineChart" ? text.trend : text.channels;
  const values = chart === "LineChart" ? text.visits : text.values;
  const chartValues =
    chart === "DonutChart"
      ? "value={(row) => row.count}"
      : `series={[{ label: ${JSON.stringify(values)}, value: (row) => row.count }]}`;
  return `import { ${chart} } from "@egcs/newui/charts";

const data = ${JSON.stringify(seriesData(locale, chart), null, 2)};
const number = new Intl.NumberFormat("${locale}");

<${chart}
  title=${JSON.stringify(title)}
  data={data}
  label={(row) => row.name}
  ${chartValues}
  height={200}
  valueFormat={number.format}
/>`;
}

function ChartPreview(props: { locale: Locales; kind: "BarChart" | "LineChart" | "DonutChart" }) {
  const [preview, setPreview] = createSignal<typeof import("./chart-preview").ChartPreview>();
  const [failed, setFailed] = createSignal(false);
  onMount(() => {
    void import("./chart-preview").then(
      (module) => setPreview(() => module.ChartPreview),
      () => setFailed(true),
    );
  });
  return (
    <Show
      when={preview()}
      keyed
      fallback={
        failed() ? (
          <Text role="status">
            {props.locale === "en"
              ? "The chart preview could not load."
              : "A prévia do gráfico não pôde ser carregada."}
          </Text>
        ) : (
          <Loading label={props.locale === "en" ? "Loading chart" : "Carregando gráfico"} />
        )
      }
    >
      {(Chart) => <Chart {...props} />}
    </Show>
  );
}

const ssrInstructions = {
  "pt-BR":
    ' No SolidStart, carregue o módulo que importa `@egcs/newui/charts` apenas no cliente. Exporte o gráfico como default e use `clientOnly(() => import("./my-chart"))` na rota.',
  en: ' In SolidStart, load the module that imports `@egcs/newui/charts` on the client. Export the chart as default and use `clientOnly(() => import("./my-chart"))` in the route.',
};

const xyRows = [
  ["data", "Datum[]", "—"],
  ["title / label", "string / (datum: Datum) => string", "—"],
  ["series", "{ label, value, tone? }[]", "—"],
  ["height", "number (px)", "260"],
  ["valueFormat / axisFormat", "(value: number) => string", "—"],
  ["labels", "ChartLabels", "—"],
] as const;

export const docs = {
  BarChart: {
    summary: componentSummaries.BarChart,
    usage: {
      "pt-BR":
        "Passe os registros na ordem desejada e defina um acessor numérico por série. Abra Ver dados para ler os valores exatos de cada categoria." +
        ssrInstructions["pt-BR"],
      en:
        "Pass records in display order and give each series a numeric accessor. Open View data to read exact values by category." +
        ssrInstructions["en"],
    },
    rows: xyRows,
    code: (locale) => chartExample("BarChart", locale),
    preview: (props) => <ChartPreview locale={props.locale} kind="BarChart" />,
  },
  DonutChart: {
    summary: componentSummaries.DonutChart,
    usage: {
      "pt-BR":
        "Use valores finitos e não negativos em `value`. A rosca mostra proporções, e a tabela detalha os valores sem depender das cores." +
        ssrInstructions["pt-BR"],
      en:
        "Return finite nonnegative values from `value`. The donut shows proportions and the table exposes exact values without relying on color." +
        ssrInstructions["en"],
    },
    rows: [
      ["data", "Datum[]", "—"],
      ["title / label", "string / (datum: Datum) => string", "—"],
      ["value", "(datum: Datum) => number", "—"],
      ["tone", "(datum: Datum) => ChartTone", "—"],
      ["height", "number (px)", "260"],
      ["valueLabel", "string", "—"],
    ],
    code: (locale) => chartExample("DonutChart", locale),
    preview: (props) => <ChartPreview locale={props.locale} kind="DonutChart" />,
  },
  LineChart: {
    summary: componentSummaries.LineChart,
    usage: {
      "pt-BR":
        "Ordene períodos ou etapas antes de passar `data`. Use `axisFormat` para abreviar o eixo e `valueFormat` para manter os números completos na tabela." +
        ssrInstructions["pt-BR"],
      en:
        "Sort periods or stages before passing `data`. Use `axisFormat` for compact ticks and `valueFormat` for full values in the data table." +
        ssrInstructions["en"],
    },
    rows: xyRows,
    code: (locale) => chartExample("LineChart", locale),
    preview: (props) => <ChartPreview locale={props.locale} kind="LineChart" />,
  },
} satisfies Record<string, ComponentDocumentation>;
