import { Card } from "../../../content/card/card";
import { PageLoading } from "../page-loading";

export function SectionLoading() {
  return (
    <Card.Root style={{ "max-width": "40rem" }}>
      <Card.Header>
        <Card.Title>Workspace projects</Card.Title>
        <Card.Description>Shared projects and recent updates.</Card.Description>
      </Card.Header>
      <PageLoading
        layout="section"
        label="Loading projects…"
        description="Fetching the latest workspace activity."
      />
    </Card.Root>
  );
}
