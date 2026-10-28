import { createSignal, onCleanup } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { ProgressCircle } from "../../progress-circle/progress-circle";
import { Progress } from "../progress";

export function UploadProgress() {
  const [value, setValue] = createSignal(0);
  const [running, setRunning] = createSignal(false);
  let timer: ReturnType<typeof setInterval> | undefined;
  const pause = () => {
    clearInterval(timer);
    timer = undefined;
    setRunning(false);
  };
  onCleanup(() => clearInterval(timer));
  const start = () => {
    if (running()) return;
    if (value() === 100) setValue(0);
    setRunning(true);
    timer = setInterval(() => {
      const next = Math.min(100, value() + 10);
      setValue(next);
      if (next === 100) pause();
    }, 400);
  };
  return (
    <div style={{ display: "grid", gap: "24px", "max-width": "40rem", "justify-items": "start" }}>
      <Progress
        value={value()}
        label="Uploading project assets"
        tone={value() === 100 ? "success" : "primary"}
      />
      <ProgressCircle
        value={value()}
        label="Workspace sync"
        tone={value() === 100 ? "success" : "primary"}
      />
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "12px" }}>
        <Button onClick={start} disabled={running()}>
          {value() === 100 ? "Upload again" : "Start or resume"}
        </Button>
        <Button tone="neutral" variant="outline" onClick={pause} disabled={!running()}>
          Pause
        </Button>
        <Button
          tone="neutral"
          variant="ghost"
          onClick={() => {
            pause();
            setValue(0);
          }}
        >
          Reset
        </Button>
      </div>
      <Text role="status" aria-atomic="true" size="7" tone="muted">
        {value() === 100
          ? "Upload completed."
          : running()
            ? "Upload in progress."
            : "Ready to upload or resume."}
      </Text>
      <Text size="7" tone="muted">
        Simulated progress for review. Applications supply real task progress.
      </Text>
    </div>
  );
}
