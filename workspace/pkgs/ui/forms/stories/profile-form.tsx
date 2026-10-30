import { Check, Mail, UserRound } from "lucide-solid";
import { createUniqueId, Show } from "solid-js";
import { Button } from "../../actions/button/button";
import { Card } from "../../content/card/card";
import { Callout } from "../../feedback/callout/callout";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { InputGroup } from "../input-group/input-group";
import { Textarea } from "../textarea/textarea";
import { type ProfileFormState, useProfileForm } from "./profile-form.state";

export function ProfileForm() {
  const state = useProfileForm();
  const id = createUniqueId();
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Your profile</Card.Title>
        <Card.Description>
          A complete text-field composition with application-owned validation.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <form
          class="text-fields-demo-form"
          noValidate
          onSubmit={state.submit}
          onReset={state.reset}
        >
          <ProfileName state={state} id={`${id}-name`} />
          <ProfileEmail state={state} id={`${id}-email`} />
          <Field.Root>
            <Field.Label>About you</Field.Label>
            <Textarea
              name="bio"
              value={state.values().bio}
              onInput={(event) => state.change("bio", event.currentTarget.value)}
              rows={3}
              maxLength={280}
            />
            <Field.Description>
              {state.values().bio.length}/280 characters. Share a little about your work.
            </Field.Description>
          </Field.Root>
          <div class="text-fields-demo-row">
            <Button type="submit" loading={state.pending()}>
              Save profile
            </Button>
            <Button type="reset" variant="outline" tone="neutral">
              Reset
            </Button>
          </div>
          <Show when={state.result()}>
            <Callout.Root tone="success" role="status">
              <Callout.Icon />
              <Callout.Content>
                <Callout.Title>Profile saved</Callout.Title>
                <Callout.Description>{state.result()}</Callout.Description>
              </Callout.Content>
            </Callout.Root>
          </Show>
          <p class="text-fields-demo-status">
            Changes stay local. Saving simulates a request; fields remain editable while it runs.
          </p>
        </form>
      </Card.Content>
    </Card.Root>
  );
}

function ProfileName(props: { state: ProfileFormState; id: string }) {
  const invalid = () => props.state.touched().name && Boolean(props.state.errors().name);
  return (
    <Field.Root id={props.id} required invalid={invalid()}>
      <Field.Label>
        Name
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup.Root>
        <InputGroup.Icon>
          <UserRound />
        </InputGroup.Icon>
        <Input
          name="name"
          autocomplete="name"
          value={props.state.values().name}
          onInput={(event) => props.state.change("name", event.currentTarget.value)}
          onBlur={() => props.state.touch("name")}
        />
      </InputGroup.Root>
      <div class="text-fields-demo-feedback">
        <Show
          when={invalid()}
          fallback={<Field.Description>Your public display name.</Field.Description>}
        >
          <Field.ErrorText>{props.state.errors().name}</Field.ErrorText>
        </Show>
      </div>
    </Field.Root>
  );
}

function ProfileEmail(props: { state: ProfileFormState; id: string }) {
  const invalid = () => props.state.touched().email && Boolean(props.state.errors().email);
  const valid = () => props.state.touched().email && !props.state.errors().email;
  return (
    <Field.Root id={props.id} required invalid={invalid()} valid={valid()}>
      <Field.Label>
        Email
        <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup.Root>
        <InputGroup.Icon>
          <Mail />
        </InputGroup.Icon>
        <Input
          name="email"
          type="email"
          autocomplete="email"
          value={props.state.values().email}
          onInput={(event) => props.state.change("email", event.currentTarget.value)}
          onBlur={() => props.state.touch("email")}
        />
        <Show when={valid()}>
          <InputGroup.Icon placement="end">
            <Check />
          </InputGroup.Icon>
        </Show>
      </InputGroup.Root>
      <ProfileEmailFeedback state={props.state} />
    </Field.Root>
  );
}

function ProfileEmailFeedback(props: { state: ProfileFormState }) {
  return (
    <div class="text-fields-demo-feedback">
      <Show when={!props.state.touched().email}>
        <Field.Description>Used for account notifications.</Field.Description>
      </Show>
      <Field.ErrorText>{props.state.errors().email}</Field.ErrorText>
      <Field.SuccessText>This email address looks correct.</Field.SuccessText>
    </div>
  );
}
