import { MenuContent } from "../menu.content";
import { MenuGroup, MenuGroupLabel, MenuItem, MenuSeparator, MenuSubTrigger } from "../menu.parts";
import { MenuRoot } from "../menu.root";
import { MenuIcon } from "./menu-icon";

type ActionProps = { onAction: (action: string) => void; icons?: boolean };

export function DocumentActions(props: ActionProps) {
  const icon = (name: "open" | "duplicate" | "archive" | "delete") =>
    props.icons === false ? undefined : <MenuIcon name={name} />;
  return (
    <>
      <MenuGroup>
        <MenuGroupLabel>Project document</MenuGroupLabel>
        <MenuItem
          value="open"
          valueText="Open"
          icon={icon("open")}
          onSelect={() => props.onAction("Open")}
        >
          Open
        </MenuItem>
        <MenuItem
          value="duplicate"
          valueText="Duplicate"
          icon={icon("duplicate")}
          onSelect={() => props.onAction("Duplicate")}
        >
          Duplicate
        </MenuItem>
        <MenuRoot>
          <MenuSubTrigger>Share</MenuSubTrigger>
          <MenuContent>
            <MenuItem value="copy-link" onSelect={() => props.onAction("Copy link")}>
              Copy link
            </MenuItem>
            <MenuItem value="invite" onSelect={() => props.onAction("Invite people")}>
              Invite people
            </MenuItem>
            <MenuItem value="publish" disabled>
              Publish
            </MenuItem>
          </MenuContent>
        </MenuRoot>
        <MenuItem value="archive" valueText="Archive" icon={icon("archive")} disabled>
          Archive
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
      <MenuItem
        value="delete"
        valueText="Delete"
        destructive
        icon={icon("delete")}
        onSelect={() => props.onAction("Delete")}
      >
        Delete
      </MenuItem>
    </>
  );
}
