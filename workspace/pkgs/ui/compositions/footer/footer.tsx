import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { ContainerProps } from "../../layout/container/container";
import { Container } from "../../layout/container/container";
import {
  FooterBrand,
  FooterContent,
  FooterGroup,
  FooterLink,
  FooterLinks,
  FooterMeta,
  FooterTitle,
} from "./footer.parts";
import { footerRecipe } from "./footer.recipe";

export type FooterRootProps = JSX.HTMLAttributes<HTMLElement> &
  VariantProps<typeof footerRecipe> & {
    width?: ContainerProps["size"];
  };

export function FooterRoot(props: FooterRootProps) {
  const [local, rest] = splitProps(props, ["tone", "width", "class", "children"]);
  return (
    <footer {...rest} class={footerRecipe({ tone: local.tone }).root({ class: local.class })}>
      <Container size={local.width}>{local.children}</Container>
    </footer>
  );
}

/**
 * Responsive page footer for brand information, grouped links, and optional metadata.
 * Use Footer.Group's accessible label for each link collection; Footer.Link remains a native anchor
 * and does not provide routing. Root styles the semantic footer but does not choose its content.
 */
export const Footer = {
  Root: FooterRoot,
  Content: FooterContent,
  Brand: FooterBrand,
  Links: FooterLinks,
  Group: FooterGroup,
  Title: FooterTitle,
  Link: FooterLink,
  Meta: FooterMeta,
};
