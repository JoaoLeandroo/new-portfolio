import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StartSection from "@/components/StartSection";

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col">
      <div className="max-w-[1920px] flex flex-col mx-auto p-4 md:px-16">
        {/* Apresentação */}
        <StartSection />
        {/* Sobre */}
        <About />
      </div>
      {/* habilidades */}
      <Skills />

      <div className="max-w-[1920px] flex flex-col mx-auto p-4 md:px-16">
        {/* Projetos */}
        <Projects />
      </div>
    </main>
  );
}
