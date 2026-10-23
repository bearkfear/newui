export function WorkshopScenes() {
  return (
    <section class="nui-catalog-section">
      <h2>Set the scene</h2>
      <div class="nui-catalog-grid">
        <article class="nui-catalog-card">
          <h3>Color & direction</h3>
          <p>
            Theme follows your system by default. Choose light or dark explicitly; the workshop
            follows too. Switch LTR / RTL to inspect reading direction.
          </p>
        </article>
        <article class="nui-catalog-card">
          <h3>Space & viewport</h3>
          <p>
            Use comfortable, compact, or flush canvas padding. Viewports cover 320px and 390px
            phones, a tablet, and a desktop. Padding does not change component sizes.
          </p>
        </article>
        <article class="nui-catalog-card">
          <h3>Motion & inspection</h3>
          <p>
            Respect system motion preferences or force reduced motion in the preview. Use
            Storybook's measure, outlines, zoom, and vision simulators to inspect the result.
          </p>
        </article>
      </div>
    </section>
  );
}
