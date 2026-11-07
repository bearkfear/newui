import { Button } from "../../actions/button/button";

export function IntroductionHero() {
  return (
    <section class="nui-catalog-hero">
      <p class="nui-catalog-eyebrow">SolidJS / Design system / Open canvas</p>
      <h1>
        A small foundation.
        <br />
        Room to build.
      </h1>
      <p class="nui-catalog-lead">
        Components with a clear purpose, expressive tokens, and Solid's fine-grained reactivity.
        Explore the details. Make them your own.
      </p>
      <nav class="nui-catalog-links" aria-label="Explore the catalog">
        <a href="?path=/docs/actions-button--documentation" target="_top">
          Explore Button →
        </a>
        <a href="?path=/story/foundations-tokens--colors" target="_top">
          Browse color tokens ↗
        </a>
      </nav>
    </section>
  );
}

export function IntroductionFeatures() {
  return (
    <div class="nui-catalog-grid">
      <article class="nui-catalog-card">
        <span class="nui-catalog-number">01 / EXPLORE</span>
        <h2>Built in the open</h2>
        <p>
          Real components, editable props, and visible states. Start with Button and follow the
          library as it grows.
        </p>
      </article>
      <article class="nui-catalog-card">
        <span class="nui-catalog-number">02 / ADAPT</span>
        <h2>Your own expression</h2>
        <p>
          Switch light and dark themes. Inspect semantic tokens. Adjust component variants without
          rebuilding a design language.
        </p>
      </article>
      <article class="nui-catalog-card">
        <span class="nui-catalog-number">03 / VERIFY</span>
        <h2>Details that matter</h2>
        <p>
          Inspect keyboard behavior, responsive canvases, and automated accessibility checks in one
          place.
        </p>
      </article>
    </div>
  );
}

export function IntroductionButtonDemo() {
  return (
    <section class="nui-catalog-section">
      <div class="nui-catalog-split">
        <div class="nui-catalog-stack">
          <p class="nui-catalog-eyebrow">The first building block</p>
          <h2>Simple API. Deliberate states.</h2>
          <p>Five variants, four sizes, native button semantics, and theme-aware CSS tokens.</p>
          <div class="nui-catalog-demo">
            <Button>Start building</Button>
            <Button variant="outline">Explore</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
        <div class="nui-catalog-stack">
          <p class="nui-catalog-eyebrow">Package usage</p>
          <pre>
            <code>
              {
                'import { Button } from "@egcs/newui";\nimport "@egcs/newui/styles.css";\n\n<Button variant="solid" size="md">\n  Start building\n</Button>'
              }
            </code>
          </pre>
          <p style={{ color: "var(--catalog-muted)", "font-size": "13px" }}>
            Compiled CSS, nui-prefixed utilities, and global Tailwind Preflight. Consumers do not
            need a Tailwind build.
          </p>
        </div>
      </div>
    </section>
  );
}
