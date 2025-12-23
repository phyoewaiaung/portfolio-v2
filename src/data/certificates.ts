export type Certificate = {
  id: string;

  year: number;
  level: 1 | 2 | 3 | 4 | 5; // visual growth

  title: string;
  issuer: string;
  location: string;
  date: string;

  description: string;
  link: string;
  skills: string[];
};

export const certificates: Certificate[] = [
  {
    id: "frontend-react",
    year: 2023,
    level: 4,

    title: "Frontend Development with React",
    issuer: "freeCodeCamp",
    location: "Online",
    date: "2023",

    description:
      "Comprehensive React development course covering hooks, state management, and modern frontend patterns.",

    link: "https://www.freecodecamp.org/certification/your-cert-link",

    skills: ["React", "JavaScript", "CSS", "HTML", "State Management"],
  },
  {
    id: "fullstack",
    year: 2022,
    level: 3,

    title: "Full-Stack Web Development",
    issuer: "Coursera",
    location: "Online",
    date: "2022",

    description:
      "Complete full-stack development program covering frontend, backend, and deployment strategies.",

    link: "https://coursera.org/verify/your-cert-link",

    skills: ["Node.js", "Express", "MongoDB", "React", "REST APIs"],
  },
  {
    id: "typescript",
    year: 2023,
    level: 4,

    title: "Advanced TypeScript",
    issuer: "Udemy",
    location: "Online",
    date: "2023",

    description:
      "Advanced TypeScript concepts including generics, decorators, and enterprise-level patterns.",

    link: "https://udemy.com/certificate/your-cert-link",

    skills: [
      "TypeScript",
      "Advanced Types",
      "Generics",
      "Decorators",
      "Node.js",
    ],
  },
];
