import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { ContainerProps } from "../../layout/container/container";
import { Container } from "../../layout/container/container";
import type { SectionProps } from "../../layout/section/section";
import { Section } from "../../layout/section/section";
import { HeroStyles } from "./hero.context";
import {
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroMedia,
  HeroTitle,
} from "./hero.parts";
import { heroRecipe } from "./hero.recipe";

export type HeroRootProps = SectionProps &
  VariantProps<typeof heroRecipe> & {
    width?: ContainerProps["size"];
  };

export function HeroRoot(props: HeroRootProps) {
  const [local, rest] = splitProps(props, [
    "tone",
    "layout",
    "align",
    "width",
    "class",
    "children",
  ]);
  const styles = () => heroRecipe({ tone: local.tone, layout: local.layout, align: local.align });
  return (
    <HeroStyles.Provider value={styles}>
      <Section {...rest} class={styles().root({ class: local.class })}>
        <Container size={local.width}>
          <div class={styles().layout()}>{local.children}</div>
        </Container>
      </Section>
    </HeroStyles.Provider>
  );
}

export const Hero = {
  Root: HeroRoot,
  Content: HeroContent,
  Eyebrow: HeroEyebrow,
  Title: HeroTitle,
  Description: HeroDescription,
  Actions: HeroActions,
  Media: HeroMedia,
};
