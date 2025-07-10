// components/Skills.tsx
"use client";

import { IconType } from "react-icons";
import { motion, type Variants } from "framer-motion";
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

/* ---------------- animações ---------------- */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------------- card ---------------- */
interface SkillsProps {
  name: string;
  icon: IconType;
  colorBg: string;
  size?: number | string;
}

const SkillsCard = ({ name, icon: Icon, colorBg, size = 24 }: SkillsProps) => (
  <motion.div
    variants={item}
    style={{ "--hover-bg": colorBg } as React.CSSProperties}
    className="
      flex flex-col items-center justify-center
      w-[180px] h-[140px] px-4 py-6 gap-2
      border border-zinc-700 rounded-xl
      text-white
      transition-all duration-300
      hover:text-white hover:scale-105 hover:shadow-md
      hover:bg-[var(--hover-bg)]
      cursor-pointer
    "
  >
    <Icon size={size} />
    <span className="font-medium text-sm">{name}</span>
  </motion.div>
);

/* ---------------- componente principal ---------------- */
const Skills = () => (
  <section className="flex flex-col items-center justify-center gap-8 px-4 py-10 text-white bg-zinc-900">
    <div className="text-center space-y-1">
      <h4 className="font-bold text-3xl ">Tech Stack</h4>
      <p className="text-sm">
        Principais tecnologias com as quais tenho experiência e desenvolvo projetos.
      </p>
    </div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-wrap justify-center items-center gap-5 max-w-6xl"
    >
      {/* Frontend */}
      <SkillsCard colorBg="#f7df1e" name="JavaScript" icon={SiJavascript} />
      <SkillsCard colorBg="#3178c6" name="TypeScript" icon={SiTypescript} />
      <SkillsCard colorBg="#61dafb" name="React" icon={SiReact} />
      <SkillsCard colorBg="#000000" name="Next.js" icon={SiNextdotjs} />
      <SkillsCard colorBg="#3776ab" name="Python" icon={SiPython} />

      {/* Estilização */}
      <SkillsCard colorBg="#e34f26" name="HTML5" icon={SiHtml5} />
      <SkillsCard colorBg="#1572b6" name="CSS3" icon={SiCss3} />
      <SkillsCard colorBg="#06b6d4" name="Tailwind CSS" icon={SiTailwindcss} />
      <SkillsCard colorBg="#7952b3" name="Bootstrap" icon={SiBootstrap} />

      {/* Build Tools */}
      <SkillsCard colorBg="#646cff" name="Vite" icon={SiVite} />

      {/* Backend */}
      <SkillsCard colorBg="#339933" name="NodeJs" icon={SiNodedotjs} />
      <SkillsCard colorBg="#000000" name="Express" icon={SiExpress} />
      <SkillsCard colorBg="#ea2845" name="Nest.js" icon={SiNestjs} />

      {/* Banco de Dados */}
      <SkillsCard colorBg="#00758f" name="MySQL" icon={SiMysql} />
      <SkillsCard colorBg="#336791" name="PostgreSQL" icon={SiPostgresql} />

      {/* DevOps */}
      <SkillsCard colorBg="#2496ed" name="Docker" icon={SiDocker} />

      {/* Controle de Versão */}
      <SkillsCard colorBg="#f05032" name="Git" icon={SiGit} />
      <SkillsCard colorBg="#181717" name="GitHub" icon={SiGithub} />

      {/* Design */}
      <SkillsCard colorBg="#f24e1e" name="Figma" icon={SiFigma} />

      {/* Segurança */}
      <SkillsCard colorBg="#000000" name="JWT" icon={SiJsonwebtokens} />
    </motion.div>
  </section>
);

export default Skills;
