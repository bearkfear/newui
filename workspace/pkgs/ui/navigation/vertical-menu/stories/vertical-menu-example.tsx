import { splitProps } from "solid-js";
import type { NavigationModel } from "../../stories/navigation-model";
import { createNavigationModel } from "../../stories/navigation-model";
import { NavigationPreview } from "../../stories/navigation-preview";
import type { VerticalMenuRootProps } from "../vertical-menu";
import { VerticalMenu } from "../vertical-menu";
import { ProjectBranches } from "./project-branches";

export function VerticalMenuSample(props: VerticalMenuRootProps & { model: NavigationModel }) {
  const [local, rest] = splitProps(props, ["model"]);
  const href = () => `#${local.model.targetId}`;
  return (
    <VerticalMenu.Root {...rest}>
      <VerticalMenu.Group>
        <VerticalMenu.Label>Workspace</VerticalMenu.Label>
        <VerticalMenu.List>
          <VerticalMenu.Item>
            <VerticalMenu.Link
              href={href()}
              current={local.model.current() === "overview"}
              onClick={() => local.model.select("overview")}
            >
              Overview
            </VerticalMenu.Link>
          </VerticalMenu.Item>
          <ProjectBranches model={local.model} />
          <VerticalMenu.Item>
            <VerticalMenu.Link
              href={href()}
              current={local.model.current() === "changelog"}
              onClick={() => local.model.select("changelog")}
            >
              Changelog
            </VerticalMenu.Link>
          </VerticalMenu.Item>
        </VerticalMenu.List>
      </VerticalMenu.Group>
      <VerticalMenu.Group>
        <VerticalMenu.Label>Account</VerticalMenu.Label>
        <VerticalMenu.List>
          <VerticalMenu.Item>
            <VerticalMenu.Link
              href={href()}
              current={local.model.current() === "settings"}
              onClick={() => local.model.select("settings")}
            >
              Settings
            </VerticalMenu.Link>
          </VerticalMenu.Item>
          <VerticalMenu.Branch disabled>
            <VerticalMenu.BranchTrigger>Billing · coming soon</VerticalMenu.BranchTrigger>
            <VerticalMenu.BranchContent>Not available yet.</VerticalMenu.BranchContent>
          </VerticalMenu.Branch>
        </VerticalMenu.List>
      </VerticalMenu.Group>
    </VerticalMenu.Root>
  );
}
export function VerticalMenuExample(props: VerticalMenuRootProps) {
  const model = createNavigationModel();
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "24px", "align-items": "start" }}>
      <div style={{ flex: "0 1 18rem", "min-width": "0", width: "100%" }}>
        <VerticalMenuSample {...props} model={model} />
      </div>
      <div style={{ flex: "1 1 18rem", "min-width": "0" }}>
        <NavigationPreview model={model} />
      </div>
    </div>
  );
}
