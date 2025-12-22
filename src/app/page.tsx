import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import { experiences } from "@/data/experiences";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
      <ExperienceTimeline items={experiences} />
      {/* <Skills />
      <Contact /> */}
    </main>
  );
}
