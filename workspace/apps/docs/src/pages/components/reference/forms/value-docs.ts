import { componentSummaries } from "../../../../i18n/component-summaries";
import type { ComponentDocumentation } from "../reference-types";
import { Example as CurrencyInputExample } from "./currency-input";
import currencyInputCode from "./currency-input.tsx?raw";
import { Example as DateInputExample } from "./date-input";
import dateInputCode from "./date-input.tsx?raw";
import { Example as DatePickerExample } from "./date-picker";
import datePickerCode from "./date-picker.tsx?raw";
import { Example as DateRangePickerExample } from "./date-range-picker";
import dateRangePickerCode from "./date-range-picker.tsx?raw";
import { Example as LocaleProviderExample } from "./locale-provider";
import localeProviderCode from "./locale-provider.tsx?raw";
import { Example as NumberInputExample } from "./number-input";
import numberInputCode from "./number-input.tsx?raw";

export const docs = {
  CurrencyInput: {
    summary: componentSummaries.CurrencyInput,
    usage: {
      "pt-BR":
        'Passe o valor inicial como texto decimal canônico, com ponto e sem separador de milhar. `submitValue="raw"` envia o valor em unidades principais para o formulário, sem símbolo monetário.',
      en: 'Pass the initial value as a canonical decimal string with a period and no grouping separator. `submitValue="raw"` submits the amount in major units without a currency symbol.',
    },
    rows: [
      ["currency", "ISO 4217 code", "required"],
      ["locale", "string", "en-US"],
      ["entryMode", "decimal | minor-unit", "decimal"],
      ["currencyDisplay", "symbol | narrowSymbol | code | none", "symbol"],
      ["submitValue", "formatted | raw", "formatted"],
      ["defaultValue", "decimal string", "empty"],
    ],
    code: currencyInputCode,
    preview: CurrencyInputExample,
  },
  NumberInput: {
    summary: componentSummaries.NumberInput,
    usage: {
      "pt-BR":
        "Passe valores canônicos como texto. Neste exemplo, `maximumFractionDigits={0}` aceita inteiros. Um número menor que `min` permanece editável e falha na validação.",
      en: "Pass canonical values as strings. Here, `maximumFractionDigits={0}` accepts integers. A number below `min` remains editable and fails validation.",
    },
    rows: [
      ["locale", "string", "en-US"],
      ["useGrouping", "boolean", "true"],
      ["min / max", "decimal string", "—"],
      ["maximumFractionDigits", "number", "max(6, minimumFractionDigits)"],
      ["allowNegative", "boolean", "true"],
      ["submitValue", "formatted | raw", "formatted"],
    ],
    code: numberInputCode,
    preview: NumberInputExample,
  },
  DateInput: {
    summary: componentSummaries.DateInput,
    usage: {
      "pt-BR":
        "Use `parseDate` para construir um valor de calendário a partir de uma data ISO. O nome do campo identifica a data serializada no formulário.",
      en: "Use `parseDate` to construct a calendar value from an ISO date. The field name identifies the serialized date in the form.",
    },
    rows: [
      ["locale", "string", "provider or en-US"],
      ["value / defaultValue", "DateSelection", "—"],
      ["onValueChange", "(details: DateValueChangeDetails) => void", "—"],
      ["min / max", "CalendarDate", "—"],
      ["name", "string", "—"],
    ],
    code: dateInputCode,
    preview: DateInputExample,
  },
  DatePicker: {
    summary: componentSummaries.DatePicker,
    usage: {
      "pt-BR":
        "Use Input, Trigger e ClearTrigger dentro do Control. Content inclui o calendário e o posicionamento do popover.",
      en: "Compose Input, Trigger, and ClearTrigger inside Control. Content supplies the calendar and popup positioning.",
    },
    rows: [
      ["value / defaultValue", "DateSelection", "—"],
      ["closeOnSelect", "boolean", "true"],
      ["min / max", "CalendarDate", "—"],
      ["isDateUnavailable", "(date, locale) => boolean", "—"],
      ["locale", "string", "provider or en-US"],
    ],
    code: datePickerCode,
    preview: DatePickerExample,
  },
  DateRangePicker: {
    summary: componentSummaries.DateRangePicker,
    usage: {
      "pt-BR":
        "Identifique a entrada inicial com `index={0}` e a final com `index={1}`. O formulário recebe cada ponta separadamente, por exemplo `trip[start]` e `trip[end]`.",
      en: "Use `index={0}` for the start input and `index={1}` for the end input. The form receives each endpoint separately, for example as `trip[start]` and `trip[end]`.",
    },
    rows: [
      ["value / defaultValue", "DateSelection", "—"],
      ["names", "readonly [string, string]", "derived from name"],
      ["numOfMonths", "1 | 2", "1"],
      ["closeOnSelect", "boolean", "true"],
      ["index (Input)", "0 | 1", "0"],
    ],
    code: dateRangePickerCode,
    preview: DateRangePickerExample,
  },
  LocaleProvider: {
    summary: componentSummaries.LocaleProvider,
    usage: {
      "pt-BR":
        "O primeiro DateInput herda o locale do provedor. O segundo mostra a mesma data em francês ao definir seu próprio `locale`. A data civil continua a mesma.",
      en: "The first DateInput inherits the provider locale. The second displays the same date in French by setting its own `locale`. The underlying calendar date stays the same.",
    },
    rows: [
      ["locale", "BCP 47 locale tag", "en-US"],
      ["dir", "ltr | rtl", "ltr"],
      ["children", "JSX.Element", "—"],
    ],
    code: localeProviderCode,
    preview: LocaleProviderExample,
  },
} satisfies Record<string, ComponentDocumentation>;
