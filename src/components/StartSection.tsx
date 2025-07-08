import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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
        Formado em Análise e Desenvolvimento de Sistemas,
        <br className="hidden sm:block" />
        apaixonado por tecnologia, design e criação de soluções inteligentes.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3">
  {/* Ícones sociais */}
  <div className="flex gap-6 text-2xl text-zinc-400">
    <Link
      href="https://github.com/JoaoLeandroo"
      target="_blank"
      aria-label="GitHub"
      className="hover:text-zinc-900 transition"
    >
      <FiGithub />
    </Link>

    <Link
      href="https://www.linkedin.com/in/joaoleandro10/"
      target="_blank"
      aria-label="LinkedIn"
      className="hover:text-zinc-900 transition"
    >
      <FiLinkedin />
    </Link>

    <Link
      href="https://api.whatsapp.com/send/?phone=5581987666475&text=Ol%C3%A1%2C+meu+nome+%C3%A9+Jo%C3%A3o%2C+precisa+da+minha+ajuda%3F&type=phone_number&app_absent=0"
      target="_blank"
      aria-label="WhatsApp"
      className="hover:text-zinc-900 transition"
    >
      <BsWhatsapp />
    </Link>
  </div>

  {/* E-mail como texto */}
  <p className="text-sm text-zinc-600 mt-2 select-all">
    joaoleandro102@gmail.com
  </p>
</div>
    </section>
  );
};

export default StartSection;
