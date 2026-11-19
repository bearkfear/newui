import type { Locales } from "../../../i18n/i18n-types";

export const labels = {
  "pt-BR": {
    orders: "Pedidos por mês",
    trend: "Visitas por mês",
    channels: "Pedidos por canal",
    values: "Pedidos",
    visits: "Visitas",
    legend: "Legenda",
    viewData: "Ver dados",
    hideData: "Ocultar dados",
    category: "Categoria",
    months: ["Jan", "Fev", "Mar", "Abr"],
    sources: ["Loja", "Site", "Parceiros"],
  },
  en: {
    orders: "Orders by month",
    trend: "Visits by month",
    channels: "Orders by channel",
    values: "Orders",
    visits: "Visits",
    legend: "Legend",
    viewData: "View data",
    hideData: "Hide data",
    category: "Category",
    months: ["Jan", "Feb", "Mar", "Apr"],
    sources: ["Store", "Website", "Partners"],
  },
};

export function seriesData(locale: Locales, chart: "BarChart" | "LineChart" | "DonutChart") {
  const text = labels[locale];
  if (chart === "DonutChart") {
    return text.sources.map((name, index) => ({ name, count: [60, 28, 12][index] ?? 0 }));
  }
  const counts = chart === "BarChart" ? [24, 38, 32, 48] : [1350, 1715, 1630, 2260];
  return text.months.map((name, index) => ({ name, count: counts[index] ?? 0 }));
}
