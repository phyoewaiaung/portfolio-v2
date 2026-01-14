import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import CertificatesGrid from "@/components/CertificatesGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingSocialIcons, {
  FloatingContactButton,
  FloatingDownloadCV,
} from "@/components/FloatingSocialIcons";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { certificates } from "@/data/certificates";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />

      {/* Floating Social Icons - Right Side */}
      <FloatingSocialIcons
        position="right"
        variant="vertical"
        socialLinks={[
          {
            iconName: "Github",
            href: "https://github.com/phyoewaiaung",
            label: "GitHub",
            color: "hover:bg-gray-800",
          },
          {
            iconName: "Linkedin",
            href: "https://linkedin.com/in/phyoewaiaung082/",
            label: "LinkedIn",
            color: "hover:bg-blue-600",
          },
          {
            iconName: "Mail",
            href: "mailto:phyowaiaung.pxyo@gmail.com",
            label: "Email",
            color: "hover:bg-red-600",
          },
          {
            iconName: "Phone",
            href: "tel:+660629852876",
            label: "Phone",
            color: "hover:bg-green-600",
          },
          {
            iconName: "MessageCircle",
            href: "https://wa.me/+9509974282980",
            label: "WhatsApp",
            color: "hover:bg-green-500",
          },
        ]}
      />

      {/* Floating Action Buttons */}
      <FloatingDownloadCV />

      <Hero />
      <ExperienceTimeline items={experiences} />
      <EducationTimeline items={education} />
      <CertificatesGrid items={certificates} />
      <Projects />
      {/* <Skills />
      <Contact /> */}
    </main>
  );
}
