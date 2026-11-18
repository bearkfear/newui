import { Badge, Button, Card, Heading, ProgressCircle, Text } from "@egcs/newui";
import type { Component } from "solid-js";
import { createSignal, For, onMount, Show } from "solid-js";
import { homeShowcase as english } from "../../i18n/en/home-showcase";
import { useI18nContext } from "../../i18n/i18n-solid";
import type { Locales } from "../../i18n/i18n-types";
import { homeShowcase as portuguese } from "../../i18n/pt-BR/home-showcase";

export function HomeShowcase(props: { locale: Locales }) {
  const { LL } = useI18nContext();
  const [chart, setChart] = createSignal<Component>();
  const [months, setMonths] = createSignal(6);
  const monthlySurplus = 3300;
  const simulator = () => (props.locale === "en" ? english : portuguese);
  const goal = 30000;
  const money = (amount: number) =>
    new Intl.NumberFormat(props.locale, {
      style: "currency",
      currency: props.locale === "en" ? "USD" : "BRL",
      maximumFractionDigits: 0,
    }).format(amount);
  onMount(() => {
    void import("./showcase-chart").then((module) => setChart(() => module.ShowcaseChart));
  });

  return (
    <section class="grid gap-8 py-20" aria-labelledby="showcase-title">
      <header class="grid max-w-2xl gap-3">
        <Text size="7" tone="muted" class="m-0 font-medium tracking-wider">
          {LL().homeShowcase.eyebrow()}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="showcase-title">
          {LL().homeShowcase.title()}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {LL().homeShowcase.description()}
        </Text>
      </header>
      <div class="overflow-hidden rounded-2xl border border-border bg-surface">
        <div class="flex flex-wrap items-center justify-between gap-3 px-5 pt-5 sm:px-5 sm:pt-8">
          <div class="grid gap-1">
            <Heading as="h3" size="5" class="m-0">
              {LL().homeShowcase.workspace()}
            </Heading>
            <Text size="7" tone="muted" class="m-0">
              {LL().homeShowcase.period()}
            </Text>
          </div>
          <Badge tone="primary" variant="soft" rounded>
            {LL().homeShowcase.status()}
          </Badge>
        </div>
        <div class="grid divide-y divide-border px-5 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-5 sm:py-7">
          <For
            each={[
              {
                label: () => LL().homeShowcase.revenue(),
                value: 8500,
                change: "+18.1%",
                tone: "success" as const,
              },
              {
                label: () => LL().homeShowcase.expenses(),
                value: 5200,
                change: "+13%",
                tone: "warning" as const,
              },
              {
                label: () => LL().homeShowcase.profit(),
                value: monthlySurplus,
                change: "+26.9%",
                tone: "success" as const,
              },
            ]}
          >
            {(metric) => (
              <div class="py-3 sm:px-4 sm:py-0 sm:first:pl-0">
                <Text size="7" tone="muted" class="m-0">
                  {metric.label()}
                </Text>
                <Text class="m-0 mt-1 text-2xl tracking-tight font-semibold tabular-nums">
                  {money(metric.value)}
                </Text>
                <div class="mt-2 flex flex-wrap items-center gap-2">
                  <Badge size="sm" tone={metric.tone} variant="soft">
                    {props.locale === "en" ? metric.change : metric.change.replace(".", ",")}
                  </Badge>
                  <Text size="7" tone="muted" class="m-0">
                    {LL().homeShowcase.comparison()}
                  </Text>
                </div>
              </div>
            )}
          </For>
        </div>
        <div class="grid gap-4 border-t border-border bg-background p-3 sm:p-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div class="grid min-w-0">
            <Show when={chart()} keyed>
              {(Chart) => <Chart />}
            </Show>
          </div>
          <Card.Root class="min-w-0">
            <Card.Header>
              <Heading as="h3" size="6" class="m-0">
                {simulator().reserve}
              </Heading>
              <Text size="6" tone="muted" class="m-0">
                {simulator().contribution.replace("{amount}", money(monthlySurplus))}
              </Text>
            </Card.Header>
            <Card.Content class="grid gap-4">
              <div class="grid gap-2">
                <Text size="7" tone="muted">
                  {simulator().horizon}
                </Text>
                <fieldset
                  class="m-0 flex min-w-0 flex-wrap gap-2 border-0 p-0"
                  aria-label={simulator().horizon}
                >
                  <For each={[3, 6, 12]}>
                    {(period) => (
                      <Button
                        size="sm"
                        variant={months() === period ? "solid" : "outline"}
                        aria-pressed={months() === period}
                        onClick={() => setMonths(period)}
                      >
                        {`${period} ${simulator().months}`}
                      </Button>
                    )}
                  </For>
                </fieldset>
              </div>
              <div class="flex flex-wrap items-center gap-5 rounded-xl bg-surface p-5">
                <ProgressCircle
                  size="md"
                  value={Math.min(100, Math.round(((months() * monthlySurplus) / goal) * 100))}
                  tone={months() * monthlySurplus >= goal ? "success" : "primary"}
                  aria-label={simulator().goal}
                />
                <div aria-live="polite">
                  <Text size="7" tone="muted">
                    {simulator().projected.replace("{period}", String(months()))}
                  </Text>
                  <Text class="m-0 text-3xl font-semibold tabular-nums">
                    {money(months() * monthlySurplus)}
                  </Text>
                  <Text size="7" tone="muted" class="m-0">
                    {simulator().goal} · {money(goal)}
                  </Text>
                </div>
              </div>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </section>
  );
}
