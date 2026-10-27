"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiJsonwebtokens,
  SiVite,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    title: "Front-end",
    description: "Interfaces, interação e experiência.",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#fafafa" },
      { name: "HTML5", icon: SiHtml5, color: "#fb923c" },
      { name: "CSS3", icon: SiCss3, color: "#60a5fa" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#22d3ee" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#c084fc" },
    ],
  },
  {
    title: "Back-end & dados",
    description: "Lógica, APIs e persistência.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#86c86b" },
      { name: "Python", icon: SiPython, color: "#facc15" },
      { name: "Express", icon: SiExpress, color: "#e4e4e7" },
      { name: "Nest.js", icon: SiNestjs, color: "#fb7185" },
      { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#93c5fd" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#f472b6" },
    ],
  },
  {
    title: "Ferramentas & workflow",
    description: "Da primeira ideia à entrega.",
    skills: [
      { name: "Git", icon: SiGit, color: "#fb923c" },
      { name: "GitHub", icon: SiGithub, color: "#fafafa" },
      { name: "Docker", icon: SiDocker, color: "#38bdf8" },
      { name: "Vite", icon: SiVite, color: "#a78bfa" },
      { name: "Figma", icon: SiFigma, color: "#fb7185" },
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 24 },
  },
};

const Skills = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative isolate w-full scroll-mt-20 overflow-hidden bg-zinc-950 px-4 py-16 text-zinc-100 sm:px-8 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_70%)]" />
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Meu repertório
            </span>
            <h2 id="skills-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Tech Stack<span className="text-violet-400">.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            As tecnologias e ferramentas que uso para transformar ideias em aplicações, da interface à infraestrutura.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div key={group.title} className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
              <div className="mb-6 border-b border-zinc-800 pb-5">
                <span aria-hidden="true" className="mb-3 block font-mono text-xs text-violet-400">0{index + 1}</span>
                <h3 className="text-base font-semibold tracking-tight text-zinc-100">{group.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{group.description}</p>
              </div>
              <motion.ul
                aria-label={group.title}
                variants={container}
                initial={reducedMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2"
              >
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <motion.li
                    key={name}
                    variants={reducedMotion ? undefined : item}
                    whileHover={reducedMotion ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    style={{ "--skill-color": color } as CSSProperties}
                    className="group relative flex min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-4 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-800/70"
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-[var(--skill-color)] opacity-0 transition-opacity duration-200 group-hover:opacity-70" />
                    <Icon aria-hidden="true" className="shrink-0 text-[var(--skill-color)]" size={20} />
                    <span className="min-w-0 text-xs font-medium leading-relaxed text-zinc-300 transition-colors group-hover:text-white">{name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        <p className="mt-7 text-xs leading-relaxed text-zinc-500">Sempre aprendendo, experimentando e expandindo essa coleção.</p>
      </div>
    </section>
  );
};

export default Skills;
