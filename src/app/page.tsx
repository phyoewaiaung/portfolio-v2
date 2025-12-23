import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import CertificatesGrid from "@/components/CertificatesGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Hero />
      <ExperienceTimeline items={experiences} />
      <EducationTimeline items={education} />
      <CertificatesGrid items={certificates} />
      {/* <Skills />
      <Contact /> */}
    </main>
  );
}
