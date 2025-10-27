import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      {/* Work, Experience, Skills sections will slot here next */}
      <Contact />
    </main>
  );
}
