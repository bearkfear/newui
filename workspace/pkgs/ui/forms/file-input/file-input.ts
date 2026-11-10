import { FileUpload as ArkFileUpload } from "@ark-ui/solid/file-upload";
import { FileInputIndicator } from "./file-input.indicator";
import {
  FileInputControl,
  FileInputDropzone,
  FileInputTrigger,
  FileInputValueText,
} from "./file-input.parts";
import { FileInputRoot } from "./file-input.root";

export const FileInput = {
  Root: FileInputRoot,
  Control: FileInputControl,
  Trigger: FileInputTrigger,
  ValueText: FileInputValueText,
  Indicator: FileInputIndicator,
  Label: ArkFileUpload.Label,
  Dropzone: FileInputDropzone,
  Context: ArkFileUpload.Context,
  ClearTrigger: ArkFileUpload.ClearTrigger,
  ItemGroup: ArkFileUpload.ItemGroup,
  Item: ArkFileUpload.Item,
  ItemName: ArkFileUpload.ItemName,
  ItemSizeText: ArkFileUpload.ItemSizeText,
  ItemDeleteTrigger: ArkFileUpload.ItemDeleteTrigger,
  ItemPreview: ArkFileUpload.ItemPreview,
  ItemPreviewImage: ArkFileUpload.ItemPreviewImage,
};
