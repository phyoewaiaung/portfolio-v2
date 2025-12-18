"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  ExternalLink,
  TrendingUp,
  FileCheck,
} from "lucide-react";

/* ======================================================
   Types & Sample Data
====================================================== */

type JourneyType = "work" | "education" | "award" | "certificate" | "course";

export type JourneyItem = {
  id: string;
  type: JourneyType;
  title: string;
  organization: string;
  location: string;
  date: string;
  year: number;
  description: string;
  highlights?: string[];
  skills?: string[];
  link?: string;
  certificateUrl?: string;
  level?: number;
};

const SAMPLE_JOURNEY: JourneyItem[] = [
  {
    id: "intern-2022",
    type: "education",
    title: "Frontend Developer – Internship",
    organization: "Brycen Myanmar Co., LTD",
    location: "Myanmar",
    date: "May 2022 – Aug 2022",
    year: 2022,
    description:
      "Hands-on training in modern web development, security basics, networking, and team workflows.",
    highlights: [
      "React fundamentals & patterns",
      "Security basics & networking",
      "Coding standards, tests, Git flows",
    ],
    skills: ["JavaScript", "React", "Git", "Testing"],
    level: 1,
  },
  {
    id: "brycen-se",
    type: "work",
    title: "Software Engineer",
    organization: "Brycen Myanmar Co., LTD",
    location: "Myanmar",
    date: "Aug 2022 – Sept 2023",
    year: 2022,
    description:
      "Delivered full-stack features from polished UIs to robust backends.",
    highlights: [
      "HR Management System",
      "Online Booking Platform",
      "Resume Management System",
    ],
    skills: ["React", "Laravel", "Redis", "Socket.IO"],
    level: 2,
  },
  {
    id: "xenoptics",
    type: "work",
    title: "Frontend Developer",
    organization: "Xenoptics Co., LTD",
    location: "Thailand",
    date: "Oct 2023 – Present",
    year: 2023,
    description:
      "Built NMS/EMS dashboards with real-time visualization and performance monitoring.",
    highlights: [
      "Atomic Design System",
      "Real-time dashboards",
      "CytoscapeJS & Canvas graphs",
    ],
    skills: ["TypeScript", "React", "Redux", "Docker"],
    level: 4,
  },
];

/* ======================================================
   Layout Constants
====================================================== */

const CARD_WIDTH = 580;
const CARD_GAP = 100;
const TOTAL_ITEM_WIDTH = CARD_WIDTH + CARD_GAP;
const SVG_START_X = 200;

/* ======================================================
   Main Component
====================================================== */

export default function ExperienceTimeline({
  items = SAMPLE_JOURNEY,
}: {
  items?: JourneyItem[];
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="journey" className="relative w-full">
      <div className="mx-auto max-w-7xl px-6">
        <Header />
      </div>

      {isLargeScreen ? (
        <HorizontalTimeline items={items} />
      ) : (
        <VerticalTimeline items={items} />
      )}
    </section>
  );
}

/* ======================================================
   Header
====================================================== */

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 mb-4">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        <span className="text-sm text-emerald-300">Growth Timeline</span>
      </div>

      <h2 className="text-4xl md:text-6xl font-black mb-2">
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          My Journey
        </span>
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto">
        A continuous path of growth, learning, and achievement
      </p>
    </motion.div>
  );
}

/* ======================================================
   Horizontal Timeline (LENIS + SCROLL)
====================================================== */

function HorizontalTimeline({ items }: { items: JourneyItem[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalWidth =
    items.length * TOTAL_ITEM_WIDTH + 600;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(totalWidth - window.innerWidth)]
  );

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="absolute inset-0 flex items-center"
        >
          <TimelineSVG items={items} progress={scrollYProgress} />

          <div
            className="relative flex items-center h-full px-16"
            style={{ width: totalWidth }}
          >
            {items.map((item, index) => (
              <HorizontalJourneyCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================================================
   Vertical Timeline (Mobile)
====================================================== */

function VerticalTimeline({ items }: { items: JourneyItem[] }) {
  return (
    <div className="relative max-w-xl mx-auto pt-8 pb-20">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-700/50" />
      {items.map((item, i) => (
        <VerticalJourneyCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

/* ======================================================
   Timeline SVG
====================================================== */

function TimelineSVG({
  items,
  progress,
}: {
  items: JourneyItem[];
  progress: any;
}) {
  const baseY = 60;
  const levelHeight = 60;

  const path = useMemo(() => {
    if (!items.length) return "";
    let p = "";
    items.forEach((item, i) => {
      const x = SVG_START_X + i * TOTAL_ITEM_WIDTH;
      const y = baseY + (5 - (item.level || 1)) * levelHeight;
      if (i === 0) p += `M ${x} ${y}`;
      else {
        const px = SVG_START_X + (i - 1) * TOTAL_ITEM_WIDTH;
        const py =
          baseY + (5 - (items[i - 1].level || 1)) * levelHeight;
        p += ` C ${px + 200} ${py}, ${x - 200} ${y}, ${x} ${y}`;
      }
    });
    return p;
  }, [items]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <motion.path
        d={path}
        fill="none"
        stroke="url(#g)"
        strokeWidth={3}
        style={{ pathLength: progress }}
      />
    </svg>
  );
}

/* ======================================================
   Cards
====================================================== */

function HorizontalJourneyCard({
  item,
  index,
}: {
  item: JourneyItem;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative flex-shrink-0"
      style={{
        width: CARD_WIDTH,
        marginLeft:
          index === 0
            ? SVG_START_X - CARD_WIDTH / 2
            : CARD_GAP,
      }}
    >
      <JourneyCardContent item={item} />
    </motion.div>
  );
}

function VerticalJourneyCard({
  item,
  index,
}: {
  item: JourneyItem;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      className="pl-16 py-6"
    >
      <JourneyCardContent item={item} />
    </motion.div>
  );
}

/* ======================================================
   Card Content
====================================================== */

function JourneyCardContent({ item }: { item: JourneyItem }) {
  return (
    <article className="rounded-2xl bg-slate-900/70 border border-slate-700 p-8 backdrop-blur-md">
      <div className="flex justify-between mb-4">
        <span className="text-emerald-400 font-bold">{item.year}</span>
        <span className="text-xs text-slate-400">{item.type}</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-1">
        {item.title}
      </h3>
      <p className="text-emerald-300 mb-3">
        {item.organization}
      </p>

      <p className="text-slate-300 mb-4">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 text-sm text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {item.date}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {item.location}
        </span>
      </div>
    </article>
  );
}
