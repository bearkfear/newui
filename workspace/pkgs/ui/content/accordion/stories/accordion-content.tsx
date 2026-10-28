import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Accordion } from "../accordion";

function MilestoneCounter() {
  const [reviews, setReviews] = createSignal(0);
  return (
    <div>
      <Button size="sm" variant="outline" onClick={() => setReviews(reviews() + 1)}>
        Reviews: {reviews()}
      </Button>
    </div>
  );
}

export function AccordionContentExample() {
  return (
    <Accordion.Root>
      <Accordion.Item value="milestones">
        <Accordion.ItemHeading>
          <Accordion.ItemTrigger>
            Review project milestones and prepare a detailed update for everyone in your workspace
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeading>
        <Accordion.ItemContent>
          <p>Content can contain lists, links, and independent controls.</p>
          <ul style={{ "padding-inline-start": "20px", "list-style": "disc" }}>
            <li>Review the proposed navigation.</li>
            <li>Share feedback with the team.</li>
          </ul>
          <MilestoneCounter />
          <p>The review count stays when you close and reopen this section.</p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
