import type { NavigationModel } from "../../stories/navigation-model";
import { VerticalMenu } from "../vertical-menu";

export function ProjectBranches(props: { model: NavigationModel }) {
  const href = () => `#${props.model.targetId}`;
  return (
    <VerticalMenu.Branch defaultOpen>
      <VerticalMenu.BranchTrigger>Projects</VerticalMenu.BranchTrigger>
      <VerticalMenu.BranchContent>
        <VerticalMenu.SubList>
          <VerticalMenu.Item>
            <VerticalMenu.Link
              href={href()}
              current={props.model.current() === "design"}
              onClick={() => props.model.select("design")}
            >
              Design system
            </VerticalMenu.Link>
          </VerticalMenu.Item>
          <VerticalMenu.Item>
            <VerticalMenu.Link
              href={href()}
              current={props.model.current() === "website"}
              onClick={() => props.model.select("website")}
            >
              Website refresh
            </VerticalMenu.Link>
          </VerticalMenu.Item>
          <VerticalMenu.Branch>
            <VerticalMenu.BranchTrigger>Archived projects</VerticalMenu.BranchTrigger>
            <VerticalMenu.BranchContent>
              <VerticalMenu.SubList>
                <VerticalMenu.Item>
                  <VerticalMenu.Link
                    href={href()}
                    current={props.model.current() === "research"}
                    onClick={() => props.model.select("research")}
                  >
                    Customer research
                  </VerticalMenu.Link>
                </VerticalMenu.Item>
              </VerticalMenu.SubList>
            </VerticalMenu.BranchContent>
          </VerticalMenu.Branch>
        </VerticalMenu.SubList>
      </VerticalMenu.BranchContent>
    </VerticalMenu.Branch>
  );
}
