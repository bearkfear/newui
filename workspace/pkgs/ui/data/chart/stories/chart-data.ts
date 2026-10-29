import type { ChartSeries, ChartTone } from "../chart.types";

export type Revenue = { month: string; subscriptions: number; services: number };
export const revenue: Revenue[] = [
  { month: "Jan", subscriptions: 4200, services: 2100 },
  { month: "Feb", subscriptions: 5100, services: 2400 },
  { month: "Mar", subscriptions: 4700, services: 2800 },
  { month: "Apr", subscriptions: 6500, services: 3200 },
  { month: "May", subscriptions: 5900, services: 2900 },
  { month: "Jun", subscriptions: 7800, services: 3800 },
  { month: "Jul", subscriptions: 7300, services: 4100 },
  { month: "Aug", subscriptions: 8900, services: 3900 },
  { month: "Sep", subscriptions: 8200, services: 4700 },
  { month: "Oct", subscriptions: 10200, services: 5200 },
  { month: "Nov", subscriptions: 9600, services: 4900 },
  { month: "Dec", subscriptions: 11800, services: 6100 },
];
export const revenueSeries: ChartSeries<Revenue>[] = [
  { label: "Subscriptions", value: (datum) => datum.subscriptions, tone: "primary" },
  { label: "Services", value: (datum) => datum.services, tone: "success" },
];
export const currencyAxis = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
export const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
export const channels: { name: string; visits: number; tone: ChartTone }[] = [
  { name: "Organic search", visits: 4280, tone: "primary" },
  { name: "Direct", visits: 2610, tone: "success" },
  { name: "Referrals", visits: 1840, tone: "warning" },
  { name: "Social", visits: 1270, tone: "info" },
];
export const monthLabel = (datum: Revenue) => datum.month;
