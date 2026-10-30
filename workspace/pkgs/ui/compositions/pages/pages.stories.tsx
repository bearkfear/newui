import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ExamplePages } from "./example-pages";

const meta = {
  title: "Compositions/Pages",
  globals: { spacing: "flush" },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "Five complete page compositions: analytics, order management, project delivery, service status, and a help center. The shared responsive Sidebar navigates between pages and becomes a Sheet on mobile. All examples follow the theme toolbar. State and records are local; exports download CSV files. No backend, form components, new public APIs, or automated tests are introduced.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Analytics: Story = { render: () => <ExamplePages initialPage="analytics" /> };
export const Orders: Story = { render: () => <ExamplePages initialPage="orders" /> };
export const Project: Story = { render: () => <ExamplePages initialPage="project" /> };
export const ServiceStatus: Story = { render: () => <ExamplePages initialPage="status" /> };
export const HelpCenter: Story = { render: () => <ExamplePages initialPage="help" /> };
const mobile = { viewport: { value: "smallMobile", isRotated: false } };
export const AnalyticsMobile: Story = { ...Analytics, globals: mobile };
export const OrdersMobile: Story = { ...Orders, globals: mobile };
export const ProjectMobile: Story = { ...Project, globals: mobile };
export const ServiceStatusMobile: Story = { ...ServiceStatus, globals: mobile };
export const HelpCenterMobile: Story = { ...HelpCenter, globals: mobile };
