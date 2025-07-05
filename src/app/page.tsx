import About from "@/components/About";
import StartSection from "@/components/StartSection";

export default function Home() {
  return (
    <main className="w-full max-w-[1920px] mx-auto p-4 md:px-16 flex flex-col">
      {/* Apresentação */}
      <StartSection />
      {/* Sobre */}
      <About />
      {/* habilidades */}

      {/* Projetos */}
    </main>
  );
}
