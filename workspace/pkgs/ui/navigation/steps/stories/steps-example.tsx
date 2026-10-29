import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Steps, type StepsRootProps } from "../steps";
import { SetupCompleted, SetupContent, SetupControls, SetupList, setupStages } from "./setup-parts";

export interface StepsExampleProps {
  orientation?: StepsRootProps["orientation"];
  linear?: boolean;
  defaultStep?: number;
  descriptions?: boolean;
  surface?: boolean;
}

export function StepsExample(props: StepsExampleProps) {
  return (
    <div style={{ "max-width": "60rem", "min-width": "0" }}>
      <Steps.Root
        count={setupStages.length}
        defaultStep={props.defaultStep ?? 0}
        orientation={props.orientation ?? "horizontal"}
        linear={props.linear ?? false}
      >
        <SetupList descriptions={props.descriptions ?? true} />
        <SetupContent surface={props.surface ?? false} />
        <SetupControls />
      </Steps.Root>
    </div>
  );
}

export function ControlledSteps() {
  const [step, setStep] = createSignal(0);
  return (
    <div style={{ display: "grid", gap: "1rem", "max-width": "60rem" }}>
      <div>
        <Button variant="outline" onClick={() => setStep(2)}>
          Open review step
        </Button>
      </div>
      <Steps.Root
        count={setupStages.length}
        step={step()}
        onStepChange={(details) => setStep(details.step)}
      >
        <SetupList />
        <SetupContent />
        <SetupControls />
      </Steps.Root>
    </div>
  );
}

export function LinearSteps() {
  const [approved, setApproved] = createSignal(false);
  const [message, setMessage] = createSignal("");
  return (
    <Steps.Root
      count={setupStages.length}
      linear
      isStepValid={(index) => index !== 1 || approved()}
      onStepInvalid={() => setMessage("Confirm the configuration before continuing.")}
      onStepChange={(details) => {
        setMessage("");
        if (details.step === 0) setApproved(false);
      }}
      style={{ "max-width": "60rem" }}
    >
      <SetupList />
      <Steps.Content index={0}>
        <Heading as="h2" size="5">
          Workspace
        </Heading>
        <Text>Your workspace details are ready. Continue to confirm the shared configuration.</Text>
      </Steps.Content>
      <Steps.Content index={1}>
        <Heading as="h2" size="5">
          Confirm configuration
        </Heading>
        <Text style={{ "margin-block": "0.75rem" }}>
          The workspace will use the shared team defaults. Confirm before continuing.
        </Text>
        <Button
          variant="outline"
          aria-pressed={approved()}
          onClick={() => {
            setApproved((value) => !value);
            setMessage("");
          }}
        >
          {approved() ? "Configuration confirmed" : "Confirm configuration"}
        </Button>
        <Text
          role="status"
          aria-atomic="true"
          size="7"
          tone="muted"
          style={{ "margin-top": "0.75rem" }}
        >
          {message()}
        </Text>
      </Steps.Content>
      <Steps.Content index={2}>
        <Heading as="h2" size="5">
          Review
        </Heading>
        <Text>Your configuration is confirmed. Finish setup when you are ready.</Text>
      </Steps.Content>
      <SetupCompleted />
      <SetupControls />
    </Steps.Root>
  );
}
