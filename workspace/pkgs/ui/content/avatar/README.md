# Avatar

A styled wrapper around Ark UI Solid Avatar. Ark owns image loading, source changes, status events, and fallback visibility; newui supplies size, shape, and Radix styling.

## API

- `Avatar.Root`: Ark Root props plus `size` xs (24px), sm (32px), md (default, 40px), lg (48px), xl (64px), and `shape` circle (default) or square with rounded corners.
- `Avatar.Image`: Ark Image props, including src, alt, events, and refs. Images fill the avatar with object-fit cover.
- `Avatar.Fallback`: Ark Fallback props and explicit children, such as initials or a decorative icon. Initials are not generated automatically.
- `onStatusChange` reports Ark's image status. Root, Image, and Fallback preserve Ark's composition props, including Solid's render-function `asChild` API.

Public types: `AvatarRootProps`, `AvatarImageProps`, and `AvatarFallbackProps`.

```tsx
<Avatar.Root role="img" aria-label="Alex Morgan" size="lg">
  <Avatar.Image src="/alex.jpg" alt="" />
  <Avatar.Fallback>AM</Avatar.Fallback>
</Avatar.Root>;
```

Name the root as an image so its identity remains available while loading or after an image error; the nested image can have empty alt text. If adjacent visible text already names the owner, the entire avatar can be aria-hidden instead. Avatar itself adds no button behavior or focus stop. Compose a native control when the avatar must perform an action.

Root uses a fixed size and clips image content to its shape. Fallback is visible while loading, when no image is supplied, or after failure; it is hidden when the image loads. Keep fallback text short so it fits the selected size.

Review Content / Avatar for image and initials, failure/recovery, shapes, sizes, and redundant-image semantics. The implementation has been validated by the user; no new automated tests were added.
