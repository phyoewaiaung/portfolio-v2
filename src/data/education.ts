export type Education = {
  id: string;

  year: number;
  level: 1 | 2 | 3 | 4 | 5; // visual growth

  institution: string;
  degree: string;
  location: string;
  period: string;
  logo: string;

  headline: string;
  bullets: string[];
};

export const education: Education[] = [
  {
    id: "greenwich",
    year: 2025,
    level: 5,

    institution: "University of Greenwich",
    degree: "Bachelor of Computing (Hons)",
    location: "London, United Kingdom",
    period: "2025 – 2026",
    logo: "/images/greenwich.png",

    headline:
      "Completed Bachelor of Computing with focus on modern software development and user experience design.",

    bullets: [
      "Requirements Management & Enterprise Web Development",
      "Human Computer Interaction & Design",
      "Mobile Design & Development",
      "Software Project Management",
    ],
  },
  {
    id: "yadanarbon",
    year: 2017,
    level: 3,

    institution: "University of Technology (Yadanarbon Cyber City)",
    degree: "Bachelor of Computer Science",
    location: "Myanmar",
    period: "2017 – 2020",
    logo: "/images/utycc.jpg",

    headline:
      "Partially completed core computer science foundation with strong focus on programming and software development.",

    bullets: [
      "Object-Oriented Programming (C++)",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development (J2EE, J2SE)",
      "Software Development Methodologies",
    ],
  },
];
