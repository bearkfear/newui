import { componentSummaries } from "../../../../i18n/component-summaries";
import type { ComponentDocumentation } from "../reference-types";
import { Example as CheckboxExample } from "./checkbox";
import checkboxCode from "./checkbox.tsx?raw";
import { Example as CheckboxGroupExample } from "./checkbox-group";
import checkboxGroupCode from "./checkbox-group.tsx?raw";
import { Example as ColorPickerExample } from "./color-picker";
import colorPickerCode from "./color-picker.tsx?raw";
import { Example as FileInputExample } from "./file-input";
import fileInputCode from "./file-input.tsx?raw";
import { Example as RadioGroupExample } from "./radio-group";
import radioGroupCode from "./radio-group.tsx?raw";
import { Example as SelectExample } from "./select";
import selectCode from "./select.tsx?raw";
import { Example as SwitchExample } from "./switch";
import switchCode from "./switch.tsx?raw";

export const docs = {
  Checkbox: {
    summary: componentSummaries.Checkbox,
    usage: {
      "pt-BR":
        'Use Checkbox.Label para nomear o controle e Field.Description para explicar a exigência. Em uma seleção parcial, passe `checked="indeterminate"`.',
      en: 'Use Checkbox.Label to name the control and Field.Description to explain the requirement. For partial selection, pass `checked="indeterminate"`.',
    },
    rows: [
      ["checked", "boolean | indeterminate", "—"],
      ["defaultChecked", "boolean | indeterminate", "false"],
      ["onCheckedChange", "(details) => void", "—"],
      ["required", "boolean", "false"],
      ["readOnly", "boolean", "false"],
    ],
    code: checkboxCode,
    preview: CheckboxExample,
  },
  CheckboxGroup: {
    summary: componentSummaries.CheckboxGroup,
    usage: {
      "pt-BR":
        "Use um value diferente em cada Checkbox. Ao escolher um segundo canal neste exemplo, o limite bloqueia a opção restante até que você desmarque uma seleção.",
      en: "Give each Checkbox a distinct value. After you select a second channel in this example, the limit disables the remaining choice until you clear a selection.",
    },
    rows: [
      ["value", "string[]", "—"],
      ["defaultValue", "string[]", "[]"],
      ["onValueChange", "(values: string[]) => void", "—"],
      ["maxSelectedValues", "number", "—"],
      ["name", "string", "—"],
    ],
    code: checkboxGroupCode,
    preview: CheckboxGroupExample,
  },
  ColorPicker: {
    summary: componentSummaries.ColorPicker,
    usage: {
      "pt-BR":
        "Crie o valor inicial com `parseColor`. Abra o seletor e explore o controle de opacidade ativado por `ColorPicker.Content alpha`.",
      en: "Use `parseColor` to create the initial value. Open the picker and try the opacity control enabled by `ColorPicker.Content alpha`.",
    },
    rows: [
      ["value / defaultValue", "Color", "—"],
      ["onValueChange", "(details) => void", "—"],
      ["name", "string", "—"],
      ["alpha (Content)", "boolean", "false"],
      ["hexLabel / hueLabel / alphaLabel (Content)", "string", "Hex / Hue / Opacity"],
    ],
    code: colorPickerCode,
    preview: ColorPickerExample,
  },
  FileInput: {
    summary: componentSummaries.FileInput,
    usage: {
      "pt-BR":
        "Informe os tipos aceitos e use ValueText para mostrar a seleção. Arquivos selecionados chegam ao FormData como objetos File. Valide também no servidor ao enviar os dados.",
      en: "Specify the accepted types and use ValueText to show the selection. Selected files appear in FormData as File objects. Validate them on the server when submitting data.",
    },
    rows: [
      ["variant", "button | boxed | compact", "button"],
      ["accept", "string | MIME type map", "—"],
      ["multiple", "boolean", "false"],
      ["maxFiles", "number", "1 in single-file mode"],
      ["onFileChange", "(details) => void", "—"],
      ["name", "string", "—"],
    ],
    code: fileInputCode,
    preview: FileInputExample,
  },
  RadioGroup: {
    summary: componentSummaries.RadioGroup,
    usage: {
      "pt-BR":
        "Cada Item já inclui a entrada de rádio nativa. Use um valor único por opção e as setas para mover a seleção entre as opções do grupo.",
      en: "Each Item already includes its native radio input. Use a unique value per choice and the arrow keys to move selection within the group.",
    },
    rows: [
      ["value / defaultValue", "string | null", "null"],
      ["onValueChange", "(details) => void", "—"],
      ["name", "string", "—"],
      ["variant", "default | segmented", "default"],
      ["readOnly", "boolean", "false"],
    ],
    code: radioGroupCode,
    preview: RadioGroupExample,
  },
  Select: {
    summary: componentSummaries.Select,
    usage: {
      "pt-BR":
        "Crie a coleção com `createListCollection` e valores únicos. O valor selecionado é sempre um vetor de strings, inclusive na seleção simples.",
      en: "Create the collection with `createListCollection` and unique values. Selection is always an array of strings, including in single-select mode.",
    },
    rows: [
      ["collection", "ListCollection", "required"],
      ["value / defaultValue", "string[]", "[]"],
      ["onValueChange", "(details) => void", "—"],
      ["multiple", "boolean", "false"],
      ["closeOnSelect", "boolean", "true in single-select mode"],
      ["name", "string", "—"],
    ],
    code: selectCode,
    preview: SelectExample,
  },
  Switch: {
    summary: componentSummaries.Switch,
    usage: {
      "pt-BR":
        "Mantenha o rótulo estável nos dois estados. Use defaultChecked para começar com a configuração ativa ou checked com onCheckedChange para controlar a escolha.",
      en: "Keep the label stable in both states. Use defaultChecked to start with the setting on, or checked with onCheckedChange to control the choice.",
    },
    rows: [
      ["checked / defaultChecked", "boolean", "false"],
      ["onCheckedChange", "(details) => void", "—"],
      ["variant", "solid | outline", "solid"],
      ["labelPosition", "start | end", "end"],
      ["rounded", "boolean", "true"],
    ],
    code: switchCode,
    preview: SwitchExample,
  },
} satisfies Record<string, ComponentDocumentation>;
