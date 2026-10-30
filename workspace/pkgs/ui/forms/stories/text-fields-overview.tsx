import { Card } from "../../content/card/card";
import {
  AdornedFields,
  ClearableField,
  LoadingField,
  PasswordField,
  SearchField,
} from "./input-examples";
import { HorizontalFields } from "./native-form";
import { ProfileForm } from "./profile-form";
import {
  ReadonlyAndDisabled,
  TextareaExamples,
  TextSizes,
  ValidationStates,
} from "./text-field-matrices";
import "./text-fields-demo.css";

export function TextFieldsOverview() {
  return (
    <div class="text-fields-demo">
      <header class="text-fields-demo-heading">
        <h1>Room for every detail.</h1>
        <p>
          Bulma-inspired text fields with native editing, Ark associations, and composable icons,
          addons, and actions.
        </p>
      </header>
      <div class="text-fields-demo-grid">
        <ProfileForm />
        <ActionExamplesCard />
      </div>
      <FieldFeedbackExamples />
      <div class="text-fields-demo-grid">
        <Card.Root>
          <Card.Header>
            <Card.Title>A little more room</Card.Title>
          </Card.Header>
          <Card.Content>
            <TextareaExamples />
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>State without surprises</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="text-fields-demo-stack">
              <ReadonlyAndDisabled />
              <LoadingField />
            </div>
          </Card.Content>
        </Card.Root>
      </div>
      <div class="text-fields-demo-grid">
        <Card.Root>
          <Card.Header>
            <Card.Title>A size for the moment</Card.Title>
          </Card.Header>
          <Card.Content>
            <TextSizes />
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Labels beside the work</Card.Title>
          </Card.Header>
          <Card.Content>
            <HorizontalFields />
          </Card.Content>
        </Card.Root>
      </div>
    </div>
  );
}

function ActionExamplesCard() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Useful little details</Card.Title>
        <Card.Description>Actions that belong alongside the value.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="text-fields-demo-stack">
          <PasswordField />
          <ClearableField />
          <SearchField />
        </div>
      </Card.Content>
    </Card.Root>
  );
}

function FieldFeedbackExamples() {
  return (
    <div class="text-fields-demo-grid">
      <Card.Root>
        <Card.Header>
          <Card.Title>Context, built in</Card.Title>
          <Card.Description>Prefixes, suffixes, and decorative icons.</Card.Description>
        </Card.Header>
        <Card.Content>
          <AdornedFields />
        </Card.Content>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Clear feedback</Card.Title>
          <Card.Description>Neutral, checked, and invalid are distinct states.</Card.Description>
        </Card.Header>
        <Card.Content>
          <ValidationStates />
        </Card.Content>
      </Card.Root>
    </div>
  );
}
