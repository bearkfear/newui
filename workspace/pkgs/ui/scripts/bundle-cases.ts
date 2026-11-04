export interface BundleCase {
  name: string;
  contents: string;
}

export const chartCases: BundleCase[] = [
  { name: "Button only", contents: 'export { Button } from "newui";' },
  { name: "Line chart", contents: 'export { LineChart } from "newui/charts";' },
  {
    name: "Three chart types",
    contents: 'export { LineChart, BarChart, DonutChart } from "newui/charts";',
  },
  {
    name: "Button and three chart types",
    contents:
      'export { Button } from "newui/actions"; export { LineChart, BarChart, DonutChart } from "newui/charts";',
  },
];

export const mixedEntries: BundleCase = {
  name: "Mixed main and area aliases",
  contents: `export { Button as RootButton } from "newui";
export { Button as AreaButton } from "newui/actions";
export { InputGroup } from "newui/forms";`,
};

export const areaCases: BundleCase[] = [
  { name: "Button main", contents: 'export { Button } from "newui";' },
  { name: "Button actions", contents: 'export { Button } from "newui/actions";' },
  { name: "Input main", contents: 'export { Input } from "newui";' },
  { name: "Input forms", contents: 'export { Input } from "newui/forms";' },
  { name: "InputGroup forms", contents: 'export { InputGroup } from "newui/forms";' },
  {
    name: "Button and InputGroup main",
    contents: 'export { Button, InputGroup } from "newui";',
  },
  {
    name: "Button and InputGroup areas",
    contents: 'export { Button } from "newui/actions"; export { InputGroup } from "newui/forms";',
  },
  mixedEntries,
  { name: "Heading content", contents: 'export { Heading } from "newui/content";' },
  { name: "Table data", contents: 'export { Table } from "newui/data";' },
  { name: "Loading feedback", contents: 'export { Loading } from "newui/feedback";' },
  { name: "Container layout", contents: 'export { Container } from "newui/layout";' },
  { name: "Breadcrumb navigation", contents: 'export { Breadcrumb } from "newui/navigation";' },
  { name: "Dialog overlays", contents: 'export { Dialog } from "newui/overlays";' },
  { name: "Panel compositions", contents: 'export { Panel } from "newui/compositions";' },
  ...chartCases.slice(1),
];
