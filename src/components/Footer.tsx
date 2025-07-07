// components/Footer.tsx
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {

  return (
    <footer className="w-full border-t border-zinc-200 bg-white mt-20">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center justify-center gap-6 text-center">
        {/* Nome + frase */}
        <p className="text-zinc-800 font-medium">
          João Leandro • Desenvolvedor Web
        </p>

        {/* Ícones sociais */}
        <div className="flex gap-6 text-zinc-600 text-xl">
          <Link
            href="https://github.com/seu-usuario"
            target="_blank"
            className="hover:text-zinc-900 transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            className="hover:text-zinc-900 transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="mailto:seu@email.com"
            className="hover:text-zinc-900 transition"
            aria-label="E-mail"
          >
            <FiMail />
          </Link>
        </div>

        {/* Rodapé */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} João Leandro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
