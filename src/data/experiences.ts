export type Experience = {
  id: string;

  year: number;
  level: 1 | 2 | 3 | 4 | 5; // visual growth

  company: string;
  role: string;
  location: string;
  period: string;

  headline: string;
  bullets: string[];

  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "xenoptics",
    year: 2024,
    level: 5,

    company: "Xenoptics Co., Ltd.",
    role: "Frontend Developer",
    location: "Thailand",
    period: "Oct 2023 – Present",

    headline:
      "Specialized in real-time network visualization and performance-critical dashboards.",

    bullets: [
      "Built NMS/EMS systems for monitoring networked machines",
      "Designed real-time visualizations for metrics and alerts",
      "Implemented scalable UI using Atomic Design principles",
    ],

    tech: ["TypeScript", "React", "Redux", "CytoscapeJS", "Canvas", "Docker"],
  },
  {
    id: "brycen-se",
    year: 2023,
    level: 3,

    company: "Brycen Myanmar Co., Ltd.",
    role: "Software Engineer",
    location: "Myanmar",
    period: "Aug 2022 – Sep 2023",

    headline:
      "Delivered full-stack systems across HR, booking, and resume platforms.",

    bullets: [
      "Developed HR Management, Online Booking, and Resume systems",
      "Built scalable frontends and robust backend services",
      "Worked in Agile/Scrum teams on production systems",
    ],

    tech: ["React", "Laravel", "Redis", "Node.js", "Socket.IO", "DigitalOcean"],
  },
  {
    id: "intern",
    year: 2022,
    level: 1,

    company: "Brycen Myanmar Co., Ltd.",
    role: "Frontend Developer Intern",
    location: "Myanmar",
    period: "May 2022 – Aug 2022",

    headline:
      "Built a strong foundation in frontend engineering and development workflows.",

    bullets: [
      "Training in JavaScript, React, and frontend fundamentals",
      "Learned security basics and networking concepts",
      "Practiced Git workflows, unit testing, and coding standards",
    ],

    tech: ["JavaScript", "React", "Git", "Testing"],
  },
];
