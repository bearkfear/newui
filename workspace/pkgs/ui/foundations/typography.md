# Typography

[Foundations](README.md)

`metrics.css` owns the default type metrics. Values preserve the existing catalog. Font sizes use rem; pixel equivalents below assume a 16px root. Do not lock the document font size to prevent browser scaling.

| Public token suffix (`--nui-font-size-*`) | Default             | Purpose                                             |
| ----------------------------------------- | ------------------- | --------------------------------------------------- |
| xs                                        | 0.75rem / 12px      | Supporting text and compact labels                  |
| sm                                        | 0.875rem / 14px     | Compact controls and descriptions                   |
| base                                      | 1rem / 16px         | Body text and regular controls                      |
| lg                                        | 1.125rem / 18px     | Large controls and editorial text                   |
| xl                                        | 1.25rem / 20px      | Section headings                                    |
| 2xl                                       | 1.5rem / 24px       | Section headings                                    |
| 3xl / 4xl / 5xl                           | 1.875 / 2.25 / 3rem | Utility scale; 5xl is the largest Heading/Text size |
| display-sm / display-md                   | 2 / 2.5rem          | Existing Heading/Text sizes 3 and 2                 |

Heading sizes 1–6 map to 5xl, display-md, display-sm, 2xl, xl, and base. Text uses the same mapping, plus size 7 = xs. These numeric APIs preserve the validated scale; they are not HTML heading levels. Choose Heading.as by document hierarchy. Heading defaults to h2/size 3; Text defaults to p/size 6.

`--nui-leading-tight`, `snug`, `normal`, and `relaxed` default to 1.25, 1.375, 1.5, and 1.625. Headings use tight for sizes 1–4 and snug for 5–6. Text uses tight for 1–4 and relaxed for 5–7. Weight tokens `--nui-font-weight-normal`, `medium`, and `semibold` are 400, 500, and 600. Heading tracking uses `--nui-tracking-tight` (-0.025em).

`--nui-font-sans` and `--nui-font-mono` expose local system font stacks without loading a web font. Preflight uses them for document defaults. Components normally inherit the host font family. A local font override must set font-family on its container as well as defining the token when needed. Prose retains its relative editorial heading scale and monospace code styling.

The public size tokens feed compiled library utilities through Tailwind's inline theme aliases. Consumers only import `newui/styles.css`; they do not compile Tailwind. Scoped font-size overrides affect components using that size, including controls and descriptions. Component-specific pixel/rem values remain governed by their owning contracts.

Review Foundations / Typography alongside Content / Heading, Text, and Prose. Check long text, browser zoom, and narrow widths when customizing metrics.
