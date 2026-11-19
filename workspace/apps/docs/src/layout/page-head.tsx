import { Link, Meta, Title, useHead } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { createMemo, createUniqueId, For, Show } from "solid-js";
import { getRequestEvent, isServer } from "solid-js/web";
import { getLocaleOption } from "../i18n/docs-locales";
import {
  breadcrumbs,
  pageLocales,
  pageUrl,
  resolvePageMetadata,
  siteName,
  siteOrigin,
} from "../lib/site-metadata";

export function PageHead() {
  const location = useLocation();
  const requestUrl = isServer
    ? (getRequestEvent()?.request.url ?? "http://localhost/")
    : window.location.href;
  const origin = siteOrigin(requestUrl);
  const metadata = createMemo(() => resolvePageMetadata(location.pathname));

  return (
    <>
      <Title>{metadata().title}</Title>
      <Meta name="description" content={metadata().description} />
      <Show when={metadata().path} fallback={<Meta name="robots" content="noindex,follow" />}>
        {(path) => {
          const url = () => pageUrl(path(), metadata().locale, origin);
          const availableLocales = () => pageLocales(path());
          const image = new URL("/newui-social.png", origin).href;
          const schema = () =>
            path() === "/"
              ? {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  name: siteName,
                  url: url(),
                  description: metadata().description,
                  inLanguage: metadata().locale,
                }
              : breadcrumbs(path(), metadata().locale, origin);

          return (
            <>
              <Meta name="robots" content="index,follow,max-image-preview:large" />
              <Link rel="canonical" href={url()} />
              <For each={availableLocales()}>
                {({ value }) => (
                  <Link rel="alternate" hreflang={value} href={pageUrl(path(), value, origin)} />
                )}
              </For>
              <Link rel="alternate" hreflang="x-default" href={pageUrl(path(), "pt-BR", origin)} />
              <Meta property="og:type" content={path() === "/" ? "website" : "article"} />
              <Meta property="og:url" content={url()} />
              <Meta property="og:site_name" content={siteName} />
              <Meta property="og:title" content={metadata().title} />
              <Meta property="og:description" content={metadata().description} />
              <Meta property="og:locale" content={getLocaleOption(metadata().locale).openGraph} />
              <For each={availableLocales().filter(({ value }) => value !== metadata().locale)}>
                {({ openGraph }) => <Meta property="og:locale:alternate" content={openGraph} />}
              </For>
              <Meta property="og:image" content={image} />
              <Meta property="og:image:width" content="1200" />
              <Meta property="og:image:height" content="630" />
              <Meta property="og:image:alt" content="NewUI · SolidJS" />
              <Meta name="twitter:card" content="summary_large_image" />
              <Meta name="twitter:title" content={metadata().title} />
              <Meta name="twitter:description" content={metadata().description} />
              <Meta name="twitter:image" content={image} />
              <Meta name="twitter:image:alt" content="NewUI · SolidJS" />
              <StructuredData data={schema()} />
            </>
          );
        }}
      </Show>
    </>
  );
}

function StructuredData(props: { data: object }) {
  useHead({
    tag: "script",
    id: createUniqueId(),
    setting: { close: true },
    props: {
      type: "application/ld+json",
      get children() {
        return JSON.stringify(props.data).replace(/</g, "\\u003c");
      },
    },
  });
  return null;
}
