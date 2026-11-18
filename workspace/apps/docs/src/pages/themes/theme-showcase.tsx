import { Badge, Button, Card, Checkbox, Field, Heading, Input, Switch, Text } from "@egcs/newui";
import { createSignal } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";

export function ThemeShowcase() {
  const { LL } = useI18nContext();
  const content = () => LL().themesPage;
  const [saved, setSaved] = createSignal(false);
  return (
    <section class="grid w-full gap-8 text-left" aria-labelledby="showcase-heading">
      <header class="grid gap-2">
        <Heading as="h2" size="3" class="m-0" id="showcase-heading">
          {content().showcase()}
        </Heading>
        <Text tone="muted" class="m-0">
          {content().showcaseDescription()}
        </Text>
      </header>
      <div class="grid items-start gap-5 lg:grid-cols-3">
        <Card.Root variant="soft">
          <Card.Header>
            <Card.Title>{content().actions()}</Card.Title>
          </Card.Header>
          <Card.Content class="grid gap-6">
            <div class="flex flex-wrap gap-3">
              <Button>{content().primaryAction()}</Button>
              <Button variant="outline">{content().secondaryAction()}</Button>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge tone="primary">{content().active()}</Badge>
              <Badge tone="success" variant="outline">
                {content().completed()}
              </Badge>
            </div>
            <Switch.Root defaultChecked>
              <Switch.Control />
              <Switch.Label>{content().notifications()}</Switch.Label>
            </Switch.Root>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>{content().form()}</Card.Title>
            <Card.Description>{content().formDescription()}</Card.Description>
          </Card.Header>
          <Card.Content class="grid gap-5">
            <Field.Root>
              <Field.Label>{content().projectName()}</Field.Label>
              <Input placeholder={content().projectPlaceholder()} />
            </Field.Root>
            <Field.Root>
              <Field.Label>{content().email()}</Field.Label>
              <Input type="email" placeholder={content().emailPlaceholder()} />
            </Field.Root>
            <Button onClick={() => setSaved(true)}>
              {saved() ? content().saved() : content().save()}
            </Button>
          </Card.Content>
        </Card.Root>
        <div class="grid gap-5">
          <Card.Root variant="soft">
            <Card.Header>
              <Card.Title>{content().activity()}</Card.Title>
              <Card.Description>{content().activityDescription()}</Card.Description>
            </Card.Header>
            <Card.Content class="flex flex-wrap gap-2">
              <Badge tone="primary" variant="soft">
                {content().progress()}
              </Badge>
              <Badge tone="success" variant="outline">
                {content().completed()}
              </Badge>
            </Card.Content>
          </Card.Root>
          <Card.Root>
            <Card.Header>
              <Card.Title>{content().account()}</Card.Title>
              <Card.Description>{content().accountDescription()}</Card.Description>
            </Card.Header>
            <Card.Content>
              <Checkbox.Root defaultChecked>
                <Checkbox.Control />
                <Checkbox.Label>{content().share()}</Checkbox.Label>
              </Checkbox.Root>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </section>
  );
}
