import {
  Splitter as ArkSplitter,
  type SplitterPanelData,
  type SplitterResizeDetails,
  type SplitterResizeEndDetails,
} from "@ark-ui/solid/splitter";
import { splitProps } from "solid-js";
import { ResizableHandle } from "./resizable.handle";
import { resizableRecipe } from "./resizable.recipe";

export type ResizableRootProps = ArkSplitter.RootProps;
export type ResizablePanelProps = ArkSplitter.PanelProps;
export type ResizablePanelData = SplitterPanelData;
export type ResizableResizeDetails = SplitterResizeDetails;
export type ResizableResizeEndDetails = SplitterResizeEndDetails;
const styles = resizableRecipe();

function ResizableRoot(props: ResizableRootProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSplitter.Root {...rest} class={styles.root({ class: local.class })} />;
}

function ResizablePanel(props: ResizablePanelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSplitter.Panel {...rest} class={styles.panel({ class: local.class })} />;
}

/**
 * Splitter composition: Root owns layout state, Panel defines each pane, and Handle is the resize
 * separator. Match Root `panels` IDs to Panel IDs, give the root a usable width/height, and label each
 * handle. Sizes and constraints are percentages (or Ark pixel strings); persistence is app-owned.
 */
export const Resizable = {
  Root: ResizableRoot,
  Panel: ResizablePanel,
  Handle: ResizableHandle,
  Context: ArkSplitter.Context,
};
