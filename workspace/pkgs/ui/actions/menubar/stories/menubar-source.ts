export const menubarSource = `import { Menubar } from "newui";
import "newui/styles.css";

function createDocument() { console.log("New document"); }
function openProposal() { console.log("Open proposal"); }
function undo() { console.log("Undo"); }

<Menubar.Root aria-label="Document commands">
  <Menubar.Menu value="file">
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item value="new" onSelect={createDocument}>New document</Menubar.Item>
      <Menubar.SubRoot>
        <Menubar.SubTrigger>Open recent</Menubar.SubTrigger>
        <Menubar.SubContent>
          <Menubar.Item value="proposal" onSelect={openProposal}>Proposal</Menubar.Item>
        </Menubar.SubContent>
      </Menubar.SubRoot>
      <Menubar.Separator />
      <Menubar.Item value="print" disabled>Print</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu value="edit">
    <Menubar.Trigger>Edit</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item value="undo" onSelect={undo}>Undo</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>`;
