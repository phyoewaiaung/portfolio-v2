import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
      <ExperienceTimeline />
      <Skills />
      <Contact />
    </main>
  );
}
