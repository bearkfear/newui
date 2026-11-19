import { Badge, Heading, Text } from "@egcs/newui";
import { HeroShowcase } from "../../../components/hero-showcase";
import type { TranslationFunctions } from "../../../i18n/i18n-types";

type HomePageContent = TranslationFunctions["home"];

export function HeroSection(props: { content: HomePageContent; prefix: string }) {
  return (
    <section
      class="relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:py-16"
      aria-labelledby="hero-title"
    >
      <div class="relative z-10 grid justify-items-start gap-5">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          {props.content.eyebrow()}
        </Text>
        <Heading
          as="h1"
          size="1"
          class="m-0 max-w-2xl leading-[0.98] tracking-[-0.055em]"
          id="hero-title"
        >
          {props.content.title()}
        </Heading>
        <Text size="4" tone="muted" class="m-0 max-w-lg text-pretty">
          {props.content.description()}
        </Text>
        <div class="mt-2 flex flex-wrap items-center gap-3">
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
            href={`${props.prefix}/getting-started/`}
          >
            {props.content.start()}{" "}
            <span class="ml-2" aria-hidden="true">
              →
            </span>
          </a>
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 font-medium text-foreground no-underline transition-colors hover:bg-surface"
            href={`${props.prefix}/components/`}
          >
            {props.content.catalog()}
          </a>
        </div>
        <div class="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {[
            props.content.proof.solid(),
            props.content.proof.themes(),
            props.content.proof.composition(),
          ].map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
      <HeroShowcase />
    </section>
  );
}

export function FeaturesSection(props: { content: HomePageContent }) {
  return (
    <section class="grid gap-8 py-20 sm:py-24" aria-labelledby="why-title">
      <div class="grid max-w-2xl gap-3">
        <Text size="7" tone="muted" class="m-0">
          {props.content.featuresLabel()}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="why-title">
          {props.content.featuresTitle()}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {props.content.featuresDescription()}
        </Text>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        {[
          props.content.features.composition,
          props.content.features.themes,
          props.content.features.styles,
        ].map((feature) => (
          <article class="grid content-start gap-4 rounded-2xl border border-border bg-surface p-6">
            <span
              class="grid size-11 place-items-center rounded-xl bg-primary/10 text-xl text-primary"
              aria-hidden="true"
            >
              {feature.icon()}
            </span>
            <Heading as="h3" size="5" class="m-0">
              {feature.title()}
            </Heading>
            <Text tone="muted" class="m-0">
              {feature.description()}
            </Text>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ComponentsSection(props: { content: HomePageContent; prefix: string }) {
  return (
    <section
      id="componentes"
      class="grid gap-8 rounded-3xl border border-border bg-surface p-8 sm:p-10"
      aria-labelledby="components-title"
    >
      <div class="grid max-w-2xl gap-3">
        <Text size="7" tone="muted" class="m-0">
          {props.content.componentsLabel()}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="components-title">
          {props.content.componentsTitle()}
        </Heading>
        <Text tone="muted" class="m-0">
          {props.content.componentsDescription()}
        </Text>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          props.content.areas.actions(),
          props.content.areas.forms(),
          props.content.areas.navigation(),
          props.content.areas.data(),
        ].map((area, index) => (
          <a
            href={`${props.prefix}/components/`}
            class="group rounded-xl border border-border bg-background p-5 text-foreground no-underline transition-colors hover:border-primary/50"
          >
            <Text size="7" tone="muted" class="m-0">
              0{index + 1}
            </Text>
            <Heading as="h3" size="6" class="mb-1 mt-4 group-hover:text-primary">
              {area}
            </Heading>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ThemesSection(props: { content: HomePageContent; prefix: string }) {
  return (
    <section
      id="temas"
      class="grid items-center gap-8 py-20 sm:py-24 lg:grid-cols-[1fr_0.8fr]"
      aria-labelledby="theme-title"
    >
      <div class="grid max-w-xl gap-4">
        <Text size="7" tone="muted" class="m-0">
          {props.content.themesLabel()}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="theme-title">
          {props.content.themesTitle()}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {props.content.themesDescription()}
        </Text>
        <a
          class="mt-2 inline-flex min-h-10 items-center font-medium text-primary underline-offset-4 hover:underline"
          href={`${props.prefix}/themes/`}
        >
          {props.content.catalog()}
          <span class="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
      <div class="grid gap-3 rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <div class="flex items-center justify-between border-b border-border pb-4">
          <Text size="6" class="m-0 font-medium">
            {props.content.themePreview()}
          </Text>
          <Badge tone="primary" variant="outline" rounded>
            newui
          </Badge>
        </div>
        <div class="grid gap-3 rounded-xl border border-border bg-background p-4">
          <ThemeRow label={props.content.color()} value="Ocean" />
          <ThemeRow label={props.content.appearance()} value={props.content.appearanceValue()} />
          <ThemeRow label={props.content.spacing()} value={props.content.spacingValue()} />
        </div>
      </div>
    </section>
  );
}

export function GettingStartedSection(props: { content: HomePageContent; prefix: string }) {
  return (
    <section
      id="comece-aqui"
      class="grid gap-8 rounded-3xl bg-primary px-8 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
      aria-labelledby="start-title"
    >
      <div class="grid justify-items-start gap-4">
        <Text size="7" class="m-0 opacity-80">
          {props.content.beginLabel()}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="start-title">
          {props.content.beginTitle()}
        </Heading>
        <Text class="m-0 max-w-md opacity-85">{props.content.beginDescription()}</Text>
        <a
          class="mt-2 inline-flex min-h-11 items-center rounded-md border border-primary-foreground/40 px-4 font-medium text-primary-foreground no-underline transition-colors hover:bg-primary-foreground/10"
          href={`${props.prefix}/getting-started/`}
        >
          {props.content.button()}
        </a>
      </div>
      <div class="grid gap-3 rounded-2xl bg-background p-5 text-foreground sm:p-6">
        {[
          props.content.steps.install(),
          props.content.steps.styles(),
          props.content.steps.build(),
        ].map((step, index) => (
          <div class="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
            <span class="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <Text size="6" class="m-0 font-medium">
              {step}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThemeRow(props: { label: string; value: string }) {
  return (
    <div class="flex items-center justify-between gap-3 border-b border-border py-3 last:border-0">
      <Text size="7" tone="muted" class="m-0">
        {props.label}
      </Text>
      <Text size="7" class="m-0 text-right font-medium">
        {props.value}
      </Text>
    </div>
  );
}
