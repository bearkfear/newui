import { Copy, Download } from "lucide-solid";
import { Button } from "../../../actions/button/button";
import { Panel } from "../panel";
import { fileSource } from "./file-content";

export function FileActions(props: { onRaw: () => void; onStatus: (message: string) => void }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(fileSource);
      props.onStatus("File copied.");
    } catch {
      props.onStatus("Copy unavailable. Open Code to select the file text.");
    }
  };
  const download = () => {
    const link = document.createElement("a");
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(fileSource)}`;
    link.download = "implementation-stages.md";
    link.click();
  };
  return (
    <Panel.BarActions>
      <Button size="sm" variant="outline" tone="neutral" onClick={props.onRaw}>
        Raw
      </Button>
      <Button
        size="sm"
        variant="ghost"
        tone="neutral"
        iconOnly
        aria-label="Copy file"
        onClick={copy}
      >
        <Copy size={16} aria-hidden="true" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        tone="neutral"
        iconOnly
        aria-label="Download file"
        onClick={download}
      >
        <Download size={16} aria-hidden="true" />
      </Button>
    </Panel.BarActions>
  );
}
