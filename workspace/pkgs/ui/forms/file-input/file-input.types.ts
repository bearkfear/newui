import type { FileUpload } from "@ark-ui/solid/file-upload";
import type { TextControlOptions } from "../text-control.context";

export type FileInputRootProps = FileUpload.RootProps &
  TextControlOptions & {
    /** Visual presentation; compact shares Input's exact control heights. */
    variant?: "button" | "boxed" | "compact";
    /** Enables multiple selection. maxFiles takes precedence when provided. */
    multiple?: boolean;
  };
