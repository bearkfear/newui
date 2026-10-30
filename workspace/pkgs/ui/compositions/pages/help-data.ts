export const helpArticles = [
  {
    id: "first-project",
    category: "Workspace",
    title: "A thoughtful start to your first project",
    summary: "Turn a blank workspace into a clear plan for your team.",
    readTime: "4 min read",
    sections: [
      {
        title: "Start with the outcome",
        text: "Give your project a short, memorable name and write down what success looks like. A clear outcome gives the team something useful to return to when priorities change.",
      },
      {
        title: "Make the next step small",
        text: "Add the first few tasks, choose an owner for each, and agree on a milestone. You do not need to plan every detail to begin making progress.",
      },
      {
        title: "Keep a shared rhythm",
        text: "Share a brief update each week. Include what moved forward, what needs a decision, and where someone could use a hand.",
      },
    ],
  },
  {
    id: "billing",
    category: "Billing",
    title: "Understand your workspace billing",
    summary: "Plans, invoices, and a clear view of what you pay for.",
    readTime: "3 min read",
    sections: [
      {
        title: "One workspace, one plan",
        text: "Your subscription covers the workspace. Monthly plans renew on the same day each month; annual plans renew once a year. The Orders page shows payments and outstanding balances.",
      },
      {
        title: "Keep your records close",
        text: "Open any order to see its plan, customer, amount, and payment status. Export the current order view as a CSV file when you need to reconcile your records.",
      },
    ],
  },
  {
    id: "collaboration",
    category: "Collaboration",
    title: "Build a team rhythm that lasts",
    summary: "Less chasing updates. More room for focused work.",
    readTime: "5 min read",
    sections: [
      {
        title: "Give updates a home",
        text: "Use the project activity feed to keep decisions and milestones together. A short written update helps teammates in different time zones catch up without another meeting.",
      },
      {
        title: "Follow what matters",
        text: "Follow the projects you work on directly. Pause notifications when you only need to check in occasionally, and keep ownership visible so questions reach the right person.",
      },
    ],
  },
  {
    id: "reporting",
    category: "Workspace",
    title: "Find the story behind your numbers",
    summary: "Read trends, compare periods, and share a useful report.",
    readTime: "4 min read",
    sections: [
      {
        title: "Begin with the question",
        text: "Choose a reporting period and compare it with the previous one. Revenue, active customers, and acquisition cost each tell a different part of the story.",
      },
      {
        title: "Look beyond the chart",
        text: "Open View data below a chart to read its exact values. Compare channels in the bar list, then export the revenue report to share with your team.",
      },
    ],
  },
] as const;

export type HelpArticle = (typeof helpArticles)[number];

export const helpFaqs = [
  {
    question: "Can I work with more than one team?",
    answer:
      "Yes. Keep each team's projects and decisions in its own workspace so people can focus on what is relevant to them.",
  },
  {
    question: "Where can I find my invoices?",
    answer:
      "Visit Orders from the workspace navigation. Open an order to review its amount, plan, and payment status, or export the list for your records.",
  },
  {
    question: "How do I know if a service is down?",
    answer:
      "Open Service status for a summary of monitored services, recent incident notes, and scheduled maintenance.",
  },
];
