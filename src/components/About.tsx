"use client";

import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight, FiBookOpen, FiCode, FiCompass } from "react-icons/fi";

const interests = [
  "Inteligência Artificial", "Tecnologia", "Design Responsivo",
  "Back-end", "Front-end", "Inovação", "Esportes",
];

const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-2 py-14 sm:px-4 sm:py-20"
    >
      <header className="mb-10 flex flex-col gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-zinc-700">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Além do código
          </span>
          <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Um pouco sobre mim<span className="text-violet-500">.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Curiosidade para aprender.<br />
          Dedicação para transformar ideias em realidade.
        </p>
      </header>

      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="max-w-2xl text-xl font-medium leading-relaxed tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
            Sou João Leandro, desenvolvedor web movido pela curiosidade e pela vontade de criar soluções que façam sentido para as pessoas.
          </p>

          <div className="mt-8 space-y-7">
            <article className="grid grid-cols-[32px_minmax(0,1fr)] gap-4">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300"><FiCompass size={17} /></span>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tudo começou com curiosidade</h3>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Em 2022, amigos que compartilhavam comigo o interesse pelo jogo Rose Online me apresentaram ao universo da programação. O que começou como curiosidade se tornou uma jornada de aprendizado e criação.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-[32px_minmax(0,1fr)] gap-4">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300"><FiCode size={17} /></span>
              <div>
                <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Da ideia à experiência</h3>
                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  Meu foco é o desenvolvimento front-end com JavaScript e seu ecossistema, criando interfaces interativas e funcionais. Também tenho conhecimentos em Python e sigo explorando ferramentas para construir soluções cada vez melhores.
                </p>
              </div>
            </article>
          </div>

          <p className="mt-8 border-l-2 border-violet-400 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Acredito na tecnologia como uma forma de conectar pessoas e resolver problemas. Por isso, estou sempre aberto a novos desafios e oportunidades para crescer.
          </p>
        </div>

        <aside aria-label="Formação e interesses" className="flex min-w-0 flex-col gap-5">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">Formação</span>
              <FiBookOpen aria-hidden="true" className="text-violet-500" size={20} />
            </div>
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100">Análise e Desenvolvimento de Sistemas</h3>
            <p className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Graduação concluída
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6 sm:p-7 dark:border-zinc-700">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">O que me inspira</h3>
              <FiArrowUpRight aria-hidden="true" className="text-zinc-400" size={19} />
            </div>
            <p className="mb-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Interesses que alimentam minha criatividade dentro e fora do desenvolvimento.</p>
            <ul className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li key={interest} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{interest}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </motion.section>
  );
};

export default About;
