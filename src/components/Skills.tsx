// Skills.tsx
import { IconType } from "react-icons";
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

interface SkillsProps {
  name: string;
  icon: IconType;
  colorBg: string;
  size?: number | string;
}

const SkillsCard = ({ name, icon: Icon, colorBg, size = 24 }: SkillsProps) => (
  <div
    /* define a CSS variable só para este elemento */
    style={{ "--hover-bg": colorBg } as React.CSSProperties}
    className="
      flex flex-col items-center justify-center
      w-[200px] px-4 py-6 border border-zinc-300 rounded-lg gap-2
      transition-colors duration-300
      hover:border-[var(--hover-bg)] hover:text-[var(--hover-bg)]
    "
  >
    <Icon size={size} />
    <span>{name}</span>
  </div>
);

const Skills = () => (
  <section className="flex flex-col items-center justify-center gap-4">
    <div className="mt-10 text-center">
      <h2 className="font-bold text-2xl">Tech Skills</h2>
      <p>Explore as tecnolgias que domino!</p>{" "}
    </div>
    <div className="flex flex-wrap justify-center items-center gap-4">
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
    </div>
  </section>
);

export default Skills;
