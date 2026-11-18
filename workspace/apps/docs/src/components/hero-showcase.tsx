import { Badge, Button, Card, Heading, Text } from "@egcs/newui";
import { ArrowUpRight, Check, Layers3, Sparkles } from "lucide-solid";
import { createSignal } from "solid-js";
import { useI18nContext } from "../i18n/i18n-solid";

export function HeroShowcase() {
  const [created, setCreated] = createSignal(false);
  const { LL } = useI18nContext();
  const copy = LL().home.showcase;

  return (
    <div class="relative isolate mx-auto w-full max-w-2xl px-2 pb-8 sm:px-8 sm:pb-12">
      <div
        aria-hidden="true"
        class="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-3xl sm:inset-0"
      />
      <div class="absolute -right-2 top-10 -z-10 size-32 rounded-full border border-primary/20 sm:right-0 sm:top-0 sm:size-48" />
      <Card.Root class="relative overflow-hidden rounded-3xl border-border/80 bg-background/95 shadow-2xl shadow-primary/10 backdrop-blur">
        <div class="flex items-center justify-between border-b border-border/80 px-5 py-4 sm:px-7">
          <div class="flex items-center gap-3">
            <span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Layers3 size={18} aria-hidden="true" />
            </span>
            <div>
              <Text size="7" tone="muted" class="m-0 font-medium tracking-widest">
                {copy.workspace()}
              </Text>
              <Text size="6" class="m-0 font-semibold">
                newui studio
              </Text>
            </div>
          </div>
          <Badge tone="success" variant="soft" rounded>
            <span class="mr-1.5 inline-block size-1.5 rounded-full bg-success" aria-hidden="true" />
            {copy.status()}
          </Badge>
        </div>

        <div class="grid min-h-[22rem] sm:grid-cols-[10rem_1fr]">
          <aside class="hidden border-r border-border/80 bg-surface/60 p-4 sm:block">
            <Text size="7" tone="muted" class="mb-3 mt-1 px-2 font-medium tracking-widest">
              STUDIO
            </Text>
            <div class="grid gap-1 text-sm">
              <span class="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 font-medium text-primary">
                <Layers3 size={15} aria-hidden="true" /> {copy.nav()}
              </span>
              <span class="px-3 py-2 text-muted-foreground">{copy.projects()}</span>
              <span class="px-3 py-2 text-muted-foreground">{copy.settings()}</span>
            </div>
            <div class="mt-12 rounded-xl border border-border bg-background p-3">
              <Sparkles size={16} class="mb-3 text-primary" aria-hidden="true" />
              <Text size="7" tone="muted" class="m-0">
                {copy.poweredBy()}
              </Text>
              <Text size="6" class="mb-0 mt-1 font-semibold">
                Solid + newui
              </Text>
            </div>
          </aside>

          <div class="grid content-center gap-5 p-5 sm:p-8">
            <div class="flex items-center justify-between gap-3">
              <div>
                <Text size="7" tone="muted" class="m-0 font-medium tracking-widest">
                  {copy.eyebrow()}
                </Text>
                <Heading as="h2" size="5" class="mb-1 mt-2">
                  {copy.title()}
                </Heading>
                <Text tone="muted" class="m-0">
                  {copy.description()}
                </Text>
              </div>
              <span class="hidden size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary sm:grid">
                <Sparkles size={22} aria-hidden="true" />
              </span>
            </div>

            <Card.Root class="rounded-2xl border-border bg-surface/70 p-4 sm:p-5">
              <div class="mb-4 flex items-center justify-between gap-2">
                <Text size="6" class="m-0 font-semibold">
                  {copy.activity()}
                </Text>
                <Badge tone="primary" variant="outline" rounded>
                  newui
                </Badge>
              </div>
              <div class="grid gap-2 sm:grid-cols-3">
                <ShowcaseTile label={copy.forms()} mark="01" />
                <ShowcaseTile label={copy.navigation()} mark="02" />
                <ShowcaseTile label={copy.feedback()} mark="03" />
              </div>
              <div class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <div class="flex -space-x-2" aria-hidden="true">
                  <span class="grid size-8 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span class="grid size-8 place-items-center rounded-full border-2 border-background bg-surface text-primary">
                    <Layers3 size={14} aria-hidden="true" />
                  </span>
                  <span class="grid size-8 place-items-center rounded-full border-2 border-background bg-muted text-muted-foreground">
                    <Sparkles size={14} aria-hidden="true" />
                  </span>
                </div>
                <Button size="sm" endIcon={<ArrowUpRight />} onClick={() => setCreated(true)}>
                  {created() ? copy.done() : copy.action()}
                </Button>
              </div>
            </Card.Root>
          </div>
        </div>
      </Card.Root>

      <div class="absolute -bottom-1 right-0 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-lg sm:-right-2 sm:bottom-0">
        <span class="grid size-6 place-items-center rounded-full bg-success text-on-success">
          <Check size={14} aria-hidden="true" />
        </span>
        {copy.floating()}
      </div>
    </div>
  );
}

function ShowcaseTile(props: { label: string; mark: string }) {
  return (
    <div class="rounded-xl border border-border bg-background p-3">
      <Text size="7" tone="muted" class="m-0 font-medium tracking-widest">
        {props.mark}
      </Text>
      <Text size="6" class="mb-0 mt-3 font-semibold">
        {props.label}
      </Text>
      <div aria-hidden="true" class="mt-3 flex gap-1.5">
        <span class="h-1.5 w-8 rounded-full bg-primary" />
        <span class="h-1.5 w-5 rounded-full bg-primary/20" />
        <span class="h-1.5 w-3 rounded-full bg-primary/10" />
      </div>
    </div>
  );
}
