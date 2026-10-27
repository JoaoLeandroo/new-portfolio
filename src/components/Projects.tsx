import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { projects, type Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-violet-500/60">
    <Link href={`/projetos/${project.slug}`} aria-label={`Conhecer o projeto ${project.title}`} className="relative isolate block aspect-[16/10] overflow-hidden border-b border-zinc-100 bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-800">
      <Image src={project.imgSrc} alt={`Prévia do projeto ${project.title}`} fill className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105" sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 384px" />
    </Link>
    <div className="flex flex-1 flex-col p-6">
      <p className="mb-2 text-[11px] font-medium text-violet-700 dark:text-violet-300">{project.category}</p>
      <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <ul aria-label="Tecnologias utilizadas" className="mb-5 mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => <li key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tech}</li>)}
      </ul>
      <div className="mt-auto">
        <Link href={`/projetos/${project.slug}`} className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-violet-700 hover:text-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-violet-300">
          Conheça o projeto <FiArrowRight aria-hidden="true" />
        </Link>
        <div className="flex flex-wrap items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title} (nova aba)`} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-300"><FiExternalLink aria-hidden="true" /> Demonstração <FiArrowUpRight aria-hidden="true" /></a>}
          <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} no GitHub (nova aba)`} className="inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-medium text-zinc-600 hover:text-violet-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-300 dark:hover:text-violet-300"><FiGithub aria-hidden="true" size={16} /> Código-fonte</a>
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 py-16 sm:py-24">
    <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-700 sm:mb-12">
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-500" />Trabalhos selecionados</span>
      <h2 id="projects-heading" className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">Projetos<span className="text-violet-500">.</span></h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">Uma seleção que reúne interfaces, APIs e processamento de arquivos. Conheça o problema de cada projeto, o que foi construído e as tecnologias utilizadas.</p>
    </header>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
    </div>
    <div className="mb-6 mt-12">
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Outras experiências</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Projetos complementares que exploram interfaces temáticas, catálogos de conteúdo e integração com serviços de e-mail.</p>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
    </div>
    <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center dark:border-zinc-700">
      <p className="max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Outros experimentos e projetos de aprendizado estão no meu GitHub.</p>
      <a href="https://github.com/JoaoLeandroo?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md text-sm font-medium text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-violet-300"><FiGithub aria-hidden="true" />Explorar repositórios<FiArrowUpRight aria-hidden="true" /></a>
    </div>
  </section>
);

export default Projects;
