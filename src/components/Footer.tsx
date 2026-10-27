// components/Footer.tsx
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#212121] text-white mt-20">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center justify-center gap-6 text-center">
        <p className="font-medium text-lg">
          João Leandro • Desenvolvedor Full Stack
        </p>

        {/* Ícones sociais */}
        <div className="flex gap-6 text-xl">
          <Link
            href="https://github.com/JoaoLeandroo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaoleandro-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5581987666475&text=Ol%C3%A1%2C+meu+nome+%C3%A9+Jo%C3%A3o%2C+precisa+da+minha+ajuda%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition"
            aria-label="WhatsApp"
          >
            <BsWhatsapp />
          </Link>
        </div>
        <p className="text-sm text-zinc-400">
         joaoleandro102@gmail.com
        </p>

        {/* Rodapé */}
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} João Leandro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
