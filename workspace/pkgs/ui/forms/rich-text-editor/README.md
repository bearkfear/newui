# Rich Text Editor

[Forms](../README.md)

Edits schema-backed documents with Tiptap 3.33.0 over ProseMirror. newui integrates the vanilla
editor lifecycle directly with Solid; it does not depend on a community framework binding.

```tsx
<Field.Root>
  <Field.Label>Article</Field.Label>
  <RichTextEditor.Root value={document()} onValueChange={(details) => setDocument(details.value)}>
    <RichTextEditor.Toolbar />
    <RichTextEditor.Content />
    <RichTextEditor.CharacterCount />
  </RichTextEditor.Root>
  <Field.Description>Use headings to organize the article.</Field.Description>
</Field.Root>;
```

## Contract

`value` and `defaultValue` are `RichTextDocument` JSON values. `value` is controlled;
`defaultValue` initializes an uncontrolled editor once. `onValueChange` supplies canonical `value`,
normalized `html`, plain `text`, and `empty`. JSON is the persistence contract; HTML and text are
derived representations.

The fixed schema supports paragraphs, headings 2–3, bold, italic, underline, strike, inline code,
links, bullet and ordered lists, blockquotes, code blocks, hard breaks, and horizontal rules. The
default Toolbar exposes the primary subset and can be replaced with composed action parts. Images are supported; tables, embeds, colors, arbitrary fonts, mentions, Markdown, collaboration, and comments are not
part of this version.

Root shares Field's size, tone, valid, invalid, loading, disabled, readonly, description, and label
associations. Content is required and mounts the contenteditable surface. Toolbar buttons retain
native Tab navigation and return focus to the editor after commands. CharacterCount uses Tiptap's
text-size counter and displays `maxCharacters` when configured.

`name` adds a hidden form control. `submitValue="json"` is the default; `html` and `text` are also
available. Uncontrolled editors restore `defaultValue` after an uncanceled native reset. Controlled
editors keep application-owned reset state. Rich text has no native constraint-validation element:
`required` exposes accessible state, while the application validates `empty` and prevents submission.

## Helpers and legacy HTML

Import `parseRichTextHtml`, `renderRichTextHtml`, `extractRichText`, `isRichTextEmpty`, and
`validateRichTextDocument` from `@egcs/newui/rich-text`. This DOM-independent entry works in Node,
SSR, and browsers without mounting Solid or the editor.

HTML import is schema normalization, not lossless conversion. Unsupported elements, attributes, and
inline styles may be removed or reduced to supported content. Rendering imported or external HTML
still requires an application-appropriate sanitization policy. The editor and helpers use the same
fixed schema, so helper output can be opened by the component.

## Storybook examples

Forms / Rich Text Editor includes default, controlled representations, native submission/reset,
legacy HTML helpers, states, empty, dark, and mobile examples.

## Pasted images

Set `imagePaste="embedded"` to store clipboard image files as data URLs in the document.
Alternatively, pass `imagePaste={async (file) => uploadImage(file)}` to upload a file and return
a persistent image URL. Image-file paste is disabled by default. HTML image elements are supported
by the shared schema regardless of this setting. Applications must validate files and URLs and
apply their own content security and sanitization policies. Embedded images can make JSON and
HTML substantially larger; plain text does not contain images.

A processing indicator marks the insertion position while reading or uploading. Errors are reported
through `onImagePasteError(error, file)`; failed images are not inserted. Pasted images initially have empty alt text. Select an image to open controls next to it for alternative text, pixel width, and removal.
Leave alternative text empty only for decorative images. Drag the lower-right handle to resize
the selected image while preserving its proportions. Width and height are saved in the document.
Custom toolbars may also include `RichTextEditor.ImageAlt`. When image files are present, they take precedence over other
clipboard content. The selected text is preserved, and images are inserted after the selection.
