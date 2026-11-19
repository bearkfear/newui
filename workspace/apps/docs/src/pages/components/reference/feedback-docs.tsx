import { componentSummaries } from "../../../i18n/component-summaries";
import { CalloutExample } from "./feedback-examples/callout";
import calloutCode from "./feedback-examples/callout.tsx?raw";
import { EmptyExample } from "./feedback-examples/empty";
import emptyCode from "./feedback-examples/empty.tsx?raw";
import { LoadingExample } from "./feedback-examples/loading";
import loadingCode from "./feedback-examples/loading.tsx?raw";
import { PageLoadingExample } from "./feedback-examples/page-loading";
import pageLoadingCode from "./feedback-examples/page-loading.tsx?raw";
import { ProgressExample } from "./feedback-examples/progress";
import progressCode from "./feedback-examples/progress.tsx?raw";
import { ProgressCircleExample } from "./feedback-examples/progress-circle";
import progressCircleCode from "./feedback-examples/progress-circle.tsx?raw";
import { ToastExample } from "./feedback-examples/toast";
import toastCode from "./feedback-examples/toast.tsx?raw";
import { ToasterExample } from "./feedback-examples/toaster";
import toasterCode from "./feedback-examples/toaster.tsx?raw";
import { TopProgressExample } from "./feedback-examples/top-progress";
import topProgressCode from "./feedback-examples/top-progress.tsx?raw";
import type { ComponentDocumentation } from "./reference-types";

