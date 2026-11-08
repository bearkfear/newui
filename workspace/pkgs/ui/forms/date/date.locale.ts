import { useLocaleContext } from "@ark-ui/solid/locale";
import { createMemo } from "solid-js";

export type { LocaleProviderProps } from "@ark-ui/solid/locale";
export { LocaleProvider } from "@ark-ui/solid/locale";

export function resolveDateLocale(locale: string): string {
  try {
    if (Intl.DateTimeFormat.supportedLocalesOf([locale]).length) {
      return new Intl.Locale(locale, { calendar: "gregory" }).toString();
    }
  } catch {
    // Invalid and unsupported tags use the same deterministic fallback.
  }
  return "en-US-u-ca-gregory";
}

export function useDateLocale(locale: () => string | undefined) {
  const global = useLocaleContext();
  return createMemo(() => resolveDateLocale(locale() ?? global().locale ?? "en-US"));
}

export function dateMessages(locale: string) {
  const portuguese = locale.startsWith("pt");
  return portuguese
    ? {
        day: "Dia",
        month: "Mês",
        year: "Ano",
        start: "Início",
        end: "Fim",
        clear: "Limpar datas",
        open: "Abrir calendário",
        close: "Fechar calendário",
        previous: "Período anterior",
        next: "Próximo período",
        calendar: "Calendário",
        chooseMonth: "Escolher mês",
        chooseYear: "Escolher ano",
        chooseDecade: "Escolher década",
        unavailable: "Data indisponível.",
        rangeStart: "Início do intervalo.",
        rangeEnd: "Fim do intervalo.",
        inRange: "No intervalo.",
        selected: "Data selecionada.",
        choose: "Escolher",
        selectPeriod: "Selecionar período",
        invalid: "Insira uma data válida e disponível dentro dos limites.",
        incomplete: "Complete todos os segmentos da data.",
        range: "A data final deve ser igual ou posterior à data inicial.",
      }
    : {
        day: "Day",
        month: "Month",
        year: "Year",
        start: "Start",
        end: "End",
        clear: "Clear dates",
        open: "Open calendar",
        close: "Close calendar",
        previous: "Previous period",
        next: "Next period",
        calendar: "Calendar",
        chooseMonth: "Choose month",
        chooseYear: "Choose year",
        chooseDecade: "Choose decade",
        unavailable: "Date unavailable.",
        rangeStart: "Start of range.",
        rangeEnd: "End of range.",
        inRange: "In range.",
        selected: "Selected date.",
        choose: "Choose",
        selectPeriod: "Select period",
        invalid: "Enter a valid, available date within the limits.",
        incomplete: "Complete all date segments.",
        range: "The end date must be on or after the start date.",
      };
}
