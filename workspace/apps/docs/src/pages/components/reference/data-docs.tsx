import { Badge, Text } from "@egcs/newui/content";
import { BadgeDelta, BarList, DeltaBar, Table } from "@egcs/newui/data";
import { componentSummaries } from "../../../i18n/component-summaries";
import type { Locales } from "../../../i18n/i18n-types";
import type { ComponentDocumentation } from "./reference-types";

const samples = {
  "pt-BR": {
    cost: "Custo de aquisição",
    comparison: "Em relação ao mês anterior",
    sessions: "Sessões por canal",
    sources: ["Busca", "Direto", "Indicação"],
    invoices: "Faturas recentes",
    invoice: "Fatura",
    status: "Status",
    paid: "Paga",
    pending: "Pendente",
  },
  en: {
    cost: "Acquisition cost",
    comparison: "Compared with last month",
    sessions: "Sessions by channel",
    sources: ["Search", "Direct", "Referral"],
    invoices: "Recent invoices",
    invoice: "Invoice",
    status: "Status",
    paid: "Paid",
    pending: "Pending",
  },
};

function sessions(locale: Locales) {
  return [4250, 3180, 1260].map((count, index) => ({
    name: samples[locale].sources[index],
    count,
  }));
}

function percent(locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits: 1,
    signDisplay: "exceptZero",
  });
}

function Invoices(props: { locale: Locales }) {
  const text = () => samples[props.locale];
  return (
    <Table.Container aria-label={text().invoices} class="w-full">
      <Table.Root density="compact" striped>
        <Table.Header>
          <Table.Row>
            <Table.Head>{text().invoice}</Table.Head>
            <Table.Head>{text().status}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Head scope="row">INV-1042</Table.Head>
            <Table.Cell>
              <Badge tone="success">{text().paid}</Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Head scope="row">INV-1043</Table.Head>
            <Table.Cell>
              <Badge tone="warning">{text().pending}</Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}

export const docs = {
  BadgeDelta: {
    summary: componentSummaries.BadgeDelta,
    usage: {
      "pt-BR":
        "Use um número com sinal, como −8,2 para uma queda de 8,2%. Para custos, use `isPositiveGood={false}` para sinalizar que uma queda é favorável.",
      en: "Pass the signed percentage as a number. For costs, set `isPositiveGood={false}` so a decrease is shown as favorable.",
    },
    rows: [
      ["value", "number", "—"],
      ["isPositiveGood", "boolean", "true"],
      ["valueFormat", "(value: number) => string", "—"],
      ["variant", "soft, solid, outline", "soft"],
    ],
    code: (locale) => `import { BadgeDelta } from "@egcs/newui/data";

const formatter = new Intl.NumberFormat("${locale}", {
  style: "percent", maximumFractionDigits: 1, signDisplay: "exceptZero",
});

<p>
  ${samples[locale].cost}{" "}
  <BadgeDelta value={-8.2} isPositiveGood={false} valueFormat={(value) => formatter.format(value / 100)} />
</p>`,
    preview: (props) => (
      <div class="flex flex-wrap items-center gap-2">
        <Text as="span">{samples[props.locale].cost}</Text>
        <BadgeDelta
          value={-8.2}
          isPositiveGood={false}
          valueFormat={(value) => percent(props.locale).format(value / 100)}
        />
      </div>
    ),
  },
  BarList: {
    summary: componentSummaries.BarList,
    usage: {
      "pt-BR":
        "Os itens mantêm a ordem da entrada. Passe em `value` um número finito e não negativo. Para comparar várias listas, dê a todas o mesmo `maxValue`.",
      en: "Items keep their input order. Return a finite nonnegative number from `value`. To compare multiple lists, give each the same `maxValue`.",
    },
    rows: [
      ["data", "readonly T[]", "—"],
      ["title", "string", "—"],
      ["label / value", "(datum: T) => string / number", "—"],
      ["maxValue", "number", "largest valid value"],
      ["valueFormat", "(value: number) => string", "—"],
      ["tone", "semantic tone or (datum: T) => tone", "primary"],
    ],
    code: (locale) => `import { BarList } from "@egcs/newui/data";

const visits = ${JSON.stringify(sessions(locale), null, 2)};
const number = new Intl.NumberFormat("${locale}");

<BarList
  title=${JSON.stringify(samples[locale].sessions)}
  data={visits}
  label={(row) => row.name}
  value={(row) => row.count}
  valueFormat={number.format}
/>`,
    preview: (props) => (
      <BarList
        class="w-full"
        title={samples[props.locale].sessions}
        data={sessions(props.locale)}
        label={(row) => row.name ?? ""}
        value={(row) => row.count}
        valueFormat={new Intl.NumberFormat(props.locale).format}
      />
    ),
  },
  DeltaBar: {
    summary: componentSummaries.DeltaBar,
    usage: {
      "pt-BR":
        "Valores negativos crescem à esquerda e positivos à direita. A barra vai de −100% a +100%, enquanto o texto mantém o valor completo.",
      en: "Negative changes extend left and positive changes extend right. The bar spans −100% to +100%, and the label retains the full value.",
    },
    rows: [
      ["label", "string", "—"],
      ["value", "number", "—"],
      ["description", "string", "—"],
      ["isPositiveGood", "boolean", "true"],
      ["valueFormat", "(value: number) => string", "—"],
    ],
    code: (locale) => `import { DeltaBar } from "@egcs/newui/data";

const formatter = new Intl.NumberFormat("${locale}", {
  style: "percent", maximumFractionDigits: 1, signDisplay: "exceptZero",
});

<DeltaBar
  label=${JSON.stringify(samples[locale].cost)}
  description=${JSON.stringify(samples[locale].comparison)}
  value={-22.6}
  isPositiveGood={false}
  valueFormat={(value) => formatter.format(value / 100)}
/>`,
    preview: (props) => (
      <DeltaBar
        class="w-full"
        label={samples[props.locale].cost}
        description={samples[props.locale].comparison}
        value={-22.6}
        isPositiveGood={false}
        valueFormat={(value) => percent(props.locale).format(value / 100)}
      />
    ),
  },
  Table: {
    summary: componentSummaries.Table,
    usage: {
      "pt-BR":
        'Use Head no cabeçalho e `scope="row"` nos identificadores de linha. Table.Container cria uma região nomeada que pode rolar no teclado em telas pequenas.',
      en: 'Use Head for column headings and `scope="row"` for row identifiers. Table.Container provides a named, keyboard-scrollable region on narrow screens.',
    },
    rows: [
      ["Root.variant", "plain, bordered", "plain"],
      ["Root.density", "comfortable, compact", "comfortable"],
      ["Root.striped / hoverable", "boolean", "false"],
      ["Root.fullWidth", "boolean", "true"],
      ["Head.scope", "col, row, colgroup, rowgroup", "col"],
      ["Cell.align", "start, center, end", "—"],
    ],
    code: (locale) => {
      const text = samples[locale];
      return `import { Badge } from "@egcs/newui/content";
import { Table } from "@egcs/newui/data";

<Table.Container aria-label=${JSON.stringify(text.invoices)}>
  <Table.Root density="compact" striped>
    <Table.Header>
      <Table.Row>
        <Table.Head>${text.invoice}</Table.Head>
        <Table.Head>${text.status}</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Head scope="row">INV-1042</Table.Head>
        <Table.Cell><Badge tone="success">${text.paid}</Badge></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Head scope="row">INV-1043</Table.Head>
        <Table.Cell><Badge tone="warning">${text.pending}</Badge></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</Table.Container>`;
    },
    preview: Invoices,
  },
} satisfies Record<string, ComponentDocumentation>;