export const docs = {
  Callout: {
    summary: componentSummaries.Callout,
    usage: {
      "pt-BR":
        "Escolha um `tone` que combine com a mensagem e escreva o significado no texto. Conecte `Callout.CloseButton` ao estado da aplicação para permitir que a pessoa feche o aviso.",
      en: "Choose a `tone` that matches the message and express its meaning in text. Connect `Callout.CloseButton` to application state to let people dismiss the notice.",
    },
    rows: [
      ["Root.tone", "neutral, primary, info, success, warning, danger", "info"],
      ["Root.variant", "soft, outline, message", "soft"],
      ["CloseButton.aria-label", "string", "Dismiss message"],
      ["CloseButton.disabled", "boolean", "false"],
      ["CloseButton.onClick", "click handler", "—"],
    ],
    code: calloutCode,
    preview: CalloutExample,
  },
  Empty: {
    summary: componentSummaries.Empty,
    usage: {
      "pt-BR":
        "Depois de confirmar que a lista está vazia, combine `Empty.Title`, `Empty.Description` e uma ação opcional. No exemplo, criar o projeto substitui o estado vazio pelo primeiro resultado.",
      en: "Once the list is confirmed empty, combine `Empty.Title`, `Empty.Description`, and an optional action. In the example, creating a project replaces the empty state with the first result.",
    },
    rows: [
      ["Root.layout", "section, compact, page", "section"],
      ["Title.as", "h1, h2, h3, h4, h5, h6", "h2"],
      ["Title.size", "1, 2, 3, 4, 5, 6", "6"],
      ["Actions.children", "JSX.Element", "—"],
    ],
    code: emptyCode,
    preview: EmptyExample,
  },
  Loading: {
    summary: componentSummaries.Loading,
    usage: {
      "pt-BR":
        "Dê um nome específico à tarefa em `label`. Ative `showLabel` para que a mensagem apareça ao lado do indicador.",
      en: "Give the task a specific name in `label`. Enable `showLabel` to show the message beside the indicator.",
    },
    rows: [
      ["size", "sm, md, lg", "md"],
      ["tone", "primary, neutral", "primary"],
      ["label", "string", "Loading…"],
      ["showLabel", "boolean", "false"],
    ],
    code: loadingCode,
    preview: LoadingExample,
  },
  PageLoading: {
    summary: componentSummaries.PageLoading,
    usage: {
      "pt-BR":
        'Escolha `layout="section"` dentro de um painel e `layout="page"` para o carregamento de uma rota inteira. Defina quando mostrar e substituir a mensagem a partir do estado da requisição.',
      en: 'Choose `layout="section"` inside a panel and `layout="page"` for a whole route. Use the request state to decide when to show and replace the message.',
    },
    rows: [
      ["layout", "page, section", "page"],
      ["label", "string", "Loading page…"],
      ["description", "string", "—"],
      ["tone", "primary, neutral", "primary"],
    ],
    code: pageLoadingCode,
    preview: PageLoadingExample,
  },
  Progress: {
    summary: componentSummaries.Progress,
    usage: {
      "pt-BR":
        "Atualize `value` com unidades reais da tarefa e defina o total em `max`. Passe `value={null}` quando o progresso ainda for desconhecido. No exemplo, cada avanço conclui mais um arquivo.",
      en: "Update `value` with real task units and set the total with `max`. Pass `value={null}` when progress is unknown. Each advance in the example completes one more file.",
    },
    rows: [
      ["value", "number or null", "—"],
      ["defaultValue", "number", "0"],
      ["min / max", "number", "0 / 100"],
      ["label", "string", "—"],
      ["showValue", "boolean", "true"],
      ["size", "sm, md, lg", "md"],
    ],
    code: progressCode,
    preview: ProgressExample,
  },
  ProgressCircle: {
    summary: componentSummaries.ProgressCircle,
    usage: {
      "pt-BR":
        "Use `label` para nomear a tarefa e mantenha o valor central curto. Passe `value={null}` para exibir um arco indeterminado.",
      en: "Use `label` to name the task and keep the centered value short. Pass `value={null}` to display an indeterminate arc.",
    },
    rows: [
      ["value", "number or null", "—"],
      ["defaultValue", "number", "0"],
      ["min / max", "number", "0 / 100"],
      ["size", "sm, md, lg", "md"],
      ["tone", "neutral, primary, info, success, warning, danger", "primary"],
      ["showValue", "boolean", "true"],
    ],
    code: progressCircleCode,
    preview: ProgressCircleExample,
  },
  Toast: {
    summary: componentSummaries.Toast,
    usage: {
      "pt-BR":
        "Monte as partes de `Toast` no callback de `Toaster` para definir título, descrição e ações. Clique em salvar para abrir uma confirmação com botão de fechar.",
      en: "Mount the `Toast` parts inside the `Toaster` callback to define the title, description, and actions. Click Save to open a dismissible confirmation.",
    },
    rows: [
      ["Root.variant", "soft, outline", "soft"],
      ["Root.tone", "neutral, primary, info, success, warning, danger", "derived from type"],
      ["Title.children", "JSX.Element", "—"],
      ["CloseTrigger.aria-label", "string", "—"],
    ],
    code: toastCode,
    preview: ToastExample,
  },
  Toaster: {
    summary: componentSummaries.Toaster,
    usage: {
      "pt-BR":
        "Crie um store com `createToaster` e monte um `Toaster` para ele. Configure posição e limite no store. No exemplo, cada convite cria uma notificação e o store exibe até duas de cada vez.",
      en: "Create a store with `createToaster` and mount one `Toaster` for it. Set placement and limits on the store. Each invitation adds a notification, and the store shows up to two at a time.",
    },
    rows: [
      ["toaster", "ToasterStore", "required"],
      ["variant", "soft, outline", "soft"],
      ["showIcon", "boolean", "true"],
      ["label", "string", "—"],
      ["mount", "HTMLElement", "document body"],
      ["children", "notification render callback", "default notification"],
    ],
    code: toasterCode,
    preview: ToasterExample,
  },
  TopProgress: {
    summary: componentSummaries.TopProgress,
    usage: {
      "pt-BR":
        "Crie um controller no escopo da aplicação e monte uma barra nele. Experimente `start()` e `done()`. Para tarefas reais, use `track(promise)` ou informe um valor conhecido com `set(value)`.",
      en: "Create a controller in the application scope and mount one bar for it. Try `start()` and `done()`. For real work, use `track(promise)` or report a known value with `set(value)`.",
    },
    rows: [
      ["controller", "TopProgressController", "required"],
      ["label", "string", "Loading page"],
      ["glow", "boolean", "true"],
    ],
    code: topProgressCode,
    preview: TopProgressExample,
  },
} satisfies Record<string, ComponentDocumentation>;
