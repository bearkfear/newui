# Library philosophy

[Workspace](README.md)

## Purpose

Build newui, our own library for SolidJS interfaces with a consistent visual language, accessible behavior, and flexible composition. It should help build both an isolated control and a complete page.

## Organize by intended use

Areas reflect what someone wants to do: organize a page, present content, execute an action, fill out a form, or navigate an interface. Tokens, recipes, and wrappers describe implementation and can span several areas.

Each resource has one primary area. Links and examples connect related areas. Parts of a family stay together: `Field.Label` belongs in Field documentation. Color and size variations stay with the component they modify.

Purpose guides ambiguous cases. Select belongs to Forms even when it opens a panel. A command menu belongs to Actions; a group of links belongs to Navigation.

## Compose before multiplying

Create a component when it has a distinct usage, behavior, or structure contract worth maintaining. Use recipes for styling patterns, variants for differences within the same contract, and compositions for combinations of existing pieces. A useful example does not have to become a new public API.

Accessibility, keyboard interaction, focus, themes, responsiveness, and states are part of each resource's definition. Parts must support composition while preserving their associations and behavior.

## Learn from references

Solid UI provides an initial reference for the catalog, visual design, and reusable code. Bulma inspires additions in layout, content, and compositions. Ark UI is the planned base for interactive behavior where suitable. Tailwind, tailwind-variants, and Radix Colors are part of the recorded technical direction.

References help us make our own decisions. Copying an entire catalog or following every change in another library is not a goal. Reusing code requires checking its license and preserving applicable notices.

## Build with evidence

Start with a small sample, validate its contracts, and expand with real examples. Keep open decisions explicit. Planned documentation does not mean delivered functionality.

The [existing architecture](architecture.md) records technical decisions, and the [roadmap](roadmap.md) organizes their implementation.

## Identity

The project name is **newui**. It will have its own visual identity, using Solid UI as the initial reference. The specific visual language will be developed through the foundations and first components.
