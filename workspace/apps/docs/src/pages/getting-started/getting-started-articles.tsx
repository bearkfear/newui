import { Badge, Button, Card, CodeHighlight, Heading, Tabs, Text } from "@egcs/newui";
import { createSignal, For, type ParentProps, Show } from "solid-js";
import type { GuideCopy } from "./getting-started-content";
import bunIcon from "./package-manager-icons/bun.svg";
import npmIcon from "./package-manager-icons/npm.svg";
import pnpmIcon from "./package-manager-icons/pnpm.svg";
import yarnIcon from "./package-manager-icons/yarn.svg";

const packageManagers = [
  { name: "npm", command: "npm install", icon: npmIcon },
  { name: "pnpm", command: "pnpm add", icon: pnpmIcon },
  { name: "Yarn", command: "yarn add", icon: yarnIcon },
  { name: "Bun", command: "bun add", icon: bunIcon },
] as const;

const linkClass = "w-fit font-medium text-primary underline underline-offset-4";
const compiledStyles = 'import "@egcs/newui/styles.css";';
const postcssConfig = `import newui from "@egcs/newui/postcss";
import tailwind from "@tailwindcss/postcss";

export default { plugins: [newui(), tailwind()] };`;
const tailwindStyles = `@import "tailwindcss";
@import "@egcs/newui/tailwind/preset.css";
@import "@egcs/newui/tailwind/actions.css";`;

export function GuideSection(props: ParentProps<{ title: string; id: string }>) {
  return (
    <section class="grid min-w-0 gap-3">
      <Heading as="h2" size="4" id={props.id} class="m-0 scroll-mt-24">
        {props.title}
      </Heading>
      {props.children}
    </section>
  );
}

export function GuideParagraph(props: { text: string }) {
  return (
    <Text class="m-0">
      <For each={props.text.split(/(`[^`]+`)/)}>
        {(part) =>
          part.startsWith("`") ? (
            <code class="break-words rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875em]">
              {part.slice(1, -1)}
            </code>
          ) : (
            part
          )
        }
      </For>
    </Text>
  );
}

export function Overview(props: {
  text: GuideCopy;
  installHref: string;
  tailwindHref: string;
  otherGuides?: string | undefined;
}) {
  return (
    <>
      <GuideSection id="prerequisites" title={props.text.prerequisites}>
        <div class="flex flex-wrap items-center gap-2">
          <Text class="m-0">{props.text.solidProject}</Text>
          <Badge tone="primary" variant="soft" class="font-mono">
            solid-js ^1.9.0
          </Badge>
        </div>
        <a class={linkClass} href="https://docs.solidjs.com/getting-started/quick-start">
          {props.text.createProject}
        </a>
      </GuideSection>
      <GuideSection id="choose-styles" title={props.text.chooseStyles}>
        <Text class="m-0">{props.text.compiled}</Text>
        <a class={linkClass} href={props.installHref}>
          {props.text.pages.installation.title}
        </a>
        <Text class="m-0 mt-2">{props.text.optionalTailwind}</Text>
        <a class={linkClass} href={props.tailwindHref}>
          {props.text.pages.tailwind.title}
        </a>
        <Show when={props.otherGuides}>
          {(message) => (
            <Text class="m-0" tone="muted">
              {message()}
            </Text>
          )}
        </Show>
      </GuideSection>
    </>
  );
}

export function Installation(props: { text: GuideCopy }) {
  return (
    <>
      <GuideSection id="install-package" title={props.text.installPackage}>
        <InstallTabs text={props.text} packages="@egcs/newui" />
      </GuideSection>
      <GuideSection id="import-styles" title={props.text.importStyles}>
        <GuideParagraph text={props.text.importInstructions} />
        <CodeHighlight
          {...copyLabels(props.text)}
          language="typescript"
          code={compiledStyles}
          copyable
        />
      </GuideSection>
      <GuideSection id="agent-skill" title={props.text.agentSkill}>
        <GuideParagraph text={props.text.agentSkillInstall} />
        <CodeHighlight
          {...copyLabels(props.text)}
          language="bash"
          code="npx skills add egcs/newui --skill newui"
          copyable
        />
        <GuideParagraph text={props.text.agentSkillLocal} />
        <GuideParagraph text={props.text.agentSkillExample} />
      </GuideSection>
    </>
  );
}

export function FirstComponent(props: { text: GuideCopy }) {
  const [saved, setSaved] = createSignal(false);
  const source = () => `import { createSignal } from "solid-js";
import { Button } from "@egcs/newui/actions";

export default function App() {
  const [saved, setSaved] = createSignal(false);

  return (
    <Button onClick={() => setSaved((value) => !value)}>
      {saved() ? ${JSON.stringify(props.text.saved)} : ${JSON.stringify(props.text.sampleAction)}}
    </Button>
  );
}`;

  return (
    <>
      <GuideSection id="example" title={props.text.example}>
        <GuideParagraph text={props.text.componentInstructions} />
        <CodeHighlight
          {...copyLabels(props.text)}
          title="src/App.tsx"
          language="tsx"
          code={source()}
          copyable
        />
      </GuideSection>
      <Card.Root class="grid justify-items-start gap-4 p-5">
        <Heading as="h2" size="6" id="preview" class="m-0 scroll-mt-24">
          {props.text.preview}
        </Heading>
        <Button onClick={() => setSaved((value) => !value)}>
          {saved() ? props.text.saved : props.text.sampleAction}
        </Button>
      </Card.Root>
    </>
  );
}

export function TailwindSetup(props: { text: GuideCopy }) {
  return (
    <>
      <GuideSection id="build-dependencies" title={props.text.tailwindDependencies}>
        <Text class="m-0">{props.text.tailwindVersions}</Text>
        <InstallTabs
          text={props.text}
          packages={'"tailwindcss@^4.3.3" "@tailwindcss/postcss@^4.3.3" "postcss@^8.5.0"'}
          dev
        />
      </GuideSection>
      <GuideSection id="configure-postcss" title={props.text.configurePostcss}>
        <Text class="m-0">{props.text.postcssOrder}</Text>
        <CodeHighlight
          {...copyLabels(props.text)}
          title="postcss.config.mjs"
          language="javascript"
          code={postcssConfig}
          copyable
        />
      </GuideSection>
      <GuideSection id="select-styles" title={props.text.selectStyles}>
        <GuideParagraph text={props.text.selectStylesInstructions} />
        <CodeHighlight {...copyLabels(props.text)} language="css" code={tailwindStyles} copyable />
        <Text class="m-0">{props.text.preset}</Text>
      </GuideSection>
    </>
  );
}

function InstallTabs(props: { text: GuideCopy; packages: string; dev?: boolean }) {
  return (
    <Tabs.Root defaultValue="npm" size="sm" tone="neutral">
      <Tabs.List aria-label={props.text.packageManager}>
        <For each={packageManagers}>
          {({ name, icon }) => (
            <Tabs.Trigger value={name}>
              <img src={icon} alt="" width="16" height="16" class="size-4 shrink-0" />
              {name}
            </Tabs.Trigger>
          )}
        </For>
      </Tabs.List>
      <For each={packageManagers}>
        {({ name, command }) => (
          <Tabs.Content value={name} class="pt-3">
            <CodeHighlight
              {...copyLabels(props.text)}
              language="bash"
              code={`${command}${props.dev ? " -D" : ""} ${props.packages}`}
              copyable
            />
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
}

export function copyLabels(text: GuideCopy) {
  return {
    copyLabel: text.copyLabel,
    copiedLabel: text.copiedLabel,
    copyErrorLabel: text.copyErrorLabel,
  };
}
