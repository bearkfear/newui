import { Badge, Heading, Text } from "@egcs/newui";
import { HeroShowcase } from "./hero-showcase";

type HomePageProps = {
  language: "en" | "pt";
};

const copy = {
  pt: {
    eyebrow: "COMPONENTES PARA SOLIDJS",
    title: "Boas ideias merecem interfaces extraordinárias.",
    description:
      "Componentes acessíveis e componíveis, com estilos que você adapta ao seu projeto.",
    start: "Começar a usar",
    catalog: "Explorar componentes",
    proof: ["Feita para SolidJS", "Temas por tokens", "Composição flexível"],
    sectionLabel: "FEITA PARA O SEU JEITO DE CONSTRUIR",
    sectionTitle: "Uma base consistente. Espaço para personalizar.",
    sectionDescription:
      "Comece com componentes prontos e adapte a aparência sem abrir mão da composição e do controle.",
    features: [
      [
        "◈",
        "Composição sem limites",
        "Combine componentes simples para construir fluxos e experiências completas.",
      ],
      [
        "◐",
        "Temas com tokens",
        "Ajuste cores, tipografia e espaçamento com os tokens da biblioteca.",
      ],
      [
        "⌘",
        "Estilos do seu projeto",
        "Use o CSS compilado ou integre os estilos com o Tailwind da sua aplicação.",
      ],
    ],
    componentsLabel: "UM CATÁLOGO PARA EXPLORAR",
    componentsTitle: "Encontre a peça que você precisa.",
    componentsDescription:
      "Navegue por áreas da biblioteca e descubra exemplos para sua interface.",
    areas: ["Ações", "Formulários", "Navegação", "Dados e gráficos"],
    themesLabel: "SUA IDENTIDADE, SEUS TOKENS",
    themesTitle: "Comece com um tema. Faça dele o seu.",
    themesDescription:
      "A newui oferece temas claro e escuro e permite personalizar a paleta e as escalas da interface.",
    themePreview: "Prévia de tema",
    color: "COR PRIMÁRIA",
    appearance: "APARÊNCIA",
    spacing: "ESPAÇAMENTO",
    beginLabel: "COMECE EM POUCOS PASSOS",
    beginTitle: "Pronto para criar algo extraordinário?",
    beginDescription:
      "Instale a biblioteca, importe os estilos e adicione seu primeiro componente Solid.",
    steps: ["Instale a newui", "Importe os estilos", "Monte sua interface"],
    button: "Ver guia de instalação",
  },
  en: {
    eyebrow: "COMPONENTS FOR SOLIDJS",
    title: "Great ideas deserve extraordinary interfaces.",
    description: "Accessible, composable components with styles you can shape around your project.",
    start: "Get started",
    catalog: "Explore components",
    proof: ["Made for SolidJS", "Token-based themes", "Flexible composition"],
    sectionLabel: "BUILT FOR THE WAY YOU CREATE",
    sectionTitle: "A consistent foundation. Room to make it yours.",
    sectionDescription:
      "Start with ready-to-use components and shape the experience around your product.",
    features: [
      [
        "◈",
        "Compose without limits",
        "Combine simple components to build complete flows and experiences.",
      ],
      ["◐", "Themes built on tokens", "Tune colors, typography, and spacing with library tokens."],
      [
        "⌘",
        "Styles that fit your stack",
        "Import compiled CSS or integrate selected styles with Tailwind.",
      ],
    ],
    componentsLabel: "A LIBRARY TO EXPLORE",
    componentsTitle: "Find the pieces your interface needs.",
    componentsDescription: "Browse the library by area and discover examples for your interface.",
    areas: ["Actions", "Forms", "Navigation", "Data and charts"],
    themesLabel: "YOUR IDENTITY, YOUR TOKENS",
    themesTitle: "Start with a theme. Make it yours.",
    themesDescription:
      "newui includes light and dark themes with a customizable palette and scale.",
    themePreview: "Theme preview",
    color: "PRIMARY COLOR",
    appearance: "APPEARANCE",
    spacing: "SPACING",
    beginLabel: "START IN A FEW STEPS",
    beginTitle: "Ready to create something extraordinary?",
    beginDescription: "Install the library, import the styles, and add your first Solid component.",
    steps: ["Install newui", "Import the styles", "Build your interface"],
    button: "Read the getting started guide",
  },
} as const;

type HomeCopy = (typeof copy)["pt"] | (typeof copy)["en"];

export function HomePage(props: HomePageProps) {
  const content = copy[props.language];
  const prefix = props.language === "en" ? "/en" : "";
  return (
    <>
      <HeroSection content={content} prefix={prefix} language={props.language} />
      <FeaturesSection content={content} />
      <ComponentsSection content={content} prefix={prefix} />
      <ThemesSection content={content} language={props.language} />
      <GettingStartedSection content={content} prefix={prefix} />
    </>
  );
}

