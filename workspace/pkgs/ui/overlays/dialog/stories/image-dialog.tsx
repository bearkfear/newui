import { Button } from "../../../actions/button/button";
import { Dialog } from "../dialog";

export function ImageDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Preview brand image</Button>}
      />
      <Dialog.Content variant="free" size="lg">
        <Dialog.Title
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            "clip-path": "inset(50%)",
          }}
        >
          Brand image preview
        </Dialog.Title>
        <div
          style={{
            position: "relative",
            "min-height": "0",
            overflow: "auto",
            "border-radius": "12px",
          }}
        >
          <img
            src="/brand-light.svg"
            alt="newui wordmark and brand symbol"
            data-nui-theme="light"
            style={{
              display: "block",
              width: "100%",
              "aspect-ratio": "16 / 9",
              "object-fit": "contain",
              padding: "48px",
              background: "var(--nui-primary-soft)",
            }}
          />
          <Dialog.CloseTrigger style={{ position: "absolute", top: "12px", right: "12px" }} />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
