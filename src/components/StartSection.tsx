"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JoaoLeandroo", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joaoleandro-dev/",
    icon: FiLinkedin,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5581987666475&text=Ol%C3%A1%2C+meu+nome+%C3%A9+Jo%C3%A3o%21",
    icon: BsWhatsapp,
  },
];

const areas = [
  {
    title: "Interfaces responsivas",
    detail: "React · Next.js · TypeScript",
    icon: FiLayers,
  },
  {
    title: "APIs e autenticação",
    detail: "Node.js · Express · JWT",
    icon: FiCode,
  },
  {
    title: "Integração com dados",
    detail: "PostgreSQL · Prisma",
    icon: FiDatabase,
  },
];

const StartSection = () => {
  const reducedMotion = useReducedMotion();

  const scrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;

    const projectsSection = document.getElementById("projects");
    if (!projectsSection) return;

    event.preventDefault();
    if (window.location.hash !== "#projects") {
      window.history.pushState(window.history.state, "", "#projects");
    }
    projectsSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };

  return (
    <motion.section
      aria-labelledby="intro-heading"
      variants={stagger}
      initial={reducedMotion ? false : "hidden"}
      animate="show"
      className="relative isolate mx-auto w-full max-w-6xl py-12 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-16 top-0 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-violet-500"
            />
            Desenvolvimento web · Portfólio
          </motion.p>

          <motion.h1
            id="intro-heading"
            variants={fadeUp}
            className="text-6xl font-bold leading-[1.02] tracking-tight text-zinc-950 sm:text-7xl lg:text-8xl dark:text-zinc-50"
          >
            João
            <span className="block text-violet-600 dark:text-violet-400">
              Leandro.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-5 font-mono text-base text-zinc-700 sm:text-xl dark:text-zinc-200"
          >
            <span className="sr-only">Desenvolvedor Full Stack</span>
            <span aria-hidden="true" className="typewriter-track">
              <span className="typewriter">Desenvolvedor Full Stack</span>
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg font-medium leading-relaxed tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100"
          >
            Da interface à API, construo aplicações que conectam ideias e
            pessoas.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-400"
          >
            Trabalho com React, Next.js, TypeScript e Node.js para desenvolver
            interfaces responsivas, APIs e integrações com bancos de dados.
            Formado em Análise e Desenvolvimento de Sistemas, busco novos
            desafios para contribuir e evoluir em equipe.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              Explorar projetos{" "}
              <FiArrowDown
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (abre em nova aba)`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-medium text-zinc-500 transition-colors hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-400 dark:hover:text-violet-300"
              >
                <Icon aria-hidden="true" size={16} />
                {label}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.article
          variants={fadeUp}
          aria-labelledby="featured-heading"
          className="relative min-w-0"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 rounded-[2rem] border border-violet-200/70 bg-violet-50/40 sm:-rotate-3 dark:border-violet-500/20 dark:bg-violet-500/5"
          />
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-950/5 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/20">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-violet-500"
                />
                Projeto em destaque
              </span>
              <span className="font-mono text-[10px] text-zinc-400">
                01 / seleção
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
              <Image
                src="/projects/streaming-pipocando.png"
                alt="Interface do Pipocando+, projeto de streaming de filmes e séries"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 500px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h2
                id="featured-heading"
                className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Pipocando+ Streaming
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Interface de filmes e séries com busca integrada e consumo da
                API do TMDB.
              </p>
              <ul
                aria-label="Tecnologias do projeto"
                className="mt-4 flex flex-wrap gap-2"
              >
                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <Link
                href="https://github.com/JoaoLeandroo/streaming-interface"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código do Pipocando+ no GitHub (abre em nova aba)"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-violet-700 transition-colors hover:text-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
              >
                <FiGithub aria-hidden="true" size={17} />
                Conheça o código
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.article>
      </div>

      <motion.div
        variants={fadeUp}
        className="mt-12 grid gap-5 border-y border-zinc-200 py-6 sm:mt-16 md:grid-cols-3 md:gap-6 dark:border-zinc-700"
      >
        {areas.map(({ title, detail, icon: Icon }) => (
          <div key={title} className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <Icon aria-hidden="true" size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold text-zinc-800 sm:text-sm dark:text-zinc-100">
                {title}
              </p>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs dark:text-zinc-400">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <a
        href="mailto:joaoleandro102@gmail.com"
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-xs text-zinc-500 transition-colors hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-400 dark:hover:text-violet-300"
      >
        <FiMail aria-hidden="true" />
        joaoleandro102@gmail.com
      </a>

      <style jsx>{`
        .typewriter-track {
          display: inline-block;
          width: calc(24ch + 2px);
          max-width: 100%;
          vertical-align: top;
        }
        .typewriter {
          display: block;
          box-sizing: content-box;
          width: 24ch;
          max-width: calc(100% - 2px);
          overflow: hidden;
          border-right: 2px solid #a78bfa;
          white-space: nowrap;
          animation:
            typingLoop 7s steps(24, end) infinite,
            blink 0.8s step-end infinite;
        }
        @keyframes typingLoop {
          0%,
          8% {
            width: 0;
          }
          42%,
          76% {
            width: 24ch;
          }
          95%,
          100% {
            width: 0;
          }
        }
        @keyframes blink {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: #a78bfa;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .typewriter {
            animation: none;
            border-right-color: transparent;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default StartSection;
