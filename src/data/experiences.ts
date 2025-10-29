export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
  kpis?: string[]; // ← optional badges
};

export const experiences: Experience[] = [
  {
    company: "Xenoptics Comp Ltd. (Thailand)",
    role: "Frontend Developer",
    start: "Oct 2023",
    end: "Present",
    description:
      "Built real-time network visualizations and dashboards. Collaborated with backend to integrate APIs and alerts.",
    tech: ["React", "TypeScript", "Cytoscape.js", "Material-UI"],
    kpis: ["-30% load", "Realtime viz", "A11y pass"],
  },
  {
    company: "Brycen Myanmar Co., Ltd.",
    role: "Software Engineer",
    start: "Aug 2022",
    end: "Sep 2023",
    description:
      "Frontend for booking & HR systems. Improved render performance and DX.",
    tech: ["React", "TypeScript", "Laravel", "PHP", "Core-UI"],
    kpis: ["+25% feature velocity"],
  },
  {
    company: "Brycen Myanmar Co., Ltd.",
    role: "Software Engineer Intern",
    start: "May 2022",
    end: "Aug 2022",
    description:
      "Registration systems using React/Laravel; API design and team workflows.",
    tech: ["JavaScript", "PHP", "Laravel", "React"],
  },
];
