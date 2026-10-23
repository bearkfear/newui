export const projects = [
  {
    id: "design",
    name: "Design system",
    description: "A shared language for the product.",
    active: true,
  },
  {
    id: "website",
    name: "Website refresh",
    description: "A clearer welcome for new visitors.",
    active: true,
  },
  {
    id: "research",
    name: "Customer research",
    description: "Notes from the latest interviews.",
    active: false,
  },
] as const;
export type Project = (typeof projects)[number];
