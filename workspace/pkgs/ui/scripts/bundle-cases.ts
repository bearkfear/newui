export interface BundleCase {
  name: string;
  contents: string;
}

export const chartCases: BundleCase[] = [
  { name: "Button only", contents: 'export { Button } from "@egcs/newui";' },
  { name: "Line chart", contents: 'export { LineChart } from "@egcs/newui/charts";' },
  {
    name: "Three chart types",
    contents: 'export { LineChart, BarChart, DonutChart } from "@egcs/newui/charts";',
  },
  {
    name: "Button and three chart types",
    contents:
      'export { Button } from "@egcs/newui/actions"; export { LineChart, BarChart, DonutChart } from "@egcs/newui/charts";',
  },
];

export const mixedEntries: BundleCase = {
  name: "Mixed main and area aliases",
  contents: `export { Button as RootButton } from "@egcs/newui";
export { Button as AreaButton } from "@egcs/newui/actions";
export { InputGroup } from "@egcs/newui/forms";`,
};

export const areaCases: BundleCase[] = [
  { name: "Button main", contents: 'export { Button } from "@egcs/newui";' },
  { name: "Button actions", contents: 'export { Button } from "@egcs/newui/actions";' },
  { name: "Input main", contents: 'export { Input } from "@egcs/newui";' },
  { name: "Input forms", contents: 'export { Input } from "@egcs/newui/forms";' },
  { name: "InputGroup forms", contents: 'export { InputGroup } from "@egcs/newui/forms";' },
  {
    name: "Button and InputGroup main",
    contents: 'export { Button, InputGroup } from "@egcs/newui";',
  },
  {
    name: "Button and InputGroup areas",
    contents:
      'export { Button } from "@egcs/newui/actions"; export { InputGroup } from "@egcs/newui/forms";',
  },
  mixedEntries,
  { name: "Heading content", contents: 'export { Heading } from "@egcs/newui/content";' },
  { name: "Table data", contents: 'export { Table } from "@egcs/newui/data";' },
  { name: "Loading feedback", contents: 'export { Loading } from "@egcs/newui/feedback";' },
  { name: "Container layout", contents: 'export { Container } from "@egcs/newui/layout";' },
  {
    name: "Breadcrumb navigation",
    contents: 'export { Breadcrumb } from "@egcs/newui/navigation";',
  },
  { name: "Dialog overlays", contents: 'export { Dialog } from "@egcs/newui/overlays";' },
  { name: "Panel compositions", contents: 'export { Panel } from "@egcs/newui/compositions";' },
  ...chartCases.slice(1),
];
