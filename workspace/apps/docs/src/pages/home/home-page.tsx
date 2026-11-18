import { useI18nContext } from "../../i18n/i18n-solid";
import type { Locales } from "../../i18n/i18n-types";
import {
  ComponentsSection,
  FeaturesSection,
  GettingStartedSection,
  HeroSection,
  ThemesSection,
} from "./sections/home-sections";

type HomePageProps = {
  locale: Locales;
};

export function HomePage(props: HomePageProps) {
  const { LL } = useI18nContext();
  const content = LL().home;
  const prefix = props.locale === "en" ? "/en" : "";
  return (
    <>
      <HeroSection content={content} prefix={prefix} />
      <FeaturesSection content={content} />
      <ComponentsSection content={content} prefix={prefix} />
      <ThemesSection content={content} prefix={prefix} />
      <GettingStartedSection content={content} prefix={prefix} />
    </>
  );
}
