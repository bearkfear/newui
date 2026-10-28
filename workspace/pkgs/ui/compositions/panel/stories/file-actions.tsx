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
        <FileActionIcon name="copy" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        tone="neutral"
        iconOnly
        aria-label="Download file"
        onClick={download}
      >
        <FileActionIcon name="download" />
      </Button>
    </Panel.BarActions>
  );
}

function FileActionIcon(props: { name: "copy" | "download" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path
        d={
          props.name === "copy"
            ? "M8 8h12v12H8V8ZM16 8V4H4v12h4"
            : "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"
        }
      />
    </svg>
  );
}
