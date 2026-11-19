import { Avatar, Text } from "@egcs/newui/content";

export function AvatarExample(props: { locale?: "pt-BR" | "en" }) {
  return (
    <div style={{ display: "flex", "align-items": "center", gap: "0.75rem" }}>
      <Avatar.Root aria-hidden="true" size="lg">
        <Avatar.Fallback>ML</Avatar.Fallback>
      </Avatar.Root>
      <div>
        <Text>Marina Lopes</Text>
        <Text size="7" tone="muted">
          {props.locale === "pt-BR" ? "Líder de design" : "Design lead"}
        </Text>
      </div>
    </div>
  );
}
