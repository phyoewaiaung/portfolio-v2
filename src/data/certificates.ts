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
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "rockstar-developer",
    year: 2023,
    level: 5,

    title: "Rockstar Developer ",
    issuer: "Tech Academy",
    location: "Online",
    date: "2023",

    description:
      "Advanced developer program focusing on full-stack development, cloud architecture, and modern software practices.",

    link: "https://techacademy.com/verify/rockstar-cert",

    skills: [
      "Full-Stack Development",
      "Cloud Architecture",
      "DevOps",
      "Microservices",
      "React",
    ],
    image: "/images/certs/rockstar.png",
  },
  {
    id: "professional-certificate",
    year: 2023,
    level: 4,

    title: "Professional Web Developer",
    issuer: "edX",
    location: "Online",
    date: "2023",

    description:
      "Professional certificate program covering software engineering principles, design patterns, and industry best practices.",

    link: "https://edx.org/verify/professional-cert",

    skills: [
      "Software Engineering",
      "Design Patterns",
      "Testing",
      "Agile",
      "Git",
    ],
    image: "/images/certs/professional.png",
  },
  {
    id: "frontend-internship",
    year: 2022,
    level: 1,

    title: "Frontend Development Internship",
    issuer: "Brycen Myanmar Co., Ltd.",
    location: "Myanmar",
    date: "2022",

    description:
      "Completed intensive frontend development internship program focusing on JavaScript, React, and modern web development practices.",

    link: "https://www.brycenmyanmar.com.mm/",

    skills: [
      "JavaScript",
      "React",
      "PHP",
      "Git",
      "Testing",
      "Frontend Fundamentals",
      "Security Basics",
      "Networking Concepts",
    ],
    image: "/images/certs/intern.png",
  },
  {
    id: "datastructures",
    year: 2022,
    level: 5,

    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    location: "Online",
    date: "2022",

    description:
      "Master fundamental data structures and algorithms essential for efficient problem-solving and software development.",

    link: "https://coursera.org/verify/datastructures-cert",

    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Big O Notation",
      "Python",
    ],
    image: "/images/certs/datastructure.png",
  },
  {
    id: "web-development",
    year: 2022,
    level: 4,

    title: "HTML, CSS, JavaScript for Web Developers",
    issuer: "Coursera",
    location: "Online",
    date: "2022",

    description:
      "Comprehensive web development course covering modern HTML5, CSS3, and JavaScript ES6+ features and best practices.",

    link: "https://coursera.org/verify/web-dev-cert",

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "Responsive Design",
      "Web Standards",
    ],
    image: "/images/certs/html,css,js for web developers.jpeg",
  },
  {
    id: "responsive-design",
    year: 2022,
    level: 3,

    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    location: "Online",
    date: "2022",

    description:
      "Learn modern responsive web design techniques using CSS Grid, Flexbox, and mobile-first design principles.",

    link: "https://freecodecamp.org/certification/responsive-web-design",

    skills: [
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
      "Mobile-First",
      "Media Queries",
    ],
    image: "/images/certs/responsive.png",
  },
];
