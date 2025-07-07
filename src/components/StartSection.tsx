import Link from "next/link";

const StartSection = () => {
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="font-anton text-5xl sm:text-6xl leading-tight text-zinc-800">
        João Leandro
        <span className="block font-light text-2xl sm:text-3xl text-zinc-500 mt-2">
          Desenvolvedor Web
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">
        Formado em Análise e Desenvolvimento de Sistemas,<br className="hidden sm:block" />
        apaixonado por tecnologia, design e criação de soluções inteligentes.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="#"
          className="px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition"
        >
          Ver projetos
        </Link>
        <Link
          href="#contact"
          className="px-6 py-2 border border-zinc-800 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
        >
          Entrar em contato
        </Link>
      </div>
    </section>
  );
};

export default StartSection;
