"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

/* animação de entrada dos blocos */
const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const StartSection = () => (
  <motion.section
    variants={stagger}
    initial="hidden"
    animate="show"
    className="w-full mt-10 mb-20 flex flex-col items-center text-center px-4"
  >
    <motion.h1
      variants={fadeUp}
      className="font-anton text-5xl sm:text-6xl leading-tight text-zinc-500"
    >
      João Leandro
      <span className="block font-light text-2xl sm:text-3xl text-zinc-500 typewriter">
        Desenvolvedor Web
      </span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="mt-4 max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed"
    >
      Formado em Análise e Desenvolvimento de Sistemas,
      <br className="hidden sm:block" />
      apaixonado por tecnologia, design e criação de soluções inteligentes.
    </motion.p>

    {/* Contatos */}
    <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3">
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
          href="https://api.whatsapp.com/send?phone=5581987666475&text=Ol%C3%A1%2C+meu+nome+%C3%A9+Jo%C3%A3o%21"
          target="_blank"
          aria-label="WhatsApp"
          className="hover:text-zinc-900 transition"
        >
          <BsWhatsapp />
        </Link>
      </div>
      <p className="text-sm text-zinc-600 select-all">joaoleandro102@gmail.com</p>
    </motion.div>

    {/* CSS do efeito de digitação em loop */}
    <style jsx>{`
      .typewriter {
        overflow: hidden;
        border-right: 0.15em solid #737373; /* cursor */
        white-space: nowrap;
        animation: typingLoop 5.5s steps(18) infinite,
                   blink 0.8s step-end infinite;
      }

      @keyframes typingLoop {
        0%   { width: 0; }
        40%  { width: 100%; }  /* digita */
        60%  { width: 100%; }  /* pausa */
        100% { width: 0; }     /* apaga */
      }

      @keyframes blink {
        0%, 100% { border-color: transparent; }
        50%      { border-color: #737373; }
      }
    `}</style>
  </motion.section>
);

export default StartSection;
