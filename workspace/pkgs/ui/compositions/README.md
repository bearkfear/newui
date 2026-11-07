# Compositions

[UI package](../README.md)

Combine components into larger interface structures and complete application examples.

## Components

- [Hero](hero/README.md): stacked or split opening section with optional media and actions.
- [Footer](footer/README.md): brand, responsive navigation groups, and metadata.
- [MediaObject](media-object/README.md): thumbnail, content, and responsive actions.
- [Panel](panel/README.md): header, filters, list, content, and footer actions.
- [ActionBar](action-bar/README.md): contextual information and wrapping actions.

Each public composition has a `Root` and named parts, uses shared Radix tokens and automatic themes, and leaves application state to the consumer. Navbar belongs to [Navigation](../navigation/README.md).

## Application examples

Storybook's Compositions / Overview combines all five into a responsive workspace. Individual stories include variants, mobile views, and local interactions.

[Compositions / Pages](pages/README.md) includes Analytics, Orders, Project, Service Status, and Help Center, each with desktop/mobile stories and a shared navigable Sidebar. These examples demonstrate chart data alternatives, empty lists, record details, confirmations, and local exports without adding public library APIs. See the page guide for the component map and example flows.