function HeroSection(props: { content: HomeCopy; prefix: string; language: "en" | "pt" }) {
  return (
    <section
      class="relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:py-16"
      aria-labelledby="hero-title"
    >
      <div class="relative z-10 grid justify-items-start gap-5">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          {props.content.eyebrow}
        </Text>
        <Heading
          as="h1"
          size="1"
          class="m-0 max-w-2xl leading-[0.98] tracking-[-0.055em]"
          id="hero-title"
        >
          {props.content.title}
        </Heading>
        <Text size="4" tone="muted" class="m-0 max-w-lg text-pretty">
          {props.content.description}
        </Text>
        <div class="mt-2 flex flex-wrap items-center gap-3">
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
            href={`${props.prefix}/getting-started/`}
          >
            {props.content.start}{" "}
            <span class="ml-2" aria-hidden="true">
              →
            </span>
          </a>
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 font-medium text-foreground no-underline transition-colors hover:bg-surface"
            href="#componentes"
          >
            {props.content.catalog}
          </a>
        </div>
        <div class="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {props.content.proof.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
      <HeroShowcase language={props.language} />
    </section>
  );
}

function FeaturesSection(props: { content: HomeCopy }) {
  return (
    <section class="grid gap-8 py-20 sm:py-24" aria-labelledby="why-title">
      <div class="grid max-w-2xl gap-3">
        <Text size="7" tone="muted" class="m-0">
          {props.content.sectionLabel}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="why-title">
          {props.content.sectionTitle}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {props.content.sectionDescription}
        </Text>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        {props.content.features.map(([icon, title, description]) => (
          <article class="grid content-start gap-4 rounded-2xl border border-border bg-surface p-6">
            <span
              class="grid size-11 place-items-center rounded-xl bg-primary/10 text-xl text-primary"
              aria-hidden="true"
            >
              {icon}
            </span>
            <Heading as="h3" size="5" class="m-0">
              {title}
            </Heading>
            <Text tone="muted" class="m-0">
              {description}
            </Text>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComponentsSection(props: { content: HomeCopy; prefix: string }) {
  return (
    <section
      id="componentes"
      class="grid gap-8 rounded-3xl border border-border bg-surface p-8 sm:p-10"
      aria-labelledby="components-title"
    >
      <div class="grid max-w-2xl gap-3">
        <Text size="7" tone="muted" class="m-0">
          {props.content.componentsLabel}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="components-title">
          {props.content.componentsTitle}
        </Heading>
        <Text tone="muted" class="m-0">
          {props.content.componentsDescription}
        </Text>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {props.content.areas.map((area, index) => (
          <a
            href={`${props.prefix}/getting-started/`}
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

function ThemesSection(props: { content: HomeCopy; language: "en" | "pt" }) {
  const appearance = () =>
    props.language === "en" ? "Light · Dark · System" : "Claro · Escuro · Sistema";
  const spacing = () =>
    props.language === "en" ? "Compact · Default · Relaxed" : "Compacto · Padrão · Amplo";
  return (
    <section
      id="temas"
      class="grid items-center gap-8 py-20 sm:py-24 lg:grid-cols-[1fr_0.8fr]"
      aria-labelledby="theme-title"
    >
      <div class="grid max-w-xl gap-4">
        <Text size="7" tone="muted" class="m-0">
          {props.content.themesLabel}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="theme-title">
          {props.content.themesTitle}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {props.content.themesDescription}
        </Text>
      </div>
      <div class="grid gap-3 rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <div class="flex items-center justify-between border-b border-border pb-4">
          <Text size="6" class="m-0 font-medium">
            {props.content.themePreview}
          </Text>
          <Badge tone="primary" variant="outline" rounded>
            newui
          </Badge>
        </div>
        <div class="grid gap-3 rounded-xl border border-border bg-background p-4">
          <ThemeRow label={props.content.color} value="Ocean" />
          <ThemeRow label={props.content.appearance} value={appearance()} />
          <ThemeRow label={props.content.spacing} value={spacing()} />
        </div>
      </div>
    </section>
  );
}

function GettingStartedSection(props: { content: HomeCopy; prefix: string }) {
  return (
    <section
      id="comece-aqui"
      class="grid gap-8 rounded-3xl bg-primary px-8 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
      aria-labelledby="start-title"
    >
      <div class="grid justify-items-start gap-4">
        <Text size="7" class="m-0 opacity-80">
          {props.content.beginLabel}
        </Text>
        <Heading as="h2" size="2" class="m-0" id="start-title">
          {props.content.beginTitle}
        </Heading>
        <Text class="m-0 max-w-md opacity-85">{props.content.beginDescription}</Text>
        <a
          class="mt-2 inline-flex min-h-11 items-center rounded-md border border-primary-foreground/40 px-4 font-medium text-primary-foreground no-underline transition-colors hover:bg-primary-foreground/10"
          href={`${props.prefix}/getting-started/`}
        >
          {props.content.button}
        </a>
      </div>
      <div class="grid gap-3 rounded-2xl bg-background p-5 text-foreground sm:p-6">
        {props.content.steps.map((step, index) => (
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
