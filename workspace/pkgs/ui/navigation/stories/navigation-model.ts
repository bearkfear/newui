import { createSignal, createUniqueId } from "solid-js";

export const navigationPages = {
  overview: {
    title: "Workspace overview",
    description: "A clear starting point for your projects, team, and next steps.",
  },
  guides: {
    title: "Guides",
    description: "A few practical notes to help you find your way around.",
  },
  components: {
    title: "Components",
    description: "Build with consistent typography, layouts, and native navigation.",
  },
  changelog: { title: "Changelog", description: "Small improvements, shared with the whole team." },
  design: {
    title: "Design system",
    description: "A shared language for the product and the people building it.",
  },
  website: { title: "Website refresh", description: "A clearer welcome for everyone who visits." },
  research: {
    title: "Customer research",
    description: "Archived notes from the latest customer interviews.",
  },
  settings: {
    title: "Workspace settings",
    description: "A home for your preferences and team configuration.",
  },
} as const;
export type NavigationPage = keyof typeof navigationPages;

export function createNavigationModel() {
  const [current, select] = createSignal<NavigationPage>("overview");
  return { current, select, targetId: `${createUniqueId()}-navigation-page` };
}
export type NavigationModel = ReturnType<typeof createNavigationModel>;
