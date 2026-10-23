import { Button } from "../../../actions/button/button";
import { ButtonGroup } from "../../../actions/button-group/button-group";

type PanelFiltersProps = {
  query: string;
  activeOnly: boolean;
  inputId: string;
  onQueryChange: (value: string) => void;
  onActiveOnlyChange: (value: boolean) => void;
};

export function PanelFilters(props: PanelFiltersProps) {
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <label for={props.inputId}>Search projects</label>
      <input
        id={props.inputId}
        type="search"
        value={props.query}
        onInput={(event) => props.onQueryChange(event.currentTarget.value)}
        placeholder="Search by name"
        style={{
          width: "100%",
          "min-width": "0",
          padding: "10px 12px",
          border: "1px solid var(--nui-control-border)",
          "border-radius": "6px",
          background: "var(--nui-background)",
          color: "var(--nui-foreground)",
          "outline-color": "var(--nui-focus-ring)",
        }}
      />
      <ButtonGroup size="sm" variant="soft" aria-label="Project status filters">
        <Button aria-pressed={!props.activeOnly} onClick={() => props.onActiveOnlyChange(false)}>
          All projects
        </Button>
        <Button aria-pressed={props.activeOnly} onClick={() => props.onActiveOnlyChange(true)}>
          Active only
        </Button>
      </ButtonGroup>
    </div>
  );
}
